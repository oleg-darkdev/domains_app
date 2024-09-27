import { json } from '@sveltejs/kit'
import { icannDataK } from '$lib/shared'

export async function GET(event) {
  return json(icannDataK)
}
