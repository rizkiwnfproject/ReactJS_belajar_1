import React, { Fragment, useEffect, useRef, useState } from 'react'
import Button from '../../components/Elements/Button/Button'
import CardProduct from '../../components/Fragments/CardProduct'
import Counter from '../../components/Fragments/Counter';
// import { products } from '../constants/constant';
import { getProducts } from '../../services/product.service';
import { useLogin } from '../../components/hooks/useLogin';




const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = "/login"
  };

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, [])

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0)
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products])

  const handleAddToCart = (id) => {
    if (cart.find(item => item.id === id)) {
      setCart(
        cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
      )
    } else {
      setCart([...cart, { id: id, qty: 1 }])
    }
  }

  // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // }

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart])

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        Hai! {username}
        <Button variant="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className='flex justify-center py-5'>
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 && products.map((item) => (
            <CardProduct key={item.id}>
              <CardProduct.Header image={item.image} id={item.id}/>
              <CardProduct.Body title={item.title}>{item.description}</CardProduct.Body>
              <CardProduct.Footer price={item.price} id={item.id} handleAddToCart={handleAddToCart} />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 px-4 py-2">Cart</h1>
          
        </div>
      </div>
      {/* <div className="mt-5">
        <Counter></Counter>
      </div> */}


    </Fragment>
  )
}


export default ProductsPage