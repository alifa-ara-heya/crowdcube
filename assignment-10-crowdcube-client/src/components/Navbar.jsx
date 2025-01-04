import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Tooltip as ReactTooltip } from "react-tooltip";


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const getNavLinkActiveClass = ({ isActive }) =>
        `${isActive && 'bg-[#16425B] text-white active:text-white focus:bg-[#2F6690] focus:text-white'}`;

    const links = <>
        <li><NavLink className={getNavLinkActiveClass} to='/'>Home</NavLink></li>
        <li><NavLink className={getNavLinkActiveClass} to='/all-campaigns'>All Campaigns</NavLink></li>
        <li><NavLink className={getNavLinkActiveClass} to='/add-new-campaign'>Add New Campaign</NavLink></li>
        <li><NavLink className={getNavLinkActiveClass} to='/my-campaign'>My Campaigns</NavLink></li>
        <li><NavLink className={getNavLinkActiveClass} to='/my-donations'>My Donations</NavLink></li>
        {/* <li><NavLink className={getNavLinkActiveClass} to='/register'>Register</NavLink></li> */}
    </>

    return (
        <div className="navbar bg-base-100 max-w-[1440px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-20 mt-3 backdrop-blur-md w-52 p-2 shadow space-y-3">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="flex justify-center items-center pr-5 hover:cursor-pointer">
                    <img src={logo} alt="" className="w-20" />
                    <h2 className="text-2xl font-bold text-blue-900 -ml-3">Crowdcube</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal !important px-1 gap-8">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    user?.email ? (
                        <>
                            <div className="border rounded-full p-1 border-secondary">
                                <img className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" src={user.photoURL} alt="user photo" data-tooltip-id="my-tooltip-1" />
                            </div>
                            <button className="btn text-white bg-gradient-to-r from-primary to-tertiary" onClick={signOutUser}>LogOut</button>
                        </>
                    ) : (
                        <div className="flex justify-center items-center">
                            <Link to='/sign-in' className="btn bg-gradient-to-r from-amber-600 to-yellow-500 text-white">Login</Link>
                            <Link to='/register' className="btn bg-gradient-to-r from-primary to-fourth text-white">Registration</Link>
                        </div>
                    )
                }
                <ReactTooltip
                    id="my-tooltip-1"
                    place="left"
                    content={user?.displayName}
                    style={{ backgroundColor: '#2F6690' }}
                />

            </div>
        </div>
    );
};

export default Navbar;