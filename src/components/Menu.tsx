import React from 'react';
import kam from "../img/svg/kam.svg"
import route from "../img/svg/route.svg"
import ruk from "../img/svg/rucksack.svg"
import tent from "../img/svg/logoWhiteSvg.svg"
import styled from "styled-components";

export const Menu = () => {
    const arr = [
        {img: tent, title: "О нас"},
        {img: kam, title: "Фото"},
        {img: route, title: "Маршруты"},
        {img: ruk, title: "Снаряжение"},
    ]

    return (
        <WrapperMenu>
            {arr.map((el, index) => {
                return (
                    <ul>
                        <Box key={index}>
                            <img src={el.img} width="68"/>
                            <Title>{el.title}</Title>
                        </Box>
                    </ul>
                )
            })}
        </WrapperMenu>
    );
};

const WrapperMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const Box = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.span`
    font-size: calc((100vw - 480px) / (1440 - 480) * (18 - 18) + 18px);
    
    font-weight: 400;
    font-style: normal;
    color: #ffffff;
`