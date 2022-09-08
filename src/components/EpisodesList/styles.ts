import {StyleSheet} from 'react-native';
import {ThemeType} from '../../assets/theme';

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    sectionContainer: {
      backgroundColor: theme.colors.white,
      padding: 5,
    },
    sectionText: {
      color: theme.colors.darkText,
      fontSize: 16,
      fontWeight: '600',
    },
    episode: {
      flexDirection: 'row',
      padding: 10,
      borderBottomColor: theme.colors.white,
      borderBottomWidth: 1,
    },
    episodeInfo: {
      paddingLeft: 20,
    },
    episodeName: {
      color: theme.colors.text,
      paddingBottom: 10,
      fontSize: 16,
      fontWeight: 'bold',
    },
    episodeNumber: {
      color: theme.colors.text,
    },
    episodeImage: {
      height: 80,
      width: 80,
    },
  });
