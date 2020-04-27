---
layout: page
parent: Niagara API
nav_order: 1
redirect_from:
  - /rel/files
title: Attachments
---

<h1 id="attachments">Attachments</h1>

* Do not remove this line (it will not be displayed)
{:toc}

File attachments can be attached to other `entities` and providing simple document storage functionality.

## File Restrictions

The maximum file size allowed is 10MB.

### Restricted file types

- Adobe PDF

## Security Restrictions

Files are considered a top-level `entity.` `Users` must be granted the `create` permission on the File entity to be able to upload files. Files cannot be updated. Grant the `create` or `update` permissions to the user for the linked `entity` for the relationship operation to be approved.

<h1 id="attachments-attachment">Attachment</h1>

## Operations

### POST /attachments - *Gets a signed URL for uploading files*

<a id="opIdsignAttachment"></a>

*Gets a signed URL for uploading files*

In order to upload files, a signed AWS URL is needed. This operation will create that signed url

> Body parameter

<h3 id="signattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|body|string|true|Name of the file|
|type|body|string|true|Mime type of the file|
|size|body|integer|true|Size of the file in bytes max 10 MB|

<h3 id="signattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A attachment response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|413|[Payload Too Large](https://tools.ietf.org/html/rfc7231#section-6.5.11)|Bad Request|Inline|

> Example responses

> 200 Response

```json
{
  "attachment_id": "attachment",
  "label": "Test Attachment.pdf",
  "created": "2019-09-16T21:26:14.000Z",
  "updated": "2019-09-16T21:27:14.000Z",
  "content_type": "application/pdf",
  "content_length": 13396,
  "_links": {
    "self": {
      "href": "https://api.example.com/attachments/attachment"
    }
  }
}
```

> 400 Response

```json
{
  "title": "Bad Request",
  "type": "https://docs.nterprise.com/api/problem/BadRequest",
  "status": 400,
  "detail": "Invalid Data",
  "validation_messages": [
    {
      "keyword": "field",
      "dataPath": ".field",
      "schemaPath": "https://docs.nterprise.com/schemas/niagara/foo.json#/properties/field",
      "params": {
        "type": "string"
      },
      "message": "should be string"
    }
  ]
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

> 413 Response

```json
{
  "title": "Payload too Large",
  "type": "https://docs.nterprise.com/api/problem/PayloadTooLarge",
  "status": 413,
  "detail": "The request payload exceeded 10 MB"
}
```

<h3 id="signattachment-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; validation_messages|[object]|true|none|List of errors detailing the failures|

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

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

