import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalComponent from '../others/ModalComponent';

export default class CardTextComponent extends Component<Props> {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <FlatList
        data={this.props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          <TouchableOpacity style={styles.listCardContainer} onPress={() => navigate('ListingDescription', {isDirectory: this.props.isDirectory, title: item.title, image: item.imageUrl, dateTime: item.date})}>
            <View style={styles.row1}>
              <View style={styles.userAvatar}>
                <Image style={styles.imageContainer}
                  source={item.imageUrl}
                />
              </View>
            </View>
            <View style={styles.row2}>
              <View style={styles.titleDateContainer}>
                <Text style={styles.boldText}>{item.title}</Text>
                <Text style={styles.smallText}>{item.date}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.normalText}>{item.notes}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#adadad',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 1,
    shadowOpacity: 0.4,
    elevation: 1,
    borderColor: '#adadad',
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#ffffff'
  },
  row1: {
    flex: 0.3,
    margin: 10,
  },
  row2: {
    flex: 0.7,
    margin: 10,
  },
  imageContainer:{
    flex: 1,
    width: null,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10
  },
  textContainer: {
    flex: 0.5,
  },
  footerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
  },
  userAvatar: {
    flex: 0.2,
    justifyContent: 'center',
  },
  titleDateContainer: {
    flex: 0.8,
    justifyContent: 'center',
  },
  commentsIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRightColor: '#adadad',
  },
  likesIconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  borders: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderTopColor: '#adadad',
    paddingTop: 10,
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
