import React from 'react';
import Grid from '@material-ui/core/Grid';

import CreateNoteForm from './CreateNoteForm';
import NotesList from './NotesList';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      notes: []
    }; 
    //console.log(this.state)
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
      title: this.state.title,
      description: this.state.description
    });
    this.setState({
      notes
    });
    this.clearValues();  
  };

  render(){
    return (
      <React.Fragment>

      <Grid container >

          <Grid item md={4}>
            <NotesList
                notes = {this.state.notes}
              >

            </NotesList>
          </Grid>
          <Grid item md={1}>
          </Grid>

          <Grid item md={4}>
            <CreateNoteForm
              updateTitle = {this.updateTitle}
              updateDescription = {this.updateDescription}
              addNote={this.addNote}
              title={this.state.title}
              description = {this.state.description}
              >

            </CreateNoteForm>
          </Grid>
      </Grid>
          
        
                
    </React.Fragment>
    );
  }
  
}

export default App;