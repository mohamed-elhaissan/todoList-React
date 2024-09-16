import { createContext, useState } from "react";

export const DarkMode = createContext();

export default function DarkModeProvider({children}){
    const [isDarkModeActvated,setDarkModeActvated] = useState(false)
    return (
        <DarkMode.Provider value={{isDarkModeActvated,setDarkModeActvated}}>
            {children}
        </DarkMode.Provider>
    )
}   