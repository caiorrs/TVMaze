import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import {Episode, ShowDetailsWithEpisodesResponse} from '../../services/types';
import React, {useEffect, useState} from 'react';

import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getShowDetailsWithEpisodes} from '../../services/shows';
import {useRoute} from '@react-navigation/native';

export const Details = () => {
  const route = useRoute();
  const {showId} = route.params;

  const [data, setData] = useState<ShowDetailsWithEpisodesResponse | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchShowDetails = async () => {
    setLoading(true);
    try {
      const response = await getShowDetailsWithEpisodes(showId);
      console.log({response: response.data._embedded});
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShowDetails();
  }, []);

  const renderItem = ({item: episode}: {item: Episode}) => {
    return (
      <Pressable style={{flexDirection: 'row', margin: 10}} onPress={() => navigation.navigate("Episode", {episode})}>
        <FastImage
          source={{uri: episode.image.medium}}
          style={{height: 50, width: 50}}
        />
        <View style={{paddingLeft: 20}}>
          <Text>{episode.name}</Text>
          <Text>
            S{episode.season}E{episode.number}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Details</Text>
      {loading && <ActivityIndicator size={'large'} />}
      {error ? (
        <Text>{err.message}</Text>
      ) : (
        <>
          <Text>{data?.name}</Text>
          <Text>{data?.rating.average}</Text>
          <View style={{flex: 1}}>
            <FlashList
              data={data?._embedded?.episodes}
              renderItem={renderItem}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
