<script>
  export let scenario;
</script>
<!--
   complexity: 'basic',
  timeToPlay: 'basic',
  wikipedia
  domains length
 -->
<div class="card rounded-none collection">
  <div class="collection-card-top-wrapper">
    <div class="flex justify-start">
      <img src="{scenario.icon}" loading="lazy" alt="" class="h-14">
    </div>

    <h3 class="display-3 mg-top-32px">{scenario.title}</h3>
    <p>
      {scenario.shortDesc}
    </p>
    <a href="/app" target="_blank" class="primary-button mg-top-20px w-button">Run
      <span style='font-family: Rodamas, sans-serif; font-size: 70px;' class='mx-4'>{scenario.abbr}</span>
      scenario
    </a>
  </div>
  <img src="{scenario.promoImg}" loading="lazy"  alt="" class="mg-top-65px">
</div>



<style>

</style>
