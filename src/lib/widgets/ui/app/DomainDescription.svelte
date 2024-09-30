<script>
  import {selectedDomain} from '$lib/shared';
  import {DomainDetailsCard, DomainPropertiesCard, DomainInfoCard, DomainPromoCard} from '$lib/entities';

  let promoImg, entity, id, name, wikipedia, sponsor, administrator, notes, defaultPrice, introduced, stats, multiplier, idn, dnssec, sld, ipv6;


  selectedDomain.subscribe((value) => {
		promoImg = value.promoImg;
    // logo = value.logo;
		entity = value.entity;
		id = value.id;
		name = value.name;
		wikipedia = value.wikipedia;
		// sponsor = value.sponsor;
		// administrator = value.administrator;
		// notes = value.notes;
		// defaultPrice = value.defaultPrice;
		// introduced = value.introduced;
		// stats = value.stats;
		// multiplier = value.multiplier;
    // ???
		// idn = value.idn;
		// dnssec = value.dnssec;
		// sld = value.sld;
		// ipv6 = value.ipv6;

	});
</script>



<section class="section nft-single">
  <div class="container-default w-container">
    <div class="w-layout-grid grid-nft-single">
      <div
        class="split-content left-content"
      >
        <img
          loading="lazy"
          src="{promoImg}"
          alt=""
        />
        <div class="w-layout-grid grid-nft-single-accordion">
          <DomainInfoCard {entity}/>

          <DomainPropertiesCard />

          <DomainDetailsCard {id}/>
        </div>
      </div>
      <DomainPromoCard {name} {wikipedia} {entity} {id} />
    </div>
  </div>
</section>


<style>

</style>
