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

`GET /notes/:note_id`

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
  "allOf": [
    {
      "type": "object",
      "x-hal": true,
      "x-ui-hide": true,
      "properties": {
        "_links": {
          "type": "object",
          "properties": {
            "self": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "href": {
                  "type": "string",
                  "example": "https://api.nterprise.com/notes/29474d4c-4063-4571-beb4-3d699a677b22"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#note",
          "x-nter-relation": "notes",
          "x-nter-model": "Note",
          "x-nter-callable": true,
          "description": "Defines the properties for a note",
          "required": [
            "label",
            "text",
            "note_id"
          ],
          "properties": {
            "note_id": {
              "type": "string",
              "description": "The identifier for the note",
              "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
              "x-examples": [
                "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "label": {
              "type": "string",
              "description": "Title for the note",
              "example": "Malfunction in the microscopic warp field coils",
              "x-examples": [
                "Malfunction in the microscopic warp field coils."
              ]
            },
            "slug": {
              "type": "string",
              "description": "Auto-generated slug for the note",
              "example": "malfunction-in-the-microscopic-warp-field-coils",
              "x-examples": [
                "malfunction-in-the-microscopic-warp-field-coils"
              ]
            },
            "text": {
              "type": "string",
              "description": "Text for the note",
              "example": "Heisenberg subspace transceiver assembly is unstable. Compensate the bioregenerative impulse engine with the ultraviolet subfusion.",
              "x-examples": [
                "Heisenberg subspace transceiver assembly is unstable. Compensate the bioregenerative impulse engine with the ultraviolet subfusion."
              ]
            },
            "created_by": {
              "description": "User Information",
              "x-nter-relation": "users",
              "x-nter-model": "User",
              "x-nter-callable": true,
              "properties": {
                "user_id": {
                  "type": "string",
                  "description": "The identifier for the user",
                  "example": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
                  "x-examples": [
                    "3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
                  ],
                  "pattern": "[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}"
                },
                "email": {
                  "type": "string",
                  "format": "email",
                  "description": "Email address",
                  "example": "alice@zones.com",
                  "x-examples": [
                    "alice@zones.com"
                  ]
                },
                "name": {
                  "type": "string",
                  "description": "Human readable name",
                  "nullable": true,
                  "example": "Alice Bob",
                  "x-examples": [
                    "Alice Bob"
                  ]
                },
                "picture": {
                  "type": "string",
                  "description": "Image for the user",
                  "nullable": true,
                  "example": "https://bit.ly/18gECvy",
                  "x-examples": [
                    "https://bit.ly/18gECvy"
                  ]
                },
                "profile": {
                  "type": "string",
                  "description": "Link to the users profile",
                  "nullable": true,
                  "example": "https://bit.ly/18gECvy",
                  "x-examples": [
                    "https://bit.ly/18gECvy"
                  ]
                }
              },
              "example": {
                "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
                "email": "alice@zones.com",
                "name": "Alice Bob",
                "picture": "https://bit.ly/18gECvy",
                "profile": "https://bit.ly/18gECvy"
              }
            }
          },
          "allOf": [
            {
              "x-ui-hide": true,
              "type": "object",
              "description": "Common Properties to all entities",
              "required": [
                "label"
              ],
              "properties": {
                "label": {
                  "type": "string",
                  "description": "Label for the entity",
                  "example": "primary"
                },
                "slug": {
                  "type": "string",
                  "description": "Slug for the entity (Auto-generated from the label)",
                  "readOnly": true,
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
                }
              }
            }
          ],
          "example": {
            "label": "Malfunction in the microscopic warp field coils.",
            "text": "Heisenberg subspace transceiver assembly is unstable. Compensate the bioregenerative impulse engine with the ultraviolet subfusion.",
            "note_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
            "slug": "malfunction-in-the-microscopic-warp-field-coils",
            "created_by": {
              "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
              "email": "alice@zones.com",
              "name": "Alice Bob",
              "picture": "https://bit.ly/18gECvy",
              "profile": "https://bit.ly/18gECvy"
            },
            "created": "1990-06-26T18:43:34.537Z",
            "updated": "1989-07-31T07:51:12.225Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
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
|»» self|object|false|read-only|none|
|»»» href|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteNote

<a id="opIddeleteNote"></a>

`DELETE /notes/:note_id`

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
      "example": "Unauthorized"
    },
    "type": {
      "example": "https://docs.nterprise.com/api/problem/Unauthorized"
    },
    "status": {
      "example": 401
    },
    "detail": {
      "example": "You are not authorized to access this resource"
    }
  },
  "allOf": [
    {
      "type": "object",
      "x-ui-hide": true,
      "description": "API Error",
      "properties": {
        "type": {
          "type": "string",
          "format": "uri",
          "description": "An absolute URI that identifies the problem type",
          "default": "about:blank",
          "example": "https://docs.nterprise.com/problem/InternalServerError"
        },
        "title": {
          "type": "string",
          "example": "Internal Server Error",
          "description": "A short, summary of the problem type"
        },
        "status": {
          "type": "integer",
          "format": "int32",
          "description": "The HTTP status code generated by the origin server for this occurrence of the problem",
          "minimum": 100,
          "maximum": 600,
          "example": 500
        },
        "detail": {
          "type": "string",
          "description": "A human readable explanation specific to this occurrence of the problem",
          "example": "Failed to reticulate splines"
        }
      }
    }
  ]
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
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **423**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocSnote">Note</h2>

<a id="schemanote"></a>

```yaml
label: Malfunction in the microscopic warp field coils.
text: >-
  Heisenberg subspace transceiver assembly is unstable. Compensate the
  bioregenerative impulse engine with the ultraviolet subfusion.
note_id: ec5db56d-32e6-4e5d-9bef-1016f3e13670
slug: malfunction-in-the-microscopic-warp-field-coils
created_by:
  user_id: 3dddba3e-6122-46a8-ae26-8c7c95bd82d7
  email: alice@zones.com
  name: Alice Bob
  picture: 'https://bit.ly/18gECvy'
  profile: 'https://bit.ly/18gECvy'
created: '1990-06-26T18:43:34.537Z'
updated: '1989-07-31T07:51:12.225Z'

```

*Defines the properties for a note*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note_id|string|true|none|The identifier for the note|
|label|string|true|none|Title for the note|
|slug|string|false|none|Auto-generated slug for the note|
|text|string|true|none|Text for the note|
|created_by|object|false|none|User Information|
|» user_id|string|false|none|The identifier for the user|
|» email|string(email)|false|none|Email address|
|» name|string\|null|false|none|Human readable name|
|» picture|string\|null|false|none|Image for the user|
|» profile|string\|null|false|none|Link to the users profile|

