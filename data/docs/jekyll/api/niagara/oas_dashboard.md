---
layout: page
parent: Niagara API
nav_order: 4
title: Dashboards
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="dashboards">Dashboards v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

<h1 id="dashboards-dashboard">Dashboard</h1>

## fetchDashboard

<a id="opIdfetchDashboard"></a>

`GET /dashboard`

*Dashboard page*

Fetches the dashboard

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
                "href": "https://api.nterprise.com/dashboards"
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
        "dashboards": {
          "description": "A List of all dashboards configured",
          "type": "array",
          "items": {
            "type": "object",
            "description": "Quick Sight dashboard",
            "x-ui-hide": true,
            "properties": {
              "type": {
                "description": "Describes type of dashboard. Embedded link to",
                "type": "string",
                "readOnly": true,
                "enum": [
                  "quickSight"
                ]
              },
              "embed_url": {
                "description": "The link to the embedded dashboard from quick sight",
                "type": "string",
                "format": "url",
                "readOnly": true
              },
              "expires_in": {
                "description": "How long until the embedded link expires. Calling the endpoint will generate a fresh embed url",
                "readOnly": true,
                "type": "integer"
              }
            }
          }
        }
      }
    }
  ]
}
```

<h3 id="fetchdashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A dashboard response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|

<h3 id="fetchdashboard-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» dashboards|[object]|false|none|A List of all dashboards configured|
|»»» type|string|false|read-only|Describes type of dashboard. Embedded link to|
|»»» embed_url|string(url)|false|read-only|The link to the embedded dashboard from quick sight|
|»»» expires_in|integer|false|read-only|How long until the embedded link expires. Calling the endpoint will generate a fresh embed url|

#### Enumerated Values

|Property|Value|
|---|---|
|type|quickSight|

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

# Schemas

<h2 id="tocSdashboard">Dashboard</h2>

<a id="schemadashboard"></a>

```yaml
type: object
properties:
  _links:
    type: object
    properties:
      self:
        example:
          href: 'https://api.nterprise.com/dashboards'
        type: object
        properties:
          href:
            type: string
            format: uri
  dashboards:
    description: A List of all dashboards configured
    type: array
    items:
      type: object
      description: Quick Sight dashboard
      x-ui-hide: true
      properties:
        type:
          description: Describes type of dashboard. Embedded link to
          type: string
          readOnly: true
          enum:
            - quickSight
        embed_url:
          description: The link to the embedded dashboard from quick sight
          type: string
          format: url
          readOnly: true
        expires_in:
          description: >-
            How long until the embedded link expires. Calling the endpoint will
            generate a fresh embed url
          readOnly: true
          type: integer

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|» self|object|false|none|none|
|»» href|string(uri)|false|none|none|
|» dashboards|[object]|false|none|A List of all dashboards configured|
|»» type|string|false|read-only|Describes type of dashboard. Embedded link to|
|»» embed_url|string(url)|false|read-only|The link to the embedded dashboard from quick sight|
|»» expires_in|integer|false|read-only|How long until the embedded link expires. Calling the endpoint will generate a fresh embed url|

#### Enumerated Values

|Property|Value|
|---|---|
|type|quickSight|

