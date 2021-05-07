import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestScheduler } from "rxjs/testing";
import { UnSubComponent } from './un-sub.component';

describe('UnSubComponent', () => {
  let component: UnSubComponent;
  let fixture: ComponentFixture<UnSubComponent>;
  let scheduler: TestScheduler

  beforeEach(async () => {
    scheduler = new TestScheduler(((actual, expected) => {
      expect(actual).toBe(expected);
    }))
    await TestBed.configureTestingModule({
      declarations: [ UnSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit unsubscribe on destroy',() => {
    scheduler.run(({expectObservable}) => {
      const expectedMarble = '-|'
      expectObservable(component.unSubscribe$).toBe(expectedMarble)
    });
    fixture.destroy();
  })
});
