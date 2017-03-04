import React, { Component } from 'react';
import Note from './Note'

// A functional stateless component
const NoteList = (props) => {
  console.log('This is an array to store notes', props.notes);
  if (props.notes.length < 1) return null
  return (
    <ul className="list-group">
      {props.notes.map((note, i) => (
        <Note key={i} noteId={note.noteId} desc={note.desc} deleteNote={props.deleteNote} updateNote={props.updateNote}/>
      ))}
    </ul>
  )
}

// //************************************* The class version. Notice the small differences
// class NoteList extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <ul className="list-group">
//         {this.props.notes.map((note, i) => (
//           <Note key={i} noteId={i} desc={note.desc} deleteNote={this.props.deleteNote} updateNote={this.props.updateNote}/>
//         ))}
//       </ul>
//     )
//   }
// }

export default NoteList
