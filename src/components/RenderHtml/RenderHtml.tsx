import React from 'react';
import RenderHTML from 'react-native-render-html';
import {createStyles} from './styles';
import {useTheme} from '../../contexts/ThemeContext';
import {useWindowDimensions} from 'react-native';

interface Props {
  html: string;
}

const RenderHtml = ({html}: Props) => {
  const {width} = useWindowDimensions();
  const {theme} = useTheme();
  const styles = createStyles(theme);

  return (
    <RenderHTML
      contentWidth={width}
      source={{html}}
      baseStyle={styles.baseStyle}
    />
  );
};

export default RenderHtml;
