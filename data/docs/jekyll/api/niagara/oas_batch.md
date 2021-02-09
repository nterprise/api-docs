---
layout: page
parent: Niagara API
nav_order: 2
redirect_from:
  - /rel/batches
title: Batches
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="batches">Batches</h1>

* Do not remove this line (it will not be displayed)
{:toc}

When a Work Order is created to configure Units, the production manager will break down the Work Order into one or more Batches.  For example, if a Work Order requested 500 iPads to be provisioned, and those devices are typically completed in boxes of ten, they may choose to create 50 Batches of 10.

Batches contain all of the information from the Work Order, including the Workflow, Begin and Due Dates, but also the assigned technician(s).

Each Batch is then placed into a Production Queue, where the assigned technician will access as part of their assignments.

Cycles in a batch can be modified after the Batch is created; however, in-flight cycles will continue to process until completion or failure.

Batches create a relationship between the `work order` and the `queue` allowing queues to be filtered by the work order

## Security Considerations

Batches descend from a `queue.` A User must be granted the `create.batch` permission and have access to queue before a batch can be created.

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|batch:create|Allows creating a batch|
|batch:update|Allows editing a batch|
|batch:delete|Allows deleting a batch|
|batch:read|Allows access to a batch|
|batch:attach|Allows attaching a relation from a batch|
|batch:detach|Allows detaching a relation from a batch|
|batch:all|Allows reading all batches|

<h1 id="batches-batch">Batch</h1>

## Operations

### GET /batches

<a id="opIdfetchAllBatches"></a>

Fetches A Page of batches

<aside class="warning">
Permissions required:<br>
<ul><li>batch:all</li></ul>
</aside>

