import React, { useState } from 'react'

function Form() {
  const [data,setData]=useState([]);
  const [Emails, setEmails] = useState([]);
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [number,SetNumber] = useState("")
  const [address,setAddress] = useState("")

  const handleSubmit =(e)=>{
    e.preventDefault()
    if (Emails.includes(email)) {
      alert('Email already registered!');
      return;
    }
    setFirstName("")
    setLastName("")
    setEmail("")
    SetNumber("")
    setAddress("")
    data.push({firstName,lastName,email,number,address})
    setData([...data])
    console.log(data)
    setEmails([...Emails, email]);
  
  }

  return (
    <div className=' bg-slate-200'>
      <form onSubmit={handleSubmit} className=' w-100 text-center '>
         <h1 className='fs-1 text-center mb-5'>Basic Information</h1>
        <input className=" border border-dark w-50 m-2 p-2 "type="text" placeholder='FirstName' onChange={(e)=>{setFirstName(e.target.value)}} value={firstName}/>

        <input className=" border border-dark w-50 m-2 p-2 "type="text" placeholder='LastName' onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/>

        <input className=" border border-dark w-50 m-2 p-2 "type="email" placeholder='Emal Address' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>

        <input className=" border border-dark w-50 m-2 p-2 "type="Number" placeholder='Phone Number' onChange={(e)=>{SetNumber(e.target.value)}} value={number}/>

        <textarea className=" border border-dark w-50 m-2 p-2 "type="text" placeholder='Address' onChange={(e)=>{setAddress(e.target.value)}} value={address}/>

        <button className="btn m-2 w-50 bg-black text-white rounded-lg text-center" type='submit'> Submit</button>

            
      </form>
      <div>
        {data.map((item,index)=>{
           return(
            <div key={index}>
                 <center>
                    <h1> {item.firstName} </h1> 
                 </center>
            </div>
           )
        })}
      </div>

    </div>
  );
}

export default Form
