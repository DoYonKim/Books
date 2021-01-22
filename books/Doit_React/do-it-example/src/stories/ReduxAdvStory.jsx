import React from 'react';
import {storiesOf} from '@storybook/react'

import ReduxApp01 from '../07/AdvReduxApp01';
import ReduxApp02 from '../07/AdvReduxApp02';

storiesOf('ReduxAdv', module)
    .addWithJSX('ReduxApp01', ()=> <ReduxApp01/>)
    .addWithJSX('ReduxApp02', ()=> <ReduxApp02/>);