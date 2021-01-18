import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const HiddenDiv = styled.div`

    /* hide-element */
    flex-shrink: 0;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 40px;
    opacity:0;
    transition:.3s;
  
    /* h0 */
    background-size: cover;
    overflow: hidden;
    display: flex;

`;

class C1_AboutMe extends Component {
    render() {
        return (
            <HiddenDiv>
                <div class="left">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                </div>
                <div class="information">
                    <div class="wrap">
                        <h2 class="name">AYSENUR TURK</h2>
                        <h4 class="department">UI DEVELOPER</h4>
                        <hr/>
                        <p>La croix stumptown selvage, distillery paleo tacos fixie butcher hell of chia actually schlitz. Chia listicle small batch helvetica, vice farm-to-table pickled vinyl pinterest schlitz. Gentrify readymade deep v four dollar toast pickled vinyl
                            typewriter cold-pressed disrupt.
                        </p>
                        <p>Skateboard vegan narwhal YOLO retro taiyaki, quinoa cliche listicle chartreuse pop-up cold-pressed kitsch poke. Cray biodiesel succulents PBR&B. Cold-pressed four loko shoreditch knausgaard gochujang.</p>
                        <div class="skills">
                            <ul id="skill">
                                <li><span class="bar graphic-design"></span>
                                    <h3>CSS</h3>
                                </li>
                                <li><span class="bar html-css"></span>
                                    <h3>HTML</h3>
                                </li>
                                <li><span class="bar jquery"></span>
                                    <h3>TypeScript</h3>
                                </li>
                                <li><span class="bar wordpress"></span>
                                    <h3>Java</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </HiddenDiv>
        );
    }
}

C1_AboutMe.propTypes = {

};

export default C1_AboutMe;