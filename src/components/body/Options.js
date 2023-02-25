import React, { useEffect, useRef } from 'react';

const Options = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        const handleHoverEventOver = () => {
            videoRef.current.play()
        } 
        const handleHoverEventOut = () => {
            videoRef.current.pause()
        }
    document.getElementById("introVideo").addEventListener("mouseover", handleHoverEventOver)
 document.getElementById("introVideo").addEventListener("mouseout", handleHoverEventOut)

    return () =>  {
        document.getElementById("introVideo").removeEventListener("hover", handleHoverEventOver)
        document.getElementById("introVideo").addEventListener("mouseout", handleHoverEventOut)
    }

    },[])

    return (
        <div className='body-options-container'>
            <div className='options-row'>
                <div className='options-row-item'>
                    <video id='introVideo' ref={videoRef} playsInline={true} loop={true} muted={true}>
                        <source src='https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/video%2FautumnLeaves.mp4?alt=media&token=dcc0d149-6244-4471-8e8d-1404250e9b33'/>
                    </video>
                </div>
            </div>
        </div >
    );
}

export default Options;
