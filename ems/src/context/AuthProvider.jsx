import React, { createContext } from 'react'


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  return (
    <div>
        <AuthContext.Provider  value={'val'}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;