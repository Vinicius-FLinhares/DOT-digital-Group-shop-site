function CartAdded({
    image,
    name,
    quantity,
    price
}){
    return(
        <div className='cartAdded'>
            <img className="cartAddedImage" src={image} alt=''/>
            <div>{name}</div>
            <div>{quantity}</div>
            <div>R${price}</div>
            <i className="fa fa-trash"><span class="tooltiptext">Deletar Item</span></i>
        </div>
    )
}
export default CartAdded;