import {Pressable, Text, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {SearchShowResponse} from '../../services/types';
import {createStyles} from './styles';
import {useTheme} from '../../contexts/ThemeContext';

type Props = {
  results: SearchShowResponse[];
  onPressShow: (id: number) => void;
};

const SearchResults = ({results, onPressShow}: Props) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  const renderResultItem = ({
    item: {show},
    index,
  }: {
    item: SearchShowResponse;
    index: number;
  }) => {
    return (
      <Pressable
        style={styles.itemContainer}
        onPress={() => onPressShow(show.id)}>
        <FastImage
          source={{
            uri: show?.image?.medium || show?.image?.original || '',
            priority:
              index < 50 ? FastImage.priority.high : FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.imageStyle}
        />
        <View style={styles.showDetailsContainer}>
          <Text style={styles.showName}>{show.name}</Text>
          {show.rating.average && (
            <Text style={styles.showRating}>
              {show.rating.average?.toFixed(1)}
            </Text>
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlashList
        data={results}
        renderItem={renderResultItem}
        estimatedItemSize={72}
      />
    </View>
  );
};

export default SearchResults;
