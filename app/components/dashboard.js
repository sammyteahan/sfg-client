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
  ActivityIndicatorIOS,
  StatusBarIOS
} = React;


var style = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  header: {
    backgroundColor: '#32526E',
    justifyContent: 'center',
    flex: 1
  },
  hero: {
    height: 265,
    justifyContent: 'center'
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  animator: {
    alignSelf: 'center'
  },
  child: {
    flex: 1
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
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if (btn === 0) {
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

  goToDetail(season, index) {
    let title = season.charAt(0).toUpperCase() + season.slice(1);
    this.props.navigator.push({
      title: 'Crop List',
      component: CropList,
      passProps: {
        url: season,
        headerTitle: title,
        season: index
      }
    });
  }

  render() {
    return (
      <View style={ style.container }>
        <View style={ style.child }>
          <Header style={ style.header } content='Square Foot Garden' />
        </View>
        <View style={ style.child }>
          <TouchableHighlight
            style={ this.makeBackground(0) }
            onPress={ this.goToDetail.bind(this, 'spring', 2) }
            underlayColor='#88D4F5'>
              <Text style={ style.buttonText }>Spring</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={ this.makeBackground(1) }
            onPress={ this.goToDetail.bind(this, 'winter', 4) }
            underlayColor='#88D4F5'>
              <Text style={ style.buttonText }>Winter</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={ this.makeBackground(2) }
            onPress={ this.goToDetail.bind(this, 'fall', 3) }
            underlayColor='#88D4F5'>
              <Text style={ style.buttonText }>Fall</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={ this.makeBackground(3) }
            onPress={ this.goToDetail.bind(this, 'summer', 1) }
            underlayColor='#88D4F5'>
              <Text style={ style.buttonText }>Summer</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
};

module.exports = Dashboard;
