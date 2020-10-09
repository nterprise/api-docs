---
layout: page
parent: Niagara API
nav_order: 17
title: Settings
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="settings">Settings</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Sets tenant wide settings

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|tenant:settings|Allows changing settings for the tenant|
|tenant:read|Allows reading the tenant data|

<h1 id="settings-settings">Settings</h1>

## Operations

### GET /settings/statuses

<a id="opIdfetchAllStatuses"></a>

Fetches all the statuses configured for the tenant

<aside class="warning">
Permissions required:<br>
<ul><li>tenant:read</li></ul>
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

### POST /settings/statuses

<a id="opIdcreateStatus"></a>

Creates a new status

<aside class="warning">
Permissions required:<br>
<ul><li>tenant:settings</li></ul>
</aside>

> Body parameter

<h3 id="createstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|body|string|true|A Custom label for the status|
|category|body|string|true|The classifier for the statues|
|description|body|string¦null|false|A description for the status|
|order|body|number|false|Order status appears when listing|

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
type: object
description: Defines the properties for a status
additionalProperties: false
required:
  - status
  - category
properties:
  status:
    type: string
    description: A Custom label for the status
    pattern: ^[A-Za-z][0-9a-zA-Z-_ ]+$
  category:
    type: string
    description: The classifier for the statues
    enum:
      - PENDING
      - IN_PROGRESS
      - VERIFYING
      - COMPLETE
      - CANCELLED
      - BLOCKED
  description:
    type: string
    nullable: true
    description: A description for the status
  order:
    type: number
    description: Order status appears when listing

```

