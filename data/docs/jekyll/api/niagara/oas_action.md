---
layout: page
parent: Niagara API
nav_order: 0
redirect_from:
  - /rel/actions
title: Actions
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="actions">Actions</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Actions

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|action:create|Allows creating a action (for an entity)|
|action:create-global|Allows creating an action anywhere|
|action:update|Allows editing a action|
|action:delete|Allows deleting a action|
|action:read|Allows access to a action (for an entity)|
|action:read-all|Allows reading all actions|

<h1 id="actions-action">Action</h1>

## Operations

### GET /actions

<a id="opIdfetchActions"></a>

Fetch a page of actions

<aside class="warning">
Permissions required:<br>
<ul><li>action:all</li></ul>
</aside>

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

### POST /actions

<a id="opIdcreateAction"></a>

Creates a new action

<aside class="warning">
Permissions required:<br>
<ul><li>action:create-global</li></ul>
</aside>

> Body parameter

<h3 id="createaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Label for the entity|
|entity|body|object|true|Entity the action is configured for|
|&nbsp;&nbsp; entity_id|body|string|true|Entity identifier|
|&nbsp;&nbsp; entity_type|body|any|true|none|
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
|&nbsp;&nbsp;&nbsp;&nbsp; options|body|object|true|Options for the effect|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; contacts|body|[string]|true|List of contacts to notify|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|body|string|true|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; message|body|string|true|The message|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; severity|body|string|true|Severity of the notification|
|&nbsp;&nbsp; *anonymous*|body|object|false|Effect which notifies a user|
|&nbsp;&nbsp;&nbsp;&nbsp; effect_type|body|string|true|Name of the effect type|
|&nbsp;&nbsp;&nbsp;&nbsp; options|body|object|true|Options for the effect|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity|body|any|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; property|body|string|true|Entity property to update|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; value|body|string|true|Value to set|

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

### GET /actions/{action_id}

<a id="opIdgetAction"></a>

Fetch information regarding an action

<aside class="warning">
Permissions required:<br>
<ul><li>action:read</li></ul>
</aside>

<h3 id="getaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action_id|path|string|true|Id of the action|

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

## Action
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action_id|string|false|read-only|Identifier for the Action|
|label|string|false|none|Label for the entity|
|created|string(date-time)|false|read-only|Date the entity was created|
|updated|string(date-time)|false|read-only|Last date the entity was updated|
|order|string|false|none|Order to process the action|
|entity|object|false|none|Entity the action is configured for|
|&nbsp;&nbsp; entity_id|string|true|read-only|Entity identifier|
|&nbsp;&nbsp; entity_type|any|true|none|none|
|sequence|string|false|none|When the action should fire|
|event|string|false|none|Possible entity events|
|criteria|[object]|false|none|none|
|&nbsp;&nbsp; entity|any|true|none|none|
|&nbsp;&nbsp; property|string|true|none|Property on entity|
|&nbsp;&nbsp; operator|string|true|none|Operation to perform|
|&nbsp;&nbsp; value|string|false|none|The value to compare|
|effect|[anyOf]|false|none|Effect to apply|

#### Specification

