//use context in typescript https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
//
import React,{createContext, useState} from 'react'
import { JsxEmit } from 'typescript';
type user={
    id:Number;
    name:String;
  }|null;
interface overall_settings_context_prop {
    user: user;
    mode: String;
    handleLogin: () => void;
    handleLogout:() => void;
  }

const overall_settings_context=createContext<overall_settings_context_prop|null>(null);

export function Overall_settings_context_Provider(props:{children: JSX.Element}){
    let children=props.children
    const [user, setUser] = useState<user>(null)
    const [mode, setMode]= useState<String>('light')
    let userList:user[]=[
        {id:1, name:'Anna'},
        {id:2, name:'James'},
        {id:3, name:'Raj'},
    ]
    const handleLogin=()=>{
        setUser(userList[0])
    }
    
    const handleLogout=()=>{
        setUser(null)
    }
    const overall_settings_context_value:overall_settings_context_prop={  
            user:user,
            mode:mode,
            handleLogin:handleLogin,
            handleLogout:handleLogout,
    }
    return (
        <overall_settings_context.Provider value={overall_settings_context_value}>
            {children}
        </overall_settings_context.Provider>
    )


}

export default overall_settings_context;