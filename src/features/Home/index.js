import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Button from "../../atoms/Button";
import GridView from "./components/GridView";
import CompactView from "./components/CompactView";
import LargeView from "./components/LargeView";
import axios from "axios";

const buttons = [
  { id: "grid", title: "Grid" },
  { id: "compact", title: "Compact" },
  { id: 'large', title: 'Large' },
];

export default class Home extends Component {
  state = {
    selectedView: "grid",
    articles: [],
  };

  componentDidMount() {
    axios
      .get('https://api.smallcase.com/news/getNews?count=20&offset=0')
      .then(response => this.setState({ articles: response.data.data }))
      .catch(error => console.log(error));
  }

  handleViewChange = id => {
    this.setState({
      selectedView: id
    });
  };

  renderSelectedView = () => {
    const { selectedView, articles } = this.state;
    if (!articles.length) {
      return null;
    }
    switch (selectedView) {
      case 'grid':
        return <GridView articles={articles} />;

      case "compact":
        return <CompactView articles={articles} />;

      case "large":
        return <LargeView articles={articles} />;

      default:
        return <GridView articles={articles} />;
    }
  };

  render() {
    const { selectedView } = this.state;
    return (
      <View style={styles.root}>
        <View style={styles.buttonsContainer}>
          {buttons.map(button => (
            <Button
              style={styles.button}
              title={button.title}
              key={button.id}
              isSelected={button.id === selectedView}
              onClick={() => this.handleViewChange(button.id)}
            />
          ))}
        </View>
        <View style={styles.dataContainer}>
          <ScrollView>{this.renderSelectedView()}</ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 50
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  button: {
    margin: 5,
  },
  dataContainer: {
    flex: 10
  },
  image: {
    width: 100,
    height: 100,
  }
});
