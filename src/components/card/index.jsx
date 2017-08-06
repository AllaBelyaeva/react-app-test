import React from 'react';
import avatar from './../../images/avatar.png';
function Card() {
    return (
        <div className="avatar clearfix">
            <img className="preview" src={avatar} alt="" />
            <span>Trevor Reyes</span>
        </div>

    );
}

export default Card;