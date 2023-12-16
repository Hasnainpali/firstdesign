import React, { useState } from 'react';

export default function Signup() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [users, setUsers] = useState([]);

    function submit(e) {
        e.preventDefault();
        console.log(userName, userEmail, userPwd);

        // Use spread syntax to create a new array with the updated users
        setUsers([...users, { userName, userEmail, userPwd }]);

        setUserName('');
        setUserEmail('');
        setUserPwd('');
    }

    return (
        <>
            <div className='container border border-danger border-2 p-2'>
                <h1 className='text-center'>Sign Up Form</h1>

                <form onSubmit={submit} className="card m-5">
                    <input value={userName} className='m-3' type="text" placeholder='Name' onChange={(e) => { setUserName(e.target.value) }} required />
                    <input value={userEmail} className='m-3' type="email" placeholder='Email' onChange={(e) => { setUserEmail(e.target.value) }} required />
                    <input value={userPwd} className='m-3' type="password" placeholder='Password' onChange={(e) => { setUserPwd(e.target.value) }} required />
                    <input className='m-3 btn btn-primary' type="submit" value="Submit" />
                </form>
            </div>

            <div className='container mt-2 border border-primary border-2 p-2 '>
                <h1 className='text-center'>All Users</h1>
                <div className='d-flex flex-wrap justify-content-around align-items-center '>

                    {users.map((items, index) => (
                        <div key={index} className="card m-1" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{items.userName}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </>
    );
}