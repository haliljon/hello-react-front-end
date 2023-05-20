import axios from 'axios';

export const getRandomGreeting = () => {
    return (dispatch) => {
        axios.get('http://127.0.0.1:3000/')
            .then((response) => {
                dispatch({
                    type: 'SET_GREETING',
                    payload: response.data.greeting,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
