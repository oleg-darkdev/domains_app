import { writable } from 'svelte/store'
const otherBoardgamesList = writable([]);

const selectedDomain = writable(0)




export { otherBoardgamesList, selectedDomain }
