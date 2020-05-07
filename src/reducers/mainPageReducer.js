export const initialState = {
    user: 'Unknown User',
};

export function mainPageReducer(state = initialState, action) {
    switch (action.type) {
        // case 'SET_YEAR':
        //     return { ...state, year: action.payload };

        default:
            return state
    }
}