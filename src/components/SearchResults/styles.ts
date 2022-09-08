import {StyleSheet} from 'react-native';
import {ThemeType} from '../../assets/theme';

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      backgroundColor: theme.colors.white,
      borderRadius: 20,
      margin: 10,
    },
    imageStyle: {
      height: 100,
      width: 100,
    },
    listContainer: {
      flex: 1,
    },
    showName: {
      color: theme.colors.accent,
      fontWeight: 'bold',
      fontSize: 18,
    },
    showRating: {
      color: theme.colors.accent,
      fontWeight: 'bold',
      fontSize: 18,
    },
    showDetailsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
    },
    noShowsFound: {
      color: theme.colors.accent,
      fontSize: 18,
      textAlign: 'center',
    },
  });
