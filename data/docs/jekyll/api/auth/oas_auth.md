---
layout: page
nav_order: 1
title: Niagara Authentication API
---

<h1 id="niagara-authentication-api">Niagara Authentication API</h1>

* Do not remove this line (it will not be displayed)
{:toc}

OAuth authentication for the niagara API

<h1 id="niagara-authentication-api-elevio">Elevio</h1>

## Operations

### GET /elevio/sign-in - *Sign-in to elevio*

<a id="opIdelevioSignin"></a>

*Sign-in to elevio*

<h3 id="eleviosignin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_url|query|string|true|The url to return back to elevio|

<!-- START responses.def -->

<h3 id="eleviosignin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|[Found](https://tools.ietf.org/html/rfc7231#section-6.4.3)|Authorization endpoint for oauth|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|

> Example responses

> 400 Response

```json
{
  "title": "Bad Request",
  "allOf": [
    {
      "type": "object",
      "description": "oAuth Error",
      "properties": {
        "error": {
          "type": "string",
          "format": "uri",
          "enum": [
            "client_id",
            "access_denied",
            "invalid_request",
            "unauthorized_client",
            "unsupported_response_type",
            "invalid_scope",
            "server_error",
            "temporarily_unavailable"
          ],
          "description": "An absolute URI that identifies the error type",
          "example": "https://docs.nterprise.com/problem/constraint-violation"
        },
        "error_description": {
          "type": "string",
          "description": "A short, summary of the error type"
        }
      }
    }
  ]
}
```

<h3 id="eleviosignin-responseschema">Response Schema</h3>

Status Code **400**

*Bad Request*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; error|string(uri)|false|none|An absolute URI that identifies the error type|
|&nbsp;&nbsp;&nbsp;&nbsp; error_description|string|false|none|A short, summary of the error type|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string||none|

<!-- END responses.def -->

### GET /elevio/verify - *Verify Elevio*

<a id="opIdelevioVerify"></a>

*Verify Elevio*

<h3 id="elevioverify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|query|string|true|oAuth Access code|
|state|query|string|true|State parameter|

<!-- START responses.def -->

<h3 id="elevioverify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|[Found](https://tools.ietf.org/html/rfc7231#section-6.4.3)|Authorization endpoint for oauth|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|

> Example responses

> 400 Response

```json
{
  "title": "Bad Request",
  "allOf": [
    {
      "type": "object",
      "description": "oAuth Error",
      "properties": {
        "error": {
          "type": "string",
          "format": "uri",
          "enum": [
            "client_id",
            "access_denied",
            "invalid_request",
            "unauthorized_client",
            "unsupported_response_type",
            "invalid_scope",
            "server_error",
            "temporarily_unavailable"
          ],
          "description": "An absolute URI that identifies the error type",
          "example": "https://docs.nterprise.com/problem/constraint-violation"
        },
        "error_description": {
          "type": "string",
          "description": "A short, summary of the error type"
        }
      }
    }
  ]
}
```

<h3 id="elevioverify-responseschema">Response Schema</h3>

Status Code **400**

*Bad Request*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; error|string(uri)|false|none|An absolute URI that identifies the error type|
|&nbsp;&nbsp;&nbsp;&nbsp; error_description|string|false|none|A short, summary of the error type|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string||none|

<!-- END responses.def -->

<h1 id="niagara-authentication-api-oauth">oAuth</h1>

## Operations

### GET /oauth/authorize - *Authorization Code Grant*

<a id="opIdauthorize"></a>

*Authorization Code Grant*

<h3 id="authorize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|true|The client_id is the identifier for your app|
|response_type|query|string|true|response_type is set to code indicating that you want an authorization code as the response|
|redirect_uri|query|string|false|This is the URL to which you want the user to be redirected after the authorization is complete|
|state|query|string|false|This gives your app a chance to persist data between the user being directed to the authorization server and back again, such as using the state parameter as a session key|
|login_hint|query|string|false|If the client_id supports SSO, this parameter will pass along to the SSO service|

<!-- START responses.def -->

<h3 id="authorize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|[Found](https://tools.ietf.org/html/rfc7231#section-6.4.3)|Authorization endpoint for oauth|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

> Example responses

> 400 Response

```json
{
  "title": "Bad Request",
  "allOf": [
    {
      "type": "object",
      "description": "oAuth Error",
      "properties": {
        "error": {
          "type": "string",
          "format": "uri",
          "enum": [
            "client_id",
            "access_denied",
            "invalid_request",
            "unauthorized_client",
            "unsupported_response_type",
            "invalid_scope",
            "server_error",
            "temporarily_unavailable"
          ],
          "description": "An absolute URI that identifies the error type",
          "example": "https://docs.nterprise.com/problem/constraint-violation"
        },
        "error_description": {
          "type": "string",
          "description": "A short, summary of the error type"
        }
      }
    }
  ]
}
```

<h3 id="authorize-responseschema">Response Schema</h3>

Status Code **400**

*Bad Request*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; error|string(uri)|false|none|An absolute URI that identifies the error type|
|&nbsp;&nbsp;&nbsp;&nbsp; error_description|string|false|none|A short, summary of the error type|

Status Code **404**

*Not Found*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; error|string(uri)|false|none|An absolute URI that identifies the error type|
|&nbsp;&nbsp;&nbsp;&nbsp; error_description|string|false|none|A short, summary of the error type|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string||none|

<!-- END responses.def -->

### POST /oauth/token - *OAuth code exchange*

<a id="opIdfetchToken"></a>

*OAuth code exchange*

Fetches the current user information

> Body parameter

<!-- START responses.def -->

<h3 id="fetchtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Entry point for the application|Inline|

