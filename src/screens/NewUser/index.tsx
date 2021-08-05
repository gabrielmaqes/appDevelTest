import React, {useState} from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';

import {Container, ButtonBox, Content} from './styles';

import {Input, Button} from '@src/components';
import {TextComponent} from '@src/components/TextComponent';
import {theme} from '@src/styles';
import {useUserController} from '@src/controllers/UsersController';
import Header from '@src/components/Header';
import InsertPicture from '@src/components/InsertPicture';
import {useNavigation} from '@react-navigation/native';

const NewUser: React.FC = () => {
  const {getUser} = useUserController();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [filePath, setFilePath] = useState<ImagePickerResponse>({});
  const navigation = useNavigation();

  const onChange = (event: any, value: any) => {
    value && setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerOpen(false);
    }
  };

  const chooseFile = () => {
    let options: any = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        console.log('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        console.log('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        console.log(response.errorMessage);
        return;
      }
      response.assets &&
        getUser.formik.setFieldValue('photo_uri', response.assets[0].uri);
      setFilePath(response);
    });
  };

  return (
    <Container>
      <Header title={'Novo Usuário'}></Header>
      <Content>
        <ActivityIndicator animating={getUser.loading} />
        <InsertPicture
          photo_uri={`${filePath.assets && filePath.assets[0].uri}`}
          onInsertPic={() => chooseFile()}
        />
        <Input
          value={getUser.formik.values.name}
          onChange={getUser.formik.handleChange('name')}
          iconName="user"
          iconSize={16}
          placeholder="Nome"
        />
        <Input
          value={moment(date).format('DD/MM/yyyy')}
          iconName="calendar"
          iconSize={16}
          placeholder="Data de nascimento"
          onFocus={() => setIsPickerOpen(true)}
        />
        {isPickerOpen && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={'spinner'}
            timeZoneOffsetInMinutes={1}
            onChange={onChange}
            style={styles.datePicker}
          />
        )}
      </Content>

      <ButtonBox>
        <Button
          margin={`${theme.metrics.doubleSpacing}px 0`}
          width={'100%'}
          padding={theme.metrics.baseSpacing + 'px'}
          onPress={() => {
            getUser.formik.setFieldValue('birthDate', date);
            getUser.formik.handleSubmit();
          }}>
          {getUser.loading ? (
            <ActivityIndicator color={theme.colors.white} size={16} />
          ) : (
            'Registrar'
          )}
        </Button>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <TextComponent
            color={theme.colors.primaryPurple}
            fontSize={theme.fontSize.base}
            fontFamily="Nunito-Bold">
            Cancelar
          </TextComponent>
        </TouchableOpacity>
      </ButtonBox>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
  },
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  containerImage: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});

export default NewUser;
