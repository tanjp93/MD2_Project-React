import React, { useState, useEffect } from 'react';
import HeaderToolbar from '../header/HeaderToolbar';
import Footer from '../footer/footer';
import { Button, Space } from 'antd';
import logo from '../../assets/img/logo.png'
import { useDispatch } from 'react-redux';
import { act_update_items } from '../../redux/actions';


const EditItem = () => {
    const dispatch=useDispatch()
    const [input, setInput] = useState("")
    // console.log(input);
    
    useEffect(() => {
        const itemUpdate = JSON.parse(localStorage.getItem('itemUpdate'));
        itemUpdate && setInput(itemUpdate)
    }, [])


    const handleChange = (e) => {
        let value = e.target.value
        let key=e.target.name
        if (key=='cmt') {
            setInput({...input,cmt:{...input.cmt,[e.target.id]:e.target.value}})
        }else {

            setInput({...input,[key]:value})
        }
    }
    const handleSubmit=()=>{
        dispatch(act_update_items(input))
    }

    return (
        <div>
            <HeaderToolbar />
            <div className='addItemPage'>
                <div className='addProduct'>
                    <div className='addProduct_conttent'>
                        <div className='addProduct_titleProduct'>
                            <div className='addProductInfor'>
                                <div className='addProductDiscrible'>
                                    <p>From : </p>
                                    <select value={input.from} name='from' style={{ textAlign: 'center' }} onChange={handleChange}>
                                        <option value=""></option>
                                        <option value="Hà Nội">Hà Nội</option>
                                        <option value="Hồ Chí Minh" >Hồ Chí Minh</option>
                                        <option value="Đà Nẵng" >Đà Nẵng</option>
                                        <option value="Huế">Huế</option>
                                        <option value="Thanh Hóa" >Thanh Hóa</option>
                                    </select>
                                </div>
                                <div className='addProductDiscrible'>
                                    <p >price :</p>
                                    <input type="text" style={{ textAlign: 'center' }} name='price' value={input ? input.price : ""} onChange={handleChange}></input>
                                    <span>VND</span>
                                </div>
                                <div className='addProductDiscrible'>
                                    <p>Promotion :</p> <input type="text" name='promotion' style={{ textAlign: 'center' }} value={input ? input.promotion : ""} onChange={handleChange}></input> <span>%</span>
                                </div>
                            </div>

                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Tên Tiêu Đề :</p>
                            <input className='addProductTitleInput' name='titleProduct' style={{ display: 'flex', alignContent: 'center' }} cols="5" rows="3" value={input?input.titleProduct:""} onChange={handleChange}></input>
                        </div>

                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Mô tả 1 :</p>
                            {/* {console.log(input)} */}

                            <textarea className='addProductTitleInput'
                                name='cmt' id='cmt1'
                                cols="5" rows="5"
                                 value={input ? input.cmt.cmt1 : ""}
                                onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Mô tả 2:</p>
                            <textarea className='addProductTitleInput' name='cmt' id='cmt2' style={{ display: 'flex', alignItems: 'center' }} cols="5" rows="5"
                                value={input ? input.cmt.cmt2 : ""}
                                onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Mô tả 3:</p>
                            <textarea className='addProductTitleInput' name='cmt' id='cmt3' cols="5" rows="5" value={input ? input.cmt.cmt3 : ""} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Mô tả 4:</p>
                            <textarea className='addProductTitleInput' name='cmt'  id='cmt4' cols="5" rows="5" value={input ? input.cmt.cmt4 : ""} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Mô tả 5:</p>
                            <textarea className='addProductTitleInput' name='cmt'  id='cmt5' cols="5" rows="5" value={input ? input.cmt.cmt5 : ""} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Mô tả 6:</p>
                            <textarea className='addProductTitleInput' name='cmt'  id='cmt6' cols="5" rows="5" value={input ? input.cmt.cmt6 : ""} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProductImg'>
                            <p className='productImg'><span>Video</span>  <video src={input.videoSrc}></video></p>

                            <div className='productImg'> <span>Ảnh 1</span>  <img src={input ? input.img.img1 : ""} alt='Ảnh số 1' /> </div>
                            <div className='productImg'><span>Ảnh 2</span>   <img src={input ?  input.img.img2 : ""} alt='Ảnh số 2' /> </div>
                            <div className='productImg'> <span>Ảnh 3</span>  <img src={input ?  input.img.img3 : ""} alt='Ảnh số 3' /> </div>
                            <div className='productImg'> <span>Ảnh 4</span>  <img src={input ?  input.img.img4 : ""} alt='Ảnh số 4' /> </div>
                            <div className='productImg'> <span>Ảnh 5</span>  <img src={input ? input.img.img5 : ""} alt='Ảnh số 6' /> </div>
                            <div className='productImg'> <span>Ảnh 6</span>  <img src={input ? input.img.img6 : ""} alt='Ảnh số 7' /> </div>
                            <div className='productImg'> <span>Ảnh 7</span>  <img src={input ? input.img.img7 : ""} alt='Ảnh số 8' /> </div>
                            <div className='productImg'> <span>Ảnh 8</span>  <img src={input ? input.img.img8 : ""} alt='Ảnh số 8' /> </div>
                        </div>
                    </div>
                </div>
                <div className='btn_addItem'>
                    <Space>
                        <Button onClick={handleSubmit} style={{ width: '300px', fontSize: '30px', height: 'auto' }} danger type='primary'>Update</Button>
                    </Space>
                </div>
                <img className='addItem-bgrd' src={logo} alt="" />
            </div>

            <Footer />
        </div>
    );
}

export default EditItem;
