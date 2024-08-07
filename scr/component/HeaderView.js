import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { Colors } from '../common/styles/color';

const HeaderView = () => {
  const StatusBarCustom = ({backgroundColor, dark, ...props}) => {
    const ins = useSafeAreaInsets();
    const styles = createStyle(backgroundColor, ins);
    return (
      <>
        <View style={styles.container}>
          <StatusBar
            animated
            barStyle={dark ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundColor}
            {...props}
          />
        </View>
      </>
    );
  };

  const createStyle = (backgroundColor, ins) =>
    StyleSheet.create({
      container: {backgroundColor: backgroundColor, paddingTop: ins.top},
    });

  return (
    <>
      <StatusBarCustom backgroundColor={Colors.prime} dark />
    </>
  );
};

export default HeaderView;
