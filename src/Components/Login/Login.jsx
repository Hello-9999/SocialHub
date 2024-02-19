import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, handleGooglebtn, provider } from "../../Server/Firebase_Store";
import { errortoast, successtoast } from "../../service/Toastlify";
import GoogleButton from "react-google-button";

const Login = () => {
  const [Email, set_Email] = useState();

  const [Password, setpassword] = useState();

  const navigate = useNavigate();

  const Login_Submmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed IN
        const user = userCredential.user;
        successtoast("Authentication successful! Welcome back.");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorMessage === "Firebase: Error (auth/invalid-credential).") {
          errortoast("Please check your login information and try again.");
        } else {
          errortoast(errorMessage);
        }
        // ..
      });

    console.log("first");
  };

  const Showpassword = (e) => {
    // e.preventDefault()
    const Password = document.getElementById("Pass");

    if (Password.type === "password") {
      Password.type = "text";
    } else {
      Password.type = "password";
    }
  };

  return (
    <div className="login_page ">
      <div className="login_container  h-screen">
        <div className="login_box w-full p-8 md:w-4/5 md:m-auto lg:w-2/4  ">
          <form
            action=""
            onSubmit={Login_Submmit}
            className="border rounded-2xl mt-7 p-4 w-full   "
          >
            <h5 className="text-xl font-mono  md:text-4xl font-black text-center text-slate-50">
              Login{" "}
            </h5>

            <div className="Email_cont mt-3 w-full md:w-4/5 m-auto">
              <label htmlFor="email" className=" text-lg md:text-xl">
                {" "}
                Email :
              </label>

              <div className="mt-2">
                <input
                  className="w-full text-lg md:text-xl appearance-none block bg-slate-950 text-slate-2a00 border-2 focus:border-blue-800 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none border-gray-500 focus:bg-slate-950"
                  type="text"
                  id="email"
                  required
                  autoComplete=""
                  onChange={(e) => set_Email(e.target.value)}
                />
              </div>
            </div>

            <div className="Password_cont mt-3 w-full md:w-4/5 m-auto">
              <label htmlFor="Pass" className=" text-lg md:text-xl">
                {" "}
                Enter your password :
              </label>

              <div className="mt-2">
                <input
                  className="w-full  text-lg md:text-xl appearance-none block bg-slate-950 text-slate-2a00 border-2 focus:border-blue-800 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none border-gray-500 focus:bg-slate-950"
                  type="password"
                  id="current-password"
                  required
                  autoComplete=""
                  onChange={(e) => setpassword(e.target.value)}
                />

                <div className="show_pass mt-2 flex gap-2 items-center">
                  <input
                    id="show_pass"
                    type="checkbox"
                    onClick={Showpassword}
                    className=" checked:bg-blue-800 size-4 md:size-5"
                  />
                  <label htmlFor="show_pass" className="text-base md:text-lg">
                    Show Password
                  </label>
                </div>
              </div>
            </div>

            <div className="Submmit_btn mt-4 w-full md:w-4/5 m-auto text-center">
              <button
                type="submmit"
                className="w-4/5 p-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:border-none"
              >
                {" "}
                Login{" "}
              </button>
            </div>

            <div className="mt-4 w-full md:w-4/5 m-auto text-center">
              <h6>or</h6>

              <GoogleButton
                className="mt-4 m-auto w-4/5 rounded-lg "
                style={{ width: "" }}
                onClick={handleGooglebtn}
              />
            </div>
          </form>

          <div className="aleredy mt-4 w-full md:w-4/5 m-auto text-center">
            {" "}
            <h5>
              Don't have an account ? <a href="/signup">Sign Up</a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
