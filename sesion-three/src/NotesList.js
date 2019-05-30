import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

const NotesList = (props) => {
    const {notes /*, deleteTodo*/} = props;
    const listItems = notes.map ((note, index) => {
        return(
            <ListItem 
                dense 
                button 
                key={index} 
                divider = {true}
                /*onClick={() => toggleCompleted(index)}*/
                >
            <div>
                <ListItemText 
                    primary={note.title} 
                    secondary={note.description} 
                    >
                </ListItemText  >
            </div>
            
            
        </ListItem>
        )
    });

    return(
        <List>
            {listItems}
        </List>
    )
};

export default NotesList;