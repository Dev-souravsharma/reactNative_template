import {Theme} from '.';
import theme from './lightTheme';

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: '#000',
  },
};

export default darkTheme;
