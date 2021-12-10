import React, { useState } from 'react';

const LogIn = () => {
    // const [email, setemail] = useState("")
    // const [password, setpassword] = useState("")
 const email = "";
 const password = "";
    const [credentials, setCredentials] = useState({ email ,password});
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://192.168.1.140:3000/login",
            {
                method: 'POST',

                headers : {
                         'Content-Type': 'application/json',  'Accept': 'application/json'


                }, body: JSON.stringify({ email: credentials.email, password: credentials.password })

            });
        const json = await response.json()
         if (response.status === "Success") {
            
             alert("Login successfull.");
         } else if (response.status === "Error") {
             
             alert("Invalid email");
         
        } 
        console.log(json);
        console.log(response);
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form className="container" onSubmit={handleSubmit}>
                <div className=" container mb-2">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" placeholder="Enter your Email " value={credentials.email} onChange={onChange} name="email" className="form-control" id="Email1" aria-describedby="emailHelp" />
                </div>
                <div className=" container mb-2">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" placeholder=" enter ur password" value={credentials.password} onChange={onChange} name="password" className="form-control" id="password" />
                </div>
                
                <button type="submit" className="btn btn-primary mx-3 my-2">Submit</button>
            </form>
        </div>
    )
}

export default LogIn;
