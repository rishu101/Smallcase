import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { widthPercentageToDP } from "../../../utils/helper";

const LargeView = props => {
  const { articles, style } = props;
  return (
    <View style={{ ...style, ...styles.root }}>
      {articles.map(article => (
        <View style={styles.cell}>
          <Image style={styles.image} source={{ uri: article.imageUrl }} />
          <View>
            <Text style={styles.headline}>{article.headline}</Text>
            <Text style={styles.summary}>{article.summary}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 48,
    height: 48,
    margin: 5,
  },
  cell: {
    width: widthPercentageToDP(90),
    flexDirection: 'row',
    marginBottom: 20,
  },
  headline: {
    flex: 1,
    flexWrap: 'wrap',
    color: "#424242",
  },
  summary: {
    flex: 1,
    flexWrap: "wrap",
    color: '#bdbdbd',
  },
});

export default LargeView;
