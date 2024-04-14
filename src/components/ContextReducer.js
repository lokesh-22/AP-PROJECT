import React, { useReducer, useContext, createContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { 
                id: action.id, 
                name: action.name, 
                qty: action.qty, 
                size: action.size, 
                price: action.price, 
                img: action.img 
            }];
        default:
            console.log("Error in Reducer: Unknown action type:", action.type);
            return state; // Always return the current state if no action matches
    }
};


export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
};

export const useCart = () => {
    const context = useContext(CartStateContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

export const useDispatchCart = () => {
    const context = useContext(CartDispatchContext);
    if (context === undefined) {
        throw new Error("useDispatchCart must be used within a CartProvider");
    }
    return context;
};
