<script>
  import { DomainCard } from '$lib/entities';
  import { selectedScenario, filteredDomains } from '$lib/shared';
  import { useSWR } from "sswr";
	// import { onMount } from 'svelte';

  export let scenarios;


  // $: domainsForSelectedScenario = domainsicann;

  
 let domainsForSelectedScenario = [];



  async function showInfo(selectedScenario) {
        const createSummary_response = await fetch(selectedScenario.domains.all.api, {
            method: "GET",
        });


        return domainsForSelectedScenario = await createSummary_response.json();
        // console.log(domainsForSelectedScenario)

          // domainsForSelectedScenario 
    }

    
  // $: domainsForSelectedScenario = showInfo($selectedScenario);

  showInfo($selectedScenario)

  let  showDomainsList = false;
  // console.log($data)

  let actualPositionToShowDomains = 12,
      stepToShowDomains = 12; 

  let searchedDomain = '';
      // filteredDomains = [];
  $: query = searchedDomain.trim().toLowerCase();

  function search() {

    console.log(query)
    const result = domainsForSelectedScenario.filter(domain => domain.entity.toLowerCase().includes(query));
    filteredDomains.set(result); // Сохраняем результат в хранилище


    // console.log($filteredDomains)
  }


  // function search() {
  //   const query = searchedDomain.trim().toLowerCase();
  //   console.log(searchedDomain);
  //   console.log(domainsForSelectedScenario.filter(domain => domain.entity.toLowerCase().includes(query)))

  //   return filteredDomains = domainsForSelectedScenario.filter(domain => domain.entity.toLowerCase().includes(query));
  // }

  $: search();
</script>

<section class="section hero nft-collection">
  <div class="container-default w-container">
    <div class="hero-top-content-wrapper">
      <h1
        class="rodamas-font"
      >
        Domeny
      </h1>
            <!-- <div class="span">{$selectedScenario.abbr}</div> -->

      <h1>
        {domainsForSelectedScenario.length} 
        <span class="span text-[{$selectedScenario.brandColor}]">{$selectedScenario.abbr}</span>
        <!-- <img src="{$selectedScenario.icon}" class='w-20 h-40' alt=""> -->
       dostępnę.
      </h1>
    </div>
    <div class="search-wrapper">
      <div
        class="w-full"
      >
       

        <form
          class="w-full search-collection flex flex-row w-form"
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
            on:input={search}
            bind:value={searchedDomain}
          />

          <!-- {searchedDomain} -->
          
          <!-- <input
            type="submit"
            class="icon-font search-button w-button"
            value=""
          /> -->
          <!-- <button class='h-20 w-20' on:click={()=> {}}>
            <img src="/images/icons/domain_search.svg" class='w-20 h-20' alt="">
          </button> -->
        </form>
      </div>
    </div>
    <div class="nft-collecion-wrapper">
      <div class="nft-collection-list w-dyn-list ">
        <div role="list" class="grid-3-columns w-dyn-items">
          <!--  && showDomainsList -->
              {#if $filteredDomains}
                 {#each $filteredDomains < 1 ? domainsForSelectedScenario : $filteredDomains.slice(0, actualPositionToShowDomains = actualPositionToShowDomains + stepToShowDomains)   as domain}
              <DomainCard {domain}/>
            {/each}
              {:else}
                <div>No results found.</div>
              {/if}
          {#if domainsForSelectedScenario}
            <!-- {#each filteredDomains as domain}
              <DomainCard {domain}/>
            {/each} -->
            <!-- {#each searchedDomain.length ? domainsForSelectedScenario.slice(0, actualPositionToShowDomains = actualPositionToShowDomains + stepToShowDomains) : filteredDomains   as domain}
              <DomainCard {domain}/>
            {/each} -->
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
</section>


<style>

</style>
