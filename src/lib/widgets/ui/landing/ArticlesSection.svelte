<script>
  import { SmallArticleCard} from '$lib/entities';
  import { articlesList } from '$lib/shared/';


  $: selectedArticleCategory = articlesList[0];
</script>


<section class="section blog-posts">
  <div class="container-default w-container">
    <div class="latest-articles-top-wrapper">
        <h1  class="rodamas-font small">Lorem Ipsum.</h1>
        <h2 class="display-2">Browse our articles</h2>
    </div>
    <!-- <div class="blog-top-content">
      <div class="max-w-md">
        <h1  class="rodamas-font small">Lorem Ipsum.</h1>
        <h2 class="display-2">Browse our articles</h2>
      </div>
      <div class="split-content">
        <p class="max-w-sm">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.        </p>
      </div>
    </div> -->
    <div
      class="blog-categories-wrapper"
    >
      <div class="w-dyn-list">
        <div role="list" class="categories-row w-dyn-items">
          {#each articlesList as articleCategory (articleCategory.id)}
            <div role="listitem" class="w-dyn-item">
              <button
              on:click={()=> selectedArticleCategory = articleCategory}
                class="category-link w-inline-block {selectedArticleCategory.id == articleCategory.id ? 'w--current': ''}"
              >
                <h3 class="category-name">{articleCategory.title}</h3>
              </button>
            </div>
          {/each}
        </div>
      </div>
    </div>
    <div class="blog-post-list w-dyn-list">
      <div role="list" class="grid-blog-posts w-dyn-items">
        {#each selectedArticleCategory.articles as article}
          <SmallArticleCard  {article}/>
        {/each}
      </div>
    </div>

    <div class="text-center mg-top-56px">
      <a href="/articles" class="secondary-button w-button">Browse all articles.</a>
    </div>
  </div>
</section>


<style>

</style>
