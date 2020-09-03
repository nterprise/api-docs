---
layout: page
parent: Niagara API
nav_order: 9
redirect_from:
  - /rel/notes
  - /rel/note
title: Notes
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="notes">Notes</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Notes are information units for an entity

<h1 id="notes-note">Note</h1>

## Operations

### GET /notes/{note_id}

<a id="opIdfetchNoteById"></a>

Fetches a note

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="fetchnotebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|note_id|path|string|true|Id of the note|

> Example responses

> 200 Response

```json
{
  "note_id": "note",
  "label": "A Note",
  "created": "2019-10-09T19:30:35.639Z",
  "updated": "2019-10-09T20:30:35.639Z",
  "text": "Lorem ipsum dolor sit amet",
  "created_by": {
    "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
    "created": "2019-08-19T00:01:02.639Z",
    "updated": "2019-08-19T00:01:02.639Z",
    "name": "Daniel Jackson",
    "email": "daniel.jackson@niagara.com",
    "profile": "https://bit.ly/18gECvy",
    "picture": "https://bit.ly/18gECvy"
  },
  "_embedded": {
    "nter:note-created-by": [
      {
        "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
        "created": "2019-08-19T00:01:02.639Z",
        "updated": "2019-08-19T00:01:02.639Z",
        "name": "Daniel Jackson",
        "email": "daniel.jackson@niagara.com",
        "profile": "https://bit.ly/18gECvy",
        "picture": "https://bit.ly/18gECvy",
        "_links": {
          "self": {
            "href": "https://api.nterprise.com/users/3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
          }
        }
      }
    ]
  },
  "_links": {
    "nter:note-created-by": {
      "href": "https://api.nterprise.com/users/3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
    },
    "self": {
      "href": "https://api.nterprise.com/notes/note"
    }
  }
}
```

### DELETE /notes/{note_id}

<a id="opIddeleteNote"></a>

Deletes a note

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="deletenote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|note_id|path|string|true|Id of the note|

# Embedded Schemas

## Note
<!-- backwards compatibility -->
<a id="schemanote"></a>
<a id="schema_Note"></a>
<a id="tocSnote"></a>
<a id="tocsnote"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note_id|string|false|read-only|The identifier for the note|
|label|string|false|none|Label for the entity|
|created|string(date-time)|false|read-only|Date the entity was created|
|updated|string(date-time)|false|read-only|Last date the entity was updated|
|text|string|false|none|Text for the note|
|created_by|object|false|none|none|
|&nbsp;&nbsp; user_id|string|true|none|The identifier for the user|
|&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp; email|string(email)|true|none|Email address|
|&nbsp;&nbsp; name|string|true|none|Human readable name|
|&nbsp;&nbsp; picture|string¦null|false|none|Image for the user|
|&nbsp;&nbsp; profile|string¦null|false|none|Link to the users profile|
|&nbsp;&nbsp; user_attributes|[object]|false|none|Array of user attributes|
|&nbsp;&nbsp;&nbsp;&nbsp; key|string|true|none|Attribute Key|
|&nbsp;&nbsp;&nbsp;&nbsp; value|string|true|none|Attribute value|
|&nbsp;&nbsp; notification|object|false|none|Count of notifications for the user|
|&nbsp;&nbsp;&nbsp;&nbsp; read|number|false|none|Number of read messages|
|&nbsp;&nbsp;&nbsp;&nbsp; unread|number|false|none|Number of un-read messages|
|&nbsp;&nbsp;&nbsp;&nbsp; archived|number|false|none|Number of archived messages|

#### Specification

```yaml
type: object
properties:
  note_id:
    description: The identifier for the note
    type: string
    readOnly: true
    pattern: ^[0-9a-zA-Z-_]+$
  label:
    type: string
    description: Label for the entity
  created:
    description: Date the entity was created
    type: string
    format: date-time
    readOnly: true
  updated:
    description: Last date the entity was updated
    type: string
    format: date-time
    readOnly: true
  text:
    type: string
    description: Text for the note
  created_by:
    type: object
    required:
      - updated
      - created
      - email
      - name
      - user_id
    properties:
      user_id:
        type: string
        description: The identifier for the user
        pattern: ^[0-9a-zA-Z-_]+$
      created:
        description: Date the entity was created
        type: string
        format: date-time
        readOnly: true
      updated:
        description: Last date the entity was updated
        type: string
        format: date-time
        readOnly: true
      email:
        type: string
        format: email
        description: Email address
      name:
        type: string
        description: Human readable name
      picture:
        type: string
        nullable: true
        description: Image for the user
      profile:
        type: string
        nullable: true
        description: Link to the users profile
      user_attributes:
        type: array
        description: Array of user attributes
        items:
          type: object
          description: User Attribute
          maxItems: 15
          required:
            - key
            - value
          properties:
            key:
              description: Attribute Key
              type: string
            value:
              description: Attribute value
              type: string
      notification:
        type: object
        description: Count of notifications for the user
        properties:
          read:
            type: number
            description: Number of read messages
          unread:
            type: number
            description: Number of un-read messages
          archived:
            type: number
            description: Number of archived messages

```

