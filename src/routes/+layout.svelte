<script>
	import '../app.css';
	// import 'aos/dist/aos.css';
	// import AOS from 'aos';
	// import { onMount } from 'svelte';
	// onMount(() => {
	// 	AOS.init();
	// });
  import { useSWR } from 'sswr'
  const { data: otherBoardgamesData } = useSWR(
      'https://domains-game.vercel.app/api/other-boardgames',
  )
  	import { Footer, OtherBoardgames} from '$lib/widgets';

</script>

<!-- <h2>{$otherBoardgamesList}</h2> -->
<div class="overflow-hidden page-wrapper">
	<slot />

  {#if $otherBoardgamesData}
    <OtherBoardgames otherBoardgames={$otherBoardgamesData}/>

    <Footer otherBoardgames={$otherBoardgamesData}/>
  {/if}
</div>

<style>
</style>


