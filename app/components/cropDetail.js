var React = require('react-native');
var Separator = require('../helpers/separator');
var Header = require('./header');
var Switch = require('../helpers/switch');
var api = require('../utils/api');

var months = ['January', 'February', 'March', 'April',
              'May', 'June', 'July', 'August', 'September',
              'October', 'November', 'December'];


function ordinal(n) {
  if(n > 3 && n < 21) {
    return 'th';
  }
  switch(n % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

var {
  Text,
  View,
  StyleSheet,
  SwitchIOS,
  ActivityIndicatorIOS,
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
    color: '#484848',
    fontSize: 20,
    flex: 1
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
  },
  spinner: {
    alignSelf: 'center',
    marginTop: 50
  }
});


class CropDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      id: this.props.id,
      crop: {}
    };
  }

  componentDidMount() {
    api.getCrop(this.state.id).then((response) => {
      this.setState({
        isLoading: false,
        crop: response
      });
    });
  }

  makeBackground(btn) {
    var styleObj = {
      height: 100,
      padding: 10,
      justifyContent: 'center'
    }
    if(this.state.crop.category === 1) {
      styleObj.backgroundColor = '#81B9C3';
    } else if(this.state.crop.category === 2) {
      styleObj.backgroundColor = '#41C3AC';
    } else if(this.state.crop.category === 3) {
      styleObj.backgroundColor = '#FF6B57';
    } else if(this.state.crop.category === 4) {
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
    if (!date) {
      return;
    }
    var monthIndex = date.split('-')[1];
    var day = date.split('-')[2];
    var month = months[monthIndex - 1];
    return month + ' ' + day + ordinal(day);
  }

  getNotes() {
    var notes = this.state.crop.notes;
    if(!notes) {
      return (
        <View style={ style.noteContainer }>
          <Text style={ style.name }>Notes:</Text>
          <Text style={ style.notes }>No notes to display for { this.state.crop.name } at this time.</Text>
        </View>
      )
    } else {
      return (
        <View style={ style.noteContainer }>
          <Text style={ style.name }>Notes:</Text>
          <Text style={ style.notes }>{ this.state.crop.notes }</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={ style.container }>
          <Header style={ this.makeBackground() } content={ this.state.crop.name } />
          <View style={ style.rowContainer }>
            <Text style={ style.name }>Transplant Seed:</Text>
            <Switch value={ this.getTransplant(this.state.crop.transplant) } />
          </View>
          <Separator />
          <View style={ style.rowContainer }>
            <Text style={ style.name }>Direct seed:</Text>
            <Switch value={ this.getSeed(this.state.crop.direct_seed) } />
          </View>
          <Separator />
          <View style={ style.rowContainer }>
            <Text style={ style.date }>Start Date:</Text>
            <Text style={ style.date }>{ this.formatDate(this.state.crop.plant_start_date) }</Text>
          </View>
          <Separator />
          <View style={ style.rowContainer }>
            <Text style={ style.date }>End Date:</Text>
            <Text style={ style.date }>{ this.formatDate(this.state.crop.plant_end_date) }</Text>
          </View>
          <Separator />
          { this.getNotes() }
        </View>
         <ActivityIndicatorIOS
          animating={ this.state.isLoading }
          color='#111'
          style={ style.spinner }
          size='large'>
        </ActivityIndicatorIOS>
      </ScrollView>
    )
  }
}


module.exports = CropDetail;