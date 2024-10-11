import React from 'react';
import videoBg from "../video/videoBg9 (online-video-cutter.com).mp4"
import styled from "styled-components";
import {Menu} from "../components/Menu";

export const Main = () => {
    return (
        <Wrapper>
            <BoxMenu>
                <Menu/>
            </BoxMenu>
            <Video autoPlay muted loop playsInline>
                <source src={videoBg} type="video/mp4"/>
            </Video>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`

const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-aspect-ratio: 16/9) {
        width: 100%;
        height: auto;
    }

    @media (max-aspect-ratio: 16/9) {
        width: auto;
        height: 100%;
    }

    @media (max-width: 767px) {
        display: none;
    }
`

const BoxMenu = styled.div`
    top: 20%;
    position: absolute;
    z-index: 4;
`