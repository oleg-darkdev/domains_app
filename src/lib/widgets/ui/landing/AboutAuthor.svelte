<script>
  import { BigTeamMemberCard,  SmallTeamMemberCard} from '$lib/entities';
  import { team } from '$lib/shared';

</script>

<section class="section">
  <div id='author' class="container-default w-container">
    <div class="text-center">
      <h1
        class="rodamas-font small mg-bottom-0"
      >
        Ekipa
      </h1>
      <h2
        class="display-2 mg-bottom-48px"
      >
        Poznaj zespół <br /> stojący za <span><img src="/images/logo_color.svg" class='h-14' alt=""></span>
      </h2>
    </div>
    <div
      class="w-dyn-list mb-8 max-w-4xl mx-auto"
    >
      <div role="list" class=" w-dyn-items">

        <BigTeamMemberCard />

      </div>
    </div>
<!--
    <div class="text-center w-richtext">
      <h2
        class="mg-bottom-48px"
      >
       Specjalne podziękowania d.
      </h2>
    </div> -->
    <div
      class="w-dyn-list max-w-4xl mx-auto"
    >
      <div role="list" class="gap-4 grid grid-cols-2">
        {#each team as member}
          <SmallTeamMemberCard {member}/>
        {/each}
      </div>
    </div>
  </div>
</section>




<style>

</style>
