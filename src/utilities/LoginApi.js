export function LoginApi (user){
   let BaseUrl = 'https://academy-training.appssquare.com/api/login';

   return new Promise((resolve , reject) => {
    fetch(BaseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(user)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      resolve(responseJson);
    })
    .catch((error) => {
      reject(error);
    });
   });
}