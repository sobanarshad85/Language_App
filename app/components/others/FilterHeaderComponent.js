import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Platform } from 'react-native';
import ModalComponent from './ModalComponent';
import SearchComponent from './SearchComponent';


export default class FilterHeaderComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this._renderModalContent = this._renderModalContent.bind(this);
  }

  _renderModalContent(){
    return(
      <View>
        <TouchableOpacity><Text style={styles.modalText}>Select Category</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.modalText}>Select Make</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.modalText}>Select Type</Text></TouchableOpacity>
      </View>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>

        { this.props.vendorScreen ?
            <View style={styles.searchContainer}>
              <SearchComponent placeholder={'search...'} />
            </View>
        :
          <View style={styles.container}>
            <View style={styles.row1}>
              <View style={styles.filterTextContainer}>
                <View>
                  <Text>Category: All</Text>
                </View>
                <View>
                  <Text>Make: All</Text>
                </View>
                <View>
                  <Text>Type: All</Text>
                </View>
              </View>
              <View style={styles.searchContainer}>
                <SearchComponent placeholder={'search...'} />
              </View>
            </View>

            <View style={styles.row2}>
              <ModalComponent iconName={'sort-amount-desc'} _flex={0.5} modalContent={this._renderModalContent()}/>
            </View>
          </View>
        }

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  row1:{
    flex: 0.8,
  },
  row2:{
    flex: 0.2,
    alignItems: 'flex-end',
  },
  filterTextContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flex: 1,
    borderRadius: 50,
    borderWidth: Platform.OS === 'ios' ? 2 : 0,
    borderColor: '#b2a100',
  },
  modalText: {
    fontSize: 25,
    color: '#727272',
    marginVertical: 5,
  },
});
