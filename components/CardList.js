import React, { Component } from 'react';
import { View} from 'react-native';
import {Card, Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class CardList extends Component {
    renderData() {
        const {data, imageKey, titleKey, buttonText, bottomView}= this.props;
        return data.map((item, index)=> {
          return (
            <Card
            key={index}
            title={item[titleKey]}
            image={{uri: item[imageKey]}}>
                {bottomView()}
            </Card>
    
          )
      })
    }

  render() {
    const {data} = this.props;
    if(data && data.length >0) {
        return this.renderData()
    }
    else {
        return <View><Text> </Text></View>
    }

    
  }
}

export default CardList;
