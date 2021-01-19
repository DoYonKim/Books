import React from 'react';
import {Row, Col} from 'reactstrap';

import styled from "styled-components";

const Footer = () => {

    const thisYear = () => {
        const year = new Date().getFullYear();
        return year;
    }

    return (
        <FooterArea>
            <Row className = "mr-0">
                <Col>
                    <p>
                        Copyright  &copy; <span>{thisYear()}</span>
                    </p>
                </Col>
            </Row>
        </FooterArea>
    )
    
};

const FooterArea = styled.div`
    background-color: #272c31;
    text-align: center;
    padding: 0.5rem;
    color: white;
`;

export default Footer;