import {
  createVariant,
  createRestyleComponent,
  VariantProps,
} from '@shopify/restyle';
import React from 'react';
import {Theme} from '../../theme';

const Card = createRestyleComponent<
  VariantProps<Theme, 'cardVarients'> & {children: React.ReactElement},
  Theme
>([createVariant({themeKey: 'cardVarients'})]);

export default Card;
