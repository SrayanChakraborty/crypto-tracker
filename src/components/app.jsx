import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './coin';





function App() {

    const [coins, setcoins] = useState([]);
    const [search,setsearch]=useState("");

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((res) => {
            setcoins(res.data);

        }).catch(error => console.log(error))
    }, [])

    function handlechange(event){
        setsearch(event.target.value)
    }

    const filteredcoin=coins.filter((coin)=>{
        return(coin.name.toLowerCase().includes(search.toLowerCase()))
    })

    return (
        <div className='coin-app'>
            <div className="coin-search">
                <h1 className="cointext">Search your coin</h1>
                <form>
                    <input type="text" placeholder="Search" className='coin-input' onChange={handlechange}  />
                </form>
            </div>
            {
                filteredcoin.map(fcoin=>{
                    return(
                        <Coin
                            id={fcoin.id}
                            name={fcoin.name}
                            image={fcoin.image}
                            symbol={fcoin.symbol}
                            price={fcoin.current_price}
                            coinvolume={fcoin.market_cap}
                            pricechange={fcoin.price_change_percentage_24h}
                            marketcap={fcoin.total_volume.toLocaleString()}

                        />
                    )
                })
            }

        </div>
    )
}

export default App;








