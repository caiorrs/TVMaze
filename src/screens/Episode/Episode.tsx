import {Text, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import {Header} from '../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStyles} from './styles';
import {useTheme} from '../../contexts/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Episode'>;

export const Episode = ({navigation, route}: Props) => {
  const {episode: episodeDetails} = route.params;

  const {theme} = useTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={episodeDetails.name} onBack={navigation.goBack} />
      <FastImage
        source={{uri: episodeDetails.image.original}}
        style={styles.poster}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.episodeName}>Episode: {episodeDetails.name}</Text>
        <Text style={styles.season}>Season: {episodeDetails.season}</Text>
        <Text style={styles.number}>Number: {episodeDetails.number}</Text>
        <Text style={styles.summaryTitle}>Summary:</Text>
        <Text style={styles.summary}>{episodeDetails.summary}</Text>
      </View>
    </SafeAreaView>
  );
};
