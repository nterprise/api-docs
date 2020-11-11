---
layout: page
parent: Niagara API
nav_order: 15
redirect_from:
  - /rel/roles
  - /rel/role
title: Roles
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="roles">Roles</h1>

* Do not remove this line (it will not be displayed)
{:toc}

In FTM and CIMS, permissions were explicitly granted to individual users on specific projects.  Niagara takes a different approach; first assigning each user to a Role with inherent permissions, and then assigning users additional permissions on specific objects (customers, programs, projects, etc) on an as-needed basis.

<h1 id="roles-role">Role</h1>

## Operations

### GET /roles

<a id="opIdfetchAllRoles"></a>

Fetches A Page of roles

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="fetchallroles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|

> Example responses

> 200 Response

```json
{
  "role_id": "role",
  "created": "2020-01-09T22:12:03.000Z",
  "updated": "2020-01-09T22:12:03.000Z",
  "label": "TSC Manager",
  "description": "Manages technicians and production queues",
  "total_users": 42,
  "grants": [
    {
      "permission": "create:USER",
      "label": "Create users",
      "match_location": true
    },
    {
      "permission": "delete:WOR",
      "label": "Delete work-orders",
      "match_location": true
    },
    {
      "permission": "update:WOR",
      "label": "Update work-orders",
      "match_location": false
    },
    {
      "permission": "create:PART",
      "label": "Create parts",
      "match_location": false
    }
  ],
  "_links": {
    "nter:role-users": {
      "href": "https://api.nterprise.com/roles/role/users"
    },
    "self": {
      "href": "https://api.nterprise.com/roles/role"
    }
  }
}
```

### POST /roles

<a id="opIdcreateRole"></a>

Creates a new role

<aside class="success">
This operation does not require authentication
</aside>

> Body parameter

<h3 id="createrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Label for the entity|
|description|body|string¦null|true|Custom description for the role|
|grants|body|[object]|true|Permissions granted to this role|
|&nbsp;&nbsp; permission|body|string|true|The granted permission|
|&nbsp;&nbsp; label|body|string|true|Label for the entity|
|&nbsp;&nbsp; match_location|body|boolean|true|The user must be located at this location to access this entity|

> Example responses

> 200 Response

```json
{
  "role_id": "role",
  "created": "2020-01-09T22:12:03.000Z",
  "updated": "2020-01-09T22:12:03.000Z",
  "label": "TSC Manager",
  "description": "Manages technicians and production queues",
  "total_users": 42,
  "grants": [
    {
      "permission": "create:USER",
      "label": "Create users",
      "match_location": true
    },
    {
      "permission": "delete:WOR",
      "label": "Delete work-orders",
      "match_location": true
    },
    {
      "permission": "update:WOR",
      "label": "Update work-orders",
      "match_location": false
    },
    {
      "permission": "create:PART",
      "label": "Create parts",
      "match_location": false
    }
  ],
  "_links": {
    "nter:role-users": {
      "href": "https://api.nterprise.com/roles/role/users"
    },
    "self": {
      "href": "https://api.nterprise.com/roles/role"
    }
  }
}
```

### GET /roles/{role_id}

<a id="opIdfetchRoleById"></a>

Fetches a role by the role Id

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="fetchrolebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role_id|path|string|true|Id of the role|

> Example responses

> 200 Response

```json
{
  "role_id": "role",
  "created": "2020-01-09T22:12:03.000Z",
  "updated": "2020-01-09T22:12:03.000Z",
  "label": "TSC Manager",
  "description": "Manages technicians and production queues",
  "total_users": 42,
  "grants": [
    {
      "permission": "create:USER",
      "label": "Create users",
      "match_location": true
    },
    {
      "permission": "delete:WOR",
      "label": "Delete work-orders",
      "match_location": true
    },
    {
      "permission": "update:WOR",
      "label": "Update work-orders",
      "match_location": false
    },
    {
      "permission": "create:PART",
      "label": "Create parts",
      "match_location": false
    }
  ],
  "_links": {
    "nter:role-users": {
      "href": "https://api.nterprise.com/roles/role/users"
    },
    "self": {
      "href": "https://api.nterprise.com/roles/role"
    }
  }
}
```

