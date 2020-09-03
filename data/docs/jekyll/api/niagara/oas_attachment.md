---
layout: page
parent: Niagara API
nav_order: 1
redirect_from:
  - /rel/files
title: Attachments
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="attachments">Attachments</h1>

* Do not remove this line (it will not be displayed)
{:toc}

File attachments can be attached to other `entities` and providing simple document storage functionality.

## File Restrictions

The maximum file size allowed is 10MB.

### Restricted file types

- Adobe PDF

## Security Restrictions

Files are considered a top-level `entity.` `Users` must be granted the `create` permission on the File entity to be able to upload files. Files cannot be updated. Grant the `create` or `update` permissions to the user for the linked `entity` for the relationship operation to be approved

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|file:create|Allows creating a file|
|file:read|Allows access to a file (along with downloading)|
|file:all|Allows reading all file|

<h1 id="attachments-attachment">Attachment</h1>

## Operations

### GET /attachments

<a id="opIdfetchAttachments"></a>

Fetch a page of attachments

<aside class="warning">
Permissions required:<br>
<ul><li>file:all</li></ul>
</aside>

> Example responses

> 200 Response

```json
{
  "total_count": 21,
  "limit": 42,
  "offset": "next-offset",
  "_embedded": {
    "nter:attachments": [
      {
        "attachment_id": "attachment",
        "label": "Test Attachment.pdf",
        "created": "2019-09-16T21:26:14.000Z",
        "updated": "2019-09-16T21:27:14.000Z",
        "content_type": "application/pdf",
        "content_length": 13396,
        "_links": {
          "self": {
            "href": "https://api.nterprise.com/attachments/attachment"
          },
          "nter:download-attachment": {
            "href": "https://api.nterprise.com/attachments/attachment/download"
          }
        }
      }
    ]
  }
}
```

### POST /attachments

<a id="opIdsignAttachment"></a>

In order to upload files, a signed AWS URL is needed. This operation will create that signed url

<aside class="warning">
Permissions required:<br>
<ul><li>file:create</li></ul>
</aside>

> Body parameter

<h3 id="signattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|body|string|true|Name of the file|
|type|body|string|true|Mime type of the file|
|size|body|integer|true|Size of the file in bytes max 10 MB|

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
      "href": "https://api.nterprise.com/attachments/attachment"
    },
    "nter:download-attachment": {
      "href": "https://api.nterprise.com/attachments/attachment/download"
    }
  }
}
```

### GET /attachments/{attachment_id}

<a id="opIdgetAttachment"></a>

Fetches information about an uploaded attachment

<aside class="warning">
Permissions required:<br>
<ul><li>file:read</li></ul>
</aside>

<h3 id="getattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachment_id|path|string|true|Id of the batch|

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
      "href": "https://api.nterprise.com/attachments/attachment"
    },
    "nter:download-attachment": {
      "href": "https://api.nterprise.com/attachments/attachment/download"
    }
  }
}
```

### GET /attachments/{attachment_id}/download

<a id="opIddownloadAttachment"></a>

Downloads the attachment

<aside class="warning">
Permissions required:<br>
<ul><li>file:read</li></ul>
</aside>

<h3 id="downloadattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachment_id|path|string|true|Id of the batch|

# Embedded Schemas

## Attachment
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_id|string|false|read-only|The identifier for the batch|
|label|string|false|none|Label for the entity|
|created|string(date-time)|false|read-only|Date the entity was created|
|updated|string(date-time)|false|read-only|Last date the entity was updated|
|content_type|string|false|none|MIME type of file|
|content_length|number|false|none|Length of file in bytes|

#### Specification

```yaml
type: object
properties:
  file_id:
    description: The identifier for the batch
    type: string
    readOnly: true
    pattern: ^[0-9a-zA-Z-_]+$
  label:
    type: string
    description: Label for the entity
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
  content_type:
    type: string
    description: MIME type of file
    enum:
      - application/pdf
  content_length:
    type: number
    description: Length of file in bytes

```

