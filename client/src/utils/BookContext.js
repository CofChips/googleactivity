import React, {
    createContext,
    useContext,
    useReducer
} from "react";

const BookContext = createContext();

const Provider = BookContext.Provider;

const reducer = (state, action) => {
    switch (action.type) {
        case "search":
            return {...state, searchInput: action.searchInput}
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};

const BookProvider = ({
    value = {},
    ...props
}) => {
    const [state, dispatch] = useReducer(reducer, {});

    return <Provider value = {
        [state, dispatch]
    } {
        ...props
    }
    />;
};

const useBookContext = () => {
    return useContext(BookContext)
}

export {
    BookProvider,
    useBookContext
};