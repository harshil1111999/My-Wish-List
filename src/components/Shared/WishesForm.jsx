import React from 'react'
import { Input } from 'semantic-ui-react'
import InputContainer from '../InputContainer'
import '../../styles/WishesForm.css'

function WishesForm({name, setName, wishes, setWishes, error, setError}) {

    const handleChange = (_, data) => {
        let tempError = {...error}
        if(data.name === 'name') {
            setName(data.value)
            if(data.value !== '' && error.name) {
                tempError.name = ''
            } else if(data.value === '') {
                tempError.name = 'Name is required'
            }
        } else {
            const index = data.name.split('-')[1]
            const temp = [...wishes]
            temp[index] = data.value
            if(data.value !== '' && error.wishes[index]) {
                tempError.wishes[index] = ''
            } else if(data.value === '') {
                tempError.wishes[index] = 'Wish field can not be empty'
            }
            setWishes(temp)
        }
        setError(tempError)
    }

    const handleDelete = (e) => {
        const temp = [...wishes]
        temp.splice(e.target.id, 1)
        setWishes(temp)
    }

    return (
        <>
            <div className="inputField">
                <Input error={error.name !== ''} name='name' icon='user' iconPosition='left' placeholder='Enter your name...' onChange={handleChange} value={name} />
                {
                    error.name && <p className='inputError'>* {error.name}</p>
                }
            </div>
            <div className='wishes'>
                {
                    wishes.map((data,index) => (
                        <InputContainer 
                            key={index}
                            data={data} 
                            index={index} 
                            handleChange={handleChange} 
                            handleDelete={handleDelete}
                            error={error.wishes[index]} />
                    ))
                }
            </div>
        </>
    )
}

export default WishesForm
