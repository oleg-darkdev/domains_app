<script>
  import { navigation, scenarios } from '$lib/shared';
  import { ContactBlock, SmallNewsletterCard} from '$lib/entities';

  export let otherBoardgames;
</script>

<footer class="footer">
  <div class="container-default w-container">
    <ContactBlock />

    <div class="footer-middle">
      <div class="split-content">
        <div class="w-layout-grid grid-nav-menu">
          <div  class="menu-wrapper-2">
            <h3>Navigation</h3>
            <ul role="list" class="nav-menu-list-wrapper">
               {#each navigation as {title, link}}
                  <li class="nav-menu-list-item">
                    <a href="{link}" aria-current="page" class="footer-link w-inline-block w--current">
                      <div>{title}</div>
                    </a>
                  </li>
              {/each}
            </ul>
          </div>

          <div id="w-node-f433562b-d67f-0da5-6531-43714c8bd3a1-4c8bd36b" data-w-id="f433562b-d67f-0da5-6531-43714c8bd3a1" class="menu-wrapper-2">
            <h3>Scenarios</h3>
            <ul role="list" class="nav-menu-list-wrapper">
              {#each scenarios as {title, abbr} }
              <li class="nav-menu-list-item">
                <a href="/app" class="footer-link w-inline-block">
                  <div>{abbr}</div>
                </a>
              </li>
              {/each}
            </ul>
          </div>
          <div id="w-node-f433562b-d67f-0da5-6531-43714c8bd3b1-4c8bd36b" data-w-id="f433562b-d67f-0da5-6531-43714c8bd3b1" class="menu-wrapper-2">
            <h3>Other boardgames.</h3>
            <ul role="list" class="nav-menu-list-wrapper">
              {#each otherBoardgames as {title, icon, link}}
            <li class="nav-menu-list-item">
              <a href="{link}" target="_blank" class="footer-link social w-inline-block">
                <div class="icon-font footer-icon">
                  <img src="{icon}" class='h-10' alt="{title}">
                </div>
                <div>{title}</div>
              </a>
            </li>
            {/each}

              <!-- <li class="nav-menu-list-item">
                <a href="https://twitter.com" target="_blank" class="footer-link social w-inline-block">
                  <div class="icon-font footer-icon">�&nbsp;�</div>
                  <div>Twitter</div>
                </a>
              </li> -->

            </ul>
          </div>
        </div>
      </div>
      <div class="split-content">
        <SmallNewsletterCard />
      </div>
    </div>
    <div data-w-id="f433562b-d67f-0da5-6531-43714c8bd3ed" class="footer-bottom">
      <div>Copyright © 44Games | Development by <a href="https://darkdev-cv.vercel.app/" target="_blank" class="color-neutral-401">Oleg_DarkDev</a>
      </div>
    </div>
  </div>
</footer>


<style>

</style>
