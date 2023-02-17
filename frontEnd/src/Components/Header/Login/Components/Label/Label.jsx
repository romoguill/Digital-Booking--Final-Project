import React from "react";
import '../Label/Label.css'

const Label = ({ text }) => {
    return (
        <div className="label-container">
            {text}
        </div>
    )
}

export default Label;