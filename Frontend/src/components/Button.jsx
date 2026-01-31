import React from 'react'

export default function Button({ onClick, children, style,disabled }) {
    return (
        <button disabled={disabled} className={`btn ${style}`} onClick={onClick}>{children}</button>
    )
}
