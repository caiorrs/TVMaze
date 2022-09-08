import {TextInput, TextInputProps, View} from 'react-native';

import React from 'react';
import {createStyles} from './styles';
import {useTheme} from '../../contexts/ThemeContext';

interface InputProps extends TextInputProps {}

const Input = ({...props}: InputProps) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.darkText}
        {...props}
      />
    </View>
  );
};

export default Input;
