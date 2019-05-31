import React, {Component} from 'react';
import {StyleSheet, Modal, Text, SafeAreaView, TouchableHighlight, View, Alert, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      visible: false,
    });
  }

  setModalVisible(visible) {
    this.setState({visible: visible});
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.setState({ visible: true })}>
        <View style={styles.container}>
          <Text style={[styles.text, this.props.style]}>{this.props.text}</Text>
        </View>
        <View style={styles.container}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.visible}>
            <SafeAreaView style={styles.modalOuterContentContainer}>
              <View style={styles.modalInnerContentContainer}>
                <TouchableOpacity style={styles.close} onPress={() => {
                    this.setModalVisible(!this.state.visible);
                  }}>
                  <Icon name="close" color={'#1EA1E9'} size={35}/>
                </TouchableOpacity>
                <View style={styles.filterContent}>
                  {this.props.modalContent}
                </View>
              </View>
            </SafeAreaView>
          </Modal>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelContainer: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
  },
  modalOuterContentContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalInnerContentContainer:{
    flex: 0.8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1EA1E9',
    backgroundColor: '#ffffff',
  },
  close: {
    alignItems: "flex-end",
    padding: 10,
  },
  filterContent: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: '#7c7c7c',
    paddingTop: 5,
  },
})
