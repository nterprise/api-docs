---
layout: page
parent: Niagara API
nav_order: 6
redirect_from:
  - /rel/dashboards
  - /rel/dashboard
title: Dashboards
---

<h1 id="dashboards">Dashboards</h1>

* Do not remove this line (it will not be displayed)
{:toc}

API for the nterprise application

<h1 id="dashboards-dashboard">Dashboard</h1>

## Operations

### GET /dashboard - *Fetch dashboards*

<a id="opIdfetchDashboard"></a>

*Fetch dashboards*

Dashboard page

<h3 id="fetchdashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A dashboard response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|

> Example responses

> 200 Response

```json
{
  "dashboards": [
    {
      "type": "quickSight",
      "embed_url": "https://api.dev.nterprise.com/dashboard/_embed",
      "expires_in": 60
    }
  ],
  "_links": {
    "self": {
      "href": "https://api.dev.nterprise.com/dashboard"
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

<h3 id="fetchdashboard-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; _links|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; dashboards|[object]|false|none|A List of all dashboards configured|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|read-only|Describes type of dashboard. Embedded link to|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; embed_url|string(url)|false|read-only|The link to the embedded dashboard from quick sight|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; expires_in|integer|false|read-only|How long until the embedded link expires. Calling the endpoint will generate a fresh embed url|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

# Embedded Schemas

## Dashboard
<!-- backwards compatibility -->
<a id="schemadashboard"></a>
<a id="schema_Dashboard"></a>
<a id="tocSdashboard"></a>
<a id="tocsdashboard"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; self|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|
|dashboards|[object]|false|none|A List of all dashboards configured|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|read-only|Describes type of dashboard. Embedded link to|
|&nbsp;&nbsp;&nbsp;&nbsp; embed_url|string(url)|false|read-only|The link to the embedded dashboard from quick sight|
|&nbsp;&nbsp;&nbsp;&nbsp; expires_in|integer|false|read-only|How long until the embedded link expires. Calling the endpoint will generate a fresh embed url|

#### Specification

```yaml
dashboards:
  - type: quickSight
    embed_url: https://api.dev.nterprise.com/dashboard/_embed
    expires_in: 60
_links:
  self:
    href: https://api.dev.nterprise.com/dashboard

```

