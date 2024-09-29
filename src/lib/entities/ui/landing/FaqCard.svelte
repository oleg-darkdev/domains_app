<script>
  import { fade } from 'svelte/transition';

  export let faq;
</script>

<div class="accordion-item">
  <div class="accordion-header" on:click={()=> faq.showAnswer = !faq.showAnswer}>
    <div class="close-icon-wrapper">
      <div class="close-icon">
        <div class="line left ease-linear transform  transition duration-200 {faq.showAnswer ? '-rotate-45': ''}"></div>
        <div class="line right ease-linear transform  transition duration-200 {faq.showAnswer ? 'rotate-45': ''}"></div>
      </div>
    </div>
    <h3 class="display-3 max-width-968px">
      {faq.q}
    </h3>
  </div>

  <div class="accordion-body">
    {#if faq.showAnswer}
      {#each faq.a as answer}
        <p class="color-neutral-400 " transition:fade>
          {answer}
        </p>
      {/each}
    {/if}
  </div>
</div>



<style>

</style>
