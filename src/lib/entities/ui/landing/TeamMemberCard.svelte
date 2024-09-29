<script>
  // export let member;
</script>

<div
  role="listitem"
  class="w-dyn-item"
>
  <div class="card rounded-none team-member">
    <!-- /images/ooleg_darkdev_alt.png -->
    <!-- <img
      src="/images/oleg_darkdev.jpg"
      loading="lazy"
      alt="Oleg_DarkDev photo."
    /> -->
        <a class="hover_image" href="#">
        <!-- path/to/first/visible/image: -->
        <img src="/images/oleg_darkdev_alt.png" class="" />
        <!-- path/to/hover/visible/image: -->
        <img src="/images/oleg_darkdev.jpg" class="hide" />
    </a>

    <h3 class="display-3 team-member-name mg-top-24px">Oleg Medvedev.</h3>
    <div class="card-member-content-wrapper">
      <div class="parnter-job-title">Lorem ipsum dolor.</div>
      <a
        href=""
        target="_blank"
        class="icon-font team-member-social"
        >
        contact
        </a
      >
    </div>
    <div class="divider neutral-600 team-member"></div>
    <p>
      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
</div>


<style>


.hover_image:hover {text-decoration: none}
.hide {display:none}

.hover_image:hover img:first-child{display:none}
.hover_image:hover img:last-child{display:inline-block}
</style>
