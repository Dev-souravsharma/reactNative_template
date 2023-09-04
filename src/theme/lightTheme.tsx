import {createTheme} from '@shopify/restyle';
import {moderateScale} from '../utils/responsive';
import palette from './palette';

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    buttonPrimaryBackground: palette.greenPrimary,
    shadow: palette.black,
    transparent: palette.transparent,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },

  cardVarients: {
    regular: {
      // We can refer to other values in the theme here, and use responsive props
      padding: {
        phone: 's',
        tablet: 'm',
      },
      backgroundColor: 'cardPrimaryBackground',
    },
    elevated: {
      padding: {
        phone: 's',
        tablet: 'm',
      },

      shadowColor: 'shadow',
      shadowOpacity: 0.2,
      shadowOffset: {width: 0, height: 5},
      shadowRadius: 15,
      elevation: 5,
      backgroundColor: 'buttonPrimaryBackground',
    },
    defaults: {
      // We can define defaults for the variant here.
      // This will be applied after the defaults passed to createVariant and before the variant defined below.
    },
  },
  buttonVarients: {
    contained: {
      backgroundColor: 'buttonPrimaryBackground',
      borderWidth: 0, // No border for contained
      width: moderateScale(100),
      height: moderateScale(40),
      borderRadius: moderateScale(10),
      justifyContent: 'center',
      alignItems: 'center',
      // Add other contained button styles here
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: 'shadow',
      borderWidth: 1, // Border width for outline
      // Add other outline button styles here
    },
  },
});

export default theme;
