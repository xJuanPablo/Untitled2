import Webcam from 'react-webcam';
import { useRef, useState } from 'react';

export const Cam = () => {
  const webRef = useRef(null);
  const [img, setImage] = useState(null);

  const showImage = () => {
    const screenshot = webRef.current.getScreenshot();
    setImage(screenshot);
  };

  return (
    <div className="Cam">
      <Webcam
        audio={false}
        ref={webRef}
        screenshotFormat="image/jpeg" // Set the screenshot format
      />
      {/* <button onClick={showImage}>Show Image</button> */}
      <br />
      {img && <img src={img} alt="Screenshot" />}
    </div>
  );
};