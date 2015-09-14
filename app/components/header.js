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
    height: 200,
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
  },
  image: {
    alignSelf: 'center',
    borderRadius: 50,
    height: 100,
    marginTop: 10,
    width: 100
  }
});

/**
* @todo we are going to need to pass in the name of 
* the icon in the props as well. Then we an show 
* the correct icon in the correct compoenents
*/
class Header extends React.Component {
  render() {
    return (
      <View style={ this.props.style }>
        <Image source={require('image!icon-winter')} style={ style.image} />
        <Text style={ style.name }>{ this.props.content }</Text>
      </View>
    )
  }
}


module.exports = Header;
