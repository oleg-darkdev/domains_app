<script>
  import { OtherScenarioCardApp } from '$lib/entities';

  export let scenarios;
</script>

<section class="section ">
  <div class="container-default w-container">
    <!-- blog-top-content -->
    <div class="">
      <div class="max-w-4xl">
        <h1
          class="rodamas-font small"
        >
          Other scenarios.
        </h1>
        <h2
          class="display-2"
        >
          Discover the other scenarios.
        </h2>
      </div>
      <div class="split-content">
        <p
          class="max-w-md"
        >
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
    <div class="w-dyn-list">
      <div role="list" class="grid-3-columns w-dyn-items">
        {#each scenarios as scenario}
          <OtherScenarioCardApp {scenario}/>
        {/each}
      </div>
    </div>
  </div>
</section>


<style>

</style>
