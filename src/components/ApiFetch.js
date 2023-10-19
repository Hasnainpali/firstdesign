import React,{useState,useEffect} from 'react'

function ApiFetch() {
  const [data,setData]=useState([]);
  

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
          data.map((val) => {
               const { id } = val;
               return (
                 <div
                   key={id}
                   className="border border-gray-200 hover:border-black m-2 hover:scale-x-105 transition-transform "
                 >
                   <div className="justify-between items-center p-2">
                   <div className="h-100 rounded-lg mb-8">
                       <img className="h-[250px] m-auto"src={val.image} alt={val.title} />
                     </div>
                     <div className="space-y-4">
                       <h3 className="font-medium text-xl">{val.title.substring(0,15)}</h3>
                       <p className="text-grey-500 text-lg font-bold"> ${val.price}</p>
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
