import Webcam from 'react-webcam';
import {useRef} from 'react';

export const Cam = () => {
  const webRef = useRef(null);
  let img = "httpsL;';'";
  const showImage = () =>{
   img = webRef.current.getScreenshot();
  };
    return (
        <div className='Camera'>
          <Webcam  ref={webRef}/>
          <button onClick={()=>{
            showImage()
          }}>SNAP</button>
          <br/>
          <img src={img} />
        </div>
    );
  }
