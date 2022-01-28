import {Link} from 'react-router-dom'
function Checkout(){
    return(
        <div className='checkoutBodyContainer'>
            <p className='checkoutTitle'>Finalizar Compra</p>
            <div className='checkoutMainContainer'>

                <div className='checkoutUserDataContainer'>
                    <input className='checkoutNome' type='email' placeholder='Nome Completo'></input>
                    <input className='checkoutCPF' type='text' placeholder='CPF'></input>
                    <input className='checkoutCelular' type='tel' placeholder='Celular'></input>
                    <input className='checkoutEmail' type='email' placeholder='E-mail'></input>
                    <input className='checkoutCEP' type='text' placeholder='CEP'></input>
                    <input className='checkoutEndereco' type='text' placeholder='Endereço'></input>
                    <input className='checkoutCidade' type='Cidade' placeholder='Cidade'></input>
                    <input className='checkoutEstado' type='text' placeholder='Estado'></input>
                </div>
                <div className='checkoutCartContainer'>
                    <table>
                        <thead>
                            <tr>
                                <th>Imagem</th><th>Nome</th><th>Qtd</th><th>Preço</th><th></th>
                            </tr>
                            <tr>
                                <td>
                                    <img className='checkoutCartImg' src='https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png' alt=''/>
                                </td>
                                <td>
                                    Nome do Filme
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    R$ 9,99
                                </td>
                                <td>
                                    <i className='fa fa-trash'></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img className='checkoutCartImg' src='https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png' alt=''/>
                                </td>
                                <td>
                                    Nome do Filme
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    R$ 9,99
                                </td>
                                <td>
                                    <i className='fa fa-trash'></i>
                                </td>
                            </tr>
                        </thead>
                    </table>
                    <div className='cartTotalContainer'>
                        <div>Total:</div>
                    <div className='cartTotalValue'>R${2*9.99}</div>
                </div>
                <button className='finalizarButton'><Link to='/Finalizado'>Finalizar</Link></button>
                </div>
            </div>
        </div>
        
        
    )
}
export default Checkout;