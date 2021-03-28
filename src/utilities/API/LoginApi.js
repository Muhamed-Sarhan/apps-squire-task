import { instanceApi } from './API';

// export function LoginApi(user) {
//   let BaseUrl = 'https://academy-training.appssquare.com/api/login';

//   return new Promise((resolve, reject) => {
//     fetch(BaseUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         resolve(responseJson);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

//add post
export const LoginApi = async (userData) => {
  try {
    const response = await instanceApi.post('/api/login', userData);
    if (response && response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};
