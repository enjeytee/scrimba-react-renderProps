import React from "react";

function Menu(props) {
    return (
        <div>
            <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu</button>
            <nav style={{display: props.on ? "block" : "none"}}>
                <h6>Signed in as CoderJohn</h6>
                <p><a>Your Profile</a></p>
                <p><a>Your Repositories</a></p>
                <p><a>Your Stars</a></p>
                <p><a>Your Gists</a></p>
            </nav>
        </div>
    );
};
export default Menu;