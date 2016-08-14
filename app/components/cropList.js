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
  ActivityIndicatorIOS,
  ScrollView
} = React;


var style = StyleSheet.create({
  container: {
    flex: 1
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
  },
  spinner: {
    alignSelf: 'center',
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    marginTop: 50
  }
});


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      crops: [],
      apiUrl: this.props.url
    }
  }

  componentDidMount() {
    api.getSeasonCrops(this.state.apiUrl).then((response) => {
      this.setState({
        isLoading: false,
        crops: response
      });
    });
  }

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
          id: id,
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
    var crops = this.state.crops;
    var list;
    if (crops.length === 0 && !this.state.isLoading) {
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
                <View>
                  <Text style={ style.name }>{ crops[index].name }</Text>
                  <Text style={ style.tierStyle }>Success Rate: { this.getTier(crops[index].tier) }</Text>
                </View>
              </TouchableHighlight>
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
         <ActivityIndicatorIOS
          animating={ this.state.isLoading }
          color='#111'
          style={ style.spinner }
          size='large'>
        </ActivityIndicatorIOS>
      </ScrollView>
    )
  }
};


/**
* @desc Throw error if crop data doesn't come
* back as an array, or headerTitle isn't
* a string.
*/
Dashboard.propTypes = {
  url: React.PropTypes.string.isRequired,
  headerTitle: React.PropTypes.string.isRequired
}

module.exports = Dashboard;