> Example responses

> 200 Response

```json
{
  "description": "OAuth Token",
  "properties": {
    "access_token": {
      "description": "OAuth 2 Access token",
      "type": "string",
      "example": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ6b25lcyIsIm5hbWUiOiJKb2huIERvZSIsImlzcyI6MTIzNDU2NywiZXhwIjo5ODc2NTQzMjEsInByb2ZpbGUiOiJodHRwczovL2FwaS5udGVycHJpc2UuY29tL3VzZXJzL2NodWNrLXJlZXZlcyIsInBpY3R1cmUiOiJodHRwczovL2FwaS5udGVycHJpc2UuY29tL3VzZXJzL2NodWNrLXJlZXZlcy9wcm9maWxlIiwiZW1haWwiOiJjaHVjay5yZWV2ZXNAem9uZXMuY29tIn0.IukJ2MkkvcyabB-c4ZbycO4SAXKzn81OvrYlUDoVbL0"
    },
    "refresh_token": {
      "description": "OAuth 2 Access token",
      "type": "string"
    },
    "token_type": {
      "description": "OAuth 2 Token type",
      "type": "string",
      "example": "Bearer"
    },
    "expires_in": {
      "description": "OAuth 2 Expires time",
      "type": "number",
      "format": "int32",
      "example": 123456789
    }
  }
}
```

<h3 id="fetchtoken-responseschema">Response Schema</h3>

Status Code **200**

*OAuth Token*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; access_token|string|false|none|OAuth 2 Access token|
|&nbsp;&nbsp;&nbsp;&nbsp; refresh_token|string|false|none|OAuth 2 Access token|
|&nbsp;&nbsp;&nbsp;&nbsp; token_type|string|false|none|OAuth 2 Token type|
|&nbsp;&nbsp;&nbsp;&nbsp; expires_in|number(int32)|false|none|OAuth 2 Expires time|

<!-- END responses.def -->

### DELETE /oauth/token - *Revoke token*

<a id="opIddeleteToken"></a>

*Revoke token*

<!-- START responses.def -->

<h3 id="deletetoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|[Found](https://tools.ietf.org/html/rfc7231#section-6.4.3)|Authorization endpoint for oauth|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

> Example responses

> 400 Response

```json
{
  "title": "Bad Request",
  "allOf": [
    {
      "type": "object",
      "description": "oAuth Error",
      "properties": {
        "error": {
          "type": "string",
          "format": "uri",
          "enum": [
            "client_id",
            "access_denied",
            "invalid_request",
            "unauthorized_client",
            "unsupported_response_type",
            "invalid_scope",
            "server_error",
            "temporarily_unavailable"
          ],
          "description": "An absolute URI that identifies the error type",
          "example": "https://docs.nterprise.com/problem/constraint-violation"
        },
        "error_description": {
          "type": "string",
          "description": "A short, summary of the error type"
        }
      }
    }
  ]
}
```

<h3 id="deletetoken-responseschema">Response Schema</h3>

Status Code **400**

*Bad Request*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; error|string(uri)|false|none|An absolute URI that identifies the error type|
|&nbsp;&nbsp;&nbsp;&nbsp; error_description|string|false|none|A short, summary of the error type|

Status Code **404**

*Not Found*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; error|string(uri)|false|none|An absolute URI that identifies the error type|
|&nbsp;&nbsp;&nbsp;&nbsp; error_description|string|false|none|A short, summary of the error type|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string||none|

<!-- END responses.def -->

# Embedded Schemas

## Problem
<!-- backwards compatibility -->
<a id="schemaproblem"></a>
<a id="schema_Problem"></a>
<a id="tocSproblem"></a>
<a id="tocsproblem"></a>

oAuth Error

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string(uri)|false|none|An absolute URI that identifies the error type|
|error_description|string|false|none|A short, summary of the error type|

#### Specification

```yaml
type: object
description: oAuth Error
properties:
  error:
    type: string
    format: uri
    enum:
      - client_id
      - access_denied
      - invalid_request
      - unauthorized_client
      - unsupported_response_type
      - invalid_scope
      - server_error
      - temporarily_unavailable
    description: An absolute URI that identifies the error type
    example: https://docs.nterprise.com/problem/constraint-violation
  error_description:
    type: string
    description: A short, summary of the error type

```

## Token
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

OAuth Token

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|OAuth 2 Access token|
|refresh_token|string|false|none|OAuth 2 Access token|
|token_type|string|false|none|OAuth 2 Token type|
|expires_in|number(int32)|false|none|OAuth 2 Expires time|

#### Specification

```yaml
description: OAuth Token
properties:
  access_token:
    description: OAuth 2 Access token
    type: string
    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ6b25lcyIsIm5hbWUiOiJKb2huIERvZSIsImlzcyI6MTIzNDU2NywiZXhwIjo5ODc2NTQzMjEsInByb2ZpbGUiOiJodHRwczovL2FwaS5udGVycHJpc2UuY29tL3VzZXJzL2NodWNrLXJlZXZlcyIsInBpY3R1cmUiOiJodHRwczovL2FwaS5udGVycHJpc2UuY29tL3VzZXJzL2NodWNrLXJlZXZlcy9wcm9maWxlIiwiZW1haWwiOiJjaHVjay5yZWV2ZXNAem9uZXMuY29tIn0.IukJ2MkkvcyabB-c4ZbycO4SAXKzn81OvrYlUDoVbL0
  refresh_token:
    description: OAuth 2 Access token
    type: string
  token_type:
    description: OAuth 2 Token type
    type: string
    example: Bearer
  expires_in:
    description: OAuth 2 Expires time
    type: number
    format: int32
    example: 123456789

```

