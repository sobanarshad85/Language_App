import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Button, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BarChart, Grid, ProgressCircle } from 'react-native-svg-charts';
import TextComponent from '../others/TextComponent';
import ModalComponent from '../others/ModalComponent';
import ActivityHighlightComponent from '../others/ActivityHighlightComponent';
import SignOutComponent from '../login/SignOutComponent';
import { connectFirebase } from '../../backend/firebase/utility';



export default class DashboardScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this._renderModalContent = this._renderModalContent.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity style={{marginRight: 5}}>
          <SignOutComponent />
        </TouchableOpacity>
      ),
    }
  };

  componentDidMount(){
    connectFirebase();
  }

  _renderModalContent(string){
    const data4 = [
      { imageUrl: 'https://www.gstatic.com/webp/gallery3/2.png', title: 'Just some placeholder text', date: '24 Feb 2019' },
      { imageUrl: 'https://www.gstatic.com/webp/gallery3/2.png', title: 'Just some placeholder text', date: '08 March 2018' },
      { imageUrl: 'https://www.gstatic.com/webp/gallery3/2.png', title: 'Just some placeholder text', date: '13 Dec 2019' },
    ]
    return(
        <ActivityHighlightComponent data={ data4 } onModal={true} navigation={this.props.navigation}/>
    )
  }



  render() {

    const data = {
      name: 'Lorenole', level: 'Level 5', lessons: '1', posts: '0', skills: '10', badges: '4',
      visits: '3', learners: '592'
    };
    const fill = '#0060c6';
    const data2   = [ 10, 20, 5, 10 ];
    const data3 = [
      { imageUrl: 'https://www.gstatic.com/webp/gallery3/2.png', title: 'Lorenole started learning LESSON 2', name: 'Lorenole', lesson: 'LESSON 2', date: '24 Feb 2019' },
      { imageUrl: 'https://www.gstatic.com/webp/gallery/5.jpg', title: 'Lionel started learning LESSON 3',name: 'Lionel', lesson: 'LESSON 4', date: '08 March 2019' },
      { imageUrl: 'https://www.gstatic.com/webp/gallery/4.jpg', title: 'Pogba started learning LESSON 1',name: 'Pogba', lesson: 'LESSON 1', date: '18 April 2019' },
      { imageUrl: 'https://www.gstatic.com/webp/gallery3/2.png', title: 'Lorenole started learning LESSON 4',name: 'Lorenole', lesson: 'LESSON 2', date: '24 Feb 2019' },
      { imageUrl: 'https://www.gstatic.com/webp/gallery/5.jpg', title: 'Lionel started learning LESSON 5',name: 'Lionel', lesson: 'LESSON 4', date: '08 March 2019' },
      { imageUrl: 'https://www.gstatic.com/webp/gallery/4.jpg', title: 'Pogba started learning LESSON 2',name: 'Pogba', lesson: 'LESSON 1', date: '18 April 2019' },
      { imageUrl: 'https://www.gstatic.com/webp/gallery3/2.png', title: 'Lorenole started learning LESSON 4',name: 'Lorenole', lesson: 'LESSON 2', date: '24 Feb 2019' },
      { imageUrl: 'https://www.gstatic.com/webp/gallery/5.jpg', title: 'Lionel started learning LESSON 1',name: 'Lionel', lesson: 'LESSON 4', date: '08 March 2019' },
    ]
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollviewContainer}>

        <View style={styles.profileContainer}>
          <View style={styles.iconContainer}>
            <Icon onPress={() => alert('upload image component will appear')}
              name={"user-circle"} color={'#fff'} size={120} />
            <Icon style={styles.iconAbsolute} name={"star-o"}
              color={'#e20000'} size={40} />
          </View>

          <View style={styles.profileItemsContainer}>
            <Text style={styles.boldText}>{data.name}</Text>
            <Text style={styles.normalText}>{data.level}</Text>
            <View style={styles.horizontalProgressContainer}>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('EditProfileScreen')}>
              <Text style={styles.normalText2}>EDIT PROFILE</Text>
              <Icon name={"user-o"} color={'#000'} size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container1Row}>
          <View style={styles.paddingView}>
            <ModalComponent text={data.lessons} modalContent={this._renderModalContent('lessons')} />
            <ModalComponent text={'LESSON'} modalContent={this._renderModalContent('lessons')} />
          </View>

          <View style={styles.paddingView}>
            <ModalComponent text={data.posts} modalContent={this._renderModalContent('posts')} />
            <ModalComponent text={'POSTS'} style={styles.greyText} modalContent={this._renderModalContent('posts')} />
          </View>

          <View style={styles.paddingView}>
            <Icon name={"bars"} color={'#000'} size={15} />
            <ModalComponent text={'ACTIVITY'} modalContent={this._renderModalContent('activity')}/>
          </View>

          <View style={styles.paddingView}>
            <ModalComponent text={data.skills} modalContent={this._renderModalContent('skills')} />
            <ModalComponent text={'SKILLS'}  modalContent={this._renderModalContent('skills')} />
          </View>

          <View style={styles.paddingView}>
            <ModalComponent text={data.badges} modalContent={this._renderModalContent('badges')} />
            <ModalComponent text={'BADGES'}  modalContent={this._renderModalContent('badges')} />
          </View>
        </View>

        <View style={styles.container2}>
          <TextComponent text={'DASHBOARD'} style={styles.greyTextBig} />
          <View style={{flex: 1, flexDirection: 'row'}}>

            <View style={styles.flexEndView}>
              <ModalComponent text={data.visits} style={styles.blueTextBig} modalContent={this._renderModalContent('visits')} />
              <ModalComponent text={'VISITS THIS WEEK'} style={styles.greyText} modalContent={this._renderModalContent('visits')} />
            </View>

            <View style={styles.flexEndView}>
              <ModalComponent text={data.learners} style={styles.blueTextBig} modalContent={this._renderModalContent('nearbyLeaners')} />
              <ModalComponent text={'NEARBY LEARNERS'} style={styles.greyText} modalContent={this._renderModalContent('nearbyLeaners')} />
            </View>

            <View style={styles.flexEndView}>
              <Icon name={"trophy"} color={'#0060c6'} size={35} />
              <ModalComponent text={'LEADERBOARD'} style={styles.greyText} modalContent={this._renderModalContent('leaderboard')} />
            </View>

          </View>
        </View>

        <View style={styles.container2}>
          <TextComponent text={'YOUR GOAL'} style={styles.greyTextBig} />

          <View style={styles.rowView}>
            <View style={styles.row1View}>
              <BarChart
                style={{ height: 100 }}
                data={ data2 }
                svg={{ fill }}
                contentInset={{ top: 30, bottom: 30 }} >
              </BarChart>
            </View>
            <View style={styles.row2View}>
              <ProgressCircle
                style={styles.progress}
                progress={ 0.7 }
                progressColor={'#00af2b'}
              />
              <ModalComponent text={'DAILY GOAL'} style={[styles.greyText, {textAlign: 'center'}]} modalContent={this._renderModalContent('dailyGoal')} />
            </View>
          </View>

        </View>

        <View style={styles.contentContainer}>
          <ActivityHighlightComponent data={ data3 } navigation={this.props.navigation}/>
        </View>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3F8',
  },
  scrollviewContainer: {
    flexGrow: 1,
    backgroundColor: '#EEF3F8',
  },
  profileContainer: {
    flex: 0.2,
    backgroundColor: '#1EA1E9',
  },
  container1Row: {
    flex: 0,
    flexDirection: 'row',
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 0.2,
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#fff',
  },
  contentContainer:{
    flex: 0.5,
    marginTop: 10,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  iconContainer: {
    flex: 0.7,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  profileItemsContainer:{
    flex: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconAbsolute: {
    position: 'absolute',
    top: '80%',
    left: '52%',
  },
  horizontalProgressContainer:{
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    height: 20,
    width: 100,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 20,
    marginVertical: 5,
    backgroundColor: '#00af2b'
  },
  buttonContainer:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  paddingView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  flexEndView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rowView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row1View: {
    flex: 0.6,
  },
  row2View: {
    flex: 0.3,
  },
  progress: {
    height: 80,
  },
  greyText: {
    color: '#7c7c7c',
    paddingTop: 5
  },
  greyTextBig: {
    color: '#7c7c7c',
    fontSize: 20,
    marginBottom: 20
  },
  blueTextBig: {
    color: '#0060c6',
    fontSize: 20,
    padding: 5,
  },
  boldText:{
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  normalText:{
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'normal',
    color: '#fff',
    marginVertical: 2,
  },
  normalText2:{
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'normal',
    color: '#000',
    marginVertical: 2,
  },
});
