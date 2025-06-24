import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const TableCart = (props) => {
    const { products } = props;
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <div>
            <table className='text-left table-auto border-separate border-spacing-x-5 mb-2'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 && cart.map((item) => {
                        const product = products.find((product) => product.id === item.id);
                        return (
                            <tr key={item.id}>
                                <td>{product.title.substring(0, 15)}...</td>
                                <td>$ {product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
                                <td>{item.qty}</td>
                                <td>$ {(item.qty * product.price).toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
                            </tr>
                        )
                    })}
                    <tr ref={totalPriceRef}>
                        <td colSpan={3}><b>Total Price</b></td>
                        <td><b>$ {totalPrice.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableCart