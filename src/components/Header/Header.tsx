import {Pressable, Text, View} from 'react-native';

import React from 'react';
import {createStyles} from './styles';
import {useTheme} from '../../contexts/ThemeContext';

interface Props {
  onBack?: () => void;
  title?: string;
}

const Header = ({onBack, title}: Props) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Pressable style={styles.side} onPress={() => onBack?.()}>
        {onBack && <Text style={styles.backText}>back</Text>}
      </Pressable>
      <View style={styles.titleContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
      <View style={styles.side} />
    </View>
  );
};

export default Header;
