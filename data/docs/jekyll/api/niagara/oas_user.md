---
layout: page
parent: Niagara API
nav_order: 19
redirect_from:
  - /rel/users
  - /rel/user
  - /rel/note-created-by
title: Users
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="users">Users</h1>

* Do not remove this line (it will not be displayed)
{:toc}

nterprise niagara is a multi-tenant project management application, and each tenant determines its own methods for authentication and authorization.  

Internal users (employees) may be authenticated through their corporate directory (e.g. Active Directory) single sign-on.  On first sign-in, users may be asked to provide additional information to optimize their nterprise experience.

External users, such as customer representatives, partner employees, and subcontractors need to be created in the application before they will be able to sign in.  The administrator creating the accounts may provide all relevant information, or elect to complete the minimum for sign-in, and leave the remainder to be completed by the user on first sign-in.  

Tenants that do not maintain a corporate directory, or cannot share the directory with nterpise, will need to create accounts for all users, internal as well as external.

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|user:create|Allows creating a user|
|user:update|Allows editing a user|
|user:delete|Allows deleting a user|
|user:read|Allows access to a user|
|user:all|Allows reading all users|

<h1 id="users-user">User</h1>

## Operations

### GET /users

<a id="opIdfetchAllUsers"></a>

Fetches A Page of users

<aside class="warning">
Permissions required:<br>
<ul><li>user:read-all</li></ul>
</aside>

<h3 id="fetchallusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|

> Example responses

> 200 Response

```json
{
  "total_count": 21,
  "limit": 42,
  "offset": "next-offset",
  "_embedded": {
    "nter:users": [
      {
        "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
        "created": "2019-08-19T00:01:02.639Z",
        "updated": "2019-08-19T00:01:02.639Z",
        "name": "Daniel Jackson",
        "email": "daniel.jackson@niagara.com",
        "profile": "https://bit.ly/18gECvy",
        "picture": "https://bit.ly/18gECvy",
        "_links": {
          "self": {
            "href": "https://api.nterprise.com/users/3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/users?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/users?limit=42"
    }
  }
}
```

### POST /users

<a id="opIdcreateUser"></a>

Creates a new user

<aside class="warning">
Permissions required:<br>
<ul><li>user:read-all</li></ul>
</aside>

> Body parameter

<h3 id="createuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|body|string(email)|true|Email address|
|name|body|string|false|Human readable name|
|picture|body|string¦null|false|Image for the user|
|profile|body|string¦null|false|Link to the users profile|
|user_attributes|body|[object]|false|Array of user attributes|
|&nbsp;&nbsp; key|body|string|true|Attribute Key|
|&nbsp;&nbsp; value|body|string|true|Attribute value|

> Example responses

> 200 Response

```json
{
  "total_count": 21,
  "limit": 42,
  "offset": "next-offset",
  "_embedded": {
    "nter:users": [
      {
        "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
        "created": "2019-08-19T00:01:02.639Z",
        "updated": "2019-08-19T00:01:02.639Z",
        "name": "Daniel Jackson",
        "email": "daniel.jackson@niagara.com",
        "profile": "https://bit.ly/18gECvy",
        "picture": "https://bit.ly/18gECvy",
        "_links": {
          "self": {
            "href": "https://api.nterprise.com/users/3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/users?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/users?limit=42"
    }
  }
}
```

### GET /users/{user_id}

<a id="opIdfetchUserById"></a>

Fetches a user by the user Id

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchuserbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Id of the user|

> Example responses

> 200 Response

```json
{
  "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
  "created": "2019-08-19T00:01:02.639Z",
  "updated": "2019-08-19T00:01:02.639Z",
  "name": "Daniel Jackson",
  "email": "daniel.jackson@niagara.com",
  "profile": "https://bit.ly/18gECvy",
  "picture": "https://bit.ly/18gECvy",
  "user_attributes": [
    {
      "key": "employement_status",
      "value": "active"
    }
  ],
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/users/3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
    }
  }
}
```

### PUT /users/{user_id}

<a id="opIdupdateUser"></a>

Updates a new user following the user schema

<aside class="warning">
Permissions required:<br>

</aside>

> Body parameter

<h3 id="updateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Id of the user|
|email|body|string(email)|true|Email address|
|name|body|string|false|Human readable name|
|picture|body|string¦null|false|Image for the user|
|profile|body|string¦null|false|Link to the users profile|
|user_attributes|body|[object]|false|Array of user attributes|
|&nbsp;&nbsp; key|body|string|true|Attribute Key|
|&nbsp;&nbsp; value|body|string|true|Attribute value|

> Example responses

> 200 Response

```json
{
  "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
  "created": "2019-08-19T00:01:02.639Z",
  "updated": "2019-08-19T00:01:02.639Z",
  "name": "Daniel Jackson",
  "email": "daniel.jackson@niagara.com",
  "profile": "https://bit.ly/18gECvy",
  "picture": "https://bit.ly/18gECvy",
  "user_attributes": [
    {
      "key": "employement_status",
      "value": "active"
    }
  ],
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/users/3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
    }
  }
}
```

### DELETE /users/{user_id}

<a id="opIddeleteUser"></a>

This will remove the user from the system

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="deleteuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Id of the user|

<h1 id="users-action">Action</h1>

## Operations

### GET /users/{user_id}/actions

<a id="opIdfetchActionsForUser"></a>

Fetch a page of actions for a user

<aside class="warning">
Permissions required:<br>
<ul><li>action:read</li></ul>
</aside>

