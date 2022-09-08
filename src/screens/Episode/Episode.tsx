import {Header, RenderHtml} from '../../components';
import {ScrollView, Text, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStyles} from './styles';
import {formatDate} from '../../utils';
import {useTheme} from '../../contexts/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Episode'>;

export const Episode = ({navigation, route}: Props) => {
  const {episode: episodeDetails} = route.params;

  const {theme} = useTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={episodeDetails.name} onBack={navigation.goBack} />
      <ScrollView style={styles.scrollView}>
        <FastImage
          source={{uri: episodeDetails?.image?.original}}
          style={styles.poster}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.episodeName}>
            Episode: {episodeDetails?.name}
          </Text>
          <Text style={styles.season}>Season: {episodeDetails?.season}</Text>
          <Text style={styles.number}>Episode: {episodeDetails?.number}</Text>
          <Text style={styles.summaryTitle}>Summary:</Text>
          {episodeDetails.summary && (
            <RenderHtml html={episodeDetails.summary} />
          )}
          <Text style={styles.airDate}>
            Air Date: {formatDate(episodeDetails.airdate)}
          </Text>
          {episodeDetails.rating.average && (
            <Text style={styles.rating}>
              Rating: {episodeDetails?.rating?.average?.toFixed(1)}
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
