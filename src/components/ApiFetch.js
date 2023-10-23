import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

function ApiFetch() {
  const [data,setData]=useState([])
  

  useEffect(()=>{
    const FetchData = async ()=>{
 
      try{
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
         setData(jsonData);
      }
      catch (error){
        console.error("error fetch data")
      }
    };
    FetchData();
     
  
  },[]);

  return (
         <div className=" container p-4">
           <h2 className='text-xl font-medium ' >Json FakeApi</h2>
    <div  className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-4 gap-2">
      { 
          data.map((product) => {
               const { id } = product;
               return (
                 <div
                   key={id}
                   className="border border-gray-200 hover:border-black m-2 hover:scale-x-105 transition-transform "
                 >
                   <div className="justify-between items-center p-2">
                   <div className="h-100 rounded-lg mb-8">
                       <img className="h-[250px] m-auto"src={product.image} alt={product.title} />
                     </div>
                     <div className="space-y-4">
                       <h3 className="font-medium text-xl">{product.title.substring(0,15)}</h3>
                       <p className="text-grey-500 text-lg font-bold"> ${product.price}</p>
                       <button className=" py-2 px-2 bg-blue-500 text-lg text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none">
                      <Link to={`/ApiFetch/${product.id}`}>Buy Now</Link>
                      </button>
                     </div>
                  
                      
                    
                   
                   </div>
                 </div>
               );
             })}
    </div>
    </div>
  )
}

export default ApiFetch;

