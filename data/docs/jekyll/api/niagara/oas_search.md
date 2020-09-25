---
layout: page
parent: Niagara API
nav_order: 16
title: Search
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="search">Search</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Search for entities across the tenant

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|search|Allows changing settings for the tenant|
|tenant:read|Allows reading the tenant data|

<h1 id="search-search">Search</h1>

## Operations

### GET /search

<a id="opIdsearch"></a>

Search

<aside class="warning">
Permissions required:<br>
<ul><li>search</li></ul>
</aside>

<h3 id="search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|Simple Search term|

> Example responses

> 200 Response

```json
{
  "data": {
    "hits": {
      "hits": [
        {
          "_source": {
            "entity_type": "CUS",
            "entity_id": "one"
          }
        }
      ]
    }
  }
}
```

