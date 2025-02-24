import { React, useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import StockItem from '../../components/StockItem/StockItem';
import axios from 'axios';

function StockPage() {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);
    async function showInventory() {
        setLoading(true);
        return await axios.get('http://localhost:3001/api/inventory/show')
            .then(response => {
                setInventory(response.data);
            }).catch(error => {
                console.log(error);
                setNoData(true);
            }).finally(() => {
                setLoading(false);
            });
    }
    useEffect(() => {
        showInventory();
    }, []);
    function filterOnItemDelete(id) {
        setInventory((prev) => prev.filter(item => item._id !== id));
    }
    return (
        <>
            <Header />
            <section className="stock-page">
                <div className="container">
                    {loading && <div className="loader">loading</div>}
                    {inventory.length > 0 &&
                        <div className="inventory">
                            <div className="inventory--wrapper">
                                {
                                    inventory.map((item) => {
                                        return (
                                            <StockItem onItemDelete={filterOnItemDelete} key={item._id} item={item} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                    {noData && <div className="no-data-retrieved">No Data Available</div>}
                </div>
            </section>
        </>
    )
}

export default StockPage;