---
layout: page
parent: Niagara API
nav_order: 14
title: Settings
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="settings">Settings v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

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
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:settings-statuses": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "x-id": "#status",
            "x-nter-relation": "statuses",
            "x-nter-model": "Status",
            "x-nter-callable": true,
            "x-ui-hide": true,
            "description": "Defines the properties for a status",
            "type": "object",
            "required": [
              "status",
              "status_category"
            ],
            "properties": {
              "status": {
                "type": "string",
                "description": "A Custom label for the status",
                "x-examples": [
                  "Pending",
                  "In Progress",
                  "Verifying",
                  "Complete",
                  "Cancelled",
                  "Blocked",
                  "Reticulating Splines"
                ]
              },
              "category": {
                "type": "string",
                "description": "The classifier for the statues",
                "x-examples": [
                  "PENDING",
                  "IN_PROGRESS",
                  "VERIFYING",
                  "COMPLETE",
                  "CANCELLED",
                  "BLOCKED"
                ],
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
|»»» category|string|false|none|The classifier for the statues|

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

## createStatus

<a id="opIdcreateStatus"></a>

`POST /settings/statuses`

*Creates a new status*

Creates a new status

> Body parameter

```json
{
  "x-id": "#status",
  "x-nter-relation": "statuses",
  "x-nter-model": "Status",
  "x-nter-callable": true,
  "x-ui-hide": true,
  "description": "Defines the properties for a status",
  "type": "object",
  "required": [
    "status",
    "status_category"
  ],
  "properties": {
    "status": {
      "type": "string",
      "description": "A Custom label for the status",
      "x-examples": [
        "Pending",
        "In Progress",
        "Verifying",
        "Complete",
        "Cancelled",
        "Blocked",
        "Reticulating Splines"
      ]
    },
    "category": {
      "type": "string",
      "description": "The classifier for the statues",
      "x-examples": [
        "PENDING",
        "IN_PROGRESS",
        "VERIFYING",
        "COMPLETE",
        "CANCELLED",
        "BLOCKED"
      ],
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
|category|body|string|false|The classifier for the statues|

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
                  "example": "https://api.nterprise.com/statuses/b76d0f3c-a71f-4160-b0fe-634ce2057a61"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#status",
          "x-nter-relation": "statuses",
          "x-nter-model": "Status",
          "x-nter-callable": true,
          "x-ui-hide": true,
          "description": "Defines the properties for a status",
          "type": "object",
          "required": [
            "status",
            "status_category"
          ],
          "properties": {
            "status": {
              "type": "string",
              "description": "A Custom label for the status",
              "x-examples": [
                "Pending",
                "In Progress",
                "Verifying",
                "Complete",
                "Cancelled",
                "Blocked",
                "Reticulating Splines"
              ]
            },
            "category": {
              "type": "string",
              "description": "The classifier for the statues",
              "x-examples": [
                "PENDING",
                "IN_PROGRESS",
                "VERIFYING",
                "COMPLETE",
                "CANCELLED",
                "BLOCKED"
              ],
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
|» _links|object|false|none|none|
|»» self|object|false|read-only|none|
|»»» href|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

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

# Schemas

<h2 id="tocSstatus">Status</h2>

<a id="schemastatus"></a>

```yaml
x-id: '#status'
x-nter-relation: statuses
x-nter-model: Status
x-nter-callable: true
x-ui-hide: true
description: Defines the properties for a status
type: object
required:
  - status
  - status_category
properties:
  status:
    type: string
    description: A Custom label for the status
    x-examples:
      - Pending
      - In Progress
      - Verifying
      - Complete
      - Cancelled
      - Blocked
      - Reticulating Splines
  category:
    type: string
    description: The classifier for the statues
    x-examples:
      - PENDING
      - IN_PROGRESS
      - VERIFYING
      - COMPLETE
      - CANCELLED
      - BLOCKED
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
|category|string|false|none|The classifier for the statues|

#### Enumerated Values

|Property|Value|
|---|---|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|

