import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import _ from 'lodash';

const DEMO_IMG =
  Math.round(Math.random() * 10) % 2
    ? 'data:image/jpeg;base64,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'
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUk0s58djeFoOHKm14nzZ2gn_nvnGVO4dLcQ6KUYlWD_FMh5mPA';
class AuctionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const { vehicle } = this.props;
    const vehicle = {
      model: 'OO건설',
      manufacturer: '일반노동자',
      year: 2019,
    };
    return (
      <TouchableOpacity
        style={{
          height: 90,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={this.props.onPress}
      >
        <Image
          style={{
            height: 90,
            width: 90,
            resizeMode: 'contain',
            marginRight: 10,
            marginLeft: 20,
          }}
          source={{
            uri: vehicle.image || DEMO_IMG,
          }}
          //
        />
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 20, color: '#333', fontWeight: '400' }}>
            {vehicle.model}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name={'ios-calendar'} size={15} color={'#666'} />
            <Text style={{ fontSize: 15, color: '#333', fontWeight: '300' }}>
            {vehicle.manufacturer} 
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 15,
                color: '#666',
                fontWeight: '400',
              }}
            >
              {vehicle.year}
            </Text>
          </View>
          <Text style={{ fontSize: 12, color: '#666', fontWeight: '300' }}>
            {this.props.description}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            paddingRight: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: '300', color: '#333' }}>
           
          &nbsp;{'\uFFE6'}{this.props.offers.length
              ? _.maxBy(this.props.offers, o => o.bidPrice).bidPrice
              : '-'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default AuctionItem;