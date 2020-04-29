---
layout: page
parent: Niagara API
nav_order: 21
redirect_from:
  - /rel/work-orders
  - /rel/batch-work-order
title: Work Orders
---

<h1 id="work-orders">Work Orders</h1>

* Do not remove this line (it will not be displayed)
{:toc}

API for the nterprise application

<h1 id="work-orders-work-order">Work Order</h1>

## Operations

### GET /work-orders - *Fetch work-orders*

<a id="opIdfetchAllWorkOrders"></a>

*Fetch work-orders*

Fetches A Page of work orders

<h3 id="fetchallworkorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|

<h3 id="fetchallworkorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for work orders|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

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
            ]
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
              ]
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
            ]
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
          ]
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
        "cycles": [
          {
            "needed": 1,
            "pending": 1,
            "in_progress": 0,
            "verifying": 0,
            "complete": 0,
            "blocked": 0,
            "cancelled": 0,
            "work_flow": {
              "entity_type": "WKF",
              "entity_id": "work-flow",
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
          }
        ],
        "input_filter": [
          {
            "label": "Serial Number Of part",
            "key": "serial-number",
            "filters": [],
            "validators": [],
            "value": null
          }
        ],
        "_links": {
          "nter:work-order-batches": {
            "href": "https://api.example.com/work-orders/work-order/batches"
          },
          "nter:work-order-queues": {
            "href": "https://api.example.com/work-orders/work-order/queues"
          },
          "self": {
            "href": "https://api.example.com/work-orders/work-order"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.example.com/work-orders?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.example.com/work-orders?limit=42"
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

> 403 Response

```json
{
  "title": "Forbidden",
  "type": "https://docs.nterprise.com/api/problem/Forbidden",
  "status": 403,
  "detail": "You are forbidden from accessing this resource"
}
```

<h3 id="fetchallworkorders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; total_count|number|true|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp; limit|number|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; offset|string¦null|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; _embedded|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; nter:work-orders|[allOf]|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; work_order_id|string|true|none|The identifier for the unit|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; start_date|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; end_date|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|true|none|Detailed description for the work order|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; work_order_type|string|true|none|Type of work order|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; begin_date|string(date-time)|true|none|Begin date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; due_date|string(date-time)|true|none|Due date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; current_status|object|true|none|Defines the properties for a status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; project|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; project_id|string|true|none|Unique identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; start_date|string(date-time)¦null|true|none|Start date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; end_date|string(date-time)¦null|true|none|End date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customer|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customer_id|string|true|read-only|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; external_platform|object|true|none|External Identifiers for the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; allowed_statuses|[object]|true|none|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_programs|number|true|none|Total programs under the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_projects|number|true|none|Total projects under the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; program|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; program_id|string|true|read-only|Unique identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; start_date|string(date-time)¦null|true|none|Start date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; end_date|string(date-time)¦null|true|none|End date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customer|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customer_id|string|true|read-only|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; external_platform|object|true|none|External Identifiers for the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; allowed_statuses|[object]|true|none|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_programs|number|true|none|Total programs under the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_projects|number|true|none|Total projects under the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; allowed_statuses|[object]|true|none|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; allowed_statuses|[object]|true|none|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cycles|[object]|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; needed|integer|true|none|The number of cycles needed|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pending|integer|true|read-only|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; in_progress|integer|true|read-only|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; verifying|integer|true|read-only|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; complete|integer|true|read-only|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; blocked|integer|true|read-only|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cancelled|integer|true|read-only|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; work_flow|object|true|none|Workflow|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; work_flow_id|string|false|read-only|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity_id|string|true|read-only|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity_type|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; schema_version|string|true|none|Version of the workflow schema used|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; workflow_version|integer|false|read-only|Version number for the work flows (the number of times it has been changed|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; applies_to|string|true|none|The entity type this work flow applies too|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; triggered_by|[string]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; starts_at|string|true|none|Starting step|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; steps|object|true|none|Steps for the workflow|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; metadata|object|false|none|Data for the resource as a key value pair|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **additionalProperties**|string|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _links|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; _links|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; next|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

### POST /work-orders - *Create work-order*

<a id="opIdcreateWorkOrder"></a>

*Create work-order*

Creates a work-order

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
|&nbsp;&nbsp;&nbsp;&nbsp; status|body|string|true|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; category|body|string|true|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp; description|body|string¦null|false|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; order|body|number|false|Order status appears when listing|
|project|body|object|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; project_id|body|string|false|Unique identifier|
|start_date|body|string(date-time)¦null|false|Start date|
|end_date|body|string(date-time)¦null|false|End date|
|cycles|body|[object]|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; needed|body|integer|true|The number of cycles needed|
|&nbsp;&nbsp;&nbsp;&nbsp; pending|body|integer|true|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; in_progress|body|integer|true|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; verifying|body|integer|true|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; complete|body|integer|true|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; blocked|body|integer|true|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; cancelled|body|integer|true|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; work_flow|body|object|true|Workflow|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; work_flow_id|body|string|false|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity_id|body|string|true|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity_type|body|string|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|body|string|true|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; slug|body|string|false|Slug for the entity (Auto-generated from the label)|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|body|string(date-time)|true|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|body|string(date-time)|true|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; schema_version|body|string|true|Version of the workflow schema used|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; workflow_version|body|integer|false|Version number for the work flows (the number of times it has been changed|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; applies_to|body|string|true|The entity type this work flow applies too|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; triggered_by|body|[string]|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; starts_at|body|string|true|Starting step|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; steps|body|object|true|Steps for the workflow|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; metadata|body|object|false|Data for the resource as a key value pair|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **additionalProperties**|body|string|false|none|

<h3 id="createworkorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A work order response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

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
      ]
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
        ]
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
      ]
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
    ]
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
  "cycles": [
    {
      "needed": 1,
      "pending": 1,
      "in_progress": 0,
      "verifying": 0,
      "complete": 0,
      "blocked": 0,
      "cancelled": 0,
      "work_flow": {
        "entity_type": "WKF",
        "entity_id": "work-flow",
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
    }
  ],
  "input_filter": [
    {
      "label": "Serial Number Of part",
      "key": "serial-number",
      "filters": [],
      "validators": [],
      "value": null
    }
  ],
  "_embedded": {
    "nter:work-order-project": [],
    "nter:work-order-location": [],
    "nter:work-order-program": [],
    "nter:work-order-customer": []
  },
  "_links": {
    "nter:work-order-batches": {
      "href": "https://api.example.com/work-orders/work-order/batches"
    },
    "nter:work-order-queues": {
      "href": "https://api.example.com/work-orders/work-order/queues"
    },
    "self": {
      "href": "https://api.example.com/work-orders/work-order"
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

<h3 id="createworkorder-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; validation_messages|[object]|true|none|List of errors detailing the failures|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

### GET /work-orders/{work_order_id} - *Fetch work0order*

<a id="opIdfetchWorkOrderById"></a>

*Fetch work0order*

Fetches a work-order

<h3 id="fetchworkorderbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|

<h3 id="fetchworkorderbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A work order response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

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
      ]
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
        ]
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
      ]
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
    ]
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
  "cycles": [
    {
      "needed": 1,
      "pending": 1,
      "in_progress": 0,
      "verifying": 0,
      "complete": 0,
      "blocked": 0,
      "cancelled": 0,
      "work_flow": {
        "entity_type": "WKF",
        "entity_id": "work-flow",
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
    }
  ],
  "input_filter": [
    {
      "label": "Serial Number Of part",
      "key": "serial-number",
      "filters": [],
      "validators": [],
      "value": null
    }
  ],
  "_embedded": {
    "nter:work-order-project": [],
    "nter:work-order-location": [],
    "nter:work-order-program": [],
    "nter:work-order-customer": []
  },
  "_links": {
    "nter:work-order-batches": {
      "href": "https://api.example.com/work-orders/work-order/batches"
    },
    "nter:work-order-queues": {
      "href": "https://api.example.com/work-orders/work-order/queues"
    },
    "self": {
      "href": "https://api.example.com/work-orders/work-order"
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

> 403 Response

```json
{
  "title": "Forbidden",
  "type": "https://docs.nterprise.com/api/problem/Forbidden",
  "status": 403,
  "detail": "You are forbidden from accessing this resource"
}
```

> 404 Response

```json
{
  "title": "Not Found",
  "type": "https://docs.nterprise.com/api/problem/NotFound",
  "status": 404,
  "detail": "A Resource with the id \"foo\" was not found"
}
```

<h3 id="fetchworkorderbyid-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

### PUT /work-orders/{work_order_id} - *Update work-order*

<a id="opIdupdateWorkOrder"></a>

*Update work-order*

Updates a work-order

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
|&nbsp;&nbsp;&nbsp;&nbsp; status|body|string|true|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; category|body|string|true|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp; description|body|string¦null|false|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; order|body|number|false|Order status appears when listing|
|project|body|object|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; project_id|body|string|false|Unique identifier|
|start_date|body|string(date-time)¦null|false|Start date|
|end_date|body|string(date-time)¦null|false|End date|
|cycles|body|[object]|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; needed|body|integer|true|The number of cycles needed|
|&nbsp;&nbsp;&nbsp;&nbsp; pending|body|integer|true|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; in_progress|body|integer|true|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; verifying|body|integer|true|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; complete|body|integer|true|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; blocked|body|integer|true|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; cancelled|body|integer|true|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; work_flow|body|object|true|Workflow|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; work_flow_id|body|string|false|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity_id|body|string|true|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity_type|body|string|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|body|string|true|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; slug|body|string|false|Slug for the entity (Auto-generated from the label)|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|body|string(date-time)|true|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|body|string(date-time)|true|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; schema_version|body|string|true|Version of the workflow schema used|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; workflow_version|body|integer|false|Version number for the work flows (the number of times it has been changed|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; applies_to|body|string|true|The entity type this work flow applies too|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; triggered_by|body|[string]|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; starts_at|body|string|true|Starting step|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; steps|body|object|true|Steps for the workflow|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; metadata|body|object|false|Data for the resource as a key value pair|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **additionalProperties**|body|string|false|none|

<h3 id="updateworkorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A work order response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

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
      ]
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
        ]
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
      ]
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
    ]
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
  "cycles": [
    {
      "needed": 1,
      "pending": 1,
      "in_progress": 0,
      "verifying": 0,
      "complete": 0,
      "blocked": 0,
      "cancelled": 0,
      "work_flow": {
        "entity_type": "WKF",
        "entity_id": "work-flow",
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
    }
  ],
  "input_filter": [
    {
      "label": "Serial Number Of part",
      "key": "serial-number",
      "filters": [],
      "validators": [],
      "value": null
    }
  ],
  "_embedded": {
    "nter:work-order-project": [],
    "nter:work-order-location": [],
    "nter:work-order-program": [],
    "nter:work-order-customer": []
  },
  "_links": {
    "nter:work-order-batches": {
      "href": "https://api.example.com/work-orders/work-order/batches"
    },
    "nter:work-order-queues": {
      "href": "https://api.example.com/work-orders/work-order/queues"
    },
    "self": {
      "href": "https://api.example.com/work-orders/work-order"
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

> 403 Response

```json
{
  "title": "Forbidden",
  "type": "https://docs.nterprise.com/api/problem/Forbidden",
  "status": 403,
  "detail": "You are forbidden from accessing this resource"
}
```

> 423 Response

```json
{
  "title": "Locked",
  "type": "https://docs.nterprise.com/api/problem/Locked",
  "status": 423,
  "detail": "This resource is currently locked from editing"
}
```

<h3 id="updateworkorder-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; validation_messages|[object]|true|none|List of errors detailing the failures|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **423**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

### DELETE /work-orders/{work_order_id} - *Delete work-order*

<a id="opIddeleteWorkOrder"></a>

*Delete work-order*

Deletes a work-order

<h3 id="deleteworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|

<h3 id="deleteworkorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Work-order deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

> Example responses

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

> 404 Response

```json
{
  "title": "Not Found",
  "type": "https://docs.nterprise.com/api/problem/NotFound",
  "status": 404,
  "detail": "A Resource with the id \"foo\" was not found"
}
```

> 423 Response

```json
{
  "title": "Locked",
  "type": "https://docs.nterprise.com/api/problem/Locked",
  "status": 423,
  "detail": "This resource is currently locked from editing"
}
```

<h3 id="deleteworkorder-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **423**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

### GET /work-orders/{work_order_id}/relations - *Fetch WorkOrder relations*

<a id="opIdfetchRelationsForWorkOrder"></a>

*Fetch WorkOrder relations*

Fetches the relations for a workOrder

<h3 id="fetchrelationsforworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
|filter[entity_type]|query|string|false|Filter on entity type|
|filter[relation]|query|string|false|Filter on relation type|
|filter[direction]|query|string|false|Filter on relation direction|

<h3 id="fetchrelationsforworkorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for relations|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

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
          "label": "Bob Alice",
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
      "href": "https://api.example.com/{entity}/{entity_id}/relations?offset=next-offset"
    },
    "self": {
      "href": "https://api.example.com/{entity}/{entity_id}/relations"
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

> 403 Response

```json
{
  "title": "Forbidden",
  "type": "https://docs.nterprise.com/api/problem/Forbidden",
  "status": 403,
  "detail": "You are forbidden from accessing this resource"
}
```

> 404 Response

```json
{
  "title": "Not Found",
  "type": "https://docs.nterprise.com/api/problem/NotFound",
  "status": 404,
  "detail": "A Resource with the id \"foo\" was not found"
}
```

<h3 id="fetchrelationsforworkorder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; total_count|number|true|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp; limit|number|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; offset|string¦null|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; _embedded|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; nter:relations|[allOf]|true|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; relation_id|string|true|none|Custom identifier for the relation|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; relation|string|true|none|Type of relation|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the relation|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; direction|string|true|none|Direction of the relation. OUTWARD relations are entities this relates to while INWARD are entities related to this entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity|object|false|none|Related entity information|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity_id|string|true|read-only|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity_type|string|true|none|Entity type|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _links|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **additionalProperties**|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; _links|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; next|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

### DELETE /work-orders/{work_order_id}/relations/{relation_id} - *Delete relation for workOrder*

<a id="opIddeleteRelationForWorkOrder"></a>

*Delete relation for workOrder*

Deletes a relation for a workOrder

<h3 id="deleterelationforworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
|relation_id|path|string|true|Id of the relation|

<h3 id="deleterelationforworkorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for relations|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

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
    "label": "Bob Alice",
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

> 403 Response

```json
{
  "title": "Forbidden",
  "type": "https://docs.nterprise.com/api/problem/Forbidden",
  "status": 403,
  "detail": "You are forbidden from accessing this resource"
}
```

> 404 Response

```json
{
  "title": "Not Found",
  "type": "https://docs.nterprise.com/api/problem/NotFound",
  "status": 404,
  "detail": "A Resource with the id \"foo\" was not found"
}
```

<h3 id="deleterelationforworkorder-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

<h1 id="work-orders-workorder">WorkOrder</h1>

## Operations

### POST /work-orders/{work_order_id}/relations - *Create relation*

<a id="opIdcreateRelationForWorkOrder"></a>

*Create relation*

Creates a relation for a workOrder

> Body parameter

<h3 id="createrelationforworkorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_order_id|path|string|true|Id for the work order|
|relation|body|string|true|Type of relation|
|entity|body|object|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; entity_id|body|string|true|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp; entity_type|body|string|true|Entity type|

<h3 id="createrelationforworkorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|A paged response for relations|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

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
    "label": "Bob Alice",
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

<h3 id="createrelationforworkorder-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; validation_messages|[object]|true|none|List of errors detailing the failures|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

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
|&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|project|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; project_id|string|true|none|Unique identifier|
|&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp; start_date|string(date-time)¦null|true|none|Start date|
|&nbsp;&nbsp;&nbsp;&nbsp; end_date|string(date-time)¦null|true|none|End date|
|&nbsp;&nbsp;&nbsp;&nbsp; customer|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customer_id|string|true|read-only|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; external_platform|object|true|none|External Identifiers for the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; allowed_statuses|[object]|true|none|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_programs|number|true|none|Total programs under the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_projects|number|true|none|Total projects under the customer|
|&nbsp;&nbsp;&nbsp;&nbsp; program|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; program_id|string|true|read-only|Unique identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; start_date|string(date-time)¦null|true|none|Start date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; end_date|string(date-time)¦null|true|none|End date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customer|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customer_id|string|true|read-only|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; external_platform|object|true|none|External Identifiers for the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; allowed_statuses|[object]|true|none|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_programs|number|true|none|Total programs under the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_projects|number|true|none|Total projects under the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; allowed_statuses|[object]|true|none|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|&nbsp;&nbsp;&nbsp;&nbsp; allowed_statuses|[object]|true|none|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|cycles|[object]|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; needed|integer|true|none|The number of cycles needed|
|&nbsp;&nbsp;&nbsp;&nbsp; pending|integer|true|read-only|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; in_progress|integer|true|read-only|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; verifying|integer|true|read-only|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; complete|integer|true|read-only|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; blocked|integer|true|read-only|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; cancelled|integer|true|read-only|The number of cycles pending|
|&nbsp;&nbsp;&nbsp;&nbsp; work_flow|object|true|none|Workflow|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; work_flow_id|string|false|read-only|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity_id|string|true|read-only|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity_type|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; schema_version|string|true|none|Version of the workflow schema used|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; workflow_version|integer|false|read-only|Version number for the work flows (the number of times it has been changed|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; applies_to|string|true|none|The entity type this work flow applies too|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; triggered_by|[string]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; starts_at|string|true|none|Starting step|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; steps|object|true|none|Steps for the workflow|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; metadata|object|false|none|Data for the resource as a key value pair|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **additionalProperties**|string|false|none|none|

#### Specification

```yaml
type: object
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
  - project
  - cycles
properties:
  work_order_id:
    type: string
    description: The identifier for the unit
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
  start_date:
    description: Last date the entity was updated
    type: string
    format: date-time
    readOnly: true
  end_date:
    description: Last date the entity was updated
    type: string
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
    example:
      category: COMPLETE
      description: For something that is Complete
      status: Complete
      order: 7
  project:
    type: object
    deprecated: true
    allOf:
      - type: object
        required:
          - start_date
          - end_date
          - customer
          - allowed_statuses
          - updated
          - label
          - created
          - program
          - project_id
        properties:
          project_id:
            type: string
            description: Unique identifier
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
          start_date:
            type: string
            nullable: true
            format: date-time
            description: Start date
          end_date:
            type: string
            nullable: true
            format: date-time
            description: End date
          customer:
            type: object
            required:
              - updated
              - label
              - created
              - allowed_statuses
              - customer_id
              - external_platform
              - total_programs
              - total_projects
            properties:
              customer_id:
                description: Customer identifier
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
              external_platform:
                type: object
                description: External Identifiers for the customer
                deprecated: true
                x-patternProperties:
                  &a1
                  "^[A-Za-z][A-Za-z0-9_]*$":
                    type:
                      - string
                      - "null"
              allowed_statuses:
                type: array
                description: List of allowed statuses
                uniqueItems: true
                items:
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
                  example:
                    category: COMPLETE
                    description: For something that is Complete
                    status: Complete
                    order: 7
              total_programs:
                type: number
                description: Total programs under the customer
              total_projects:
                type: number
                description: Total projects under the customer
          program:
            type: object
            required:
              - created
              - label
              - updated
              - allowed_statuses
              - customer
              - end_date
              - program_id
              - start_date
            properties:
              program_id:
                description: Unique identifier
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
              start_date:
                type: string
                nullable: true
                format: date-time
                description: Start date
              end_date:
                type: string
                nullable: true
                format: date-time
                description: End date
              customer:
                type: object
                deprecated: true
                allOf:
                  - type: object
                    required:
                      - updated
                      - label
                      - created
                      - allowed_statuses
                      - customer_id
                      - external_platform
                      - total_programs
                      - total_projects
                    properties:
                      customer_id:
                        description: Customer identifier
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
                      external_platform:
                        type: object
                        description: External Identifiers for the customer
                        deprecated: true
                        x-patternProperties: *a1
                      allowed_statuses:
                        type: array
                        description: List of allowed statuses
                        uniqueItems: true
                        items:
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
                          example:
                            category: COMPLETE
                            description: For something that is Complete
                            status: Complete
                            order: 7
                      total_programs:
                        type: number
                        description: Total programs under the customer
                      total_projects:
                        type: number
                        description: Total projects under the customer
              allowed_statuses:
                type: array
                description: List of allowed statuses
                uniqueItems: true
                items:
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
                  example:
                    category: COMPLETE
                    description: For something that is Complete
                    status: Complete
                    order: 7
          allowed_statuses:
            type: array
            description: List of allowed statuses
            uniqueItems: true
            items:
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
              example:
                category: COMPLETE
                description: For something that is Complete
                status: Complete
                order: 7
  cycles:
    type: array
    minimum: 1
    items:
      type: object
      additionalProperties: false
      required:
        - needed
        - pending
        - in_progress
        - verifying
        - complete
        - blocked
        - cancelled
        - work_flow
      properties:
        needed:
          type: integer
          description: The number of cycles needed
          minimum: 1
        pending:
          type: integer
          description: The number of cycles pending
          readOnly: true
        in_progress:
          type: integer
          description: The number of cycles pending
          readOnly: true
        verifying:
          type: integer
          description: The number of cycles pending
          readOnly: true
        complete:
          type: integer
          description: The number of cycles pending
          readOnly: true
        blocked:
          type: integer
          description: The number of cycles pending
          readOnly: true
        cancelled:
          type: integer
          description: The number of cycles pending
          readOnly: true
        work_flow:
          type: object
          description: Workflow
          additionalProperties: false
          required:
            - label
            - entity_id
            - entity_type
            - created
            - updated
            - steps
            - starts_at
            - applies_to
            - schema_version
          properties:
            work_flow_id:
              type: string
              description: Customer identifier
              readOnly: true
              pattern: ^[0-9a-zA-Z-_]+$
            entity_id:
              x-no-api-doc: true
              type: string
              description: Customer identifier
              readOnly: true
              pattern: ^[0-9a-zA-Z-_]+$
            entity_type:
              x-no-api-doc: true
              enum:
                - WKF
            label:
              type: string
              description: Label for the entity
            slug:
              type: string
              description: Slug for the entity (Auto-generated from the label)
              readOnly: true
              deprecated: true
              pattern: ^[a-z0-9]+(?:-[a-z0-9]+)*$
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
            triggered_by:
              type: array
              items:
                type: string
                description: Possible entity events
                enum:
                  - CON.attached
                  - CON.created
                  - CON.deleted
                  - CON.detached
                  - CON.removed
                  - CON.updated
                  - CUS.attached
                  - CUS.created
                  - CUS.deleted
                  - CUS.detached
                  - CUS.removed
                  - CUS.updated
                  - LOC.attached
                  - LOC.created
                  - LOC.deleted
                  - LOC.detached
                  - LOC.removed
                  - LOC.updated
                  - NOTE.attached
                  - NOTE.created
                  - NOTE.deleted
                  - NOTE.detached
                  - NOTE.removed
                  - NOTE.updated
                  - PART.attached
                  - PART.created
                  - PART.deleted
                  - PART.detached
                  - PART.removed
                  - PART.updated
                  - PGM.attached
                  - PGM.created
                  - PGM.deleted
                  - PGM.detached
                  - PGM.removed
                  - PGM.updated
                  - PRJ.attached
                  - PRJ.created
                  - PRJ.deleted
                  - PRJ.detached
                  - PRJ.removed
                  - PRJ.updated
                  - RES.attached
                  - RES.created
                  - RES.deleted
                  - RES.detached
                  - RES.removed
                  - RES.updated
                  - SRES.attached
                  - SRES.created
                  - SRES.deleted
                  - SRES.detached
                  - SRES.removed
                  - SRES.updated
                  - UNIT.attached
                  - UNIT.created
                  - UNIT.deleted
                  - UNIT.detached
                  - UNIT.removed
                  - UNIT.updated
                  - USER.attached
                  - USER.created
                  - USER.deleted
                  - USER.detached
                  - USER.removed
                  - USER.updated
                  - WKF.attached
                  - WKF.created
                  - WKF.deleted
                  - WKF.detached
                  - WKF.removed
                  - WKF.updated
                  - WOR.attached
                  - WOR.created
                  - WOR.deleted
                  - WOR.detached
                  - WOR.removed
                  - WOR.updated
            starts_at:
              type: string
              description: Starting step
            steps:
              type: object
              description: Steps for the workflow
              uniqueItems: true
              additionalProperties: true
              x-patternProperties:
                "^[A-Za-z][A-Za-z0-9_]*$":
                  anyOf:
                    - $schema: http://json-schema.org/draft-07/schema#
                      $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/function/allocateUnitsToProject.json
                      type: object
                      description: Require the user confirm an action. This is normally used when
                        Niagara cannot automatically detect that a task or
                        action has been performed.
                      properties:
                        label:
                          &a7
                          type: string
                          description: Label for the entity
                        options:
                          type: object
                          required:
                            - function
                            - payload
                          properties:
                            function:
                              type: string
                              enum:
                                - allocate-units-to-project
                            payload:
                              type: object
                              required:
                                - part_id
                                - project_id
                                - qty
                              properties:
                                part_id:
                                  type: string
                                  description: Part ID of the to assign
                                program_id:
                                  type: string
                                  description: Program ID of the to assign
                                qty:
                                  type: number
                                  minimum: 1
                                  description: Number of units to assign to the project
                                allow_scarcity:
                                  type: boolean
                                  description: Allow the workflow to continue even if there are not enough units
                                force:
                                  type: boolean
                                  description: Assign the units even if the project already has units allocated
                                status:
                                  type: string
                                  description: Only assign units which are in this status
                    - $schema: http://json-schema.org/draft-07/schema#
                      $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/followPDFInstructions.json
                      type: object
                      description: Display a link or modal to a user which contains instructions from
                        a PDF
                      required:
                        - label
                        - payload
                      properties:
                        label:
                          &a3
                          type: string
                          description: Label for the step
                        options:
                          type: object
                          required:
                            - component
                            - payload
                          properties:
                            component:
                              enum:
                                - follow-pds-instructions
                            payload:
                              type: object
                              required:
                                - attachment_id
                              properties:
                                attachment_id:
                                  type: string
                                  description: UUID for the attachment
                                  format: uuid
                      allOf:
                        - &a4
                          $schema: http://json-schema.org/draft-07/schema#
                          $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepUser.json
                          type: object
                          description: A step which requires a user to complete
                          required:
                            - type
                            - options
                          properties:
                            type:
                              &a2
                              type: string
                              description: Type of workflow step
                              enum:
                                - load
                                - choice
                                - function
                                - machine
                                - pass
                                - fail
                                - success
                                - user
                                - wait
                            options:
                              type: object
                              required:
                                - component
                                - payload
                              properties:
                                component:
                                  type: string
                                  description: Name of the function to invoke
                                payload:
                                  type: object
                          allOf:
                            - &a8
                              $schema: http://json-schema.org/draft-07/schema#
                              $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepCommon.json
                              type: object
                              required:
                                - type
                                - label
                                - goto
                              properties:
                                type: *a2
                                label: *a3
                                goto:
                                  type: string
                                  description: Step to move to
                                  pattern: ^[a-z][a-z-]+[a-z]$
                                goto-fail:
                                  type: string
                                  description: Step to transition too if this step cannot be completed
                                  pattern: ^[a-z][a-z-]+[a-z]$
                                onComplete:
                                  &a5
                                  $schema: http://json-schema.org/draft-07/schema#
                                  $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json
                                  type: object
                                  required:
                                    - retry
                                    - finally
                                  properties:
                                    actions:
                                      type: array
                                      description: Actions to take on failure
                                      maxItems: 10
                                      items:
                                        type: object
                    - $schema: http://json-schema.org/draft-07/schema#
                      $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/manualDataEntry.json
                      type: object
                      description: Ask the user to manually enter (or confirm) data for an entity
                      properties:
                        label: *a3
                        options:
                          type: object
                          required:
                            - component
                            - payload
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
                                          function. It singles that the user is
                                          required to input data at this step.
                                          If the field is required on the
                                          entity, the user will be presented
                                          with a validation message"
                                      entity_field:
                                        type: string
                                        description: JSON Path to the field on the entity. If the path does not start
                                          with '$' then the entity on the
                                          context is assumed. Otherwise the data
                                          will be set on the context path
                      allOf:
                        - *a4
                    - $schema: http://json-schema.org/draft-07/schema#
                      $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/taskList.json
                      type: object
                      description: Ask the user to follow a list and check off boxes
                      properties:
                        label: *a3
                        options:
                          type: object
                          required:
                            - component
                            - payload
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
                                    can close the task to one previously on the
                                    context
                                items:
                                  type: array
                                  description: Configuration for each task list item
                                  items:
                                    type: object
                                    required:
                                      - label
                                      - evaluated
                                      - na_option
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
                                        type: string
                                        description: Message describing what is needed to be checked
                                      evaluated:
                                        type: boolean
                                        description: When set to true, this will fail the step if the value for the item
                                          is false or N/A
                                      na_field:
                                        type: boolean
                                        description: Allow the user to select the N/A option when checking off the list
                      allOf:
                        - *a4
                    - $schema: http://json-schema.org/draft-07/schema#
                      $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/machine/aceIos.json
                      type: object
                      description: "Run the ACE-IOS application to provision iOS devices or "
                      properties:
                        type:
                          type: string
                          enum:
                            - machine
                        label: *a3
                        options:
                          type: object
                          required:
                            - application
                            - configuration
                          properties:
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
                                  type: boolean
                                  description: Automatically enroll the device to MDM
                                mdm:
                                  type: object
                                  description: The settings for the Customers MDM
                                  properties:
                                    vendor:
                                      type: string
                                      description: MDM vendor. Currently, supported values are AirWatch, JAMF, and
                                        Meraki.
                                      enum:
                                        - AirWatch
                                        - JAMF
                                        - Meraki
                                    console_url:
                                      type: string
                                      format: uri
                                      description: Base URL for HTTP requests
                                    user:
                                      type: string
                                      description: MDM User name
                                    password:
                                      type: string
                                      description: MDM password
                                    tenant_code:
                                      type: string
                                      description: MDM authentication key
                                    set_asset_tag:
                                      type: string
                                      description: Sets the devices Asset tag based on a field from the unit
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
                                          - configurator_serial
                                          - ios
                                          - model
                                          - storage
                                          - wifi_mac
                                          - bt_mac
                                          - ethernet_mac
                                          - thundersync_serial
                                          - iccid
                                          - iccid2
                                          - imei
                                          - imei2
                                          - missed_profiles
                                          - missed_apps
                                          - icon_list_regex
                                          - icon_layout
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
                                    format: uri
                                wait_for_battery_charge:
                                  type: integer
                                  description: The required battery percentage needed before this step can move on
                                  minimum: 0
                                  maximum: 100
                    - &a9
                      $schema: http://json-schema.org/draft-07/schema#
                      $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepChoice.json
                      type: object
                      description: A Step choice
                      maxProperties: 2
                      minProperties: 2
                      required:
                        - decision
                      properties:
                        decision:
                          type: array
                          description: Context variable to check
                          items:
                            type: object
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
                      allOf:
                        - $schema: http://json-schema.org/draft-07/schema#
                          $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepNext.json
                          type: object
                          required:
                            - type
                            - label
                            - goto
                          properties:
                            goto:
                              type: string
                              description: Step to move to
                              pattern: ^[a-z][a-z-]+[a-z]$
                            goto-fail:
                              type: string
                              description: Step to transition too if this step cannot be completed
                              pattern: ^[a-z][a-z-]+[a-z]$
                            context:
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
                                    type: string
                                    description: Value to set
                                  lock:
                                    type: boolean
                                    description: Prevents other steps from writing this value
                                  ignore:
                                    type: boolean
                                    description: When trying to set a locked key, do not fail
                            onStart: *a5
                            onError:
                              &a6
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
                                    steps which automatically failed. If the
                                    step was transitioned using the 'goto-fail'
                                    step, the actions will be fired but the step
                                    WILL NOT be re-tried"
                                  minimum: 0
                                  maximum: 10
                                  default: 0
                                finally:
                                  type: object
                                  description: What to do after all retries
                                  properties:
                                    actions: *a5
                            onTimeout: *a6
                    - $schema: http://json-schema.org/draft-07/schema#
                      $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepFail.json
                      type: object
                      description: Finial step which is marked as failed
                      properties:
                        label: *a3
                        type: *a2
                        onComplete: *a5
                    - $schema: http://json-schema.org/draft-07/schema#
                      $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepPass.json
                      type: object
                      description: Allows executing actions with out performing any function
                      properties:
                        label: *a7
                        type: *a2
                      allOf:
                        - *a8
                    - $schema: http://json-schema.org/draft-07/schema#
                      $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepSuccess.json
                      type: object
                      description: Finial step which is marked as completed successfully
                      properties:
                        label: *a3
                        type: *a2
                        onComplete: *a5
                    - $schema: http://json-schema.org/draft-07/schema#
                      $id: https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepWait.json
                      type: object
                      description: A step which run at certain times
                      required:
                        - stop_at
                        - time
                      properties:
                        label: *a3
                        type:
                          type: string
                          enum:
                            - wait
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
                                      - CON.attached
                                      - CON.created
                                      - CON.deleted
                                      - CON.detached
                                      - CON.removed
                                      - CON.updated
                                      - CUS.attached
                                      - CUS.created
                                      - CUS.deleted
                                      - CUS.detached
                                      - CUS.removed
                                      - CUS.updated
                                      - LOC.attached
                                      - LOC.created
                                      - LOC.deleted
                                      - LOC.detached
                                      - LOC.removed
                                      - LOC.updated
                                      - NOTE.attached
                                      - NOTE.created
                                      - NOTE.deleted
                                      - NOTE.detached
                                      - NOTE.removed
                                      - NOTE.updated
                                      - PART.attached
                                      - PART.created
                                      - PART.deleted
                                      - PART.detached
                                      - PART.removed
                                      - PART.updated
                                      - PGM.attached
                                      - PGM.created
                                      - PGM.deleted
                                      - PGM.detached
                                      - PGM.removed
                                      - PGM.updated
                                      - PRJ.attached
                                      - PRJ.created
                                      - PRJ.deleted
                                      - PRJ.detached
                                      - PRJ.removed
                                      - PRJ.updated
                                      - RES.attached
                                      - RES.created
                                      - RES.deleted
                                      - RES.detached
                                      - RES.removed
                                      - RES.updated
                                      - SRES.attached
                                      - SRES.created
                                      - SRES.deleted
                                      - SRES.detached
                                      - SRES.removed
                                      - SRES.updated
                                      - UNIT.attached
                                      - UNIT.created
                                      - UNIT.deleted
                                      - UNIT.detached
                                      - UNIT.removed
                                      - UNIT.updated
                                      - USER.attached
                                      - USER.created
                                      - USER.deleted
                                      - USER.detached
                                      - USER.removed
                                      - USER.updated
                                      - WKF.attached
                                      - WKF.created
                                      - WKF.deleted
                                      - WKF.detached
                                      - WKF.removed
                                      - WKF.updated
                                      - WOR.attached
                                      - WOR.created
                                      - WOR.deleted
                                      - WOR.detached
                                      - WOR.removed
                                      - WOR.updated
                              event_value:
                                type: object
                                description: The event conditions that have to be met
                                allOf:
                                  - *a9
                      allOf:
                        - *a8
            metadata:
              type: object
              description: Data for the resource as a key value pair
              additionalProperties:
                type: string
              propertyNames:
                pattern: ^[A-Za-z][A-Za-z0-9_]*$

```

