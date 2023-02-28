import React, { useEffect } from 'react';
import { Rate } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
const Options = () => {
    const unitCurrent=useSelector(state=>state.UnitReducer)
    console.log(unitCurrent);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.act_get_items())

    }, [])

    const listItems = useSelector(state => state.getItems);
    let Item = listItems.map((itemProp) => (
        <div className='options-item' key={itemProp.id}>
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
                <div className='item-price'><p> {unitCurrent == 'VND' ? itemProp.price : unitCurrent == 'USD' ? itemProp.price/25000 : itemProp.price/200}</p> <p>{unitCurrent}</p></div>
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
        })


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
        , [])

    return (
        <div className='body-options-container'>
            <div className='options-items'>
                {Item}
            </div >
        </div >
    );
}

export default Options;
