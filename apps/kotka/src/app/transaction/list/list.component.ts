import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import {
  DatatableComponent,
  GetRowsParams,
} from '@luomus/kotka/ui/datatable';
import { ColDef, CsvExportParams } from '@ag-grid-community/core';
import { ReplaySubject, throwError } from 'rxjs';
import { GraphQLClientService } from '@luomus/store/client';
import { catchError, switchMap, takeUntil, tap, timeout } from 'rxjs/operators';
import { UnSubComponent } from '../../shared/un-sub/un-sub.component';
import { Router } from '@angular/router';
import { DatatableService } from '../../services/datatable.service';
import { HttpClient } from '@angular/common/http';
import { FormSchemaService } from '../../services/form-schema.service';
import { IDatasource } from '@ag-grid-community/core/dist/es6/interfaces/iDatasource';
import { Transaction, isLangObject, ListResponse } from '@luomus/shared/models';

interface QueryResult {
  viewerBasicAuth: {
    listHRAtransaction: {
      totalItems: number;
      member: any[];
    };
  };
}

const uri = 'https://store-dev.luomus.fi/transaction';
const auth = 'Basic S0UuMzpwYXNzd29yZA==';

@Component({
  selector: 'kotka-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent extends UnSubComponent implements OnInit {
  allCols: ColDef[];
  activeCols: ColDef[] = [];
  selectedCols: string[] = [
    'id',
    'transactionStatus',
    'owner',
    'collectionID',
    'localResearcher',
    'correspondentOrganization',
    'correspondentPerson',
    'externalTransactionID',
    'transactionRequestReceived',
    'permits.permitType',
  ];
  public loading?: boolean;
  public count = 0;

  public datasource?: IDatasource;
  private paramSource = new ReplaySubject<GetRowsParams>(1);

  @ViewChild(DatatableComponent)
  private datatable?: DatatableComponent;

  constructor(
    private datatableService: DatatableService,
    private graphQLClientService: GraphQLClientService,
    private formSchema: FormSchemaService,
    private cdr: ChangeDetectorRef,
    private httpClient: HttpClient,
    private router: Router
  ) {
    super();
    this.allCols = this.datatableService.getColDefs(
      formSchema.getFormSchema('transaction')
    );
    this.onColumnChange();
    this.paramSource
      .pipe(
        takeUntil(this.unSubscribe$),
        switchMap((params) => {
          const pageSize = params.endRow - params.startRow;
          const page = Math.floor(params.endRow / pageSize);
          const sort = params.sortModel
            .map((s) => `${s.colId} ${s.sort}`)
            .join(',');

          this.loading = typeof this.loading === 'undefined';
          this.cdr.detectChanges();

          return this.httpClient
            .get<ListResponse<Transaction>>(
              `${uri}?page=${page}&page_size=${pageSize}&sort=${encodeURIComponent(
                sort
              )}`,
              {
                headers: {
                  Authorization: auth,
                },
              }
            )
            .pipe(
              tap((data) => {
                this.loading = false;
                this.count = data.totalItems;
                const rows = data.member.map((item) => this.toFlat(item));

                params.successCallback(rows, data.totalItems);
                this.cdr.detectChanges();
              }),
              timeout(10000),
              catchError((e) => {
                this.loading = false;
                this.count = 0;

                this.cdr.detectChanges();
                params.failCallback();

                return throwError(e);
              })
            );
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.updateDatasource();
  }

  updateDatasource() {
    this.datasource = {
      rowCount: undefined,
      getRows: (params) => {
        this.paramSource.next(params);
      },
    };
  }

  onColumnChange() {
    this.activeCols = this.selectedCols.reduce((active, selected) => {
      const col = this.allCols.find((c) => c.field === selected);
      if (col) {
        active.push(col);
      }
      return active;
    }, [] as ColDef[]);
  }

  onFormUpdate() {
    this.loading = undefined;
    this.updateDatasource();
  }

  onRowClick({ data }: { data: Transaction }) {
    this.router.navigate(['transactions', 'edit'], {
      queryParams: { uri: data.id },
    });
  }

  onDownload(type: 'simple' | 'full') {
    this.datatable?.gridApi?.exportDataAsCsv({
      allColumns: true,
      onlySelected: false,
      skipFooters: true,
      skipHeader: false,
      onlySelectedAllPages: false,
    } as CsvExportParams);
  }

  onSelectedColsChange(selected: string[], updateDatable = true) {
    this.selectedCols = selected;
    if (
      updateDatable &&
      this.datatable?.gridApi &&
      this.datatable.gridColumnApi
    ) {
      this.onColumnChange();
      this.datatable.gridApi.setColumnDefs(this.activeCols);
      this.datatable.gridApi.refreshCells({ force: true });
      this.datatable.gridColumnApi.moveColumns(selected, 0);
    }
  }

  private toFlat(
    data: any,
    result: Record<string, string[]> = {},
    parent = ''
  ) {
    const isObj = data !== null && typeof data === 'object';

    if (!isObj) {
      if (!result[parent]) {
        result[parent] = [];
      }
      result[parent] = data;
      return;
    }

    Object.keys(data).forEach((key) => {
      const fullKey = parent ? parent + '.' + key : key;
      if (isLangObject(data[key])) {
        result[fullKey] = Object.values(data[key]);
      } else if (Array.isArray(data[key])) {
        data[key].forEach((item: any) => this.toFlat(item, result, fullKey));
      } else if (data[key] !== null && typeof data[key] === 'object') {
        this.toFlat(data[key], result, fullKey);
      } else if (parent) {
        if (!result[fullKey]) {
          result[fullKey] = [];
        }
        result[fullKey].push(data[key]);
      } else {
        result[fullKey] = data[key];
      }
    });
    return result;
  }
}
