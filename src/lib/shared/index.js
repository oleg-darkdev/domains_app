// data
import scenarios from './data/scenarios'
import navigation from './data/navigation'
import roadmap from './data/roadmap'
import team from './data/team'
import faqData from './data/faqData'
import otherBoardgames from './data/otherBoardgames'
import articlesList from './data/articlesList'
import promoDomains from './data/promoDomains'
import socialLinks from './data/socialLinks'
// import selectedDomain from './data/selectedDomain'
// import selectedDomain from './data/selectedDomain'
// import selectedDomain from './data/selectedDomain'
// import selectedDomain from './data/selectedDomain'
// import selectedDomain from './data/selectedDomain'
import { otherBoardgamesList, selectedDomain } from './data/store'

// ui
import Blockquote from './ui/Blockquote.svelte'
import ArticleDivider from './ui/ArticleDivider.svelte'
import MediumImgBlock from './ui/MediumImgBlock.svelte'
import SecondaryBtn from './ui/SecondaryBtn.svelte'
import PrimaryBtn from './ui/PrimaryBtn.svelte'

// =========================== API
// ======================== bTLD
import apiBTLDall from './api/bTLD'
import apiBTLDdataA from './api/bTLD/dataA'
import apiBTLDdataB from './api/bTLD/dataB'
import apiBTLDdataC from './api/bTLD/dataC'
import apiBTLDdataD from './api/bTLD/dataD'
import apiBTLDdataE from './api/bTLD/dataE'
import apiBTLDdataF from './api/bTLD/dataF'
import apiBTLDdataG from './api/bTLD/dataG'
import apiBTLDdataH from './api/bTLD/dataH'
import apiBTLDdataI from './api/bTLD/dataI'
import apiBTLDdataJ from './api/bTLD/dataJ'
import apiBTLDdataK from './api/bTLD/dataK'
import apiBTLDdataL from './api/bTLD/dataL'
import apiBTLDdataM from './api/bTLD/dataM'
import apiBTLDdataN from './api/bTLD/dataN'
import apiBTLDdataO from './api/bTLD/dataO'
import apiBTLDdataP from './api/bTLD/dataP'
import apiBTLDdataQ from './api/bTLD/dataQ'
import apiBTLDdataR from './api/bTLD/dataR'
import apiBTLDdataS from './api/bTLD/dataS'
import apiBTLDdataT from './api/bTLD/dataT'
import apiBTLDdataU from './api/bTLD/dataU'
import apiBTLDdataV from './api/bTLD/dataV'
import apiBTLDdataW from './api/bTLD/dataW'
import apiBTLDdataX from './api/bTLD/dataX'
import apiBTLDdataY from './api/bTLD/dataY'
import apiBTLDdataZ from './api/bTLD/dataZ'

// ccTLD
import apiCCTLDallAll from './api/ccTLD'
import apiCCTLDdataA from './api/ccTLD/dataA'
import apiCCTLDdataB from './api/ccTLD/dataB'
import apiCCTLDdataC from './api/ccTLD/dataC'
import apiCCTLDdataD from './api/ccTLD/dataD'
import apiCCTLDdataE from './api/ccTLD/dataE'
import apiCCTLDdataF from './api/ccTLD/dataF'
import apiCCTLDdataG from './api/ccTLD/dataG'
import apiCCTLDdataH from './api/ccTLD/dataH'
import apiCCTLDdataI from './api/ccTLD/dataI'
import apiCCTLDdataJ from './api/ccTLD/dataJ'
import apiCCTLDdataK from './api/ccTLD/dataK'
import apiCCTLDdataL from './api/ccTLD/dataL'
import apiCCTLDdataM from './api/ccTLD/dataM'
import apiCCTLDdataN from './api/ccTLD/dataN'
import apiCCTLDdataO from './api/ccTLD/dataO'
import apiCCTLDdataP from './api/ccTLD/dataP'
import apiCCTLDdataQ from './api/ccTLD/dataQ'
import apiCCTLDdataR from './api/ccTLD/dataR'
import apiCCTLDdataS from './api/ccTLD/dataS'
import apiCCTLDdataT from './api/ccTLD/dataT'
import apiCCTLDdataU from './api/ccTLD/dataU'
import apiCCTLDdataV from './api/ccTLD/dataV'
import apiCCTLDdataW from './api/ccTLD/dataW'
import apiCCTLDdataX from './api/ccTLD/dataX'
import apiCCTLDdataY from './api/ccTLD/dataY'
import apiCCTLDdataZ from './api/ccTLD/dataZ'

