import React, { Component } from 'react';
import { View} from 'react-native';
import {Card, Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class CardList extends Component {
    renderData() {
        const {data, imageKey, titleKey, buttonText}= this.props;
        return data.map((item, index)=> {
          return (
            <Card
            key={index}
            title={item[titleKey]}
            image={{uri: item[imageKey]}}>
                
                <Button
           icon={<Icon name='code' color='#ffffff' />}
           backgroundColor='#03A9F4'
           buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
           title={buttonText} />
            </Card>
    
          )
      })
    }

  render() {
    return this.renderData()
  }
}

export default CardList;
