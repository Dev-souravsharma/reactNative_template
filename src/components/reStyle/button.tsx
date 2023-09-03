import {
  backgroundColor,
  BackgroundColorProps,
  composeRestyleFunctions,
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  useRestyle,
  VariantProps,
} from '@shopify/restyle';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Theme} from '../../theme';
import Text from './text';

type Props = VariantProps<Theme, 'buttonVarients'> &
  SpacingProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress?: () => void;
    title?: string;
  };

type RestyleProps = SpacingProps<Theme> & BackgroundColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  backgroundColor,
]);

const ButtonBase = createRestyleComponent<
  VariantProps<Theme, 'buttonVarients'> & {
    children: React.ReactElement;
  } & Props,
  Theme
>([createVariant({themeKey: 'buttonVarients'})]);

const Button: React.FC<Props> = ({onPress, title, ...rest}) => {
  const props = useRestyle(restyleFunctions, rest);
  return (
    <TouchableOpacity onPress={onPress} {...rest} {...props}>
      <ButtonBase variant={'contained'}>
        <Text>{title}</Text>
      </ButtonBase>
    </TouchableOpacity>
  );
};

export default Button;
