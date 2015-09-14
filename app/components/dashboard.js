var React = require('react-native');
var api = require('../utils/api');
var Separator = require('../helpers/separator');
var Header = require('./header');
var CropList = require('./cropList');

var {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} = React;


var style = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  header: {
    backgroundColor: '#32526E',
    height: 200,
    padding: 10,
    justifyContent: 'center'
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});


class Dashboard extends React.Component {
  makeBackground(btn) {
    var styleObj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if(btn === 0) {
      styleObj.backgroundColor = '#41C3AC';
    } else if(btn === 1) {
      styleObj.backgroundColor = '#81B9C3';
    } else if(btn === 2) {
      styleObj.backgroundColor = '#FF6B57';
    } else if(btn === 3) {
      styleObj.backgroundColor = '#FF884D';
    }
    return styleObj;
  }
  goToSummer() {
    api.getSeasonCrops('summer').then((response) => {
      this.props.navigator.push({
        title: 'Summer Crops',
        component: CropList,
        passProps: {
          crops: response,
          headerTitle: 'Summer',
          season: 1
        }
      });
    });
  }
  goToSpring() {
    api.getSeasonCrops('spring').then((response) => {
      this.props.navigator.push({
        title: 'Spring Crops',
        component: CropList,
        passProps: {
          crops: response,
          headerTitle: 'Spring',
          season: 2
        }
      });
    });
  }
  goToFall() {
    api.getSeasonCrops('fall').then((response) => {
      this.props.navigator.push({
        title: 'Fall Crops',
        component: CropList,
        passProps: {
          crops: response,
          headerTitle: 'Fall',
          season: 3
        }
      });
    });
  }
  goToWinter() {
    api.getSeasonCrops('winter').then((response) => {
      this.props.navigator.push({
        title: 'Winter Crops',
        component: CropList,
        passProps: {
          crops: response,
          headerTitle: 'Winter',
          season: 4
        }
      });
    });
  }
  render() {
    return (
      <View style={ style.container }>
        <Header style={ style.header } content='SFG' />
        <TouchableHighlight
          style={ this.makeBackground(0) }
          onPress={ this.goToSpring.bind(this) }
          underlayColor='#88D4F5'>
            <Text style={ style.buttonText }>Spring</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={ this.makeBackground(1) }
          onPress={ this.goToWinter.bind(this) }
          underlayColor='#88D4F5'>
            <Text style={ style.buttonText }>Winter</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={ this.makeBackground(2) }
          onPress={ this.goToFall.bind(this) }
          underlayColor='#88D4F5'>
            <Text style={ style.buttonText }>Fall</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={ this.makeBackground(3) }
          onPress={ this.goToSummer.bind(this) }
          underlayColor='#88D4F5'>
            <Text style={ style.buttonText }>Summer</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Dashboard;