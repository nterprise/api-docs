---
layout: page
parent: Niagara API
nav_order: 17
title: Users
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="users">Users v2.0.0</h1>

* Do not remove this line (it will not be displayed)
{:toc}

> Scroll down for example requests and responses.

API for the nterprise application

Base URLs:

* <a href="https://{environment}.nterprise.com">https://{environment}.nterprise.com</a>

    * **environment** -  Default: api

        * api

        * api.dev

<h1 id="users-user">User</h1>

## fetchAllUsers

<a id="opIdfetchAllUsers"></a>

`GET /users`

*Fetches A Page of users*

Fetch Users

<h3 id="fetchallusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:users": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "object",
            "properties": {
              "_links": {
                "type": "object",
                "properties": {
                  "self": {
                    "x-example": {
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
        }
      }
    },
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "x-example": {
            "href": "https://api.nterprise.com/users"
          },
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "next": {
          "x-example": {
            "href": "https://api.nterprise.com/users?offset=QVBrO2wm13iEyl&limit=100"
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
    }
  }
}
```

<h3 id="fetchallusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for users|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallusers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:users|[object]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» user_id|string|false|none|The identifier for the user|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» email|string(email)|false|none|Email address|
|»»»» name|string|false|none|Human readable name|
|»»»» picture|string|false|none|Image for the user|
|»»»» profile|string|false|none|Link to the users profile|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» next|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|

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

<aside class="success">
This operation does not require authentication
</aside>

## fetchUserById

<a id="opIdfetchUserById"></a>

`GET /users/{user_id}`

*Fetches a user by Id*

Fetch User

<h3 id="fetchuserbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Id of the user|

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
          "x-example": {
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
```

<h3 id="fetchuserbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A user response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchuserbyid-responseschema">Response Schema</h3>

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

# Schemas

<h2 id="tocSuser">User</h2>

<a id="schemauser"></a>

```yaml
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
      - USER
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

*User Information*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|false|none|The identifier for the user|
|entity_id|string|false|read-only|Customer identifier|
|entity_type|string|false|none|none|
|label|string|false|none|Label for the entity|
|slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|created|string(date-time)|false|read-only|Date the entity was created|
|updated|string(date-time)|false|read-only|Last date the entity was updated|
|email|string(email)|false|none|Email address|
|name|string|false|none|Human readable name|
|picture|string|false|none|Image for the user|
|profile|string|false|none|Link to the users profile|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|USER|

