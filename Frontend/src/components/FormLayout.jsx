import React from 'react'

export default function FormLayout({ onSubmit , children ,enctype,method,action}) {
    return (
            <form 
            onSubmit={onSubmit}
            method={method}
            action={action}
            encType={enctype}
            >
                {children}
            </form>
    )
}
