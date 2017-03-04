// What are the variables wrapped in braces doing?
import React, { Component } from 'react';
import { v4 } from 'uuid'
import NoteMenu from './NoteMenu'
import NoteList from './NoteList'

class App extends Component {
  constructor(props) {
    super(props)
    // Add initial state with key of notes and value of empty array
    this.state = {
      notes: []
    }
    // You'll have to bind functions here or before passing them down as props
    this.addNote = this.addNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
    this.updateNote = this.updateNote.bind(this)
  }

  addNote(text) {
    // add new note to state as an object with the keys:
    // `noteId` using `v4` method above
    // `desc` as a string
    console.log('Adding new note with text: ' + text);

    // Create new note, make sure you pass it down in line 51
    const newNote = {
      noteId: v4(),
      desc: text
    }
    this.setState({
      notes: [
        ...this.state.notes,
        newNote
      ]
    })
  }

  deleteNote(id) {
    // delete note from state using the given `id`
    // PASS THIS DOWN TO LINE 63/64
    console.log('Deleting note with id: ' + id);
    // ITERATING THROUGH THE ARRAY AND COMPARING NOTE ID TO THE ONE WE'VE BEEN GIVEN
    var index = this.state.notes.findIndex(note => note.noteId === id)
    this.setState({
      notes: [
      // SLICING AND COPYING UP TO AND NOT INCLUDING THE INDEX // KINDA LIKE PLUCKING
        ...this.state.notes.slice(0, index),
        ...this.state.notes.slice(index + 1)
      ]
    });
  }

  updateNote(text, id) {
    // update note with given `id` in state with `desc`
    console.log('Updating note id: ' + id  + 'with text: ' + '\"' + text + '\"');
    this.setState({
      notes: [
        ...this.state.notes.map(note => {
          return (note.noteId === id) ?
            {
              ...note,
              desc: text
            } :
            note
        })
      ]
    })
  }

  render() {
    return (
      <div>
        <h1>HackReact</h1>
        <NoteMenu addNote={this.addNote} />
        <NoteList notes={this.state.notes} deleteNote={this.deleteNote} updateNote={this.updateNote}/>
      </div>
    )
  }
}

export default App;
