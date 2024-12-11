<script>
  import { DomainCard } from '$lib/entities';
  import { promoDomains } from '$lib/shared/'
</script>

<section class="section hero">
  <div class="container-default w-container">
    <div class="hero-top-content-wrapper">
      <h1  class="rodamas-font">DOMAINS</h1>
      <h1   class="mg-top-24px">
        The project focuses on web domains.
      </h1>
      <div class="max-width-894px">
        <p>
<!--          Уникальный исследовательский проект объединяющий обучение, исследование и игру. Он создан для того, чтобы познакомить пользователей с миром интернет-доменов, их историей, структурой, управлением и современными тенденциями.  
 -->
A unique research project that combines education, exploration, and gameplay. It is designed to introduce users to the world of internet domains, their history, structure, management, and modern trends.
        </p>
        <p>
The project is presented in the format of an educational board game complemented by an interactive web application.
        </p>    
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
