<script>
  import { navigation } from '$lib/shared';
  import { fade } from 'svelte/transition';
    import { ContactBlock } from '$lib/entities';

  let showMenu = false;
</script>

<div role="banner" class="navbar w-nav">
  <div class="container-default w-container flex flex-col">
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

        <div on:click={()=> showMenu = !showMenu} class="menu-button w-nav-button {showMenu ? 'w--open': ''}">
          <div class="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
      {#if showMenu}
        <div class="h-screen w-full" transition:fade>
        <nav role="navigation" class="mb-14 flex flex-col">
          {#each navigation as {title, link}}
            <a href="{link}" aria-current="page" class="header-nav-link w-nav-link w--current">{title}</a>
          {/each}

          <a href="/app" target="_blank" class="primary-button small w-button">App</a>
        </nav>

        <ContactBlock />
        </div>
      {/if}
  </div>
</div>

<style>
.w-nav-button {
  position: relative;
  float: right;
  padding: 18px;
  font-size: 24px;
  display: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.w-nav-button:focus {
  outline: 0;
}
.w-nav-button.w--open {
  background-color: #c8c8c8;
  color: white;
}


@media screen and (max-width: 991px) {
  .w-nav-menu {
    display: none;
  }
  .w-nav-button {
    display: block;
  }
}
@media screen and (max-width: 767px) {
  .w-nav[data-collapse="small"] .w-nav-button {
    display: block;
  }
}
@media screen and (max-width: 479px) {
  .w-nav[data-collapse="tiny"] .w-nav-button {
    display: block;
  }
}
</style>
