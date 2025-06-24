import { Fragment, useContext, useEffect, useState } from 'react'
import CardProduct from '../../components/Fragments/CardProduct'
import { getProducts } from '../../services/product.service';
import { useLogin } from '../../components/hooks/useLogin';
import TableCart from '../../components/Fragments/TableCart';
import Navbar from '../../components/Layouts/Navbar';
import { DarkMode } from '../../context/DarkMode';

const ProductsPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  const [products, setProducts] = useState([]);

  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, [])

  return (
    <Fragment>
      <Navbar />
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 && products.map((item) => (
            <CardProduct key={item.id}>
              <CardProduct.Header image={item.image} id={item.id} />
              <CardProduct.Body title={item.title}>{item.description}</CardProduct.Body>
              <CardProduct.Footer price={item.price} id={item.id} />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 px-4 py-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  )
}


export default ProductsPage