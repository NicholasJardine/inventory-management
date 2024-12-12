"use client";
import Sidebar from './(components)/Navbar/Sidebar';
import React, { useEffect } from 'react';
import Navbar from './(components)/Navbar';
import StoreProvider, { useAppSelector } from './redux';


const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed)
    const isSDarkMode = useAppSelector((state)=> state.global.isDarkMode)
    
    useEffect(()=> {
        if (isSDarkMode){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.add("light");

        }
    })

    return (
      <div className={`${isSDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
          <Sidebar/>
          <main className={`flex flex-col w-full h-full py-7 py9 bg-gray-50 ${isSidebarCollapsed ? "md:pl-24": "md:pl-72"}`}>
          <Navbar/>
          {children}
          </main>
      </div>
    )
  }
  
const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
  return (
<StoreProvider>
   <DashboardLayout>{children}</DashboardLayout> 
</StoreProvider>
  )
}

export default DashboardWrapper