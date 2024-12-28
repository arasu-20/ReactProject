import {Dialog, DialogActions, DialogTitle, Button} from '@mui/material'
import { Fragment } from "react";

function TodoDetails({todoDetails, setOpenDialog, openDialog, setTodoDetails}){
    const handleClose = ()=>{
        setOpenDialog(false);
        setTodoDetails(null);
    }
    return (
            <Dialog onClose={handleClose} open={openDialog}>
                <DialogTitle>{todoDetails?.todo}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        )
}

export default TodoDetails;