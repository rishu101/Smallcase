import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const GridView = props => {
  const { articles, style } = props;
  return (
    <View style={{ ...style, ...styles.root }}>
      {articles.map(article => (
        <Image style={styles.image} source={{ uri: article.imageUrl }} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 48,
    height: 48,
    margin: 5,
  }
});

export default GridView;
