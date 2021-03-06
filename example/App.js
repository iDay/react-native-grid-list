import React, { PureComponent } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import GridList from 'react-native-grid-list';

const newImage = {
  0: 'business',
  1: 'cats',
  2: 'city',
  3: 'food',
  4: 'nightlife',
  5: 'fashion',
  6: 'people',
  7: 'nature',
  8: 'animals',
  9: 'imageUrl',
};

const image = index => ({
  thumbnail: {
    uri: `https://lorempixel.com/200/200/${
      newImage[index % (Object.keys(newImage).length - 1)]
    }`,
  },
});

const items = Array.from(Array(20)).map((_, index) => image(index));

export default class App extends PureComponent {
  renderItem = ({ item, stagger }) => (
    <Image
      style={styles.image}
      source={item.thumbnail}
      onLoad={() => stagger.start()}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <GridList
          showAnimation
          showSeparator
          data={items}
          numColumns={3}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
