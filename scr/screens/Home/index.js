import {Image, Modal, Pressable, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {horizontalScale} from '../../common/styles/styles';
import {Colors} from '../../common/styles/color';
import HeaderView from '../../component/HeaderView';
import {Images} from '../../common/styles/image';

const Home = () => {
  const isFocused = useIsFocused();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {}, [isFocused]);
  return (
    <View style={styles.mainBox}>
      <HeaderView />
      <View style={styles.headerContainer}>
        <View style={styles.headerMain}>
          <Text style={styles.headerFont}>Dashboard</Text>
        </View>
        <View style={styles.headerIconMain}>
          <Image
            source={Images.notification}
            style={[styles.headerIcon, {marginHorizontal: horizontalScale(10)}]}
          />
          <Pressable onPress={() => setIsVisible(true)}>
            <Image source={Images.more} style={styles.headerIcon} />
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View style={{flex: 1, padding: 20}}>
          <Text style={styles.bigfont}>Upcoming Consultations</Text>
          <View style={styles.boxConatiner}>
            <View style={{height: '45%'}}>
              <Text style={[styles.boxFont, {marginTop: horizontalScale(5)}]}>
                Dr. Marta Juarezx
              </Text>
              <Text style={styles.boxFont}>Dr. Hans Gerhoff</Text>
            </View>
            <View style={styles.boxIconConatin}>
              <Image source={Images.doctore} style={styles.boxIcon} />
              <Text style={styles.boxBigFont}>2</Text>
            </View>
          </View>

          <Text style={styles.bigfont}>Medical Files</Text>
          <View style={styles.bigBoxCon}>
            <View
              style={{
                height: '100%',
                width: '65%',
              }}>
              <Text
                style={[
                  styles.bigBoxSmallText,
                  {
                    marginTop: horizontalScale(10),
                  },
                ]}>
                Blood tests.pdf
              </Text>
              <Text style={styles.bigBoxSmallText}>Cardilogy results.pdf</Text>
              <Text
                style={styles.bigBoxSmallText}>
                Blood tests 20-02-2020.pdf
              </Text>
              <Text
                style={styles.bigBoxSmallText}>
                MRI results.pdf
              </Text>
            </View>
            <View
              style={styles.bigBoxIconContain}>
              <Image
                source={Images.doctore}
                style={styles.bigBocIcon2}
              />
              <Text
                style={styles.bigBoxBigText2}>
                7
              </Text>
            </View>
          </View>

          <View style={styles.bigBoxConatin}>
            <View style={styles.bigBoxTextContain}>
              <Image
                source={Images.pluse}
                style={styles.icon}
              />
              <Text
                style={styles.iconText}>
                Schedule
              </Text>
            </View>
            <View
              style={styles.bigBoxTextContain}>
              <Image
                source={Images.phonecall}
                style={styles.icon}
              />
              <Text
                style={styles.iconText}>
                Call
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View
          style={styles.modelConatin}>
          <View
            style={styles.modelMain}>
            <View
              style={styles.modelMainConatin}>
              <View
                style={styles.modelView}>
                <Text
                  style={styles.modelFont}>
                  Settings
                </Text>
                <Pressable onPress={() => setIsVisible(false)}>
                  <Image
                    source={Images.setting}
                    style={styles.modelIcon}
                  />
                </Pressable>
              </View>
              <View
                style={styles.modelViewContain}>
                <Text
                  style={styles.modelFont}>
                  Logout
                </Text>
                <Pressable onPress={() => setIsVisible(false)}>
                  <Image
                    source={Images.logout}
                    style={styles.modelIcon}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