<h3 id="fetchallbatches-parameters">Parameters</h3>

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
    "nter:batches": [
      {
        "batch_id": "batch",
        "label": "Batch A",
        "created": "2019-08-19T00:01:02.000Z",
        "updated": "2020-08-19T01:01:02.000Z",
        "queue": {
          "queue_id": "queue",
          "label": "Fast Lane",
          "created": "2019-10-09T19:30:35.639Z",
          "updated": "2019-10-09T19:30:35.639Z",
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
          "priority": "b",
          "active_work_orders": 40,
          "active_batches": 60,
          "active_cycles": 1,
          "is_active": true,
          "min_due_date": "2020-08-19T02:01:02.000Z",
          "max_due_date": "2022-08-19T02:01:02.000Z"
        },
        "order": "a",
        "number_cycles": 4,
        "cycles": {
          "needed": 4,
          "pending": 0,
          "in_progress": 0,
          "verifying": 0,
          "complete": 0,
          "blocked": 0,
          "cancelled": 0,
          "active": 0,
          "in_active": 0
        },
        "work_order": {
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
            "pending": 0,
            "in_progress": 0,
            "verifying": 0,
            "complete": 0,
            "blocked": 0,
            "cancelled": 0,
            "active": 0,
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
          "input_filter": []
        },
        "current_status": {
          "status": "Reticulating Splines",
          "description": "For something that is Reticulating Splines",
          "category": "IN_PROGRESS",
          "order": 2
        },
        "total_assigned_users": 0,
        "assigned_users": [],
        "_links": {
          "nter:batch-work-order": {
            "href": "https://api.nterprise.com/work-orders/work-order"
          },
          "nter:batch-queue": {
            "href": "https://api.nterprise.com/queues/queue"
          },
          "nter:batch-project": {
            "href": "https://api.nterprise.com/projects/project"
          },
          "nter:batch-program": {
            "href": "https://api.nterprise.com/programs/program"
          },
          "nter:batch-customer": {
            "href": "https://api.nterprise.com/customers/customer"
          },
          "nter:batch-location": {
            "href": "https://api.nterprise.com/locations/location"
          },
          "self": {
            "href": "https://api.nterprise.com/batches/batch"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/batches?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/batches?limit=42"
    }
  }
}
```

### POST /batches

<a id="opIdcreateBatch"></a>

Creates a new batch for a queue

<aside class="warning">
Permissions required:<br>
<ul><li>batch:create</li></ul>
</aside>

> Body parameter

<h3 id="createbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|body|string|false|Order to process the batch|
|current_status|body|any|false|none|
|&nbsp;&nbsp; *anonymous*|body|null|false|none|
|&nbsp;&nbsp; *anonymous*|body|object|false|Defines the properties for a status|
|&nbsp;&nbsp;&nbsp;&nbsp; status|body|string|true|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; category|body|string|true|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp; description|body|string¦null|false|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; order|body|number|false|Order status appears when listing|
|work_order|body|object|true|none|
|&nbsp;&nbsp; work_order_id|body|string|true|The identifier for the unit|
|queue|body|object|true|none|
|&nbsp;&nbsp; queue_id|body|string|true|The identifier for the queue|
|number_cycles|body|integer|true|The number of cycles for this batch|

> Example responses

> 200 Response

```json
{
  "batch_id": "batch",
  "label": "Batch A",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "queue": {
    "queue_id": "queue",
    "label": "Fast Lane",
    "created": "2019-10-09T19:30:35.639Z",
    "updated": "2019-10-09T19:30:35.639Z",
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
    "priority": "b",
    "active_work_orders": 40,
    "active_batches": 60,
    "active_cycles": 1,
    "is_active": true,
    "min_due_date": "2020-08-19T02:01:02.000Z",
    "max_due_date": "2022-08-19T02:01:02.000Z"
  },
  "order": "a",
  "number_cycles": 4,
  "cycles": {
    "needed": 4,
    "pending": 0,
    "in_progress": 0,
    "verifying": 0,
    "complete": 0,
    "blocked": 0,
    "cancelled": 0,
    "active": 0,
    "in_active": 0
  },
  "work_order": {
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
      "pending": 0,
      "in_progress": 0,
      "verifying": 0,
      "complete": 0,
      "blocked": 0,
      "cancelled": 0,
      "active": 0,
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
    "input_filter": []
  },
  "current_status": {
    "status": "Reticulating Splines",
    "description": "For something that is Reticulating Splines",
    "category": "IN_PROGRESS",
    "order": 2
  },
  "total_assigned_users": 0,
  "assigned_users": [],
  "_embedded": {
    "nter:batch-queue": [],
    "nter:batch-work-order": [],
    "nter:batch-customer": [],
    "nter:batch-program": [],
    "nter:batch-project": [],
    "nter:batch-location": [],
    "nter:batch-assigned-users": []
  },
  "_links": {
    "nter:batch-work-order": {
      "href": "https://api.nterprise.com/work-orders/work-order"
    },
    "nter:batch-queue": {
      "href": "https://api.nterprise.com/queues/queue"
    },
    "nter:batch-project": {
      "href": "https://api.nterprise.com/projects/project"
    },
    "nter:batch-program": {
      "href": "https://api.nterprise.com/programs/program"
    },
    "nter:batch-customer": {
      "href": "https://api.nterprise.com/customers/customer"
    },
    "nter:batch-location": {
      "href": "https://api.nterprise.com/locations/location"
    },
    "self": {
      "href": "https://api.nterprise.com/batches/batch"
    }
  }
}
```

### PATCH /batches

<a id="opIdcreateMultipleBatches"></a>

Create multiple batches

<aside class="warning">
Permissions required:<br>
<ul><li>batch:update</li></ul>
</aside>

> Body parameter

<h3 id="createmultiplebatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Patch|header|string|false|none|
|total|body|number|false|Total number of batches to create|
|queue|body|object|true|none|
|&nbsp;&nbsp; queue_id|body|string|true|The identifier for the queue|
|work_order|body|object|true|none|
|&nbsp;&nbsp; work_order_id|body|string|true|The identifier for the unit|
|number_cycles|body|integer|true|The number of cycles for this batch|
|users|body|[object]|false|A List of users to assign as technicians to assign to the batches|
|&nbsp;&nbsp; user_id|body|string|false|The identifier for the user|

### GET /batches/{batch_id}

<a id="opIdfetchBatchById"></a>

Fetches a batch

<aside class="warning">
Permissions required:<br>
<ul><li>batch:read</li></ul>
</aside>

<h3 id="fetchbatchbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|string|true|Id of the batch|

> Example responses

> 200 Response

```json
{
  "batch_id": "batch",
  "label": "Batch A",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "queue": {
    "queue_id": "queue",
    "label": "Fast Lane",
    "created": "2019-10-09T19:30:35.639Z",
    "updated": "2019-10-09T19:30:35.639Z",
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
    "priority": "b",
    "active_work_orders": 40,
    "active_batches": 60,
    "active_cycles": 1,
    "is_active": true,
    "min_due_date": "2020-08-19T02:01:02.000Z",
    "max_due_date": "2022-08-19T02:01:02.000Z"
  },
  "order": "a",
  "number_cycles": 4,
  "cycles": {
    "needed": 4,
    "pending": 0,
    "in_progress": 0,
    "verifying": 0,
    "complete": 0,
    "blocked": 0,
    "cancelled": 0,
    "active": 0,
    "in_active": 0
  },
  "work_order": {
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
      "pending": 0,
      "in_progress": 0,
      "verifying": 0,
      "complete": 0,
      "blocked": 0,
      "cancelled": 0,
      "active": 0,
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
    "input_filter": []
  },
  "current_status": {
    "status": "Reticulating Splines",
    "description": "For something that is Reticulating Splines",
    "category": "IN_PROGRESS",
    "order": 2
  },
  "total_assigned_users": 0,
  "assigned_users": [],
  "_embedded": {
    "nter:batch-queue": [],
    "nter:batch-work-order": [],
    "nter:batch-customer": [],
    "nter:batch-program": [],
    "nter:batch-project": [],
    "nter:batch-location": [],
    "nter:batch-assigned-users": []
  },
  "_links": {
    "nter:batch-work-order": {
      "href": "https://api.nterprise.com/work-orders/work-order"
    },
    "nter:batch-queue": {
      "href": "https://api.nterprise.com/queues/queue"
    },
    "nter:batch-project": {
      "href": "https://api.nterprise.com/projects/project"
    },
    "nter:batch-program": {
      "href": "https://api.nterprise.com/programs/program"
    },
    "nter:batch-customer": {
      "href": "https://api.nterprise.com/customers/customer"
    },
    "nter:batch-location": {
      "href": "https://api.nterprise.com/locations/location"
    },
    "self": {
      "href": "https://api.nterprise.com/batches/batch"
    }
  }
}
```

### DELETE /batches/{batch_id}

<a id="opIddeleteBatch"></a>

This will delete the batch

<aside class="warning">
Permissions required:<br>
<ul><li>batch:delete</li></ul>
</aside>

<h3 id="deletebatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|string|true|Id of the batch|

### GET /batches/{batch_id}/cycles

<a id="opIdfetchCyclesForBatch"></a>

Fetch a page of cycles for a batch

<aside class="warning">
Permissions required:<br>
<ul><li>batch:read</li></ul>
</aside>

<h3 id="fetchcyclesforbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|string|true|Id of the batch|
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

### GET /batches/{batch_id}/relations

<a id="opIdfetchRelationsForBatch"></a>

Fetches the relations for a batch

<aside class="warning">
Permissions required:<br>
<ul><li>batch:read</li></ul>
</aside>

<h3 id="fetchrelationsforbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|string|true|Id of the batch|
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

### POST /batches/{batch_id}/relations

<a id="opIdcreateRelationForBatch"></a>

Creates a relation for a batch

<aside class="warning">
Permissions required:<br>
<ul><li>batch:attach</li></ul>
</aside>

> Body parameter

<h3 id="createrelationforbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|string|true|Id of the batch|
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

### DELETE /batches/{batch_id}/relations/{relation_id}

<a id="opIddeleteRelationForBatch"></a>

Deletes a relation for a batch

<aside class="warning">
Permissions required:<br>
<ul><li>batch:detach</li></ul>
</aside>

<h3 id="deleterelationforbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|string|true|Id of the batch|
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

### GET /batches/{batch_id}/techs

<a id="opIdfetchTechsForBatch"></a>

Fetches the techs for a batch

<aside class="warning">
Permissions required:<br>
<ul><li>batch:read</li></ul>
</aside>

<h3 id="fetchtechsforbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|string|true|Id of the batch|

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

### DELETE /batches/{batch_id}/techs/{tech_id}

<a id="opIddetachTechFromBatch"></a>

Remove tech from batch

<aside class="warning">
Permissions required:<br>
<ul><li>batch:detach</li></ul>
</aside>

<h3 id="detachtechfrombatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|string|true|Id of the batch|
|tech_id|path|string|true|Id of the Tech|

# Embedded Schemas

## Batch
<!-- backwards compatibility -->
<a id="schemabatch"></a>
<a id="schema_Batch"></a>
<a id="tocSbatch"></a>
<a id="tocsbatch"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch_id|string|true|read-only|The identifier for the batch|
|label|string|true|none|Label for the entity|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|order|string|true|none|Order to process the batch|
|current_status|any|true|none|none|

#### Specification

```yaml
type: object
x-model: Batch
required:
  - batch_id
  - created
  - current_status
  - cycles
  - label
  - number_cycles
  - order
  - updated
properties:
  batch_id:
    description: The identifier for the batch
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
    description: Order to process the batch
  current_status:
    oneOf:
      - type: "null"
      - type: object
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
  number_cycles:
    type: integer
    description: The number of cycles for this batch
    minimum: 1
  cycles:
    description: A count of cycles needed for this entity broken down by status
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
  total_assigned_users:
    type: number
    description: Number of users assigned to the batch
  assigned_users:
    type: array
    description: Top five users assigned to the batch
    maxItems: 5
    items:
      type: object
      description: User Information
      additionalProperties: false
      required:
        - entity_id
        - entity_type
        - email
      properties:
        user_id:
          type: string
          description: The identifier for the user
          pattern: ^[0-9a-zA-Z-_]+$
        entity_id:
          x-no-api-doc: true
          type: string
          description: Entity identifier
          readOnly: true
          pattern: ^[0-9a-zA-Z-_]+$
        entity_type:
          x-no-api-doc: true
          enum:
            - USER
        label:
          oneOf:
            - type: string
              description: Label for the entity
            - type: "null"
        slug:
          oneOf:
            - type: string
              description: Slug for the entity (Auto-generated from the label)
              readOnly: true
              deprecated: true
              pattern: ^[a-z0-9]+(?:-[a-z0-9]+)*$
            - enum:
                - ""
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
        email:
          type: string
          format: email
          description: Email address
        name:
          type: string
          nullable: true
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
            additionalProperties: false
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
        notifications:
          type: object
          additionalProperties: false
          description: Notification settings
          properties:
            in_app:
              type: boolean
              description: In app notifications allowed
            email:
              type: boolean
              description: Email notifications allowed
            sms:
              type: boolean
              description: SMS notifications allowed

```

