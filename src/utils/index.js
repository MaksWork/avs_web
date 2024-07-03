export const howManyInCart = (cart) =>{
    let amount = cart.reduce((acc, curr) => acc + curr.amount, 0)
    return amount
}
export const costOfAllProducts = (cart) => {
    let cost = cart.reduce((acc, curr) => acc + curr.amount * 10, 0)
    return cost
}