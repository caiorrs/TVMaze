import {StyleSheet} from 'react-native';
import {ThemeType} from '../../assets/theme';

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    poster: {
      height: 200,
      width: '100%',
    },
    infoContainer: {
      padding: 15,
    },
    episodeName: {
      fontSize: 24,
      color: theme.colors.text,
      fontWeight: 'bold',
    },
    season: {
      fontSize: 18,
      color: theme.colors.text,
    },
    number: {
      fontSize: 18,
      color: theme.colors.text,
    },
    summaryTitle: {
      fontSize: 22,
      color: theme.colors.text,
      fontWeight: 'bold',
    },
    summary: {
      fontSize: 18,
      color: theme.colors.text,
    },
    airDate: {
      fontSize: 18,
      color: theme.colors.text,
    },
    rating: {
      fontSize: 18,
      color: theme.colors.text,
    },
    scrollView: {
      flexGrow: 1,
    },
  });
