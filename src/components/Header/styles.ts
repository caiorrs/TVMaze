import {StyleSheet} from 'react-native';
import {ThemeType} from '../../assets/theme';

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      height: 60,
      flexDirection: 'row',
      backgroundColor: theme.colors.background,
      alignItems: 'center',
    },
    titleContainer: {
      flex: 0.7,
    },
    title: {
      fontSize: 20,
      textTransform: 'uppercase',
      color: theme.colors.accent,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    backText: {
      fontSize: 14,
      textTransform: 'uppercase',
      color: theme.colors.accent,
    },
    side: {
      flex: 0.15,
    },
  });
