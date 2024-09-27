<script>
  import { useSWR } from "sswr";
  import { ccTLD, icann, geoTLD, bTLD } from '$lib/shared'


  // console.log(ccTLD)

const { data: domainsAll} = useSWR('http://localhost:5173/api/all'),
  { data: domainsccTLD } = useSWR(ccTLD.domains.all.api),
  { data: domainsbTLD } = useSWR(bTLD.domains.all.api),
  { data: domainsgeoTLD } = useSWR(geoTLD.domains.all.api),
  { data: domainsicann } = useSWR(icann.domains.all.api);
</script>


<!--  (domain.id) -->
{#if $domainsAll}
{#each $domainsAll as domain}
    <h1>{domain.name}</h1>
  {/each}
{/if}






<!--
  bTLD--------------------------------
  http://localhost:5173/api/bTLD/ - all
  http://localhost:5173/api/bTLD/zone/a
  http://localhost:5173/api/bTLD/zone/b
  http://localhost:5173/api/bTLD/zone/c
  http://localhost:5173/api/bTLD/zone/d
  http://localhost:5173/api/bTLD/zone/e
  http://localhost:5173/api/bTLD/zone/f
  http://localhost:5173/api/bTLD/zone/g
  http://localhost:5173/api/bTLD/zone/h
  http://localhost:5173/api/bTLD/zone/i
  http://localhost:5173/api/bTLD/zone/j
  http://localhost:5173/api/bTLD/zone/k
  http://localhost:5173/api/bTLD/zone/l
  http://localhost:5173/api/bTLD/zone/m
  http://localhost:5173/api/bTLD/zone/n
  http://localhost:5173/api/bTLD/zone/o
  http://localhost:5173/api/bTLD/zone/p
  http://localhost:5173/api/bTLD/zone/q
  http://localhost:5173/api/bTLD/zone/r
  http://localhost:5173/api/bTLD/zone/s
  http://localhost:5173/api/bTLD/zone/t
  http://localhost:5173/api/bTLD/zone/u
  http://localhost:5173/api/bTLD/zone/v
  http://localhost:5173/api/bTLD/zone/w
  http://localhost:5173/api/bTLD/zone/x
  http://localhost:5173/api/bTLD/zone/y
  http://localhost:5173/api/bTLD/zone/z



 -->
