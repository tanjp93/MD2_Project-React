import React, { useEffect, useState } from 'react';
import { Button, Rate } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
const Options = () => {
    const listItems = useSelector(state => state.getItems);
    const listSearch = useSelector((state => state.getSearchItems))
    const [showProducts, setShowProducts] = useState([])

    useEffect(() => {
        listSearch.length !== 0 ? setShowProducts(listSearch[0]) : setShowProducts(listItems)
    }, [listSearch, listItems])

    const unitCurrent = useSelector(state => state.UnitReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.act_get_items())
    }, [])
    const navigate = useNavigate()

    let Item = showProducts.map((itemProp) => (

        <div onClick={() => {
            dispatch(actions.act_getInfo_items(itemProp))
            navigate('/product')
        }
        } className='options-item' key={itemProp.id}>
            <div className='options-item-video' >
                <video className='introVideo' playsInline={true} loop={true} muted={true}>
                    <source src={itemProp.videoSrc} />
                </video>
                <div className='item-promotion-number'> -{itemProp.promotion}% </div>
                <div className='item-promotion-bgd'></div>
            </div>
            <div className='item-infor'>
                <div className='item-title'>
                    <h3>{itemProp.titleProduct} </h3>
                    <Rate allowHalf defaultValue={itemProp.rate} ></Rate>
                    <p className='item-comment'>From: {itemProp.from}</p>
                </div>
                <div className='item-price'><Button type='primary'> {unitCurrent == 'VND' ? itemProp.price : unitCurrent == 'USD' ? itemProp.price / 25000 : itemProp.price / 200}</Button> <p>{unitCurrent}</p></div>
            </div>
        </div>
    ))

    useEffect(() => {
        let videoCollection = document.querySelectorAll(".introVideo");

        videoCollection.forEach(element => {
            element.addEventListener("mouseover", (event) => event.target.play())
            element.addEventListener("mouseout", (event) => {
                event.target.pause()
                event.target.currentTime = 0;
            })
        });
        return () => {
            videoCollection.forEach(element => {
                element.removeEventListener('mouseover', (event) => {
                    event.target.play()
                });
                element.removeEventListener('mouseout', (event) => {
                    event.target.pause()
                    event.target.currentTime = 0;
                })
            });
        }
    }
        , [showProducts])

    return (
        <div className='body-options-container'>
            <div className='options-items'>
                {Item}
            </div >
        </div >
    );
}

export default Options;
