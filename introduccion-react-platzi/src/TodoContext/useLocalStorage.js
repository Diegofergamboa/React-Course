
import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [ loading, setLoading ] = React.useState(true);
    const [ error, setError ] = React.useState(false);
    const [ item, setItem ] = React.useState(initialValue);

    React.useEffect(() => {
    setTimeout(() => {
        try {          
            // Configuración del localStorage
            const LocalStorageItem = localStorage.getItem(itemName);
            let parsedItem;
    
            if (!LocalStorageItem) {
            // Valor por defecto porque es la primera vez que loguea el User
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
            } else {
            // Si ya se han creado, se va a parsear la información del usuario dentro de un objeto de HS
            parsedItem = JSON.parse(LocalStorageItem);
            }
            setItem(parsedItem);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    }, 1000)
    })
const saveItem = (newItem) => {
    try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    } catch (error) {
        setError(error);
    }
    };

    return {
    item,
    saveItem,
    loading,
    error,
    };
}

export { useLocalStorage }