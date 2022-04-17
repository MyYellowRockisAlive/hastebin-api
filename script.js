// axios is the module we're using to send the request.
const axios = require('axios');

// here we're sending a post request, this essentially looks like: `method: "POST", URL: "URL"`
// which then we are either sending data, or including it: `request.send(...);` or `...URL: "URL", data: {data}`
axios.post('https://hastebin.com/documents','Hastebin Example of an API Request.').then(function (response) {
    console.log("https://hastebin.com/"+response.data.key);
})
  .catch(function (error) {
    console.log(error);
});
