import React from 'react'

export default function Filter(props) {
    
    return (
        <div>
            <input type="text" 
                onChange={(evt) => props.filterEvent(evt.target.value)} />
        </div>
    )
}

