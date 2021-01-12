import React from 'react';
import {storiesOf} from '@storybook/react'

import ReduxApp from '../07/ReduxApp02';

storiesOf('Redux2APP', module)
    .addWithJSX('기본 스토어 설정', ()=> <ReduxApp/>);