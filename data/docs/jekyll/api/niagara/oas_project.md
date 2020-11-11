---
layout: page
parent: Niagara API
nav_order: 12
redirect_from:
  - /rel/projects
  - /rel/project
  - /rel/program-projects
  - /rel/batch-project
  - /rel/customer-projects
title: Projects
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="projects">Projects</h1>

* Do not remove this line (it will not be displayed)
{:toc}

A Project is a distinct body of work with a defined scope, beginning, and end.  In nterprise niagara, a Project is associated to a single Customer and Program, and typically corresponds to a single contract or Statement of Work in which the scope and duration are defined.

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|project:create|Allows creating a project|
|project:update|Allows editing a project|
|project:delete|Allows deleting a project|
|project:read|Allows access to a project|
|project:create-work-order|Allows access to create a work order for a project|
|project:update-work-order|Allows access to update a work order for a project|
|project:delete-work-order|Allows access to delete a work order for a project|
|project:attach|Allows attaching a relation from a project|
|project:detach|Allows detaching a relation from a project|
|project:relation-all|Allows reading all relations|
|project:all|Allows reading all projects|

<h1 id="projects-project">Project</h1>

## Operations

### GET /projects

<a id="opIdfetchAllProjects"></a>

Fetches A Page of projects

<aside class="warning">
Permissions required:<br>
<ul><li>project:all</li></ul>
</aside>

