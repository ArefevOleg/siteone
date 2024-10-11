import React from 'react';
import imgBg from "../img/imgBg1.jpg"
import styled from "styled-components";

export const Header = () => {
    return (
        <div>
            <Img src={imgBg}/>
        </div>
    );
};

const Img = styled.img`
  width: 100%;
`
