import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AlbumDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const album = this.props.navigation.getParam('album', {});
    return (
      <View>
        <Text> AlbumDetailScreen </Text>
      </View>
    );
  }
}
