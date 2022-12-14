import {Pressable, Text, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {ShowResponse} from '../../services/types';
import {createStyles} from './styles';
import {useTheme} from '../../contexts/ThemeContext';

interface Props {
  onPressShow: (id: number) => void;
  shows: ShowResponse[];
  onEndReached: () => void;
}

const ShowList = ({onPressShow, shows, onEndReached}: Props) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  const renderItem = ({
    item: show,
    index,
  }: {
    item: ShowResponse;
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
    <View style={styles.listContainer}>
      <FlashList
        data={shows}
        renderItem={renderItem}
        estimatedItemSize={72}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.8}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ShowList;
