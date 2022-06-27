import { configure, addDecorator} from '@storybook/react';
import {widthInfo} from '@storybook/addon-info';

addDecorator(widthInfo)

function loadStories() {
    require('../stories/index.tsx');
    // You can require as many stories as you need.
  }
  
  configure(loadStories, module);