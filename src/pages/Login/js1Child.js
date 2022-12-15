import React,{useState} from "react";

// child 
const Callback = ({getColor}) => {
    const [activecolor,setActiveColor] = useState();
    const handleChange = (e) => {
        const {value} = e.target;
        setActiveColor(value);
        getColor(value);
    };
    return(
        <input type="text" id="input" aria-label="input" onchange={handleChange}
        value={activecolor}/>
    );
};

export default Callback;