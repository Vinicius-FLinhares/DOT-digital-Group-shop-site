import {Link} from 'react-router-dom';

function Menu(){

    return(
        <nav className="container-menu">
            <div className='container-menu-barra'>
            <i className="fa fa-ellipsis-h"></i>
            </div>
            <div className='container-menu-navegation'>
                <h1 className='logo'><Link to='/Home'>LOGO</Link></h1> 
                <div className="input-icons">
                    <input className="input-field" 
                       type="email"
                       placeholder="Pesquisa"/> 
                    <i className="fa fa-search icon"></i>
                </div>
                <ul>
                    <li><Link to='/Favoritos'><i className="fa fa-heart icon"></i></Link></li>
                    <li><Link to='/Carrinho'><i className="fa fa-shopping-cart icon"></i></Link></li>
                </ul>
            </div>
            
            
        </nav>
    )
}
export default Menu;