import CartItem from "../CartItem/CartItem";

const CartList = ({cartProducts}) => {
    return(
        <div>
            {cartProducts?.map((product) => {
                return(
                    <CartItem product/>
                )
            })}
        </div>
    );
}

export default CartList;