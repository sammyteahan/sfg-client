var React = require('react-native');


var {
  SwitchIOS,
  Text,
  View,
  StyleSheet
} = React;


var style = StyleSheet.create({
  switchStyle: {
    marginBottom: 10
  }
});


class Switch extends React.Component {
  render() {
    return (
      <View>
        <SwitchIOS
          disabled={ true }
          value={ this.props.value } />
      </View>
    )
  }
}


module.exports = Switch;