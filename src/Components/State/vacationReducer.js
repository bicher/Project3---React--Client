const initialState = {
    vacations: [],
    isLogged: false,
    username: '',
    firstname:'',
    role: ''

};

const vacationReducer = (state = initialState, action) => {
    let newState = {};
    debugger;
    switch (action.type) {
        case "LOGIN":
            debugger;
            newState = Object.assign({}, state);
            newState.vacations = action.data.allVacations;
            newState.isLogged = action.data.isLogged;
            newState.username = action.data.username;
            newState.firstname = action.data.firstname;
            newState.role = action.data.role;
            
            return newState;
        default:
            return state;
    }
};
export default vacationReducer;