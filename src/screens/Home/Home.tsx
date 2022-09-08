import {ActivityIndicator, Text, View} from 'react-native';
import {Header, Input, SearchResults, ShowList} from '../../components';
import React, {useCallback, useEffect, useState} from 'react';
import {SearchShowResponse, ShowResponse} from '../../services/types';
import {getShowsPaginated, searchShowByQuery} from '../../services/shows';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStyles} from './styles';
import {useDebounce} from '../../hooks/useDebounce';
import {useTheme} from '../../contexts/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({navigation, route}: Props) => {
  const {theme} = useTheme();
  const styles = createStyles();

  const [shows, setShows] = useState<ShowResponse[]>([]);
  const [results, setResults] = useState<SearchShowResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [noShowsFound, setNoShowsFound] = useState(false);

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
      if (!response.data.length) {
        setNoShowsFound(true);
      } else {
        setNoShowsFound(false);
      }
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

  const onPressShow = (id: number) =>
    navigation.navigate('Details', {showId: id});

  const renderContent = () => {
    if (!noShowsFound && (!search.length || !results.length)) {
      return (
        <ShowList
          shows={shows}
          onEndReached={() => setCurrentPage(prev => prev + 1)}
          onPressShow={onPressShow}
        />
      );
    }
    return (
      <SearchResults
        results={results}
        onPressShow={onPressShow}
        noShowsFound={noShowsFound}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={route.name} />
      <View style={styles.inputContainer}>
        <Input
          value={search}
          onChangeText={setSearch}
          placeholder="Search for shows..."
        />
      </View>
      {loading && (
        <ActivityIndicator size={'large'} color={theme.colors.white} />
      )}
      {error ? <Text>ERROR</Text> : renderContent()}
    </SafeAreaView>
  );
};
