import React, { useState } from 'react';

const InputForm = () => {
    // const [name,setName] = useState("")
    // const [txt,setTxt] = useState("")
  const [data, setData] = useState([]);
  const [value,setValue] = useState("")

  const handleClick =()=>{
    const newdata = [...data,value]
    setData(newdata);
    setValue("")
    console.log(newdata)
  }
    
  const handleChnge =(e)=>{
    setValue(e.target.value)
  }
  
//   const change =(e)=>{
//     setTxt(e.target.value)
//   }

//   const submit =()=>{
//     setName(Txt)
//   }



  return (
    <div>
      <input
        className='m-2 p-2 border border-1 border-black'
        placeholder='FirstName'
        onChange={handleChnge}
        value={value}

    
      />
      <button className='m-2 p-2 border border-1 border-black' onClick={handleClick}>
        Add
      </button>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item}</h1>
        </div>
      ))}
    </div>
  );
};

export default InputForm;
