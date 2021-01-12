import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Collapse, Container, Navbar, NavbarToggler , Nav, Form, NavItem, Button} from 'reactstrap';
import styled from "styled-components";
import {Link} from "react-router-dom";

import LoginModal from "../components/auth/LoginModal"
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_REQUEST } from '../redux/types';
import RegisterModal from './auth/RegisterModal';

const AppNavbarDiv = styled.div`
    //background-color: yellow;
    /* text-align: center;
    padding: 0.5rem; */
`;

const AppNavbar = () =>{

    const[isOpen, setIsOpen] = useState(false);
    const{isAuthenticated, user, userRole}  = useSelector((state)=> state.auth);
    console.log(userRole, "userRole");

    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch({
            type: LOGOUT_REQUEST
        });
    }, [dispatch]);

    useEffect(()=>{
        setIsOpen(false);
    }, [user]);

    const handleToggle = () =>{
        setIsOpen(!isOpen);
    }

    const addPostClick = () => {

    }

    const authLink = (
            <Fragment>
                <NavItem>
                    {userRole === "MainJuin" ? (
                        <Form className = "col ">
                            <Link to = "post" className = "btn btn-success block text-white px-3" onClick = {addPostClick}>
                                Add Post
                            </Link>
                        </Form>
                    ) : ""}
                </NavItem>
                <NavItem className = "d-flex justify-content-center">
                    <Form className = "col ">
                        {user && user.name ? (
                            <Link to = "/" >
                                <Button outline color = "light" className = "px-3" block>
                                    <strong>{user ? `Welcome ${user.name}` : ""}</strong>
                                </Button>
                            </Link>
                        ) : (
                            <Button outline color = "light" className = "px-3" block>
                                <strong>No user</strong>
                            </Button>
                        )}
                    </Form>
                </NavItem>
                <NavItem>
                    <Form className = "col">
                        <Link onClick = {onLogout} to ="#" className = "">
                            <Button outline color="light" className = "" block>
                                logout
                            </Button>
                        </Link>
                    </Form>
                </NavItem>
            </Fragment>
        );

    const guestLink = (
            <Fragment>
                <NavItem>
                    <RegisterModal/>
                </NavItem>
                <NavItem>
                    <LoginModal/>
                </NavItem>
            </Fragment>
        );

    return(
        <AppNavbarDiv>
            <Navbar color = "dark" dark expand= "lg" className ="sticky-top">
                <Container>
                    <Link to = "/" className= "text-white text-decoration-none" >
                        DY 리액트 블로그
                    </Link>
                    <NavbarToggler onClick = {handleToggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className = "ml-auto d-flex justify-content-around" navbar>
                            {isAuthenticated ? (
                                authLink
                            )  : (
                                guestLink
                            )}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </AppNavbarDiv>
        
    );
};

export default AppNavbar;