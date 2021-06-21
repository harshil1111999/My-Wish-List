import React, { useEffect, useState } from 'react'
import '../styles/ShowAll.css'
import { Card } from 'semantic-ui-react'
import axios from '../axios'
import WishListContainer from './Shared/WishListContainer'
import EditModal from './EditModal'

function ShowAll() {

    const [wishLists, setWishLists] = useState([])
    const [open, setOpen] = useState(false)
    const [editIndex, setEditIndex] = useState(-1)

    useEffect(() => {
        axios.get('/show-all')
            .then(({data}) => {
                setWishLists(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="showAll">
            <h1>Show All Wishes</h1>
            <Card.Group className='showAll'>
                {
                    wishLists.map((wishList,index) => (
                        <WishListContainer 
                            key={index}
                            setOpen={setOpen} 
                            wishLists={wishLists} 
                            setWishLists={setWishLists} 
                            wishList={wishList} 
                            from='showAll'
                            index={index}
                            setEditIndex={setEditIndex}
                        />
                    ))
                }
            </Card.Group>
            {
                open && (
                    <EditModal 
                        open={open} 
                        setOpen={setOpen} 
                        index={editIndex} 
                        wishList={editIndex !== -1 ? wishLists[editIndex] : {}}
                        setWishLists={setWishLists} 
                        wishLists={wishLists} />
                )
            }
        </div>
    )
}

export default ShowAll
