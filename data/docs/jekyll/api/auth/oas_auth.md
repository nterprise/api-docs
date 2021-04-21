---
layout: page
nav_order: 1
title: Niagara Authentication API
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="niagara-authentication-api">Niagara Authentication API</h1>

* Do not remove this line (it will not be displayed)
{:toc}

OAuth authentication for the niagara API

<h1 id="niagara-authentication-api-elevio">Elevio</h1>

## Operations

### GET /elevio/sign-in

<a id="opIdelevioSignin"></a>

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="eleviosignin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_url|query|string|true|The url to return back to elevio|

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

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string||none|

### GET /elevio/verify

<a id="opIdelevioVerify"></a>

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="elevioverify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|query|string|true|oAuth Access code|
|state|query|string|true|State parameter|

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

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string||none|

<h1 id="niagara-authentication-api-oauth">oAuth</h1>

## Operations

### GET /oauth/authorize

<a id="opIdauthorize"></a>

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="authorize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|true|The client_id is the identifier for your app|
|response_type|query|string|true|response_type is set to code indicating that you want an authorization code as the response|
|redirect_uri|query|string|false|This is the URL to which you want the user to be redirected after the authorization is complete|
|state|query|string|false|This gives your app a chance to persist data between the user being directed to the authorization server and back again, such as using the state parameter as a session key|
|login_hint|query|string|false|If the client_id supports SSO, this parameter will pass along to the SSO service|

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

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string||none|

### POST /oauth/token

<a id="opIdfetchToken"></a>

Fetches the current user information

<aside class="success">
This operation does not require authentication
</aside>

> Body parameter

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

### DELETE /oauth/token

<a id="opIddeleteToken"></a>

<aside class="warning">
Permissions required:<br>

</aside>

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

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string||none|

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

