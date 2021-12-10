import React from 'react'

const SignUp = () => {
    return (
        <>
            
            <form className="container">
            
                <div className="container my-3">
               <h1 >Registration</h1>
               </div>
                <div className=" container mb-2">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" placeholder="Enter ur Name " name="name" className="form-control" id="Name" aria-describedby="emailHelp" />
                </div>
                <div className=" container mb-2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" placeholder=" Enter ur Email" name="email" className="form-control" id="email" />
                </div>
                <div className=" container mb-2">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" placeholder=" enter ur password" name="password" className="form-control" id="password" />
                </div>
                <div className=" container mb-2">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="number" placeholder=" enter ur mobile number" name="mobile" className="form-control" id="mo" />
                </div>
                <button type="submit" className="btn btn-primary mx-3 my-2">Submit</button>
    
            </form>
    
        </>
    )
}

export default SignUp;












