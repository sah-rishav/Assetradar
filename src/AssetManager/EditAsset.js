import { MdEdit } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { Modal, ModalTitle } from 'react-bootstrap';
import * as React from 'react';
import AssetImgUpload from './AssetImgUpload';

function AssetTable() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   
    return (
        <div>


<MdEdit onClick={handleClickOpen} color="action"   sx={{ float:'right',fontSize: 15}}/>

<Modal
        show={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
         <Modal.Header closeButton >
          <Modal.Title>Edit Asset</Modal.Title>
         </Modal.Header>
      
        <Modal.Body>
            
            <form >
  <div class="form-group" style={{marginBottom:10,display:'flex'}}>
    <div>
    <label>Asset id</label>
    <input type="text" disabled="true" class="form-control" aria-describedby="nameHelp" /> 
    </div>
    <div style={{marginLeft:'100px'}}>
    <label for="exampleInpuEmail1">Link Sensor Kit</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />   
    </div>
    
     </div>
    <div style={{display:'inline-flex'}}>
  <div class="form-group" style={{marginBottom:10}} >
    <label for="exampleInpuEmail1">Asset Name</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div>
  <div class="form-group" style={{marginLeft:'100px'}} >
    <label for="exampleInpuEmail1">Asset Contact</label>
    <input type="text" class="form-control" id="exampleInputEmailHelp" />    
  </div></div>

  <div style={{display:'inline-flex'}}>  
  <div>
<span style={{fontSize:15}}><strong>Deployment Status</strong></span><br></br>
<span style={{fontSize:13}}> Installed</span>
<div style={{display:'flex', fontSize:14}}>
<div class="form-check" style={{marginRight:5}}>
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" checked  />
  <label class="form-check-label" for="flexRadioDisabled">
    Yes
  </label>
</div>
<div class="form-check" style={{marginLeft:5}}>
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled"   />
  <label class="form-check-label" for="flexRadioCheckedDisabled">
    No
  </label>
</div></div></div>
<div style={{marginLeft:50}}>
<span style={{fontSize:15}}><strong>Max value in cm</strong></span>
<input type="text" style={{width:70}} class="form-control" id="exampleInputEmailHelp" />
</div>
<div >
<AssetImgUpload/></div>
  </div>

  <button class="btn btn btn-primary" disabled style={{fontSize:15}}>Change Asset on Map</button><br/>
  <span style={{fontSize:12, color:'red'}}>*Place asset after clicking save button </span>
</form>
         
</Modal.Body>
        <Modal.Footer>
        <Button class="btn btn-primary" onClick={handleClose} autoFocus>
            Save
          </Button>
          <Button class="btn btn-danger"onClick={handleClose} autoFocus>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

</div>
    );
}
export default AssetTable;