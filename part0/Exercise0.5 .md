## Exercise 0.5: Single page app diagram

```mermaid
sequenceDiagram
     participant Browser
     participant Server

     Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
     activate Server
     Server->>Browser: HTML document
     deactivate Server

     Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
     activate Server
     Server->>Browser: The css file
     deactivate Server

     Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
     activate Server
     Server->>Browser: The Javascript file
     deactivate Server

     Note right of browser: The browser execute the JavaScript code and fetches the JSON from the server

     Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
     activate Server
     Server->>Browser: the json object
     deactivate Server

     Note right of browser: The browser parse the json file and stores it in notes array then the callback function is executed ,which then displays the notes
```
