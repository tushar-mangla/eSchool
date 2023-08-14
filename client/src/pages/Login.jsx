// import { useState } from "react";
// import { Form, redirect, useNavigation } from "react-router-dom";
// import customFetch from "../utils/customFetch";
// import { toast } from "react-toastify";
// import LoginChoice from "../components/LoginChoice";
// import FormRow from "../components/FormRow";
// // import { Button } from "react-bootstrap";
// import Logo from "../components/Logo";
// import "../css/Login.css";

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);

//   try {
//     await customFetch.post("/auth/login", data);
//     toast.success("Login successful");
//     return redirect("/dashboard");
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return error;
//   }
// };

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [selectedOption, setSelectedOption] = useState("email");
//   // const navigation = useNavigation();

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//   };

//   const value = selectedOption === "email" ? email : phone;

//   // const onChange = (e) => {
//   //   if (selectedOption === "email") {
//   //     setEmail(e.target.value);
//   //   } else {
//   //     setPhone(e.target.value);
//   //   }
//   // };

//   return (
// <div className="rectangle-1 d-flex justify-content-center">
//   <div className="container rectangle-2">
//     <div className="d-flex  align-items-start header">
//       <div>
//         <Logo />
//       </div>
//       <div className="d-flex w-100 flex-column justify-content-center align-items-center">
//         <div className="h5 header-text1">School Management Tool </div>
//         <div className="h3 header-text2">
//           <div className="d-flex flex-column text-start">
//             <div className="row">For Improved Learning and</div>
//             <div className="row">Teaching experience !</div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="row layout">
//       <div className="layout-img">
//         <img
//           src="../../public/Images/login.png"
//           className="img-fluid"
//           alt="Login image"
//         />
//       </div>
//       <div className="login-form">
//         <div className="row rectangle-3">
//           <div className="col">
//             <div className="row welcome">
//               <h2>Welcome Back</h2>
//             </div>

