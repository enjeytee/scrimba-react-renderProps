/// RENDER PROPS PART 01 ///

import React from "react";
import Menu from "./Menu.jsx";
import Favorite from "./Favorite.jsx";
import Toggler from "./Toggler.jsx";

export default function App() {
    return (
        <div>
            <Toggler
                defaultOnValue={true}
                render={({on, toggle}) => (
                    <Menu 
                        on={on}
                        toggle={toggle}
                    />
                )}
            />
            <hr/>
            <Favorite />
        </div>
    );
};


/// END OF RENDER PROPS PART 01 ///