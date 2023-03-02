import React from 'react';
import HeaderToolbar from '../header/HeaderToolbar';
import Footer from '../footer/footer';
import { Button, Space } from 'antd';
const AddItem = () => {
    const itemUpdate = JSON.parse(localStorage.getItem('itemUpdate'));
    const handleChange = () => {

    }
    return (
        <div>
            <HeaderToolbar />
            <div>
                <div className='addProduct'>
                    <div className='addProduct_conttent'>
                        <div className='addProduct_titleProduct'>
                            <div className='addProductInfor'>
                                <div className='addProductDiscrible'>
                                    <p>From : {itemUpdate.from}  </p>
                                    <select style={{textAlign:'center'}} onChange={handleChange}>
                                        <option value="Hà Nội">Hà Nội</option>
                                        <option value="Hồ Chí Minh" >Hồ Chí Minh</option>
                                        <option value="Đà Nẵng" >Đà Nẵng</option>
                                        <option value="Huế">Huế</option>
                                        <option value="Thanh Hóa" >Thanh Hóa</option>
                                    </select>
                                </div>
                                <div className='addProductDiscrible'>
                                    <p >price :</p>
                                    <input type="text" style={{textAlign:'center'}} value={itemUpdate.price} onChange={handleChange}></input>
                                    <span>VND</span>
                                </div>
                                <div className='addProductDiscrible'>
                                    <p>promotion :</p> <input type="text" style={{textAlign:'center'}} value={itemUpdate.promotion} onChange={handleChange}></input> <span>%</span>
                                </div>
                            </div>

                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Tên Tiêu Đề :</p>
                            <textarea className='addProductTitleInput' style={{display:'flex',alignItems:'center'}} cols="5" rows="3" value={itemUpdate.titleProduct} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Tên Tiêu Đề :</p>
                            <textarea className='addProductTitleInput'  cols="5" rows="5" value={itemUpdate.titleProduct} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Mô tả 1 :</p>
                            <textarea className='addProductTitleInput'  cols="5" rows="5" value={itemUpdate.cmt.cmt1} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Mô tả 2:</p>
                            <textarea className='addProductTitleInput' style={{display:'flex',alignItems:'center'}} cols="5" rows="5" value={itemUpdate.cmt.cmt2} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Mô tả 3:</p>
                            <textarea className='addProductTitleInput' cols="5" rows="5" value={itemUpdate.cmt.cmt3} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Mô tả 4:</p>
                            <textarea className='addProductTitleInput' cols="5" rows="5" value={itemUpdate.cmt.cmt4} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Mô tả 5:</p>
                            <textarea className='addProductTitleInput' cols="5" rows="5" value={itemUpdate.cmt.cmt5} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProduct'>
                            <p className='addProductTitle'>Mô tả 6:</p>
                            <textarea className='addProductTitleInput' cols="5" rows="5" value={itemUpdate.cmt.cmt6} onChange={handleChange}></textarea>
                        </div>
                        <div className='addProduct_titleProductImg'>
                            <p className='productImg'><span>Video</span>  <video src={itemUpdate.videoSrc}></video></p>
           
                            <div className='productImg'> <span>Ảnh 1</span>  <img src={itemUpdate.img.img1} alt='Ảnh số 1' /> </div>
                            <div className='productImg'><span>Ảnh 2</span>   <img src={itemUpdate.img.img2} alt='Ảnh số 2' /> </div>
                            <div className='productImg'> <span>Ảnh 3</span>  <img src={itemUpdate.img.img3} alt='Ảnh số 3' /> </div>
                            <div className='productImg'> <span>Ảnh 4</span>  <img src={itemUpdate.img.img4} alt='Ảnh số 4' /> </div>
                            <div className='productImg'> <span>Ảnh 5</span>  <img src={itemUpdate.img.img5} alt='Ảnh số 6' /> </div>
                            <div className='productImg'> <span>Ảnh 6</span>  <img src={itemUpdate.img.img6} alt='Ảnh số 7' /> </div>
                            <div className='productImg'> <span>Ảnh 7</span>  <img src={itemUpdate.img.img7} alt='Ảnh số 8' /> </div>
                            <div className='productImg'> <span>Ảnh 8</span>  <img src={itemUpdate.img.img8} alt='Ảnh số 8' /> </div>
                        </div>
                    </div>
                </div>
                <div className='btn_addItem'>
                    <Space>
                        <Button style={{width:'300px', fontSize:'30px' , height:'auto'}} danger type='primary'>Update</Button>
                    </Space>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default AddItem;
