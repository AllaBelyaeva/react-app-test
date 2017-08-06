import React from 'react';
import FloatingActionButton from './../../../node_modules/material-ui/FloatingActionButton';

function IconButton(props) {
    return (
        <FloatingActionButton
            children={props.children}
            backgroundColor="#6b6b99"
            className="fixedButton"
            disabled={props.disabled}
            onClick={props.onClick} >
        </FloatingActionButton>
    );
}

export default IconButton;