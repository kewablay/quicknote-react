import React from 'react'
import addButton from '../images/add-button.png'

function Sidebar() {
    return (
        <div className="side-bar">
            {/* <h3>Add</h3> */}
            <img src={addButton} alt="Add" />
        </div>
    )
}

export default Sidebar
