import React from 'react'

export default function SwitchTogil({children,onClick}) {
    return (
        <div className='switch_container' onClick={onClick}>
            {children}
        </div>
    )
}