### PUT /roles/{role_id}

<a id="opIdupdateRole"></a>

Updates a new role following the role schema

<aside class="success">
This operation does not require authentication
</aside>

> Body parameter

<h3 id="updaterole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role_id|path|string|true|Id of the role|
|label|body|string|true|Label for the entity|
|description|body|string¦null|true|Custom description for the role|
|grants|body|[object]|true|Permissions granted to this role|
|&nbsp;&nbsp; permission|body|string|true|The granted permission|
|&nbsp;&nbsp; label|body|string|true|Label for the entity|
|&nbsp;&nbsp; match_location|body|boolean|true|The user must be located at this location to access this entity|

> Example responses

> 200 Response

```json
{
  "role_id": "role",
  "created": "2020-01-09T22:12:03.000Z",
  "updated": "2020-01-09T22:12:03.000Z",
  "label": "TSC Manager",
  "description": "Manages technicians and production queues",
  "total_users": 42,
  "grants": [
    {
      "permission": "create:USER",
      "label": "Create users",
      "match_location": true
    },
    {
      "permission": "delete:WOR",
      "label": "Delete work-orders",
      "match_location": true
    },
    {
      "permission": "update:WOR",
      "label": "Update work-orders",
      "match_location": false
    },
    {
      "permission": "create:PART",
      "label": "Create parts",
      "match_location": false
    }
  ],
  "_links": {
    "nter:role-users": {
      "href": "https://api.nterprise.com/roles/role/users"
    },
    "self": {
      "href": "https://api.nterprise.com/roles/role"
    }
  }
}
```

### DELETE /roles/{role_id}

<a id="opIddeleteRole"></a>

This will remove the role from the system

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="deleterole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role_id|path|string|true|Id of the role|

### GET /roles/{role_id}/users

<a id="opIdfetchAllRoleUsers"></a>

Fetches A Page of users for the role

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="fetchallroleusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role_id|path|string|true|Id of the role|
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

### POST /roles/{role_id}/users

<a id="opIdattachRoleUser"></a>

This will create the user along with linking it to the role. If a user is found based on the email address, this will just link the user to the role

<aside class="success">
This operation does not require authentication
</aside>

> Body parameter

<h3 id="attachroleuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role_id|path|string|true|Id of the role|
|user_id|body|string|true|The identifier for the user|

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

# Embedded Schemas

## Role
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role_id|string|true|read-only|Role identifier|
|label|string|true|none|Label for the entity|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|grants|[object]|true|none|Permissions granted to this role|
|&nbsp;&nbsp; permission|string|true|none|The granted permission|
|&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp; match_location|boolean|true|none|The user must be located at this location to access this entity|
|total_users|number|true|none|Number of users who have this role|

#### Specification

```yaml
type: object
x-model: Role
required:
  - updated
  - label
  - created
  - role_id
  - grants
  - total_users
properties:
  role_id:
    description: Role identifier
    type: string
    readOnly: true
    pattern: ^[0-9a-zA-Z-_]+$
  label:
    type: string
    description: Label for the entity
  created:
    type: string
    description: Date the entity was created
    format: date-time
    readOnly: true
  updated:
    type: string
    description: Last date the entity was updated
    format: date-time
    readOnly: true
  grants:
    type: array
    description: Permissions granted to this role
    minItems: 1
    uniqueItems: false
    items:
      type: object
      description: Permission
      additionalProperties: false
      required:
        - permission
        - label
        - match_location
      properties:
        permission:
          description: The granted permission
          type: string
          pattern: ^[a-z]+:[a-z\-]+$
        label:
          type: string
          description: Label for the entity
        match_location:
          type: boolean
          description: The user must be located at this location to access this entity
  total_users:
    type: number
    description: Number of users who have this role
    minimum: 0

```

