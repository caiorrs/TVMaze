import {StyleSheet} from 'react-native';
import {ThemeType} from '../../assets/theme';

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    sectionContainer: {
      backgroundColor: theme.colors.background,
      padding: 5,
    },
    sectionText: {
      color: theme.colors.text,
      fontSize: 16,
      fontWeight: '600',
    },
    infoContainer: {
      padding: 15,
    },
    poster: {
      height: 150,
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
    episode: {
      flexDirection: 'row',
      margin: 10,
    },
    episodeInfo: {
      paddingLeft: 20,
    },
    episodeName: {
      color: theme.colors.text,
    },
    episodeNumber: {
      color: theme.colors.text,
    },
    episodeImage: {
      height: 50,
      width: 50,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
