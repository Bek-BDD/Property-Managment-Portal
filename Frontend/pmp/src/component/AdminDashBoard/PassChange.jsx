import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Textarea} from "@mui/joy";
import TextField from "@mui/material/TextField";
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function BasicModal() {

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false)
  
      window.alert('Done')
  };

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
          >

            <TextField
                id="id"
                label="Id"


            />
            <br/> <br/>

            <TextField fullWidth label="Password" id="password" />
            <br/> <br/>
            <Button variant="contained" color="success"  >
             Change
            </Button>


          </Box>


        </Box>
      </Modal>
    </div>
  );
}
