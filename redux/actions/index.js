import * as actions from './actionType';

export const getApi = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://gist.githubusercontent.com/nvthai/65dc75b2a575498d782748d4d0fabee4/raw/5742d9f7bb71abf4a1cc422c332b75a92e4ffad4/radio_songs.json',
      );
      if (response.status === 200) {
        const data = await response.json();
        dispatch({
          type: actions.GET_DATA,
          data: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
