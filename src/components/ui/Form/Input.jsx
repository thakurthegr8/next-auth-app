import React, { useMemo } from 'react'

const Input = (props) => {
    const { label, ...restProps } = props;
    return (
        <>
            <label>{label}</label>
            <input {...restProps} />
        </>
    )
}
Input.defaultProps = {
    label: "label"
}
export default Input