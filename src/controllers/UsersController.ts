import {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import FormData from 'form-data';

import api from '../services/api';
import {UserModel} from '@src/models/UserModel';
import moment from 'moment';

export const useUserController = () => {
  const [usersList, setUsersList] = useState<UserModel[]>([]);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('* Campo obrigatório'),
  });

  const getUsersList = async () => {
    setLoading(true);
    try {
      const response = await api.get('/users');
      setLoading(false);
      setUsersList(response.data);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const saveUser = async (values: UserModel) => {
    setLoading(true);
    const newUser = {
      name: values.name,
      birthDate: moment(values.birthDate).format('yyyy-MM-DD'),
    };

    const formData = new FormData();
    formData.append('name', newUser.name);
    formData.append('birthDate', JSON.stringify(newUser.birthDate));
    formData.append('photo_uri', {
      uri: values.photo_uri, //Your Image File Path
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      await api.post('/user', formData, {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data;`,
        },
      });
      getUsersList();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    getUsersList();
  }, []);

  const formik = useFormik<UserModel>({
    initialValues: {
      name: '',
      birthDate: new Date(),
      photo_uri: '',
    },
    onSubmit: values => saveUser(values),
    validationSchema,
  });

  return {
    getUser: {
      usersList,
      loading,
      formik,
    },
    handleUser: {
      getUsersList,
    },
  };
};