<h3 id="fetchallprojects-parameters">Parameters</h3>

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
    "nter:projects": [
      {
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
        "input_filter": [],
        "_links": {
          "nter:project-work-orders": {
            "href": "https://api.nterprise.com/projects/project/work-orders"
          },
          "nter:project-program": {
            "href": "https://api.nterprise.com/programs/program"
          },
          "nter:project-customer": {
            "href": "https://api.nterprise.com/customers/customer"
          },
          "nter:project-units": {
            "href": "https://api.nterprise.com/projects/project/units"
          },
          "self": {
            "href": "https://api.nterprise.com/projects/project"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/projects?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/projects?limit=42"
    }
  }
}
```

### POST /projects

<a id="opIdcreateProject"></a>

Creates a new project

<aside class="warning">
Permissions required:<br>
<ul><li>project:create</li></ul>
</aside>

> Body parameter

<h3 id="createproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Label for the entity|
|program|body|object|false|none|
|&nbsp;&nbsp; program_id|body|string|true|Unique identifier|
|allowed_statuses|body|[object]|false|List of allowed statuses|
|&nbsp;&nbsp; status|body|string|true|A Custom label for the status|
|&nbsp;&nbsp; category|body|string|true|The classifier for the statues|
|&nbsp;&nbsp; description|body|string¦null|false|A description for the status|
|&nbsp;&nbsp; order|body|number|false|Order status appears when listing|
|start_date|body|string(date-time)¦null|false|Start date|
|end_date|body|string(date-time)¦null|false|End date|
|<a href="https://docs.nterprise.com/niagara/inputFilter.html">input_filter</a>|body|[object]|false|Input Filters allow custom fields to be defined for entities|

> Example responses

> 200 Response

```json
{
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
  "input_filter": [],
  "_embedded": {
    "nter:project-customer": [],
    "nter:project-program": []
  },
  "_links": {
    "nter:project-work-orders": {
      "href": "https://api.nterprise.com/projects/project/work-orders"
    },
    "nter:project-program": {
      "href": "https://api.nterprise.com/programs/program"
    },
    "nter:project-customer": {
      "href": "https://api.nterprise.com/customers/customer"
    },
    "nter:project-units": {
      "href": "https://api.nterprise.com/projects/project/units"
    },
    "self": {
      "href": "https://api.nterprise.com/projects/project"
    }
  }
}
```

### GET /projects/project_id

<a id="opIdfetchProjectById"></a>

Fetches a project

<aside class="warning">
Permissions required:<br>
<ul><li>project:read</li></ul>
</aside>

<h3 id="fetchprojectbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|

> Example responses

> 200 Response

```json
{
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
  "input_filter": [],
  "_embedded": {
    "nter:project-customer": [],
    "nter:project-program": []
  },
  "_links": {
    "nter:project-work-orders": {
      "href": "https://api.nterprise.com/projects/project/work-orders"
    },
    "nter:project-program": {
      "href": "https://api.nterprise.com/programs/program"
    },
    "nter:project-customer": {
      "href": "https://api.nterprise.com/customers/customer"
    },
    "nter:project-units": {
      "href": "https://api.nterprise.com/projects/project/units"
    },
    "self": {
      "href": "https://api.nterprise.com/projects/project"
    }
  }
}
```

### PUT /projects/project_id

<a id="opIdupdateProject"></a>

Updates a project

<aside class="warning">
Permissions required:<br>
<ul><li>project:update</li></ul>
</aside>

> Body parameter

<h3 id="updateproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|
|label|body|string|true|Label for the entity|
|program|body|object|false|none|
|&nbsp;&nbsp; program_id|body|string|true|Unique identifier|
|allowed_statuses|body|[object]|false|List of allowed statuses|
|&nbsp;&nbsp; status|body|string|true|A Custom label for the status|
|&nbsp;&nbsp; category|body|string|true|The classifier for the statues|
|&nbsp;&nbsp; description|body|string¦null|false|A description for the status|
|&nbsp;&nbsp; order|body|number|false|Order status appears when listing|
|start_date|body|string(date-time)¦null|false|Start date|
|end_date|body|string(date-time)¦null|false|End date|
|<a href="https://docs.nterprise.com/niagara/inputFilter.html">input_filter</a>|body|[object]|false|Input Filters allow custom fields to be defined for entities|

> Example responses

> 200 Response

```json
{
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
  "input_filter": [],
  "_embedded": {
    "nter:project-customer": [],
    "nter:project-program": []
  },
  "_links": {
    "nter:project-work-orders": {
      "href": "https://api.nterprise.com/projects/project/work-orders"
    },
    "nter:project-program": {
      "href": "https://api.nterprise.com/programs/program"
    },
    "nter:project-customer": {
      "href": "https://api.nterprise.com/customers/customer"
    },
    "nter:project-units": {
      "href": "https://api.nterprise.com/projects/project/units"
    },
    "self": {
      "href": "https://api.nterprise.com/projects/project"
    }
  }
}
```

### DELETE /projects/project_id

<a id="opIddeleteProject"></a>

Deletes a project

<aside class="warning">
Permissions required:<br>
<ul><li>project:delete</li></ul>
</aside>

<h3 id="deleteproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|

### GET /projects/{project_id}/diff

<a id="opIdfetchDiffForProject"></a>

Fetches A Page diff records for a project

<aside class="warning">
Permissions required:<br>
<ul><li>project:read</li></ul>
</aside>

<h3 id="fetchdiffforproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|
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

### GET /projects/{project_id}/relations

<a id="opIdfetchRelationsForProject"></a>

Fetches the relations for a project

<aside class="warning">
Permissions required:<br>
<ul><li>project:read</li></ul>
</aside>

<h3 id="fetchrelationsforproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|
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

### POST /projects/{project_id}/relations

<a id="opIdcreateRelationForProject"></a>

Creates a relation for a project

<aside class="warning">
Permissions required:<br>
<ul><li>project:attach</li></ul>
</aside>

> Body parameter

<h3 id="createrelationforproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|
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

### DELETE /projects/{project_id}/relations/{relation_id}

<a id="opIddeleteRelationForProject"></a>

Deletes a relation for a project

<aside class="warning">
Permissions required:<br>
<ul><li>project:detach</li></ul>
</aside>

<h3 id="deleterelationforproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|
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

### GET /projects/{project_id}/work-orders

<a id="opIdfetchAllProjectWorkOrders"></a>

Fetches work-orders for a project

<aside class="warning">
Permissions required:<br>
<ul><li>project:read</li></ul>
</aside>

<h3 id="fetchallprojectworkorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|
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

### GET /projects/{project_id}/actions

<a id="opIdfetchActionsForProject"></a>

Fetch a page of actions for a project

<aside class="warning">
Permissions required:<br>
<ul><li>action:read</li></ul>
</aside>

<h3 id="fetchactionsforproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|

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

### POST /projects/{project_id}/actions

<a id="opIdcreateActionForProject"></a>

Creates a new action

<aside class="warning">
Permissions required:<br>
<ul><li>action:create</li></ul>
</aside>

> Body parameter

<h3 id="createactionforproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|
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

# Embedded Schemas

## Project
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|string|true|none|Unique identifier|
|label|string|true|none|Label for the entity|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|start_date|string(date-time)¦null|true|none|Start date|
|end_date|string(date-time)¦null|true|none|End date|
|customer|object|true|none|none|
|&nbsp;&nbsp; customer_id|string|true|read-only|Customer identifier|
|&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp; allowed_statuses|[object]|true|none|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|&nbsp;&nbsp; total_programs|number|true|none|Total programs under the customer|
|&nbsp;&nbsp; total_projects|number|true|none|Total projects under the customer|
|&nbsp;&nbsp; input_filter|[object]|true|none|Input Filters allow custom fields to be defined for entities|

#### Specification

```yaml
type: object
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
  - input_filter
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
      - total_programs
      - total_projects
      - input_filter
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
      total_programs:
        type: number
        description: Total programs under the customer
      total_projects:
        type: number
        description: Total projects under the customer
      input_filter:
        type: array
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
                    additionalProperties: false
                    description: This filter will set the value based on a list of approved values.
                      If the value is not in the list, it will then be set to
                      empty unless the default option is set
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
                    additionalProperties: false
                    description: Validates that a value follows a step. Both start and end options
                      do not have to sync with the step. If they do not sync
                      then find the nearest step.
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
      - input_filter
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
              - total_programs
              - total_projects
              - input_filter
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
              total_programs:
                type: number
                description: Total programs under the customer
              total_projects:
                type: number
                description: Total projects under the customer
              input_filter:
                type: array
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
                            additionalProperties: false
                            description: This filter will set the value based on a list of approved values.
                              If the value is not in the list, it will then be
                              set to empty unless the default option is set
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
                            additionalProperties: false
                            description: Filter to transform a value into a number. Non numeric characters
                              (including comma and decimal points) will be
                              removed
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
                            additionalProperties: false
                            description: Validates that a value follows a step. Both start and end options
                              do not have to sync with the step. If they do not
                              sync then find the nearest step.
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
                        prevents child entities from making changes to the
                        filters or validators
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
      input_filter:
        type: array
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
                    additionalProperties: false
                    description: This filter will set the value based on a list of approved values.
                      If the value is not in the list, it will then be set to
                      empty unless the default option is set
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
                    additionalProperties: false
                    description: Validates that a value follows a step. Both start and end options
                      do not have to sync with the step. If they do not sync
                      then find the nearest step.
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
  input_filter:
    type: array
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

```

