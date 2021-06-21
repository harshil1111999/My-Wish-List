import React, { useState } from 'react'
import '../styles/Home.css'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addWishList } from '../redux/Action'
import axios from '../axios'
import WishesForm from './Shared/WishesForm'
import checkErrors from '../utils/FormValidation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home({ addWishList, wishLists }) {

    const [name, setName] = useState('')
    const [wishes, setWishes] = useState([""])
    const [uploading, setUploading] = useState(false)
    const [error, setError] = useState({
        name: '',
        wishes: [""]
    })

    const handleAddWish = () => {
        const temp = [...wishes, ""]
        setWishes(temp)
    }

    const handleSubmit = () => {

        if(checkErrors(name, wishes, setError)) {
            return
        }

        const data = {
            name: name,
            wishes: wishes
        }
        addWishList(data)
        toast.info('Your wish list is saved successfully')
        setWishes([""])
        setName('')
    }

    const handleSave = () => {
        setUploading(true)

        axios.post('/add-wishList', wishLists)
            .then(data => {
                setUploading(false)
                toast.info('Your wish list is saved successfully')
            }).catch(err => {
                console.log(err)
                setUploading(false)
                toast.error('Something went wrong')
            })
    }

    return (
        <div className='home'>
            <h1>My Wish List</h1>
            <WishesForm 
                name={name} 
                setName={setName} 
                wishes={wishes} 
                setWishes={setWishes} 
                error={error} 
                setError={setError}/>
            <div className="home__buttons">
                <Button inverted color='violet' onClick={handleAddWish}>Add</Button>
                <Button inverted color='violet' onClick={handleSubmit}>Submit</Button>
                <Button inverted color='violet' onClick={handleSave} loading={uploading}>Save</Button>
            </div>
            <ToastContainer 
                hideProgressBar={true}
                position='bottom-right'/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        wishLists: state.wishLists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addWishList: (data) => dispatch(addWishList(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)