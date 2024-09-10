import { createContext } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { useState, useMemo } from 'react';
import { json } from "react-router-dom";


export const ProdutsContext = createContext();

export const fillContext = createContext();

export const cartContext = createContext();


function ContextProduct(props) {
    const [data, setData] = useState([])

    async function allProducts() {
        let { data } = await axios.get("https://dummyjson.com/products");
        setData(data.products);
    };

    useEffect(() => {
        allProducts();
    }, [])

 

    // myheart
    let [newdata, setNewData] = useState([]);

    if(localStorage.getItem("heart") != null){
        newdata = JSON.parse(localStorage.getItem("heart"));
    }
    //push
  
    function handelHeart(id) {
        let newdataww = [...data]
        newdataww.filter((e) => {
            if (e.id === id) {
                return newdata.push(e)
            }
            return e
        });
        localStorage.setItem("heart" , JSON.stringify(newdata));
        setNewData(newdata);
    };

        
    //delete
    function deleteIndex(id) {
        let newdataww = [...newdata]
        let dataRow = newdataww.filter((y) => y.id !== id);
        localStorage.setItem("heart" , JSON.stringify(dataRow));
        setNewData(dataRow);
    };

    //deleteAll
    function deleletAll() {
        let newdataww = [...newdata]
        let dataRow = newdataww.filter((y) => !y);
        localStorage.setItem("heart" , JSON.stringify(dataRow));
        setNewData(dataRow);
    };

    // mycard
    let [card, setCard] = useState([]);

    if(localStorage.getItem("card") != null){
        card = JSON.parse(localStorage.getItem("card"));
    }

    //push
    function handelCart(id) {
        let newdataww = [...data]
        newdataww.filter((e) => {
            if (e.id === id) {
                return card.push(e)
            }
            return e
        });
        localStorage.setItem("card" , JSON.stringify(card));
        setCard(card);
    };

    function deleteCard(id) {
        let newdataww = [...card]
        let dataRow = newdataww.filter((y) => y.id !== id);
        localStorage.setItem("card" , JSON.stringify(dataRow));
        setCard(dataRow);
    };


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