import { useEffect, useState } from "react";
export const useDebounce = (search: string, delay: 300) => {
    const [searchString, setSearchString] = useState(search);
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchString(searchString);
        }, delay)
        return () => clearTimeout(timer)

    }, [search, delay])
    return searchString;
}
