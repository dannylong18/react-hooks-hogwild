import React from "react";

function HogDetails ({hogState}) {


    return (
        <div>
            <h2>{hogState.name}</h2>
            {hogState && (
                <ul>
                    <li>Specialty: {hogState.specialty}</li>
                    <li>Weight: {hogState.weight}</li>
                    <li>Grease State: {hogState.greased ? "Greased" : "Not Greased"}</li>
                    <li>Highest Medal Achieved: {hogState["highest medal achieved"]}</li>
                </ul>
            )}       
        </div>
    )
}

export default HogDetails