import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalComponent2 from '../others/ModalComponent2';

export default class CardTextComponent2 extends Component<Props> {

  //TODO getdata function in another file and import to this file to fetch data according to the category

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <FlatList
        data={[
          {userImageUrl: 'something', userName: 'Louisa', timeElapsedMsg: '1 hour ago', postText: 'This app is amazing. Wohoooooo!', comments: {comment_1: 'First one to comment yohoo', comment_2: 'yeah I agree this app is amazing'}, Likes: 24},
          {userImageUrl: 'something', userName: 'Izzy', timeElapsedMsg: '12 hour ago', postText: 'Okay so now what?', comments: {comment_1: 'Now get back to work', comment_2: 'nothing special', comment_3: 'Jeez'}, Likes: 11},
          {userImageUrl: 'something', userName: 'Nat', timeElapsedMsg: '5 hour ago', postText: 'Anyone got a spare egg that I can use?', comments: {comment_1: 'Yeah I have got one', comment_2: 'Nah sorry mate!'}, Likes: 2},
          {userImageUrl: 'something', userName: 'Louisa', timeElapsedMsg: '1 hour ago', postText: 'This app is amazing. And the interesting thing is that I can share the extra food instead of chuking it in the bin wohoooooo!', comments: {comment_1: 'First one to comment yohoo', comment_2: 'yeah I agree this app is amazing'}, Likes: 24},
          {userImageUrl: 'something', userName: 'Izzy', timeElapsedMsg: '12 hour ago', postText: 'Okay so now what?', comments: {comment_1: 'Now get back to work', comment_2: 'nothing special', comment_3: 'Jeez'}, Likes: 11},
          {userImageUrl: 'something', userName: 'Louisa', timeElapsedMsg: '1 hour ago', postText: 'This app is amazing. And the interesting thing is that I can share the extra food instead of chuking it in the bin wohoooooo!', comments: {comment_1: 'First one to comment yohoo', comment_2: 'yeah I agree this app is amazing'}, Likes: 24},
          {userImageUrl: 'something', userName: 'Izzy', timeElapsedMsg: '12 hour ago', postText: 'Okay so now what?', comments: {comment_1: 'Now get back to work', comment_2: 'nothing special', comment_3: 'Jeez'}, Likes: 11},
          {userImageUrl: 'something', userName: 'Louisa', timeElapsedMsg: '1 hour ago', postText: 'This app is amazing. And the interesting thing is that I can share the extra food instead of chuking it in the bin wohoooooo!', comments: {comment_1: 'First one to comment yohoo', comment_2: 'yeah I agree this app is amazing'}, Likes: 24},
          {userImageUrl: 'something', userName: 'Izzy', timeElapsedMsg: '12 hour ago', postText: 'LOL!', comments: {comment_1: 'Now get back to work', comment_2: 'nothing special', comment_3: 'Jeez'}, Likes: 11},
        ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          <View style={styles.listCardContainer}>
            <View style={styles.headerContainer}>
              <View style={styles.userAvatar}>
                <Icon name="user-circle-o" color={'#1EA1E9'} size={35}/>
              </View>
              <View style={styles.titleDateContainer}>
                <Text style={styles.boldText}>{item.userName} posted a message</Text>
                <Text style={styles.smallText}>{item.timeElapsedMsg}</Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.bigText}>{item.postText}</Text>
            </View>
            <View style={styles.footerContainer}>
              <View style={[styles.commentsIconContainer, styles.borders]}>
                <ModalComponent2 iconName={'comments'} _flex={0.8} filter_1={'Comment 1'} filter_2={'Comment 2'}/>
              </View>
              <View style={[styles.likesIconContainer, styles.borders]}>
                <ModalComponent2 iconName={'thumbs-up'} _flex={0.8} filter_1={'like 1'} filter_2={'like 2'}/>
              </View>
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
    borderWidth: 1,
    borderColor: '#adadad',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: '#ffffff'
  },
  headerContainer: {
    flex: 0.3,
    flexDirection: 'row',
    margin: 10,
  },
  textContainer: {
    flex: 0.5,
    padding: 10,
  },
  footerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
  },
  userAvatar: {
    flex: 0.12,
    justifyContent: 'center',
  },
  titleDateContainer: {
    flex: 0.88,
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
