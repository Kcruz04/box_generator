import React, { useState } from 'react'

const BoxForm = (props) => {
    //Declare state variables
    const [boxInput, setBoxInput] = useState("");

    //Function to handle submission
    const handleSubmit = (e) => {
        //statement to prevent default page refresh
        e.preventDefault();
        //data from handleSubmit needs to go to BoxDash
        props.packagedData(boxInput);
        setBoxInput("");
    }

    return (
    <div class="form-group">
        
        <form onSubmit={handleSubmit}>
            <label><h2>Color:</h2> </label> 
            <input onChange={(e) => setBoxInput(e.target.value)} value={boxInput} placeholder='Type color' type="text"/>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
)
};




export default BoxForm