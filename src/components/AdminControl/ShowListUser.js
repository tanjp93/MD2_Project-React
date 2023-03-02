import React, { useEffect } from 'react';
import { Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { act_delete_user, act_edit_user, act_status_user } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';


const ShowListUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.listUser);
    // console.log(listUsers);
    const handleEdit = (e) => {
        dispatch(act_edit_user(e))
        navigate('/controls/edit')
    }
    const handleDelete = (e) => {
        dispatch(act_delete_user(e))
    }
    const handleChangeState = (activeUser) => {
        if (activeUser.state == 1) {
            activeUser.state = 0
        } else if (activeUser.state == 0) {
            activeUser.state = 1
        }
        // console.log(activeUser.state);
        dispatch(act_status_user(activeUser))
    }


    const elementshow = listUsers.map((user) => {
        // console.log(user);
        const stateAcc = user.state == 1 ? "Active" : user.state == 0 ? "Block" : "Admin";
        const btnState = <Button type="primary" danger onClick={() => handleChangeState(user)}>
            {stateAcc == "Active" ? "Block" : stateAcc == "Block" ? "Active" : 'Admin'}
        </Button>
        const btnUpdate = user.email == 'admin@gmail.com' ? '' : <Space className="site-button-ghost-wrapper" wrap>
            <Button type="primary" onClick={() => {
                handleEdit(user)
            }} > Edit </Button>
            <Button type="primary" onClick={() => {
                handleDelete(user)
            }}  > Delete </Button>
        </Space>
        return <tr className='userControl-tb-body' key={user.id} >
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.fullname}</td>
            <td>{stateAcc}</td>
            <td>{btnState}</td>
            <td>
                {btnUpdate}
            </td >
        </tr>
    }
    )
    return (
        // 
        <>
            {elementshow}
        </>
    )
}

export default ShowListUser;
