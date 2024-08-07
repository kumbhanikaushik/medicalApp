import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';
import {format} from 'date-fns';
import {horizontalScale} from '../../common/styles/styles';
import {Colors} from '../../common/styles/color';

const Account = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [imageUri, setImageUri] = useState('');

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    const currentDate = selectedDate || date;
    if (selectedDate) {
      setDate(currentDate);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs camera access to take pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'This app needs access to your storage to select photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const pickImageFromGallery = async () => {
    if (Platform.OS === 'android') {
      const hasStoragePermission = await requestStoragePermission();
      if (!hasStoragePermission) return;
    }
    launchImageLibrary({}, response => {
      if (response.assets) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const takePhoto = async () => {
    if (Platform.OS === 'android') {
      const hasCameraPermission = await requestCameraPermission();
      if (!hasCameraPermission) return;
    }
    launchCamera({}, response => {
      if (response.assets) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#8e4ab8',
          height: horizontalScale(80),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: horizontalScale(20),
            marginLeft: horizontalScale(15),
            fontWeight: '600',
            color: Colors.white,
          }}>
          Account
        </Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{padding: horizontalScale(20)}}>
          <Text style={styles.label}>Name: {name}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={e => setName(e)}
          />

          <Text style={styles.label}>Gender: {gender}</Text>
          <RNPickerSelect
            onValueChange={value => setGender(value)}
            items={[
              {label: 'Male', value: 'male'},
              {label: 'Female', value: 'female'},
            ]}
            style={pickerSelectStyles}
          />

          <Text style={styles.label}>Date of Birth:</Text>
          {date && (
            <Text style={styles.label}>{format(date, 'MMMM dd, yyyy')}</Text>
          )}
          <Button title="Pick a date" onPress={() => setShowDatePicker(true)} />
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          <Text style={styles.label}>Preferred Time:</Text>
          <Text style={styles.label}>
            {format(time, 'MMMM dd, yyyy HH:mm')}
          </Text>
          <Button title="Pick a time" onPress={() => setShowTimePicker(true)} />
          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              display="default"
              onChange={handleTimeChange}
            />
          )}
          <Text style={styles.label}>Profile Picture:</Text>
          <Button title="Pick from Gallery" onPress={pickImageFromGallery} />
          <Button title="Take a Photo" onPress={() => takePhoto()} />
          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.image} />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  label: {
    fontSize: horizontalScale(20),
    marginVertical: horizontalScale(10),
    fontWeight: '500'
  },
  input: {
    height: horizontalScale(40),
    borderColor: 'gray',
    borderWidth: horizontalScale(1),
    marginBottom: horizontalScale(20),
    paddingHorizontal: horizontalScale(10),
  },
  image: {
    width: horizontalScale(100),
    height: horizontalScale(100),
    marginVertical: horizontalScale(10),
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: horizontalScale(40),
    borderColor: 'gray',
    borderWidth: horizontalScale(1),
    marginBottom: horizontalScale(20),
    paddingHorizontal: horizontalScale(10),
  },
  inputAndroid: {
    height: horizontalScale(40),
    borderColor: 'gray',
    borderWidth: horizontalScale(1),
    marginBottom: horizontalScale(20),
    paddingHorizontal: horizontalScale(10),
  },
});

export default Account;
