import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://lh3.googleusercontent.com/proxy/KNrjBzCCW-aFyhSXen_NiMicedzCTiN53FVXbt0JbDCpJonEBhe2RuxFydMIthwqlLYoMIQMAImcgduyX8bENxPr5t72ERzeHkjaBkjc6rEAWNi94xkKK339GTqwALb1I4-RC_g_C_h49fY_yw7ZPWgCpZX6BmcjljGCNkTM1cRKJnE5U1KcQw"
                    alt=""
                />
                <h1>Sign in to Siteguy Message Center</h1>
                <p>siteguy.dev/message</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    );
}

export default Login;
