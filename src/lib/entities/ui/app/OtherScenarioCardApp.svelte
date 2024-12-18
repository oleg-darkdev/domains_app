<script>
  import { selectedScenario, actualScreen } from '$lib/shared';

  export let scenario;
</script>

<button on:click={()=> {
  $selectedScenario = scenario; 
  $actualScreen = 1;
  
}}
  href=""
  target="_blank"
  class="card partner rounded-none my-2 w-inline-block"
  ><img
    src="{scenario.icon}"
    loading="lazy"
    alt="{scenario.abbr}"
    class="partner-image"
  />
  <div class="divider neutral-600 partner"></div>
  <div class="partner-card-bottom-wrapper">
    <h3>{scenario.title}</h3>
    <div class="button-arrow-wrapper partner">
      <div class="icon-font right-up-arrow">�&nbsp;�</div>
    </div>
  </div></button
>


<style>

</style>
