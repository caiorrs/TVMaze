import {Pressable, Text, View} from 'react-native';

import {Episode} from '../../services/types';
import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {createStyles} from './styles';
import {useTheme} from '../../contexts/ThemeContext';

interface Props {
  ListHeaderComponent: () => JSX.Element;
  onPressEpisode: (episode: Episode) => void;
  seasons: (number | Episode)[];
}

const EpisodesList = ({
  ListHeaderComponent,
  onPressEpisode,
  seasons,
}: Props) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  const stickyHeaderIndices = seasons
    .map((item, index) => {
      if (typeof item === 'number') {
        return index;
      } else {
        return null;
      }
    })
    .filter(item => item !== null) as number[];

  const renderItem = ({item: episode}: {item: Episode | number}) => {
    if (typeof episode === 'number') {
      return (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>
            Season {String(episode).padStart(2, '0')}
          </Text>
        </View>
      );
    }

    return (
      <Pressable style={styles.episode} onPress={() => onPressEpisode(episode)}>
        <FastImage
          source={{uri: episode.image.medium}}
          style={styles.episodeImage}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View style={styles.episodeInfo}>
            <Text style={styles.episodeName}>{episode.name}</Text>
            <Text style={styles.episodeNumber}>
              S{episode.season}E{episode.number}
            </Text>
          </View>
          <Text style={[styles.episodeName, {alignSelf: 'center'}]}>
            {episode.rating.average}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlashList
        ListHeaderComponent={ListHeaderComponent}
        data={seasons}
        renderItem={renderItem}
        getItemType={type =>
          typeof type === 'number' ? 'sectionHeader' : 'row'
        }
        estimatedItemSize={70}
        stickyHeaderIndices={stickyHeaderIndices}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default EpisodesList;
