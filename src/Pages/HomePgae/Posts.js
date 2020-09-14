
import React from 'react'
import {connect} from 'react-redux'

const Posts = ({syncPosts}) => {
    if (!syncPosts.length) {
        return <p className="text-center">not a posts</p>
    }
    return syncPosts.map(post => <li post={post} key={post} >{post}</li>)
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)