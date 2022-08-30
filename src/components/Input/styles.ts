import {StyleSheet} from 'react-native';
import {ThemeType} from '../../assets/theme';

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      borderRadius: 20,
      height: 50,
    },
    input: {
      color: theme.colors.text,
      fontSize: 16,
      paddingLeft: 15,
    },
  });
