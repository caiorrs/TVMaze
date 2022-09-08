import {ActivityIndicator, Text, View} from 'react-native';
import {Episode, ShowDetailsWithEpisodesResponse} from '../../services/types';
import {EpisodesList, Header, RenderHtml} from '../../components';
import React, {useEffect, useMemo, useState} from 'react';

import FastImage from 'react-native-fast-image';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStyles} from './styles';
import {formatDate} from '../../utils';
import {getShowDetailsWithEpisodes} from '../../services/shows';
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

  const renderAiredTime = () => {
    if (data?.premiered) {
      return (
        <View>
          <Text style={styles.premierText}>
            Premiered on: {formatDate(data.premiered)}
          </Text>
          {data?.ended && (
            <Text style={styles.endText}>
              Ended on: {formatDate(data.ended)}
            </Text>
          )}
        </View>
      );
    }
    return null;
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <FastImage
          source={{uri: data?.image?.original}}
          style={styles.poster}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.genres}>Genres: {data?.genres.join(', ')}</Text>
          <Text style={styles.summaryTitle}>Summary:</Text>
          {data?.summary && <RenderHtml html={data.summary} />}
          {renderAiredTime()}
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={data?.name || 'Details'} onBack={navigation.goBack} />
      {loading && (
        <ActivityIndicator size={'large'} color={theme.colors.white} />
      )}
      {error ? (
        <Text>{err.message}</Text>
      ) : (
        <EpisodesList
          ListHeaderComponent={ListHeaderComponent}
          onPressEpisode={episode => navigation.navigate('Episode', {episode})}
          seasons={seasons}
        />
      )}
    </SafeAreaView>
  );
};
