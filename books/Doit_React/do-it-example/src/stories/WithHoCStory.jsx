import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from '../04/Button';
import Text from '../04/Text';
import withHoc from '../05/withHoc';

const ButtonWithHoC = withHoc(Button);
const TextWithHoC = withHoc(Text);

storiesOf('WithHoC', module)
  .addWithJSX('기본 설정', () => (
      <div>
          <ButtonWithHoC>안녕하세요</ButtonWithHoC>
          <TextWithHoC>안녕하세요</TextWithHoC>
      </div>
  ))
  .addWithJSX('large 에제', ()=> (
      <div>
          <ButtonWithHoC large>안녕하세요</ButtonWithHoC>
          <TextWithHoC large>안녕하세요</TextWithHoC>
      </div>
  ));
  