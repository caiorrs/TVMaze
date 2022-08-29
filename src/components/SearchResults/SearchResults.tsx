import {Pressable, Text, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {SearchShowResponse} from '../../services/types';

type Props = {
  results: SearchShowResponse[];
  onPressShow: (id: number) => void;
};

const SearchResults = ({results, onPressShow}: Props) => {
  const renderResultItem = ({
    item: {show},
    index,
  }: {
    item: SearchShowResponse;
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
        onPress={() => onPressShow(show.id)}>
        <FastImage
          source={{
            uri: show?.image?.medium || show?.image?.original || '',
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
