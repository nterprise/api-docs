---
layout: page
parent: Niagara API
nav_order: 10
redirect_from:
  - /rel/notes
  - /rel/note
title: Notes
---

<h1 id="notes">Notes</h1>

* Do not remove this line (it will not be displayed)
{:toc}

API for the nterprise application

<h1 id="notes-note">Note</h1>

## Operations

### GET /notes/{note_id} - *Fetch Note*

<a id="opIdfetchNoteById"></a>

*Fetch Note*

Fetches a note

<h3 id="fetchnotebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|note_id|path|string|true|Id of the note|

<h3 id="fetchnotebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A note response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

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
    "name": "Chuck Reeves",
    "email": "chuck.reeves@zones.com",
    "profile": "https://bit.ly/18gECvy",
    "picture": "https://bit.ly/18gECvy"
  },
  "_embedded": {
    "nter:note-created-by": [
      {
        "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
        "created": "2019-08-19T00:01:02.639Z",
        "updated": "2019-08-19T00:01:02.639Z",
        "name": "Chuck Reeves",
        "email": "chuck.reeves@zones.com",
        "profile": "https://bit.ly/18gECvy",
        "picture": "https://bit.ly/18gECvy",
        "_links": {
          "self": {
            "href": "https://api.example.com/users/3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
          }
        }
      }
    ]
  },
  "_links": {
    "nter:note-created-by": {
      "href": "https://api.example.com/users/3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
    },
    "self": {
      "href": "https://api.example.com/notes/note"
    }
  }
}
```

> 401 Response

```json
{
  "title": "Unauthorized",
  "type": "https://docs.nterprise.com/api/problem/Unauthorized",
  "status": 401,
  "detail": "Invalid authorization token"
}
```

> 403 Response

```json
{
  "title": "Forbidden",
  "type": "https://docs.nterprise.com/api/problem/Forbidden",
  "status": 403,
  "detail": "You are forbidden from accessing this resource"
}
```

> 404 Response

```json
{
  "title": "Not Found",
  "type": "https://docs.nterprise.com/api/problem/NotFound",
  "status": 404,
  "detail": "A Resource with the id \"foo\" was not found"
}
```

<h3 id="fetchnotebyid-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

### DELETE /notes/{note_id} - *Delete note*

<a id="opIddeleteNote"></a>

*Delete note*

Deletes a note

<h3 id="deletenote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|note_id|path|string|true|Id of the note|

<h3 id="deletenote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Note deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

> Example responses

> 401 Response

```json
{
  "title": "Unauthorized",
  "type": "https://docs.nterprise.com/api/problem/Unauthorized",
  "status": 401,
  "detail": "Invalid authorization token"
}
```

> 403 Response

```json
{
  "title": "Forbidden",
  "type": "https://docs.nterprise.com/api/problem/Forbidden",
  "status": 403,
  "detail": "You are forbidden from accessing this resource"
}
```

> 404 Response

```json
{
  "title": "Not Found",
  "type": "https://docs.nterprise.com/api/problem/NotFound",
  "status": 404,
  "detail": "A Resource with the id \"foo\" was not found"
}
```

> 423 Response

```json
{
  "title": "Locked",
  "type": "https://docs.nterprise.com/api/problem/Locked",
  "status": 423,
  "detail": "This resource is currently locked from editing"
}
```

<h3 id="deletenote-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **423**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

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
|&nbsp;&nbsp;&nbsp;&nbsp; user_id|string|true|none|The identifier for the user|
|&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp; email|string(email)|true|none|Email address|
|&nbsp;&nbsp;&nbsp;&nbsp; name|string|true|none|Human readable name|
|&nbsp;&nbsp;&nbsp;&nbsp; picture|string¦null|false|none|Image for the user|
|&nbsp;&nbsp;&nbsp;&nbsp; profile|string¦null|false|none|Link to the users profile|

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

```

