import React from "react";
import Home from "../Home";
import {Link} from 'react-router-dom'
import CartAdded from "../../Componentes/CartAdded";
import CartFavorited from '../../Componentes/CardFavorited'

function Favoritos(){
    return(
        <>
    <main className='mainCart'>
        <Home/>
        <div className='cartSideContainer'>
            
            <div className='myCart-info'>
                <div className='myCart'>Meus Favoritos</div>
                <button className='esvaziarCart'>Esvaziar</button>
            </div>
            <div className='addedCartContainer'>
                <CartFavorited
                    image={'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png'}
                    name={'Nome do Filme'}
                    quantity={1}
                    price={9.99}
                />
                <CartFavorited
                    image={'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png'}
                    name={'Nome do Filme'}
                    quantity={1}
                    price={9.99}
                />
            </div>
            
            
             </div>
    </main>
    
    </>
    )
}
export default Favoritos;