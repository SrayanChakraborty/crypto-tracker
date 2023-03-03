import React from 'react';


function Coin(props){
    return(
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin"> 
                    <img src={props.image} alt="crypto" />
                     <h1>{props.name}</h1> 
                    <p className="coin-symbol">{props.symbol}</p>

                </div>
                <div className="coin-data">
                    <p className="coin-price">${props.price.toLocaleString()}</p>
                    <p className="coinvolume">${props.coinvolume.toLocaleString()}</p>
                    {props.pricechange<0?(<p className="coin-percentage-red">{props.pricechange.toFixed(2)}%</p>):(<p className="coin-percentage-green">{props.pricechange.toFixed(2)}%</p>)}
                    <p className="coin-marketcap">
                        Mkt cap:${props.marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Coin;