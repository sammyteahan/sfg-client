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
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;


var style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    backgroundColor: '#32526E',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loader: {
    alignSelf: 'center',
    marginBottom: 10
  },
  header: {
    backgroundColor: '#32526E',
    height: 250,
    padding: 10,
    justifyContent: 'center',
    fontSize: 18
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
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  makeBackground(btn) {
    var styleObj = {
      flexDirection: 'column',
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
    this.setState({
      isLoading: true
    });
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
      this.setState({
        isLoading: false
      });
    });
  }
  goToSpring() {
    this.setState({
      isLoading: true
    });
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
      this.setState({
        isLoading: false
      });
    });
  }
  goToFall() {
    this.setState({
      isLoading: true
    });
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
      this.setState({
        isLoading: false
      });
    });
  }
  goToWinter() {
    this.setState({
      isLoading: true
    });
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
      this.setState({
        isLoading: false
      });
    });
  }
  render() {
    return (
      <View style={ style.container }>
        <Header style={ style.header } content='Fresh' />
        <ActivityIndicatorIOS
          animating={ this.state.isLoading }
          color='#ecf0f1'
          style={ style.loader }
          size='large'></ActivityIndicatorIOS>
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