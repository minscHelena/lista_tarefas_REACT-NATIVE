import React, { createContext, useContext } from "react";

export const AuthContextList:any = createContext({});

export const AuthProviderList = (props:any):any =>{

    const onOpen = ()=>{

    }
    return(
        <AuthContextList.Provider value={{onOpen}}>
            {props.children}
        </AuthContextList.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContextList);