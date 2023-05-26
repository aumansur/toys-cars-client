
import { Link } from 'react-router-dom';
import logo from '../assets/toyncars-logo.png'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className="navbar  sticky top-0 mb-0  z-50 bg-slate-200 py-4 px-20">
            <div className="navbar-start ">
                <Link to='/' className="btn btn-ghost normal-case text-xl hidden lg:flex items-center"><img className='w-28' src={logo} alt="" /> <h1><span className='text-4xl text-blue-800'>Toys</span><span className='text-[#F6AB2E] text-4xl'>cars</span></h1></Link>
                <div className="dropdown">

                    <label tabIndex={0} className="btn btn-ghost ml-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/' className="btn btn-ghost normal-case text-xl items-center"><img className='w-28' src={logo} alt="" /> <h1><span className='text-4xl text-blue-800'>Toys</span><span className='text-[#F6AB2E] text-4xl'>cars</span></h1></Link>

                        <li className='text-lg font-semibold mt-4'> <Link to='/'> Home</Link> </li>
                        <li className='text-lg font-semibold'> <Link to='/alltoys'> All Toys</Link> </li>
                        <li className='text-lg font-semibold'> <Link to='/mytoys'> My Toys</Link> </li>
                        <li className='text-lg font-semibold'> <Link to='/addtoys'> Add a toy</Link> </li>
                        <li className='text-lg font-semibold'> <Link to='/blog'> Blog</Link> </li>
                        <li className='text-lg font-semibold'> <Link to='/signup'> Sign Up </Link> </li>
                        {
                            user ? <button onClick={handleLogOut} className='my-btn'>Log Out</button> :
                                <li className='text-lg font-semibold '> <Link to='/login'> Log in</Link> </li>
                        }


                    </ul>
                </div>

            </div>



            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">


                    <li className='text-lg font-semibold '> <Link to='/'> Home</Link> </li>
                    <li className='text-lg font-semibold '> <Link to='/alltoys'> All Toys</Link> </li>
                    {
                        user && <li className='text-lg font-semibold '> <Link to='/mytoys'> My Toys</Link> </li>
                    }
                    {
                        user && <li className='text-lg font-semibold '> <Link to='/addtoys'> Add a toy</Link> </li>
                    }
                    <li className='text-lg font-semibold '> <Link to='/blog'> Blog</Link> </li>
                    <li className='text-lg font-semibold '> <Link to='/signup'> Sign Up </Link> </li>
                    {
                        user ? <button onClick={handleLogOut} className='my-btn'>Log Out</button> :
                            <li className='text-lg font-semibold '> <Link to='/login'> Log in</Link> </li>
                    }

                </ul>
            </div>
            <div className=' navbar-end ' >
                {user && <img title={user.displayName} className='w-10 h-10 rounded-full ml-8  ' src={user.photoURL} alt="" />}
            </div>
        </div>
    );
};

export default NavBar;