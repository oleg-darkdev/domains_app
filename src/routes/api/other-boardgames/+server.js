import { json } from '@sveltejs/kit'
import { otherBoardgames } from '$lib/shared'

export async function GET(event) {
  return json(otherBoardgames)
}
