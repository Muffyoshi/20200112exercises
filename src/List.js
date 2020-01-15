import React from 'react'
import Item from './Item'

const List = () => {
    return (
        <ol>
            {/* Item({content: '課題をする'}) */}
            <Item content={'課題をする'} />
            <Item content={'仕事をする'} />
        </ol>        
    )
}

export default List