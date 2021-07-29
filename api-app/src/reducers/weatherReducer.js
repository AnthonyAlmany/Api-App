const initState = {
    temperature: [],
    condition: [],
    city: [],
}

const weatherReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_WEATHER":
            return {
                ...state,
                temperature: action.payload.temperature,
                condition: action.payload.condition,
                city: action.payload.city,
            };
        default:
            return { ...state }
    }
}

export default weatherReducer;

