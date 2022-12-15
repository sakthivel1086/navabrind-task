import React, {useState} from "react";
import { useNavigate,Link } from "react-router-dom";
import "./index.css";
import TextFieldComponent from "../../components/TextFeldComponent";
import ButtonComponent from "../../components/ButtonComponent";

const Login = (props) =>{

    const [header,setheader] = useState({heading:"Login"});
    const [err, setErr]= useState('');

    const signUpDetails=JSON.parse(localStorage.getItem("signUp"));

    const [login,setLogin] = useState({});
    const navigate= useNavigate();

    const validate= () => {
        if(login.email.trim() === signUpDetails.EmailId&&login.password.trim() === signUpDetails.signUpPassword) {
            navigate('/home');
            setErr('');
        } else {
            alert("error");
            setErr('Please check the Email id and Password');
        }

    }
    
    const loginValidation=(e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setLogin(previous=>({...previous,[name]:value}));
    }

    return(
        <div className="login">
            <div className="card">
                <h1>{header.heading}</h1>
                <h5>{err}</h5>
                <TextFieldComponent variant={"outlined"} placeholder={"Enter Email Id"} id={"emailId"} changeEvent={loginValidation}name={"email"}/>

                <TextFieldComponent type={"password"} variant={"outlined"} placeholder={"Enter password"} id={"pass"} name={"password"} changeEvent={loginValidation} value={"password"}/>

                <ButtonComponent variant={"contained"} color={"success"} size={"medium"} buttonText={"Submit"} clickEvent={validate} />

                {/* sign up  */}
                <Link to="/signUp">Sign up</Link>
            </div>
        </div>
    );
}

export default Login;