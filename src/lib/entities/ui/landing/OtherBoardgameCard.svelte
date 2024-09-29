<script>
  export let boardgame;
</script>

<div
    class="split-content full-height"
  >
    <a
      href="{boardgame.link}"
      target="_blank"
      class="card social rounded-none w-inline-block"
      ><div class="social-card-top-wrapper">
        <img
          src="{boardgame.icon}"
          loading="lazy"
          alt="{boardgame.title} icon."
          class="card-social-icon"
        />
        <h3>{boardgame.title}</h3>
      </div>
      <p class="color-neutral-400">
        {boardgame.shortDesc}
      </p>
      <div class="social-card-bottom-wrapper">
        <h5>More info</h5>
        <div class="button-arrow-wrapper partner">
          <div class="icon-font right-up-arrow">�&nbsp;�</div>
        </div>
      </div></a
    >
  </div>


  <style>

  </style>
