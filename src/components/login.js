import React from "react";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Enclosed JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(e) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id:
        "337577005986-bmgf3d9j57048kqpsl2lu4gr5c72qecb.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);
  return (
    <>
      <div id="signInDiv"></div>
      {Object.keys(user).length != 0 && (
        <button className="button" onClick={(e) => handleSignOut(e)}>
          Sign Out
        </button>
      )}
      {user && navigate("/Home")}
    </>
  );
};

export default Login;

// import React, { useState } from "react";
// import { GoogleLogin, GoogleLogout } from "react-google-login";

// const Login = () => {
//   const clientId =
//     "337577005986-bmgf3d9j57048kqpsl2lu4gr5c72qecb.apps.googleusercontent.com";
//   const [showLoginButton, setShowLoginButton] = useState(true);
//   const [showLogoutButton, setShowLogoutButton] = useState(false);

//   const onLoginSuccess = (res) => {
//     console.log("Login Success:", res.profileObj);
//     setShowLoginButton(false);
//     setShowLogoutButton(true);
//   };

//   const onFailureSuccess = (res) => {
//     console.log("Login Failed:", res);
//   };

//   const onSignoutSuccess = () => {
//     alert("You have been signed out successfully");
//     setShowLoginButton(true);
//     setShowLogoutButton(false);
//     console.clear();
//   };

//   return (
//     <div>
//       {showLoginButton ? (
//         <GoogleLogin
//           clientId={clientId}
//           buttonText="Login"
//           onSuccess={onLoginSuccess}
//           onFailure={onFailureSuccess}
//           cookiePolicy={"single_host_origin"}
//         />
//       ) : null}
//       {showLogoutButton ? (
//         <GoogleLogout
//           clientId={clientId}
//           buttonText="Logout"
//           onLogoutSuccess={onSignoutSuccess}
//         ></GoogleLogout>
//       ) : null}
//     </div>
//   );
// };

// export default Login;
