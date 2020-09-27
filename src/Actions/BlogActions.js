export const fetchBlogs = () => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_BLOGS' })
        fetch('http://159.65.218.140/Posts')
        .then(resp => resp.json())
        .then(resp => dispatch({ type: 'ADD_BLOGS', blogs: resp }))
        .catch(error => {
            dispatch({type: 'BLOG_ERROR', status: 'ERROR'})
        })
    }
}