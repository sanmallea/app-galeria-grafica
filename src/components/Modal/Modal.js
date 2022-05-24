import * as React from 'react';
import { DialogTitle } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogContent} from '@mui/material';

const Modal = ({handleClose, open, children}) => {
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal