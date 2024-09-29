<script>
  export let article;
</script>


<div class="">
  <a href="{article.link}" class="featured-post w-inline-block">
    <img
      loading="lazy"
      src="{article.promoImg}"
      alt="{article.altText}"
    />
    <div class="blog-hero-bottom-wrapper">
      <div class="max-width-672px">
        <div
          class="blog-post-date-wrapper blog-page"
        >
          <div>#{article.topic}</div>
          <div class="divider blog"></div>
          <div>Time to read: {article.timeToRead}</div>
        </div>
        <h2
          class="display-3"
        >
          {article.title}
        </h2>
      </div>
      <div class="max-width-490px">
        <p>
          {article.shortDesc}
        </p>
      </div>
    </div>
  </a>
</div>



<style>

</style>
