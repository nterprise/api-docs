---
layout: page
parent: Niagara API
nav_order: 15
title: Settings
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="settings">Settings v2.0.0</h1>

* Do not remove this line (it will not be displayed)
{:toc}

> Scroll down for example requests and responses.

API for the nterprise application

Base URLs:

* <a href="https://{environment}.nterprise.com">https://{environment}.nterprise.com</a>

    * **environment** -  Default: api

        * api

        * api.dev

<h1 id="settings-settings">Settings</h1>

## fetchAllStatuses

<a id="opIdfetchAllStatuses"></a>

`GET /settings/statuses`

*Fetches all the statuses*

Fetch Statuses

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:settings-statuses": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "object",
            "description": "Defines the properties for a status",
            "additionalProperties": false,
            "required": [
              "status",
              "category"
            ],
            "properties": {
              "status": {
                "type": "string",
                "description": "A Custom label for the status",
                "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
              },
              "category": {
                "type": "string",
                "description": "The classifier for the statues",
                "enum": [
                  "PENDING",
                  "IN_PROGRESS",
                  "VERIFYING",
                  "COMPLETE",
                  "CANCELLED",
                  "BLOCKED"
                ]
              }
            }
          }
        }
      }
    }
  }
}
```

<h3 id="fetchallstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|All the statuses defined for the system|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallstatuses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:settings-statuses|[object]|false|none|none|
|»»» status|string|true|none|A Custom label for the status|
|»»» category|string|true|none|The classifier for the statues|

#### Enumerated Values

|Property|Value|
|---|---|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|

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

## createStatus

<a id="opIdcreateStatus"></a>

`POST /settings/statuses`

*Creates a new status*

Creates a new status

> Body parameter

```json
{
  "type": "object",
  "description": "Defines the properties for a status",
  "additionalProperties": false,
  "required": [
    "status",
    "category"
  ],
  "properties": {
    "status": {
      "type": "string",
      "description": "A Custom label for the status",
      "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
    },
    "category": {
      "type": "string",
      "description": "The classifier for the statues",
      "enum": [
        "PENDING",
        "IN_PROGRESS",
        "VERIFYING",
        "COMPLETE",
        "CANCELLED",
        "BLOCKED"
      ]
    }
  }
}
```

<h3 id="createstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|body|string|true|A Custom label for the status|
|category|body|string|true|The classifier for the statues|

#### Enumerated Values

|Parameter|Value|
|---|---|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "allOf": [
    {
      "type": "object",
      "description": "Defines the properties for a status",
      "additionalProperties": false,
      "required": [
        "status",
        "category"
      ],
      "properties": {
        "status": {
          "type": "string",
          "description": "A Custom label for the status",
          "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
        },
        "category": {
          "type": "string",
          "description": "The classifier for the statues",
          "enum": [
            "PENDING",
            "IN_PROGRESS",
            "VERIFYING",
            "COMPLETE",
            "CANCELLED",
            "BLOCKED"
          ]
        }
      }
    }
  ]
}
```

<h3 id="createstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A status response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="createstatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» status|string|true|none|A Custom label for the status|
|» category|string|true|none|The classifier for the statues|

#### Enumerated Values

|Property|Value|
|---|---|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Bad Request|
|type|https://docs.nterprise.com/api/problem/BadRequest|
|status|400|
|detail|Invalid request|

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

# Schemas

<h2 id="tocSstatus">Status</h2>

<a id="schemastatus"></a>

```yaml
type: object
description: Defines the properties for a status
additionalProperties: false
required:
  - status
  - category
properties:
  status:
    type: string
    description: A Custom label for the status
    pattern: '^[A-Za-z][0-9a-zA-Z-_ ]+$'
  category:
    type: string
    description: The classifier for the statues
    enum:
      - PENDING
      - IN_PROGRESS
      - VERIFYING
      - COMPLETE
      - CANCELLED
      - BLOCKED

```

*Defines the properties for a status*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|A Custom label for the status|
|category|string|true|none|The classifier for the statues|

#### Enumerated Values

|Property|Value|
|---|---|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|

