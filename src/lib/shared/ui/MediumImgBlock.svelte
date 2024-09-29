<script>
  export let data;
</script>

<figure
  class="max-w-6xl my-14"
>
  <div>
    <img
      src="{data.img}"
      alt="{data.alt} image."
      loading="lazy"
      class='w-full h-full '
    />
  </div>
  <figcaption>
    {data.figcaption}
  </figcaption>
</figure>


<style>
/* figure.w-richtext-figure-type-image,
figure[data-rt-type="image"] {
  display: table;
}

figure.w-richtext-figure-type-image > div,
figure[data-rt-type="image"] > div {
  display: inline-block;
}

figure.w-richtext-figure-type-image > figcaption,
figure[data-rt-type="image"] > figcaption {
  display: table-caption;
  caption-side: bottom;
}


.w-richtext-figure-type-image > div,
figure[data-rt-type="image"] > div {
  max-width: 100%;
}

.w-richtext-figure-type-image div,
.w-richtext-figure-selected[data-rt-type="image"] div {
  outline: 2px solid #2895f7;
} */
</style>
