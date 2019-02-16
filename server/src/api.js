const fetch = require('node-fetch');

export const handler = async (event, context) => {
  console.log(event)
  const imageUrl = event.queryStringParameters.image_url;
  const imageBase64 = event.queryStringParameters.image_base64;
  const imageFile = event.queryStringParameters.image_file;
  const credentials = require('../api-credentials.json');
  var params = {
    api_key: credentials.API_KEY,
    api_secret: credentials.API_SECRET,
    return_attributes: 'smiling',
  };

  if (imageUrl) {
    params.image_url = imageUrl;
  } else if (imageBase64) {
    params.image_base64 = imageBase64;
  } else if (imageFile) {
    params.image_file = imageFile;
  }

  console.log(JSON.stringify(params, null, 2), 'params')

  const searchParams = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');

  return await fetch('https://api-us.faceplusplus.com/facepp/v3/detect', {
    method: 'POST',
    mode: 'no-cors',
    // cache: 'no-cache',
    body: searchParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(JSON.stringify(json, null, 2));
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(json),
      };
      // document.querySelector('#api-response').innerHTML = json;
    })
    .catch(function (error) {
      console.log(error);
    });
};
