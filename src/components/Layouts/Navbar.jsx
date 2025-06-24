import React, { useContext, useEffect, useState } from 'react'
import Button from '../Elements/Button/Button'
import { useLogin } from '../hooks/useLogin';
import { useSelector } from 'react-redux';
import { DarkMode } from '../../context/DarkMode';

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    const cart = useSelector((state) => state.cart.data);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0)
        setTotalCart(sum)
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = "/login"
    };
    return (
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            Hai! {username}
            <Button variant="mx-5 bg-black" onClick={handleLogout}>Logout</Button>
            <Button onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "Light" : "Dark"}
            </Button>
            <div className="flex items-center bg-black px-5 py-2 rounded-md ml-5">
                {totalCart}
            </div>
        </div>
    )
}

export default Navbar