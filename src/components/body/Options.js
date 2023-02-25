import React, { useEffect, useRef } from 'react';

const Options = () => {
    const videoRef = useRef(null)
    useEffect(() => {
        // const handleHoverEventOver = () => {
        //     videoRef.current.play()
        // };
        // const handleHoverEventOut = () => {
        //     videoRef.current.currentTime = 0;
        //     videoRef.current.pause();
        // };
        let videoCollection = document.querySelectorAll(".introVideo");
        console.log(videoCollection);
        
        videoCollection.forEach(element => {
            element.addEventListener('mouseover', (event) => {
              event.target.play()
            });
            element.addEventListener('mouseout', (event) => {
                event.target.currentTime = 0;
                event.target.pause()
            })
        });
        
        // document.getElementById('introVideo').addEventListener('mouseover', handleHoverEventOver)
        // document.getElementById('introVideo').addEventListener('mouseout', handleHoverEventOut)
        return () => {
            videoCollection.forEach(element => {
                element.removeEventListener('mouseover', (event) => {
                  event.target.play()
                });
                element.removeEventListener('mouseout', (event) => {
                    event.target.currentTime = 0;
                    event.target.pause()
                })
            });
        }
    }
        , [])

    return (
        <div className='body-options-container'>
            <div className='options-items'>

                <video className='introVideo' ref={videoRef} playsInline={true} loop={true} muted={true}>
                    <source src='https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/video%2FautumnLeaves.mp4?alt=media&token=dcc0d149-6244-4471-8e8d-1404250e9b33' />
                </video>
                <video className='introVideo' ref={videoRef} playsInline={true} loop={true} muted={true}>
                    <source src='https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/video%2FautumnLeaves.mp4?alt=media&token=dcc0d149-6244-4471-8e8d-1404250e9b33' />
                </video>
                <video className='introVideo' ref={videoRef} playsInline={true} loop={true} muted={true}>
                    <source src='https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/video%2FautumnLeaves.mp4?alt=media&token=dcc0d149-6244-4471-8e8d-1404250e9b33' />
                </video>
                <video className='introVideo' ref={videoRef} playsInline={true} loop={true} muted={true}>
                    <source src='https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/video%2FautumnLeaves.mp4?alt=media&token=dcc0d149-6244-4471-8e8d-1404250e9b33' />
                </video>
                <video className='introVideo' ref={videoRef} playsInline={true} loop={true} muted={true}>
                    <source src='https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/video%2FautumnLeaves.mp4?alt=media&token=dcc0d149-6244-4471-8e8d-1404250e9b33' />
                </video>
                <video className='introVideo' ref={videoRef} playsInline={true} loop={true} muted={true}>
                    <source src='https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/video%2FautumnLeaves.mp4?alt=media&token=dcc0d149-6244-4471-8e8d-1404250e9b33' />
                </video>
                <video className='introVideo' ref={videoRef} playsInline={true} loop={true} muted={true}>
                    <source src='https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/video%2FautumnLeaves.mp4?alt=media&token=dcc0d149-6244-4471-8e8d-1404250e9b33' />
                </video>
                <video className='introVideo' ref={videoRef} playsInline={true} loop={true} muted={true}>
                    <source src='https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/video%2FautumnLeaves.mp4?alt=media&token=dcc0d149-6244-4471-8e8d-1404250e9b33' />
                </video>
                <video className='introVideo' ref={videoRef} playsInline={true} loop={true} muted={true}>
                    <source src='https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/video%2FautumnLeaves.mp4?alt=media&token=dcc0d149-6244-4471-8e8d-1404250e9b33' />
                </video>
                <video className='introVideo' ref={videoRef} playsInline={true} loop={true} muted={true}>
                    <source src='https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/video%2FautumnLeaves.mp4?alt=media&token=dcc0d149-6244-4471-8e8d-1404250e9b33' />
                </video>

            </div>
        </div >
    );
}

export default Options;
