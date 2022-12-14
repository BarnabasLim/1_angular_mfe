import React from 'react'
import { Link } from 'react-router-dom';
import {user} from '../context/data.models'
import LoginSignupModal from './LoginSignupModal/LoginSignupModal';
const Navigation = ({user, children}:{user:user, children:JSX.Element} ) => {

    return (
       
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
          <div className="drawer-content flex flex-col">
            {/* <!-- Navbar --> */}
            <div className="w-full navbar bg-base-300">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div> 
              <div className="flex-1 px-2 mb-2 font-bold text-2xl">{user? `Hi ${user?.name}`: "MFE POC"}</div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* <!-- Navbar menu content here --> */}
                  <li><Link to='/' >Home</Link></li>
                  <li><Link to='/about' >About</Link></li>
                  <li><Link to='/notfound' >Not Found</Link></li>
                  {/* The button to open modal */}
                  <li><label  htmlFor="my-LoginSignupModal" className="btn">{user?"sign out":"login"}</label></li>
                </ul>
              </div>
            </div>
            {/* <!-- Page content here --> */}
            <LoginSignupModal></LoginSignupModal>
            {/* Content */}
            {children}
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
              {/* <!-- Sidebar content here --> */}
                  <li><Link to='/' >Home</Link></li>
                  <li><Link to='/about' >About</Link></li>
                  <li><Link to='/notfound' >Not Found</Link></li>
                  <li><Link to='/landing' >Not Found</Link></li>
              
            </ul>
            
          </div>
      </div>
      );
}

export default Navigation