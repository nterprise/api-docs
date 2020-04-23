---
layout: page
parent: Niagara API
nav_order: 9
redirect_from:
  - /rel/me
title: Me
---

<h1 id="me">Me</h1>

* Do not remove this line (it will not be displayed)
{:toc}

API for the nterprise application

<h1 id="me-me">Me</h1>

## Operations

### GET /me - *Information about the current user*

<a id="opIdfetchMe"></a>

*Information about the current user*

Fetches the current user information along with resources they can access

<h3 id="fetchme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Me Response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|

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

<h3 id="fetchme-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

