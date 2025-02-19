import React from 'react';

const StockItem = ({ item }) => {
    return (
        <div className="item">
            <div className="item-name">
                {item.itemName}
            </div>
            <div className="item-stock-amount">
                {item.stockAmount}
            </div>
            <button class="item-edit">Edit</button>
            <button class="item-delete">Delete Item</button>
        </div>
    );
}

export default StockItem;
