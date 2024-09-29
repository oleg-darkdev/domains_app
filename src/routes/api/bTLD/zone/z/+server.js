import { json } from '@sveltejs/kit'
import { apiBTLDdataZ } from '$lib/shared'

export async function GET(event) {
   return json(apiBTLDdataZ, {
     headers: {
       'Access-Control-Allow-Origin': '*',
     },
   })
}
