import React from 'react'

export default function FormLayout({ onSubmit , children }) {
    return (
            <form onSubmit={onSubmit}>
                {children}
            </form>
    )
}
