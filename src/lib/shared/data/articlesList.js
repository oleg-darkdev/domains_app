import ccTLD from './articles/ccTLD'
import geoTLD from './articles/geoTLD'
import bTLD from './articles/bTLD'
import icann from './articles/icann'

const articlesList = [
  {
    title: 'All',
    id: 0,
    articles: [].concat(ccTLD, geoTLD, bTLD, icann),
  },
  // {
  //   title: 'sTLD.',
  //   id: 1,
  //   articles: [templateArticles, templateArticles],
  // },
  {
    title: 'bTLD.',
    id: 1,
    articles: bTLD,
  },
  {
    title: 'geoTLD.',
    id: 2,
    articles: geoTLD,
  },
  // {
  //   title: 'grTLD.',
  //   id: 3,
  //   articles: [templateArticles, templateArticles],
  // },
  // {
  //   title: 'gTLD.',
  //   id: 4,
  //   articles: [templateArticles, templateArticles],
  // },
  {
    title: 'ccTLD.',
    id: 5,
    articles: ccTLD,
  },
  // {
  //   title: 'tTLD.',
  //   id: 1,
  //   articles: [templateArticles, templateArticles],
  // },
  {
    title: 'icann.',
    id: 6,
    articles: icann,
  },
  // {
  //   title: 'arpa.',
  //   id: 1,
  //   articles: [templateArticles, templateArticles],
  // },
]

export default articlesList;
