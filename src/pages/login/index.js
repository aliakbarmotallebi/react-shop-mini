import React from "react"
import AuthBox from "@components/client/Login/authBox";
import CustomHead from "@components/client/header/customHead";

const Login = () => {
    return (
        <>
            <CustomHead title='ورود' />
            <AuthBox />
        </>
    )

}
export default Login