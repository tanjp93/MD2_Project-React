import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker, Space } from 'antd';
import { act_get_number_pp, act_search_items } from '../../redux/actions';



const { RangePicker } = DatePicker;

// const onPanelChange = (value, mode) => {
//     console.log(value.format('YYYY-MM-DD'), mode);
// };
const Order = () => {

    const dateFormat = 'YYYY/MM/DD';
    const [searchData, setSearData] = useState({
        toWhere: "",
        date: {
            dayCome: "",
            dayLeave: ""
        },
        peopleNum: ""
    })

    let numPeople=1;
    const handleChangeNumber=(e)=>{
         numPeople=e.target.value
         dispatch(act_get_number_pp(numPeople))
        handleChange(e)
    }
    const handleChange = (e) => {
        let key=e.target.name
        setSearData({...searchData,[key]:e.target.value})
    }
    const [userLogin, setUserLogin] = useState('')
    const userLoginState = useSelector(state => state.userLogin);

    useEffect(() => {
        userLoginState == '' ? setUserLogin(elementBtn) : setUserLogin('')
    }, [userLoginState])
    const elementBtn = <div className='oder-content'>
        <p className='oder-content-notice'>Đăng nhập để nhận thêm ưu đãi 15% khi đặt phòng khách sạn, vé máy bay</p>
        <div className='login-registerForm'>
            <Button onClick={() => navigate("/login")} type='primary'>Đăng Nhập</Button>
            <Button onClick={() => navigate("/register")}>Đăng Ký</Button>
        </div>
    </div>


    const navigate = useNavigate()

 
    const dispatch=useDispatch();
    const handleSearchData=()=>{
        dispatch(act_search_items(searchData))
    }

    return (
        <div className='body-oder'>
            <img src="https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/images%2Fkusatsu_KV.jpg?alt=media&token=15c9fc5c-b859-4ba9-bc9e-df0b355a6ed0" alt="" />

            <div className='bodyOder-search-container'>
                <div className='bodyOder-search'>
                    <div className='bodyOder-search_title'>
                        <div className='bodyOder-search_title_item'>Khách Sạn</div>
                        <div className='bodyOder-search_title_item'>Vé Máy Bay</div>
                        <div className='bodyOder-search_title_item'>Biệt Thự</div>
                    </div>
                    <div className='bodyOder-search_container'>
                        <div className='bodyOder-search_Oders'>
                            <div className='bodyOder-search_Oders_place'>
                                <p>Điểm đến</p>
                                <input
                                    name='toWhere'
                                    onChange={handleChange}
                                    type="text"
                                    placeholder=' Nhập địa điểm đến ......' /> </div>
                            <div className='bodyOder-search_Oders_dayGo'>
                                <p>Chọn Ngày Đi</p>
                                <Space direction="vertical" size={12} name='date'>
                                    <RangePicker onChange={(e)=>{
                                        let dayCome = `${e[0].$y}/${e[0].$M + 1}/${e[0].$D}`;
                                        let dayLeave = `${e[1].$y}/${e[1].$M + 1}/${e[1].$D}`;
                                        setSearData({...searchData, date:{dayCome, dayLeave}})
                                    }} format={dateFormat} />
                                </Space >
                            </div>
                            <div className='bodyOder-search_Oders_people'>
                                <label>Chọn Số Người</label>
                                <select className='bodyOder-search_Oders_numPp'
                                    onChange={handleChangeNumber}
                                    name='peopleNum'
                                >
                                    <option value="1" >Nhập số người</option>
                                    <option value="1" >1 người lớn</option>
                                    <option value="2" >2 người lớn</option>
                                    <option value="3" >3 người lớn</option>
                                    <option value="2.5" >2 người lớn & 1 trẻ em</option>
                                    <option value="3.5">3 người lớn & 1 trẻ em</option>
                                    <option value="4">3 người lớn & 2 trẻ em</option>
                                </select>
                            </div>
                            <div className='bodyOder-search_btn' >
                                <Button onClick={handleSearchData} type='primary' style={{ display: "flex", alignItems: "center", justifyContent: "center" }} ><SearchOutlined /></Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {userLogin}
        </div>
    );
}

export default Order;
