import PropTypes from 'prop-types';
import React, { Component } from 'react';
import UpdateBtn from './UpdateBtn/UpdateBtn';
import NoteCard from './NoteCard/NoteCard';
import NewNoteCard from './NewNoteCard/NewNoteCard';


export class Crud extends Component {
    static propTypes = {
    props: PropTypes.any,
    }

    state = {
        newContent: '',
        notes: [
        ],
    };

    addNote = () => {
        if (!this.state.newContent) return;

        const newNote = JSON.stringify({id: 0, content: this.state.newContent});
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: newNote,
        }
        return fetch(process.env.REACT_APP_NOTES_URL, fetchOptions);

    };

    handleAddClick = () => {
        let result = this.addNote();
        if (!result) return;

        result
            .then((response) => {
                if (!response.ok) {return};
                this.setState({newContent: ''});
                this.updateNotes();
            });
    };

    deleteNote = (id) => {
        const fetchOptions = {
            method: 'DELETE',
        }

        return fetch(`${process.env.REACT_APP_NOTES_URL}/${id}`, fetchOptions);
    };

    handleDeleteClick = (id) => {
        let result = this.deleteNote(id);
        if (!result) return;
        result
            .then((response) => {
                if (!response.ok) {return};
                this.updateNotes();
            });
    };

    updateNotes = () => {
        fetch(process.env.REACT_APP_NOTES_URL)
            .then((response => response.json()))
            .then((notes) => {
                this.setState({notes});
            });
    };

    handleUpdateClick = () => {
        this.updateNotes();
    }

    handleChangeNewNote = (event) => {
        const newContent = event.target.value;
        this.setState({newContent});
    }

    componentDidMount = () => {
        this.updateNotes();
    }

    render() {
        const noteItems = this.state.notes?.length === 0 ? <p>Заметок нет</p>: this.state.notes.map((item) => {
            return (
            <NoteCard key={item.id} id={item.id} onBtnClick={this.handleDeleteClick}>
                <p className='title-notes'>{`Заметка: ${item.id}`}</p>
                <p>{item.content}</p>
            </NoteCard>)
        });

        return (
            <div className='cruds'>
                <h3 className='title'>Notes</h3>
                <UpdateBtn onClick={this.handleUpdateClick}/>
                <div className='notes-items'>
                    {noteItems}
                </div>
                <NewNoteCard content={this.state.newContent} onClick={this.handleAddClick} onChange={this.handleChangeNewNote}/>
            </div>
        )
    }
}

export default Crud