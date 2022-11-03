import React from 'react'
import Dropdown from './component/Dropdown'
import overall_settings_context from "../../context/Overall_settings";
import { useState,useContext } from "react";
import {user} from '../../context/data.models'
const LoginSignupModal = () => {
  let overall_settings=useContext(overall_settings_context)
  let setUser=overall_settings?overall_settings?.setUser:()=>{};
  let user=overall_settings?overall_settings?.user:null;
  const [currSelection, setCurrSelection] = useState<user>(null)
  return (
    <div>
        {/* The button to open modal */}
        {/* <label htmlFor="my-LoginSignupModal" className="btn">open modal</label> */}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-LoginSignupModal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <div className="space-y-5">
                {user?                                

                    <div>
                      <div className="mb-4">
                          <h3 className="font-semibold text-2xl text-800">Hi {user ? user?.name:"Jim"} </h3>
                          <p className="text-gray-500">Logout of account?</p>
                      </div>
                      <div className="modal-action">
                          <label htmlFor="my-LoginSignupModal" onClick={()=>{setUser(null)}} className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                              Logout
                          </label>
                      </div> 
                    </div>
                    :                    
                    <div>
                      <Dropdown currSelection={currSelection} setCurrSelection={(user:user)=>{setCurrSelection(user)}}></Dropdown>
                      <div className="modal-action">
                          <label htmlFor="my-LoginSignupModal" onClick={()=>{setUser(currSelection)}} className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                              Sign in
                          </label>
                      </div> 
                    </div>
                  

                
                }

   
            </div>
            {/* <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div className="modal-action">
              <label htmlFor="my-LoginSignupModal" className="btn">Yay!</label>
            </div> */}
        </div>
        </div>
    </div>
  )
}

export default LoginSignupModal