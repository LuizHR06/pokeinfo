import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"

export const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
                
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {backToTopButton && (
                <BackToTopButtonStyle onClick={scrollUp}>aoba</BackToTopButtonStyle>
            )}
        </>
    )
}

const BackToTopButtonStyle = styled.button `
    position: fixed;
    bottom: 50px;
    right: 50px;
    height: 50px;
    width: 50px;
    font-size: 20px; 
    z-index: 5;
    background-color: #3498db; 
    color: #ffffff; 
    border: none; 
    cursor: pointer;
    display: block;
`