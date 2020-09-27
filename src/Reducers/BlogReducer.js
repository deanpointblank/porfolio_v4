const BlogReducer = (state = {blogs: [], loading: false, status: ''}, action) =>{
    switch(action.type){
        case 'LOADING_BLOGS':
            return {
                ...state,
                blogs: [...state.blogs],
                loading: true,
                status: null
            }
        case 'ADD_BLOGS':
            return {
                ...state,
                blogs: [action.blogs],
                loading: false
            }
        case 'BLOG_ERROR':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}