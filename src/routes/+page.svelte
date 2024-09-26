<script>
  //
	import { ccTLD, arpa, geoTLD, bTLD, grTLD, gTLD, icann, sTLD, tTLD } from '$lib/shared';
	// import {  } from '$lib/widgets';
  // import {  } from '$lib/entities'

  // 1294 domain ic collection!
  // console.log([].concat(ccTLD.domains.all,geoTLD.domains.all,arpa.domains.all,bTLD.domains.all,grTLD.domains.all,gTLD.domains.all,sTLD.domains.all, icann.domains.all, tTLD.domains.all).length)
  // console.log(bTLD.domains.all.length)
  // console.log(geoTLD.domains.all.length)
  // console.log(icann.domains.alphabet)


function getNamesArray(objectsArray) {
  return objectsArray.map(obj => obj.name);
}
// .toString()
// console.log(getNamesArray(icann.domains.alphabet.b.data))
// console.log(ccTLD.domains.alphabet.c.data.length)
</script>


<svelte:head>
  <title>Title</title>
</svelte:head>

<div class="flex flex-col">
    {#each geoTLD.domains.alphabet.southAmerica.data as {logo, name, promoImg}}

  <h2>{name}</h2>

{/each}
</div>
<div class="grid grid-cols-2 max-w-2xl mx-auto">
  {#each geoTLD.domains.alphabet.southAmerica.data as {logo, name, promoImg}}
  <div class="">
  <img src="{logo}" alt="{name}" class='w-40 h-40'>
  <h2>{name}</h2>
</div>
{/each}
</div>
<style>

</style>
