import {Text, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Episode'>;

export const Episode = ({route}: Props) => {
  const {episode: episodeDetails} = route.params;
  return (
    <View>
      <Text>Episode</Text>
      <Text>{episodeDetails.name}</Text>
    </View>
  );
};
