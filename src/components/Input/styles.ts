import {StyleSheet} from 'react-native';
import {ThemeType} from '../../assets/theme';

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      borderRadius: 20,
      height: 50,
    },
    input: {
      color: theme.colors.darkText,
      fontSize: 16,
      paddingLeft: 15,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  });
