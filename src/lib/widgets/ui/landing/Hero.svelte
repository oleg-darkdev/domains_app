<script>
  import { DomainCard } from '$lib/entities';
  import { promoDomains } from '$lib/shared/'
</script>

<section class="section hero">
  <div class="container-default w-container">
    <div class="hero-top-content-wrapper">
      <h1  class="rodamas-font">DOMAINS.</h1>
      <h1   class="mg-top-24px">
        Lorem Ipsum has been the industry's.
      </h1>
      <div class="max-width-894px">
        <p>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.        </p>
      </div>
    </div>
    <div class="nft-collecion-wrapper">
      <div class="nft-collection-list w-dyn-list">
        <div role="list" class="grid-4-columns w-dyn-items">
          {#each promoDomains as domain}
          <a href='/app' target="_blank" >
            <DomainCard {domain}/>
          </a>
          {/each}

        </div>
      </div>
      <div class="linear-gradient"></div>
    </div>
    <div class="text-center">
      <a href="/app" target="_blank" class="primary-button w-button">Explore domains in app</a>
    </div>
  </div>
</section>


<style>

</style>
