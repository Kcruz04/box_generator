import React, {useState} from "react";
import BoxForm from '../components/BoxForm';
import BoxDisplay from '../components/BoxDisplay';

const BoxDash = ()=> {
    const[boxArr, setBoxArr] = useState([])

    const coloredBox = (newBox) =>{
        setBoxArr([...boxArr, newBox])
    }


    return(
            <div>
                <h1> Box Generator</h1>
                <BoxForm packagedData={ coloredBox }/>
                <BoxDisplay boxes= {boxArr}/>
            </div>
        )
}


export default BoxDash