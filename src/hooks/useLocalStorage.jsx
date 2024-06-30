import { useState, useEffect } from 'react';

const useLocalStorage = (key) => {

    const [value, setValue] = useState(() => {
        const storedExpenses = JSON.parse(localStorage.getItem(key)) || [];
        return storedExpenses;
    })

    useEffect(() => {
        localStorage.setItem("expense-tracker",JSON.stringify(value));
    }, [key,value])

    return [value, setValue]
}

export default useLocalStorage;