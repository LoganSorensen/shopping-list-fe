import React from 'react';

const ItemCount = ({count}) => {
    return (
        <div className="item-count">
            <button className='count-btn'><span>{count}</span> pcs</button>
        </div>
    )
}

export default ItemCount;