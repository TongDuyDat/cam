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
        style={{width: '100%', height: '100%'}}
      />
      {/* <video>
        <source/>
      </video> */}
    </div>
  )
}
export default WebcamScreen;