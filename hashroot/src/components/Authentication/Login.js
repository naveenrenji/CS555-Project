import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname;
  const role = "ADMIN";

  const login = () => {
    // Make API call to verify and get user data
    // Once we get that data, call auth.signin and take them to
    auth.signIn({ firstName: "CS", lastName: "555", role }, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(role === "ADMIN" ? "/admin/create-user" : (from || "/"), {
        replace: true,
      });
    });
  };

  return (
    <div>
      Login page<button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
