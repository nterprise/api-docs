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
<ul><li>tenant:search</li></ul>
</aside>

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "nter:settings-statuses": [
      {
        "category": "PENDING",
        "description": "For something that is Pending",
        "status": "Pending",
        "order": 3
      },
      {
        "category": "IN_PROGRESS",
        "description": "For something that is In Progress",
        "status": "In Progress",
        "order": 4
      },
      {
        "category": "VERIFYING",
        "description": "For something that is Verifying",
        "status": "Verifying",
        "order": 5
      },
      {
        "category": "BLOCKED",
        "description": "For something that is Blocked",
        "status": "Blocked",
        "order": 6
      },
      {
        "category": "COMPLETE",
        "description": "For something that is Complete",
        "status": "Complete",
        "order": 7
      },
      {
        "category": "CANCELLED",
        "description": "For something that is Cancelled",
        "status": "Cancelled",
        "order": 8
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/settings/statuses"
    }
  }
}
```

# Embedded Schemas

## Status
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

Defines the properties for a status

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|A Custom label for the status|
|category|string|true|none|The classifier for the statues|
|description|string¦null|false|none|A description for the status|
|order|number|false|none|Order status appears when listing|

#### Specification

```yaml
category: COMPLETE
description: For something that is Complete
status: Complete
order: 7

```

