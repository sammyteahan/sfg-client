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
    flex: 1,
    backgroundColor: '#111111'
  }
});


class sfg extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={ style.container }
        barTintColor="#bdc3c7"
        tintColor="#32526E"
        titleTextColor="#32526E"
        initialRoute={{
          title: 'Home',
          component: Dashboard
        }} />
    );
  }
};


AppRegistry.registerComponent('sfg', () => sfg);