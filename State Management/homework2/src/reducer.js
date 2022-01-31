const initialState = {
    userList: [],
    cid: 0,
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                userList: [
                    ...state.userList,
                    {
                        id: action.id,
                        email: action.email,
                        gender: action.gender,
                        fullName: action.fullName,
                        picture: action.picture,
                    },
                ],
            };
        case "SET_CID":
            return {
                ...state,
                cid: action.cid,
            };
        default:
            return state;
    }
}

export default rootReducer;
