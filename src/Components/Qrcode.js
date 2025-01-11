import React, { useState } from 'react'

const Qrcode = () => {
  const [img,setImg] = useState("");
  const [loading,setLoading] = useState(false);
  const [qrcode,setQrcode] = useState("");
  const [qrsize,Setqrsize] = useState("")
  async function generateqr(){
    setLoading(true);
    try{
      // const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrcode)}`;
      setImg(url);
    }
    catch(error){
      console.log("Error qr");
    }
    finally{
      setLoading(false);
    }
  }
  function downloadqr(){
    fetch(img)
    .then((res) => res.blob() )
    .then((blob) =>{
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = ".png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => console.log("error",error));
  }
  return (
    <div className='app-conatiner'>
      <h1>Qr Code Generator</h1>
      {loading && <p>Please wait..</p>}
     { <img className = 'image' src={img}/>}
      <div>
        <label htmlFor='input'className='input-label' >Data for Qrcode</label>
        <input type='text' id='input' placeholder='Enter data for Qrcode' value={qrcode} onChange={(e) => setQrcode(e.target.value)}/>
        <label htmlFor='sizeinput'className='input-label' >Image Size</label>
        <input type='text' id='sizeinput' placeholder='Enter the Image size' value={qrsize} onChange={(e) => Setqrsize(e.target.value)} />
        <button id='generate-button' onClick={generateqr} disabled={loading}>Generate Qrcode</button>
        <button id='down-but' onClick={downloadqr}>Download Qrcode</button>
      </div>
      <p>Designed By <span>Siva</span></p>
      </div>
  )
}

export default Qrcode