import React, { useContext, useState } from 'react';
import { Drawer } from 'antd';
import ThemeToggle from '../ThemeToggle';
import Logo from '../svg/Logo';
import { ThemeContext } from '../../context/ThemeContextAPI';
import { NavBarContext } from '../../context/NavbarContext';
import Links from './Links';
const AppDrawer = () => {
    const {toggle,setToggle} = useContext(NavBarContext);
    console.log("toggle", toggle)
  const {theme} = useContext(ThemeContext)
  const onClose = () => {
    setToggle(false)
  };

  return (
    <>
      <Drawer onClose={onClose} width='50%' open={toggle} style={{background : theme ==="light" ? "": "black", color : theme ==="light" ? "" : "white"}}>
        <ThemeToggle />
        <div className=' flex flex-col items-center mt-8 '>
        <Links />
        </div>
      </Drawer>
    </>
  );
};
export default AppDrawer;
