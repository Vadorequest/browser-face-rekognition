# Face Rekognition API


## Getting started

`cd server && yarn install`
`cd server && touch api-credentials.json` => fill it in with `API_KEY` and `API_SECRET` from https://console.faceplusplus.com/app/apikey/list

## Usage

Go to http://localhost:5000/?image_url=https://previews.123rf.com/images/butsaya/butsaya1507/butsaya150700092/42263264-jeune-femme-en-asie-avec-le-visage-souriant-isol%C3%A9-sur-fond-blanc-.jpg

See JSON response displayed in browser:
```json
{
  "image_id": "w22AVZ7Bi+YV3d9HbWwyVg==",
  "request_id": "1550279355,a2d2fd82-7ce0-4ec8-bbe7-ab65a31d1193",
  "time_used": 453,
  "faces": [
    {
      "attributes": {
        "smile": {
          "threshold": 50,
          "value": 100
        }
      },
      "face_rectangle": {
        "width": 289,
        "top": 256,
        "left": 474,
        "height": 289
      },
      "face_token": "8fbf33806eb3144472b8ea938bd94de0"
    }
  ]
}
```


## API Face++

https://console.faceplusplus.com/documents/5679127

Get your credentials there: https://console.faceplusplus.com/app/apikey/list
