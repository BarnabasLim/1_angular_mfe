import React, { useContext ,useState } from 'react'
import overall_settings_context from '../../../context/Overall_settings';
import {user} from '../../../context/data.models'

const Dropdown = ({currSelection,setCurrSelection}:{currSelection:user,setCurrSelection: (user:user)=>void}) => {
    let overall_settings=useContext(overall_settings_context)
    let userList=overall_settings?overall_settings?.userList:[];
    let setUser=overall_settings?overall_settings?.setUser:()=>{};


    return (
        <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>
            <a>
                {currSelection==null?"Select Account":currSelection.name}
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul className="p-2 bg-base-100">
                {userList.map((user:user)=>{
                    let id=user?user?.id:1
                    let name=user?user?.name:""
                    return(<li key={id.toString()} onClick={()=>(setCurrSelection(user))}><a>{name}</a></li>)
                })}

            </ul>
            </li>
        </ul>
    )
}

export default Dropdown