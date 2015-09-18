var React = require('react-native');
var api = require('../utils/api');
var Separator = require('../helpers/separator');
var Header = require('./header');
var CropDetail = require('./cropDetail');


var {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} = React;


var style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    padding: 10,
    justifyContent: 'center'
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  singleRow: {
    height: 100,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noData: {
    fontSize: 20,
    color: '#484848',
  },
  name: {
    color: '#484848',
    fontSize: 18,
    paddingBottom: 5
  },
  tierStyle: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});


class Dashboard extends React.Component {
  makeBackground(btn) {
    var styleObj = {
      height: 250,
      padding: 10,
      justifyContent: 'center'
    };
    if(this.props.season === 1) {
      styleObj.backgroundColor = '#FF884D';
    } else if(this.props.season === 2) {
      styleObj.backgroundColor = '#41C3AC';
    } else if(this.props.season === 3) {
      styleObj.backgroundColor = '#FF6B57';
    } else if(this.props.season === 4) {
      styleObj.backgroundColor = '#81B9C3';
    }
    return styleObj;
  }
  cropDetail(id) {
    api.getCrop(id).then((response) => {
      this.props.navigator.push({
        title: '',
        component: CropDetail,
        passProps: {
          crop: response,
          headerTitle: 'Detail'
        }
      });
    });
  }
  getTier(val) {
    if(val === '1') {
      return 'High';
    } else if(val === '2') {
      return 'Medium';
    } else {
      return 'Low';
    }
  }
  render() {
    var crops = this.props.crops;
    var list;
    if (crops.length === 0) {
      crops.push(1);
      list = crops.map((item, index) => {
        return (
          <View key={ index }>
            <View style={ style.singleRow }>
              <Text style={ style.noData }>No data to display here yet</Text>
            </View>
          </View>
        )
      });
    } else {
      list = crops.map((item, index) => {
        return (
          <View key={ index }>
            <View style={ style.rowContainer }>
              <TouchableHighlight
                onPress={ this.cropDetail.bind(this, crops[index].pk) }
                underlayColor='transparent'>
                <Text style={ style.name }>{ crops[index].name }</Text>
              </TouchableHighlight>
              <Text style={ style.tierStyle }>Success Rate: { this.getTier(crops[index].tier) }</Text>
            </View>
            <Separator />
          </View>
        )
      });
    }
    return (
      <ScrollView style={ style.container }>
        <Header style={ this.makeBackground() } content={ this.props.headerTitle } />
        {{ list }}
      </ScrollView>
    )
  }
};


/**
* Throw error if crop data doesn't come
* back as an array, or headerTitle isn't
* a string.
*/
Dashboard.propTypes = {
  crops: React.PropTypes.array.isRequired,
  headerTitle: React.PropTypes.string.isRequired
}

module.exports = Dashboard;