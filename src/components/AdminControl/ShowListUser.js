import React, { useEffect } from 'react';
import { Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { act_edit_user } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';


const ShowListUser = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.listUser);
    const handleEdit = (e) => {

        dispatch(act_edit_user(e))
        navigate('/controls/edit')
    }

    const elementshow = listUsers.map((user) => {
        // console.log(user);
        const stateAcc = user.state == 1 ? "Active" : user.state == 0 ? "Block" : "Admin";
        const btnState = <Button type="primary" danger >
            {stateAcc == "Active" ? "Block" : stateAcc == "Block" ? "Active" : 'Admin'}
        </Button>
        return <tr className='userControl-tb-body' key={user.id} >
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.fullname}</td>
            <td>{stateAcc}</td>
            <td>{btnState}</td>
            <td>
                <Space className="site-button-ghost-wrapper" wrap>
                    <Button type="primary" onClick={() =>{ handleEdit(user)
                    }} > Edit </Button>
                    <Button type="primary" > Delete </Button>
                </Space>
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
