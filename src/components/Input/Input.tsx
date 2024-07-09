import React from 'react'
import './Input.css'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          /*inputValue: this.props.value || ''*/
        };
      }

    render() {
        return (
            <div className='input'>
                <div className='inputField'>
                    <input
                        type="text"
                        placeholder="Enter title of the song or author..."
                        id='metadataField'>
                    </input>
                </div>
            </div>
        ) 
    }
}

export default Input