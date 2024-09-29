<script>
  import { FaqCard } from '$lib/entities';
  import { faqData } from '$lib/shared';
</script>

<section class="section faqs wf-section">
  <div class="container-default w-container">
    <div
      class="divider contact-page neutral-700"
    ></div>
    <div class="max-w-4xl mx-auto text-center">
      <h1
        class="rodamas-font small"
      >
        FAQs
      </h1>
      <h2
        class="display-2"
      >
        Frequently Asked Questions
      </h2>
      <p
        class="mg-top-16px mg-bottom-48px"
      >
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
    <div class="w-layout-grid grid-nft-accordion">
      <div
        class="accordion-item-wrapper"
      >

      {#each faqData as faq}
        <FaqCard {faq}/>
      {/each}
    </div>
  </div>
</section>


<style>

</style>
