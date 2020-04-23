---
layout: page
parent: Niagara API
nav_order: 18
redirect_from:
  - /rel/users
  - /rel/user
  - /rel/note-created-by
title: Users
---

<h1 id="users">Users</h1>

* Do not remove this line (it will not be displayed)
{:toc}

API for the nterprise application

<h1 id="users-user">User</h1>

## Operations

### GET /users - *Fetch Users*

<a id="opIdfetchAllUsers"></a>

*Fetch Users*

Fetches A Page of users

<h3 id="fetchallusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|

<h3 id="fetchallusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for users|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

> Example responses

> 200 Response

```json
{
  "total_count": 21,
  "limit": 42,
  "offset": "next-offset",
  "_embedded": {
    "nter:users": [
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
    "next": {
      "href": "https://api.example.com/users?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.example.com/users?limit=42"
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

<h3 id="fetchallusers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; total_count|number|true|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp; limit|number|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; offset|string¦null|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; _embedded|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; nter:users|[allOf]|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; user_id|string|true|none|The identifier for the user|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; email|string(email)|true|none|Email address|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; name|string|true|none|Human readable name|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; picture|string¦null|false|none|Image for the user|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; profile|string¦null|false|none|Link to the users profile|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _links|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; _links|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; next|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|

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

### GET /users/{user_id} - *Fetch User*

<a id="opIdfetchUserById"></a>

*Fetch User*

Fetches a user

<h3 id="fetchuserbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Id of the user|

<h3 id="fetchuserbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A user response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

> Example responses

> 200 Response

```json
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

<h3 id="fetchuserbyid-responseschema">Response Schema</h3>

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

# Embedded Schemas

## User
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|The identifier for the user|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|email|string(email)|true|none|Email address|
|name|string|true|none|Human readable name|
|picture|string¦null|false|none|Image for the user|
|profile|string¦null|false|none|Link to the users profile|

#### Specification

```yaml
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

