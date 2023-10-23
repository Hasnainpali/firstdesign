import React,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'

function Products() {
    const {id}=useParams;
    const [product, setProduct]= useState([]);

    useEffect(() => {
      const FetchData = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
           setProduct(await response.json());
  
      };
      FetchData();
    },);

  const ShowProduct =()=>{
        return(
          <>
            <div className="grid grid-cols-6">
                <img src={product.image} alt={product.title} />
            </div>
          </>
        )
  }
  return (
   <>
      <div className='container'>
      <div className="flex-row">
      {<ShowProduct/>}
      </div>
    </div>
   </>
  )
}

export default Products
