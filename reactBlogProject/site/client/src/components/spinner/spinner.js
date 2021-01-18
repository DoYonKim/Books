import React, { Fragment } from 'react';
import { Spinner, Row } from 'reactstrap';

export const GrowingSpinner = (
    <Fragment>
        <Row className = 'd-flex justify-content-center m-5'>
        <Spinner style = {{whidth: "2rem", height: "2rem"}} type="grow" color="primary" />
        <Spinner style = {{whidth: "2rem", height: "2rem"}} type="grow" color="secondary" />
        <Spinner style = {{whidth: "2rem", height: "2rem"}} type="grow" color="success" />
        <Spinner style = {{whidth: "2rem", height: "2rem"}} type="grow" color="danger" />
        <Spinner style = {{whidth: "2rem", height: "2rem"}} type="grow" color="warning" />
        <Spinner style = {{whidth: "2rem", height: "2rem"}} type="grow" color="info" />
        {/* <Spinner style = {{whidth: "2rem", height: "2rem"}} type="grow" color="light" /> */}
        <Spinner style = {{whidth: "2rem", height: "2rem"}} type="grow" color="dark" />

        </Row>
    </Fragment>
)