import React from 'react'

export default function Input({ placeholder , value , onChange , type="text" }) {
    return (
        <input className='input' type={type} placeholder={placeholder} value={value} onChange={onChange} />
    )
}
