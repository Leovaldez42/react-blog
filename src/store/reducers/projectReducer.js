const initialState = {
    projects: [
        {id: '1', title: 'help me do something in life', content: 'really not'},
        {id: '2', title: 'collect stars', content: 'Start with sun'},
        {id: '3', title: 'go out with someone', content: 'netflix and chill more better'}
    ]
}

const projectReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
        default:
            return state;
    }
}

export default projectReducer