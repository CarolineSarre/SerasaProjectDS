import React from 'react';

import { HeadingL as HeadingLComponent } from '.';
import { BodyM as BodyMComponent } from '.';
import { Display as DisplayComponent } from '.';
import { HeadingM as HeadingMComponent } from '.';
import { HeadingS as HeadingSComponent } from '.';
import { HeadingXs as HeadingXsComponent } from '.';
import { Subheading as SubheadingComponent } from '.';


export default {
  title: 'Typography',
  argTypes: {
    children: { control: 'text' },
    weight: {control: 'select', options: ['regular', 'bold']},
    classes: { control: 'text' },
    color: {
      control: 'select',
      options: [
        'grayLight',
        'grayMediun',
        'grayDark',
        'magenta',
        'white',
        'WhiteHigh'
      ]
    }
  },
};
export const Display = (args) => <DisplayComponent {...args} />;
Display.args = {
  children: 'Texto',
  
};
  
export const HeadingL = (args) => <HeadingLComponent {...args} />;
HeadingL.args = {
  children: 'Texto',
  
};
export const HeadingM = (args) => <HeadingMComponent {...args} />;
HeadingM.args = {
  children: 'Texto',
  
};
export const HeadingS = (args) => <HeadingSComponent {...args} />;
HeadingS.args = {
  children: 'Texto',
 
};
export const HeadingXs = (args) => <HeadingXsComponent {...args} />;
HeadingXs.args = {
  children: 'Texto',
  
};
export const Subheading = (args) => <SubheadingComponent {...args} />;
Subheading.args = {
  children: 'Texto',
};
export const BodyM = (args) => <BodyMComponent {...args} />;
BodyM.args = {
  children: 'Texto',
  weight: 'regular'
};

