import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import SellingLogin from './SellingLoginPage/SellingLogin';

const ModalLoginButton = () => {
    const [openLogin, setOpenLogin] = React.useState(false);
    const handleOpen = () => setOpenLogin(true);
    const handleClose = () => setOpenLogin(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 700,
        width:'400px',
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius:"10px",
        px: 4,
        py:2
      };
    return (
        <>
           
        
            <button onClick={handleOpen} className='header-login-btn'>Login</button>

            <Modal
                open={openLogin}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={style} id="style-2">
                 <SellingLogin setOpenLogin={setOpenLogin}/>
                </Box>
            </Modal>


        </>
    )
}

export default ModalLoginButton