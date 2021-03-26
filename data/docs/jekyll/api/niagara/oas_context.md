---
layout: page
parent: Niagara API
nav_order: 5
title: contexts
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="contexts">contexts</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Context

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|context:create|Allows creating a context|
|context:update|Allows editing a context|
|context:delete|Allows deleting a context|
|context:read|Allows access to a context|
|context:all|Allows reading all contexts|

<h1 id="contexts-context">Context</h1>

## Operations

### GET /contexts/{context_id}

<a id="opIdfetchContextById"></a>

Fetches a context

<aside class="warning">
Permissions required:<br>
<ul><li>context:read</li></ul>
</aside>

<h3 id="fetchcontextbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context_id|path|string|true|Id for the context|

> Example responses

> 200 Response

```json
{
  "context_id": "context",
  "label": "context 44jjiue33 for customer: customer",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "workflow": {
    "work_flow_id": "work-flow",
    "label": "My workflow",
    "created": "2019-08-19T00:01:02.000Z",
    "updated": "2020-08-19T01:01:02.000Z",
    "workflow_version": 7,
    "schema_version": "1.0",
    "applies_to": "UNIT",
    "starts_at": "work-complete",
    "triggered_by": [
      "UNIT.created"
    ],
    "metadata": {
      "meta": "data"
    },
    "steps": {
      "work-complete": {
        "label": "work complete",
        "on_complete": [],
        "on_start": [],
        "step_type": "success"
      },
      "stop-poking-me": {
        "label": "stop poking me",
        "on_complete": [],
        "on_start": [],
        "step_type": "fail"
      }
    }
  },
  "current_steps": [
    "work-complete"
  ],
  "failed_steps": [
    {
      "step": "work-complete",
      "count": 2
    }
  ],
  "last_steps": [
    {
      "step_name": "work-complete",
      "started_at": "2020-08-19T01:01:02.000Z",
      "ended_at": "2020-08-19T01:01:02.000Z",
      "time_to_run": "42",
      "did_error": false,
      "did_timeout": false
    }
  ],
  "started_at": "2019-08-19T00:01:02.000Z",
  "ended_at": "2019-08-19T00:01:02.000Z",
  "time_to_run": 2,
  "active": false,
  "waiting_for_user": false,
  "data": {},
  "entity": {
    "entity_id": "customer",
    "entity_type": "CUS",
    "label": "Niagara Customer",
    "created": "2020-01-09T22:12:03.000Z",
    "updated": "2020-01-09T22:12:03.000Z",
    "total_programs": 21,
    "total_projects": 42,
    "allowed_statuses": [
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
    ],
    "input_filter": []
  },
  "using": {
    "entity_id": "customer",
    "entity_type": "CUS",
    "label": "Niagara Customer",
    "created": "2020-01-09T22:12:03.000Z",
    "updated": "2020-01-09T22:12:03.000Z",
    "external_platform": {},
    "total_programs": 21,
    "total_projects": 42,
    "allowed_statuses": [],
    "input_filter": []
  },
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/contexts/context"
    }
  }
}
```

### PATCH /contexts/{context_id}/{slug_id}

<a id="opIdcompleteStep"></a>

Completes a step for an active context

<aside class="warning">
Permissions required:<br>
<ul><li>context:step</li></ul>
</aside>

> Body parameter

