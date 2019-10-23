const addToCart = (obj) => ({
    type: 'ADD_TO_CART',
    payload: obj,
})

const removeFromCarte = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
})

export { addToCart, removeFromCarte };