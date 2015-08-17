var React = require('react-native');
var api = require('../utils/api');
var Dashboard = require('./dashboard');
var Header = require('./header');



var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;


var style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 35,
    textAlign: 'center',
    color: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  btn: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false,
      headerContent: 'Fresh'
    }
  }
  handleSubmit() {
    this.setState({
      isLoading: true
    });
    api.getCrops().then((response) => {
      this.props.navigator.push({
        title: 'Crops',
        component: Dashboard,
        passProps: {crops: response}
      });
      this.setState({
        isLoading: false
      });
    });
  }
  render() {
    return (
      <View style={ style.mainContainer }>
        <Text style={style.title}>Fresh</Text>
        <TouchableHighlight
          style={ style.btn }
          onPress={ this.handleSubmit.bind(this) }
          underlayColor='white'>
          <Text style={ style.buttonText }>Go to Crops</Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS
          animating={ this.state.isLoading }
          color='#111'
          size='large'></ActivityIndicatorIOS>
      </View>
    )
  }
}

module.exports = Main;