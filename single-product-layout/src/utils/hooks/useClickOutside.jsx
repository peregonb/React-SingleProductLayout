import React, {useEffect} from "react";

export const useClickOutside = (ref, action) => {
    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            // console.log("You clicked outside of me!");
            action(ref);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
};