import React from 'react';
import {storiesOf} from '@storybook/react'

import NewCounter from '../03/Chap0309Couneter3';

storiesOf('NewCounter', module)
    .add('기본 설정', ()=> <NewCounter counter = {0}/>);