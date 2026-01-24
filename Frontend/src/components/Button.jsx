import React from 'react'

export default function Button({ onClick, children, style }) {
    return (
        <button className={`btn ${style}`} onClick={onClick}>{children}</button>
    )
}
