import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { colors, size } from "../../../data/variables"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

export const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 500) {
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
                <BackToTopButtonStyle onClick={scrollUp}><FontAwesomeIcon icon={faArrowUp} bounce size="lg" /></BackToTopButtonStyle>
            )}
        </>
    )
}

const BackToTopButtonStyle = styled.button `
    position: fixed;
    bottom: 50px;
    right: 50px;
    height: 100px;
    width: 100px;
    font-size: 30px; 
    z-index: 5;
    background-color: ${colors.fourthBlue}; 
    color: #ffffff; 
    border: none; 
    border-radius: 50%;
    cursor: pointer;
    display: block;
    transition: ease 0.5s;

    &:hover {
        color: #000;
        background-color: #fff;
    }

    @media (min-width: ${size.mobileS}) {
        font-size: 25px;
        bottom: 30px;
        right: 30px;
        height: 80px;
        width: 80px;
    }

    @media (min-width: ${size.laptop}) {
        font-size: 30px;
        bottom: 80px;
        right: 50px;
        height: 100px;
        width: 100px;
    }

    @media (min-width: ${size.laptopL}) {
        font-size: 35px;
        bottom: 80px;
        right: 50px;
        height: 110px;
        width: 110px;
    }
`