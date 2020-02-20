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
                  "example": "https://api.nterprise.com/dashboards/9db57709-aad0-4e53-8eda-c92f690a8978"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-nter-relation": "dashboards",
          "x-nter-callable": true,
          "description": "Dashboard",
          "properties": {
            "dashboards": {
              "description": "A List of all dashboards configured",
              "type": "array",
              "items": {
                "type": "object",
                "anyOf": [
                  {
                    "type": "object",
                    "description": "Quick Sight dashboard",
                    "x-ui-hide": true,
                    "properties": {
                      "type": {
                        "description": "Describes type of dashboard. Embedded link to ",
                        "type": "string",
                        "readOnly": true,
                        "enum": [
                          "quickSight",
                          "widget"
                        ],
                        "example": "quickSight",
                        "x-examples": [
                          "quickSight"
                        ]
                      },
                      "embed_url": {
                        "description": "The link to the embedded dashboard from quick sight",
                        "type": "string",
                        "readOnly": true,
                        "example": "https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D",
                        "x-examples": [
                          "https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D"
                        ]
                      },
                      "expires_in": {
                        "description": "How long until the embedded link expires. Calling the endpoint will generate a fresh embed url",
                        "readOnly": true,
                        "type": "integer",
                        "format": "int32",
                        "example": 3600,
                        "x-examples": [
                          3600
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "example": {
            "dashboards": [
              {
                "type": "quickSight",
                "embed_url": "https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D",
                "expires_in": 3600
              },
              {
                "type": "quickSight",
                "embed_url": "https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D",
                "expires_in": 3600
              },
              {
                "type": "quickSight",
                "embed_url": "https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D",
                "expires_in": 3600
              },
              {
                "type": "quickSight",
                "embed_url": "https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D",
                "expires_in": 3600
              },
              {
                "type": "quickSight",
                "embed_url": "https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D",
                "expires_in": 3600
              }
            ]
          }
        }
      ],
      "example": "undefined"
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
|»» self|object|false|read-only|none|
|»»» href|string|false|none|none|

Status Code **401**

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

<h2 id="tocSdashboard">Dashboard</h2>

<a id="schemadashboard"></a>

```yaml
dashboards:
  - type: quickSight
    embed_url: >-
      https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D
    expires_in: 3600
  - type: quickSight
    embed_url: >-
      https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D
    expires_in: 3600
  - type: quickSight
    embed_url: >-
      https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D
    expires_in: 3600
  - type: quickSight
    embed_url: >-
      https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D
    expires_in: 3600
  - type: quickSight
    embed_url: >-
      https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D
    expires_in: 3600

```

*Dashboard*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dashboards|[anyOf]|false|none|A List of all dashboards configured|
|» type|string|false|read-only|Describes type of dashboard. Embedded link to|
|» embed_url|string|false|read-only|The link to the embedded dashboard from quick sight|
|» expires_in|integer(int32)|false|read-only|How long until the embedded link expires. Calling the endpoint will generate a fresh embed url|

#### Enumerated Values

|Property|Value|
|---|---|
|type|quickSight|
|type|widget|

<h2 id="tocSquicksight">QuickSight</h2>

<a id="schemaquicksight"></a>

```yaml
type: object
description: Quick Sight dashboard
x-ui-hide: true
properties:
  type:
    description: 'Describes type of dashboard. Embedded link to '
    type: string
    readOnly: true
    enum:
      - quickSight
      - widget
    example: quickSight
    x-examples:
      - quickSight
  embed_url:
    description: The link to the embedded dashboard from quick sight
    type: string
    readOnly: true
    example: >-
      https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D
    x-examples:
      - >-
        https://us-east-1.quicksight.aws.amazon.com/embed/4fee092f51244f21994c9d7939813b11/dashboards/6888cf31-bc54-431b-9c74-ad59f4a29bc6?isauthcode=true&identityprovider=quicksight&code=SixUiZuNCcD73DfhuCHH_WdIpuhKyo6e5jerKAfA%3D%3D
  expires_in:
    description: >-
      How long until the embedded link expires. Calling the endpoint will
      generate a fresh embed url
    readOnly: true
    type: integer
    format: int32
    example: 3600
    x-examples:
      - 3600

```

*Quick Sight dashboard*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|read-only|Describes type of dashboard. Embedded link to|
|embed_url|string|false|read-only|The link to the embedded dashboard from quick sight|
|expires_in|integer(int32)|false|read-only|How long until the embedded link expires. Calling the endpoint will generate a fresh embed url|

#### Enumerated Values

|Property|Value|
|---|---|
|type|quickSight|
|type|widget|

