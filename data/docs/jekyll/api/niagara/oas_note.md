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

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|note:create|Allows creating a note|
|note:update|Allows editing a note|
|note:delete|Allows deleting a note|
|note:read|Allows access to a note|
|note:all|Allows reading all notes|

<h1 id="notes-note">Note</h1>

## Operations

### GET /notes/{note_id}

<a id="opIdfetchNoteById"></a>

Fetches a note

<aside class="warning">
Permissions required:<br>
<ul><li>note:read</li></ul>
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

<aside class="warning">
Permissions required:<br>
<ul><li>note:delete</li></ul>
</aside>

<h3 id="deletenote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|note_id|path|string|true|Id of the note|

### GET /units/{unit_id}/notes

<a id="opIdfetchNoteForUnit"></a>

Fetches notes for a unit

<aside class="warning">
Permissions required:<br>
<ul><li>unit:read</li><li>note:read</li></ul>
</aside>

<h3 id="fetchnoteforunit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|unit_id|path|string|true|Id for the unit|

> Example responses

> 200 Response

```json
{
  "total_count": 21,
  "limit": 42,
  "offset": "next-offset",
  "_embedded": {
    "nter:notes": [
      {
        "note_id": "note",
        "label": "A Note",
        "created": "2019-10-09T19:30:35.639Z",
        "updated": "2019-10-09T20:30:35.639Z",
        "text": "Lorem ipsum dolor sit amet",
        "edited": null,
        "thread_id": "parent_note",
        "_links": {
          "nter:note-created-by": {
            "href": "https://api.nterprise.com/users/3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
          },
          "self": {
            "href": "https://api.nterprise.com/notes/note"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/notes?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/notes?limit=42"
    }
  }
}
```

### POST /units/{unit_id}/notes

<a id="opIdcreateNoteForUnit"></a>

Create a note for a unit

<aside class="warning">
Permissions required:<br>
<ul><li>unit:read</li><li>note:create</li></ul>
</aside>

> Body parameter

<h3 id="createnoteforunit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|unit_id|path|string|true|Id for the unit|
|label|body|string|true|Label for the entity|
|text|body|string|true|Label for the entity|
|thread_id|body|string|false|The id of the note which started a thread|
|issue|body|boolean|false|Marks the note as an issue|
|notify|body|[object]|false|List of contacts to notify about this note|
|&nbsp;&nbsp; contact_id|body|string|false|Identifier for the contact|

> Example responses

> 201 Response

```json
{
  "note_id": "note",
  "label": "A Note",
  "created": "2019-10-09T19:30:35.639Z",
  "updated": "2019-10-09T20:30:35.639Z",
  "text": "Lorem ipsum dolor sit amet",
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

### GET /work-orders/{work_order_id}/notes

<a id="opIdfetchNotesForWorkOrder"></a>

Fetches notes for a work order

<aside class="warning">
Permissions required:<br>
<ul><li>workOrder:read</li><li>note:read</li></ul>
</aside>

<h3 id="fetchnotesforworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|

> Example responses

> 200 Response

```json
{
  "total_count": 21,
  "limit": 42,
  "offset": "next-offset",
  "_embedded": {
    "nter:notes": [
      {
        "note_id": "note",
        "label": "A Note",
        "created": "2019-10-09T19:30:35.639Z",
        "updated": "2019-10-09T20:30:35.639Z",
        "text": "Lorem ipsum dolor sit amet",
        "edited": null,
        "thread_id": "parent_note",
        "_links": {
          "nter:note-created-by": {
            "href": "https://api.nterprise.com/users/3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
          },
          "self": {
            "href": "https://api.nterprise.com/notes/note"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/notes?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/notes?limit=42"
    }
  }
}
```

### POST /work-orders/{work_order_id}/notes

<a id="opIdcreateNoteForWorkOrder"></a>

Create a note for a workOrder

<aside class="warning">
Permissions required:<br>
<ul><li>workOrder:read</li><li>note:create</li></ul>
</aside>

> Body parameter

<h3 id="createnoteforworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
|label|body|string|true|Label for the entity|
|text|body|string|true|Label for the entity|
|thread_id|body|string|false|The id of the note which started a thread|
|issue|body|boolean|false|Marks the note as an issue|
|notify|body|[object]|false|List of contacts to notify about this note|
|&nbsp;&nbsp; contact_id|body|string|false|Identifier for the contact|

> Example responses

> 201 Response

```json
{
  "note_id": "note",
  "label": "A Note",
  "created": "2019-10-09T19:30:35.639Z",
  "updated": "2019-10-09T20:30:35.639Z",
  "text": "Lorem ipsum dolor sit amet",
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
|issue|boolean|false|none|Marks the note as an issue|
|edited|null¦null|false|none|Date of the last edit for the note|

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
  issue:
    type: boolean
    description: Marks the note as an issue
  edited:
    type: "null"
    nullable: true
    description: Date of the last edit for the note

```

