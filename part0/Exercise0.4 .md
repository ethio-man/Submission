## Exercise 0.4: New note diagram

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

   user->>browser: Submit a new note

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: status code 302 ,location: /exampleapp/notes
    deactivate server

Note right of browser: The server response is URL redirect so the page reloads the Note page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content": "hi hi", "date": "2026-02-16T12:49:03.960Z"}, ... ]
    deactivate server

    Note right of browser: The callback function is executed by the browser, which then displays the notes.

```
