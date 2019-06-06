import React from 'react';
import Grid from '@material-ui/core/Grid';

// Notes Component
import CreateNoteForm from './CreateNoteForm';
import NotesList from './NotesList';
import Home from "./Home";
import Note from "./Note";

// Material UI
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

// React Router Dom
import {Link, Route, Redirect} from "react-router-dom";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      notes: [],
    }; 
  }

  updateTitle = e =>{
      this.setState({
        title: e.target.value
      });
  }

  updateDescription = e =>{
    this.setState({
      description: e.target.value
    });
  }


  clearValues = () =>{
    this.setState({
      title: "",
      description: ""
    });
  }
 

  addNote = () =>{
    const notes = this.state.notes;
    notes.push({
      id: Date.now(),
      title: this.state.title,
      description: this.state.description
    });

    console.log(notes);
    this.setState({
      notes
    });
    this.clearValues();  
  };

  deleteNote = (index) => {
    const notes = this.state.notes;
    notes.splice(index,1);
    this.setState({
      notes
    });
  }

  verifyExistingNote(aidi){
    let exists = false;
    const notes = this.state.notes;
    exists = notes.filter(note => {
      if (note.id === aidi){
        return true;
      }
        return exists;
    });
  }

  filterNote = id => {
    const notes = this.state.notes;
    const note = notes.filter(note=>{
      return note.id = parseInt(id);
    });
    return note[0];
  }
  
  render(){
    return (
      <React.Fragment>

      <Grid container >

          <Grid item md={4}>
            <NotesList
                notes = {this.state.notes}
                deleteNote = {this.deleteNote}
              >
            </NotesList>
            <div>
              <Fab color="primary" aria-label="Add" component={Link} to={`/create`}>
                <AddIcon />
              </Fab>  
            </div>
          </Grid>
          <Grid item md={1}>
          </Grid>

          <Grid item md={4}>
            <Route path="/" component={Home} />
            <Route 
                path="/create" 
                render = {() => (
                  <CreateNoteForm
                    updateTitle = {this.updateTitle}
                    updateDescription = {this.updateDescription}
                    addNote={this.addNote}
                    title={this.state.title}
                    description = {this.state.description}
                    />
                )}
              />
              
              <Route  
                  path="/view/:id" 

                  render = { props =>{
                    const note = this.filterNote(props.match.params.id);
                     return note? 
                    <Note  note={note} /> : 
                    <Redirect to={'/'}/>; }}
                />
             
            <Grid>
              <Fab color="secondary" aria-label="Edit" component={Link} to={`/edit`}>
                <Icon></Icon>
              </Fab>
            </Grid>
            
          </Grid>
      </Grid>
          
        
                
    </React.Fragment>
    );
  }
  
}

export default App;