```yaml
type: object
properties:
  action_id:
    description: Identifier for the Action
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
  order:
    type: string
    description: Order to process the action
  entity:
    type: object
    additionalProperties: false
    description: Entity the action is configured for
    required:
      - entity_id
      - entity_type
    properties:
      entity_id:
        type: string
        description: Entity identifier
        readOnly: true
        pattern: ^[0-9a-zA-Z-_]+$
      entity_type:
        enum:
          - ACT
          - BAT
          - CON
          - CTX
          - CUS
          - FILE
          - LOC
          - MFR
          - NOTE
          - PART
          - PGM
          - PRJ
          - PUSH
          - QUE
          - RES
          - ROLE
          - SRES
          - UNIT
          - USER
          - VEN
          - WKF
          - WOR
  sequence:
    type: string
    description: When the action should fire
    enum:
      - before
      - after
    default: before
  event:
    type: string
    description: Possible entity events
    enum:
      - CON.created
      - CON.changed
      - CON.deleted
      - CON.removed
      - CON.relation-added
      - CON.relation-removed
      - CTX.created
      - CTX.changed
      - CTX.deleted
      - CTX.removed
      - CTX.relation-added
      - CTX.relation-removed
      - CTX.step-completed
      - CTX.step-saved
      - CUS.created
      - CUS.changed
      - CUS.deleted
      - CUS.removed
      - CUS.relation-added
      - CUS.relation-removed
      - LOC.created
      - LOC.changed
      - LOC.deleted
      - LOC.removed
      - LOC.relation-added
      - LOC.relation-removed
      - NOTE.created
      - NOTE.deleted
      - NOTE.removed
      - NOTE.changed
      - NOTE.relation-added
      - NOTE.relation-removed
      - PART.created
      - PART.changed
      - PART.deleted
      - PART.removed
      - PART.relation-added
      - PART.relation-removed
      - PGM.created
      - PGM.changed
      - PGM.deleted
      - PGM.removed
      - PGM.relation-added
      - PGM.relation-removed
      - PGM.moved-from
      - PGM.moved-to
      - PRJ.created
      - PRJ.changed
      - PRJ.deleted
      - PRJ.removed
      - PRJ.relation-added
      - PRJ.relation-removed
      - PRJ.moved-from
      - PRJ.moved-to
      - RES.created
      - RES.changed
      - RES.deleted
      - RES.removed
      - RES.relation-added
      - RES.relation-removed
      - RES.moved-from
      - RES.moved-to
      - SRES.created
      - SRES.changed
      - SRES.deleted
      - SRES.removed
      - SRES.relation-added
      - SRES.relation-removed
      - SRES.moved-from
      - SRES.moved-to
      - UNIT.created
      - UNIT.changed
      - UNIT.deleted
      - UNIT.removed
      - UNIT.relation-added
      - UNIT.relation-removed
      - UNIT.location-changed
      - UNIT.resource-changed
      - UNIT.moved-from
      - UNIT.moved-to
      - USER.created
      - USER.changed
      - USER.deleted
      - USER.removed
      - USER.relation-added
      - USER.relation-removed
      - WKF.created
      - WKF.changed
      - WKF.deleted
      - WKF.removed
      - WKF.relation-added
      - WKF.relation-removed
      - WOR.created
      - WOR.changed
      - WOR.deleted
      - WOR.removed
      - WOR.relation-added
      - WOR.relation-removed
      - WOR.location-changed
      - WOR.moved-from
      - WOR.moved-to
  criteria:
    type: array
    maxItems: 10
    items:
      type: object
      additionalProperties: false
      required:
        - entity
        - property
        - operator
      properties:
        entity:
          enum:
            - ACT
            - BAT
            - CON
            - CTX
            - CUS
            - FILE
            - LOC
            - MFR
            - NOTE
            - PART
            - PGM
            - PRJ
            - PUSH
            - QUE
            - RES
            - ROLE
            - SRES
            - UNIT
            - USER
            - VEN
            - WKF
            - WOR
        property:
          type: string
          description: Property on entity
        operator:
          type: string
          description: Operation to perform
          enum:
            - equals
            - not_equals
            - is_null
        value:
          type: string
          description: The value to compare
  effect:
    type: array
    description: Effect to apply
    maxItems: 10
    minItems: 1
    items:
      anyOf:
        - type: object
          description: Effect which notifies a user
          additionalProperties: false
          required:
            - effect_type
            - options
          properties:
            effect_type:
              type: string
              description: Name of the effect type
              enum:
                - notify
            options:
              type: object
              additionalProperties: false
              description: Options for the effect
              required:
                - contacts
                - label
                - message
                - severity
              properties:
                contacts:
                  type: array
                  description: List of contacts to notify
                  maxItems: 10
                  items:
                    description: Identifier for the contact
                    type: string
                    readOnly: true
                    pattern: ^[0-9a-zA-Z-_]+$
                label:
                  type: string
                  description: Label for the entity
                message:
                  type: string
                  description: The message
                severity:
                  type: string
                  description: Severity of the notification
                  enum:
                    - normal
                    - issue
                    - resolved
        - type: object
          description: Effect which notifies a user
          additionalProperties: false
          required:
            - effect_type
            - options
          properties:
            effect_type:
              type: string
              description: Name of the effect type
              enum:
                - notify
            options:
              type: object
              additionalProperties: false
              description: Options for the effect
              required:
                - entity
                - property
                - value
              properties:
                entity:
                  enum:
                    - ACT
                    - BAT
                    - CON
                    - CTX
                    - CUS
                    - FILE
                    - LOC
                    - MFR
                    - NOTE
                    - PART
                    - PGM
                    - PRJ
                    - PUSH
                    - QUE
                    - RES
                    - ROLE
                    - SRES
                    - UNIT
                    - USER
                    - VEN
                    - WKF
                    - WOR
                property:
                  type: string
                  description: Entity property to update
                value:
                  type: string
                  description: Value to set

```

