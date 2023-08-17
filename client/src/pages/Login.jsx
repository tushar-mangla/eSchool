import { useState } from "react";
import { useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import LoginChoice from "../components/LoginChoice";
import FormRow from "../components/FormRow";
import "../style/Login.scss";
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
  );
};

export default Login;
