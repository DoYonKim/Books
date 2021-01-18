import React, { Component } from 'react';
import styled from "styled-components";


const HeaderDiv = styled.div`
    background-color: green;
    width: 99vw;
    height: 99vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const WrapperClass = styled.div`
    display: flex;
    background-color: #fff;
    box-shadow: 0 0 2px 2px #ddd;
`;

class Header extends Component {
    render() {
        return (
            <HeaderDiv>
                <input type="radio" id="about" name="radio" onChange ={()=>{}} checked/>
                <input type="radio" id="songs" name="radio"/>
                <input type="radio" id="code" name="radio" />
                <input type="radio" id="contact" name="radio" />
                <WrapperClass>
                    <img src="https://i.ibb.co/j45B0Sm/letter-a.png" alt =""/>
                    <label htmlFor="about">ABOUT ME</label>
                    <label htmlFor="songs">SONGS</label>
                    <label htmlFor="code">CODE</label>
                    <label htmlFor="contact">CONTACT ME</label>
                </WrapperClass>
            </HeaderDiv>
        );
    }
}

export default Header;