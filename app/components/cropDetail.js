var React = require('react-native');
var Separator = require('../helpers/separator');
var Header = require('./header');
var Switch = require('../helpers/switch');


var {
  Text,
  View,
  StyleSheet,
  SwitchIOS,
  ScrollView
} = React;


var style = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noteContainer: {
    flexDirection: 'column',
    padding: 10
  },
  dateContainer: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  date: {
    justifyContent: 'center',
    fontSize: 18
  },
  header: {
    backgroundColor: '#32526E',
    height: 100,
    padding: 10,
    justifyContent: 'center'
  },
  name: {
    flex: 1,
    color: '#484848',
    fontSize: 20,
    paddingBottom: 10
  },
  notes: {
    flex: 1,
    color: '#484848',
    fontSize: 18
  }
});


class CropDetail extends React.Component {
  makeBackground(btn) {
    var styleObj = {
      height: 100,
      padding: 10,
      justifyContent: 'center'
    }
    if(this.props.crop.category === 1) {
      styleObj.backgroundColor = '#81B9C3';
    } else if(this.props.crop.category === 2) {
      styleObj.backgroundColor = '#41C3AC';
    } else if(this.props.crop.category === 3) {
      styleObj.backgroundColor = '#FF6B57';
    } else if(this.props.crop.category === 4) {
      styleObj.backgroundColor = '#81B9C3';
    }
    return styleObj;
  }
  getTransplant(value) {
    return value ? 'Yes' : 'No';
  }
  getSeed(value) {
    return value ? 'Yes' : 'No';
  }
  formatDate(date) {
    // is a string duuuuuh
    // and dates need to be comma separated in the constructor
    // also, the dates are zero based.
    // only need the month and the day
    var date = new Date(date);
    return date.getDate();
  }
  render() {
    return (
      <ScrollView>
        <View style={ style.container }>
          <Header style={ this.makeBackground() } content={ this.props.crop.name } />
          <View style={ style.rowContainer }>
            <Text style={ style.name }>Transplant:</Text>
            <Switch value={ this.getTransplant(this.props.crop.transplant) } />
          </View>
          <Separator />
          <View style={ style.rowContainer }>
            <Text style={ style.name }>Direct seed:</Text>
            <Switch value={ this.getSeed(this.props.crop.direct_seed) } />
          </View>
          <Separator />
          <View style={ style.rowContainer }>
            <View style={ style.dateContainer }>
              <Text style={ style.date }>Start Date:</Text>
              <Text style={style.date }>{ this.props.crop.plant_start_date }</Text>
            </View>
            <View style={ style.dateContainer }>
              <Text style={ style.date }>End Date:</Text>
              <Text style={style.date }>{ this.props.crop.plant_end_date }</Text>
            </View>
          </View>
          <Separator />
          <View style={ style.noteContainer }>
            <Text style={ style.name }>Notes:</Text>
            <Text style={ style.notes }>{ this.props.crop.notes }</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}


module.exports = CropDetail;