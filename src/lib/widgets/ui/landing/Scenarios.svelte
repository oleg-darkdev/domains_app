<script>
  import { ScenarioCard } from '$lib/entities';
  import { scenarios } from '$lib/shared';
</script>

<section class="section">
  <div class="container-default w-container">
    <a name="scenarios"></a>

    <div class="max-width-845px text-center">
      <h1 class="rodamas-font small opacity-58">Scenarios</h1>
      <h2 class="display-2">Just pick a scenario and play in app!</h2>
    </div>
    <div class="w-layout-grid grid-collection-cards">
      {#each scenarios as scenario}
        <ScenarioCard {scenario}/>
      {/each}
    </div>
  </div>
</section>


<style>

</style>
