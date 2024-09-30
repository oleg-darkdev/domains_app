<script>
  import {selectedDomain} from '$lib/shared';

  const updSelectedDomain = (domainData) =>	selectedDomain.set(domainData);

  export let domain;
</script>

<button role="listitem" on:click={()=> updSelectedDomain(domain)} class="nft-simple-card w-inline-block">
  <div class="nft-image-wrapper">
    <div class="price-wrapper">
      <div class="price-text">{domain.entity}</div>
    </div>
    <img src="{domain.promoImg}" loading="lazy" alt="{domain.name} image.">
  </div>
  <div class="nft-content-wrapper">
    <div class="split-content">
      <h3 class="heading">{domain.name}</h3>
      <div class="nft-id-wrapper">
        <div>domain #</div>
        <div>{domain.id}</div>
      </div>
    </div>
    <div class="split-content">
      <div class="button-arrow-wrapper">
        <div class="icon-font right-up-arrow">�&nbsp;�</div>
      </div>
    </div>
  </div>
</button>


<style>

</style>
