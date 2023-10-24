import React from 'react'
import { NavLink } from 'react-router-dom'
import Userauth from '../Users/Userauth'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    let d = JSON.parse(localStorage.getItem('checkUserLogin'));
    console.log(d);

    const logout = () => {
        localStorage.clear('checkUserLogin');
        navigate('/');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary ">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand text-white fs-2">Flipcart App</NavLink>
                
                        <input className='form-control' style={{width :'50%'}} type='text' placeholder='search product'/>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse custom-nav" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                           { !d ? (<>
                                <li className="nav-item">
                                    <NavLink to='/login' className="nav-link active  text-white" aria-current="page" >Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/register' className="nav-link active  text-white" aria-current="page" >Register</NavLink>
                                </li>
                            </>) : (
                                <li className="nav-item">
                                    <NavLink onClick={ () => logout() } className="nav-link active  text-white" aria-current="page" >Logout</NavLink>
                                </li>
                            )
} 


                            <li className="nav-item">
                                <NavLink to='/' className="nav-link active  text-white" aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/product' className="nav-link text-white">Product</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-white">Product Details</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={`/cart`} className="nav-link text-white" >Cart</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-white" href="#">Contact</NavLink>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header