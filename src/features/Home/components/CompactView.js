import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { widthPercentageToDP } from '../../../utils/helper';

const CompactView = props => {
  const { articles, style } = props;
  return (
    <View style={{ ...style, ...styles.root }}>
      {articles.map(article => (
        <View style={styles.cell}>
          <Image style={styles.image} source={{ uri: article.imageUrl }} />
          <Text numberOfLines={2} style={styles.headline}>
            {article.headline}
          </Text>
        </View>
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
  },
  cell: {
    height: 80,
    width: widthPercentageToDP(50),
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 20,
  },
  headline: {
    flex: 1,
    flexWrap: 'wrap',
    color: "#424242",
  },
});

export default CompactView;
