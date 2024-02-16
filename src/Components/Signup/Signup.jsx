import React from "react";
import { useState } from "react";
import { auth } from "../../Server/Firebase_Store";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../Signup/Signup.css";

const Signup = () => {
  const [Full_Name, setFull_Name] = useState("");

  const [Email, set_Email] = useState();

  const [Password, setpassword] = useState();

  const [ConfirmPass, setConfirmPass] = useState();
  const [Profile_Pic, setProfile_Pic] = useState(null);
  const navigate = useNavigate();

  const Create_Acc = (e) => {
    e.preventDefault();

    console.log("first");

    if (Password === ConfirmPass) {
      const Login_Data = {
        Name: Full_Name,

        Email: Email,
        Password: Password,
        // Profile_Pic: URL.createObjectURL(Profile_Pic),
      };
      console.log(Login_Data);

      //   createUserWithEmailAndPassword(auth, Email, Password)
      //     .then((userCredential) => {
      //       // Signed up
      //       const user = userCredential.user;

      //       if (user) {
      //         updateProfile(user, {
      //           displayName: `${Full_Name}`,
      //           photoURL: `${Profile_Pic}`,
      //         });
      //       }

      //       console.log(user, "user");

      //       // ...
      //     })
      //     .catch((error) => {
      //       const errorCode = error.code;
      //       const errorMessage = error.message;
      //       // alert(errorMessage);
      //       if (errorMessage == "Firebase: Error (auth/email-already-in-use).") {
      //         alert("Email is already use try anonther email");
      //       } else {
      //         alert(errorMessage);
      //       }
      //       // ..
      //     });

      navigate("/");
    } else {
      alert("Password didn't Match !!");
    }
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

  const Confirmpassword = (e) => {
    // e.preventDefault()
    const Password = document.getElementById("Con_Pass");

    if (Password.type === "password") {
      Password.type = "text";
    } else {
      Password.type = "password";
    }
  };
  return (
    <div className="login_page ">
      <div className="login_container  h-screen">
        {/* <div className="welcome_para border w-full bg-white  hidden lg:block">
          {" "}
          <h5> test</h5>
        </div> */}

        <div className="login_box w-full p-8 md:w-4/5 md:m-auto lg:w-2/4  ">
          <form
            action=""
            onSubmit={Create_Acc}
            className="border rounded-2xl mt-7 p-4 w-full   "
          >
            <h5 className="text-xl font-mono  md:text-4xl font-black text-center text-slate-50">
              Create an account
            </h5>

            <div className="Name_cont mt-10  w-full md:w-4/5 m-auto">
              <label htmlFor="fullname " className="text-lg md:text-xl">
                {" "}
                Enter Your full name :
              </label>

              <div className="mt-2">
                <input
                  className="w-full text-lg md:text-xl appearance-none block bg-slate-950 text-slate-2a00 border-2 focus:border-blue-800 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none border-gray-500 focus:bg-slate-950"
                  type="text"
                  id="fullname"
                  required
                  autoComplete=""
                  onChange={(e) => setFull_Name(e.target.value)}
                />
              </div>
            </div>

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
                  className="w-full text-lg md:text-xl appearance-none block bg-slate-950 text-slate-2a00 border-2 focus:border-blue-800 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none border-gray-500 focus:bg-slate-950"
                  type="password"
                  id="Pass"
                  required
                  // autoComplete=""
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

            <div className="Confirm_password_cont mt-3 w-full md:w-4/5 m-auto">
              <label htmlFor="Con_Pass" className="text-lg md:text-xl">
                {" "}
                Confirm Password :
              </label>

              <div className="mt-2 ">
                <input
                  className="w-full text-lg md:text-xl appearance-none block bg-slate-950 text-slate-2a00 border-2 focus:border-blue-800 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none border-gray-500 focus:bg-slate-950"
                  id="Con_Pass"
                  required
                  type="password"
                  // autoComplete=""
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
                <div className="show_pass mt-2  flex items-center gap-2">
                  <input
                    id="con_pass"
                    type="checkbox"
                    onClick={Confirmpassword}
                    className=" checked:bg-blue-800 size-4 md:size-5"
                  />
                  <label htmlFor="con_pass" className="text-base md:text-lg">
                    {" "}
                    Show Password
                  </label>
                </div>
              </div>
            </div>

            <div className="Submmit_btn mt-4 w-full md:w-4/5 m-auto text-center">
              <button type="submmit" className="w-4/5 p-4">
                {" "}
                Create Account
              </button>
            </div>

            <div className="aleredy mt-4 w-full md:w-4/5 m-auto text-center">
              {" "}
              <h5>
                Already have an account ? <a href="/">Login</a>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
