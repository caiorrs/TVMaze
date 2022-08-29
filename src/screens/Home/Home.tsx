import {ActivityIndicator, Text, TextInput} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SearchResults, ShowList} from '../../components';
import {SearchShowResponse, ShowResponse} from '../../services/types';
import {getShowsPaginated, searchShowByQuery} from '../../services/shows';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDebounce} from '../../hooks/useDebounce';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({navigation}: Props) => {
  const [shows, setShows] = useState<ShowResponse[]>([]);
  const [results, setResults] = useState<SearchShowResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search);

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

  const searchShows = async (query: string) => {
    setLoading(true);
    try {
      const response = await searchShowByQuery(query);
      setResults(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  useEffect(() => {
    if (debouncedSearch.length) {
      searchShows(debouncedSearch);
    }
  }, [debouncedSearch]);

  const renderContent = () => {
    if (!search.length || !results.length) {
      return (
        <ShowList
          shows={shows}
          onEndReached={() => setCurrentPage(prev => prev + 1)}
          onPressShow={id => navigation.navigate('Details', {showId: id})}
        />
      );
    }
    return (
      <SearchResults
        results={results}
        onPressShow={id => navigation.navigate('Details', {showId: id})}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>TVMaze</Text>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search for shows..."
      />
      {error ? <Text>ERROR</Text> : renderContent()}
      {loading && <ActivityIndicator size={'large'} />}
    </SafeAreaView>
  );
};
