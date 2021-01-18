import React from 'react';
import {storiesOf} from '@storybook/react'

import ReduxApp from '../07/ReduxApp03';

storiesOf('Redux3APP', module)
    .addWithJSX('기본 스토어 설정', ()=> <ReduxApp/>);