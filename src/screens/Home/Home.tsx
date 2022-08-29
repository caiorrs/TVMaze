import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ShowResponse} from '../../services/types';
import {getShowsPaginated} from '../../services/shows';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const [shows, setShows] = useState<ShowResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const navigation = useNavigation();

  const fetchShows = useCallback(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await getShowsPaginated(currentPage);
        setShows(prev => [...prev, ...response.data]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [currentPage]);

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  const renderItem = ({
    item: show,
    index,
  }: {
    item: ShowResponse;
    index: number;
  }) => {
    return (
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          borderWidth: 1,
        }}
        onPress={() => navigation.navigate('Details', {showId: show.id})}>
        <FastImage
          source={{
            uri: show.image.medium,
            priority:
              index < 50 ? FastImage.priority.high : FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
          style={{height: 50, width: 50}}
        />
        <Text>{show.name}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>HOME</Text>
      {error ? (
        <Text>ERROR</Text>
      ) : (
        <View style={{width: '100%', height: '100%'}}>
          <FlashList
            data={shows}
            renderItem={renderItem}
            estimatedItemSize={20}
            onEndReached={() => setCurrentPage(prev => prev + 1)}
            onEndReachedThreshold={0.8}
          />
        </View>
      )}
      {loading && <ActivityIndicator size={'large'} />}
    </SafeAreaView>
  );
};
