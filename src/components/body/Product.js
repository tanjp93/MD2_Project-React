import React, { useEffect } from 'react';
import HeaderToolbar from '../header/HeaderToolbar';
import img from '../../assets/img/commercial.png'
import imgLogo from '../../assets/img/logo.png'
import { Carousel, Rate } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import Footer from '../footer/footer';


const Product = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.act_get_items())
    }, [])
    const listItems = useSelector(state => state.getItems);
    const unitCurrent = useSelector(state => state.UnitReducer)
    console.log(unitCurrent);
    console.log(listItems);
    let showItem = listItems.map((itemProp) => {
        return <div className='product-contents_show' key={itemProp.id}>
            <div className='product-contents_head'>
                <div className='product-contents_head_title'><span>{itemProp.id}. </span> {itemProp.titleProduct}
                </div>
                <div className='product-contents_Price'><Rate allowHalf defaultValue={itemProp.rate} />
                    <div className='product-contents_Price-current'><p> {unitCurrent == 'VND' ? itemProp.price : unitCurrent == 'USD' ? itemProp.price / 25000 : itemProp.price / 200}</p> <span>{unitCurrent}</span>
                    </div>
                </div>
            </div>
            <div className='product-contents_slides'>
                <div className='product-contents_slide'>
                    <Carousel effect="fade" autoplay>
                        <div className='product-contents_slideImg'>
                            <img src={itemProp.img[0].img1} alt="" />
                        </div>
                        <div className='product-contents_slideImg'>
                            <img src={itemProp.img[0].img2} alt="" />

                        </div>
                        <div className='product-contents_slideImg'>
                            <img src={itemProp.img[0].img3} alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className='product-contents_slide'>
                    <Carousel autoplay>
                        <div className='product-contents_slideImg'>
                            <img src={itemProp.img[0].img4} alt="" />
                        </div>
                        <div className='product-contents_slideImg'>
                            <img src={itemProp.img[0].img5} alt="" />
                        </div>
                        <div className='product-contents_slideImg'>
                            <img src={itemProp.img[0].img6} alt="" />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className='product-contents_comment'>
                <p className='product-contents_commentNo1  comment'>
                    {itemProp.cmt[0].cmt1}
                </p>
                <p className='product-contents_commentNo2  comment'>
                    {itemProp.cmt[0].cmt2}
                </p>
                <img src={itemProp.img[0].img7} alt="" />
                <p className='product-contents_commentNo3 comment'>    </p>
                {itemProp.cmt[0].cmt3}

                <p className='product-contents_commentNo4 comment'>    </p>
                {itemProp.cmt[0].cmt4}
                <p className='product-contents_commentNo5 comment'>

                    {itemProp.cmt[0].cmt5}
                </p>

                <img src={itemProp.img[0].img8} alt="" />
                <p className='product-contents_commentNo6 comment'>
                    {itemProp.cmt[0].cmt6}
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
            <Footer/>
        </div >
    );
}

export default Product;
