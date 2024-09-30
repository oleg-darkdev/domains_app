<script>
  import {socialLinks} from '$lib/shared';
</script>


<div class="mx-auto container-default w-container">
  <a name="contact"></a>

  <div class="footer-top">
    <div class="split-content left-top-footer">
      <a href="/" aria-current="page" class="header-logo-link footer w-nav-brand w--current">
        <img src="/images/logo.svg" loading="lazy" alt="" class="lg:h-20 h-10">
      </a>
    </div>
    <div class="split-content right-footer">
      <div class="w-layout-grid header-social-wrapper footer">
        {#each socialLinks as {text, link, icon}}
        <a href="{link}" target="_blank" class="social-link-icon w-inline-block">
          <div class="icon-font social-icon">{icon}</div>
        </a>
        {/each}
      </div>

      <slot>

      </slot>

    </div>
  </div>
</div>



<style>

</style>
