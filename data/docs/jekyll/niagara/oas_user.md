---
layout: page
parent: Niagara API
nav_order: 16
title: Users
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="users">Users v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

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
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:users": {
          "type": "array",
          "maxItems": 100,
          "items": {
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
                        "example": "https://api.nterprise.com/users/6234b5d3-9cb4-4385-b7c1-5b355c39e3d6"
                      }
                    }
                  }
                }
              }
            },
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
              }
            ],
            "example": "undefined"
          }
        }
      }
    }
  },
  "allOf": [
    {
      "type": "object",
      "x-hal": true,
      "x-ui-hide": true,
      "properties": {
        "total_count": {
          "type": "integer",
          "format": "int32",
          "readOnly": true,
          "minimum": 0,
          "example": 32
        },
        "limit": {
          "type": "integer",
          "format": "int32",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "offset": {
          "type": "string",
          "readOnly": true,
          "example": "363yHhUhhI"
        }
      },
      "allOf": [
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
        },
        {
          "type": "object",
          "x-ui-hide": true,
          "properties": {
            "_links": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "next": {
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
      ],
      "example": "undefined"
    }
  ]
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
|»» nter:users|[allOf]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|read-only|none|
|»»»»» href|string|false|none|none|

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

<aside class="success">
This operation does not require authentication
</aside>

## fetchUserById

<a id="opIdfetchUserById"></a>

`GET /users/:user_id`

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
                  "example": "https://api.nterprise.com/users/6234b5d3-9cb4-4385-b7c1-5b355c39e3d6"
                }
              }
            }
          }
        }
      },
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
        }
      ],
      "example": "undefined"
    }
  ]
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

# Schemas

<h2 id="tocSuser">User</h2>

<a id="schemauser"></a>

```yaml
user_id: 3dddba3e-6122-46a8-ae26-8c7c95bd82d7
email: alice@zones.com
name: Alice Bob
picture: 'https://bit.ly/18gECvy'
profile: 'https://bit.ly/18gECvy'

```

*User Information*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|false|none|The identifier for the user|
|email|string(email)|false|none|Email address|
|name|string\|null|false|none|Human readable name|
|picture|string\|null|false|none|Image for the user|
|profile|string\|null|false|none|Link to the users profile|

