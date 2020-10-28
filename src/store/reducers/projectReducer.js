const initialState = {
    projects: [
        {id: '1', title: 'help me do something in life', content: 'really not'},
        {id: '2', title: 'collect stars', content: 'Start with sun'},
        {id: '3', title: 'go out with someone', content: 'netflix and chill more better'}
    ]
}

const projectReducer = (state = initialState, action) => {
    return state
}

export default projectReducer