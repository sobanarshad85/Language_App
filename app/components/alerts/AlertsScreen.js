import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardAlertComponent from '../others/CardAlertComponent';
import FilterHeaderComponent from '../others/FilterHeaderComponent';


export default class AlertsScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      visibility: false,
    });
  }

  render() {
    const data = [
      {name: 'XYZ and Company 123', phone: '0044 7448 970536', email: 'test@test.com', website: 'www.testing.com' },
      {name: 'XYZ and Company 123', phone: '0044 7448 970536', email: 'test@test.com', website: 'www.testing.com' },
      {name: 'XYZ and Company 123', phone: '0044 7448 970536', email: 'test@test.com', website: 'www.testing.com' },
      {name: 'XYZ and Company 123', phone: '0044 7448 970536', email: 'test@test.com', website: 'www.testing.com' },
      {name: 'XYZ and Company 123', phone: '0044 7448 970536', email: 'test@test.com', website: 'www.testing.com' },
      {name: 'XYZ and Company 123', phone: '0044 7448 970536', email: 'test@test.com', website: 'www.testing.com' },
      {name: 'XYZ and Company 123', phone: '0044 7448 970536', email: 'test@test.com', website: 'www.testing.com' },
      {name: 'XYZ and Company 123', phone: '0044 7448 970536', email: 'test@test.com', website: 'www.testing.com' },
      {name: 'XYZ and Company 123', phone: '0044 7448 970536', email: 'test@test.com', website: 'www.testing.com' },
      {name: 'XYZ and Company 123', phone: '0044 7448 970536', email: 'test@test.com', website: 'www.testing.com' },
      {name: 'XYZ and Company 123', phone: '0044 7448 970536', email: 'test@test.com', website: 'www.testing.com' },
    ]

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <FilterHeaderComponent navigation={this.props.navigation} vendorScreen={true}/>
        </View>
        <ScrollView style={styles.contentContainer}>
          <CardAlertComponent data={data}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 0.1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 10,
  },
  contentContainer: {
    flex: 0.9,
  },
});
