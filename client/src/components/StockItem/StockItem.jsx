import { React, useState } from 'react';
import axios from 'axios';

const StockItem = ({ item, onItemDelete }) => {
    const [itemID, setItemID] = useState(item._id);
    const [itemAmount, setItemAmount] = useState(item.stockAmount);
    const [error, setError] = useState('');

    async function deleteItem() {
        return await axios.delete(`http://localhost:3001/api/inventory/delete/${itemID}`)
            .then(response => {
                console.log(response.data);
                onItemDelete(itemID);
            }).catch(error => {
                console.log(error);
            })
    }

    async function updateItem(newItemStockAmount) {
        if (newItemStockAmount < 0) {
            setError('invalid-less');
            return;
        } else if (newItemStockAmount > 99) {
            setError('invalid-more');
            return;
        }
        setError('');
        return await axios.put(`http://localhost:3001/api/inventory/update`, {
            params: {
                id: itemID,
                stockAmount: newItemStockAmount
            }
        }).then(response => {
            setItemAmount(newItemStockAmount);
            console.log(response.data);
        }).catch(error => {
            console.log('i cri', error);
        })
    }

    return (
        <div className={`item ${error}`}>
            <div className="item-name">
                {item.itemName}
            </div>
            <div className="item-stock-amount">
                <button className="minus" onClick={() => { updateItem(itemAmount - 1) }}>-</button>
                <span>{itemAmount}</span>
                <button className="plus" onClick={() => { updateItem(itemAmount + 1) }}>+</button>
            </div>
            <button className="item-delete" onClick={deleteItem}>Delete Item</button>
        </div>
    );
}

export default StockItem;
