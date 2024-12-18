<script>
	import { SecondaryBtn } from '$lib/shared';
	import { HeaderLanding, Hero, AboutAuthorLanding, Scenarios, Roadmap, Faq, ArticlesSection } from '$lib/widgets';
  // import {  } from '$lib/entities'
  import { useSWR } from 'sswr'
  const { data: otherBoardgamesData } = useSWR(
      '/api/other-boardgames',
  )
  import { Footer, OtherBoardgames} from '$lib/widgets';

</script>


<svelte:head>
  <title>DOMAINS</title>
</svelte:head>


<HeaderLanding />

<main>
  <Hero />

  <Scenarios />

  <Roadmap />

  <ArticlesSection>
    <!-- Browse all articles. -->
    <SecondaryBtn dataBtn={{text: 'Wszystkie artykuły.', link: 'articles'}}/>
  </ArticlesSection>

  <AboutAuthorLanding />

  <Faq />
</main>
  {#if $otherBoardgamesData}
    <!-- <OtherBoardgames otherBoardgames={$otherBoardgamesData}/> -->

    <Footer otherBoardgames={$otherBoardgamesData}/>
  {/if}



<style>

</style>
