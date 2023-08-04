import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { PiPlayThin } from 'react-icons/pi';
import { AiFillCloseCircle } from 'react-icons/ai';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'transperent',
  boxShadow: 24,
};

export default function BasicModal({reviewData}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <PiPlayThin className='testimonial-reviws-play' onClick={handleOpen} />
   
      <Modal
        open={open}
        onClose={handleClose}

      >
        <Box sx={style}>
         <button onClick={handleClose} className='bg-transparent border-0' style={{position:"absolute",zIndex:"3",right:"0",top:"-8%"}}><AiFillCloseCircle style={{fontSize:"28px",color:"#fff"}}/></button>   
        <video src={reviewData}  controls></video>
        </Box>
      </Modal>
    </div>
  );
}