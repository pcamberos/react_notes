import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";
import { Typography, ListItemSecondaryAction } from '@material-ui/core';

const NotesList = (props) => {
    const {notes, deleteNote} = props;
    let formattedNotes = notes.length ? (
        notes.map ((note, index) => (
           <ListItem 
                dense 
                button 
                key={index} 
                divider = {true}
                component={Link} to={`/view/${note.id}`}
                /*onClick={() => toggleCompleted(index)}*/
                >
                <ListItemText 
                    primary={note.title} 
                    secondary={note.description} 
                    >
                </ListItemText  >
                <ListItemSecondaryAction>
                    <IconButton 
                        onClick={() => deleteNote(index)}
                        >              
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
    ))) : (
        <Typography align="center" variant="subtitle1"> No notes yet... </Typography>
    );

    /*const listItems = notes.map ((note, index) => {
        return(
            <ListItem 
                dense 
                button 
                key={index} 
                divider = {true}
                component={Link} to={`/view/${note.id}`}
                >
                <ListItemText 
                    primary={note.title} 
                    secondary={note.description} 
                    >
                </ListItemText  >
            
            
        </ListItem>
        )
    });*/

    return(
        <List>
            {formattedNotes}
        </List>
    )
};

export default NotesList;