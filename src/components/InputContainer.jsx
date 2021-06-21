import React from 'react'
import { Input, Button, Icon } from 'semantic-ui-react'
import '../styles/InputContainer.css'

function InputContainer({data, index, handleChange, handleDelete, error = ''}) {
    return (
        <>
            <div className="wish" key={index}>
                <Input error={error !== ''} name={`wish-${index}`} value={data} icon='angellist' iconPosition='left' placeholder='Enter your wish...' onChange={handleChange} />
                <Button icon id={index} onClick={handleDelete}>
                    <Icon id={index} name='delete' />
                </Button>
            </div>
            {
                error && (
                    <p className='inputError'>* {error}</p>
                )
            }
        </>
    )
}

export default InputContainer
