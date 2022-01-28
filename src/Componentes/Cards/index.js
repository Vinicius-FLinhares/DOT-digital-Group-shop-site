import React from "react";

function Card({
    nome,
    data,
    imagem,
    preco,
    genero
}){
    return(
        <div className="card">
            <div className="favoriteCardBut">
            <i className="heartCardIcon" className="fa fa-heart icon"></i> 
            </div>
            <img className="cardImage" src={imagem} alt=""/>
            <div className="cardDate">{data}</div>
            <div className="cardName">{nome}</div>
            <div className="cardSpecifics">
                <i className="starIcon" className="fa fa-star icon">7</i> 
                <div className="cardKind">{genero}</div>
            </div>
            <div className="cardPrice">{preco}</div>
            <button className="cardAdButton">Adicionar</button>
        </div>
    )
}
export default Card