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
            <Row>
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
    background-color: yellow;
    text-align: center;
    margin: 0 auto;
    padding: 0.5rem;
`;

export default Footer;