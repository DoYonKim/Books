import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

import C1_AboutMe from "./C1_AboutMe";

const HeaderDiv = styled.div`
    height: calc(100vh - 50px);
    overflow: hidden;
    padding: 25px;
    background-color: #f0f0f0;
`;

const InnerDiv = styled.div`
    flex-direction: column;
    transition: 0.3s;
    width: 100%;
    height: 100%;
`;

class Container extends Component {
    render() {
        return (
            <HeaderDiv>
                <InnerDiv>
                    <C1_AboutMe/>

                </InnerDiv>
            </HeaderDiv>
        );
    }
}

Container.propTypes = {

};

export default Container;