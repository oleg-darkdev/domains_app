<script>
  export let point;
</script>

<div class="card rounded-none ">
  <h3 class='text-[#7a5ca3]'>Phase {point.phaseNumber}: {point.title}</h3>
  <p class="color-neutral-400 mg-top-10px">
    {point.shortDesc}
  </p>

  <ul class="mb-14 flex flex-col " role="list">
    {#each point.features as feature}
      <li class='mb-4 w-full'>
        <div class="flex flex-row w-full">
        <div class=' mr-4 '>
          <!-- <img src="/images/list-item.svg" class='h-4 w-4' alt=""> -->
          <span class='h-4 w-4' style='font-family: "Clash Grotesk", sans-serif; font-weight: 700; font-size: 24px;'>+</span>
        </div>

        <p class='text-left '>
          {feature}
        </p>
        </div>
      </li>
    {/each}
  </ul>
</div>



<style>

</style>
