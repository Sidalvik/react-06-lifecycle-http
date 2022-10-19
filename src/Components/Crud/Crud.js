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
            {
                id: 1,
                content: 'То, что было введено в поле ввода',
            },
            {
                id: 2,
                content: 'То, что было введено в поле ввода',
            },
            {
                id: 3,
                content: 'То, что было введено в поле ввода',
            },
            {
                id: 4,
                content: 'То, что было введено в поле ввода',
            },
        ],
    };

    addNote = () => {
        const newNote = JSON.stringify({id: 0, content: this.state.newContent});

        console.log('addNote:' + newNote);
    };

    handleAddClick = () => {
        this.addNote();
        this.updateNotes();
        console.log('handleAddClick:');
    };

    deleteNote = (id) => {
        console.log('deleteNote:' + id);
    };

    handleDeleteClick = (id) => {
        console.log('handleDeleteClick:' + id);
    };

    updateNotes = () => {
        console.log('updateNotes');
    };

    handleUpdateClick = () => {
        console.log('handleUpdateClick');
    }

    handleChangeNewNote = (event) => {
        const newContent = event.target.value;
        this.setState({newContent});
    }

    render() {
        const noteItems = this.state.notes.map((item) => {
            return (
            <NoteCard key={item.id} id={item.id} onBtnClick={this.handleDeleteClick}>
                <p>{item.id}</p>
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