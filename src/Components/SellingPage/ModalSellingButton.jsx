import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import LinaerStepper from '../SellingSignupPage/LinearStepper';

const ModalSellingButton = ({open , handleClose}) => {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 700,
        maxWidth:'100%',
        height:'100%',
        overflowY:'scroll',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return (
        <>
           
            {/* <button onClick={handleOpen}>Start Selling<i className="fa-solid fa-arrow-right-long"></i></button> */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={style} id="style-2">
                  <LinaerStepper/>
                </Box>
            </Modal>


        </>
    )
}

export default ModalSellingButton