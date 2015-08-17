var React = require('react-native');

var {
  View,
  StyleSheet
} = React;


var style = StyleSheet.create({
  separator: {
    backgroundColor: '#E4E4E4',
    flex: 1,
    height: 1,
    marginLeft: 15
  }
});


class Separator extends React.Component {
  render() {
    return (
      <View style={ style.separator } />
    )
  }
};


module.exports = Separator;