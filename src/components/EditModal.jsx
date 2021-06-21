import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import '../styles/EditModal.css'
import WishesForm from './Shared/WishesForm'
import axios from '../axios'
import checkErrors from '../utils/FormValidation'

function EditModal({open, setOpen, wishList, index, wishLists, setWishLists }) { 

    const [name, setName] = useState(wishList.name)
    const [wishes, setWishes] = useState(wishList.wishes)
    const [uploading, setUploading] = useState(false)
    const [error, setError] = useState({
        name: '',
        wishes: [""]
    })

    const handleAddWish = () => {
        const temp = [...wishes, ""]
        setWishes(temp)
    }

    const handleSave = () => {
        setUploading(true)

        if(checkErrors(name, wishes, setError)) {
            setUploading(false)
            return
        }

        const updatedWishList = {
            name,
            wishes
        }
        axios.put(`/add-wishList/${wishList._id}`, updatedWishList).then(data => {
                let updatedWishLists = [...wishLists]
                updatedWishLists[index].name = updatedWishList.name
                updatedWishLists[index].wishes = updatedWishList.wishes
                setWishLists(updatedWishLists)
                setUploading(false)
                setOpen(false)
            }).catch(err => {
                console.log(err)
                setUploading(false)
            })
    }
    
    return (
        <Modal 
            className='editModal'
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}>
            <Modal.Header>Edit WishList</Modal.Header>
            <Modal.Content>
                <WishesForm 
                    name={name} 
                    setName={setName} 
                    wishes={wishes} 
                    setWishes={setWishes}
                    error={error} 
                    setError={setError}/>
            </Modal.Content>
            <Modal.Actions>
                <Button color='blue' onClick={handleAddWish}>Add</Button>
                <Button color='black' onClick={() => setOpen(false)}>Cancel</Button>
                <Button
                    content="Save"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={handleSave}
                    positive
                    loading={uploading}
                />
            </Modal.Actions>
        </Modal>
    )
}

export default EditModal