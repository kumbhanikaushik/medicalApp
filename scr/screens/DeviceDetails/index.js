import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {horizontalScale} from '../../common/styles/styles';
import {Colors} from '../../common/styles/color';
import { useIsFocused } from '@react-navigation/native';
import HeaderView from '../../component/HeaderView';
import { styles } from './styles';

const DeviceDetails = () => {
  const isFocused = useIsFocused();
  const [version, setVersion] = useState('');
  const [buildNumber, setBuildNumber] = useState('');

  useEffect(() => {
    setVersion(DeviceInfo.getVersion());
    setBuildNumber(DeviceInfo.getBuildNumber());
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <HeaderView />
      <View
        style={styles.headerContain}>
        <Text style={{fontSize: horizontalScale(20), color: Colors.white}}>
          Device Details
        </Text>
      </View>
      <View style={styles.mainContain}>
        <Text style={styles.infoText}>
          App Version : <Text style={styles.boldText}>{version}</Text>
        </Text>
        <Text style={styles.infoText}>
          Build Number : <Text style={styles.boldText}>{buildNumber}</Text>
        </Text>
      </View>
    </View>
  );
};


export default DeviceDetails;
