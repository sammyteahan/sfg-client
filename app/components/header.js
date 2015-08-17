var React = require('react-native');

var {
  Text,
  View,
  Image,
  StyleSheet
} = React;

var style = StyleSheet.create({
  container: {
    backgroundColor: '#32526E',
    height: 300,
    padding: 10,
    justifyContent: 'center'
  },
  name: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 5
  },
  handle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16
  }
});


class Header extends React.Component {
  render() {
    return (
      <View style={ this.props.style }>
        <Text style={ style.name }>{ this.props.content }</Text>
      </View>
    )
  }
}


module.exports = Header;
