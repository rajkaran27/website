"use client"


import { useEffect, useState } from 'react';


const TextAnimation = () => {

    const h1Style={
        color:'#3500d3',
        fontSize:'5rem',
        fontWeight:'bold',
    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [text, setText] = useState("Rajkaran");
    const [intervalId, setIntervalId] = useState(null);

    const startAnimation = () => {
        let iteration = 0;
        const targetText = document.querySelector("h1").dataset.value;

        clearInterval(intervalId);

        const newIntervalId = setInterval(() => {
            setText((prevText) =>
                prevText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return targetText[index];
                        }

                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= targetText.length) {
                clearInterval(newIntervalId);
            }

            iteration += 1 / 3;
        }, 30);

        setIntervalId(newIntervalId);
    };

    useEffect(() => {
        const h1Element = document.querySelector("h1");
        h1Element.addEventListener("mouseover", startAnimation);

        return () => {
            h1Element.removeEventListener("mouseover", startAnimation);
            clearInterval(intervalId);
        };
    }, [intervalId]);

    return (
        <h1 data-value="Rajkaran" style={h1Style}>
            {text}
        </h1>
    );
};

export default TextAnimation;