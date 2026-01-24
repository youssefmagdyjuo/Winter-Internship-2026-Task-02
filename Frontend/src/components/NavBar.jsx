import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton';

export default function NavBar() {
    const storedUser = localStorage.getItem("mvec-user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    return (
        <div className='navbar'>
            <nav>
                <Link to="/"><h1>Shopifay</h1></Link>
                <ul className="nav_links">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/products"><li>Products</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
                <div className="logs">
                    {/* <div className='w-25'> */}
                    {
                        user
                            ? (<div className='flex gap-2'>

                                {/* <Button style={'btn-thirdary'}>
                                    <div className="flex gap-2 items-center justify-center">
                                        <i className="text-[var(--color-primary)] fa-solid fa-user"></i>
                                        <span>{user}</span>
                                    </div>
                                </Button> */}
                                <LogoutButton/>
                            </div>)
                            : (<>
                                <Link to="/login-signup">
                                    <Button style={'btn-primary'}>Login</Button>
                                </Link>
                            </>)
                    }
                    {/* </div> */}
                </div>
            </nav>
        </div>
    )
}
