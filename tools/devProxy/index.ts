import http from 'http';
import httpProxy from 'http-proxy';

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

const allowedOrigin = 'mld.owo.org.pl';

// Create a regular HTTP server to handle incoming requests
const server = http.createServer((req, res) => {
  
  if (req.headers.host === allowedOrigin) {
    console.log(`Intercepted request: ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);

    // Forward the request to the target (example.com)
    proxy.web(req, res, { target: req.url }, (err) => {
      if (err) {
        console.error('Proxy error:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Something went wrong with the proxy');
      }
    });
  } else {
    // Handle other domains or direct requests here
    console.log(req.headers.host)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// Listen on a port (e.g., 8080)
server.listen(9000, () => {
  console.log('Proxy server listening on port 9000...');
});

