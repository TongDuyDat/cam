import React from 'react'
import Webcam from 'react-webcam'

const WebcamScreen = () => {
  const webcam = React.useRef(null);

  return (
    <div style={{width:'auto'}}>
      <Webcam
        audio={false}
        ref={webcam}
        mirrored={true}
      />
      {/* <video>
        <source/>
      </video> */}
    </div>
  )
}
export default WebcamScreen;