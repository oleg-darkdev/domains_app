<script>
  import { DomainCard } from '$lib/entities';
  import { useSWR } from "sswr";

  export let scenarios;


const { data: domainsAll} = useSWR('https://domains-game.vercel.app/api/all'),
  { data: domainsccTLD } = useSWR(scenarios[0].domains.all.api),
  { data: domainsbTLD } = useSWR(scenarios[3].domains.all.api);

  const { data: domainsgeoTLD } = useSWR(scenarios[2].domains.all.api),
  { data: domainsicann } = useSWR(scenarios[1].domains.all.api);

$: selectedCategory = '';

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
}

  $: domainsForSelectedScenario = $domainsAll;
  let showDropDownMenu = false, showDomainsList = false;

</script>

<div class="section hero nft-collection">
  <div class="container-default w-container">
    <div class="hero-top-content-wrapper">
      <h1
        class="rodamas-font"
      >
        Domeny
      </h1>
      <h1>
      1279 dostępnę.
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


<style>

</style>
