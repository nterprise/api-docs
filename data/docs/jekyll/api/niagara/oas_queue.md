---
layout: page
parent: Niagara API
nav_order: 13
redirect_from:
  - /rel/queues
  - /rel/queue
  - /rel/batch-queue
title: Queues
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="queues">Queues</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Production Queues - user-configurable "buckets" in which to organize work.

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|queue:create|Allows creating a queue|
|queue:update|Allows editing a queue|
|queue:delete|Allows deleting a queue|
|queue:read|Allows access to a queue|
|queue:attach|Allows attaching a relation from a queue|
|queue:detach|Allows detaching a relation from a queue|
|queue:all|Allows reading all queues|

<h1 id="queues-queue">Queue</h1>

## Operations

### GET /queues

<a id="opIdfetchAllQueues"></a>

Fetches A Page of queues

<aside class="warning">
Permissions required:<br>
<ul><li>queue:all</li></ul>
</aside>

<h3 id="fetchallqueues-parameters">Parameters</h3>

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
    "nter:queues": [
      {
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
        "max_due_date": "2022-08-19T02:01:02.000Z",
        "_links": {
          "nter:queue-location": {
            "href": "https://api.nterprise.com/locations/location"
          },
          "nter:queue-batches": {
            "href": "https://api.nterprise.com/queues/queue/batches"
          },
          "self": {
            "href": "https://api.nterprise.com/queues/queue"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/queues?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/queues?limit=42"
    }
  }
}
```

### POST /queues

<a id="opIdcreateQueue"></a>

Creates a queue

<aside class="warning">
Permissions required:<br>
<ul><li>queue:create</li></ul>
</aside>

> Body parameter

<h3 id="createqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Label for the entity|
|location|body|object|true|none|
|&nbsp;&nbsp; location_id|body|string|true|The identifier for the location|
|priority|body|string|true|Priority level for queue|

> Example responses

> 200 Response

```json
{
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
  "max_due_date": "2022-08-19T02:01:02.000Z",
  "_embedded": {
    "nter:queue-location": []
  },
  "_links": {
    "nter:queue-location": {
      "href": "https://api.nterprise.com/locations/location"
    },
    "nter:queue-batches": {
      "href": "https://api.nterprise.com/queues/queue/batches"
    },
    "self": {
      "href": "https://api.nterprise.com/queues/queue"
    }
  }
}
```

### GET /queues/{queue_id}

<a id="opIdfetchQueueById"></a>

Fetches a queue

<aside class="warning">
Permissions required:<br>
<ul><li>queue:read</li></ul>
</aside>

<h3 id="fetchqueuebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue_id|path|string|true|Id for the queue|

> Example responses

> 200 Response

```json
{
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
  "max_due_date": "2022-08-19T02:01:02.000Z",
  "_embedded": {
    "nter:queue-location": []
  },
  "_links": {
    "nter:queue-location": {
      "href": "https://api.nterprise.com/locations/location"
    },
    "nter:queue-batches": {
      "href": "https://api.nterprise.com/queues/queue/batches"
    },
    "self": {
      "href": "https://api.nterprise.com/queues/queue"
    }
  }
}
```

### PUT /queues/{queue_id}

<a id="opIdupdateQueue"></a>

Updates a queue

<aside class="warning">
Permissions required:<br>
<ul><li>queue:update</li></ul>
</aside>

> Body parameter

<h3 id="updatequeue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue_id|path|string|true|Id for the queue|
|label|body|string|true|Label for the entity|
|location|body|object|true|none|
|&nbsp;&nbsp; location_id|body|string|true|The identifier for the location|
|priority|body|string|true|Priority level for queue|

> Example responses

> 200 Response

```json
{
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
  "max_due_date": "2022-08-19T02:01:02.000Z",
  "_embedded": {
    "nter:queue-location": []
  },
  "_links": {
    "nter:queue-location": {
      "href": "https://api.nterprise.com/locations/location"
    },
    "nter:queue-batches": {
      "href": "https://api.nterprise.com/queues/queue/batches"
    },
    "self": {
      "href": "https://api.nterprise.com/queues/queue"
    }
  }
}
```

### DELETE /queues/{queue_id}

<a id="opIddeleteQueue"></a>

Deletes a queue

<aside class="warning">
Permissions required:<br>
<ul><li>queue:delete</li></ul>
</aside>

<h3 id="deletequeue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue_id|path|string|true|Id for the queue|

### GET /queues/{queue_id}/batches

<a id="opIdfetchAllBatchesForQueue"></a>

Fetches A Page of batches for a queue

<aside class="warning">
Permissions required:<br>
<ul><li>queue:read</li></ul>
</aside>

<h3 id="fetchallbatchesforqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue_id|path|string|true|Id for the queue|
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

### GET /queues/{queue_id}/relations

<a id="opIdfetchRelationsForQueue"></a>

Fetches the relations for a queue

<aside class="warning">
Permissions required:<br>
<ul><li>queue:read</li></ul>
</aside>

<h3 id="fetchrelationsforqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue_id|path|string|true|Id for the queue|
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

### POST /queues/{queue_id}/relations

<a id="opIdcreateRelationForQueue"></a>

Creates a relation for a queue

<aside class="warning">
Permissions required:<br>
<ul><li>queue:attach</li></ul>
</aside>

> Body parameter

<h3 id="createrelationforqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue_id|path|string|true|Id for the queue|
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

### DELETE /queues/{queue_id}/relations/{relation_id}

<a id="opIddeleteRelationForQueue"></a>

Deletes a relation for a queue

<aside class="warning">
Permissions required:<br>
<ul><li>queue:detach</li></ul>
</aside>

<h3 id="deleterelationforqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue_id|path|string|true|Id for the queue|
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

> 401 Response

```json
{
  "title": "Unauthorized",
  "type": "https://docs.nterprise.com/api/problem/Unauthorized",
  "status": 401,
  "detail": "Invalid authorization token"
}
```

# Embedded Schemas

## Queue
<!-- backwards compatibility -->
<a id="schemaqueue"></a>
<a id="schema_Queue"></a>
<a id="tocSqueue"></a>
<a id="tocsqueue"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queue_id|string|false|none|The identifier for the queue|
|label|string|true|none|Label for the entity|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|priority|string|true|none|Priority level for queue|
|active_work_orders|number|true|read-only|Total of work orders in an active status|
|active_batches|number|true|read-only|Total of batches in the queue with active cycles|
|active_cycles|number|true|read-only|Total of all active cycles across all batches|
|is_active|boolean|true|read-only|Toggle if the batch has active cycles or batches|
|min_due_date|any|true|none|none|

#### Specification

```yaml
type: object
x-model: Queue
required:
  - updated
  - label
  - created
  - priority
  - active_work_orders
  - active_batches
  - active_cycles
  - is_active
  - min_due_date
  - max_due_date
properties:
  queue_id:
    type: string
    description: The identifier for the queue
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
  priority:
    type: string
    description: Priority level for queue
  active_work_orders:
    type: number
    description: Total of work orders in an active status
    readOnly: true
  active_batches:
    type: number
    description: Total of batches in the queue with active cycles
    readOnly: true
  active_cycles:
    type: number
    description: Total of all active cycles across all batches
    readOnly: true
  is_active:
    type: boolean
    description: Toggle if the batch has active cycles or batches
    readOnly: true
  min_due_date:
    oneOf:
      - type: "null"
      - type: string
        format: date-time
        description: Oldest work order due date in the queue
  max_due_date:
    oneOf:
      - type: "null"
      - type: string
        format: date-time
        description: Newest work order due date in the queue

```

