<script>
  import { useSWR } from "sswr";
  import { scenarios,  } from '$lib/shared'
	import { AboutScenario, OtherScenarios, Faq } from '$lib/widgets';
// import { onMount } from 'svelte';

  // console.log(ccTLD)
  //   const  { data: otherBoardgamesData } = useSWR(
  //       'https://domains-game.vercel.app/api/other-boardgames',
  //   )

  // otherBoardgamesList.set($otherBoardgamesData);
  // $: result = $otherBoardgamesData;


  // console.log(result)

// const { data: domainsAll} = useSWR('https://domains-game.vercel.app/api/all'),
//   { data: domainsccTLD } = useSWR(ccTLD.domains.all.api),
//   { data: domainsbTLD } = useSWR(bTLD.domains.all.api),
//   { data: domainsgeoTLD } = useSWR(geoTLD.domains.all.api),
//   { data: domainsicann } = useSWR(icann.domains.all.api);
</script>

<!-- <h2>{$otherBoardgamesList}</h2> -->

<AboutScenario scenario={scenarios[0]}/>
<OtherScenarios {scenarios}/>

<!--  (domain.id) -->
<!-- {#if $domainsAll}
{#each $domainsAll as domain}
    <h1>{domain.name}</h1>
  {/each}
{/if} -->






<!--
  bTLD--------------------------------
  https://domains-game.vercel.app/api/bTLD/ - all
  https://domains-game.vercel.app/api/bTLD/zone/a
  https://domains-game.vercel.app/api/bTLD/zone/b
  https://domains-game.vercel.app/api/bTLD/zone/c
  https://domains-game.vercel.app/api/bTLD/zone/d
  https://domains-game.vercel.app/api/bTLD/zone/e
  https://domains-game.vercel.app/api/bTLD/zone/f
  https://domains-game.vercel.app/api/bTLD/zone/g
  https://domains-game.vercel.app/api/bTLD/zone/h
  https://domains-game.vercel.app/api/bTLD/zone/i
  https://domains-game.vercel.app/api/bTLD/zone/j
  https://domains-game.vercel.app/api/bTLD/zone/k
  https://domains-game.vercel.app/api/bTLD/zone/l
  https://domains-game.vercel.app/api/bTLD/zone/m
  https://domains-game.vercel.app/api/bTLD/zone/n
  https://domains-game.vercel.app/api/bTLD/zone/o
  https://domains-game.vercel.app/api/bTLD/zone/p
  https://domains-game.vercel.app/api/bTLD/zone/q
  https://domains-game.vercel.app/api/bTLD/zone/r
  https://domains-game.vercel.app/api/bTLD/zone/s
  https://domains-game.vercel.app/api/bTLD/zone/t
  https://domains-game.vercel.app/api/bTLD/zone/u
  https://domains-game.vercel.app/api/bTLD/zone/v
  https://domains-game.vercel.app/api/bTLD/zone/w
  https://domains-game.vercel.app/api/bTLD/zone/x
  https://domains-game.vercel.app/api/bTLD/zone/y
  https://domains-game.vercel.app/api/bTLD/zone/z



 -->

