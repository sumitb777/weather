import React, {  createContext, useState } from 'react'

export const infocontext=createContext()

const Context = ({children}) => {

  const [info,setinfo]=useState();
const [ref,setref]=useState(false)
  return (
    <infocontext.Provider value={{info,setinfo,setref,ref}}>{children}</infocontext.Provider>
  )
}

export default Context