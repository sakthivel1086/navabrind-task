import "./index.css";
import React,{useState} from "react";
import TextFieldComponent from "../../components/TextFeldComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigate,Link } from "react-router-dom";
import * as yup from 'yup';

const SignUp = (props) =>{

    const [header,setHeader] = useState({heading:"Sign up"});
    const [signUpDate,setSignUpDate] = useState({});
    const [err, setErr]= useState('');
    const navigate= useNavigate();

    const schema = yup.object().shape({
        userName: yup.string().required('user name required'),
        EmailId: yup.string().email().required('email required'),
        signUpPassword: yup.string().required('password required'),
        confirmPassword: yup.string().oneOf([yup.ref('signUpPassword'), null], 'Passwords must match').required()
    });
      
    const signupData = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name);
        console.log(value);
        setSignUpDate(previous=>({...previous,[name]:value}));
        
    }
    const signValidate = () => {
        
        schema
            .isValid(signUpDate)
            .then(function (value) {
                if(value){
                    localStorage.setItem("signUp",JSON.stringify(signUpDate))
                    setErr('')
                    navigate('/');
                }else setErr('please check');
            })
            
    }


    return(
        <div>
            <div className="card">
            <h1>{header.heading}</h1>
            <h5>{err}</h5>
            <TextFieldComponent variant={"outlined"} placeholder={"UserName"} id={"userName"} changeEvent={signupData}name={"userName"}/>

            <TextFieldComponent variant={"outlined"} placeholder={"Enter Email Id"} id={"emailId"} changeEvent={signupData}name={"EmailId"}/>

            <TextFieldComponent variant={"outlined"} placeholder={"Enter password"} id={"signUpPassword"} changeEvent={signupData}name={"signUpPassword"}/>

            <TextFieldComponent variant={"outlined"} placeholder={"Enter confirm password"} id={"confirmPassword"} changeEvent={signupData}name={"confirmPassword"}/>

            <ButtonComponent variant={"contained"} color={"success"} size={"medium"} buttonText={"Submit"} clickEvent={signValidate} />

            <Link to="/">Login</Link>
            </div>

            
        </div>
    )
}

export default SignUp