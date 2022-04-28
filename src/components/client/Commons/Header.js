import React, { memo, useContext } from "react";
import AuthContext from "src/context/authContext";
import MainNav from "../Nav/MainNav";

const Header = () => {

  return (
    <>
      <AuthContext.Consumer>
        {(context) => console.log(context.user?.user.mobile)}
      </AuthContext.Consumer>
      <MainNav />
    </>
  )

}

export default memo(Header);
