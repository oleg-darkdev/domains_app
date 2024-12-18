import { json } from '@sveltejs/kit'
import { apiBTLDall } from '$lib/shared'

export async function GET(event) {
  // console.log('btld')
  return json(apiBTLDall, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}

export async function OPTIONS() {

  return new Response(null, {
    status: 204, 
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}