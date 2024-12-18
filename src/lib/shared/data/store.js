import { writable } from 'svelte/store'
const otherBoardgamesList = writable([]);

const selectedDomain = writable(0)
const selectedScenario = writable(0)
const actualScreen = writable(0)
 const filteredDomains = writable([])



export {
  filteredDomains,
  otherBoardgamesList,
  selectedDomain,
  selectedScenario,
  actualScreen,
}
