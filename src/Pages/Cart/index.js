import {Link} from 'react-router-dom'
import Home from '../Home'
import CartAdded from '../../Componentes/CartAdded'

function Cart(){
return (
    <>
    <main className='mainCart'>
        <Home/>
        <div className='cartSideContainer'>
            
            <div className='myCart-info'>
                <div className='myCart'>Meu Carrinho</div>
                <button className='esvaziarCart'>Esvaziar</button>
            </div>
            <div className='addedCartContainer'>
                <CartAdded
                    image={'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png'}
                    name={'Nome do Filme'}
                    quantity={1}
                    price={9.99}
                />
                <CartAdded
                    image={'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png'}
                    name={'Nome do Filme'}
                    quantity={1}
                    price={9.99}
                />
            </div>
            <div className='cartPriceFinish'>
                <div className='cartTotalContainer'>
                    <div>Total:</div>
                    <div className='cartTotalValue'>R${2*9.99}</div>
                </div>
                <button className='finalizarButton'><Link to='/Checkout'>Finalizar Compras</Link></button>     
            </div>
            
             </div>
    </main>
    
    </>
)
}

export default Cart;