import { Carousel } from 'antd';


const Commercial = () => {
  return (
    <>
      <Carousel autoplay >
        <div className='commercialCarousel'>
          <img src="https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/images%2Fslide%2Fslide1.png?alt=media&token=cb57ac6a-bba0-4d4c-af9c-dc5920660e79" alt="" />
          <img src="https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/images%2Fslide%2Fslide2.jfif?alt=media&token=8e4562fa-79b5-4148-a5f4-3cd1b62febe7" alt="" />
        </div>
        <div className='commercialCarousel'>
          <img src="https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/images%2Fslide%2Fslide3.jfif?alt=media&token=7785e12c-c304-42bf-b2df-adc2b8a92e3f" alt="" />
          <img src="https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/images%2Fslide%2Fslide4.jfif?alt=media&token=ce0049a1-69ce-480f-909f-879ba0bb860d" alt="" />
        </div>        
        <div className='commercialCarousel'>
          <img src="https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/images%2Fslide%2Fslide5.jfif?alt=media&token=530feeef-bcf0-4a7f-8bcb-91937107b79e" alt="" />
          <img src="https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/images%2Fslide%2Fslide6.jfif?alt=media&token=98bcf7d5-aa35-4f3f-99c5-8b7dc1306cb5" alt="" />
        </div>
      </Carousel>
    </>
  );
};
export default Commercial;