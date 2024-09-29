<script>
  import { navigation, scenarios } from '$lib/shared';
  import { Contact} from '$lib/entities';

  export let otherBoardgames;
</script>

<footer class="footer">
  <div class="container-default w-container">
    <Contact />

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
        <div data-w-id="f433562b-d67f-0da5-6531-43714c8bd3da" class="card rounded-none subscribe">
          <div class="subscribe-card-top-wrapper">
            <div class="split-content">
              <img src="images/62bcd776bdc320da77c942fb_stay-on-the-loop.svg" loading="lazy" alt="Subscribe" class="subscribe-card-image">
            </div>
            <div class="split-content right-subscribe-card">
              <h3>Stay on the loop</h3>
              <p>Donec ullamcorper felis at massa nibh venenatis suspendisse urna condimentum commodo.</p>
            </div>
          </div>
          <div class="w-form">
            <form id="email-form" name="email-form" data-name="Email Form" method="get" class="footer-subscribe-form" data-wf-page-id="62bc75224300badfaa53cb06" data-wf-element-id="f433562b-d67f-0da5-6531-43714c8bd3e4">
              <input class="input w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="Enter your email" type="email" id="email-subscribe" required="">
              <input type="submit" data-wait="Please wait..." class="primary-button w-button" value="Subscribe">
            </form>
            <div class="success-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
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
 \
