import React from "react";
import {
  Picker,
  Modal,
  TouchableWithoutFeedback,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";


export default class DropdownFieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      option: '5',
    }
    this.setStatesDropdown = this.setStatesDropdown.bind(this);
    this._platformSpecificDropdown = this._platformSpecificDropdown.bind(this);
  }

  setStatesDropdown(optionValue){
    this.setState({
      option: optionValue,
    });
  }

   _platformSpecificDropdown(){
  //   if(Platform.OS === 'ios'){
  //     return (
  //       <View style={styles.dropdownContainer}>
  //         <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
  //           <Text style={styles.labelText}>{this.state.option}</Text>
  //         </TouchableOpacity>
  //         <Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>
  //           <TouchableWithoutFeedback onPress={() => this.setState({ modalVisible: false })}>
  //             <View style={styles.modalContainer}>
  //               <View style={styles.buttonContainer}>
  //                 <Text style={{ color: "blue" }} onPress={() => this.setState({ modalVisible: false })}>
  //                   Done
  //                 </Text>
  //               </View>
  //               <View>
  //                 <Picker selectedValue = {this.state.option}
  //                 onValueChange={(optionValue, optionIndex) => this.setStatesDropdown(optionValue)}>
  //                 {/*  { this.props.options.map((i, index) => (
  //                     <Picker.Item key={index} label={i.data.optionTitle} value={i.data.optionValue} />
  //                   ))} */}
  //                 </Picker>
  //               </View>
  //             </View>
  //           </TouchableWithoutFeedback>
  //         </Modal>
  //       </View>
  //   )}
  //   else if(Platform.OS === 'android') {
  //     return(
  //       <View style={styles.dropdownContainer}>
  //         <Picker
  //           selectedValue={this.state.language}
  //           onValueChange={(itemValue, itemIndex) =>
  //             this.setState({language: itemValue})
  //           }>
  //           <Picker.Item label="Java" value="java" />
  //           <Picker.Item label="JavaScript" value="js" />
  //         </Picker>
  //       </View>
  //     )}
   }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{this.props.label}</Text>
        </View>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={this.state.option}
            onValueChange={(value) =>
              this.setState({option: value})
            }>
            <Picker.Item label="1 day" value="1" />
            <Picker.Item label="3 days" value="3" />
            <Picker.Item label="5 days" value="5" />
            <Picker.Item label="7 days" value="7" />
            <Picker.Item label="15 days" value="15" />
          </Picker>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    flex:0.5,
  },
  dropdownContainer: {
    flex: 0.5,
  },
  labelText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'black',
    padding: 5,
  },
  // modalContainer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   backgroundColor: "#cecece"
  // },
  // buttonContainer: {
  //   justifyContent: "flex-end",
  //   flexDirection: "row",
  //   padding: 4,
  //   backgroundColor: "transparent"
  // },
  // recordButton: {
  //   flex:3,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderWidth: 2,
  //   borderColor: 'grey',
  //   borderRadius: 4,
  //   marginLeft: 10,
  //   marginRight: 10,
  // },
})
