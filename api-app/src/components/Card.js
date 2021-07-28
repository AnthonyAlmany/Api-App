import React from 'react'


function Card({ title, price, logo }) {
    return (
        <div className="card">
            <div className="card-info">
                <img src={logo} alt="logo" width="72px" height="72px"></img>
                <h3>{title}/USD</h3>
            </div>
            <div className="data-card">
                <h3>{price}</h3>

            </div>
        </div>
    )
}

export default Card
