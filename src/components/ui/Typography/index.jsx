import React from "react";
import Heading from "./Heading";
import Caption from "./Caption";

const Typography = (props) => {
    return <p {...props} />;
};

Typography.Heading = Heading;
Typography.Caption = Caption;

export default Typography;