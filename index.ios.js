/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./app/components/main');
var Dashboard = require('./app/components/dashboard');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;


var style = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#111111'
  }
});

/**
* #bdc3c7
* #8e44ad
*/
class sfg extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      isTranslucent: true,
      statusBar: true,
      shadowBool: false
    };
  }
  render() {
    console.log(this.state);
    return (
      <NavigatorIOS
        style={ style.container }
        barTintColor="#bdc3c7"
        tintColor="#32526E"
        titleTextColor="#32526E"
        // barTintColor="#32526E"
        // tintColor="#fff"
        // titleTextColor="#fff"
        shadowHidden="true"
        initialRoute={{
          title: 'Home',
          component: Dashboard
        }} />
    );
  }
};


AppRegistry.registerComponent('sfg', () => sfg);