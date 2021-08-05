import {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import FormData from 'form-data';
import moment from 'moment';
import * as Yup from 'yup';

import api from '@src/services/api';
import {UserModel} from '@src/models/UserModel';

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
      birthDate: moment.utc(values.birthDate).format('yyyy-MM-DD'),
    };

    const formData = new FormData();
    formData.append('name', newUser.name);
    formData.append('birthDate', newUser.birthDate);
    values.photo_uri &&
      formData.append('photo_uri', {
        uri: values.photo_uri, //Your Image File Path
        type: 'image/jpeg',
        name: 'image.jpg',
      });

    try {
      await api.post('/user', formData, {
        headers: {
          accept: 'application/json',
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

  const editUser = async (values: UserModel) => {
    setLoading(true);
    const newUser = {
      name: values.name,
      birthDate: moment.utc(values.birthDate).format('yyyy-MM-DD'),
    };

    const formData = new FormData();
    formData.append('name', newUser.name);
    formData.append('birthDate', newUser.birthDate);
    values.photo_uri &&
      formData.append('photo_uri', {
        uri: values.photo_uri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });

    try {
      setLoading(true);
      const response = await api.put(`/user/${values.id}`, formData, {
        headers: {
          accept: 'application/json',
          'Content-Type': `multipart/form-data;`,
        },
      });
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsersList();
  }, []);

  const formikEdit = useFormik<UserModel>({
    initialValues: {
      id: '',
      name: '',
      birthDate: new Date(),
      photo_uri: '',
    },
    onSubmit: values => editUser(values),
    validationSchema,
  });

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
      formikEdit,
    },
    handleUser: {
      getUsersList,
    },
  };
};
