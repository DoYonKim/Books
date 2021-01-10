import React from 'react';
import {Row, Col} from 'reactstrap';
import styled from "styled-components";
import backgroundImage  from '../assets/img/headerBackground.jpg'

const PageHeader = styled.div`
    background: url(${backgroundImage});
    height: 250px;

    background-size: cover;
    background-position: 0% 72%;
    background-repeat: no-repeat;
    color: #fff;
    /* border-bottom: 1px solid white; */
    padding-top: 90px;
`;

const Header = () => {
    return (
    <PageHeader className = "mb-3">
        <Row className = "mr-0">
            <Col md ="6" sm = "auto" className = "text-center m-auto">
                <h1>김도연의 블로그 입니다람쥐</h1>
                <p>리액트 개발공부중 ...</p>
            </Col>
        </Row>

    </PageHeader>
    );
};

export default Header;