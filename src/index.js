import http from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server'

const Home = () => (
  <div>Welcome</div>
)

const port = process.env.PORT || 8080;

const requestHandler = (request, response) => {
  console.log(request.url)

  const html = ReactDOMServer.renderToString(<Home />)
  response.end(html);
}

const callback = (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
}

const server = http.createServer(requestHandler)

server.listen(port, callback);
