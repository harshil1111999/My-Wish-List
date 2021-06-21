import React from 'react'
import { connect } from 'react-redux'
import '../styles/RecentlyAdded.css'
import { Card } from 'semantic-ui-react'
import WishListContainer from './Shared/WishListContainer'

function RecentlyAdded({ wishLists }) {
    return (
        <div className='recentlyAdded'>
            <h1>Recently added wishes</h1>
            <Card.Group>
                {
                    wishLists.map((wishList,index) => (
                        <WishListContainer key={index} wishList={wishList} />
                    ))
                }
            </Card.Group>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        wishLists: state.wishLists
    }
}

export default connect(mapStateToProps)(RecentlyAdded)