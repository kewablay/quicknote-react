import React from 'react'
import addButton from '../images/add-button.png'

function AddNote() {
    const colors =  ['#BAE1FF','#BAFFC9','#C4C4C4','#FFB3BA','#FFFFBA']

    return (
        <div className="add-note">
            <img src={addButton} alt="Add" />
            <div className='class-list'>
                {colors.map((color) => (<li className="color" style={{ background: color}}></li>))}
            </div>
        </div>
    )
}

export default AddNote