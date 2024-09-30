<script>
  import { useSWR } from "sswr";
  import { scenarios,  } from '$lib/shared'
	import { AboutScenario, OtherScenarios, Faq } from '$lib/widgets';
    import { DomainCard } from '$lib/entities';
// import { onMount } from 'svelte';


  // otherBoardgamesList.set($otherBoardgamesData);
  // $: result = $otherBoardgamesData;


  // console.log(result)

const { data: domainsAll} = useSWR('https://domains-game.vercel.app/api/all'),
  { data: domainsccTLD } = useSWR(scenarios[0].domains.all.api),
  { data: domainsbTLD } = useSWR(scenarios[3].domains.all.api);

  const { data: domainsgeoTLD } = useSWR(scenarios[2].domains.all.api),
  { data: domainsicann } = useSWR(scenarios[1].domains.all.api);

$: selectedCategory = '';
$: domainsForSelectedScenario = $domainsAll;


function getDomainsList(category) {
switch (category.id) {
  case 1:
    // console.log('Oranges are $0.59 a pound.');
    break;
  case 2:
    domainsForSelectedScenario = $domainsbTLD;
    break;
  case 3:
    domainsForSelectedScenario = $domainsccTLD;
    break;
  case 4:
     domainsForSelectedScenario = $domainsgeoTLD;
    break;
  case 5:
    break;
  case 6:
    break;
  case 7:
    domainsForSelectedScenario = $domainsicann;
    break;
  case 8:
    break;
  case 9:
    break;
  default:
    domainsForSelectedScenario = $domainsAll;
}

  // console.log($domainsAll)

  // return domainsAll;

}
let showDropDownMenu = false, showDomainsList = false;
</script>

<!-- <h2>{$otherBoardgamesList}</h2> -->

<!-- <AboutScenario scenario={scenarios[0]}/>
<OtherScenarios {scenarios}/> -->

<!--  (domain.id) -->
<!-- {#if $domainsAll}
{#each $domainsAll as domain}
    <h1>{domain.name}</h1>
  {/each}
{/if} -->

    <div class="section hero nft-collection">
        <div class="container-default w-container">
          <div class="hero-top-content-wrapper">
            <h1
              class="rodamas-font"
            >
              Buy NFT
            </h1>
            <h1>
              <!-- в коллекции 1279 доменов-->
            </h1>
          </div>
          <div class="search-wrapper">
            <div
              class="split-content"
            >
              <div
                class="dropdown-rariities-wrapper w-dropdown"
              >
                <div class="dropdown-rariities w-dropdown-toggle" on:click={()=> showDropDownMenu = !showDropDownMenu}>
                  <div>Strefy domen</div>
                  <div class="icon-font dropdown-arrow">-></div>
                </div>
                {#if showDropDownMenu}
                <nav class="dropdown-column-wrapper w-dropdown-list">
                  <div class="w-dyn-list">
                    <div
                      role="list"
                      class="card rounded-none rarities-list-wrapper w-dyn-items"
                    >
                    {#each scenarios as scenario}
                      <div on:click={()=> {
                          selectedCategory = scenario;
                          getDomainsList(scenario);
                          showDropDownMenu = false;
                      }} role="listitem" class="w-dyn-item">
                        <div
                          class="rarities-collection-item w-inline-block "
                          >
                          <div class='flex justify-between'>
                            <span class='mr-6'><img src="{scenario.icon}" class='h-4 ' alt=""></span>
                            <span>{scenario.allDomainsCounter} domen</span>
                          </div>
                        </div>
                      </div>
                    {/each}

                    </div>
                  </div>
                </nav>
                {/if}
              </div>
            </div>
            <div
              class="split-content"
            >
              <form
                class="search-collection w-form"
              >
                <input
                  class="input search rounded-none w-input"
                  autofocus="true"
                  maxlength="256"
                  name="query"
                  placeholder="Search for domains"
                  type="search"
                  id="search"
                  required=""
                /><input
                  type="submit"
                  class="icon-font search-button w-button"
                  value="�&nbsp;�"
                />
              </form>
            </div>
          </div>
          <div class="nft-collecion-wrapper">
            <div class="nft-collection-list w-dyn-list ">
              <div role="list" class="grid-3-columns w-dyn-items">
                <!--  && showDomainsList -->
                {#if domainsForSelectedScenario}
                  {#each showDomainsList ? domainsForSelectedScenario : domainsForSelectedScenario.slice(0, 12) as domain}
                    <DomainCard {domain}/>
                  {/each}
                {/if}
              </div>
              <div
                class="w-pagination-wrapper pagination"
              >
                <button
                  on:click={()=> showDomainsList = !showDomainsList}
                  class="w-pagination-next primary-button"
                  ><div class="w-inline-block">
                    Pełna lista domen
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



<!-- const data = {
  abbr: 'bTLD.',
  //  (bTLD)
  // and corporate
  title: 'Brand top-level domains.',
  domains: {
    all: {
      api: 'https://domains-game.vercel.app/api/bTLD/',
      title: 'All.',
    },
    zone: {
      a: {
        title: 'A',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/a',
      },
      b: {
        title: 'B',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/b',
      },
      c: {
        title: 'C',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/c',
      },
      d: {
        title: 'D',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/d',
      },
      e: {
        title: 'E',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/e',
      },
      f: {
        title: 'F',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/f',
      },
      g: {
        title: 'G',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/g',
      },
      h: {
        title: 'H',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/h',
      },
      i: {
        title: 'I',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/i',
      },
      j: {
        title: 'J',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/j',
      },
      k: {
        title: 'K',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/k',
      },
      l: {
        title: 'L',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/l',
      },
      m: {
        title: 'M',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/m',
      },
      n: {
        title: 'N',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/n',
      },
      o: {
        title: 'O',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/o',
      },
      p: {
        title: 'P',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/p',
      },
      q: {
        title: 'Q',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/q',
      },
      r: {
        title: 'R',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/r',
      },
      s: {
        title: 'S',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/s',
      },
      t: {
        title: 'T',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/t',
      },
      u: {
        title: 'U',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/u',
      },
      v: {
        title: 'V',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/v',
      },
      w: {
        title: 'W',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/w',
      },
      x: {
        title: 'X',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/x',
      },
      y: {
        title: 'Y',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/y',
      },
      z: {
        title: 'Z',
        api: 'https://domains-game.vercel.app/api/bTLD/zone/z',
      },
    },
  },
  complexity: 'basic',
  timeToPlay: 'basic',
  promoImg: '/images/scenarios/promo/bTLD.svg',
  shortDesc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.`,
  icon: '/images/scenarios/icons/bTLD.svg',
  brandColor: '',
  id: 2,
  wikipedia: '',
  desc: [``, ``, ``],
  gallery: [
    '/images/scenarios/gallery/bTLD_1.svg',
    '/images/scenarios/gallery/bTLD_2.svg',
    '/images/scenarios/gallery/bTLD_3.svg',
  ],
 -->
