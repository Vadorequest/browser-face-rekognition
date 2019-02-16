export const handler = async (event, context) => {
  const imageUrl = event.queryStringParameters.image_url;
  const credentials = require('../api-credentials.json');
  var params = {
    api_key: credentials.API_KEY,
    api_secret: credentials.API_SECRET,
    image_url: imageUrl,
    return_attributes: 'smiling',
  };

  const searchParams = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');
  console.log(searchParams);

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
      console.log(response);
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
