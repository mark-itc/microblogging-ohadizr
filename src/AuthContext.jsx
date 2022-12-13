import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {

    // const [authApiKey, setAuthApiKey] = useState('');
    // const [authName, setAuthName] = useState('');

    // async function getFromForage() {
    //     const creds = await localForage.getItem('movie-search-credentials');
    //     if (creds) {
    //         setAuthApiKey(creds.apiKey);
    //         setAuthName(creds.name);
    //     }
    // }

    // useEffect(() => {
    //     getFromForage()
    // }, [])

    // useEffect(() => {
    //     localForage.setItem('movie-search-credentials', {
    //         apiKey: authApiKey,
    //         name: authName
    //     });
    // }, [authApiKey, authName])

    return (
        <AuthContext.Provider value={{children}}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthContext, AuthContextProvider };