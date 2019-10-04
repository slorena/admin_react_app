## Configuration

Make sure to add your own `MONGOURI` from your [mLab](http://mlab.com) database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE"
};
```

Make sure to add your own `API_KEY` from your Google Maps Account in `./client/public/index.html`
```html
 <script
    src="https://maps.googleapis.com/maps/api/js?key=API_KEY&libraries=places"></script>
  ```  
 and in "./client/src/components/map/MapComponent.js"
 ```javascript
  <GoogleMapReact
      apiKey="API_KEY"
      center={userLocation}
      zoom={3}
  >
 ```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

