"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// import DrawerAppBar from "./(componants)/appbar/page";
import UserList from "./(componants)/user-list/page";

import CartSection from "./(componants)/cartsSection/page";

export default function Home() {
  return (
    <>
      {/* <DrawerAppBar /> */}
  
        <UserList />
        <CartSection />
    
    </>
  );
}
