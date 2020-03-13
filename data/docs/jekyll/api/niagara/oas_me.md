---
layout: page
parent: Niagara API
nav_order: 7
title: Me
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="me">Me v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

<h1 id="me-me">Me</h1>

## fetchMe

<a id="opIdfetchMe"></a>

`GET /me`

*Information about the current user*

Fetches the current user information along with resources they can access

> Example responses

> 200 Response

```json
{
  "allOf": [
    {
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
    },
    {
      "type": "object",
      "x-ui-hide": true,
      "properties": {
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "self": {
              "type": "object",
              "properties": {
                "href": {
                  "type": "string",
                  "format": "uri"
                }
              }
            }
          }
        }
      }
    }
  ]
}
```

<h3 id="fetchme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Me Response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|

<h3 id="fetchme-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None ( Scopes: access )
</aside>