<h3 id="completestep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context_id|path|string|true|Id for the context|
|close_step|body|any|false|none|
|&nbsp;&nbsp; *anonymous*|body|object|false|How to mark a step as failed|
|&nbsp;&nbsp;&nbsp;&nbsp; type|body|string|true|none|
|&nbsp;&nbsp; *anonymous*|body|object|false|Complete an ACE-IOS step|
|&nbsp;&nbsp;&nbsp;&nbsp; options|body|object|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; restore_device|body|boolean|false|Restore device to factory defaults|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; automated_enrollment|body|any|false|Automatically enroll the device to MDM|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|body|object|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; should_mdm_enroll|body|boolean|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mdm_enroll_user|body|string|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mdm_enroll_password|body|string|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|body|object|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; should_mdm_enroll|body|boolean|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fields|body|[object]|false|Field values to set|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; value|body|string|true|Value to set on 'entity_path'. Note: this MUST always be passed as a string. The input filter is responsible for transforming the value to the correct data type|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity_field|body|string|false|JSON Path to the field on the entity. If the path does not start with '$' then the entity on the context is assumed. Otherwise the data will be set on the context path|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; icon_layout|body|[string]|false|An ordered nested list of icons on the home screen.|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; installed_apps|body|[string]|false|A list of applications installed on the device.|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; battery_charge|body|integer|false|The current battery charge|
|&nbsp;&nbsp; *anonymous*|body|object|false|Complete the follow-pdf-instructions-step|
|&nbsp;&nbsp;&nbsp;&nbsp; attachment_id|body|string|true|The identifier for the batch|
|&nbsp;&nbsp; *anonymous*|body|object|false|Close|
|&nbsp;&nbsp;&nbsp;&nbsp; fields|body|[object]|true|Configuration for each field|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; value|body|string|true|Value to set on 'entity_path'. Note: this MUST always be passed as a string. The input filter is responsible for transforming the value to the correct data type|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity_field|body|string|false|JSON Path to the field on the entity. If the path does not start with '$' then the entity on the context is assumed. Otherwise the data will be set on the context path|
|&nbsp;&nbsp; *anonymous*|body|object|false|Close the task-list step|
|&nbsp;&nbsp;&nbsp;&nbsp; items|body|[object]|false|Configuration for each task list item|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; value|body|string¦null|true|Selects which item the user has selected|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; slug|body|string|true|Slug for the item (Auto-generated from the label)|
|&nbsp;&nbsp; *anonymous*|body|object|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; step|body|string|true|Step to mark as complete|
|&nbsp;&nbsp;&nbsp;&nbsp; type|body|string|true|Type of close function for step|

> Example responses

> 200 Response

```json
{
  "context_id": "context",
  "label": "context 44jjiue33 for customer: customer",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "workflow": {
    "work_flow_id": "work-flow",
    "label": "My workflow",
    "created": "2019-08-19T00:01:02.000Z",
    "updated": "2020-08-19T01:01:02.000Z",
    "workflow_version": 7,
    "schema_version": "1.0",
    "applies_to": "UNIT",
    "starts_at": "work-complete",
    "triggered_by": [
      "UNIT.created"
    ],
    "metadata": {
      "meta": "data"
    },
    "steps": {
      "work-complete": {
        "label": "work complete",
        "on_complete": [],
        "on_start": [],
        "step_type": "success"
      },
      "stop-poking-me": {
        "label": "stop poking me",
        "on_complete": [],
        "on_start": [],
        "step_type": "fail"
      }
    }
  },
  "current_steps": [
    "work-complete"
  ],
  "failed_steps": [
    {
      "step": "work-complete",
      "count": 2
    }
  ],
  "last_steps": [
    {
      "step_name": "work-complete",
      "started_at": "2020-08-19T01:01:02.000Z",
      "ended_at": "2020-08-19T01:01:02.000Z",
      "time_to_run": "42",
      "did_error": false,
      "did_timeout": false
    }
  ],
  "started_at": "2019-08-19T00:01:02.000Z",
  "ended_at": "2019-08-19T00:01:02.000Z",
  "time_to_run": 2,
  "active": false,
  "waiting_for_user": false,
  "data": {},
  "entity": {
    "entity_id": "customer",
    "entity_type": "CUS",
    "label": "Niagara Customer",
    "created": "2020-01-09T22:12:03.000Z",
    "updated": "2020-01-09T22:12:03.000Z",
    "total_programs": 21,
    "total_projects": 42,
    "allowed_statuses": [
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
    ],
    "input_filter": []
  },
  "using": {
    "entity_id": "customer",
    "entity_type": "CUS",
    "label": "Niagara Customer",
    "created": "2020-01-09T22:12:03.000Z",
    "updated": "2020-01-09T22:12:03.000Z",
    "external_platform": {},
    "total_programs": 21,
    "total_projects": 42,
    "allowed_statuses": [],
    "input_filter": []
  },
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/contexts/context"
    }
  }
}
```

# Embedded Schemas

