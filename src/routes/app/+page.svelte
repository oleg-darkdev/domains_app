<script>
  import { scenarios,  } from '$lib/shared'
	import { AboutScenario, OtherScenarios, DomainsList, Faq, DomainDescription } from '$lib/widgets';
  // import { onMount } from 'svelte';


  // otherBoardgamesList.set($otherBoardgamesData);
  // $: result = $otherBoardgamesData;


  // console.log(result)
</script>

<!-- <h2>{$otherBoardgamesList}</h2> -->
<DomainDescription />
<AboutScenario scenario={scenarios[0]}/>
<OtherScenarios {scenarios}/>
<DomainsList {scenarios}/>



