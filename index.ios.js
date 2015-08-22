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
  StatusBarIOS
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
        // navigationBarHidden='true'
        initialRoute={{
          title: 'Square Foot Gardening',
          component: Dashboard
        }} />
    );
  }
};


AppRegistry.registerComponent('sfg', () => sfg);