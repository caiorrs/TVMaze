import {FlashList} from '@shopify/flash-list';
import {Header} from '../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Episode'>;

export const Episode = ({navigation, route}: Props) => {
  const {episode: episodeDetails} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={episodeDetails.name} onBack={navigation.goBack} />
      <Text>Episode</Text>
      <Text>{episodeDetails.name}</Text>
      {/* <FlashList /> */}
    </SafeAreaView>
  );
};