<h3 id="fetchactionsforuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Id of the user|

> Example responses

> 200 Response

```json
{
  "total_count": 21,
  "limit": 42,
  "offset": "next-offset",
  "_embedded": {
    "nter:batches": [
      {
        "action_id": "action",
        "label": "Update status when workflow starts",
        "created": "2019-08-19T00:01:02.000Z",
        "updated": "2020-08-19T01:01:02.000Z",
        "event": "WOR.status-changed",
        "entity": {
          "entity_type": "CUS",
          "entity_id": "customer"
        },
        "order": "a",
        "sequence": "after",
        "criteria": [
          {
            "entity": "WOR",
            "property": "current_status",
            "operator": "equals",
            "value": {
              "status": "Completed",
              "category": "COMPLETE"
            }
          }
        ],
        "effect": [
          {
            "effect_type": "notify",
            "contacts": [
              "contact_one",
              "contact_two"
            ],
            "label": "Work order complete",
            "message": "A work order has completed",
            "severity": "normal"
          }
        ],
        "_links": {
          "self": {
            "href": "https://api.nterprise.com/actions/action"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/actions?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/actions?limit=42"
    }
  }
}
```

### POST /users/{user_id}/actions

<a id="opIdcreateActionForUser"></a>

Creates a new action

<aside class="warning">
Permissions required:<br>
<ul><li>action:create</li></ul>
</aside>

> Body parameter

<h3 id="createactionforuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Id of the user|
|label|body|string|true|Label for the entity|
|entity|body|object|true|Entity the action is configured for|
|&nbsp;&nbsp; entity_id|body|string|false|Entity identifier|
|&nbsp;&nbsp; entity_type|body|any|false|none|
|sequence|body|string|true|When the action should fire|
|event|body|string|true|Possible entity events|
|criteria|body|[object]|true|none|
|&nbsp;&nbsp; entity|body|any|true|none|
|&nbsp;&nbsp; property|body|string|true|Property on entity|
|&nbsp;&nbsp; operator|body|string|true|Operation to perform|
|&nbsp;&nbsp; value|body|string|false|The value to compare|
|effect|body|[anyOf]|true|Effect to apply|
|&nbsp;&nbsp; *anonymous*|body|object|false|Effect which notifies a user|
|&nbsp;&nbsp;&nbsp;&nbsp; effect_type|body|string|true|Name of the effect type|
|&nbsp;&nbsp;&nbsp;&nbsp; contacts|body|[string]|true|List of contacts to notify|
|&nbsp;&nbsp;&nbsp;&nbsp; label|body|string|true|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp; message|body|string|true|The message|
|&nbsp;&nbsp;&nbsp;&nbsp; severity|body|string|true|Severity of the notification|
|&nbsp;&nbsp; *anonymous*|body|object|false|Effect which notifies a user|
|&nbsp;&nbsp;&nbsp;&nbsp; entity|body|any|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; property|body|string|true|Entity property to update|
|&nbsp;&nbsp;&nbsp;&nbsp; value|body|string|true|Value to set|

> Example responses

> 200 Response

```json
{
  "action_id": "action",
  "label": "Update status when workflow starts",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "event": "WOR.status-changed",
  "entity": {
    "entity_type": "CUS",
    "entity_id": "customer"
  },
  "order": "a",
  "sequence": "after",
  "criteria": [
    {
      "entity": "WOR",
      "property": "current_status",
      "operator": "equals",
      "value": {
        "status": "Completed",
        "category": "COMPLETE"
      }
    }
  ],
  "effect": [
    {
      "effect_type": "notify",
      "contacts": [
        "contact_one",
        "contact_two"
      ],
      "label": "Work order complete",
      "message": "A work order has completed",
      "severity": "normal"
    }
  ],
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/actions/action"
    }
  }
}
```

# Embedded Schemas

## User
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|The identifier for the user|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|email|string(email)|true|none|Email address|
|name|string|true|none|Human readable name|
|picture|string¦null|false|none|Image for the user|
|profile|string¦null|false|none|Link to the users profile|
|user_attributes|[object]|false|none|Array of user attributes|
|&nbsp;&nbsp; key|string|true|none|Attribute Key|
|&nbsp;&nbsp; value|string|true|none|Attribute value|
|notification|object|false|none|Count of notifications for the user|
|&nbsp;&nbsp; read|number|false|none|Number of read messages|
|&nbsp;&nbsp; unread|number|false|none|Number of un-read messages|
|&nbsp;&nbsp; archived|number|false|none|Number of archived messages|

#### Specification

```yaml
type: object
required:
  - updated
  - created
  - email
  - name
  - user_id
properties:
  user_id:
    type: string
    description: The identifier for the user
    pattern: ^[0-9a-zA-Z-_]+$
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
  email:
    type: string
    format: email
    description: Email address
  name:
    type: string
    description: Human readable name
  picture:
    type: string
    nullable: true
    description: Image for the user
  profile:
    type: string
    nullable: true
    description: Link to the users profile
  user_attributes:
    type: array
    description: Array of user attributes
    items:
      type: object
      description: User Attribute
      maxItems: 15
      required:
        - key
        - value
      properties:
        key:
          description: Attribute Key
          type: string
        value:
          description: Attribute value
          type: string
  notification:
    type: object
    description: Count of notifications for the user
    properties:
      read:
        type: number
        description: Number of read messages
      unread:
        type: number
        description: Number of un-read messages
      archived:
        type: number
        description: Number of archived messages

```

