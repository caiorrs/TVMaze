import {ActivityIndicator, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {FlashList} from '@shopify/flash-list';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ShowResponse} from '../../services/types';
import {getShows} from '../../services/shows';

export const Home = () => {
  const [shows, setShows] = useState<ShowResponse['name'][]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchShows = async () => {
    setLoading(true);
    try {
      const response = await getShows();
      setShows(response.data?.map(show => show.name));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  const renderItem = ({item: show}: {item: string; index: number}) => {
    return (
      <View>
        <Text>{show}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>HOME</Text>
      {loading && <ActivityIndicator />}
      {error ? (
        <Text>ERROR</Text>
      ) : (
        <View style={{width: '100%', height: '100%'}}>
          <FlashList
            data={shows}
            renderItem={renderItem}
            estimatedItemSize={20}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
