import React from 'react'
import BoxLayout from './BoxLayout'

export default function ProductCard({children}) {
    return (
        <BoxLayout>
                <div className="productCard">
                    {children}
                </div>
        </BoxLayout>
    )
}
