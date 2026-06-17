import { MKVDdReasonEnum } from './';
import { MKVExternalPopulationImpactOnRedListStatusEnum } from './';
import { MKVPossiblyREEnum } from './';
import { MKVReasonForStatusChangeEnum } from './';
import { MXIucnStatuses } from './';
import { MKVStateEnum } from './';
import { MXTypeOfOccurrenceEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class IucnRedListEvaluation {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  actionNotes?: string;
  borderGain?: boolean;
  borderGainNotes?: string;
  countOfOccurrencesMax?: string;
  countOfOccurrencesMin?: string;
  countOfOccurrencesNotes?: string;
  /**
   * <p><b>Populaatiokoon pieneneminen minkä tahansa vaihtoehdon 1–4 mukaan:</b></p>
   *
   * <p> <b>A1</b> Havaittu, arvioitu, päätelty tai epäilty populaatiokoon pieneneminen CR vähintään 90 %, EN vähintään 70 % ja VU vähintään 50 % viimeisten kymmenen vuoden tai kolmen sukupolven aikana (valitaan pitempi jakso) tilanteessa, jossa pienenemisen syyt ovat selvästi peruttavissa JA tunnettuja JA loppuneita, perustuen johonkin seuraavista vaihtoehdoista (a–e): </p>
   *
   * <ul>
   * <li><b>(a)</b> suora havainto</li>
   * <li><b>(b)</b> taksonille käyttökelpoinen runsausindeksi</li>
   * <li><b>(c)</b> esiintymisalueen tai levinneisyysalueen pieneneminen ja/tai elinympäristön laadun heikkeneminen</li>
   * <li><b>(d)</b> todellinen tai mahdollinen hyödyntäminen</li>
   * <li><b>(e)</b> vieraiden taksonien, risteytymisen, tautien, saasteiden, kilpailijoiden tai loisten haitalliset vaikutukset.</li>
   * </ul>
   *
   * <p> <b>A2</b> Havaittu, arvioitu, päätelty tai epäilty populaatiokoon pieneneminen CR vähintään 80 %, EN vähintään 50 % ja VU vähintään 30 % viimeisten kymmenen vuoden tai kolmen sukupolven aikana (valitaan pitempi jakso) tilanteessa, jossa pieneneminen ja sen syyt eivät ehkä ole loppuneet TAI niitä ei tunneta TAI ne eivät ehkä ole peruttavissa, perustuen yllä oleviin vaihtoehtoihin (a–e). </p>
   *
   * <p> <b>A3</b> Populaatiokoon pieneneminen CR vähintään 80 %, EN vähintään 50 % ja VU vähintään 30 %, jonka ennustetaan tai epäillään tapahtuvan tulevien kymmenen vuoden tai kolmen sukupolven aikana (valitaan pitempi jakso, korkeintaan 100 vuotta), perustuen yllä oleviin vaihtoehtoihin (b–e). </p>
   *
   * <p> <b>A4</b> Havaittu, arvioitu, päätelty, ennustettu tai epäilty populaatiokoon pieneneminen CR vähintään 80 %, EN vähintään 50 % ja VU vähintään 30 % kymmenen vuoden tai kolmen sukupolven ajanjaksolla (valitaan pitempi; tulevaisuuteen maksimi 100 vuotta), johon sisältyy sekä mennyttä että tulevaa, ja pienenemisen syyt eivät ole loppuneet TAI niitä ei tunneta TAI ne eivät ehkä ole peruttavissa, perustuen yllä oleviin vaihtoehtoihin (a–e). </p>
   */
  criteriaA?: string;
  criteriaANotes?: string;
  /**
   * <p><b>Maantieteellinen alue tarkasteltuna joko levinneisyysalueen (B1) tai esiintymisalueen (B2) tai molempien mukaan.</b></p>
   *
   * <p><b>B1</b> Levinneisyysalueen arvioidaan olevan < 100 km² CR, < 5 000 km² EN, < 20 000 km² VU JA vähintään kaksi kohdista a–c täyttyy:</p>
   *
   * <p><b>a.</b> esiintyminen on voimakkaasti pirstoutunut TAI vain yksi CR, enintään viisi EN tai enintään kymmenen VU esiintymispaikkaa tunnetaan</p>
   *
   * <p><b>b.</b> havaittu, arvioitu tai ennustettu jatkuva väheneminen joissakin seuraavista:</p>
   * <ul>
   * <li><b>(i)</b> levinneisyysalue</li>
   * <li><b>(ii)</b> esiintymisalue</li>
   * <li><b>(iii)</b> soveliaan elinympäristön määrä ja/tai laatu</li>
   * <li><b>(iv)</b> esiintymien tai osapopulaatioiden määrä</li>
   * <li><b>(v)</b> lisääntymiskykyisten yksilöiden määrä</li>
   * </ul>
   *
   * <p><b>c.</b> erittäin suuret vaihtelut joissakin seuraavista:</p>
   * <ul>
   * <li><b>(i)</b> levinneisyysalue</li>
   * <li><b>(ii)</b> esiintymisalue</li>
   * <li><b>(iii)</b> esiintymien tai osapopulaatioiden määrä</li>
   * <li><b>(iv)</b> lisääntymiskykyisten yksilöiden määrä</li>
   * </ul>
   *
   * <p><b>B2</b> Esiintymisalueen arvioidaan olevan < 10 km² CR, < 500 km² EN, < 2 000 km² VU JA vähintään kaksi kohdista a–c täyttyy:</p>
   *
   * <p><b>a.</b> esiintyminen on voimakkaasti pirstoutunut TAI vain yksi CR, enintään viisi EN tai enintään kymmenen VU esiintymispaikkaa tunnetaan</p>
   *
   * <p><b>b.</b> havaittu, arvioitu tai ennustettu jatkuva väheneminen joissakin seuraavista:</p>
   * <ul>
   * <li><b>(i)</b> levinneisyysalue</li>
   * <li><b>(ii)</b> esiintymisalue</li>
   * <li><b>(iii)</b> soveliaan elinympäristön määrä ja/tai laatu</li>
   * <li><b>(iv)</b> esiintymien tai osapopulaatioiden määrä</li>
   * <li><b>(v)</b> lisääntymiskykyisten yksilöiden määrä</li>
   * </ul>
   *
   * <p><b>c.</b> erittäin suuret vaihtelut joissakin seuraavista:</p>
   * <ul>
   * <li><b>(i)</b> levinneisyysalue</li>
   * <li><b>(ii)</b> esiintymisalue</li>
   * <li><b>(iii)</b> esiintymien tai osapopulaatioiden määrä</li>
   * <li><b>(iv)</b> lisääntymiskykyisten yksilöiden määrä</li>
   * </ul>
   */
  criteriaB?: string;
  criteriaBNotes?: string;
  /**
   * <p><b>Pieni ja jatkuvasti taantuva populaatio.</b> Populaatiokoko < 250 CR; < 2 500 EN; < 10 000 VU lisääntymiskykyistä yksilöä SEKÄ jompikumpi seuraavista C1 TAI C2:</p>
   *
   * <p><b>C1</b> Arvioitu jatkuva taantuminen:</p>
   *
   * <p>CR vähintään 25 %:n jatkuva väheneminen kolmen vuoden tai yhden sukupolven aikana (valitaan pitempi jakso, tulevaisuuteen korkeintaan 100 vuotta)</p>
   *
   * <p>EN vähintään 20 %:n jatkuva väheneminen viiden vuoden tai kahden sukupolven aikana (valitaan pitempi jakso, tulevaisuuteen korkeintaan 100 vuotta)</p>
   *
   * <p>VU vähintään 10 %:n jatkuva väheneminen kymmenen vuoden tai kolmen sukupolven aikana (valitaan pitempi jakso, tulevaisuuteen korkeintaan 100 vuotta)</p>
   *
   * <p><b>C2</b> Havaittu, ennustettu tai päätelty populaatiokoon jatkuva taantuminen JA vähintään a TAI b:</p>
   *
   * <p><b>a.</b> populaation rakenne joko i TAI ii:</p>
   *
   * <ul>
   * <li><b>(i)</b> missään osapopulaatiossa ei ole yli 50 CR, yli 250 EN ja yli 1 000 VU lisääntymiskykyistä yksilöä</li>
   * <li><b>(ii)</b> vähintään 90 % CR, vähintään 95 % EN tai kaikki VU lisääntymiskykyiset yksilöt ovat yhdessä osapopulaatiossa</li>
   * </ul>
   *
   * <p><b>b.</b> erittäin suuret vaihtelut lisääntymiskykyisten yksilöiden määrässä</p>
   */
  criteriaC?: string;
  criteriaCNotes?: string;
  /**
   * <p><b>D1</b> Populaatiokoko (lisääntymiskykyiset yksilöt) < 50 CR; < 250 EN; < 1 000 VU</p>
   *
   * <p><b>D2</b> Populaatio on hyvin pieni tai rajoittunut. Esiintymisalue (AOO) yleensä alle 20 km² TAI populaatiolla yleensä korkeintaan 5 esiintymispaikkaa JA populaatio on siten altis äkillisille ja ennustamattomille ihmistoiminnan tai sattuman vaikutuksille ja voi lyhyessä ajassa muuttua äärimmäisen uhanalaiseksi tai jopa hävitä = VU.</p>
   *
   * <p>Jos luokka on jommankumman D-kriteerin mukaan CR tai EN, merkitään pelkkä D. Jos VU, merkitään D1 tai D2.</p>
   */
  criteriaD?: string;
  criteriaDNotes?: string;
  /**
   * <p><b>E</b> Kvantitatiivisen analyysin perusteella todennäköisyys hävitä luonnosta on CR vähintään 50 % kymmenen vuoden tai kolmen sukupolven aikana (valitaan pitempi, korkeintaan 100 vuotta); EN vähintään 20 % kahdenkymmenen vuoden tai viiden sukupolven aikana (valitaan pitempi, korkeintaan 100 vuotta) ja VU vähintään 10 % sadan vuoden aikana.</p>
   */
  criteriaE?: string;
  criteriaENotes?: string;
  criteriaForStatus?: string;
  criteriaForStatusNotes?: string;
  criteriaNotes?: string;
  /**
   * <ul> <li><b>1. Tuntematon alkuperä.</b> Taksoni tunnetaan vain yhdestä tai muutamasta yksilöstä/ näyteestä, joiden löytöpaikkaa ei tunneta tai paikkatiedot ovat hyvin epätarkat, joten taksonin tilaa ei voida päätellä. </li><li><b>2. Taksonominen epävarmuus.</b> Tietojen vähäisyys voi olla seurausta taksonomisesta epävarmuudesta eli levinneisyydestä, ekologiasta, tilasta, ja uhkista on vähän tietoa, koska vähäinen näytteiden ja/ tai havaintojenmäärä johtuu siitä että taksonia edustaa poikkeava yksilö, hybridi, harvinainen värimuoto tai muun lajin alalajia. Se voi selittää tiedon puutetta yhtä todennäköisesti tai todennäköisemmin kuin se, että taksoni on aidosti harvinainen, uhanalainen tai riittämättömästi etsitty. Tästä on kuitenkin erotettava ne taksonit, joiden taksonomiassa/ taksonomisessa asemassa on jotain epäselvää: ne on joko arvioitava normaalisti tai jätettävä arvioinnin ulkopuolelle (NE) ja tästä arviointilistalle mukaan ottamisesta on päätettävä arvioinnin vaiheessa 1 (luku 2). </li><li><b>3. Puutteelliset tiedot.</b> Tiedot ovat riittämättömät arviointikriteerien soveltamiseksi eli kaikki muut syyt tietojen vähäisyyteen. </li></ul>
   */
  ddReason?: MKVDdReasonEnum;
  ddReasonNotes?: string;
  decreaseDuringPeriod?: string;
  decreaseDuringPeriodNotes?: string;
  distributionAreaMax?: string;
  /**
   * EOO, esiintymispaikkojen ulkopuolelle vedetyn rajaviivan sisällä olevan alueen pinta-ala. Merkitäksesi "enintään" jätä alaraja tyhjäksi. Merkitäksesi "vähintään" jätä yläraja tyhjäksi. Täsmällinen luku merkitään molempiin.
   */
  distributionAreaMin?: string;
  distributionAreaNotes?: string;
  editNotes?: string;
  endangermentReasonNotes?: string;
  evaluatedTaxon: string;
  /**
   * <p>Tarkastelujakso = 3 x sukupolven pituus A-kriteerissä. Minimi 10 vuotta lyhytikäisillä lajeilla, maksimi 100 vuotta pitkäikäisillä lajeilla.</p>
   * <p>C-kriteerissä tarkastelujakson pituus vaihtelee luokasta riippuen 1-3 sukupolvea tai 3,5, tai 10 v.</p>
   * <p>Kenttä on tarkoitettu ensisijaisesti A-kriteeriä varten. Jos on samaan aikaan käytössä myös C-kriteeri, merkitse siihen liittyvä jakson pituus kommenttikenttään.</p>
   */
  evaluationPeriodLength?: string;
  evaluationPeriodLengthNotes?: string;
  evaluationYear: string;
  /**
   * <p>Arvioinnin viimeisessä vaiheessa otetaan huomioon Suomen ulkopuolella olevien populaatioiden mahdollinen vaikutus arvioitavaan Suomen populaatioon. Tarvittaessa luokkaa alennetaan tai korotetaan sen perusteella (ks. IUCN-ohje). Luokkaa alennetaan esim., jos ulkopuolelta saatava täydennys voi vähentää lajin häviämisriskiä. Luokkaa korotetaan esim., jos Suomessa on alueellinen nielu, joka on riippuvainen ulkopuolisesta saavunnasta, joka on vähenemässä.</p>
<p>Alennettu tai korotettu luokka on lajin lopullinen uhanalaisuusluokka.</p>
   */
  externalPopulationImpactOnRedListStatus?: MKVExternalPopulationImpactOnRedListStatusEnum;
  externalPopulationImpactOnRedListStatusNotes?: string;
  /**
   * <p>Onko populaatio voimakkaasti pirstoutunut? = enemmän kuin puolet yksilöistä (tai enemmän kuin puolet asutusta elinympäristöstä) on pienissä eristyneissä laikuissa, jotka ovat </p> <li>liian pieniä ylläpitämään elinvoimaista populaatiota ja</li> <li>kaukana muista elinympäristölaikuista suhteessa lajin leviämiskykyyn.</li>
   */
  fragmentedHabitats?: boolean;
  fragmentedHabitatsNotes?: string;
  /**
   * Vuosissa. (Ks. IUCN-ohje).
   */
  generationAge?: number;
  generationAgeNotes?: string;
  groundsForEvaluationNotes?: string;
  habitatGeneralNotes?: string;
  habitatNotes?: string;
  /**
   * Uhanalaisuuden syyt (aiemmat ja nykyiset syyt)
   */
  hasEndangermentReason?: string[];
  hasOccurrence?: string[];
  /**
   * Uhkatekijät (tulevat tekijät)
   */
  hasThreat?: string[];
  /**
   * Lisääntymiskykyisten yksilöiden määrä (ks. IUCN-ohje)
   */
  individualCountMax?: string;
  /**
   * Lisääntymiskykyisten yksilöiden määrä (ks. IUCN-ohje). Merkitäksesi "enintään" jätä alaraja tyhjäksi. Merkitäksesi "vähintään" jätä yläraja tyhjäksi. Täsmällinen luku merkitään molempiin kohtiin.
   */
  individualCountMin?: string;
  individualCountNotes?: string;
  lastModified?: string;
  lastModifiedBy?: string;
  /**
   * Merkitään tiedot mahdollisesti hävinneiden tai hävinneiden lajien viimeisistä havainnosta.
   */
  lastSightingNotes?: string;
  legacyPublications?: string;
  locked?: boolean;
  lsaRecommendation?: boolean;
  lsaRecommendationNotes?: string;
  occurrenceAreaMax?: string;
  /**
   * AOO, asuttujen 2 x 2 km ruutujen pinta-ala. Merkitäksesi "enintään" jätä alaraja tyhjäksi. Merkitäksesi "vähintään" jätä yläraja tyhjäksi. Täsmällinen luku merkitään molempiin.
   */
  occurrenceAreaMin?: string;
  occurrenceAreaNotes?: string;
  occurrenceNotes?: string;
  occurrenceRegionsNotes?: string;
  occurrenceRegionsPrivateNotes?: string;
  /**
   * <p>Suulliset tai kirjalliset tiedonannot, henkilökohtaiset tiedostot, muistiinpanot tai julkaisemattomat aineistot, verkkosivut, keskustelupalstat ja tyypillisesti yhtä lajia koskevat epävirallisemmat lähteet</p> <p><b>Viittausohjeita:</b></p> 			 <p>Meikäläinen Matti suullinen tiedonanto 2016</p> <p>Virtanen Terhi, julkaisematon selvitysaineisto Hollolasta 2015</p> <p>Heikkinen Heikki, havaintotiedonanto Nisäkäsharrastajien Nisäkäsverkko-sähköpostilista 3.5.2014 (http://www.myrsky.com/mammals/nisakasverkko.htm)</p> <p>Nämä vitteet tallentuvat vain lomakkelle, niistä ei synny julkaisua.</p>
   */
  otherSources?: string;
  /**
   * Tyhjä = Tuntematon
   */
  percentageOfGlobalPopulation?: number;
  percentageOfGlobalPopulationNotes?: string;
  /**
   * Lisääntymiskykyisten yksilöiden määrä (ks. IUCN-ohje). Kenttä on tarkoitettu ensisijaisesti A-kriteeriä varten. Jos on samaan aikaan käytössä myös C-kriteerin eri pituinen tarkastelujakso, merkitse sen alun ja lopun populaatiokoko kommenttikenttään. Kommenttikentän käyttö koskee myös tilannetta, jossa on käytössä useita A:n alakriteereitä (A1-A4). Ensisijaisesti lomakkeelle merkitään lopulliseen uhanalaisuusluokkaan johtaneet tiedot.
   */
  populationSizePeriodBeginning?: string;
  populationSizePeriodEnd?: string;
  populationSizePeriodNotes?: string;
  /**
   * Onko vaihtelun suuruusluokka vähintään 10-kertainen?
   */
  populationVaries?: boolean;
  populationVariesNotes?: string;
  possiblyRE?: MKVPossiblyREEnum;
  possiblyRENotes?: string;
  /**
   * <p>Lisämääreet:</p>
   * <ul>
   * <li><b>v - </b>yksittäiset <b>vanhat puut</b></li>
   * <li><b>lu - luonnontilaiset</b> ja luonnontilaisen kaltaiset metsät</li>
   * <li><b>h - harjumetsät</b></li>
   * <li><b>p - metsäpaloalueet</b></li>
   * <li><b>j - jalopuuesiintymä</b></li>
   * <li><b>pa - paahteinen</b></li>
   * <li><b>va - varjoinen</b></li>
   * <li><b>ca - kalkkivaikutteinen</b></li>
   * <li><b>ra - sijaitsee rannalla</b> (lajin esiintyminen on sidoksissa rannan läheisyyteen)</li>
   * <li><b>lk - kalattomat lammet</b></li>
   * <li><b>ka - karut kalliot ja kivikot</b></li>
   * <li><b>ke - keskiravinteiset kalliot ja kivikot</b></li>
   * </ul>
   */
  primaryHabitat?: string;
  /**
   * <p>Tieteelliset artikkelit, kirjat, julkaistut ja julkaisemattomat raportit,
   * tietokannat, rekisterit, atlas-sivustot ym. vakiintuneet lähteet</p>
   * <p><b>Viittausohjeita:</b></p> 			<p><b>Julkaisu</b>: Huhtinen, S., Salo, P., Haikonen, V.& von Bonsdorff, T. 2010: Kotelosienet. - Teoksessa: Rassi, P., Hyvärinen, E., Juslén, A. & Mannerkoski I. (toim.), Suomen lajien uhanalaisuus, Punainen kirja 2010: 272-277. Ympäristöministeriö & Suomen ympäristökeskus, Helsinki. 685 s.</p> 			<p><b>Tietokanta</b>: Noyes, J. S. 2014: Universal Chalcidoidea Database. – World Wide Web electronic publication. Accessed at http//www.nhm.ac.uk/chalcidoids on 18 December 2014.</p>
   */
  publication?: string[];
  /**
   * <p><b>Aito muutos (uusi):</b> muutos johtuu aidosta muutoksesta, joka on tapahtunut edellisen arvioinnin jälkeen (populaation tila huonontunut/ parantunut tms.)</p>
<p><b>Aito muutos (ennen edellistä arviointia):</b> Aito muutos (ennen edellistä arviointia): luokkaa käytetään taksoneihin, jotka arvioidaan vähintään kolmatta kertaa ja joista lasketaan uhanalaisuusindeksi (Red List Index). Muutos on tapahtunut ennen edellistä arviointia, mutta ensimmäisen jälkeen. Muutos on havaittu uuden tiedon perusteella ja mikäli se olisi ollut käytettävissä aiemmin, uusi luokka olisi annettu jo aiemmalla kerralla (aiemmilla kerroilla). Muutoksen ajankohta on dokumentoitava.</p>
<p><b>Kriteerien muutos:</b> kategorian muutos johtuu arviointikriteerien muutoksista.</p>
<p><b>Uusi tieto:</b> muutos johtuu siitä, että taksonin statuksesta on saatu uutta tietoa/tieto on lisääntynyt; esim. populaatio on osoittautunut aiempaa käsitystä suuremmaksi tai pienemmäksi.</p>
<p><b>Taksonominen muutos:</b> kategorian muutos johtuu taksonomisen aseman muuttumisesta; taksoni on vastikään jaettu kahtia (alalajista laji) tai yhdistetty toisen kanssa tai kuvattu uutena tieteelle tai taksoni ei ole enää validi (pidetään nykyisin hybridinä, varianttina tms.).</p>
<p><b>Virhe:</b> luokka on väärä, koska arvioinnissa on aiemmin tapahtunut virhe.</p>
<p><b>Virheellinen tieto:</b> aiempi luokka on valittu virheellisen tiedon vuoksi väärin (esim. määritysvirhe).</p>
<p><b>Muu syy:</b> muutos johtuu muusta syystä kuin aiemmista ja/tai vaatii lisäselvitystä (esimerkiksi arvioijien suhtautuminen epävarmuuteen muuttuu tai arvioinnin tulkintaohjeet ovat muuttuneet.</p>
   */
  reasonForStatusChange?: MKVReasonForStatusChangeEnum[];
  reasonForStatusChangeNotes?: string;
  /**
   * Tätä ei täytetä kuluvalle vuodelle. Muuttujaa käytetään ainoastaan tarvittaessa jälkikäteen uhanalaisuusindeksin laskemisessa. Jos tätä arviointia jälkikäteen halutaan korjata, arvioinnissa annettua luokkaa ei muuteta, vaan annetaan tässä korjattu luokka.
   */
  redListIndexCorrection?: MXIucnStatuses;
  redListIndexCorrectionNotes?: string;
  redListStatus: MXIucnStatuses;
  redListStatusAccuracyNotes?: string;
  redListStatusMax?: MXIucnStatuses;
  redListStatusMin?: MXIucnStatuses;
  redListStatusNotes?: string;
  regionallyThreatenedNotes?: string;
  regionallyThreatenedPrivateNotes?: string;
  remarks?: string[];
  secondaryHabitat?: string[];
  state: MKVStateEnum;
  statusA?: MXIucnStatuses;
  statusANotes?: string;
  statusB?: MXIucnStatuses;
  statusBNotes?: string;
  statusC?: MXIucnStatuses;
  statusCNotes?: string;
  statusD?: MXIucnStatuses;
  statusDNotes?: string;
  statusE?: MXIucnStatuses;
  statusENotes?: string;
  taxonomicNotes?: string;
  threatNotes?: string;
  typeOfOccurrenceInFinland?: MXTypeOfOccurrenceEnum;
  typeOfOccurrenceInFinlandNotes?: string;
}
