import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import {Episode, ShowDetailsWithEpisodesResponse} from '../../services/types';
import React, {useEffect, useMemo, useState} from 'react';

import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';
import {Header} from '../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStyles} from './styles';
import {getShowDetailsWithEpisodes} from '../../services/shows';
// import moment from 'moment'
import {useTheme} from '../../contexts/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export const Details = ({route, navigation}: Props) => {
  const {showId} = route.params;

  const {theme} = useTheme();
  const styles = createStyles(theme);

  const [data, setData] = useState<ShowDetailsWithEpisodesResponse | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const seasons = useMemo(() => {
    let response: (number | Episode)[] = [];
    if (data) {
      for (let i = 0; i < data._embedded.episodes.length; i++) {
        if (!response.includes(data._embedded.episodes[i].season)) {
          response.push(data._embedded.episodes[i].season);
          response.push(data._embedded.episodes[i]);
        } else {
          response.push(data._embedded.episodes[i]);
        }
      }
    }

    return response;
  }, [data]);

  const fetchShowDetails = async () => {
    setLoading(true);
    try {
      const response = await getShowDetailsWithEpisodes(showId);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShowDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stickyHeaderIndices = seasons
    .map((item, index) => {
      if (typeof item === 'number') {
        return index;
      } else {
        return null;
      }
    })
    .filter(item => item !== null) as number[];

  const renderItem = ({item: episode}: {item: Episode | number}) => {
    if (typeof episode === 'number') {
      return (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>
            Season {String(episode).padStart(2, '0')}
          </Text>
        </View>
      );
    }

    return (
      <Pressable
        style={styles.episode}
        onPress={() => navigation.navigate('Episode', {episode})}>
        <FastImage
          source={{uri: episode.image.medium}}
          style={styles.episodeImage}
        />
        <View style={styles.episodeInfo}>
          <Text style={styles.episodeName}>{episode.name}</Text>
          <Text style={styles.episodeNumber}>
            S{episode.season}E{episode.number}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={data?.name || 'Details'} onBack={navigation.goBack} />
      {loading && <ActivityIndicator size={'large'} />}
      {error ? (
        <Text>{err.message}</Text>
      ) : (
        <>
          <FastImage
            source={{uri: data?.image.original}}
            style={styles.poster}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.genres}>Genres: {data?.genres.join(', ')}</Text>
            <Text style={styles.summaryTitle}>Summary:</Text>
            <Text style={styles.summary}>{data?.summary}</Text>
            {/* <Text>Airs on: {moment(data?.schedule.days)}</Text> */}
          </View>
          <View style={{flex: 1}}>
            <FlashList
              data={seasons}
              renderItem={renderItem}
              getItemType={type =>
                typeof type === 'number' ? 'sectionHeader' : 'row'
              }
              estimatedItemSize={70}
              stickyHeaderIndices={stickyHeaderIndices}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
