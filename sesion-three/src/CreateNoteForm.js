import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CreateNoteForm = (props) => {
    let {title, description, updateTitle,updateDescription,addNote} = props;
    return(
        <div >
            <div>
                <TextField 
                    type="text" 
                    placeholder="Note Title" 
                    margin="normal" 
                    variant="outlined" 
                    onChange={updateTitle} 
                    value={title}  
                />
            </div>
            <div>
                <TextField 
                    placeholder="Note Description" 
                    margin="normal" 
                    variant="outlined" 
                    style = {{ width:230}}
                    multiline
                    rows="5"
                    onChange={updateDescription} 
                    value={description} 
                />
            <div>
            </div>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => addNote()}>      
                        Guardar Nota
                </Button>
            </div>
             

        </div>
        
    )
};

export default CreateNoteForm;