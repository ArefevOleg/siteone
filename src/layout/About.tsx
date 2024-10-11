import React from 'react';
import imgBg from "../img/ZItRq8Za2V0.jpg"
import styled from "styled-components";
import {Article} from "../components/Article";
import {Equipment} from "../components/Equipment";

export const About = () => {
    return (
        <Box>
            <Article/>
            <Equipment />
        </Box>
    );
};

const Img = styled.img`
    width: 100%;
`

const Box = styled.div`
    background: #354035;
    width: 100%;
    height: 100%;
`
