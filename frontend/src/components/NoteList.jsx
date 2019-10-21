import React, { Component } from 'react'

import axios from 'axios';

import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

export default class NoteList extends Component {

    state = {
        notes: []
    }

    async componentDidMount() {        
        this.getNotes();
    }

    getNotes = async () => {
        const res = await axios.get('http://localhost:4000/api/notes/');
        console.log(res);
        this.setState({ notes: res.data })
    }

    deleteNote = async (id) => {
        console.log(id);
        const res = await axios.delete('http://localhost:4000/api/notes/' + id);
        console.log(res);
        this.getNotes();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        < div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{note.title} </h5>
                                    <Link className="btn btn-dark" to={"/edit/" + note._id} >Edit</Link>
                                </div>
                                <div className="card-body">
                                    <p>{note.content} </p>
                                    <p>{note.author} </p>
                                    <p>{format(note.date)}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(note._id)} >Delete</button>
                                </div>
                            </div>
                        </div>)
                    )
                }
            </div>
        )
    }
}
