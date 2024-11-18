/* eslint-disable react-hooks/exhaustive-deps */

import { createContext, useEffect, useState, useMemo } from "react";
import axios from 'axios';

export const ProdutsContext = createContext();

export const fillContext = createContext();

export const cartContext = createContext();


function ContextProduct(props) {
    const [data, setData] = useState([])

    async function allProducts() {
        try {
            let { data } = await axios.get("https://dummyjson.com/products");
            setData(data.products);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    useEffect(() => {
        allProducts();
    }, [])

    // (Heart)
    const [newdata, setNewData] = useState(() => {
        const storedHeart = localStorage.getItem("heart");
        return storedHeart ? JSON.parse(storedHeart) : [];
    });

    function handelHeart(id) {
        const productToAdd = data.find((e) => e.id === id);
        if (productToAdd && !newdata.some((item) => item.id === id)) {
            const updatedNewData = [...newdata, productToAdd];
            setNewData(updatedNewData);
            localStorage.setItem("heart", JSON.stringify(updatedNewData));
        }
    }


    function deleteIndex(id) {
        const updatedNewData = newdata.filter((item) => item.id !== id);
        setNewData(updatedNewData);
        localStorage.setItem("heart", JSON.stringify(updatedNewData)); 
    }

    function deleletAll() {
        setNewData([]); 
        localStorage.removeItem("heart"); 
    }

    // (Cart)
    const [card, setCard] = useState(() => {
        const storedCard = localStorage.getItem("card");
        return storedCard ? JSON.parse(storedCard) : [];
    });

    function handelCart(id) {
        const productToAdd = data.find((e) => e.id === id);
        if (productToAdd && !card.some((item) => item.id === id)) {
            const updatedCard = [...card, productToAdd];
            setCard(updatedCard);
            localStorage.setItem("card", JSON.stringify(updatedCard));
        }
    }

    function deleteCard(id) {
        const updatedCard = card.filter((item) => item.id !== id);
        setCard(updatedCard); 
        localStorage.setItem("card", JSON.stringify(updatedCard)); 
    }


    const contextValue = useMemo(() => ({
        newdata,
        handelHeart,
        deleteIndex,
        deleletAll,
    }), [newdata, handelHeart, deleteIndex, deleletAll]);


    const contextValueCart = useMemo(() => ({
        handelCart,
        card,
        deleteCard
    }), [handelCart, card, deleteCard]);


    return (
        <ProdutsContext.Provider value={data}>
            <fillContext.Provider value={contextValue}>
                <cartContext.Provider value={contextValueCart}>
                    {props.children}
                </cartContext.Provider>
            </fillContext.Provider>
        </ProdutsContext.Provider>
    )
}

export default ContextProduct;
