import { useEffect, useState } from 'react'
import './App.css'
import Usedata from './Usedata'
import Product from './Product';
import Modal from './Modal';

function App() {
  const [product, setProduct] = useState([]);

  const [open, setOpen] = useState(false);

  const [detail , setDetail] = useState([]);


  async function getProduct(url) {

    let products = await Usedata(url);
    setProduct(products.products);
     let filerImg = products.products.filter((img) => {
      return img.images.length > 1;
     });
     setProduct(filerImg);

  }

  useEffect(() => {
    getProduct('https://dummyjson.com/products');
  },[])

  return (
    <>
    
      <Product product ={product} open={open} setOpen={setOpen}  setDetail={setDetail}/>
      <Modal open={open} setOpen={setOpen} detail={detail}/>
      
    </>
  )
}

export default App
