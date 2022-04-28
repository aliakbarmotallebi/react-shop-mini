import React, { memo, useContext } from "react";
import AuthContext from "src/context/authContext";
import MainNav from "../Nav/MainNav";



const Header = () => {


  const { user } = useContext(AuthContext);
  if (user) alert(user.mobile)
  return (
    <>
      <MainNav />
    </>
  )

}

export default memo(Header);
