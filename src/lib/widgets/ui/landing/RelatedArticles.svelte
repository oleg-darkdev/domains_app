<script>
  import { SmallArticleCard} from '$lib/entities';
  import { articlesList } from '$lib/shared/'
</script>

<section class="section related-posts">
  <div class="container-default w-container">
    <div class="blog-top-content blog-post">
      <!-- Related articles. -->
      <h2
        class="display-2 mg-bottom-0"
      >
        Powiązane artykuły.
      </h2>
      <div

        class="split-content right-blog-top-content"
      >
      <!-- Browse all articles -->
        <a href="/blog" class="secondary-button w-button"
          >Wszystkie artykuły.</a
        >
      </div>
    </div>
    <div class="blog-post-list w-dyn-list">
      <div role="list" class="grid-blog-posts w-dyn-items">
        {#each articlesList[0].articles as article}
          <SmallArticleCard  {article}/>
        {/each}
      </div>
    </div>
  </div>
</section>


<style>

</style>
