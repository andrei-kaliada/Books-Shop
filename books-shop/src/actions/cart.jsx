const addToCard = (filter) => ({
    type: 'SET_FILTER',
    payload: filter,
})

const removeFromCarde = (query) => ({
    type: 'SET_SEARCHQUERY',
    payload: query,
})

export { addToCard, removeFromCarde };