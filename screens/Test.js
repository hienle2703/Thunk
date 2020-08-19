import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as actions from '../redux/actions/index';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getApi();
  }
  render() {
    console.log(this.props.music);
    const data = this.props.music.data;
    return data === null ? (
      <View>
        <Text>Loading</Text>
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons
              name="arrow-back-outline"
              style={{marginLeft: 20}}
              size={20}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, marginLeft: 10}}>Trucker Radio</Text>
        </View>
        <View style={styles.space}></View>
        <View style={styles.body}>
          <View style={styles.leftBox}></View>

          <Image style={styles.cover} source={{uri: data.cover}} />

          <View style={styles.leftBox}></View>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{data.title}</Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontSize: 15}}>{data.artist}</Text>
        </View>
        <View style={styles.likeContainer}>
          <View style={{flexDirection: 'row'}}>
            {data.is_liked === false ? (
              <Ionicons name="heart-outline" size={20} />
            ) : (
              <Ionicons name="heart" size={20} />
            )}

            <Text style={{marginLeft: 5}}>{data.likes}</Text>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <Ionicons name="timer-outline" size={20} />
            <Text style={{marginLeft: 5}}>{data.duration} seconds</Text>
          </View>
        </View>
        <View style={styles.durationCointainer}>
          <Text style={{marginLeft: 20}}>00:00</Text>
          <Text style={{marginRight: 20}}>63:00</Text>
        </View>
        <View style={styles.duration}></View>

        <View style={styles.space}></View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Ionicons name="play-back-outline" size={50} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="pause-circle-outline" size={50} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="play-forward-outline" size={50} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    music: state.actionReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getApi: () => dispatch(actions.getApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.07,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
  },
  space: {
    flex: 0.08,
  },
  body: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftBox: {
    height: 230,
    width: 20,
    backgroundColor: 'gray',
    marginTop: 60,
  },
  cover: {
    height: 280,
    width: 280,
    borderRadius: 20,
    marginTop: 30,
  },
  duration: {
    height: 3,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'gray',
  },
  durationCointainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: '60%',
    alignSelf: 'center',
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeContainer: {
    flex: 0.15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
