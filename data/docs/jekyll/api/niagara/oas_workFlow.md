---
layout: page
parent: Niagara API
nav_order: 21
redirect_from:
  - /rel/work-flows
  - /rel/work-flow
title: Work Flows
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="work-flows">Work Flows</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Workflows are a new feature of nterprise niagara.  Similar to a flow chart, the Workflow defines how the work is to be accomplished in a series of Steps, including all of the details. The goal is to help standardize repeatable processes, to make work more consistent and efficient.  A Workflow starts in the Designer.

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|work-flow:create|Allows creating a work flow|
|work-flow:update|Allows editing a work flow|
|work-flow:delete|Allows deleting a work flow|
|work-flow:read|Allows access to a work flow|
|work-flow:attach|Allows attaching a relation from a work flow|
|work-flow:detach|Allows detaching a relation from a work flow|
|work-flow:all|Allows reading all work flow|

<h1 id="work-flows-work-flow">Work Flow</h1>

## Operations

### GET /work-flows

<a id="opIdfetchAllWorkflows"></a>

Fetches A Page of workflows

<aside class="warning">
Permissions required:<br>
<ul><li>work-flow:all</li></ul>
</aside>

<h3 id="fetchallworkflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|filter[applies_to]|query|string|false|Filter on work flow applies to|

> Example responses

> 200 Response

```json
{
  "total_count": 21,
  "limit": 42,
  "offset": "next-offset",
  "_embedded": {
    "nter:work-flows": [
      {
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
        },
        "_links": {
          "nter:work-flow-contexts": {
            "href": "https://api.nterprise.com/work-flows/work-flow/contexts"
          },
          "self": {
            "href": "https://api.nterprise.com/work-flows/work-flow"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/work-flows?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/work-flows?limit=42"
    }
  }
}
```

### GET /work-flows/{workflow_id}

<a id="opIdfetchWorkflowById"></a>

Fetches a workflow

<aside class="warning">
Permissions required:<br>
<ul><li>work-flow:read</li></ul>
</aside>

<h3 id="fetchworkflowbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|Id for the workflow|

> Example responses

> 200 Response

```json
{
  "work_flow_id": "work-flow",
  "label": "My workflow",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "workflow_version": 7,
  "applies_to": "UNIT",
  "starts_at": "work-complete",
  "schema_version": "1.0",
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
  },
  "_links": {
    "nter:work-flow-contexts": {
      "href": "https://api.nterprise.com/work-flows/work-flow/contexts"
    },
    "self": {
      "href": "https://api.nterprise.com/work-flows/work-flow"
    }
  }
}
```

### PUT /work-flows/{workflow_id}

<a id="opIdupdateWorkflow"></a>

Updates a workflow

<aside class="warning">
Permissions required:<br>
<ul><li>work-flow:update</li></ul>
</aside>

> Body parameter

<h3 id="updateworkflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|Id for the workflow|
|label|body|string|true|Entity identifier|
|schema_version|body|string|true|Version of the workflow schema used|
|applies_to|body|string|true|The entity type this work flow applies too|
|starts_at|body|string|true|Starting step|
|steps|body|object|true|Steps for the workflow|

> Example responses

> 200 Response

```json
{
  "work_flow_id": "work-flow",
  "label": "My workflow",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "workflow_version": 7,
  "applies_to": "UNIT",
  "starts_at": "work-complete",
  "schema_version": "1.0",
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
  },
  "_links": {
    "nter:work-flow-contexts": {
      "href": "https://api.nterprise.com/work-flows/work-flow/contexts"
    },
    "self": {
      "href": "https://api.nterprise.com/work-flows/work-flow"
    }
  }
}
```

### DELETE /work-flows/{workflow_id}

<a id="opIddeleteWorkflow"></a>

Deletes a workflow

<aside class="warning">
Permissions required:<br>
<ul><li>work-flow:delete</li></ul>
</aside>

