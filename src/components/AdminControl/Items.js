import { Button, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { act_delete_items, act_get_items } from '../../redux/actions';

const Items = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const listItems = useSelector(state => state.getItems);
    useEffect(() => {
        dispatch(act_get_items())
    }, [listItems])
    const handleDelete=(e)=>{
        dispatch(act_delete_items(e))
    }
    const handleUpdate=(e)=>{
        ( localStorage.setItem('itemUpdate',JSON.stringify(e)))
        navigate('/controls/addItem')
    }
    const item = listItems.map(item => {
        return <tr key={item.id}>
            <td className='listProductsTableNo'>{item.id}</td>
            <td className='listProductsTableTitile'>{item.titleProduct}</td>
            <td className='listProductsTableFrom'>{item.from}</td>
            <td className='listProductsTableFrom'>{item.price}</td>
            <td ><Space className="site-button-ghost-wrapper" wrap>
                <Button type="primary" onClick={()=>handleUpdate(item)} >Update </Button>
                <Button type="primary" danger onClick={()=>handleDelete(item.id)} >
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
