<script>
  export let article;
</script>

<div role="listitem" class="">
  <a
    href="{article.link}"
    class="blog-card w-inline-block"
    ><div class="blog-image-wrapper">
      <img
        src="{article.promoImg}"
        loading="lazy"
        alt="{article.altText}"
        class="blog-image"
      />
    </div>
    <div class="blog-post-date-wrapper">
      <div>{article.topic}</div>
      <div class="divider blog"></div>
      <div>{article.date}</div>
    </div>
    <h2 class="blog-card-title">
      {article.title}
    </h2>
  </a>
</div>


<style>

</style>
