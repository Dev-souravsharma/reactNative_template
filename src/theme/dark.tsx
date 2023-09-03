import theme, {Theme} from '.';

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: '#000',
  },
};

export default darkTheme;
