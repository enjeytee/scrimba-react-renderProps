import React from "react";

class Toggler extends React.Component {
    state = {
        on: this.props.defaultOnValue
    };
    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            };
        });
    };
    render() {
        return (
            <div>
                {this.props.render({
                    on: this.state.on,
                    toggle: this.toggle
                })}
            </div>
        );
    };
};
Toggler.defaultProps = {
    defaultOnValue: false
};
export default Toggler;