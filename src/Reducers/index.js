import { combineReducers } from 'redux';
import BlogReducer from './BlogReducer';
import ProjectReducer from './ProjectReducer';

export const allReducers = combineReducers({
    BlogReducer: BlogReducer,
    ProjectReducer: ProjectReducer
})