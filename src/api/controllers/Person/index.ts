import { IPerson } from '../../../models/interfaces';
import api from '../../index';

export const SavePerson = async (
    params : IPerson
  ) => {
    return await api.post(
      `/Person`,
      params,
    );
  };

  export const GetPersons = async () => {
    return await api.get(
      `/Person/getActive`
    );
  };

  export const GetPerson = async (id: string) => {
    return await api.get(
      `/Person/${id}`
    );
  };

  export const PutPerson = async (params : IPerson, id: string) => {
    return await api.put(
      `/Person/${id}`, 
      params
    );
  };

  export const DeletePerson = async (id: string) => {
    return await api.delete(
      `/Person/${id}`
    );
  };