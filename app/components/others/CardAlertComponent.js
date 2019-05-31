import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalComponent from '../others/ModalComponent';

export default class CardAlertComponent extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
      <FlatList
        data={this.props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>

          <View style={styles.listCardContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.boldText}>{item.name}</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.normalText}>{item.phone}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.normalText}>{item.email}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.normalText}>{item.website}</Text>
            </View>
          </View>

        }
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5'
  },
  listCardContainer: {
    flex: 1,
    borderRadius: 10,
    marginVertical: 2,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#ffffff'
  },
  textContainer: {
    paddingVertical: 3,
  },
  rowContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  footerContainer: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  userAvatar: {
    flex: 0.12,
    justifyContent: 'center',
  },
  titleDateContainer: {
    flex: 0.88,
    justifyContent: 'center',
  },
  normalText: {
    fontSize: 15,
    color: '#333333',
  },
  smallText: {
    fontSize: 12,
    color: '#333333',
  },
  bigText: {
    fontSize: 22,
    color: '#333333',
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
});