// geoTLD
import apiGeoTLDAll from './api/geoTLD/'
import apiGeoTLDafrika from './api/geoTLD/dataAfrika'
import apiGeoTLDasia from './api/geoTLD/dataAsia'
import apiGeoTLDeurope from './api/geoTLD/dataEurope'
import apiGeoTLDfrance from './api/geoTLD/dataFrance'
import apiGeoTLDgermany from './api/geoTLD/dataGermany'
import apiGeoTLDnorthAmerica from './api/geoTLD/dataNorthAmerica'
import apiGeoTLDoceania from './api/geoTLD/dataOceania'
import apiGeoTLDsouthAmerica from './api/geoTLD/dataSouthAmerica'
import apiGeoTLDspain from './api/geoTLD/dataSpain'

// ICANN
import icannDataAll from './api/icann'
import icannDataA from './api/icann/dataA'
import icannDataB from './api/icann/dataB'
import icannDataC from './api/icann/dataC'
import icannDataD from './api/icann/dataD'
import icannDataE from './api/icann/dataE'
import icannDataF from './api/icann/dataF'
import icannDataG from './api/icann/dataG'
import icannDataH from './api/icann/dataH'
import icannDataI from './api/icann/dataI'
import icannDataJ from './api/icann/dataJ'
import icannDataK from './api/icann/dataK'
import icannDataL from './api/icann/dataL'
import icannDataM from './api/icann/dataM'
import icannDataN from './api/icann/dataN'
import icannDataO from './api/icann/dataO'
import icannDataP from './api/icann/dataP'
import icannDataQ from './api/icann/dataQ'
import icannDataR from './api/icann/dataR'
import icannDataS from './api/icann/dataS'
import icannDataT from './api/icann/dataT'
import icannDataU from './api/icann/dataU'
import icannDataV from './api/icann/dataV'
import icannDataW from './api/icann/dataW'
import icannDataX from './api/icann/dataX'
import icannDataY from './api/icann/dataY'
import icannDataZ from './api/icann/dataZ'

export {
  // ui
  Blockquote,
  ArticleDivider,
  MediumImgBlock,
  SecondaryBtn,

  // data
  scenarios,
  navigation,
  roadmap,
  team,
  faqData,
  otherBoardgames,
  socialLinks,
  selectedDomain,



  // otherBoardgamesList,
  articlesList,
  promoDomains,

  //============================== API
  // bTLD
  apiBTLDall,
  apiBTLDdataA,
  apiBTLDdataB,
  apiBTLDdataC,
  apiBTLDdataD,
  apiBTLDdataE,
  apiBTLDdataF,
  apiBTLDdataG,
  apiBTLDdataH,
  apiBTLDdataI,
  apiBTLDdataJ,
  apiBTLDdataK,
  apiBTLDdataL,
  apiBTLDdataM,
  apiBTLDdataN,
  apiBTLDdataO,
  apiBTLDdataP,
  apiBTLDdataQ,
  apiBTLDdataR,
  apiBTLDdataS,
  apiBTLDdataT,
  apiBTLDdataU,
  apiBTLDdataV,
  apiBTLDdataW,
  apiBTLDdataX,
  apiBTLDdataY,
  apiBTLDdataZ,

  // ccTLD
  apiCCTLDallAll,
  apiCCTLDdataA,
  apiCCTLDdataB,
  apiCCTLDdataC,
  apiCCTLDdataD,
  apiCCTLDdataE,
  apiCCTLDdataF,
  apiCCTLDdataG,
  apiCCTLDdataH,
  apiCCTLDdataI,
  apiCCTLDdataJ,
  apiCCTLDdataK,
  apiCCTLDdataL,
  apiCCTLDdataM,
  apiCCTLDdataN,
  apiCCTLDdataO,
  apiCCTLDdataP,
  apiCCTLDdataQ,
  apiCCTLDdataR,
  apiCCTLDdataS,
  apiCCTLDdataT,
  apiCCTLDdataU,
  apiCCTLDdataV,
  apiCCTLDdataW,
  apiCCTLDdataX,
  apiCCTLDdataY,
  apiCCTLDdataZ,

  // acann
  icannDataAll,
  icannDataA,
  icannDataB,
  icannDataC,
  icannDataD,
  icannDataE,
  icannDataF,
  icannDataG,
  icannDataH,
  icannDataI,
  icannDataJ,
  icannDataK,
  icannDataL,
  icannDataM,
  icannDataN,
  icannDataO,
  icannDataP,
  icannDataQ,
  icannDataR,
  icannDataS,
  icannDataT,
  icannDataU,
  icannDataV,
  icannDataW,
  icannDataX,
  icannDataY,
  icannDataZ,

  // geoTLD
  apiGeoTLDAll,
  apiGeoTLDafrika,
  apiGeoTLDasia,
  apiGeoTLDeurope,
  apiGeoTLDfrance,
  apiGeoTLDgermany,
  apiGeoTLDnorthAmerica,
  apiGeoTLDoceania,
  apiGeoTLDsouthAmerica,
  apiGeoTLDspain,
}
