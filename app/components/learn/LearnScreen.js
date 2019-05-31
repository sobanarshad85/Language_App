import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Platform } from 'react-native';
import NewLearningComponent from './NewLearningComponent';

export default class LearnScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={[styles.contentContainer,{marginTop: 10}]}>
            <NewLearningComponent backgroundColor={'#b5e2ff'} title={'LEVEL 1'} onPress={() => navigate('ListenRepeatScreen', { title: 'Level 1' } )}/>
          </View>
          <View style={styles.contentContainer}>
            <NewLearningComponent backgroundColor={'#63c3ff'} title={'LEVEL 2'} onPress={() => navigate('ListenRepeatScreen', { title: 'Level 2' } )}/>
          </View>
          <View style={styles.contentContainer}>
            <NewLearningComponent backgroundColor={'#149fff'} title={'LEVEL 3'} onPress={() => navigate('ListenRepeatScreen', { title: 'Level 3' } )}/>
          </View>
          <View style={styles.contentContainer}>
            <NewLearningComponent backgroundColor={'#0082e0'} title={'LEVEL 4'} onPress={() => navigate('ListenRepeatScreen', { title: 'Level 4' } )}/>
          </View>
          <View style={styles.contentContainer}>
            <NewLearningComponent backgroundColor={'#0162a8'} title={'LEVEL 5'} onPress={() => navigate('ListenRepeatScreen', { title: 'Level 5' } )}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'stretch',
    borderWidth: 1,
    borderColor: '#d2ddef',
    borderBottomColor: '#e0e0e0',
    padding: 15,
  },
});
