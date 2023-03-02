import { Button, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { act_get_items } from '../../redux/actions';

const Items = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(act_get_items())
    }, [])
    const listItems = useSelector(state => state.getItems);
    console.log(listItems);
    const item = listItems.map(item => {
        return <tr key={item.id}>
            <td className='listProductsTableNo'>{item.id}</td>
            <td className='listProductsTableTitile'>{item.titleProduct}</td>
            <td className='listProductsTableFrom'>{item.from}</td>
            <td className='listProductsTableFrom'>{item.price}</td>
            <td ><Space className="site-button-ghost-wrapper" wrap>
                <Button type="primary" >Update </Button>
                <Button type="primary" danger >
                    Delete
                </Button>
            </Space></td>
        </tr>
    })
    return (
        <>
            {item}
        </>
    );
}

export default Items;
