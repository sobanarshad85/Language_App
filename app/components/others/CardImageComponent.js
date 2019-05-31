import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import ShareComponent from './ShareComponent';


export default class CardImageComponent extends Component<Props> {
  //TODO getdata function in another file and import to this file to fetch data according to the category

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <FlatList
        data={this.props.data}
        horizontal={this.props.viewRequired == 'horizontalScroll' ? true: false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>

            <TouchableOpacity onPress={() => navigate('ListingDescription', {isDirectory: this.props.isDirectory, title: item.title, image: item.imageSource, dateTime: item.dateTimePosted})}>

            {this.props.viewRequired == 'row' ?
              <View style={styles.directoryListings}>

                <View style={styles.row1}>
                  <Image
                    style={{width: '100%', height: 150, borderRadius: 10}}
                    source={item.imageSource}
                  />
                </View>

                <View style={styles.row2}>
                  <View style={styles.titleContainer}>
                    <Text style={{fontSize: 20, color: 'black'}}>{item.title}</Text>
                  </View>
                  <View style={[styles.shareIconContainer, {flex: 0.15}]}>
                    <ShareComponent _flex={0.85}/>
                  </View>
                </View>

              </View>

              : null
            }

            {this.props.viewRequired == 'horizontalScroll' ?
              <View style={[styles.listCardContainer, { width: 200 }]}>

                <View style={styles.header}>
                  <Text style={styles.titleText}>{item.title}</Text>
                </View>

                <View style={styles.imageContainer2}>
                  <Image source={item.imageSource} style={styles.imageContainer}/>
                </View>

                <View style={styles.footerContainer}>
                  <Text></Text>
                </View>

              </View>

              : null
            }

            {this.props.viewRequired == 'big' ?
              <View style={styles.listCardContainer}>

                <View style={styles.header}>
                  <Text style={styles.titleText}>{item.title}</Text>
                </View>

                <View style={styles.imageContainer2}>
                  <Image source={item.imageSource} style={styles.imageContainer}/>
                </View>

                <View style={styles.footerContainer}>
                  <Text></Text>
                </View>

              </View>

              : null
            }

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
  },
  directoryListings:{
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'white'
  },
  row1:{
    flex: 0.4,
  },
  row2:{
    flex: 0.6,
    flexDirection: 'row',
    marginLeft: 5,
  },
  listCardContainer: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#adadad',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    margin: 10
  },
  header: {
    flex: 0.1,
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  titleContainer:{
    flex: 0.85,
  },
  shareIconContainer:{
    flex: 0.15,
    marginRight: 5
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: 150,
    resizeMode: 'cover'
  },
  imageContainer2: {
    flex: 0.8,
  },
  footerContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    backgroundColor: '#aaaaaa',
  },
  titleText: {
    fontSize: 20,
  },
  footerText: {
    fontSize: 15,
  },
});
