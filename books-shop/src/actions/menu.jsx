const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter,
})

const setSearchQuery = (query) => ({
    type: 'SET_SEARCHQUERY',
    payload: query,
})

export { setFilter, setSearchQuery };