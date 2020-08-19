import * as actions from './actionType';

export const getApi = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'url stay here',
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
