import React from "react";

const Card = (props) => {
    return <div {...props} className={`border border-surface p-4 shadow-sm bg-surface/60 rounded-xl ${props.className}`} />;
};

Card.defaultProps = {
    className: "",
};

export default Card;