---
layout: page
parent: Niagara API
nav_order: 22
redirect_from:
  - /rel/work-orders
  - /rel/batch-work-order
title: Work Orders
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="work-orders">Work Orders</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Contained inside of a Project, a Work Order is simply a request to do work.  That may be a configuration request ("Provision 500 iPads for Lexington Middle School") or a field services request ("Install 2 POS systems at ABC Retail, Store 21").

A Work Order will typically reference a Workflow, which defines the specific steps (how) to complete the work, and how many "cycles" of the workflow need to be completed.

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|work-order:create|Allows creating a work order|
|work-order:update|Allows editing a work order|
|work-order:delete|Allows deleting a work order|
|work-order:read|Allows access to a work order|
|work-order:attach|Allows attaching a relation from a work order|
|work-order:detach|Allows detaching a relation from a work order|
|work-order:all|Allows reading all work order|
|context:read|Allows reading a context|
|context:create|Allows starting a context|
|context:step|Allows completing a work flow step|

<h1 id="work-orders-work-order">Work Order</h1>

## Operations

### GET /work-orders

<a id="opIdfetchAllWorkOrders"></a>

Fetches A Page of work orders

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:all</li></ul>
</aside>

<h3 id="fetchallworkorders-parameters">Parameters</h3>

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
    "nter:work-orders": [
      {
        "work_order_id": "work-order",
        "label": "My workOrder",
        "created": "2019-08-19T00:01:02.000Z",
        "updated": "2020-08-19T01:01:02.000Z",
        "description": "Workorder description",
        "work_order_type": "device",
        "begin_date": "2021-08-19T02:01:02.000Z",
        "due_date": "2021-08-19T02:01:02.000Z",
        "start_date": "2021-08-19T02:01:02.000Z",
        "end_date": "2021-08-19T02:01:02.000Z",
        "project": {
          "project_id": "project",
          "label": "New York Stores",
          "description": "Project description",
          "created": "2020-01-09T22:12:03.000Z",
          "updated": "2020-01-09T22:12:03.000Z",
          "customer": {
            "customer_id": "customer",
            "label": "manchuck",
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
          "program": {
            "program_id": "program",
            "label": "North east stores",
            "created": "2020-01-09T22:12:03.000Z",
            "updated": "2020-01-09T22:12:03.000Z",
            "customer": {
              "customer_id": "customer",
              "label": "manchuck",
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
            "end_date": "2020-02-10T22:12:03.000Z",
            "start_date": "2020-02-10T22:12:03.000Z",
            "allowed_statuses": [
              {
                "category": "PENDING",
                "description": "For something that is Pending",
                "status": "Pending",
                "order": 3
              },
              {
                "category": "VERIFYING",
                "description": "For something that is Verifying",
                "status": "Verifying",
                "order": 5
              }
            ],
            "input_filter": []
          },
          "end_date": "2020-02-10T22:12:03.000Z",
          "start_date": "2020-02-10T22:12:03.000Z",
          "allowed_statuses": [
            {
              "category": "PENDING",
              "description": "For something that is Pending",
              "status": "Pending",
              "order": 3
            }
          ],
          "input_filter": []
        },
        "location": {
          "location_id": "location",
          "label": "Test Label",
          "created": "2019-08-19T00:01:02.000Z",
          "updated": "2020-08-19T01:01:02.000Z",
          "location_type": "warehouse",
          "formatted_address": "Test Label\n431 Broadway Suite c\nMenands NY 12204 USA",
          "address": {
            "country": "USA",
            "administrative_area": "NY",
            "sub_administrative_area": "Albany",
            "locality": "Menands",
            "postal_code": "12204",
            "thoroughfare": "431 Broadway",
            "premise": "Suite c",
            "sub_premise": "ZIC"
          },
          "input_filter": []
        },
        "current_status": {
          "category": "IN_PROGRESS",
          "description": "For something that is Reticulating Splines",
          "status": "Reticulating Splines",
          "order": 2
        },
        "cycles": {
          "needed": 1,
          "pending": 1,
          "in_progress": 0,
          "verifying": 0,
          "complete": 0,
          "blocked": 0,
          "cancelled": 0,
          "active": 1,
          "in_active": 0,
          "assigned": 0,
          "work_flow": {
            "work_flow_id": "work-flow",
            "created": "2019-08-19T00:01:02.000Z",
            "updated": "2020-08-19T01:01:02.000Z",
            "label": "My workflow",
            "schema_version": "1.0",
            "workflow_version": 7,
            "applies_to": "UNIT",
            "starts_at": "work-complete",
            "metadata": {
              "meta": "data"
            },
            "steps": {
              "work-complete": {
                "step_type": "success",
                "label": "work complete",
                "on_start": [],
                "on_complete": []
              },
              "stop-poking-me": {
                "step_type": "fail",
                "label": "stop poking me",
                "on_start": [],
                "on_complete": []
              }
            },
            "triggered_by": [
              "UNIT.created"
            ]
          }
        },
        "input_filter": [],
        "_links": {
          "nter:work-order-batches": {
            "href": "https://api.nterprise.com/work-orders/work-order/batches"
          },
          "nter:work-order-queues": {
            "href": "https://api.nterprise.com/work-orders/work-order/queues"
          },
          "self": {
            "href": "https://api.nterprise.com/work-orders/work-order"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/work-orders?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/work-orders?limit=42"
    }
  }
}
```

### POST /work-orders

<a id="opIdcreateWorkOrder"></a>

Creates a work-order

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:create</li></ul>
</aside>

> Body parameter

<h3 id="createworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Label for the entity|
|description|body|string¦null|false|Detailed description for the work order|
|work_order_type|body|string|false|Type of work order|
|begin_date|body|string(date-time)|false|Begin date|
|due_date|body|string(date-time)|false|Due date|
|current_status|body|object|false|Defines the properties for a status|
|&nbsp;&nbsp; status|body|string|true|A Custom label for the status|
|&nbsp;&nbsp; category|body|string|true|The classifier for the statues|
|&nbsp;&nbsp; description|body|string¦null|false|A description for the status|
|&nbsp;&nbsp; order|body|number|false|Order status appears when listing|
|project|body|object|true|none|
|&nbsp;&nbsp; project_id|body|string|false|Unique identifier|
|start_date|body|string(date-time)¦null|false|Start date|
|end_date|body|string(date-time)¦null|false|End date|
|cycles|body|object|false|A count of cycles needed for this entity broken down by status category and active/in-active status|
|&nbsp;&nbsp; work_flow|body|object|true|Workflow|
|&nbsp;&nbsp;&nbsp;&nbsp; work_flow_id|body|string|false|Entity identifier|
|&nbsp;&nbsp;&nbsp;&nbsp; entity_id|body|string|true|Entity identifier|
|&nbsp;&nbsp;&nbsp;&nbsp; entity_type|body|string|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; label|body|string|true|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp; slug|body|string|false|Slug for the entity (Auto-generated from the label)|
|&nbsp;&nbsp;&nbsp;&nbsp; created|body|string(date-time)|true|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp; updated|body|string(date-time)|true|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp; schema_version|body|string|true|Version of the workflow schema used|
|&nbsp;&nbsp;&nbsp;&nbsp; workflow_version|body|integer|false|Version number for the work flows (the number of times it has been changed|
|&nbsp;&nbsp;&nbsp;&nbsp; applies_to|body|string|true|The entity type this work flow applies too|
|&nbsp;&nbsp;&nbsp;&nbsp; triggered_by|body|[string]|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; starts_at|body|string|true|Starting step|
|&nbsp;&nbsp;&nbsp;&nbsp; steps|body|object|true|Steps for the workflow|
|&nbsp;&nbsp;&nbsp;&nbsp; metadata|body|object|false|Data for the entity as a key value pair|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **additionalProperties**|body|string|false|none|
|&nbsp;&nbsp; assigned|body|number|false|Number of assigned cycles|
|<a href="https://docs.nterprise.com/niagara/inputFilter.html">input_filter</a>|body|[object]|false|Input Filters allow custom fields to be defined for entities|

> Example responses

> 200 Response

```json
{
  "work_order_id": "work-order",
  "label": "My workOrder",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "description": "Workorder description",
  "work_order_type": "device",
  "begin_date": "2021-08-19T02:01:02.000Z",
  "due_date": "2021-08-19T02:01:02.000Z",
  "start_date": "2021-08-19T02:01:02.000Z",
  "end_date": "2021-08-19T02:01:02.000Z",
  "project": {
    "project_id": "project",
    "label": "New York Stores",
    "description": "Project description",
    "created": "2020-01-09T22:12:03.000Z",
    "updated": "2020-01-09T22:12:03.000Z",
    "customer": {
      "customer_id": "customer",
      "label": "manchuck",
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
    "program": {
      "program_id": "program",
      "label": "North east stores",
      "created": "2020-01-09T22:12:03.000Z",
      "updated": "2020-01-09T22:12:03.000Z",
      "customer": {
        "customer_id": "customer",
        "label": "manchuck",
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
      "end_date": "2020-02-10T22:12:03.000Z",
      "start_date": "2020-02-10T22:12:03.000Z",
      "allowed_statuses": [
        {
          "category": "PENDING",
          "description": "For something that is Pending",
          "status": "Pending",
          "order": 3
        },
        {
          "category": "VERIFYING",
          "description": "For something that is Verifying",
          "status": "Verifying",
          "order": 5
        }
      ],
      "input_filter": []
    },
    "end_date": "2020-02-10T22:12:03.000Z",
    "start_date": "2020-02-10T22:12:03.000Z",
    "allowed_statuses": [
      {
        "category": "PENDING",
        "description": "For something that is Pending",
        "status": "Pending",
        "order": 3
      }
    ],
    "input_filter": []
  },
  "location": {
    "location_id": "location",
    "label": "Test Label",
    "created": "2019-08-19T00:01:02.000Z",
    "updated": "2020-08-19T01:01:02.000Z",
    "location_type": "warehouse",
    "formatted_address": "Test Label\n431 Broadway Suite c\nMenands NY 12204 USA",
    "address": {
      "country": "USA",
      "administrative_area": "NY",
      "sub_administrative_area": "Albany",
      "locality": "Menands",
      "postal_code": "12204",
      "thoroughfare": "431 Broadway",
      "premise": "Suite c",
      "sub_premise": "ZIC"
    }
  },
  "current_status": {
    "category": "IN_PROGRESS",
    "description": "For something that is Reticulating Splines",
    "status": "Reticulating Splines",
    "order": 2
  },
  "cycles": {
    "needed": 1,
    "pending": 1,
    "in_progress": 0,
    "verifying": 0,
    "complete": 0,
    "blocked": 0,
    "cancelled": 0,
    "active": 1,
    "in_active": 0,
    "assigned": 0,
    "work_flow": {
      "work_flow_id": "work-flow",
      "created": "2019-08-19T00:01:02.000Z",
      "updated": "2020-08-19T01:01:02.000Z",
      "label": "My workflow",
      "schema_version": "1.0",
      "workflow_version": 7,
      "applies_to": "UNIT",
      "starts_at": "work-complete",
      "metadata": {
        "meta": "data"
      },
      "steps": {
        "work-complete": {
          "step_type": "success",
          "label": "work complete",
          "on_start": [],
          "on_complete": []
        },
        "stop-poking-me": {
          "step_type": "fail",
          "label": "stop poking me",
          "on_start": [],
          "on_complete": []
        }
      },
      "triggered_by": [
        "UNIT.created"
      ]
    }
  },
  "input_filter": [],
  "note_count": {
    "total": 13,
    "closed_issues": 3,
    "open_issues": 1
  },
  "_embedded": {
    "nter:work-order-project": [],
    "nter:work-order-location": [],
    "nter:work-order-program": [],
    "nter:work-order-customer": []
  },
  "_links": {
    "nter:work-order-batches": {
      "href": "https://api.nterprise.com/work-orders/work-order/batches"
    },
    "nter:work-order-queues": {
      "href": "https://api.nterprise.com/work-orders/work-order/queues"
    },
    "self": {
      "href": "https://api.nterprise.com/work-orders/work-order"
    }
  }
}
```

### GET /work-orders/{work_order_id}

<a id="opIdfetchWorkOrderById"></a>

Fetches a work-order

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:read</li></ul>
</aside>

<h3 id="fetchworkorderbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|

> Example responses

> 200 Response

```json
{
  "work_order_id": "work-order",
  "label": "My workOrder",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "description": "Workorder description",
  "work_order_type": "device",
  "begin_date": "2021-08-19T02:01:02.000Z",
  "due_date": "2021-08-19T02:01:02.000Z",
  "start_date": "2021-08-19T02:01:02.000Z",
  "end_date": "2021-08-19T02:01:02.000Z",
  "project": {
    "project_id": "project",
    "label": "New York Stores",
    "description": "Project description",
    "created": "2020-01-09T22:12:03.000Z",
    "updated": "2020-01-09T22:12:03.000Z",
    "customer": {
      "customer_id": "customer",
      "label": "manchuck",
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
    "program": {
      "program_id": "program",
      "label": "North east stores",
      "created": "2020-01-09T22:12:03.000Z",
      "updated": "2020-01-09T22:12:03.000Z",
      "customer": {
        "customer_id": "customer",
        "label": "manchuck",
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
      "end_date": "2020-02-10T22:12:03.000Z",
      "start_date": "2020-02-10T22:12:03.000Z",
      "allowed_statuses": [
        {
          "category": "PENDING",
          "description": "For something that is Pending",
          "status": "Pending",
          "order": 3
        },
        {
          "category": "VERIFYING",
          "description": "For something that is Verifying",
          "status": "Verifying",
          "order": 5
        }
      ],
      "input_filter": []
    },
    "end_date": "2020-02-10T22:12:03.000Z",
    "start_date": "2020-02-10T22:12:03.000Z",
    "allowed_statuses": [
      {
        "category": "PENDING",
        "description": "For something that is Pending",
        "status": "Pending",
        "order": 3
      }
    ],
    "input_filter": []
  },
  "location": {
    "location_id": "location",
    "label": "Test Label",
    "created": "2019-08-19T00:01:02.000Z",
    "updated": "2020-08-19T01:01:02.000Z",
    "location_type": "warehouse",
    "formatted_address": "Test Label\n431 Broadway Suite c\nMenands NY 12204 USA",
    "address": {
      "country": "USA",
      "administrative_area": "NY",
      "sub_administrative_area": "Albany",
      "locality": "Menands",
      "postal_code": "12204",
      "thoroughfare": "431 Broadway",
      "premise": "Suite c",
      "sub_premise": "ZIC"
    }
  },
  "current_status": {
    "category": "IN_PROGRESS",
    "description": "For something that is Reticulating Splines",
    "status": "Reticulating Splines",
    "order": 2
  },
  "cycles": {
    "needed": 1,
    "pending": 1,
    "in_progress": 0,
    "verifying": 0,
    "complete": 0,
    "blocked": 0,
    "cancelled": 0,
    "active": 1,
    "in_active": 0,
    "assigned": 0,
    "work_flow": {
      "work_flow_id": "work-flow",
      "created": "2019-08-19T00:01:02.000Z",
      "updated": "2020-08-19T01:01:02.000Z",
      "label": "My workflow",
      "schema_version": "1.0",
      "workflow_version": 7,
      "applies_to": "UNIT",
      "starts_at": "work-complete",
      "metadata": {
        "meta": "data"
      },
      "steps": {
        "work-complete": {
          "step_type": "success",
          "label": "work complete",
          "on_start": [],
          "on_complete": []
        },
        "stop-poking-me": {
          "step_type": "fail",
          "label": "stop poking me",
          "on_start": [],
          "on_complete": []
        }
      },
      "triggered_by": [
        "UNIT.created"
      ]
    }
  },
  "input_filter": [],
  "note_count": {
    "total": 13,
    "closed_issues": 3,
    "open_issues": 1
  },
  "_embedded": {
    "nter:work-order-project": [],
    "nter:work-order-location": [],
    "nter:work-order-program": [],
    "nter:work-order-customer": []
  },
  "_links": {
    "nter:work-order-batches": {
      "href": "https://api.nterprise.com/work-orders/work-order/batches"
    },
    "nter:work-order-queues": {
      "href": "https://api.nterprise.com/work-orders/work-order/queues"
    },
    "self": {
      "href": "https://api.nterprise.com/work-orders/work-order"
    }
  }
}
```

### PUT /work-orders/{work_order_id}

<a id="opIdupdateWorkOrder"></a>

Updates a work-order

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:update</li></ul>
</aside>

> Body parameter

<h3 id="updateworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
|label|body|string|true|Label for the entity|
|description|body|string¦null|false|Detailed description for the work order|
|work_order_type|body|string|false|Type of work order|
|begin_date|body|string(date-time)|false|Begin date|
|due_date|body|string(date-time)|false|Due date|
|current_status|body|object|false|Defines the properties for a status|
|&nbsp;&nbsp; status|body|string|true|A Custom label for the status|
|&nbsp;&nbsp; category|body|string|true|The classifier for the statues|
|&nbsp;&nbsp; description|body|string¦null|false|A description for the status|
|&nbsp;&nbsp; order|body|number|false|Order status appears when listing|
|project|body|object|true|none|
|&nbsp;&nbsp; project_id|body|string|false|Unique identifier|
|start_date|body|string(date-time)¦null|false|Start date|
|end_date|body|string(date-time)¦null|false|End date|
|cycles|body|object|false|A count of cycles needed for this entity broken down by status category and active/in-active status|
|&nbsp;&nbsp; work_flow|body|object|true|Workflow|
|&nbsp;&nbsp;&nbsp;&nbsp; work_flow_id|body|string|false|Entity identifier|
|&nbsp;&nbsp;&nbsp;&nbsp; entity_id|body|string|true|Entity identifier|
|&nbsp;&nbsp;&nbsp;&nbsp; entity_type|body|string|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; label|body|string|true|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp; slug|body|string|false|Slug for the entity (Auto-generated from the label)|
|&nbsp;&nbsp;&nbsp;&nbsp; created|body|string(date-time)|true|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp; updated|body|string(date-time)|true|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp; schema_version|body|string|true|Version of the workflow schema used|
|&nbsp;&nbsp;&nbsp;&nbsp; workflow_version|body|integer|false|Version number for the work flows (the number of times it has been changed|
|&nbsp;&nbsp;&nbsp;&nbsp; applies_to|body|string|true|The entity type this work flow applies too|
|&nbsp;&nbsp;&nbsp;&nbsp; triggered_by|body|[string]|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; starts_at|body|string|true|Starting step|
|&nbsp;&nbsp;&nbsp;&nbsp; steps|body|object|true|Steps for the workflow|
|&nbsp;&nbsp;&nbsp;&nbsp; metadata|body|object|false|Data for the entity as a key value pair|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **additionalProperties**|body|string|false|none|
|&nbsp;&nbsp; assigned|body|number|false|Number of assigned cycles|
|<a href="https://docs.nterprise.com/niagara/inputFilter.html">input_filter</a>|body|[object]|false|Input Filters allow custom fields to be defined for entities|

> Example responses

> 200 Response

```json
{
  "work_order_id": "work-order",
  "label": "My workOrder",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "description": "Workorder description",
  "work_order_type": "device",
  "begin_date": "2021-08-19T02:01:02.000Z",
  "due_date": "2021-08-19T02:01:02.000Z",
  "start_date": "2021-08-19T02:01:02.000Z",
  "end_date": "2021-08-19T02:01:02.000Z",
  "project": {
    "project_id": "project",
    "label": "New York Stores",
    "description": "Project description",
    "created": "2020-01-09T22:12:03.000Z",
    "updated": "2020-01-09T22:12:03.000Z",
    "customer": {
      "customer_id": "customer",
      "label": "manchuck",
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
    "program": {
      "program_id": "program",
      "label": "North east stores",
      "created": "2020-01-09T22:12:03.000Z",
      "updated": "2020-01-09T22:12:03.000Z",
      "customer": {
        "customer_id": "customer",
        "label": "manchuck",
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
      "end_date": "2020-02-10T22:12:03.000Z",
      "start_date": "2020-02-10T22:12:03.000Z",
      "allowed_statuses": [
        {
          "category": "PENDING",
          "description": "For something that is Pending",
          "status": "Pending",
          "order": 3
        },
        {
          "category": "VERIFYING",
          "description": "For something that is Verifying",
          "status": "Verifying",
          "order": 5
        }
      ],
      "input_filter": []
    },
    "end_date": "2020-02-10T22:12:03.000Z",
    "start_date": "2020-02-10T22:12:03.000Z",
    "allowed_statuses": [
      {
        "category": "PENDING",
        "description": "For something that is Pending",
        "status": "Pending",
        "order": 3
      }
    ],
    "input_filter": []
  },
  "location": {
    "location_id": "location",
    "label": "Test Label",
    "created": "2019-08-19T00:01:02.000Z",
    "updated": "2020-08-19T01:01:02.000Z",
    "location_type": "warehouse",
    "formatted_address": "Test Label\n431 Broadway Suite c\nMenands NY 12204 USA",
    "address": {
      "country": "USA",
      "administrative_area": "NY",
      "sub_administrative_area": "Albany",
      "locality": "Menands",
      "postal_code": "12204",
      "thoroughfare": "431 Broadway",
      "premise": "Suite c",
      "sub_premise": "ZIC"
    }
  },
  "current_status": {
    "category": "IN_PROGRESS",
    "description": "For something that is Reticulating Splines",
    "status": "Reticulating Splines",
    "order": 2
  },
  "cycles": {
    "needed": 1,
    "pending": 1,
    "in_progress": 0,
    "verifying": 0,
    "complete": 0,
    "blocked": 0,
    "cancelled": 0,
    "active": 1,
    "in_active": 0,
    "assigned": 0,
    "work_flow": {
      "work_flow_id": "work-flow",
      "created": "2019-08-19T00:01:02.000Z",
      "updated": "2020-08-19T01:01:02.000Z",
      "label": "My workflow",
      "schema_version": "1.0",
      "workflow_version": 7,
      "applies_to": "UNIT",
      "starts_at": "work-complete",
      "metadata": {
        "meta": "data"
      },
      "steps": {
        "work-complete": {
          "step_type": "success",
          "label": "work complete",
          "on_start": [],
          "on_complete": []
        },
        "stop-poking-me": {
          "step_type": "fail",
          "label": "stop poking me",
          "on_start": [],
          "on_complete": []
        }
      },
      "triggered_by": [
        "UNIT.created"
      ]
    }
  },
  "input_filter": [],
  "note_count": {
    "total": 13,
    "closed_issues": 3,
    "open_issues": 1
  },
  "_embedded": {
    "nter:work-order-project": [],
    "nter:work-order-location": [],
    "nter:work-order-program": [],
    "nter:work-order-customer": []
  },
  "_links": {
    "nter:work-order-batches": {
      "href": "https://api.nterprise.com/work-orders/work-order/batches"
    },
    "nter:work-order-queues": {
      "href": "https://api.nterprise.com/work-orders/work-order/queues"
    },
    "self": {
      "href": "https://api.nterprise.com/work-orders/work-order"
    }
  }
}
```

### DELETE /work-orders/{work_order_id}

<a id="opIddeleteWorkOrder"></a>

Deletes a work-order

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:delete</li></ul>
</aside>

<h3 id="deleteworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|

### GET /work-orders/{work_order_id}/diff

<a id="opIdfetchDiffForWorkOrder"></a>

Fetches A Page diff records for a work order

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:read</li></ul>
</aside>

<h3 id="fetchdiffforworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
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
    "nter:diffs": [
      {
        "diff_id": "diff_id",
        "property": "label",
        "old_value": "Zones Inc",
        "new_value": "Zones",
        "by_user": {
          "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
          "name": "Daniel Jackson",
          "email": "daniel.jackson@niagara.com",
          "created": "2019-09-16T21:26:14.000Z",
          "updated": "2019-09-16T21:27:14.000Z"
        },
        "date": "2019-09-16T21:27:14.000Z",
        "_links": {
          "self": {
            "href": "https://api.nterprise.com/actions/action"
          }
        }
      }
    ]
  }
}
```

### GET /work-orders/{work_order_id}/contexts

<a id="opIdfetchContextsForWorkOrder"></a>

Fetch a page of contexts for a work order

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:read</li></ul>
</aside>

<h3 id="fetchcontextsforworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
|filter[status]|query|string|false|Filter on the status|

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

### GET /work-orders/{work_order_id}/cycles

<a id="opIdfetchCyclesForWorkOrder"></a>

Fetch a page of cycles for a work order

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:read</li></ul>
</aside>

<h3 id="fetchcyclesforworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
|filter[status]|query|string|false|Filter on the status|

> Example responses

> 200 Response

```json
{
  "total_count": 21,
  "limit": 42,
  "offset": "next-offset",
  "_embedded": {
    "nter:work-order-cycles": [
      {
        "action_id": "cycle",
        "label": "Cycle 42 for work order: configure iPads",
        "created": "2019-08-19T00:01:02.000Z",
        "updated": "2020-08-19T01:01:02.000Z",
        "current_status": {
          "status": "In Progress",
          "category": "IN_PROGRESS"
        },
        "work_order_id": "work-order",
        "location_id": "location",
        "resource_id": "resource",
        "assigned_user": "user",
        "is_retry": false,
        "context_id": "context",
        "_links": {
          "self": {
            "href": "https://api.nterprise.com/actions/action"
          },
          "nter:cycle-context": {
            "href": "https://api.nterprise.com/contexts/context"
          },
          "nter:cycle-resource": {
            "href": "https://api.nterprise.com/resources/resource"
          },
          "nter:cycle-location": {
            "href": "https://api.nterprise.com/locations/location"
          },
          "nter:cycle-work-order": {
            "href": "https://api.nterprise.com/work-orders/work-order"
          },
          "nter:cycle-assigned-user": {
            "href": "https://api.nterprise.com/users/user"
          }
        }
      }
    ]
  }
}
```

### DELETE /work-orders/{work_order_id}/cycles

<a id="opIdcancelWorkOrderCycles"></a>

Cancels all cycles that are not in COMPLETED or CANCELLED status

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:update</li></ul>
</aside>

<h3 id="cancelworkordercycles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|

### GET /work-orders/{work_order_id}/cycles/{cycle_id}

<a id="opIdfetchCycleById"></a>

Fetches a cycle

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:read</li></ul>
</aside>

<h3 id="fetchcyclebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
|cycle_id|path|string|true|Id of the cycle|

> Example responses

> 200 Response

```json
{
  "action_id": "cycle",
  "label": "Cycle 42 for work order: configure iPads",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "current_status": {
    "status": "In Progress",
    "category": "IN_PROGRESS"
  },
  "work_order_id": "work-order",
  "location_id": "location",
  "resource_id": "resource",
  "assigned_user": "user",
  "is_retry": false,
  "context_id": "context",
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/actions/action"
    },
    "nter:cycle-context": {
      "href": "https://api.nterprise.com/contexts/context"
    },
    "nter:cycle-resource": {
      "href": "https://api.nterprise.com/resources/resource"
    },
    "nter:cycle-location": {
      "href": "https://api.nterprise.com/locations/location"
    },
    "nter:cycle-work-order": {
      "href": "https://api.nterprise.com/work-orders/work-order"
    },
    "nter:cycle-assigned-user": {
      "href": "https://api.nterprise.com/users/user"
    }
  }
}
```

### DELETE /work-orders/{work_order_id}/cycles/{cycle_id}

<a id="opIdcancelCycle"></a>

Cancels a cycle

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:read</li></ul>
</aside>

<h3 id="cancelcycle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
|cycle_id|path|string|true|Id of the cycle|

> Example responses

> 200 Response

```json
{
  "action_id": "cycle",
  "label": "Cycle 42 for work order: configure iPads",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "current_status": {
    "status": "In Progress",
    "category": "IN_PROGRESS"
  },
  "work_order_id": "work-order",
  "location_id": "location",
  "resource_id": "resource",
  "assigned_user": "user",
  "is_retry": false,
  "context_id": "context",
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/actions/action"
    },
    "nter:cycle-context": {
      "href": "https://api.nterprise.com/contexts/context"
    },
    "nter:cycle-resource": {
      "href": "https://api.nterprise.com/resources/resource"
    },
    "nter:cycle-location": {
      "href": "https://api.nterprise.com/locations/location"
    },
    "nter:cycle-work-order": {
      "href": "https://api.nterprise.com/work-orders/work-order"
    },
    "nter:cycle-assigned-user": {
      "href": "https://api.nterprise.com/users/user"
    }
  }
}
```

### GET /work-orders/{work_order_id}/relations

<a id="opIdfetchRelationsForWorkOrder"></a>

Fetches the relations for a workOrder

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:read</li></ul>
</aside>

<h3 id="fetchrelationsforworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
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

### POST /work-orders/{work_order_id}/relations

<a id="opIdcreateRelationForWorkOrder"></a>

Creates a relation for a workOrder

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:attach</li></ul>
</aside>

> Body parameter

<h3 id="createrelationforworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
|relation|body|string|true|Type of relation|
|entity|body|object|true|none|
|&nbsp;&nbsp; entity_id|body|string|true|Entity identifier|
|&nbsp;&nbsp; entity_type|body|any|true|none|

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

> 400 Response

```json
{
  "title": "Bad Request",
  "type": "https://docs.nterprise.com/api/problem/BadRequest",
  "status": 400,
  "detail": "Invalid Data",
  "validation_messages": [
    {
      "keyword": "field",
      "dataPath": ".field",
      "schemaPath": "https://docs.nterprise.com/schemas/niagara/foo.json#/properties/field",
      "params": {
        "type": "string"
      },
      "message": "should be string"
    }
  ]
}
```

> 401 Response

```json
{
  "title": "Unauthorized",
  "type": "https://docs.nterprise.com/api/problem/Unauthorized",
  "status": 401,
  "detail": "Invalid authorization token"
}
```

> 403 Response

```json
{
  "title": "Forbidden",
  "type": "https://docs.nterprise.com/api/problem/Forbidden",
  "status": 403,
  "detail": "You are forbidden from accessing this resource"
}
```

### DELETE /work-orders/{work_order_id}/relations/{relation_id}

<a id="opIddeleteRelationForWorkOrder"></a>

Deletes a relation for a workOrder

<aside class="warning">
Permissions required:<br>
<ul><li>work-order:detach</li></ul>
</aside>

<h3 id="deleterelationforworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
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

### GET /work-orders/{work_order_id}/actions

<a id="opIdfetchActionsForWorkOrder"></a>

Fetch a page of actions for a work order

<aside class="warning">
Permissions required:<br>
<ul><li>action:read</li><li>work-order:read</li></ul>
</aside>

<h3 id="fetchactionsforworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|

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

<h1 id="work-orders-action">Action</h1>

## Operations

### POST /work-orders/{work_order_id}/actions

<a id="opIdcreateActionForWorkOrder"></a>

Creates a new action

<aside class="warning">
Permissions required:<br>
<ul><li>action:create</li><li>work-order:read</li></ul>
</aside>

> Body parameter

<h3 id="createactionforworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
|label|body|string|true|Label for the entity|
|entity|body|object|true|Entity the action is configured for|
|&nbsp;&nbsp; entity_id|body|string|true|Entity identifier|
|&nbsp;&nbsp; entity_type|body|any|true|none|
|sequence|body|string|true|When the action should fire|
|event|body|string|true|Possible entity events|
|criteria|body|[object]|true|none|
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
|&nbsp;&nbsp; *anonymous*|body|object|false|Effect which updates an entity|
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

# Embedded Schemas

## WorkOrder
<!-- backwards compatibility -->
<a id="schemaworkorder"></a>
<a id="schema_WorkOrder"></a>
<a id="tocSworkorder"></a>
<a id="tocsworkorder"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|work_order_id|string|true|none|The identifier for the unit|
|label|string|true|none|Label for the entity|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|start_date|string(date-time)|true|read-only|Last date the entity was updated|
|end_date|string(date-time)|true|read-only|Last date the entity was updated|
|description|string¦null|true|none|Detailed description for the work order|
|work_order_type|string|true|none|Type of work order|
|begin_date|string(date-time)|true|none|Begin date|
|due_date|string(date-time)|true|none|Due date|
|current_status|object|true|none|Defines the properties for a status|
|&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|cycles|object|true|none|A count of cycles needed for this entity broken down by status category and active/in-active status|
|&nbsp;&nbsp; assigned|number|true|none|Number of assigned cycles|
|&nbsp;&nbsp; work_flow|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; work_flow_id|string|true|read-only|Entity identifier|
|&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp; schema_version|string|true|none|Version of the workflow schema used|
|&nbsp;&nbsp;&nbsp;&nbsp; workflow_version|integer|true|read-only|Version number for the work flows (the number of times it has been changed|
|&nbsp;&nbsp;&nbsp;&nbsp; applies_to|string|true|none|The entity type this work flow applies too|
|&nbsp;&nbsp;&nbsp;&nbsp; starts_at|string|true|none|Starting step|
|&nbsp;&nbsp;&nbsp;&nbsp; steps|object|true|none|Steps for the workflow|
|input_filter|[object]|true|none|Input Filters allow custom fields to be defined for entities|

#### Specification

```yaml
type: object
x-model: WorkOrder
required:
  - work_order_id
  - label
  - created
  - updated
  - start_date
  - end_date
  - description
  - work_order_type
  - begin_date
  - due_date
  - current_status
  - cycles
  - input_filter
properties:
  work_order_id:
    type: string
    description: The identifier for the unit
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
  start_date:
    type: string
    description: Last date the entity was updated
    format: date-time
    readOnly: true
  end_date:
    type: string
    description: Last date the entity was updated
    format: date-time
    readOnly: true
  description:
    type: string
    nullable: true
    description: Detailed description for the work order
  work_order_type:
    type: string
    description: Type of work order
    enum:
      - device
  begin_date:
    type: string
    format: date-time
    description: Begin date
  due_date:
    type: string
    format: date-time
    description: Due date
  current_status:
    type: object
    x-model: Status
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
  cycles:
    type: object
    required:
      - assigned
      - work_flow
    properties:
      assigned:
        type: number
        description: Number of assigned cycles
      work_flow:
        type: object
        x-model: WorkFlow
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
            type: string
            description: Date the entity was created
            format: date-time
            readOnly: true
          updated:
            type: string
            description: Last date the entity was updated
            format: date-time
            readOnly: true
          schema_version:
            type: string
            description: Version of the workflow schema used
            enum:
              - "1.0"
          workflow_version:
            type: integer
            description: Version number for the work flows (the number of times it has been
              changed
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
                    additionalProperties: false
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
                          additionalProperties: false
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
                            additionalProperties: false
                            required:
                              - retry
                              - finally
                            properties:
                              retry:
                                type: integer
                                description: "Number of times to retry this step. Note: retry will only occur on
                                  steps which automatically failed. If the step
                                  was transitioned using the 'goto-fail' step,
                                  the actions will be fired but the step WILL
                                  NOT be re-tried"
                                minimum: 0
                                maximum: 10
                                default: 0
                              finally:
                                type: object
                                additionalProperties: false
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
                        additionalProperties: false
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
                            additionalProperties: false
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
                  - &a13
                    $schema: http://json-schema.org/draft-07/schema#
                    $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/function/setEntityStatus.json
                    description: Updates the status on the Work Flow entity.
                    type: object
                    additionalProperties: false
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
                        additionalProperties: false
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
                            additionalProperties: false
                            required:
                              - status
                            properties:
                              status:
                                $schema: http://json-schema.org/draft-07/schema#
                                $id: https://docs.nterprise.com/schemas/niagara/status.json
                                type: object
                                x-model: Status
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
                  - &a14
                    $schema: http://json-schema.org/draft-07/schema#
                    $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/followPDFInstructions.json
                    description: Display a link or modal to a user which contains instructions from
                      a PDF
                    type: object
                    additionalProperties: false
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
                        additionalProperties: false
                        required:
                          - component
                          - payload
                        properties:
                          component:
                            enum:
                              - follow-pdf-instructions
                          payload:
                            type: object
                            additionalProperties: false
                            required:
                              - attachment_id
                            properties:
                              attachment_id:
                                description: The identifier for the batch
                                type: string
                                readOnly: true
                                pattern: ^[0-9a-zA-Z-_]+$
                  - &a15
                    $schema: http://json-schema.org/draft-07/schema#
                    $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/manualDataEntry.json
                    description: Ask the user to manually enter (or confirm) data for an entity
                    type: object
                    additionalProperties: false
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
                        additionalProperties: false
                        properties:
                          component:
                            enum:
                              - manual-data-entry
                          payload:
                            type: object
                            additionalProperties: false
                            required:
                              - fields
                            properties:
                              fields:
                                type: array
                                description: Configuration for each field
                                items:
                                  type: object
                                  additionalProperties: false
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
                                        function. It singles that the user is
                                        required to input data at this step. If
                                        the field is required on the entity, the
                                        user will be presented with a validation
                                        message"
                                    entity_field:
                                      type: string
                                      description: JSON Path to the field on the entity. If the path does not start
                                        with '$' then the entity on the context
                                        is assumed. Otherwise the data will be
                                        set on the context path
                  - &a16
                    $schema: http://json-schema.org/draft-07/schema#
                    $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/taskList.json
                    description: Ask the user to follow a list and check off boxes
                    type: object
                    additionalProperties: false
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
                        additionalProperties: false
                        properties:
                          component:
                            enum:
                              - task-list
                          payload:
                            type: object
                            additionalProperties: false
                            required:
                              - items
                            properties:
                              is_qc:
                                type: boolean
                                description: Flags this list as a QC task list. This means that a different user
                                  can close the task to one previously on the
                                  context
                              items:
                                type: array
                                description: Configuration for each task list item
                                items:
                                  type: object
                                  additionalProperties: false
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
                  - &a17
                    $schema: http://json-schema.org/draft-07/schema#
                    $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/machine/aceIos.json
                    description: Run the ACE-IOS application to provision iOS devices
                    type: object
                    additionalProperties: false
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
                        additionalProperties: false
                        required:
                          - application
                          - configuration
                        properties:
                          component:
                            type: string
                            description: Name of the UI component
                          application:
                            type: object
                            additionalProperties: false
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
                            additionalProperties: false
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
                                  additionalProperties: false
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
                                  will cause the extension to poll the device
                                  for installed applications. Once all the
                                  applications have been installed, this step
                                  can be completed
                                items:
                                  type: string
                              wait_for_icon_layout:
                                type: array
                                description: Ordered nested list of icons representing the home screen layout on
                                  the device. This will cause the extension to
                                  poll the device for the desired icon layout.
                                  Once the icon layout matches, this step can be
                                  completed
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
                          additionalProperties: false
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
                  - &a18
                    $schema: http://json-schema.org/draft-07/schema#
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
                          additionalProperties: false
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
                              additionalProperties: false
                              description: The event conditions that have to be met
                              allOf:
                                - *a12
                  - $schema: http://json-schema.org/draft-07/schema#
                    $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepFastTrack.json
                    description: A step which allows parallel execution
                    type: object
                    required:
                      - step_type
                      - label
                      - goto
                      - goto_fail
                      - branches
                    additionalProperties: false
                    properties:
                      step_type:
                        type: string
                        enum:
                          - parallel
                      label: *a4
                      on_start: *a1
                      on_complete: *a1
                      goto: *a5
                      goto_fail: *a6
                      context: *a7
                      on_error: *a8
                      on_timeout: *a9
                      fail_condition:
                        description: How to treat failures. For ALL, all branches must have failures to
                          be considered failed. ANY means at least one failure
                          will fail the step. NONE means allow failures.
                        type: string
                        enum:
                          - ALL
                          - ANY
                          - NONE
                      fail_fast:
                        type: boolean
                        description: Set the context to fail on the first branch to fail
                        default: false
                      branches:
                        type: array
                        description: Steps to execute in each path
                        maximum: 5
                        minimum: 2
                        items:
                          type: object
                          required:
                            - starts_at
                            - steps
                          additionalProperties: false
                          properties:
                            starts_at:
                              type: string
                              description: Starting step
                            steps:
                              type: object
                              description: Steps for the branch
                              uniqueItems: true
                              additionalProperties: false
                              patternProperties:
                                "^[A-Za-z][A-Za-z0-9-]*$":
                                  oneOf:
                                    - *a13
                                    - *a14
                                    - *a15
                                    - *a16
                                    - *a17
                                    - *a12
                                    - *a18
    allOf:
      - description: A count of cycles needed for this entity broken down by status
          category and active/in-active status
        type: object
        required:
          - pending
          - in_progress
          - verifying
          - complete
          - blocked
          - cancelled
        properties:
          pending:
            type: integer
            description: The number of cycles pending
          needed:
            type: integer
            description: The number of cycles needed
            minimum: 1
          in_progress:
            type: integer
            description: The number of cycles in progress
          verifying:
            type: integer
            description: The number of cycles verifying
          complete:
            type: integer
            description: The number of cycles complete
          blocked:
            type: integer
            description: The number of cycles blocked
          cancelled:
            type: integer
            description: The number of cycles cancelled
          active:
            type: integer
            description: The number of active cycles. Active cycles is the sum of pending,
              in_progress, verifying, and blocked
            readOnly: true
          in_active:
            type: integer
            description: The number of in_active cycles. Active cycles is the sum of
              cancelled and complete
            readOnly: true
  input_filter:
    type: array
    x-model: InputFilter
    description: Input Filters allow custom fields to be defined for entities
    x-nter-see: https://docs.nterprise.com/niagara/inputFilter.html
    x-nter-no-example: true
    items:
      type: object
      description: Input filter specification
      required:
        - label
        - key
        - filters
        - validators
      additionalProperties: false
      properties:
        label:
          type: string
          description: Human readable name
          x-nter-skip-param: true
        key:
          type: string
          description: Slug used to store the property
          readOnly: true
          pattern: ^[a-z0-9]+(?:_[a-z0-9]+)*$
          x-nter-skip-param: true
        filters:
          type: array
          description: A Collection of filters applied to the field
          maxItems: 100
          x-nter-skip-param: true
          items:
            anyOf:
              - x-nter-skip-param: true
                type: object
                x-model: FilterAllowed
                additionalProperties: false
                description: This filter will set the value based on a list of approved values.
                  If the value is not in the list, it will then be set to empty
                  unless the default option is set
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - allowed_list
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - approved_values
                    properties:
                      approved_values:
                        type: array
                        minimum: 1
                        maximum: 100
                        description: The list of approved values
                        x-nter-skip-param: true
                        items:
                          type: string
                      check_case:
                        type: boolean
                        description: Perform a case sensitive match. By default will not match case
                        default: false
                        x-nter-skip-param: true
                      default:
                        type: string
                        nullable: true
                        description: If this is set and the value is not in the approved_list, set the
                          value to this
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterAlpha
                additionalProperties: false
                description: This filter will remove all non numbers from the value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - alpha
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterBoolean
                additionalProperties: false
                description: This filter will make the value true or false
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - boolean
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterCamelCase
                additionalProperties: false
                description: Make the value camelCase
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - camel
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterDate
                additionalProperties: false
                description: Filter to transform a value into a date
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - date
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: Date filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterDigits
                additionalProperties: false
                description: This filter will remove all numbers from the value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - digits
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterEmpty
                additionalProperties: false
                description: Filter to transform values into null. This is helpful when trying
                  to make a value required
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - empty
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: empty filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterFloat
                additionalProperties: false
                description: Filter to transform a value into a float. Non numeric characters
                  (including comma) will be removed
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - float
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    properties:
                      precision:
                        type: integer
                        minimum: 1
                        maximum: 8
                        default: 3
                        description: How many decimal places to preserve
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterKebabCase
                additionalProperties: false
                description: Make the value kebab-case
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - kebab
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterLower
                additionalProperties: false
                description: Make the value lowercase
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - lower
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterNumber
                additionalProperties: false
                description: Filter to transform a value into a number. Non numeric characters
                  (including comma and decimal points) will be removed
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - number
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: Number filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterPrefix
                additionalProperties: false
                description: Add a prefix to the start of a string. If the string already start
                  with the prefix, it will not prepend.
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - prefix
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - prefix
                    properties:
                      prefix:
                        type: string
                        description: The prefix to add
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterSnakeCase
                additionalProperties: false
                description: Make the value snake_case
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - snake
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterString
                additionalProperties: false
                description: Filter to transform a value into a string
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - string
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: String filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                description: Add a suffix to the start of a string. If the string already start
                  with the suffix, it will not append.
                type: object
                x-model: FilterSuffix
                additionalProperties: false
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - suffix
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - suffix
                    properties:
                      suffix:
                        type: string
                        description: The suffix to add
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterTrim
                additionalProperties: false
                description: Filter to trim whitespace from a value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - trim
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: By default will trim from the start and end
                    x-nter-skip-param: true
                    properties:
                      start:
                        type: boolean
                        description: Remove white space from the start of the string
                        default: true
                        x-nter-skip-param: true
                      end:
                        type: boolean
                        description: Remove white space from the end of the string
                        default: true
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: FilterUpper
                additionalProperties: false
                description: Make the value UPPERCASE
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - upper
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: This filter has no options
                    x-nter-skip-param: true
        validators:
          type: array
          description: A set of validators to use for this field
          maxItems: 100
          x-nter-skip-param: true
          items:
            anyOf:
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorAlways
                additionalProperties: false
                description: This is always valid
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - always
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: This validator has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorBetween
                additionalProperties: false
                description: Validate number is between two values. By default, min and max are
                  included
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - between
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - min
                      - max
                    properties:
                      min:
                        type: number
                        description: Minimum value to check
                        x-nter-skip-param: true
                      max:
                        type: number
                        description: The maximum value to check
                        x-nter-skip-param: true
                      precision:
                        type: integer
                        description: When number is a float, this will set the decimal precision
                        minimum: 1
                        maximum: 8
                        default: 3
                        x-nter-skip-param: true
                      include:
                        type: boolean
                        description: Include the value in the check
                        default: true
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorBlackList
                additionalProperties: false
                description: Validate value does not match a list (black list)
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - black_list
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - list
                    properties:
                      list:
                        type: array
                        minimum: 1
                        maximum: 100
                        description: The list of approved values
                        items:
                          type: string
                        x-nter-skip-param: true
                      check_case:
                        type: boolean
                        description: Perform a case sensitive match. By default will not match case
                        default: false
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorContains
                additionalProperties: false
                description: Validate string contains a value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - contains
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - contains
                    properties:
                      contains:
                        type: string
                        description: String must contain with this value
                        x-nter-skip-param: true
                      check_case:
                        type: boolean
                        description: Perform a case sensitive match. By default will not match case
                        default: false
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorEmailAddress
                additionalProperties: false
                description: Validate string is a correct email address
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - email_address
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    properties:
                      strict:
                        type: boolean
                        description: Enforce strict standards from ARPA. This will enforce the length of
                          the string
                        default: true
                        x-nter-skip-param: true
                      lookup:
                        type: boolean
                        description: Look up the host name and check if it has a valid MX record
                        default: false
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorEndsWith
                additionalProperties: false
                description: Validate string ends with a value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - ends_with
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - ends_with
                    properties:
                      ends_with:
                        type: string
                        description: String must end with this value
                        x-nter-skip-param: true
                      check_case:
                        type: boolean
                        description: Perform a case sensitive match. By default will not match case
                        default: false
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorEquals
                additionalProperties: false
                description: Validate number equals a value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - equals
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - value
                    properties:
                      value:
                        type: number
                        description: The value to compare against
                        x-nter-skip-param: true
                      precision:
                        type: integer
                        description: When value is a float, this will set the decimal precision
                        minimum: 1
                        maximum: 8
                        default: 3
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorGreaterThan
                additionalProperties: false
                description: Validate number is greater than a value. By default, this will
                  check if value is greater than or equals to
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - greater_than
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - value
                    properties:
                      value:
                        type: number
                        description: The value to compare against
                        x-nter-skip-param: true
                      precision:
                        type: integer
                        description: When number is a float, this will set the decimal precision
                        minimum: 1
                        maximum: 8
                        default: 3
                        x-nter-skip-param: true
                      include:
                        type: boolean
                        description: Include the value in the check
                        default: true
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorHostName
                additionalProperties: false
                description: Validate string has a correct DNS records
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - hostname
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    properties:
                      record_type:
                        type: string
                        description: DNS record type to validate
                        default: A
                        enum:
                          - A
                          - AAAA
                          - AFSDB
                          - APL
                          - CAA
                          - CDNSKEY
                          - CDS
                          - CERT
                          - CNAME
                          - CSYNC
                          - DHCID
                          - DLV
                          - DNAME
                          - DNSKEY
                          - DS
                          - HIP
                          - IPSECKEY
                          - KEY
                          - KX
                          - LOC
                          - MX
                          - NAPTR
                          - NS
                          - NSEC
                          - NSEC3
                          - NSEC3PARAM
                          - OPENPGPKEY
                          - PTR
                          - RRSIG
                          - RP
                          - SIG
                          - SMIMEA
                          - SOA
                          - SRV
                          - SSHFP
                          - TA
                          - TKEY
                          - TLSA
                          - TSIG
                          - TXT
                          - URI
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorIPAddress
                additionalProperties: false
                description: Validate string matches an IP address format. Defaults to matching
                  IPv4
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - ip_address
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    properties:
                      version:
                        type: string
                        description: IP Version to match against
                        enum:
                          - IPv4
                          - IPv6
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorLength
                additionalProperties: false
                description: Validate string is a certain length
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - length
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - length
                    properties:
                      length:
                        type: number
                        description: Length to compare with
                        x-nter-skip-param: true
                      operator:
                        type: string
                        description: Which type of length comparision to make
                        default: equals
                        enum:
                          - equals
                          - less_than
                          - less_than_equals
                          - greater_than
                          - greater_than_equals
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorLessThan
                additionalProperties: false
                description: Validate number is less than a value. By default, this will check
                  if value is less than or equals to
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - less_than
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - value
                    properties:
                      value:
                        type: number
                        description: The value to compare against
                        x-nter-skip-param: true
                      precision:
                        type: integer
                        description: When number is a float, this will set the decimal precision
                        minimum: 1
                        maximum: 8
                        default: 3
                        x-nter-skip-param: true
                      include:
                        type: boolean
                        description: Include the value in the check
                        default: true
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorMacAddress
                additionalProperties: false
                description: Validate string matches an MAC address format
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - mac_address
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: This validator has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorMask
                additionalProperties: false
                description: Validate string matches a regular expression
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - mask
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - mask
                    properties:
                      mask:
                        type: string
                        description: Mask to validate against
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorNever
                additionalProperties: false
                description: This is never valid
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - never
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: This validator has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorRequired
                additionalProperties: false
                description: Validates that the value is present and not set to 'null', '0' or
                  an empty string
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - required
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    description: Required validator has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorStartsWith
                additionalProperties: false
                description: Validate string starts with a value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - starts_with
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - starts_with
                    properties:
                      starts_with:
                        type: string
                        description: String must start with this value
                        x-nter-skip-param: true
                      check_case:
                        type: boolean
                        description: Perform a case sensitive match. By default will not match case
                        default: false
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorStep
                additionalProperties: false
                description: Validates that a value follows a step. Both start and end options
                  do not have to sync with the step. If they do not sync then
                  find the nearest step.
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - step
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - step
                    properties:
                      step:
                        type: number
                        description: The step value
                        x-nter-skip-param: true
                      start:
                        type: number
                        nullable: true
                        description: Start stepping at this value
                        x-nter-skip-param: true
                      end:
                        type: number
                        nullable: true
                        description: End stepping at this value
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorUri
                additionalProperties: false
                description: Validate string matches an URI
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - uri
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    properties:
                      schemes:
                        type: array
                        description: Schemes to match. By default all are matched
                        items:
                          type: string
                          enum:
                            - "http:"
                            - "https:"
                            - "sip:"
                            - "sips:"
                            - "ftp:"
                            - "ftps:"
                            - "ldap:"
                            - "ldaps:"
                            - "file:"
                            - "udp:"
                            - "tcp:"
                            - "urn:"
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                x-model: ValidatorWhiteList
                additionalProperties: false
                description: Validate value matches a list (white list)
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - white_list
                    x-nter-skip-param: true
                  options:
                    type: object
                    additionalProperties: false
                    x-nter-skip-param: true
                    required:
                      - list
                    properties:
                      list:
                        type: array
                        minimum: 1
                        maximum: 100
                        description: The list of approved values
                        items:
                          type: string
                        x-nter-skip-param: true
                      check_case:
                        type: boolean
                        description: Perform a case sensitive match. By default will not match case
                        default: false
                        x-nter-skip-param: true
        locked:
          type: boolean
          description: Defines the field as being locked higher up in the hierarchy. This
            prevents child entities from making changes to the filters or
            validators
          x-nter-skip-param: true
        description:
          type: string
          nullable: true
          description: Provide a description for the field
          x-nter-skip-param: true
        value:
          type: string
          nullable: true
          description: The validated and filtered value. This is always a string so
            consumers MUST extrapolate out type
          x-nter-skip-param: true
        inherited_from:
          x-nter-skip-param: true
          oneOf:
            - type: "null"
              x-nter-skip-param: true
            - x-nter-skip-param: true
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
        apply_to:
          x-nter-skip-param: true
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
  note_count:
    type: object
    description: Defines the properties for note count
    additionalProperties: false
    required:
      - total
      - open_issues
      - closed_issues
    properties:
      total:
        description: The total count of notes
        type: number
        minimum: 0
      open_issues:
        description: The count of open issue notes
        type: number
        minimum: 0
      closed_issues:
        description: The count of closed issue notes
        type: number
        minimum: 0

```

