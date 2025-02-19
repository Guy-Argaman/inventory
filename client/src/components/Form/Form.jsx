import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';

function Form() {
    const [formData, setFormData] = useState({ itemName: '', stockAmount: 0 });
    const [formError, setFormError] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const resetIndicators = () => {
        setFormError(false);
        setFormSuccess(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        resetIndicators();
        if (formData.itemName === '' || formData.stockAmount === '' || formData.stockAmount <= 0) {
            setFormError(true);
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/api/inventory', {
                itemName: formData.itemName,
                stockAmount: parseInt(formData.stockAmount)
            });
            setFormSuccess(true);
        } catch (error) {
            console.error('i cri: ', error);
            setFormError(true);
        }
    };

    return (
        <>
            <Header />
            <section className="form-container">
                <form onSubmit={handleSubmit} className={`${formError ? 'error' : ''} ${formSuccess ? 'success' : ''}`}>
                    <div className="form-wrapper">
                        <label htmlFor="input-name">Item</label>
                        <input type="text" id="input-name" className="input-name" placeholder="Item Name" onChange={(e) => { setFormData({ ...formData, itemName: e.target.value }) }}></input>
                        <label htmlFor="input-stock-amount">Stock Amount</label>
                        <input type="number" id="input-stock-amount" className="input-stock-amount" placeholder="Insert Stock Amount" onChange={(e) => { setFormData({ ...formData, stockAmount: e.target.value }) }}></input>
                        <input type="submit" value="Submit"></input>
                    </div>
                </form>
            </section >
        </>
    )
}

export default Form;