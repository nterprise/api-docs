---
layout: page
parent: Niagara API
nav_order: 8
title: Notes
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="notes">Notes v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

<h1 id="notes-note">Note</h1>

## fetchNoteById

<a id="opIdfetchNoteById"></a>

`GET /notes/{note_id}`

*Fetches a note by Id*

Fetch Note

<h3 id="fetchnotebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|note_id|path|string|true|Id of the note|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "example": {
            "href": "https://api.nterprise.com/notes/kk9z7zwvQYH5GKx"
          },
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        }
      }
    },
    "note_id": {
      "description": "The identifier for the note",
      "type": "string",
      "readOnly": true,
      "pattern": "^[0-9a-zA-Z-_]+$"
    },
    "label": {
      "type": "string",
      "description": "Label for the entity"
    },
    "slug": {
      "type": "string",
      "description": "Slug for the entity (Auto-generated from the label)",
      "readOnly": true,
      "deprecated": true,
      "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
    },
    "created": {
      "description": "Date the entity was created",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "updated": {
      "description": "Last date the entity was updated",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "text": {
      "type": "string",
      "description": "Text for the note"
    },
    "created_by": {
      "type": "object",
      "description": "User Information",
      "additionalProperties": false,
      "properties": {
        "user_id": {
          "type": "string",
          "description": "The identifier for the user",
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_id": {
          "x-no-api-doc": true,
          "type": "string",
          "description": "Customer identifier",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_type": {
          "x-no-api-doc": true,
          "enum": [
            "UNIT"
          ]
        },
        "label": {
          "type": "string",
          "description": "Label for the entity"
        },
        "slug": {
          "type": "string",
          "description": "Slug for the entity (Auto-generated from the label)",
          "readOnly": true,
          "deprecated": true,
          "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
        },
        "created": {
          "description": "Date the entity was created",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "updated": {
          "description": "Last date the entity was updated",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "email": {
          "type": "string",
          "format": "email",
          "description": "Email address"
        },
        "name": {
          "type": "string",
          "description": "Human readable name"
        },
        "picture": {
          "type": "string",
          "description": "Image for the user"
        },
        "profile": {
          "type": "string",
          "description": "Link to the users profile"
        }
      }
    }
  }
}
```

<h3 id="fetchnotebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A note response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchnotebyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» note_id|string|false|read-only|The identifier for the note|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» text|string|false|none|Text for the note|
|»» created_by|object|false|none|User Information|
|»»» user_id|string|false|none|The identifier for the user|
|»»» entity_id|string|false|read-only|Customer identifier|
|»»» entity_type|string|false|none|none|
|»»» label|string|false|none|Label for the entity|
|»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»» email|string(email)|false|none|Email address|
|»»» name|string|false|none|Human readable name|
|»»» picture|string|false|none|Image for the user|
|»»» profile|string|false|none|Link to the users profile|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|UNIT|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Unauthorized|
|type|https://docs.nterprise.com/api/problem/Unauthorized|
|status|401|
|detail|You are not authorized to access this resource|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Forbidden|
|type|https://docs.nterprise.com/api/problem/Forbidden|
|status|403|
|detail|You are forbidden to access this resource|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Not Found|
|type|https://docs.nterprise.com/api/problem/NotFound|
|status|404|
|detail|Resource not found|

<aside class="success">
This operation does not require authentication
</aside>

## deleteNote

<a id="opIddeleteNote"></a>

`DELETE /notes/{note_id}`

*Deletes a note*

This will soft delete the note

<h3 id="deletenote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|note_id|path|string|true|Id of the note|

> Example responses

> 401 Response

```json
{
  "properties": {
    "title": {
      "enum": [
        "Unauthorized"
      ]
    },
    "type": {
      "enum": [
        "https://docs.nterprise.com/api/problem/Unauthorized"
      ]
    },
    "status": {
      "enum": [
        401
      ]
    },
    "detail": {
      "enum": [
        "You are not authorized to access this resource"
      ]
    }
  }
}
```

<h3 id="deletenote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Note deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="deletenote-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Unauthorized|
|type|https://docs.nterprise.com/api/problem/Unauthorized|
|status|401|
|detail|You are not authorized to access this resource|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Forbidden|
|type|https://docs.nterprise.com/api/problem/Forbidden|
|status|403|
|detail|You are forbidden to access this resource|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Not Found|
|type|https://docs.nterprise.com/api/problem/NotFound|
|status|404|
|detail|Resource not found|

Status Code **423**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Locked|
|type|https://docs.nterprise.com/api/problem/Locked|
|status|423|
|detail|The current resource is locked and cannot be modified|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocSnote">Note</h2>

<a id="schemanote"></a>

```yaml
type: object
description: Defines the properties for a note
additionalProperties: false
required:
  - label
  - entity_id
  - entity_type
  - created
  - updated
  - text
properties:
  note_id:
    description: The identifier for the note
    type: string
    readOnly: true
    pattern: '^[0-9a-zA-Z-_]+$'
  entity_id:
    x-no-api-doc: true
    type: string
    description: Customer identifier
    readOnly: true
    pattern: '^[0-9a-zA-Z-_]+$'
  entity_type:
    x-no-api-doc: true
    enum:
      - NOTE
  label:
    type: string
    description: Label for the entity
  slug:
    type: string
    description: Slug for the entity (Auto-generated from the label)
    readOnly: true
    deprecated: true
    pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$'
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
    description: User Information
    additionalProperties: false
    properties:
      user_id:
        type: string
        description: The identifier for the user
        pattern: '^[0-9a-zA-Z-_]+$'
      entity_id:
        x-no-api-doc: true
        type: string
        description: Customer identifier
        readOnly: true
        pattern: '^[0-9a-zA-Z-_]+$'
      entity_type:
        x-no-api-doc: true
        enum:
          - UNIT
      label:
        type: string
        description: Label for the entity
      slug:
        type: string
        description: Slug for the entity (Auto-generated from the label)
        readOnly: true
        deprecated: true
        pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$'
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
        description: Image for the user
      profile:
        type: string
        description: Link to the users profile

```

*Defines the properties for a note*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note_id|string|false|read-only|The identifier for the note|
|entity_id|string|true|read-only|Customer identifier|
|entity_type|string|true|none|none|
|label|string|true|none|Label for the entity|
|slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|text|string|true|none|Text for the note|
|created_by|object|false|none|User Information|
|» user_id|string|false|none|The identifier for the user|
|» entity_id|string|false|read-only|Customer identifier|
|» entity_type|string|false|none|none|
|» label|string|false|none|Label for the entity|
|» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|» created|string(date-time)|false|read-only|Date the entity was created|
|» updated|string(date-time)|false|read-only|Last date the entity was updated|
|» email|string(email)|false|none|Email address|
|» name|string|false|none|Human readable name|
|» picture|string|false|none|Image for the user|
|» profile|string|false|none|Link to the users profile|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|NOTE|
|entity_type|UNIT|

