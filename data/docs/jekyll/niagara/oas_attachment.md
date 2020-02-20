---
layout: page
parent: Niagara API
nav_order: 0
title: Attachments
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="attachments">Attachments v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

<h1 id="attachments-attachment">Attachment</h1>

## signAttachment

<a id="opIdsignAttachment"></a>

`POST /attachments`

*Gets a signed URL for uploading files*

In order to upload files, a signed AWS URL is needed. This operation will create that signed url

> Body parameter

```json
{
  "type": "object",
  "required": [
    "name",
    "type",
    "size"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Name of the file"
    },
    "type": {
      "type": "string",
      "description": "Mime type of the file"
    },
    "size": {
      "type": "integer",
      "format": "int32",
      "description": "Size of the file in bytes max 10 MB",
      "maximum": 10485760,
      "minimum": 1
    }
  }
}
```

<h3 id="signattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|body|string|true|Name of the file|
|type|body|string|true|Mime type of the file|
|size|body|integer(int32)|true|Size of the file in bytes max 10 MB|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to post the file to",
      "readOnly": true
    },
    "expires_in": {
      "type": "integer",
      "format": "int64",
      "description": "The number of seconds the upload URL is valid for",
      "example": 900
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
    }
  ]
}
```

<h3 id="signattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A attachment response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|413|[Payload Too Large](https://tools.ietf.org/html/rfc7231#section-6.5.11)|Bad Request|Inline|

<h3 id="signattachment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» url|string|false|read-only|URL to post the file to|
|» expires_in|integer(int64)|false|none|The number of seconds the upload URL is valid for|

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

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

