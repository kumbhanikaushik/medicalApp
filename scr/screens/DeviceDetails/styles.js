import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../common/styles/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContain:{
    backgroundColor: '#8e4ab8',
    height: horizontalScale(80),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute'
  },
  mainContain:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  infoText: {
    fontSize: horizontalScale(25),
    margin: horizontalScale(5),
  },
  boldText: {
    fontSize: horizontalScale(25),
    margin: horizontalScale(5),
    fontWeight: '700',
  },
});