## context
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context_id|string|false|read-only|Identifier for the context|
|label|string|false|none|Label for the entity|
|created|string(date-time)|false|read-only|Date the entity was created|
|updated|string(date-time)|false|read-only|Last date the entity was updated|
|current_steps|[string]|false|none|none|
|failed_steps|[object]|false|none|none|
|&nbsp;&nbsp; step|string|true|none|Key of a failed step|
|&nbsp;&nbsp; failed_count|number|true|none|Number of times the step failed|
|last_steps|[object]|false|read-only|Ordered list of the executed steps|
|&nbsp;&nbsp; step_name|string|false|read-only|Name for the step|
|&nbsp;&nbsp; started_at|string(date-time)|false|read-only|The date time the step started|
|&nbsp;&nbsp; ended_at|string(date-time)|false|read-only|The date time the step ended|
|&nbsp;&nbsp; time_to_run|string|false|read-only|The total time it took to run the step (with milliseconds)|
|&nbsp;&nbsp; did_error|boolean|false|read-only|Flag to test if the step errored|
|&nbsp;&nbsp; did_timeout|boolean|false|read-only|Flag if the step timed-out|
|started_at|string(date-time)|false|read-only|The date time the context started|
|ended_at|string(date-time)¦null|false|read-only|The date time the context ended|
|time_to_run|number|false|read-only|The total time it took to run the workflow (with milliseconds)|
|active|boolean|false|read-only|Flag set if there are still steps which need to be executed|
|waiting_for_user|boolean|false|none|Flag for when the user needs to complete the step|
|data|object|false|none|Data set for the context|
|entity|object¦null|false|none|none|
|using|object¦null|false|none|none|

#### Specification

```yaml
type: object
x-model: Context
properties:
  context_id:
    description: Identifier for the context
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
  current_steps:
    type: array
    items:
      type: string
      description: Key of current step to execute
      readOnly: true
  failed_steps:
    type: array
    items:
      type: object
      required:
        - step
        - failed_count
      additionalProperties: false
      properties:
        step:
          type: string
          description: Key of a failed step
        failed_count:
          type: number
          description: Number of times the step failed
      readOnly: true
  last_steps:
    type: array
    description: Ordered list of the executed steps
    readOnly: true
    items:
      type: object
      additionalProperties: false
      description: Details for the step
      properties:
        step_name:
          type: string
          description: Name for the step
          readOnly: true
        started_at:
          type: string
          format: date-time
          description: The date time the step started
          readOnly: true
        ended_at:
          type: string
          format: date-time
          description: The date time the step ended
          readOnly: true
        time_to_run:
          type: string
          description: The total time it took to run the step (with milliseconds)
          readOnly: true
        did_error:
          type: boolean
          description: Flag to test if the step errored
          readOnly: true
        did_timeout:
          type: boolean
          description: Flag if the step timed-out
          readOnly: true
  started_at:
    type: string
    format: date-time
    description: The date time the context started
    readOnly: true
  ended_at:
    type: string
    nullable: true
    format: date-time
    description: The date time the context ended
    readOnly: true
  time_to_run:
    type: number
    description: The total time it took to run the workflow (with milliseconds)
    readOnly: true
  active:
    type: boolean
    description: Flag set if there are still steps which need to be executed
    readOnly: true
  waiting_for_user:
    type: boolean
    description: Flag for when the user needs to complete the step
  data:
    type: object
    description: Data set for the context
    additionalProperties: true
  entity:
    type: object
    nullable: true
    additionalProperties: true
  using:
    type: object
    nullable: true
    additionalProperties: true

```

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
|&nbsp;&nbsp; property|string|true|none|Property on entity|
|&nbsp;&nbsp; operator|string|true|none|Operation to perform|
|&nbsp;&nbsp; value|string|false|none|The value to compare|
|effect|[anyOf]|false|none|Effect to apply|

#### Specification

```yaml
type: object
x-model: Action
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
    type: string
    description: Date the entity was created
    format: date-time
    readOnly: true
  updated:
    type: string
    description: Last date the entity was updated
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
        - property
        - operator
      properties:
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
          description: Effect which updates an entity
          additionalProperties: false
          required:
            - effect_type
            - options
          properties:
            effect_type:
              type: string
              description: Name of the effect type
              enum:
                - update
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

