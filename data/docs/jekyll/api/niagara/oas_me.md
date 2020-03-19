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
  "type": "object",
  "allOf": [
    {
      "type": "object",
      "properties": {
        "_links": {
          "type": "object",
          "properties": {
            "self": {
              "example": {
                "href": "https://api.nterprise.com/users/QEvVrVMMwVcJ6om"
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
        "user_id": {
          "type": "string",
          "description": "The identifier for the user",
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
  ]
}
```

<h3 id="fetchme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Me Response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|

<h3 id="fetchme-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» user_id|string|false|none|The identifier for the user|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» email|string(email)|false|none|Email address|
|»» name|string|false|none|Human readable name|
|»» picture|string|false|none|Image for the user|
|»» profile|string|false|none|Link to the users profile|

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

<aside class="success">
This operation does not require authentication
</aside>

