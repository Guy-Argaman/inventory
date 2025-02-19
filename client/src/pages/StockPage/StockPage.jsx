import { React, useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import StockItem from '../../components/StockItem/StockItem';
import axios from 'axios';



function StockPage() {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(false);
    async function showInventory() {
        setLoading(true);
        return await axios.get('http://localhost:3001/api/inventory/show')
            .then(response => {
                setInventory(response.data);
                console.log(response.data);
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false);
            });

    }
    useEffect(() => {
        showInventory();
    }, []);
    return (
        <>
            <Header />
            <section className="stock-page">
                <div className="container">
                    {
                        loading && <div className="loader" >loading</div>
                    }
                    {inventory.length > 0 &&
                        <div className="inventory">
                            <div className="inventory--wrapper">
                                {
                                    inventory.map((item) => {
                                        return (
                                            <StockItem key={item._id} item={item} />
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}

export default StockPage;