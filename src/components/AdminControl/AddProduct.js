import React, { useState } from 'react';
import HeaderToolbar from '../header/HeaderToolbar';
import Footer from '../footer/footer';
import { Button, Space } from 'antd';
import logo from '../../assets/img/logo.png'
import { useDispatch } from 'react-redux';
import { act_create_items } from '../../redux/actions';


const EditItem = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        videoSrc: "",
        promotion: "",
        titleProduct: "",
        rate: 5,
        from: "",
        price: '',
        currencyUnit: 'VND',
        img: {
            img1: "",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            img6: "",
            img7: "",
            img8: ""
        },

        cmt: {
            cmt1: "",
            cmt2: "",
            cmt3: "",
            cmt4: "",
            cmt5: "",
            cmt6: "",
        }
    }
    );
    console.log(input);

    const handleChange = (e) => {
        let value = e.target.value
        let key = e.target.name
        if (key == 'cmt') {
            setInput({ ...input, cmt: { ...input.cmt, [e.target.id]: e.target.value } })
        } else {
            setInput({ ...input, [key]: value })
        }
    }
    const handleAdd = () => {
        dispatch(act_create_items(input))
        setInput({
            videoSrc: "",
            promotion: "",
            titleProduct: "",
            rate: 5,
            from: "",
            price: '',
            currencyUnit: 'VND',
            img: {
                img1: "",
                img2: "",
                img3: "",
                img4: "",
                img5: "",
                img6: "",
                img7: "",
                img8: ""
            },

            cmt: {
                cmt1: "",
                cmt2: "",
                cmt3: "",
                cmt4: "",
                cmt5: "",
                cmt6: "",
            }
        })
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
                                        <option value="H?? N???i">H?? N???i</option>
                                        <option value="H??? Ch?? Minh" >H??? Ch?? Minh</option>
                                        <option value="???? N???ng" >???? N???ng</option>
                                        <option value="Hu???">Hu???</option>
                                        <option value="Thanh H??a" >Thanh H??a</option>
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
                            <p className='addProductTitle'>T??n Ti??u ????? :</p>
                            <input className='addProductTitleInput' name='titleProduct' style={{ display: 'flex', alignContent: 'center' }} cols="5" rows="3" value={input ? input.titleProduct : ""} onChange={handleChange}></input>
                        </div>

                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>M?? t??? 1 :</p>
                            {/* {console.log(input)} */}

                            <textarea className='addProductTitleInput'
                                name='cmt' id='cmt1'
                                cols="5" rows="5"
                                value={input ? input.cmt.cmt1 : ""}
                                onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>M?? t??? 2:</p>
                            <textarea className='addProductTitleInput' name='cmt' id='cmt2' style={{ display: 'flex', alignItems: 'center' }} cols="5" rows="5"
                                value={input ? input.cmt.cmt2 : ""}
                                onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>M?? t??? 3:</p>
                            <textarea className='addProductTitleInput' name='cmt' id='cmt3' cols="5" rows="5" value={input ? input.cmt.cmt3 : ""} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>M?? t??? 4:</p>
                            <textarea className='addProductTitleInput' name='cmt' id='cmt4' cols="5" rows="5" value={input ? input.cmt.cmt4 : ""} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>M?? t??? 5:</p>
                            <textarea className='addProductTitleInput' name='cmt' id='cmt5' cols="5" rows="5" value={input ? input.cmt.cmt5 : ""} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>M?? t??? 6:</p>
                            <textarea className='addProductTitleInput' name='cmt' id='cmt6' cols="5" rows="5" value={input ? input.cmt.cmt6 : ""} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProductImg'>
                            <p className='productImg'><span>Video</span>  <video src={input.videoSrc}></video></p>

                            <div className='productImg'> <span>???nh 1</span>  <img src={input ? input.img.img1 : ""} alt='???nh s??? 1' /> </div>
                            <div className='productImg'><span>???nh 2</span>   <img src={input ? input.img.img2 : ""} alt='???nh s??? 2' /> </div>
                            <div className='productImg'> <span>???nh 3</span>  <img src={input ? input.img.img3 : ""} alt='???nh s??? 3' /> </div>
                            <div className='productImg'> <span>???nh 4</span>  <img src={input ? input.img.img4 : ""} alt='???nh s??? 4' /> </div>
                            <div className='productImg'> <span>???nh 5</span>  <img src={input ? input.img.img5 : ""} alt='???nh s??? 6' /> </div>
                            <div className='productImg'> <span>???nh 6</span>  <img src={input ? input.img.img6 : ""} alt='???nh s??? 7' /> </div>
                            <div className='productImg'> <span>???nh 7</span>  <img src={input ? input.img.img7 : ""} alt='???nh s??? 8' /> </div>
                            <div className='productImg'> <span>???nh 8</span>  <img src={input ? input.img.img8 : ""} alt='???nh s??? 8' /> </div>
                        </div>
                    </div>
                </div>
                <div className='btn_addItem'>
                    <Space>
                        <Button onClick={handleAdd} style={{ width: '300px', fontSize: '30px', height: 'auto' }} danger type='primary'>Add Product</Button>
                    </Space>
                </div>
                <img className='addItem-bgrd' src={logo} alt="" />
            </div>

            <Footer />
        </div>
    );
}

export default EditItem;
