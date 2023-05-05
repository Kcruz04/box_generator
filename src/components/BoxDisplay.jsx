import React, {useState} from 'react'

const BoxDisplay = (props) => {
    return(
        <div>
            <h3>Boxes:</h3>
            {
                props.boxes.map((b, i) => {
                    return(
                        <div style={{backgroundColor: b, height:100, width:100 }} key={i}>
                            {b}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BoxDisplay;