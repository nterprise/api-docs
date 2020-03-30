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

* Do not remove this line (it will not be displayed)
{:toc}

> Scroll down for example requests and responses.

File attachments can be attached to other `entities` and providing simple document storage functionality.

## File Restrictions

The maximum file size allowed is 10MB.

### Restricted file types

- Adobe PDF

## Security Restrictions

Files are considered a top-level `entity.` `Users` must be granted the `create` permission on the File entity to be able to upload files. Files cannot be updated. Grant the `create` or `update` permissions to the user for the linked `entity` for the relationship operation to be approved.

Base URLs:

* <a href="https://{environment}.nterprise.com">https://{environment}.nterprise.com</a>

    * **environment** -  Default: api

        * api

        * api.dev

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
      "description": "URL to post the file to"
    },
    "expires_in": {
      "type": "integer",
      "description": "The number of seconds the upload URL is valid for"
    },
    "_links": {
      "type": "object",
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
|» url|string|false|none|URL to post the file to|
|» expires_in|integer|false|none|The number of seconds the upload URL is valid for|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|

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

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Payload too Large|
|type|https://docs.nterprise.com/api/problem/PayloadTooLarge|
|status|413|
|detail|The resource you are trying to upload is too large|

<aside class="success">
This operation does not require authentication
</aside>

