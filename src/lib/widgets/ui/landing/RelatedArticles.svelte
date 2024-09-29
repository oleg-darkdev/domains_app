<script>
  import { SmallArticleCard} from '$lib/entities';
  import { articlesList } from '$lib/shared/'
</script>

<section class="section related-posts">
  <div class="container-default w-container">
    <div class="blog-top-content blog-post">
      <h2
        class="display-2 mg-bottom-0"
      >
        Related articles.
      </h2>
      <div

        class="split-content right-blog-top-content"
      >
        <a href="/blog" class="secondary-button w-button"
          >Browse all articles</a
        >
      </div>
    </div>
    <div class="blog-post-list w-dyn-list">
      <div role="list" class="grid-blog-posts w-dyn-items">
        {#each articlesList as article}
          <SmallArticleCard  {article}/>
        {/each}
      </div>
    </div>
  </div>
</section>


<style>

</style>
