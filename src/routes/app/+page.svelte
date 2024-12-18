<script>
  import { scenarios, selectedDomain, selectedScenario, actualScreen } from '$lib/shared'
  import {FooterNavApp} from '$lib/entities';
	import { AboutScenario, OtherScenarios, DomainsList,  DomainDescription, DomainsListForCaregory } from '$lib/widgets';
  // import { onMount } from 'svelte';


  // otherBoardgamesList.set($otherBoardgamesData);
  // $: result = $otherBoardgamesData;
  

  // console.log(result)
</script>

<!-- <h2>{$otherBoardgamesList}</h2> -->
{#if $actualScreen == 0}
  <!-- welcome screen - about game - select scenarion -->
  <!-- <AboutScenario selectedScenario={$selectedScenario}/> -->
  <OtherScenarios {scenarios}/>
{:else if $actualScreen == 1}
  <!-- play game -->
   {#if $selectedScenario}

      {#if $selectedDomain}
      <DomainDescription />  
      {:else}
      <DomainsListForCaregory {scenarios}/>
      {/if}
  {:else}
  <section class="section hero nft-collection">
  <div class="container-default w-container">
  selected scenario
</div>
</section>
  {/if}
{:else if $actualScreen == 2}
  <DomainsList {scenarios}/>
  <DomainDescription />
  <!-- {:else if actualScreen == 3} -->
  <!-- settings / hisotry -->
{/if}

<FooterNavApp />

