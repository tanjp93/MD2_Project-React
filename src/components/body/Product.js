import React, { useEffect, useState } from 'react';
import HeaderToolbar from '../header/HeaderToolbar';
import img from '../../assets/img/commercial.png'
import imgLogo from '../../assets/img/logo.png'
import { Button, Carousel, Rate } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import Footer from '../footer/footer';



const Product = () => {

    
    const dispatch=useDispatch()
    const listItems = useSelector(state => state.getItems);
   
    const [showProducts, setShowProducts] = useState([])


    useEffect(() => {
        dispatch(actions.act_get_items())
    }, [])

    const productInfor = useSelector(state => state.actGetInfoItems);


    useEffect(() => {
        productInfor.length !== 0 ? setShowProducts(productInfor):setShowProducts(listItems)
    }, [listItems, productInfor])


    const unitCurrent = useSelector(state => state.UnitReducer)

    let showItem = showProducts.map((itemProp) => {
        return <div className='product-contents_show' key={itemProp.id}>
            <div className='product-contents_head'>
                <div className='product-contents_head_title'><span>{itemProp.id}. </span> {itemProp.titleProduct}
                </div>
                <div className='product-contents_Price'><Rate allowHalf defaultValue={itemProp.rate} />
                    <div className='product-contents_Price-current'><Button type='primary'> {unitCurrent == 'VND' ? itemProp.price : unitCurrent == 'USD' ? itemProp.price / 25000 : itemProp.price / 200}</Button> <span>{unitCurrent}</span>
                    </div>
                </div>
            </div>
            <div className='product-contents_slides'>
                <div className='product-contents_slide'>
                    <Carousel effect="fade" autoplay>
                        <div className='product-contents_slideImg'>
                            <img src={itemProp.img.img1} alt="" />
                        </div>
                        <div className='product-contents_slideImg'>
                            <img src={itemProp.img.img2} alt="" />

                        </div>
                        <div className='product-contents_slideImg'>
                            <img src={itemProp.img.img3} alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className='product-contents_slide'>
                    <Carousel autoplay>
                        <div className='product-contents_slideImg'>
                            <img src={itemProp.img.img4} alt="" />
                        </div>
                        <div className='product-contents_slideImg'>
                            <img src={itemProp.img.img5} alt="" />
                        </div>
                        <div className='product-contents_slideImg'>
                            <img src={itemProp.img.img6} alt="" />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className='product-contents_comment'>
                <p className='product-contents_commentNo1  comment'>
                    {itemProp.cmt.cmt1}
                </p>
                <p className='product-contents_commentNo2  comment'>
                    {itemProp.cmt.cmt2}
                </p>
                <img src={itemProp.img.img7} alt="" />
                <p className='product-contents_commentNo3 comment'>    </p>
                {itemProp.cmt.cmt3}

                <p className='product-contents_commentNo4 comment'>    </p>
                {itemProp.cmt.cmt4}
                <p className='product-contents_commentNo5 comment'>

                    {itemProp.cmt.cmt5}
                </p>

                <img src={itemProp.img.img8} alt="" />
                <p className='product-contents_commentNo6 comment'>
                    {itemProp.cmt.cmt6}
                </p>
            </div>
        </div>
    })
    return (
        <div className='product' >
            <HeaderToolbar />
            <div className='product-comercial'><img src={img} alt="" />
            </div>
            <div className='product-contents'>
                {showItem}
                <div className='product-contents_bgd'>
                    <img src={imgLogo} alt="" />
                    <img src={imgLogo} alt="" />
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Product;
