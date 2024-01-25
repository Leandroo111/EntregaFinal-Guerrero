import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

    return (
        <>
            <div className='greeting'>
                {greeting}
            </div>
        </>
    )
}

export default ItemListContainer