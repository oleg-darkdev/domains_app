<script>
  import { OtherBoardgameCard } from '$lib/entities';

  export let otherBoardgames;
</script>

<section class="section social-media wf-section">
  <div class="container-default w-container">
    <div
      class="divider contact-page neutral-700"
    ></div>
    <div class="max-w-6xl text-center">
      <!-- Other IT boardgames -->
      <h1
        class="rodamas-font small mg-bottom-0"
      >
      Inne IT gry.
      </h1>
      <h2
        class="display-2 mg-bottom-48px mg-top-20px"
      >
        Również ciekawe <br /> edukacyjne gry planszowe.
      </h2>
    </div>
    <div class="w-layout-grid grid-3-columns">
      {#each otherBoardgames as boardgame}
        <OtherBoardgameCard {boardgame} />
      {/each}
    </div>
  </div>
</section>


<style>

</style>
