import api from '../services/api';
import {useEffect, useState} from 'react';
import {UserModel} from '@src/models/UserModel';

export const useUserController = () => {
  const [usersList, setUsersList] = useState<UserModel[]>([]);
  const [loading, setLoading] = useState(false);

  const getUsersList = async () => {
    setLoading(true);
    try {
      const response = await api.get('/users');
      setLoading(false);
      setUsersList(response.data);
    } catch (err) {
      // TODO
      // adicionar tratamento da exceção
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return {
    getUser: {
      usersList,
      loading,
    },
    handleUser: {
      getUsersList,
    },
  };
};
