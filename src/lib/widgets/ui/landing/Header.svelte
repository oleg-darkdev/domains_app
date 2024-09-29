<script>
  import { navigation } from '$lib/shared';
</script>

<div role="banner" class="navbar w-nav">
  <div class="container-default w-container">
    <div class="header-wrapper">
      <div class="split-content left-header">
        <a href="/" aria-current="page" class="header-logo-link w-nav-brand w--current">
          <img src="/images/logo.svg" loading="lazy" alt="" class="h-8">
        </a>
        <nav role="navigation" class="nav-menu w-nav-menu">
          {#each navigation as {title, link}}
            <a href="{link}" aria-current="page" class="header-nav-link w-nav-link w--current">{title}</a>
          {/each}
        </nav>
      </div>
      <div class="split-content right-header">
        <!-- <div class="w-layout-grid header-social-wrapper hide-on-mobile">
          <a href="https://discord.com" target="_blank" class="social-link-icon w-inline-block">
            <div class="icon-font social-icon">�&nbsp;�</div>
          </a>
          <a href="https://rarible.com/" target="_blank" class="social-link-icon w-inline-block">
            <div class="icon-font social-icon rarible">�&nbsp;�</div>
          </a>
          <a href="https://opensea.io/" target="_blank" class="social-link-icon w-inline-block">
            <div class="icon-font social-icon open-sea">�&nbsp;�</div>
          </a>
        </div> -->

        <a href="/app" target="_blank" class="primary-button small hide-on-mobile w-button">App</a>
        
        <div class="menu-button w-nav-button">
          <div class="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>

</style>
