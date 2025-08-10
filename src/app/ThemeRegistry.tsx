'use client';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useState ,useMemo , useEffect ,createContext , useContext } from 'react'

type Mode ='light' | 'dark'

const ColorModeContext = createContext<{
    mode :Mode;
    toggleColorMode :()=> void;
}>({
    mode :'light',
    toggleColorMode:()=>{}
})
export function useColorMode (){
    return useContext(ColorModeContext)
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  
    // dark mode
    const [mode , setMode]= useState<Mode>('light')
    useEffect(()=>{
      const saveMode = localStorage.getItem('currentMode') as Mode| null
        if(saveMode){
            setMode(saveMode)
        }
    },[])
    const toggleColorMode=()=>{
        const newMode = mode === 'light' ? 'dark' :'light';
        setMode(newMode);
        localStorage.setItem('currentMode' , newMode)
    }
 const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        background: {
          default: mode === 'light' ? '#f5f5f5' : '#121212',
          paper: mode === 'light' ? '#fff' : '#1e1e1e',
        },
        text: {
          primary: mode === 'light' ? '#000' : '#fff',
        },
        // مثال على ألوان إضافية
        primary: {
          main: mode === 'light' ? '#80cbc4' : '#004d40',
        },
        custom :{
          gray: mode === 'light' ? '#f5f5f5' : '#212121',
          teal : mode === 'light' ? '#b2dfdb' : '#004d40',
        },
        
      }as any
    }),
  [mode]);
  return (
    <>
  <ColorModeContext.Provider  value={{mode , toggleColorMode}}>
  <ThemeProvider theme={theme}>
      <CssBaseline />
         {children}
  </ThemeProvider>
  </ColorModeContext.Provider>
     
    </>
  );
}
