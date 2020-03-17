import React from "react";

function RedButton(props) {
    return (
        <button
            id="join_footer_button"
            onClick={ props.action }
            className={'footer_button'}
        >
            {props.children}
        </button>
    );
}

export default RedButton;