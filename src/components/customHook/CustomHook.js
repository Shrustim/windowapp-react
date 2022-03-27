import React from 'react'
import useCopyToClipboard from "./useCopyToClipboard";
import useDeviceDetect from "./useDeviceDetect";
export default function CustomHook() {
    //custom hook of copytoClipboard
    const [isCopied, handleCopy] = useCopyToClipboard();
    // for device detect we can also use react-device-detect library 
    const { isMobile } = useDeviceDetect();
  return (
    <div>
        <h1>CustomHook</h1>
        <h2><u>custom hook of copytoClipboard </u></h2>
        <h2>hi there this test for copy </h2>
        
        <button onClick={() => handleCopy("hi there this test for copy")}>
        {isCopied ? <span>Copied </span> : <span>Copy</span>}
        </button>
        <br/>
        <br/>
        <h2><u>custom hook of useDeviceDetect </u></h2>
        <h2>Is mobile {isMobile ? "true" : "false"} </h2>
    
    </div>
  )
}
