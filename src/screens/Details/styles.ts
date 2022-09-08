import {StyleSheet} from 'react-native';
import {ThemeType} from '../../assets/theme';

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    infoContainer: {
      padding: 15,
    },
    poster: {
      height: 200,
      width: '100%',
      backgroundColor: theme.colors.background,
    },
    genres: {
      color: theme.colors.text,
      fontSize: 18,
      fontWeight: '600',
      paddingVertical: 5,
    },
    summaryTitle: {
      color: theme.colors.text,
      fontSize: 24,
      fontWeight: 'bold',
      paddingVertical: 5,
    },
    summary: {
      color: theme.colors.text,
      fontSize: 18,
      paddingVertical: 5,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    premierText: {
      color: theme.colors.text,
      fontSize: 16,
      paddingVertical: 5,
    },
    endText: {
      color: theme.colors.text,
      fontSize: 16,
      paddingVertical: 5,
    },
  });
