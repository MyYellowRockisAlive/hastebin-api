# hastebin-api
overly simple py script converted to js

this is just supposed to be a demo on post requests (pushing data to servers)
it uses axios, but the idea is pretty much the same.

```js
// axios version - node-fetch

axios.post("...",data)

//If you want to do something with the response
.then(response => {
...
})
.catch(error => console.log(error));
```

```js
// XML (web) Request Version or it might be deprecated. ¯\_(ツ)_/¯

var request = XMLHttpRequest();
request.addEventListener(...);
request.open("POST", "...");
request.send(...);
```
