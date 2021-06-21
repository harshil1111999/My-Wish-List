import axios from '../../axios'
import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import '../../styles/WishListContainer.css'

function WishListContainer({ wishList, from, wishLists, setWishLists, setOpen, index, setEditIndex }) {
    
    const handleDelete = () => {
        axios.delete(`/delete-wish/${wishList._id}`)
            .then(({data}) => {
                let temp = [...wishLists]
                temp = temp.filter(data => data._id !== wishList._id)
                setWishLists(temp)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleEdit = () => {
        setOpen(true)
        setEditIndex(index)
        // history.push(`/home?${wishList._id}`)
    }

    return (
        <Card>
            <Card.Content className='wishListContainer__header'>
                <Card.Header>{wishList.name}</Card.Header>
                {
                    from === 'showAll' && (
                        <>
                            <Button icon onClick={handleEdit}>
                                <Icon name='edit outline' />
                            </Button>
                            <Button icon onClick={handleDelete}>
                                <Icon name='delete' />
                            </Button>
                        </>
                    )
                }       
            </Card.Content>
            <Card.Content extra>
                {
                    wishList.wishes.map((wish,index) => (
                        <h3 key={index}>{wish}</h3>
                    ))
                }
            </Card.Content>
        </Card>
    )
}

export default WishListContainer
