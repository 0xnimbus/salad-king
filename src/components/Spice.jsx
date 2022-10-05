import React from "react"

export default function Nav(props){

    if( props.spice == 1) {
        return(
            <div>
                <h1> A little kick </h1> 
            </div> 
        )
    } else if (props.spice >= 2 && props.spice <= 3 ) {
        return(
            <div>
                <h1> Nice</h1>
            </div>
        )
    } else if (props.spice >= 4 && props.spice < 5 ) {
        return(
            <div>
                <h1> Start mopping your brow</h1>
            </div>
        )
    } else if (props.spice >= 5 && props.spice < 10 ) {
        return(
            <div>
                <h1> Watch out </h1>
            </div>
        )
    }  else if (props.spice >= 10 && props.spice < 15 ) {
        return(
            <div>
                <h1> Are you sure?</h1>
            </div>
        )
    }  else if (props.spice >= 15 && props.spice < 20 ) {
        return(
            <div>
                <h1> Some like it hot</h1>
            </div>
        )
    }  else if (props.spice >= 20) {
        return(
            <div>
                <h1> May cause stomach upset</h1>
            </div>
        )
    } else {
        return(
            <div>
                <h1> Not Spicy </h1>
            </div>
        )
    }
    

}