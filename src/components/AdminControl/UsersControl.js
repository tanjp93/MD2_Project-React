import React, { useEffect, useMemo } from 'react';
import { Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { act_get_list_user } from '../../redux/actions';

const UsersControl = () => {
    const dispatch = useDispatch()
    const listUsers = useSelector(state => state.userReducer)
    console.log(listUsers);
    useEffect(() => {
        dispatch(act_get_list_user())
    }, [])

    let showUser = listUsers.map((user) => (
        <tr className='userControl-tb-body' key={user.id}>
            <td>{user.id+1}</td>
            <td>{user.email}</td>
            <td></td>
            <td>
                Email
            </td>
            <td><Button type="primary" danger >
                Block
            </Button></td>
            <td>
                <Space className="site-button-ghost-wrapper" wrap>
                    <Button type="primary" > Edit </Button>
                    <Button type="primary" > Delete </Button>
                </Space>
            </td >
        </tr>))
    return (
        <></>
        // { showUser }
    );
}

export default UsersControl;
