const ProjectReducer = (state = {projects: [], loading: false, status: ''}, action) =>{
    switch(action.type){
        case 'LOADING_PROJECTS':
            return {
                ...state,
                projects: [...state.projects],
                loading: true,
                status: null
            }
        case 'ADD_PROJECTS':
            return {
                ...state,
                projects: [action.projects],
                loading: false
            }
        case 'PROJECTS_ERROR':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export default ProjectReducer