import React from "react";

const Heading = (props) => {
    const { level, ...restProps } = props;
    const HeadingVariant = `h${level}`
    return <HeadingVariant {...restProps} />;
};

export default Heading;

Heading.defaultProps = {
    level: 1
}