<h3 id="deleteworkflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|Id for the workflow|

### GET /work-flows/{workflow_id}/contexts

<a id="opIdfetchContextsForWorkflow"></a>

Fetches A Page of active contexts for a workflow

<aside class="warning">
Permissions required:<br>
<ul><li>work-flow:read</li></ul>
</aside>

<h3 id="fetchcontextsforworkflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|Id for the workflow|
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
    "nter:contexts": [
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
        "current_step": "work-complete",
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
        "data": {
          "fizz": "buzz"
        },
        "entity": {
          "entity_id": "customer",
          "entity_type": "CUS",
          "label": "Niagara Customer",
          "created": "2020-01-09T22:12:03.000Z",
          "updated": "2020-01-09T22:12:03.000Z",
          "external_platform": {},
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
        "_links": {
          "self": {
            "href": "https://api.nterprise.com/contexts/context"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/contexts?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/contexts?limit=42"
    }
  }
}
```

### POST /work-flows/{workflow_id}/contexts

<a id="opIdstartWorkflow"></a>

Starts a workflow on an entity

<aside class="warning">
Permissions required:<br>
<ul><li>work-flow:read</li><li>context:create</li></ul>
</aside>

> Body parameter

<h3 id="startworkflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|Id for the workflow|
|entity_type|body|string|false|Entity type|
|entity_id|body|string|false|Entity identifier|

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
  "current_step": "work-complete",
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
  "data": {
    "fizz": "buzz"
  },
  "entity": {
    "entity_id": "customer",
    "entity_type": "CUS",
    "label": "Niagara Customer",
    "created": "2020-01-09T22:12:03.000Z",
    "updated": "2020-01-09T22:12:03.000Z",
    "external_platform": {},
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
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/contexts/context"
    }
  }
}
```

### GET /work-flows/{workflow_id}/relations

<a id="opIdfetchRelationsForWorkFlow"></a>

Fetches the relations for a workFlow

<aside class="warning">
Permissions required:<br>
<ul><li>work-flow:read</li></ul>
</aside>

<h3 id="fetchrelationsforworkflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|Id for the workflow|
|filter[entity_type]|query|string|false|Filter on entity type|
|filter[relation]|query|string|false|Filter on relation type|
|filter[direction]|query|string|false|Filter on relation direction|

> Example responses

> 200 Response

```json
{
  "total_count": 21,
  "limit": 42,
  "offset": "next-offset",
  "_embedded": {
    "nter:relations": [
      {
        "relation_id": "VVNFUiNyZWw6Y3JlYXRlZCM3ZTg4OTMyMS0yZWNmLTQzMjctODYyOS0yMzNhNzU1NmRmMmI",
        "relation": "created",
        "label": "Created By",
        "direction": "INWARD",
        "created": "2020-01-09T22:12:03.000Z",
        "updated": "2020-01-09T22:12:03.000Z",
        "entity": {
          "entity_type": "USER",
          "entity_id": "b0a84f51-443e-4ff1-9667-73b66be7435a",
          "label": "Daniel Jackson",
          "created": "2020-01-09T22:12:03.000Z",
          "updated": "2020-01-09T22:12:03.000Z"
        },
        "_links": {
          "self": {
            "href": "https://api.nterprise.com/{entity}/{entity_id}/relations/VVNFUiNyZWw6Y3JlYXRlZCM3ZTg4OTMyMS0yZWNmLTQzMjctODYyOS0yMzNhNzU1NmRmMmI"
          },
          "nter:user": {
            "href": "https://api.nterprise.com/users/b0a84f51-443e-4ff1-9667-73b66be7435a"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/{entity}/{entity_id}/relations?offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/{entity}/{entity_id}/relations"
    }
  }
}
```

### POST /work-flows/{workflow_id}/relations

<a id="opIdcreateRelationForWorkFlow"></a>

Creates a relation for a workFlow

<aside class="warning">
Permissions required:<br>
<ul><li>work-flow:attach</li></ul>
</aside>

> Body parameter

<h3 id="createrelationforworkflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|Id for the workflow|
|relation|body|string|true|Type of relation|
|entity|body|object|true|none|
|&nbsp;&nbsp; entity_id|body|string|true|Entity identifier|
|&nbsp;&nbsp; entity_type|body|string|true|Entity type|

> Example responses

> 201 Response

```json
{
  "relation_id": "VVNFUiNyZWw6Y3JlYXRlZCM3ZTg4OTMyMS0yZWNmLTQzMjctODYyOS0yMzNhNzU1NmRmMmI",
  "relation": "created",
  "label": "Created By",
  "direction": "INWARD",
  "created": "2020-01-09T22:12:03.000Z",
  "updated": "2020-01-09T22:12:03.000Z",
  "entity": {
    "entity_type": "USER",
    "entity_id": "b0a84f51-443e-4ff1-9667-73b66be7435a",
    "label": "Daniel Jackson",
    "created": "2020-01-09T22:12:03.000Z",
    "updated": "2020-01-09T22:12:03.000Z"
  },
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/{entity}/{entity_id}/relations/VVNFUiNyZWw6Y3JlYXRlZCM3ZTg4OTMyMS0yZWNmLTQzMjctODYyOS0yMzNhNzU1NmRmMmI"
    },
    "nter:user": {
      "href": "https://api.nterprise.com/users/b0a84f51-443e-4ff1-9667-73b66be7435a"
    }
  }
}
```

### DELETE /work-flows/{workflow_id}/relations/{relation_id}

<a id="opIddeleteRelationForWorkFlow"></a>

Deletes a relation for a workFlow

<aside class="warning">
Permissions required:<br>
<ul><li>work-flow:detach</li></ul>
</aside>

<h3 id="deleterelationforworkflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|Id for the workflow|
|relation_id|path|string|true|Id of the relation|

> Example responses

> 200 Response

```json
{
  "relation_id": "VVNFUiNyZWw6Y3JlYXRlZCM3ZTg4OTMyMS0yZWNmLTQzMjctODYyOS0yMzNhNzU1NmRmMmI",
  "relation": "created",
  "label": "Created By",
  "direction": "INWARD",
  "created": "2020-01-09T22:12:03.000Z",
  "updated": "2020-01-09T22:12:03.000Z",
  "entity": {
    "entity_type": "USER",
    "entity_id": "b0a84f51-443e-4ff1-9667-73b66be7435a",
    "label": "Daniel Jackson",
    "created": "2020-01-09T22:12:03.000Z",
    "updated": "2020-01-09T22:12:03.000Z"
  },
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/{entity}/{entity_id}/relations/VVNFUiNyZWw6Y3JlYXRlZCM3ZTg4OTMyMS0yZWNmLTQzMjctODYyOS0yMzNhNzU1NmRmMmI"
    },
    "nter:user": {
      "href": "https://api.nterprise.com/users/b0a84f51-443e-4ff1-9667-73b66be7435a"
    }
  }
}
```

<h1 id="work-flows-workflow">Workflow</h1>

## Operations

### POST /work-flows

<a id="opIdcreateWorkflow"></a>

Creates a new workflow

<aside class="warning">
Permissions required:<br>
<ul><li>work-flow:create</li></ul>
</aside>

> Body parameter

<h3 id="createworkflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Entity identifier|
|schema_version|body|string|true|Version of the workflow schema used|
|applies_to|body|string|true|The entity type this work flow applies too|
|starts_at|body|string|true|Starting step|
|steps|body|object|true|Steps for the workflow|

> Example responses

> 200 Response

```json
{
  "work_flow_id": "work-flow",
  "label": "My workflow",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "workflow_version": 7,
  "applies_to": "UNIT",
  "starts_at": "work-complete",
  "schema_version": "1.0",
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
  },
  "_links": {
    "nter:work-flow-contexts": {
      "href": "https://api.nterprise.com/work-flows/work-flow/contexts"
    },
    "self": {
      "href": "https://api.nterprise.com/work-flows/work-flow"
    }
  }
}
```

# Embedded Schemas

## Workflow
<!-- backwards compatibility -->
<a id="schemaworkflow"></a>
<a id="schema_Workflow"></a>
<a id="tocSworkflow"></a>
<a id="tocsworkflow"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|work_flow_id|string|true|read-only|Entity identifier|
|label|string|true|none|Label for the entity|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|schema_version|string|true|none|Version of the workflow schema used|
|workflow_version|integer|true|read-only|Version number for the work flows (the number of times it has been changed|
|applies_to|string|true|none|The entity type this work flow applies too|
|starts_at|string|true|none|Starting step|
|steps|object|true|none|Steps for the workflow|

#### Specification

```yaml
type: object
required:
  - work_flow_id
  - label
  - created
  - updated
  - schema_version
  - workflow_version
  - applies_to
  - starts_at
  - steps
properties:
  work_flow_id:
    type: string
    description: Entity identifier
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
  schema_version:
    type: string
    description: Version of the workflow schema used
    enum:
      - "1.0"
  workflow_version:
    type: integer
    description: Version number for the work flows (the number of times it has been changed
    readOnly: true
  applies_to:
    type: string
    description: The entity type this work flow applies too
    enum:
      - UNIT
      - PART
      - PGM
      - PRJ
      - CUS
      - CON
  starts_at:
    type: string
    description: Starting step
  steps:
    type: object
    description: Steps for the workflow
    uniqueItems: true
    additionalProperties: false
    x-patternProperties:
      "^[A-Za-z][A-Za-z0-9-]*$":
        oneOf:
          - $schema: http://json-schema.org/draft-07/schema#
            $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/function/allocateUnitsToProject.json
            description: Allocates units to a project.
            type: object
            required:
              - step_type
              - label
              - goto
              - goto_fail
              - options
            properties:
              step_type:
                &a3
                type: string
                enum:
                  - function
              label:
                &a4
                type: string
                description: Label for the step
              on_start:
                &a1
                $schema: http://json-schema.org/draft-07/schema#
                $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json
                type: array
                items:
                  type: object
                  required:
                    - function
                    - options
                  additionalProperties: false
                  properties:
                    function:
                      type: string
                    options:
                      type: object
              on_complete: *a1
              goto:
                &a5
                type: string
                description: Step to move to
                pattern: ^[A-Za-z][A-Za-z0-9-]*$
              goto_fail:
                &a6
                type: string
                description: Step to transition too if this step cannot be completed
                pattern: ^[A-Za-z][A-Za-z0-9-]*$
              context:
                &a7
                type: array
                description: Values to set on the context
                items:
                  type: object
                  required:
                    - key
                    - value
                  properties:
                    key:
                      type: string
                      description: The context key to set
                    value:
                      description: Value to set
                    lock:
                      type: boolean
                      description: Prevents other steps from writing this value
                    ignore:
                      type: boolean
                      description: When trying to set a locked key, do not fail
              on_error:
                &a8
                oneOf:
                  - &a2
                    $schema: http://json-schema.org/draft-07/schema#
                    $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepError.json
                    type: object
                    required:
                      - retry
                      - finally
                    properties:
                      retry:
                        type: integer
                        description: "Number of times to retry this step. Note: retry will only occur on
                          steps which automatically failed. If the step was
                          transitioned using the 'goto-fail' step, the actions
                          will be fired but the step WILL NOT be re-tried"
                        minimum: 0
                        maximum: 10
                        default: 0
                      finally:
                        type: object
                        description: What to do after all retries
                        properties:
                          actions: *a1
                  - type: object
                    additionalProperties: false
              on_timeout:
                &a9
                oneOf:
                  - *a2
                  - type: object
                    additionalProperties: false
              options:
                type: object
                required:
                  - function
                  - payload
                properties:
                  component:
                    &a10
                    type: string
                    description: Name of the UI component
                  function:
                    type: string
                    enum:
                      - allocate-unit-to-project
                  payload:
                    type: object
                    required:
                      - part_id
                      - project_id
                    properties:
                      part_label:
                        type: string
                        description: Part label of the to assign
                      part_id:
                        type: string
                        description: Part ID of the to assign
                      project_id:
                        type: string
                        description: Program ID of the to assign
                      allow_replacement:
                        type: boolean
                        description: Allow units of a replacement part
                      allow_substitution:
                        type: boolean
                        description: Allow units of a substitute part
                      status:
                        type: string
                        description: Only assign units which are in this status
          - $schema: http://json-schema.org/draft-07/schema#
            $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/function/setEntityStatus.json
            description: Updates the status on the Work Flow entity.
            type: object
            required:
              - step_type
              - label
              - goto
              - goto_fail
              - options
            properties:
              step_type: *a3
              label: *a4
              on_start: *a1
              on_complete: *a1
              goto: *a5
              goto_fail: *a6
              context: *a7
              on_error: *a8
              on_timeout: *a9
              options:
                type: object
                required:
                  - function
                  - payload
                properties:
                  component: *a10
                  function:
                    type: string
                    enum:
                      - set-entity-status
                  payload:
                    type: object
                    required:
                      - status
                    properties:
                      status:
                        $schema: http://json-schema.org/draft-07/schema#
                        $id: https://docs.nterprise.com/schemas/niagara/status.json
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
                            type:
                              - string
                              - "null"
                            description: A description for the status
                          order:
                            type: number
                            description: Order status appears when listing
                        examples:
                          - category: COMPLETE
                            description: For something that is Complete
                            status: Complete
                            order: 7
          - $schema: http://json-schema.org/draft-07/schema#
            $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/followPDFInstructions.json
            description: Display a link or modal to a user which contains instructions from
              a PDF
            type: object
            required:
              - step_type
              - label
              - goto
              - goto_fail
              - options
            properties:
              step_type:
                &a11
                type: string
                enum:
                  - user
              label: *a4
              on_start: *a1
              on_complete: *a1
              goto: *a5
              goto_fail: *a6
              context: *a7
              on_error: *a8
              on_timeout: *a9
              options:
                type: object
                required:
                  - component
                  - payload
                properties:
                  component:
                    enum:
                      - follow-pdf-instructions
                  payload:
                    type: object
                    required:
                      - attachment_id
                    properties:
                      attachment_id:
                        description: The identifier for the batch
                        type: string
                        readOnly: true
                        pattern: ^[0-9a-zA-Z-_]+$
          - $schema: http://json-schema.org/draft-07/schema#
            $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/manualDataEntry.json
            description: Ask the user to manually enter (or confirm) data for an entity
            type: object
            required:
              - step_type
              - label
              - goto
              - goto_fail
              - options
            properties:
              step_type: *a11
              label: *a4
              on_start: *a1
              on_complete: *a1
              goto: *a5
              goto_fail: *a6
              context: *a7
              on_error: *a8
              on_timeout: *a9
              options:
                type: object
                properties:
                  component:
                    enum:
                      - manual-data-entry
                  payload:
                    type: object
                    required:
                      - fields
                    properties:
                      fields:
                        type: array
                        description: Configuration for each field
                        items:
                          type: object
                          required:
                            - input_type
                            - label
                            - required
                            - entity_field
                          properties:
                            input_type:
                              type: string
                              description: The type of input field to display
                              enum:
                                - textbox
                                - input
                            label:
                              type: string
                              description: Label to display for the field
                            required:
                              type: boolean
                              description: "Display the field as required input. Note: this is a helper
                                function. It singles that the user is required
                                to input data at this step. If the field is
                                required on the entity, the user will be
                                presented with a validation message"
                            entity_field:
                              type: string
                              description: JSON Path to the field on the entity. If the path does not start
                                with '$' then the entity on the context is
                                assumed. Otherwise the data will be set on the
                                context path
          - $schema: http://json-schema.org/draft-07/schema#
            $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/taskList.json
            description: Ask the user to follow a list and check off boxes
            type: object
            required:
              - step_type
              - label
              - goto
              - goto_fail
              - options
            properties:
              step_type: *a11
              label: *a4
              on_start: *a1
              on_complete: *a1
              goto: *a5
              goto_fail: *a6
              context: *a7
              on_error: *a8
              on_timeout: *a9
              options:
                type: object
                properties:
                  component:
                    enum:
                      - task-list
                  payload:
                    type: object
                    required:
                      - items
                    properties:
                      is_qc:
                        type: boolean
                        description: Flags this list as a QC task list. This means that a different user
                          can close the task to one previously on the context
                      items:
                        type: array
                        description: Configuration for each task list item
                        items:
                          type: object
                          required:
                            - label
                            - evaluated
                            - na_field
                          properties:
                            label:
                              type: string
                              description: Label to display for the field
                            slug:
                              type: string
                              description: Slug for the item (Auto-generated from the label)
                              readOnly: true
                              pattern: ^[a-z0-9]+(?:-[a-z0-9]+)*$
                            help:
                              type:
                                - string
                                - "null"
                              description: Message describing what is needed to be checked
                            evaluated:
                              type: boolean
                              description: When set to true, this will fail the step if the value for the item
                                is false or N/A
                            na_field:
                              type: boolean
                              description: Allow the user to select the N/A option when checking off the list
          - $schema: http://json-schema.org/draft-07/schema#
            $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/machine/aceIos.json
            description: Run the ACE-IOS application to provision iOS devices
            type: object
            required:
              - step_type
              - label
              - goto
              - goto_fail
              - options
            properties:
              step_type:
                type: string
                enum:
                  - machine
              label: *a4
              on_start: *a1
              on_complete: *a1
              goto: *a5
              goto_fail: *a6
              context: *a7
              on_error: *a8
              on_timeout: *a9
              options:
                type: object
                required:
                  - application
                  - configuration
                properties:
                  component:
                    type: string
                    description: Name of the UI component
                  application:
                    type: object
                    required:
                      - application_id
                    properties:
                      application_id:
                        type: string
                        enum:
                          - ace-ios
                      platforms:
                        type: array
                        items:
                          type: string
                  configuration:
                    type: object
                    description: ACE Configuration options
                    properties:
                      pairing_cert:
                        type: string
                        description: Contents of a *.crt file exported from Apple Configurator or MDM
                        pattern: ^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$
                      pairing_key:
                        type: string
                        description: Contents of a *.der file exported from Apple Configurator or MDM
                        pattern: ^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$
                      restore_device:
                        type: boolean
                        description: Restore device to factory defaults
                      automated_enrollment:
                        description: Automatically enroll the device to MDM
                        oneOf:
                          - type: object
                            required:
                              - should_mdm_enroll
                              - mdm_enroll_user
                              - mdm_enroll_password
                            additionalProperties: false
                            properties:
                              should_mdm_enroll:
                                const: true
                              mdm_enroll_user:
                                type: string
                              mdm_enroll_password:
                                type: string
                          - type: object
                            required:
                              - should_mdm_enroll
                            additionalProperties: false
                            properties:
                              should_mdm_enroll:
                                type: boolean
                      field_mappings:
                        type: array
                        description: List of fields to map to the device
                        items:
                          type: object
                          properties:
                            from:
                              type: string
                              description: The field reported from ACE
                              enum:
                                - serial_number
                                - name
                                - ecid
                                - udid
                                - ios
                                - model
                                - storage
                                - wifi_mac
                                - bt_mac
                                - ethernet_mac
                                - iccid
                                - iccid2
                                - imei
                                - imei2
                                - bat_capacity
                            to:
                              type: string
                              description: Field to set on the entity
                      wait_for_apps:
                        type: array
                        description: A list of applications needed to be installed on the device. This
                          will cause the extension to poll the device for
                          installed applications. Once all the applications have
                          been installed, this step can be completed
                        items:
                          type: string
                      wait_for_icon_layout:
                        type: array
                        description: Ordered nested list of icons representing the home screen layout on
                          the device. This will cause the extension to poll the
                          device for the desired icon layout. Once the icon
                          layout matches, this step can be completed
                      wait_for_battery_charge:
                        type: integer
                        description: The required battery percentage needed before this step can move on
                        minimum: 0
                        maximum: 100
          - &a12
            $schema: http://json-schema.org/draft-07/schema#
            $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepChoice.json
            description: A Step choice
            type: object
            required:
              - step_type
              - label
              - goto
              - goto_fail
              - decision
            additionalProperties: false
            properties:
              step_type:
                type: string
                enum:
                  - decision
              label: *a4
              on_start: *a1
              on_complete: *a1
              goto: *a5
              goto_fail: *a6
              context: *a7
              on_error: *a8
              on_timeout: *a9
              decision:
                type: array
                description: Context variable to check
                items:
                  type: object
                  maxProperties: 2
                  minProperties: 2
                  properties:
                    variable:
                      type: string
                      description: Variable or value
                    operator:
                      type: string
                      description: Operator to perform
                      enum:
                        - greater_than_equals
                        - less_than_equals
                        - greater_than
                        - less_than
                        - equals
                        - not_equals
                    operand:
                      type: string
                      description: operand to compare with
          - $schema: http://json-schema.org/draft-07/schema#
            $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepFail.json
            description: Finial step which is marked as failed
            type: object
            required:
              - step_type
              - label
            additionalProperties: false
            properties:
              step_type:
                type: string
                enum:
                  - fail
              label: *a4
              on_start: *a1
              on_complete: *a1
          - $schema: http://json-schema.org/draft-07/schema#
            $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepPass.json
            description: Allows executing actions with out performing any function
            type: object
            required:
              - step_type
              - label
              - goto
              - goto_fail
            additionalProperties: false
            properties:
              step_type:
                type: string
                enum:
                  - pass
              label: *a4
              on_start: *a1
              on_complete: *a1
              goto: *a5
              goto_fail: *a6
              context: *a7
              on_error: *a8
              on_timeout: *a9
          - $schema: http://json-schema.org/draft-07/schema#
            $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepSuccess.json
            description: Finial step which is marked as completed successfully
            type: object
            required:
              - step_type
              - label
            additionalProperties: false
            properties:
              step_type:
                type: string
                enum:
                  - success
              label: *a4
              on_start: *a1
              on_complete: *a1
          - $schema: http://json-schema.org/draft-07/schema#
            $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepWait.json
            description: A step which run at certain times
            type: object
            required:
              - step_type
              - label
              - goto
              - goto_fail
              - stop_at
              - time
            additionalProperties: false
            properties:
              step_type:
                type: string
                enum:
                  - wait
              label: *a4
              on_start: *a1
              on_complete: *a1
              goto: *a5
              goto_fail: *a6
              context: *a7
              on_error: *a8
              on_timeout: *a9
              stop_at:
                type: integer
                description: Time in seconds to stop this task
                maximum: 900
                minimum: 1
              time:
                type: integer
                description: Time to wait before checking this step
                maximum: 900
                minimum: 1
              listen_for:
                type: array
                description: List of events and conditions to listen for to trigger
                items:
                  type: object
                  required:
                    - event
                  properties:
                    event:
                      type: string
                      description: Name of the event to listen for
                      allOf:
                        - type: string
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
                    event_value:
                      type: object
                      description: The event conditions that have to be met
                      allOf:
                        - *a12

```

