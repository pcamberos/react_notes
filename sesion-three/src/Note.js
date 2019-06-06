import React from 'react';
import { Typography } from '@material-ui/core';
const Note = (props) => {
    const {note} = props;

    /*const note = notes.filter(note => {
        return note.id === parseInt(props.match.params.id) ;
    });*/
    
    return(
        <React.Fragment>
            <Typography
                align="center"
                variant="h4"
                gutterBottom
                >
                {note.title}
            </Typography> 
            <Typography
                variant="subtitle1"
                >
                {note.description}
            </Typography>
        </React.Fragment>
       
       
    )
};

export default Note;