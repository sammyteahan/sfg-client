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
    height: 265,
    padding: 10,
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#32526E',
    // justifyContent: 'space-around',
    justifyContent: 'center',
    height: 200,
    flex: 1
  },
  name: {
    alignSelf: 'center',
    color: 'white',
    // justifyContent: 'flex-end',
    // color: 'white',
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
    borderRadius: 100,
    height: 200,
    marginTop: 10,
    width: 200
  },
  spring: {
    alignSelf: 'center',
    borderRadius: 0,
    height: 100,
    width: 100,
    flex: 0
  },
  headerImg: {
    alignSelf: 'center',
    borderRadius: 0,
    height: 100,
    width: 100
  },
  test: {
    alignSelf: 'center',
    borderRadius: 0,
    flex: 0
  }
});

/**
* @todo we are going to need to pass in the name of 
* the icon in the props as well. Then we an show 
* the correct icon in the correct compoenents
*
* <Image source={require('image!icon-test')} style={style.headerImg} />
*        
*/
class Header extends React.Component {
  formatHeader() {
    if (this.props.content === 'Winter') {
      return (
        <Image source={require('image!winter')} style={style.spring} />
      )
    } else if (this.props.content === 'Summer') {
      return (
        <Image source={require('image!sun')} style={style.spring} />
      )
    } else if (this.props.content === 'Spring') {
      return (
        <Image source={require('image!rain')} style={style.spring} />
      )
    } else if (this.props.content === 'Fall') {
      return (
        <Image source={require('image!icon-fall')} style={style.spring} />
      )
    } else if (this.props.content === 'The Wealthy Earth') {
      return (
        <Image source={require('image!hand')} style={style.headerImg} />
      )
    }
    else {
      return (
        <View />
      )
    }
  }
  /**
  *
  */
  render() {
    return (
      <View style={ this.props.style }>
        { this.formatHeader() }
        <Text style={ style.name }>{ this.props.content }</Text>
      </View>
    )
  }
}


module.exports = Header;
