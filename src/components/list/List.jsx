import React from 'react';
import Item from './Item';

const List = () => (
    <div>
        {[1, 2, 3, 4].map(item => (
            // <Item key={item} />
            null
        ))}
    </div>
);

export default List;
