import React, { useRef, useEffect } from 'react';
import { Button } from '@mui/material';
import SignaturePad from 'signature_pad';

const SignaturePadCom = () => {
    const canvasRef = useRef(null);
  const signaturePadRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    signaturePadRef.current = new SignaturePad(canvas);
  }, []);

  const clearSignature = () => {
    signaturePadRef.current.clear();
  };

  const downloadSignature = () => {
    const dataUrl = signaturePadRef.current.toDataURL();
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'signature.png';
    link.click();
  };
  return (
    <>
    <canvas
        ref={canvasRef}
        max-width={600}
        
        height={200}
        style={{ border: '1px solid #ccc'}}
      />
      <Button variant="contained" type='button' style={{marginLeft:"15px"}} margin="normal" onClick={clearSignature}>
        Clear
      </Button>
      <Button variant="contained" type='button' style={{marginLeft:"15px"}} onClick={downloadSignature}>
        Download
      </Button>
    </>
  )
}

export default SignaturePadCom