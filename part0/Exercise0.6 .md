## Exercise 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram
participant User
participant Browser
participant Server

User->>Browser: Submits a new note

Note left of Browser: The browser store user input and current date in an object and push it to notes variable ,then calls the callback function which render(display) notes.

Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate Server
Server-->>Browser: {"message":"note created"}
deactivate Server

```
