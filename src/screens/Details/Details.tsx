import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import {Episode, ShowDetailsWithEpisodesResponse} from '../../services/types';
import React, {useEffect, useState} from 'react';

import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getShowDetailsWithEpisodes} from '../../services/shows';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export const Details = ({route}: Props) => {
  const {showId} = route.params;

  const navigation = useNavigation();

  const [data, setData] = useState<ShowDetailsWithEpisodesResponse | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
  }, []);

  const renderItem = ({item: episode}: {item: Episode}) => {
    return (
      <Pressable
        style={{flexDirection: 'row', margin: 10}}
        onPress={() => navigation.navigate('Episode', {episode})}>
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
      </Pressable>
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