//             <div className="mini-container">
//               <div className="row ">
//                 <div className="form-row log-choice">
//                   <LoginChoice
//                     selectedOption={selectedOption}
//                     onOptionChange={handleOptionChange}
//                     setPassword={setPassword}
//                   />
//                 </div>
//               </div>
//               <div className="row">
//                 <Form method="post">
//                   <div>
//                     {selectedOption === "email" && (
//                       <>
//                         <div className="row">
//                           <div
//                             className="col form-row field"
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                             }}
//                           >
//                             <FormRow
//                               className="col email-input"
//                               type="email"
//                               name="email"
//                               onChange={(e) => setEmail(e.target.value)}
//                               value={value}
//                               placeholder="Email"
//                               style={{ marginRight: "10px" }}
//                             />
//                             <img
//                               className="email-img"
//                               src="../../public/Images/email.svg"
//                               alt=""
//                             />
//                           </div>
//                           <div
//                             className="col form-row field"
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                             }}
//                           >
//                             <FormRow
//                               className="col email-input"
//                               type="password"
//                               name="password"
//                               onChange={(e) => setPassword(e.target.value)}
//                               value={value}
//                               placeholder="Password"
//                               style={{ marginRight: "10px" }}
//                             />
//                             <img
//                               className="email-img"
//                               src="../../public/Images/password.svg"
//                               alt=""
//                             />
//                           </div>
//                         </div>
//                       </>
//                     )}
//                     {selectedOption === "phone" && (
//                       <>
//                         <div className="row">
//                           <div
//                             className="col form-row field"
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                             }}
//                           >
//                             <FormRow
//                               className="col email-input"
//                               type="number"
//                               name="mobilePhone"
//                               onChange={(e) => setPhone(e.target.value)}
//                               value={value}
//                               placeholder="Phone"
//                               style={{ marginRight: "10px" }}
//                             />
//                             <img
//                               className="email-img"
//                               src="../../public/Images/email.svg"
//                               alt=""
//                             />
//                           </div>
//                           <div
//                             className="col form-row field"
// style={{
//   display: "flex",
//   alignItems: "center",
// }}
//                           >
//                             <FormRow
//                               className="col email-input"
//                               type="password"
//                               name="mobilePhone"
//                               onChange={(e) => setPassword(e.target.value)}
//                               value={value}
//                               placeholder="Password"
//                               style={{ marginRight: "10px" }}
//                             />
//                             <img
//                               className="email-img"
//                               src="../../public/Images/password.svg"
//                               alt=""
//                             />
//                           </div>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                   <div className="row">
//                     <button
//                       type="submit"
//                       className="btn btn-primary btn-login"
//                     >
//                       Login
//                     </button>
//                   </div>
//                 </Form>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <a href="/register">Create an account?</a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import LoginChoice from "../components/LoginChoice";
import FormRow from "../components/FormRow";
import "../style/Login.scss";
import { Icon } from "react-icons-kit";
import { locked } from "react-icons-kit/iconic/locked";
import { unlocked } from "react-icons-kit/iconic/unlocked";
import groupPhoto from "../images/groupPhoto.png";
import emailLogo from "../images/emailLogo.svg";
import mainLogo from "../images/mainLogo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("email");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const value = selectedOption === "email" ? email : phone;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.type = selectedOption;

    try {
      const response = await customFetch.post("/auth/login", data);
      console.log(response);
      if (response.status === 200) {
        toast.success("Login successful");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <div className="LoginPageContainer">
      <div className="mainLogo">
        <img className="logo" src={mainLogo} />
        <p className="logoText">eSchool</p>
      </div>
      <div className="mainHeading">
        <p className="heading1">School Management Tool</p>
        <p className="heading2">
          For Improved Learning and <br /> Teaching experience !
        </p>
      </div>
      <div className="learnMoreSection">
        <button className="learnMoreButton">Learn More</button>
      </div>
      <div className="Loginpageform">
        <img className="mainImage" src={groupPhoto} />
        <div className="accountSection">
          <div className="col">
            <form className="form" method="post" onSubmit={handleSubmit}>
              <p className="formHeading">Welcome back</p>
              <LoginChoice
                className="subheading"
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
                setPassword={setPassword}
              />
              {selectedOption === "email" && (
                <div>
                  <div className="formRow">
                    <FormRow
                      className="formInput"
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={value}
                      placeholder="Email"
                    />
                    <img className="inputImage" src={emailLogo} alt="" />
                  </div>
                  <div className="formRow">
                    <FormRow
                      className="formInput"
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="Password"
                    />
                    <img
                      className="email-img"
                      src="../../public/Images/password.svg"
                      alt=""
                    />
                  </div>
                </div>
              )}
              {selectedOption === "phone" && (
                <div>
                  <div className="formRow">
                    <FormRow
                      className="formInput"
                      type="number"
                      name="mobilePhone"
                      onChange={(e) => setPhone(e.target.value)}
                      value={value}
                      placeholder="Phone"
                    />
                    <img
                      className="email-img"
                      src="../../public/Images/email.svg"
                      alt=""
                    />
                  </div>
                  <div className="formRow">
                    <FormRow
                      className="formInput"
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="Password"
                      style={{ marginRight: "10px" }}
                    />
                    <img
                      className="email-img"
                      src="../../public/Images/password.svg"
                      alt=""
                    />
                  </div>
                </div>
              )}
              <button type="submit" className="loginBtn">
                Login
              </button>
            </form>
          </div>
          <Link to="/register" className="createAccountBtn">
            Create an account ?
          </Link>
        </div>
      </div>
    </div>
    // <div className="rectangle-1 d-flex justify-content-center">
    //   <div className="container rectangle-2">
    //     {/* Header */}
    //     <div className="d-flex align-items-start header">
    //       {/* Logo */}
    //       <div>
    //         <Logo />
    //       </div>
    //       <div className="d-flex w-100 flex-column justify-content-center align-items-center">
    //         <div className="h5 header-text1">School Management Tool</div>
    //         <div className="h3 header-text2">
    //           <div className="d-flex flex-column text-start">
    //             <div className="row">For Improved Learning and</div>
    //             <div className="row">Teaching experience !</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* Form */}
    //     <div className="row layout">
    //       <div className="layout-img">
    //         <img
    //           src="../../public/Images/login.png"
    //           className="img-fluid"
    //           alt="Login image"
    //         />
    //       </div>
    //       <div className="login-form">
    //         <div className="row rectangle-3">
    //           <div className="col">
    //             <div className="row welcome">
    //               <h2>Welcome Back</h2>
    //             </div>
    //             <div className="mini-container">
    //               <div className="row">
    //                 <div className="form-row log-choice">
    //                   <LoginChoice
    //                     selectedOption={selectedOption}
    //                     onOptionChange={handleOptionChange}
    //                     setPassword={setPassword}
    //                   />
    //                 </div>
    //               </div>
    //               <div className="row">
    //                 <form method="post" onSubmit={handleSubmit}>
    //                   {selectedOption === "email" && (
    //                     <div className="row">
    //                       <div
    //                         className="col form-row field"
    //                         style={{
    //                           display: "flex",
    //                           alignItems: "center",
    //                         }}
    //                       >
    //                         <FormRow
    //                           className="col email-input"
    //                           type="email"
    //                           name="email"
    //                           onChange={(e) => setEmail(e.target.value)}
    //                           value={value}
    //                           placeholder="Email"
    //                           style={{ marginRight: "10px" }}
    //                         />
    //                         <img
    //                           className="email-img"
    //                           src="../../public/Images/email.svg"
    //                           alt=""
    //                         />
    //                       </div>
    //                       <div
    //                         className="col form-row field"
    //                         style={{
    //                           display: "flex",
    //                           alignItems: "center",
    //                         }}
    //                       >
    //                         <FormRow
    //                           className="col email-input"
    //                           type="password"
    //                           name="password"
    //                           onChange={(e) => setPassword(e.target.value)}
    //                           value={password}
    //                           placeholder="Password"
    //                           style={{ marginRight: "10px" }}
    //                         />
    //                         <img
    //                           className="email-img"
    //                           src="../../public/Images/password.svg"
    //                           alt=""
    //                         />
    //                       </div>
    //                     </div>
    //                   )}
    //                   {selectedOption === "phone" && (
    //                     <div className="row">
    //                       <div
    //                         className="col form-row field"
    //                         style={{
    //                           display: "flex",
    //                           alignItems: "center",
    //                         }}
    //                       >
    //                         <FormRow
    //                           className="col email-input"
    //                           type="number"
    //                           name="mobilePhone"
    //                           onChange={(e) => setPhone(e.target.value)}
    //                           value={value}
    //                           placeholder="Phone"
    //                           style={{ marginRight: "10px" }}
    //                         />
    //                         <img
    //                           className="email-img"
    //                           src="../../public/Images/email.svg"
    //                           alt=""
    //                         />
    //                       </div>
    //                       <div
    //                         className="col form-row field"
    //                         style={{
    //                           display: "flex",
    //                           alignItems: "center",
    //                         }}
    //                       >
    //                         <FormRow
    //                           className="col email-input"
    //                           type="password"
    //                           name="password"
    //                           onChange={(e) => setPassword(e.target.value)}
    //                           value={password}
    //                           placeholder="Password"
    //                           style={{ marginRight: "10px" }}
    //                         />
    //                         <img
    //                           className="email-img"
    //                           src="../../public/Images/password.svg"
    //                           alt=""
    //                         />
    //                       </div>
    //                     </div>
    //                   )}
    //                   <div className="row">
    //                     <button
    //                       type="submit"
    //                       className="btn btn-primary btn-login"
    //                     >
    //                       Login
    //                     </button>
    //                   </div>
    //                 </form>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row m-2 text-center">
    //           <a href="/register" style={{ textDecoration: "none" }}>
    //             Create an account?
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
