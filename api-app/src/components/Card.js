import React from 'react'


function Card({ title, price, logo }) {
    return (
        <div className="card">
            <div className="card-info">
                <img src={logo} alt="logo"></img>
                <div className="pair-font">{title}/USD</div>
            </div>
            <div className="data-card">
                <div className="price-font">{price}</div>

            </div>
        </div>
    )
}

export default Card
