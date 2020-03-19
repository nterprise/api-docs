---
layout: page
parent: Niagara API
nav_order: 11
title: Projects
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="projects">Projects v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

<h1 id="projects-project">Project</h1>

## fetchAllProjects

<a id="opIdfetchAllProjects"></a>

`GET /projects`

*Fetches A Page of projects*

Fetch Project

<h3 id="fetchallprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:projects": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "object",
            "properties": {
              "_links": {
                "type": "object",
                "properties": {
                  "self": {
                    "example": {
                      "href": "https://api.nterprise.com/projects/QEvVrVMMwVcJ6om"
                    },
                    "type": "object",
                    "properties": {
                      "href": {
                        "type": "string",
                        "format": "uri"
                      }
                    }
                  }
                }
              },
              "project_id": {
                "type": "string",
                "description": "Unique identifier",
                "pattern": "^[0-9a-zA-Z-_]+$"
              },
              "label": {
                "type": "string",
                "description": "Label for the entity"
              },
              "slug": {
                "type": "string",
                "description": "Slug for the entity (Auto-generated from the label)",
                "readOnly": true,
                "deprecated": true,
                "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
              },
              "created": {
                "description": "Date the entity was created",
                "type": "string",
                "format": "date-time",
                "readOnly": true
              },
              "updated": {
                "description": "Last date the entity was updated",
                "type": "string",
                "format": "date-time",
                "readOnly": true
              },
              "start_date": {
                "type": "string",
                "nullable": true,
                "format": "date-time",
                "description": "Start date"
              },
              "end_date": {
                "type": "string",
                "nullable": true,
                "format": "date-time",
                "description": "End date"
              },
              "customer": {
                "type": "object",
                "description": "Customer",
                "additionalProperties": false,
                "required": [
                  "label",
                  "entity_id",
                  "entity_type",
                  "created",
                  "updated",
                  "allowed_statuses"
                ],
                "properties": {
                  "customer_id": {
                    "description": "Customer identifier",
                    "type": "string",
                    "readOnly": true,
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_id": {
                    "x-no-api-doc": true,
                    "type": "string",
                    "description": "Customer identifier",
                    "readOnly": true,
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_type": {
                    "x-no-api-doc": true,
                    "enum": [
                      "CUS"
                    ]
                  },
                  "label": {
                    "type": "string",
                    "description": "Label for the entity"
                  },
                  "slug": {
                    "type": "string",
                    "description": "Slug for the entity (Auto-generated from the label)",
                    "readOnly": true,
                    "deprecated": true,
                    "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                  },
                  "created": {
                    "description": "Date the entity was created",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                  },
                  "updated": {
                    "description": "Last date the entity was updated",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                  },
                  "external_platform": {
                    "type": "object",
                    "description": "External Identifiers for the customer",
                    "deprecated": true,
                    "x-patternProperties": {
                      "^[A-Za-z][A-Za-z0-9_]*$": {
                        "type": "string"
                      }
                    }
                  },
                  "allowed_statuses": {
                    "type": "array",
                    "description": "List of allowed statuses",
                    "uniqueItems": true,
                    "items": {
                      "type": "object",
                      "description": "Defines the properties for a status",
                      "additionalProperties": false,
                      "required": [
                        "status",
                        "category"
                      ],
                      "properties": {
                        "status": {
                          "type": "string",
                          "description": "A Custom label for the status",
                          "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                        },
                        "category": {
                          "type": "string",
                          "description": "The classifier for the statues",
                          "enum": [
                            "PENDING",
                            "IN_PROGRESS",
                            "VERIFYING",
                            "COMPLETE",
                            "CANCELLED",
                            "BLOCKED"
                          ]
                        }
                      }
                    }
                  },
                  "total_programs": {
                    "type": "number",
                    "description": "Total programs under the customer"
                  },
                  "total_projects": {
                    "type": "number",
                    "description": "Total projects under the customer"
                  }
                }
              },
              "program": {
                "type": "object",
                "description": "Defines the properties for a program",
                "additionalProperties": false,
                "required": [
                  "entity_id",
                  "entity_type",
                  "created",
                  "updated",
                  "customer",
                  "allowed_statuses"
                ],
                "properties": {
                  "program_id": {
                    "description": "Unique identifier",
                    "type": "string",
                    "readOnly": true,
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_id": {
                    "x-no-api-doc": true,
                    "type": "string",
                    "description": "Customer identifier",
                    "readOnly": true,
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_type": {
                    "x-no-api-doc": true,
                    "enum": [
                      "PGM"
                    ]
                  },
                  "label": {
                    "type": "string",
                    "description": "Label for the entity"
                  },
                  "slug": {
                    "type": "string",
                    "description": "Slug for the entity (Auto-generated from the label)",
                    "readOnly": true,
                    "deprecated": true,
                    "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                  },
                  "created": {
                    "description": "Date the entity was created",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                  },
                  "updated": {
                    "description": "Last date the entity was updated",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                  },
                  "start_date": {
                    "type": "string",
                    "nullable": true,
                    "format": "date-time",
                    "description": "Start date"
                  },
                  "end_date": {
                    "type": "string",
                    "nullable": true,
                    "format": "date-time",
                    "description": "End date"
                  },
                  "customer": {
                    "type": "object",
                    "description": "Customer",
                    "additionalProperties": false,
                    "required": [
                      "label",
                      "entity_id",
                      "entity_type",
                      "created",
                      "updated",
                      "allowed_statuses"
                    ],
                    "properties": {
                      "customer_id": {
                        "description": "Customer identifier",
                        "type": "string",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_id": {
                        "x-no-api-doc": true,
                        "type": "string",
                        "description": "Customer identifier",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_type": {
                        "x-no-api-doc": true,
                        "enum": [
                          "CUS"
                        ]
                      },
                      "label": {
                        "type": "string",
                        "description": "Label for the entity"
                      },
                      "slug": {
                        "type": "string",
                        "description": "Slug for the entity (Auto-generated from the label)",
                        "readOnly": true,
                        "deprecated": true,
                        "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                      },
                      "created": {
                        "description": "Date the entity was created",
                        "type": "string",
                        "format": "date-time",
                        "readOnly": true
                      },
                      "updated": {
                        "description": "Last date the entity was updated",
                        "type": "string",
                        "format": "date-time",
                        "readOnly": true
                      },
                      "external_platform": {
                        "type": "object",
                        "description": "External Identifiers for the customer",
                        "deprecated": true,
                        "x-patternProperties": {
                          "^[A-Za-z][A-Za-z0-9_]*$": {
                            "type": "string"
                          }
                        }
                      },
                      "allowed_statuses": {
                        "type": "array",
                        "description": "List of allowed statuses",
                        "uniqueItems": true,
                        "items": {
                          "type": "object",
                          "description": "Defines the properties for a status",
                          "additionalProperties": false,
                          "required": [
                            "status",
                            "category"
                          ],
                          "properties": {
                            "status": {
                              "type": "string",
                              "description": "A Custom label for the status",
                              "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                            },
                            "category": {
                              "type": "string",
                              "description": "The classifier for the statues",
                              "enum": [
                                "PENDING",
                                "IN_PROGRESS",
                                "VERIFYING",
                                "COMPLETE",
                                "CANCELLED",
                                "BLOCKED"
                              ]
                            }
                          }
                        }
                      },
                      "total_programs": {
                        "type": "number",
                        "description": "Total programs under the customer"
                      },
                      "total_projects": {
                        "type": "number",
                        "description": "Total projects under the customer"
                      }
                    }
                  },
                  "allowed_statuses": {
                    "type": "array",
                    "description": "List of allowed statuses",
                    "uniqueItems": true,
                    "items": {
                      "type": "object",
                      "description": "Defines the properties for a status",
                      "additionalProperties": false,
                      "required": [
                        "status",
                        "category"
                      ],
                      "properties": {
                        "status": {
                          "type": "string",
                          "description": "A Custom label for the status",
                          "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                        },
                        "category": {
                          "type": "string",
                          "description": "The classifier for the statues",
                          "enum": [
                            "PENDING",
                            "IN_PROGRESS",
                            "VERIFYING",
                            "COMPLETE",
                            "CANCELLED",
                            "BLOCKED"
                          ]
                        }
                      }
                    }
                  }
                }
              },
              "allowed_statuses": {
                "type": "array",
                "description": "List of allowed statuses",
                "uniqueItems": true,
                "items": {
                  "type": "object",
                  "description": "Defines the properties for a status",
                  "additionalProperties": false,
                  "required": [
                    "status",
                    "category"
                  ],
                  "properties": {
                    "status": {
                      "type": "string",
                      "description": "A Custom label for the status",
                      "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                    },
                    "category": {
                      "type": "string",
                      "description": "The classifier for the statues",
                      "enum": [
                        "PENDING",
                        "IN_PROGRESS",
                        "VERIFYING",
                        "COMPLETE",
                        "CANCELLED",
                        "BLOCKED"
                      ]
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "example": {
            "href": "https://api.nterprise.com/projects"
          },
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "next": {
          "example": {
            "href": "https://api.nterprise.com/projects?offset=QVBrO2wm13iEyl&limit=100"
          },
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        }
      }
    }
  }
}
```

<h3 id="fetchallprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for projects|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallprojects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:projects|[object]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» project_id|string|false|none|Unique identifier|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»» customer|object|false|none|Customer|
|»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»» entity_type|string|true|none|none|
|»»»»» label|string|true|none|Label for the entity|
|»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»» category|string|true|none|The classifier for the statues|
|»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»» program|object|false|none|Defines the properties for a program|
|»»»»» program_id|string|false|read-only|Unique identifier|
|»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»» entity_type|string|true|none|none|
|»»»»» label|string|false|none|Label for the entity|
|»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»»» customer|object|true|none|Customer|
|»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»» entity_type|string|true|none|none|
|»»»»»» label|string|true|none|Label for the entity|
|»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»» category|string|true|none|The classifier for the statues|
|»»»»» allowed_statuses|[object]|false|none|List of allowed statuses|
|»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»» category|string|true|none|The classifier for the statues|
|»»»»» _links|object|false|none|none|
|»»»»»» self|object|false|none|none|
|»»»»»»» href|string(uri)|false|none|none|
|»»»»»» next|object|false|none|none|
|»»»»»»» href|string(uri)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|PGM|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Unauthorized|
|type|https://docs.nterprise.com/api/problem/Unauthorized|
|status|401|
|detail|You are not authorized to access this resource|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Forbidden|
|type|https://docs.nterprise.com/api/problem/Forbidden|
|status|403|
|detail|You are forbidden to access this resource|

<aside class="success">
This operation does not require authentication
</aside>

## createProject

<a id="opIdcreateProject"></a>

`POST /projects`

*Creates a project*

Creates a new project

> Body parameter

```json
{
  "type": "object",
  "description": "Project to create",
  "required": [
    "label"
  ],
  "properties": {
    "label": {
      "type": "string",
      "description": "Label for the entity"
    },
    "program": {
      "type": "object",
      "required": [
        "program_id"
      ],
      "properties": {
        "program_id": {
          "description": "Unique identifier",
          "type": "string",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        }
      }
    },
    "allowed_statuses": {
      "type": "array",
      "description": "List of allowed statuses",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "description": "Defines the properties for a status",
        "additionalProperties": false,
        "required": [
          "status",
          "category"
        ],
        "properties": {
          "status": {
            "type": "string",
            "description": "A Custom label for the status",
            "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
          },
          "category": {
            "type": "string",
            "description": "The classifier for the statues",
            "enum": [
              "PENDING",
              "IN_PROGRESS",
              "VERIFYING",
              "COMPLETE",
              "CANCELLED",
              "BLOCKED"
            ]
          }
        }
      }
    },
    "start_date": {
      "type": "string",
      "nullable": true,
      "format": "date-time",
      "description": "Start date"
    },
    "end_date": {
      "type": "string",
      "nullable": true,
      "format": "date-time",
      "description": "End date"
    }
  }
}
```

<h3 id="createproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Label for the entity|
|program|body|object|false|none|
|» program_id|body|string|true|Unique identifier|
|allowed_statuses|body|[object]|false|List of allowed statuses|
|» status|body|string|true|A Custom label for the status|
|» category|body|string|true|The classifier for the statues|
|start_date|body|string(date-time)\|null|false|Start date|
|end_date|body|string(date-time)\|null|false|End date|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|PENDING|
|» category|IN_PROGRESS|
|» category|VERIFYING|
|» category|COMPLETE|
|» category|CANCELLED|
|» category|BLOCKED|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "example": {
            "href": "https://api.nterprise.com/projects/QEvVrVMMwVcJ6om"
          },
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        }
      }
    },
    "project_id": {
      "type": "string",
      "description": "Unique identifier",
      "pattern": "^[0-9a-zA-Z-_]+$"
    },
    "label": {
      "type": "string",
      "description": "Label for the entity"
    },
    "slug": {
      "type": "string",
      "description": "Slug for the entity (Auto-generated from the label)",
      "readOnly": true,
      "deprecated": true,
      "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
    },
    "created": {
      "description": "Date the entity was created",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "updated": {
      "description": "Last date the entity was updated",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "start_date": {
      "type": "string",
      "nullable": true,
      "format": "date-time",
      "description": "Start date"
    },
    "end_date": {
      "type": "string",
      "nullable": true,
      "format": "date-time",
      "description": "End date"
    },
    "customer": {
      "type": "object",
      "description": "Customer",
      "additionalProperties": false,
      "required": [
        "label",
        "entity_id",
        "entity_type",
        "created",
        "updated",
        "allowed_statuses"
      ],
      "properties": {
        "customer_id": {
          "description": "Customer identifier",
          "type": "string",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_id": {
          "x-no-api-doc": true,
          "type": "string",
          "description": "Customer identifier",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_type": {
          "x-no-api-doc": true,
          "enum": [
            "CUS"
          ]
        },
        "label": {
          "type": "string",
          "description": "Label for the entity"
        },
        "slug": {
          "type": "string",
          "description": "Slug for the entity (Auto-generated from the label)",
          "readOnly": true,
          "deprecated": true,
          "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
        },
        "created": {
          "description": "Date the entity was created",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "updated": {
          "description": "Last date the entity was updated",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "external_platform": {
          "type": "object",
          "description": "External Identifiers for the customer",
          "deprecated": true,
          "x-patternProperties": {
            "^[A-Za-z][A-Za-z0-9_]*$": {
              "type": "string"
            }
          }
        },
        "allowed_statuses": {
          "type": "array",
          "description": "List of allowed statuses",
          "uniqueItems": true,
          "items": {
            "type": "object",
            "description": "Defines the properties for a status",
            "additionalProperties": false,
            "required": [
              "status",
              "category"
            ],
            "properties": {
              "status": {
                "type": "string",
                "description": "A Custom label for the status",
                "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
              },
              "category": {
                "type": "string",
                "description": "The classifier for the statues",
                "enum": [
                  "PENDING",
                  "IN_PROGRESS",
                  "VERIFYING",
                  "COMPLETE",
                  "CANCELLED",
                  "BLOCKED"
                ]
              }
            }
          }
        },
        "total_programs": {
          "type": "number",
          "description": "Total programs under the customer"
        },
        "total_projects": {
          "type": "number",
          "description": "Total projects under the customer"
        }
      }
    },
    "program": {
      "type": "object",
      "description": "Defines the properties for a program",
      "additionalProperties": false,
      "required": [
        "entity_id",
        "entity_type",
        "created",
        "updated",
        "customer",
        "allowed_statuses"
      ],
      "properties": {
        "program_id": {
          "description": "Unique identifier",
          "type": "string",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_id": {
          "x-no-api-doc": true,
          "type": "string",
          "description": "Customer identifier",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_type": {
          "x-no-api-doc": true,
          "enum": [
            "PGM"
          ]
        },
        "label": {
          "type": "string",
          "description": "Label for the entity"
        },
        "slug": {
          "type": "string",
          "description": "Slug for the entity (Auto-generated from the label)",
          "readOnly": true,
          "deprecated": true,
          "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
        },
        "created": {
          "description": "Date the entity was created",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "updated": {
          "description": "Last date the entity was updated",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "start_date": {
          "type": "string",
          "nullable": true,
          "format": "date-time",
          "description": "Start date"
        },
        "end_date": {
          "type": "string",
          "nullable": true,
          "format": "date-time",
          "description": "End date"
        },
        "customer": {
          "type": "object",
          "description": "Customer",
          "additionalProperties": false,
          "required": [
            "label",
            "entity_id",
            "entity_type",
            "created",
            "updated",
            "allowed_statuses"
          ],
          "properties": {
            "customer_id": {
              "description": "Customer identifier",
              "type": "string",
              "readOnly": true,
              "pattern": "^[0-9a-zA-Z-_]+$"
            },
            "entity_id": {
              "x-no-api-doc": true,
              "type": "string",
              "description": "Customer identifier",
              "readOnly": true,
              "pattern": "^[0-9a-zA-Z-_]+$"
            },
            "entity_type": {
              "x-no-api-doc": true,
              "enum": [
                "CUS"
              ]
            },
            "label": {
              "type": "string",
              "description": "Label for the entity"
            },
            "slug": {
              "type": "string",
              "description": "Slug for the entity (Auto-generated from the label)",
              "readOnly": true,
              "deprecated": true,
              "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
            },
            "created": {
              "description": "Date the entity was created",
              "type": "string",
              "format": "date-time",
              "readOnly": true
            },
            "updated": {
              "description": "Last date the entity was updated",
              "type": "string",
              "format": "date-time",
              "readOnly": true
            },
            "external_platform": {
              "type": "object",
              "description": "External Identifiers for the customer",
              "deprecated": true,
              "x-patternProperties": {
                "^[A-Za-z][A-Za-z0-9_]*$": {
                  "type": "string"
                }
              }
            },
            "allowed_statuses": {
              "type": "array",
              "description": "List of allowed statuses",
              "uniqueItems": true,
              "items": {
                "type": "object",
                "description": "Defines the properties for a status",
                "additionalProperties": false,
                "required": [
                  "status",
                  "category"
                ],
                "properties": {
                  "status": {
                    "type": "string",
                    "description": "A Custom label for the status",
                    "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                  },
                  "category": {
                    "type": "string",
                    "description": "The classifier for the statues",
                    "enum": [
                      "PENDING",
                      "IN_PROGRESS",
                      "VERIFYING",
                      "COMPLETE",
                      "CANCELLED",
                      "BLOCKED"
                    ]
                  }
                }
              }
            },
            "total_programs": {
              "type": "number",
              "description": "Total programs under the customer"
            },
            "total_projects": {
              "type": "number",
              "description": "Total projects under the customer"
            }
          }
        },
        "allowed_statuses": {
          "type": "array",
          "description": "List of allowed statuses",
          "uniqueItems": true,
          "items": {
            "type": "object",
            "description": "Defines the properties for a status",
            "additionalProperties": false,
            "required": [
              "status",
              "category"
            ],
            "properties": {
              "status": {
                "type": "string",
                "description": "A Custom label for the status",
                "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
              },
              "category": {
                "type": "string",
                "description": "The classifier for the statues",
                "enum": [
                  "PENDING",
                  "IN_PROGRESS",
                  "VERIFYING",
                  "COMPLETE",
                  "CANCELLED",
                  "BLOCKED"
                ]
              }
            }
          }
        }
      }
    },
    "allowed_statuses": {
      "type": "array",
      "description": "List of allowed statuses",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "description": "Defines the properties for a status",
        "additionalProperties": false,
        "required": [
          "status",
          "category"
        ],
        "properties": {
          "status": {
            "type": "string",
            "description": "A Custom label for the status",
            "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
          },
          "category": {
            "type": "string",
            "description": "The classifier for the statues",
            "enum": [
              "PENDING",
              "IN_PROGRESS",
              "VERIFYING",
              "COMPLETE",
              "CANCELLED",
              "BLOCKED"
            ]
          }
        }
      }
    }
  }
}
```

<h3 id="createproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A project response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="createproject-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» project_id|string|false|none|Unique identifier|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» start_date|string(date-time)\|null|false|none|Start date|
|»» end_date|string(date-time)\|null|false|none|End date|
|»» customer|object|false|none|Customer|
|»»» customer_id|string|false|read-only|Customer identifier|
|»»» entity_id|string|true|read-only|Customer identifier|
|»»» entity_type|string|true|none|none|
|»»» label|string|true|none|Label for the entity|
|»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»» external_platform|object|false|none|External Identifiers for the customer|
|»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»» status|string|true|none|A Custom label for the status|
|»»»» category|string|true|none|The classifier for the statues|
|»»» total_programs|number|false|none|Total programs under the customer|
|»»» total_projects|number|false|none|Total projects under the customer|
|»» program|object|false|none|Defines the properties for a program|
|»»» program_id|string|false|read-only|Unique identifier|
|»»» entity_id|string|true|read-only|Customer identifier|
|»»» entity_type|string|true|none|none|
|»»» label|string|false|none|Label for the entity|
|»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»» start_date|string(date-time)\|null|false|none|Start date|
|»»» end_date|string(date-time)\|null|false|none|End date|
|»»» customer|object|true|none|Customer|
|»»»» customer_id|string|false|read-only|Customer identifier|
|»»»» entity_id|string|true|read-only|Customer identifier|
|»»»» entity_type|string|true|none|none|
|»»»» label|string|true|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»» status|string|true|none|A Custom label for the status|
|»»»»» category|string|true|none|The classifier for the statues|
|»»»» total_programs|number|false|none|Total programs under the customer|
|»»»» total_projects|number|false|none|Total projects under the customer|
|»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»» status|string|true|none|A Custom label for the status|
|»»»» category|string|true|none|The classifier for the statues|
|»»» allowed_statuses|[object]|false|none|List of allowed statuses|
|»»»» status|string|true|none|A Custom label for the status|
|»»»» category|string|true|none|The classifier for the statues|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|PGM|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Bad Request|
|type|https://docs.nterprise.com/api/problem/BadRequest|
|status|400|
|detail|Invalid request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Unauthorized|
|type|https://docs.nterprise.com/api/problem/Unauthorized|
|status|401|
|detail|You are not authorized to access this resource|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Forbidden|
|type|https://docs.nterprise.com/api/problem/Forbidden|
|status|403|
|detail|You are forbidden to access this resource|

<aside class="success">
This operation does not require authentication
</aside>

## fetchProjectById

<a id="opIdfetchProjectById"></a>

`GET /projects/project_id`

*Fetches a project by Id*

Fetch Project

<h3 id="fetchprojectbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "example": {
            "href": "https://api.nterprise.com/projects/QEvVrVMMwVcJ6om"
          },
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        }
      }
    },
    "project_id": {
      "type": "string",
      "description": "Unique identifier",
      "pattern": "^[0-9a-zA-Z-_]+$"
    },
    "label": {
      "type": "string",
      "description": "Label for the entity"
    },
    "slug": {
      "type": "string",
      "description": "Slug for the entity (Auto-generated from the label)",
      "readOnly": true,
      "deprecated": true,
      "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
    },
    "created": {
      "description": "Date the entity was created",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "updated": {
      "description": "Last date the entity was updated",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "start_date": {
      "type": "string",
      "nullable": true,
      "format": "date-time",
      "description": "Start date"
    },
    "end_date": {
      "type": "string",
      "nullable": true,
      "format": "date-time",
      "description": "End date"
    },
    "customer": {
      "type": "object",
      "description": "Customer",
      "additionalProperties": false,
      "required": [
        "label",
        "entity_id",
        "entity_type",
        "created",
        "updated",
        "allowed_statuses"
      ],
      "properties": {
        "customer_id": {
          "description": "Customer identifier",
          "type": "string",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_id": {
          "x-no-api-doc": true,
          "type": "string",
          "description": "Customer identifier",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_type": {
          "x-no-api-doc": true,
          "enum": [
            "CUS"
          ]
        },
        "label": {
          "type": "string",
          "description": "Label for the entity"
        },
        "slug": {
          "type": "string",
          "description": "Slug for the entity (Auto-generated from the label)",
          "readOnly": true,
          "deprecated": true,
          "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
        },
        "created": {
          "description": "Date the entity was created",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "updated": {
          "description": "Last date the entity was updated",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "external_platform": {
          "type": "object",
          "description": "External Identifiers for the customer",
          "deprecated": true,
          "x-patternProperties": {
            "^[A-Za-z][A-Za-z0-9_]*$": {
              "type": "string"
            }
          }
        },
        "allowed_statuses": {
          "type": "array",
          "description": "List of allowed statuses",
          "uniqueItems": true,
          "items": {
            "type": "object",
            "description": "Defines the properties for a status",
            "additionalProperties": false,
            "required": [
              "status",
              "category"
            ],
            "properties": {
              "status": {
                "type": "string",
                "description": "A Custom label for the status",
                "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
              },
              "category": {
                "type": "string",
                "description": "The classifier for the statues",
                "enum": [
                  "PENDING",
                  "IN_PROGRESS",
                  "VERIFYING",
                  "COMPLETE",
                  "CANCELLED",
                  "BLOCKED"
                ]
              }
            }
          }
        },
        "total_programs": {
          "type": "number",
          "description": "Total programs under the customer"
        },
        "total_projects": {
          "type": "number",
          "description": "Total projects under the customer"
        }
      }
    },
    "program": {
      "type": "object",
      "description": "Defines the properties for a program",
      "additionalProperties": false,
      "required": [
        "entity_id",
        "entity_type",
        "created",
        "updated",
        "customer",
        "allowed_statuses"
      ],
      "properties": {
        "program_id": {
          "description": "Unique identifier",
          "type": "string",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_id": {
          "x-no-api-doc": true,
          "type": "string",
          "description": "Customer identifier",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_type": {
          "x-no-api-doc": true,
          "enum": [
            "PGM"
          ]
        },
        "label": {
          "type": "string",
          "description": "Label for the entity"
        },
        "slug": {
          "type": "string",
          "description": "Slug for the entity (Auto-generated from the label)",
          "readOnly": true,
          "deprecated": true,
          "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
        },
        "created": {
          "description": "Date the entity was created",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "updated": {
          "description": "Last date the entity was updated",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "start_date": {
          "type": "string",
          "nullable": true,
          "format": "date-time",
          "description": "Start date"
        },
        "end_date": {
          "type": "string",
          "nullable": true,
          "format": "date-time",
          "description": "End date"
        },
        "customer": {
          "type": "object",
          "description": "Customer",
          "additionalProperties": false,
          "required": [
            "label",
            "entity_id",
            "entity_type",
            "created",
            "updated",
            "allowed_statuses"
          ],
          "properties": {
            "customer_id": {
              "description": "Customer identifier",
              "type": "string",
              "readOnly": true,
              "pattern": "^[0-9a-zA-Z-_]+$"
            },
            "entity_id": {
              "x-no-api-doc": true,
              "type": "string",
              "description": "Customer identifier",
              "readOnly": true,
              "pattern": "^[0-9a-zA-Z-_]+$"
            },
            "entity_type": {
              "x-no-api-doc": true,
              "enum": [
                "CUS"
              ]
            },
            "label": {
              "type": "string",
              "description": "Label for the entity"
            },
            "slug": {
              "type": "string",
              "description": "Slug for the entity (Auto-generated from the label)",
              "readOnly": true,
              "deprecated": true,
              "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
            },
            "created": {
              "description": "Date the entity was created",
              "type": "string",
              "format": "date-time",
              "readOnly": true
            },
            "updated": {
              "description": "Last date the entity was updated",
              "type": "string",
              "format": "date-time",
              "readOnly": true
            },
            "external_platform": {
              "type": "object",
              "description": "External Identifiers for the customer",
              "deprecated": true,
              "x-patternProperties": {
                "^[A-Za-z][A-Za-z0-9_]*$": {
                  "type": "string"
                }
              }
            },
            "allowed_statuses": {
              "type": "array",
              "description": "List of allowed statuses",
              "uniqueItems": true,
              "items": {
                "type": "object",
                "description": "Defines the properties for a status",
                "additionalProperties": false,
                "required": [
                  "status",
                  "category"
                ],
                "properties": {
                  "status": {
                    "type": "string",
                    "description": "A Custom label for the status",
                    "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                  },
                  "category": {
                    "type": "string",
                    "description": "The classifier for the statues",
                    "enum": [
                      "PENDING",
                      "IN_PROGRESS",
                      "VERIFYING",
                      "COMPLETE",
                      "CANCELLED",
                      "BLOCKED"
                    ]
                  }
                }
              }
            },
            "total_programs": {
              "type": "number",
              "description": "Total programs under the customer"
            },
            "total_projects": {
              "type": "number",
              "description": "Total projects under the customer"
            }
          }
        },
        "allowed_statuses": {
          "type": "array",
          "description": "List of allowed statuses",
          "uniqueItems": true,
          "items": {
            "type": "object",
            "description": "Defines the properties for a status",
            "additionalProperties": false,
            "required": [
              "status",
              "category"
            ],
            "properties": {
              "status": {
                "type": "string",
                "description": "A Custom label for the status",
                "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
              },
              "category": {
                "type": "string",
                "description": "The classifier for the statues",
                "enum": [
                  "PENDING",
                  "IN_PROGRESS",
                  "VERIFYING",
                  "COMPLETE",
                  "CANCELLED",
                  "BLOCKED"
                ]
              }
            }
          }
        }
      }
    },
    "allowed_statuses": {
      "type": "array",
      "description": "List of allowed statuses",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "description": "Defines the properties for a status",
        "additionalProperties": false,
        "required": [
          "status",
          "category"
        ],
        "properties": {
          "status": {
            "type": "string",
            "description": "A Custom label for the status",
            "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
          },
          "category": {
            "type": "string",
            "description": "The classifier for the statues",
            "enum": [
              "PENDING",
              "IN_PROGRESS",
              "VERIFYING",
              "COMPLETE",
              "CANCELLED",
              "BLOCKED"
            ]
          }
        }
      }
    }
  }
}
```

<h3 id="fetchprojectbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A project response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchprojectbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» project_id|string|false|none|Unique identifier|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» start_date|string(date-time)\|null|false|none|Start date|
|»» end_date|string(date-time)\|null|false|none|End date|
|»» customer|object|false|none|Customer|
|»»» customer_id|string|false|read-only|Customer identifier|
|»»» entity_id|string|true|read-only|Customer identifier|
|»»» entity_type|string|true|none|none|
|»»» label|string|true|none|Label for the entity|
|»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»» external_platform|object|false|none|External Identifiers for the customer|
|»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»» status|string|true|none|A Custom label for the status|
|»»»» category|string|true|none|The classifier for the statues|
|»»» total_programs|number|false|none|Total programs under the customer|
|»»» total_projects|number|false|none|Total projects under the customer|
|»» program|object|false|none|Defines the properties for a program|
|»»» program_id|string|false|read-only|Unique identifier|
|»»» entity_id|string|true|read-only|Customer identifier|
|»»» entity_type|string|true|none|none|
|»»» label|string|false|none|Label for the entity|
|»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»» start_date|string(date-time)\|null|false|none|Start date|
|»»» end_date|string(date-time)\|null|false|none|End date|
|»»» customer|object|true|none|Customer|
|»»»» customer_id|string|false|read-only|Customer identifier|
|»»»» entity_id|string|true|read-only|Customer identifier|
|»»»» entity_type|string|true|none|none|
|»»»» label|string|true|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»» status|string|true|none|A Custom label for the status|
|»»»»» category|string|true|none|The classifier for the statues|
|»»»» total_programs|number|false|none|Total programs under the customer|
|»»»» total_projects|number|false|none|Total projects under the customer|
|»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»» status|string|true|none|A Custom label for the status|
|»»»» category|string|true|none|The classifier for the statues|
|»»» allowed_statuses|[object]|false|none|List of allowed statuses|
|»»»» status|string|true|none|A Custom label for the status|
|»»»» category|string|true|none|The classifier for the statues|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|PGM|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Unauthorized|
|type|https://docs.nterprise.com/api/problem/Unauthorized|
|status|401|
|detail|You are not authorized to access this resource|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Forbidden|
|type|https://docs.nterprise.com/api/problem/Forbidden|
|status|403|
|detail|You are forbidden to access this resource|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Not Found|
|type|https://docs.nterprise.com/api/problem/NotFound|
|status|404|
|detail|Resource not found|

<aside class="success">
This operation does not require authentication
</aside>

## updateProject

<a id="opIdupdateProject"></a>

`PUT /projects/project_id`

*Updates a project*

Updates a project

> Body parameter

```json
{
  "type": "object",
  "description": "Project to create",
  "required": [
    "label"
  ],
  "properties": {
    "label": {
      "type": "string",
      "description": "Label for the entity"
    },
    "program": {
      "type": "object",
      "required": [
        "program_id"
      ],
      "properties": {
        "program_id": {
          "description": "Unique identifier",
          "type": "string",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        }
      }
    },
    "allowed_statuses": {
      "type": "array",
      "description": "List of allowed statuses",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "description": "Defines the properties for a status",
        "additionalProperties": false,
        "required": [
          "status",
          "category"
        ],
        "properties": {
          "status": {
            "type": "string",
            "description": "A Custom label for the status",
            "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
          },
          "category": {
            "type": "string",
            "description": "The classifier for the statues",
            "enum": [
              "PENDING",
              "IN_PROGRESS",
              "VERIFYING",
              "COMPLETE",
              "CANCELLED",
              "BLOCKED"
            ]
          }
        }
      }
    },
    "start_date": {
      "type": "string",
      "nullable": true,
      "format": "date-time",
      "description": "Start date"
    },
    "end_date": {
      "type": "string",
      "nullable": true,
      "format": "date-time",
      "description": "End date"
    }
  }
}
```

<h3 id="updateproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|
|label|body|string|true|Label for the entity|
|program|body|object|false|none|
|» program_id|body|string|true|Unique identifier|
|allowed_statuses|body|[object]|false|List of allowed statuses|
|» status|body|string|true|A Custom label for the status|
|» category|body|string|true|The classifier for the statues|
|start_date|body|string(date-time)\|null|false|Start date|
|end_date|body|string(date-time)\|null|false|End date|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|PENDING|
|» category|IN_PROGRESS|
|» category|VERIFYING|
|» category|COMPLETE|
|» category|CANCELLED|
|» category|BLOCKED|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "example": {
            "href": "https://api.nterprise.com/projects/QEvVrVMMwVcJ6om"
          },
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        }
      }
    },
    "project_id": {
      "type": "string",
      "description": "Unique identifier",
      "pattern": "^[0-9a-zA-Z-_]+$"
    },
    "label": {
      "type": "string",
      "description": "Label for the entity"
    },
    "slug": {
      "type": "string",
      "description": "Slug for the entity (Auto-generated from the label)",
      "readOnly": true,
      "deprecated": true,
      "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
    },
    "created": {
      "description": "Date the entity was created",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "updated": {
      "description": "Last date the entity was updated",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "start_date": {
      "type": "string",
      "nullable": true,
      "format": "date-time",
      "description": "Start date"
    },
    "end_date": {
      "type": "string",
      "nullable": true,
      "format": "date-time",
      "description": "End date"
    },
    "customer": {
      "type": "object",
      "description": "Customer",
      "additionalProperties": false,
      "required": [
        "label",
        "entity_id",
        "entity_type",
        "created",
        "updated",
        "allowed_statuses"
      ],
      "properties": {
        "customer_id": {
          "description": "Customer identifier",
          "type": "string",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_id": {
          "x-no-api-doc": true,
          "type": "string",
          "description": "Customer identifier",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_type": {
          "x-no-api-doc": true,
          "enum": [
            "CUS"
          ]
        },
        "label": {
          "type": "string",
          "description": "Label for the entity"
        },
        "slug": {
          "type": "string",
          "description": "Slug for the entity (Auto-generated from the label)",
          "readOnly": true,
          "deprecated": true,
          "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
        },
        "created": {
          "description": "Date the entity was created",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "updated": {
          "description": "Last date the entity was updated",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "external_platform": {
          "type": "object",
          "description": "External Identifiers for the customer",
          "deprecated": true,
          "x-patternProperties": {
            "^[A-Za-z][A-Za-z0-9_]*$": {
              "type": "string"
            }
          }
        },
        "allowed_statuses": {
          "type": "array",
          "description": "List of allowed statuses",
          "uniqueItems": true,
          "items": {
            "type": "object",
            "description": "Defines the properties for a status",
            "additionalProperties": false,
            "required": [
              "status",
              "category"
            ],
            "properties": {
              "status": {
                "type": "string",
                "description": "A Custom label for the status",
                "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
              },
              "category": {
                "type": "string",
                "description": "The classifier for the statues",
                "enum": [
                  "PENDING",
                  "IN_PROGRESS",
                  "VERIFYING",
                  "COMPLETE",
                  "CANCELLED",
                  "BLOCKED"
                ]
              }
            }
          }
        },
        "total_programs": {
          "type": "number",
          "description": "Total programs under the customer"
        },
        "total_projects": {
          "type": "number",
          "description": "Total projects under the customer"
        }
      }
    },
    "program": {
      "type": "object",
      "description": "Defines the properties for a program",
      "additionalProperties": false,
      "required": [
        "entity_id",
        "entity_type",
        "created",
        "updated",
        "customer",
        "allowed_statuses"
      ],
      "properties": {
        "program_id": {
          "description": "Unique identifier",
          "type": "string",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_id": {
          "x-no-api-doc": true,
          "type": "string",
          "description": "Customer identifier",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_type": {
          "x-no-api-doc": true,
          "enum": [
            "PGM"
          ]
        },
        "label": {
          "type": "string",
          "description": "Label for the entity"
        },
        "slug": {
          "type": "string",
          "description": "Slug for the entity (Auto-generated from the label)",
          "readOnly": true,
          "deprecated": true,
          "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
        },
        "created": {
          "description": "Date the entity was created",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "updated": {
          "description": "Last date the entity was updated",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "start_date": {
          "type": "string",
          "nullable": true,
          "format": "date-time",
          "description": "Start date"
        },
        "end_date": {
          "type": "string",
          "nullable": true,
          "format": "date-time",
          "description": "End date"
        },
        "customer": {
          "type": "object",
          "description": "Customer",
          "additionalProperties": false,
          "required": [
            "label",
            "entity_id",
            "entity_type",
            "created",
            "updated",
            "allowed_statuses"
          ],
          "properties": {
            "customer_id": {
              "description": "Customer identifier",
              "type": "string",
              "readOnly": true,
              "pattern": "^[0-9a-zA-Z-_]+$"
            },
            "entity_id": {
              "x-no-api-doc": true,
              "type": "string",
              "description": "Customer identifier",
              "readOnly": true,
              "pattern": "^[0-9a-zA-Z-_]+$"
            },
            "entity_type": {
              "x-no-api-doc": true,
              "enum": [
                "CUS"
              ]
            },
            "label": {
              "type": "string",
              "description": "Label for the entity"
            },
            "slug": {
              "type": "string",
              "description": "Slug for the entity (Auto-generated from the label)",
              "readOnly": true,
              "deprecated": true,
              "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
            },
            "created": {
              "description": "Date the entity was created",
              "type": "string",
              "format": "date-time",
              "readOnly": true
            },
            "updated": {
              "description": "Last date the entity was updated",
              "type": "string",
              "format": "date-time",
              "readOnly": true
            },
            "external_platform": {
              "type": "object",
              "description": "External Identifiers for the customer",
              "deprecated": true,
              "x-patternProperties": {
                "^[A-Za-z][A-Za-z0-9_]*$": {
                  "type": "string"
                }
              }
            },
            "allowed_statuses": {
              "type": "array",
              "description": "List of allowed statuses",
              "uniqueItems": true,
              "items": {
                "type": "object",
                "description": "Defines the properties for a status",
                "additionalProperties": false,
                "required": [
                  "status",
                  "category"
                ],
                "properties": {
                  "status": {
                    "type": "string",
                    "description": "A Custom label for the status",
                    "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                  },
                  "category": {
                    "type": "string",
                    "description": "The classifier for the statues",
                    "enum": [
                      "PENDING",
                      "IN_PROGRESS",
                      "VERIFYING",
                      "COMPLETE",
                      "CANCELLED",
                      "BLOCKED"
                    ]
                  }
                }
              }
            },
            "total_programs": {
              "type": "number",
              "description": "Total programs under the customer"
            },
            "total_projects": {
              "type": "number",
              "description": "Total projects under the customer"
            }
          }
        },
        "allowed_statuses": {
          "type": "array",
          "description": "List of allowed statuses",
          "uniqueItems": true,
          "items": {
            "type": "object",
            "description": "Defines the properties for a status",
            "additionalProperties": false,
            "required": [
              "status",
              "category"
            ],
            "properties": {
              "status": {
                "type": "string",
                "description": "A Custom label for the status",
                "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
              },
              "category": {
                "type": "string",
                "description": "The classifier for the statues",
                "enum": [
                  "PENDING",
                  "IN_PROGRESS",
                  "VERIFYING",
                  "COMPLETE",
                  "CANCELLED",
                  "BLOCKED"
                ]
              }
            }
          }
        }
      }
    },
    "allowed_statuses": {
      "type": "array",
      "description": "List of allowed statuses",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "description": "Defines the properties for a status",
        "additionalProperties": false,
        "required": [
          "status",
          "category"
        ],
        "properties": {
          "status": {
            "type": "string",
            "description": "A Custom label for the status",
            "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
          },
          "category": {
            "type": "string",
            "description": "The classifier for the statues",
            "enum": [
              "PENDING",
              "IN_PROGRESS",
              "VERIFYING",
              "COMPLETE",
              "CANCELLED",
              "BLOCKED"
            ]
          }
        }
      }
    }
  }
}
```

<h3 id="updateproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A project response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="updateproject-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» project_id|string|false|none|Unique identifier|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» start_date|string(date-time)\|null|false|none|Start date|
|»» end_date|string(date-time)\|null|false|none|End date|
|»» customer|object|false|none|Customer|
|»»» customer_id|string|false|read-only|Customer identifier|
|»»» entity_id|string|true|read-only|Customer identifier|
|»»» entity_type|string|true|none|none|
|»»» label|string|true|none|Label for the entity|
|»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»» external_platform|object|false|none|External Identifiers for the customer|
|»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»» status|string|true|none|A Custom label for the status|
|»»»» category|string|true|none|The classifier for the statues|
|»»» total_programs|number|false|none|Total programs under the customer|
|»»» total_projects|number|false|none|Total projects under the customer|
|»» program|object|false|none|Defines the properties for a program|
|»»» program_id|string|false|read-only|Unique identifier|
|»»» entity_id|string|true|read-only|Customer identifier|
|»»» entity_type|string|true|none|none|
|»»» label|string|false|none|Label for the entity|
|»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»» start_date|string(date-time)\|null|false|none|Start date|
|»»» end_date|string(date-time)\|null|false|none|End date|
|»»» customer|object|true|none|Customer|
|»»»» customer_id|string|false|read-only|Customer identifier|
|»»»» entity_id|string|true|read-only|Customer identifier|
|»»»» entity_type|string|true|none|none|
|»»»» label|string|true|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»» status|string|true|none|A Custom label for the status|
|»»»»» category|string|true|none|The classifier for the statues|
|»»»» total_programs|number|false|none|Total programs under the customer|
|»»»» total_projects|number|false|none|Total projects under the customer|
|»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»» status|string|true|none|A Custom label for the status|
|»»»» category|string|true|none|The classifier for the statues|
|»»» allowed_statuses|[object]|false|none|List of allowed statuses|
|»»»» status|string|true|none|A Custom label for the status|
|»»»» category|string|true|none|The classifier for the statues|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|PGM|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Bad Request|
|type|https://docs.nterprise.com/api/problem/BadRequest|
|status|400|
|detail|Invalid request|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Forbidden|
|type|https://docs.nterprise.com/api/problem/Forbidden|
|status|403|
|detail|You are forbidden to access this resource|

Status Code **423**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Locked|
|type|https://docs.nterprise.com/api/problem/Locked|
|status|423|
|detail|The current resource is locked and cannot be modified|

<aside class="success">
This operation does not require authentication
</aside>

## deleteProject

<a id="opIddeleteProject"></a>

`DELETE /projects/project_id`

*Deletes a project*

This will soft delete the project

<h3 id="deleteproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|

> Example responses

> 401 Response

```json
{
  "properties": {
    "title": {
      "enum": [
        "Unauthorized"
      ]
    },
    "type": {
      "enum": [
        "https://docs.nterprise.com/api/problem/Unauthorized"
      ]
    },
    "status": {
      "enum": [
        401
      ]
    },
    "detail": {
      "enum": [
        "You are not authorized to access this resource"
      ]
    }
  }
}
```

<h3 id="deleteproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Project deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="deleteproject-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Unauthorized|
|type|https://docs.nterprise.com/api/problem/Unauthorized|
|status|401|
|detail|You are not authorized to access this resource|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Forbidden|
|type|https://docs.nterprise.com/api/problem/Forbidden|
|status|403|
|detail|You are forbidden to access this resource|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Not Found|
|type|https://docs.nterprise.com/api/problem/NotFound|
|status|404|
|detail|Resource not found|

Status Code **423**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Locked|
|type|https://docs.nterprise.com/api/problem/Locked|
|status|423|
|detail|The current resource is locked and cannot be modified|

<aside class="success">
This operation does not require authentication
</aside>

## fetchAllProjectWorkOrders

<a id="opIdfetchAllProjectWorkOrders"></a>

`GET /projects/{project_id}/work-orders`

*Fetches work orders for a project*

Fetch project work orders

<h3 id="fetchallprojectworkorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Id for the project|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:work-orders": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "object",
            "properties": {
              "_links": {
                "type": "object",
                "properties": {
                  "self": {
                    "example": {
                      "href": "https://api.nterprise.com/work_orders/kk9z7zwvQYH5GKx"
                    },
                    "type": "object",
                    "properties": {
                      "href": {
                        "type": "string",
                        "format": "uri"
                      }
                    }
                  }
                }
              },
              "work_order_id": {
                "type": "string",
                "description": "The identifier for the unit",
                "pattern": "^[0-9a-zA-Z-_]+$"
              },
              "label": {
                "type": "string",
                "description": "Label for the entity"
              },
              "slug": {
                "type": "string",
                "description": "Slug for the entity (Auto-generated from the label)",
                "readOnly": true,
                "deprecated": true,
                "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
              },
              "created": {
                "description": "Date the entity was created",
                "type": "string",
                "format": "date-time",
                "readOnly": true
              },
              "updated": {
                "description": "Last date the entity was updated",
                "type": "string",
                "format": "date-time",
                "readOnly": true
              },
              "start_date": {
                "description": "Last date the entity was updated",
                "type": "string",
                "format": "date-time",
                "readOnly": true
              },
              "end_date": {
                "description": "Last date the entity was updated",
                "type": "string",
                "format": "date-time",
                "readOnly": true
              },
              "description": {
                "type": "string",
                "description": "Detailed description for the work order"
              },
              "work_order_type": {
                "type": "string",
                "description": "Type of work order",
                "enum": [
                  "device"
                ]
              },
              "due_date": {
                "type": "string",
                "format": "date-time",
                "description": "End date"
              },
              "current_status": {
                "type": "object",
                "description": "Defines the properties for a status",
                "additionalProperties": false,
                "required": [
                  "status",
                  "category"
                ],
                "properties": {
                  "status": {
                    "type": "string",
                    "description": "A Custom label for the status",
                    "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                  },
                  "category": {
                    "type": "string",
                    "description": "The classifier for the statues",
                    "enum": [
                      "PENDING",
                      "IN_PROGRESS",
                      "VERIFYING",
                      "COMPLETE",
                      "CANCELLED",
                      "BLOCKED"
                    ]
                  }
                }
              },
              "project": {
                "type": "object",
                "description": "Defines the properties for a project",
                "additionalProperties": false,
                "required": [
                  "label",
                  "entity_id",
                  "entity_type",
                  "created",
                  "updated",
                  "customer",
                  "program",
                  "allowed_statuses"
                ],
                "properties": {
                  "project_id": {
                    "type": "string",
                    "description": "Unique identifier",
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_id": {
                    "x-no-api-doc": true,
                    "type": "string",
                    "description": "Customer identifier",
                    "readOnly": true,
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_type": {
                    "x-no-api-doc": true,
                    "enum": [
                      "PRJ"
                    ]
                  },
                  "label": {
                    "type": "string",
                    "description": "Label for the entity"
                  },
                  "slug": {
                    "type": "string",
                    "description": "Slug for the entity (Auto-generated from the label)",
                    "readOnly": true,
                    "deprecated": true,
                    "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                  },
                  "created": {
                    "description": "Date the entity was created",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                  },
                  "updated": {
                    "description": "Last date the entity was updated",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                  },
                  "customer": {
                    "type": "object",
                    "description": "Customer",
                    "additionalProperties": false,
                    "required": [
                      "label",
                      "entity_id",
                      "entity_type",
                      "created",
                      "updated",
                      "allowed_statuses"
                    ],
                    "properties": {
                      "customer_id": {
                        "description": "Customer identifier",
                        "type": "string",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_id": {
                        "x-no-api-doc": true,
                        "type": "string",
                        "description": "Customer identifier",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_type": {
                        "x-no-api-doc": true,
                        "enum": [
                          "CUS"
                        ]
                      },
                      "label": {
                        "type": "string",
                        "description": "Label for the entity"
                      },
                      "slug": {
                        "type": "string",
                        "description": "Slug for the entity (Auto-generated from the label)",
                        "readOnly": true,
                        "deprecated": true,
                        "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                      },
                      "created": {
                        "description": "Date the entity was created",
                        "type": "string",
                        "format": "date-time",
                        "readOnly": true
                      },
                      "updated": {
                        "description": "Last date the entity was updated",
                        "type": "string",
                        "format": "date-time",
                        "readOnly": true
                      },
                      "external_platform": {
                        "type": "object",
                        "description": "External Identifiers for the customer",
                        "deprecated": true,
                        "x-patternProperties": {
                          "^[A-Za-z][A-Za-z0-9_]*$": {
                            "type": "string"
                          }
                        }
                      },
                      "allowed_statuses": {
                        "type": "array",
                        "description": "List of allowed statuses",
                        "uniqueItems": true,
                        "items": {
                          "type": "object",
                          "description": "Defines the properties for a status",
                          "additionalProperties": false,
                          "required": [
                            "status",
                            "category"
                          ],
                          "properties": {
                            "status": {
                              "type": "string",
                              "description": "A Custom label for the status",
                              "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                            },
                            "category": {
                              "type": "string",
                              "description": "The classifier for the statues",
                              "enum": [
                                "PENDING",
                                "IN_PROGRESS",
                                "VERIFYING",
                                "COMPLETE",
                                "CANCELLED",
                                "BLOCKED"
                              ]
                            }
                          }
                        }
                      },
                      "total_programs": {
                        "type": "number",
                        "description": "Total programs under the customer"
                      },
                      "total_projects": {
                        "type": "number",
                        "description": "Total projects under the customer"
                      }
                    }
                  },
                  "program": {
                    "type": "object",
                    "description": "Defines the properties for a program",
                    "additionalProperties": false,
                    "required": [
                      "entity_id",
                      "entity_type",
                      "created",
                      "updated",
                      "customer",
                      "allowed_statuses"
                    ],
                    "properties": {
                      "program_id": {
                        "description": "Unique identifier",
                        "type": "string",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_id": {
                        "x-no-api-doc": true,
                        "type": "string",
                        "description": "Customer identifier",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_type": {
                        "x-no-api-doc": true,
                        "enum": [
                          "PGM"
                        ]
                      },
                      "label": {
                        "type": "string",
                        "description": "Label for the entity"
                      },
                      "slug": {
                        "type": "string",
                        "description": "Slug for the entity (Auto-generated from the label)",
                        "readOnly": true,
                        "deprecated": true,
                        "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                      },
                      "created": {
                        "description": "Date the entity was created",
                        "type": "string",
                        "format": "date-time",
                        "readOnly": true
                      },
                      "updated": {
                        "description": "Last date the entity was updated",
                        "type": "string",
                        "format": "date-time",
                        "readOnly": true
                      },
                      "start_date": {
                        "type": "string",
                        "nullable": true,
                        "format": "date-time",
                        "description": "Start date"
                      },
                      "end_date": {
                        "type": "string",
                        "nullable": true,
                        "format": "date-time",
                        "description": "End date"
                      },
                      "customer": {
                        "type": "object",
                        "description": "Customer",
                        "additionalProperties": false,
                        "required": [
                          "label",
                          "entity_id",
                          "entity_type",
                          "created",
                          "updated",
                          "allowed_statuses"
                        ],
                        "properties": {
                          "customer_id": {
                            "description": "Customer identifier",
                            "type": "string",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_id": {
                            "x-no-api-doc": true,
                            "type": "string",
                            "description": "Customer identifier",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_type": {
                            "x-no-api-doc": true,
                            "enum": [
                              "CUS"
                            ]
                          },
                          "label": {
                            "type": "string",
                            "description": "Label for the entity"
                          },
                          "slug": {
                            "type": "string",
                            "description": "Slug for the entity (Auto-generated from the label)",
                            "readOnly": true,
                            "deprecated": true,
                            "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                          },
                          "created": {
                            "description": "Date the entity was created",
                            "type": "string",
                            "format": "date-time",
                            "readOnly": true
                          },
                          "updated": {
                            "description": "Last date the entity was updated",
                            "type": "string",
                            "format": "date-time",
                            "readOnly": true
                          },
                          "external_platform": {
                            "type": "object",
                            "description": "External Identifiers for the customer",
                            "deprecated": true,
                            "x-patternProperties": {
                              "^[A-Za-z][A-Za-z0-9_]*$": {
                                "type": "string"
                              }
                            }
                          },
                          "allowed_statuses": {
                            "type": "array",
                            "description": "List of allowed statuses",
                            "uniqueItems": true,
                            "items": {
                              "type": "object",
                              "description": "Defines the properties for a status",
                              "additionalProperties": false,
                              "required": [
                                "status",
                                "category"
                              ],
                              "properties": {
                                "status": {
                                  "type": "string",
                                  "description": "A Custom label for the status",
                                  "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                                },
                                "category": {
                                  "type": "string",
                                  "description": "The classifier for the statues",
                                  "enum": [
                                    "PENDING",
                                    "IN_PROGRESS",
                                    "VERIFYING",
                                    "COMPLETE",
                                    "CANCELLED",
                                    "BLOCKED"
                                  ]
                                }
                              }
                            }
                          },
                          "total_programs": {
                            "type": "number",
                            "description": "Total programs under the customer"
                          },
                          "total_projects": {
                            "type": "number",
                            "description": "Total projects under the customer"
                          }
                        }
                      },
                      "allowed_statuses": {
                        "type": "array",
                        "description": "List of allowed statuses",
                        "uniqueItems": true,
                        "items": {
                          "type": "object",
                          "description": "Defines the properties for a status",
                          "additionalProperties": false,
                          "required": [
                            "status",
                            "category"
                          ],
                          "properties": {
                            "status": {
                              "type": "string",
                              "description": "A Custom label for the status",
                              "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                            },
                            "category": {
                              "type": "string",
                              "description": "The classifier for the statues",
                              "enum": [
                                "PENDING",
                                "IN_PROGRESS",
                                "VERIFYING",
                                "COMPLETE",
                                "CANCELLED",
                                "BLOCKED"
                              ]
                            }
                          }
                        }
                      }
                    }
                  },
                  "allowed_statuses": {
                    "type": "array",
                    "description": "List of allowed statuses",
                    "uniqueItems": true,
                    "items": {
                      "type": "object",
                      "description": "Defines the properties for a status",
                      "additionalProperties": false,
                      "required": [
                        "status",
                        "category"
                      ],
                      "properties": {
                        "status": {
                          "type": "string",
                          "description": "A Custom label for the status",
                          "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                        },
                        "category": {
                          "type": "string",
                          "description": "The classifier for the statues",
                          "enum": [
                            "PENDING",
                            "IN_PROGRESS",
                            "VERIFYING",
                            "COMPLETE",
                            "CANCELLED",
                            "BLOCKED"
                          ]
                        }
                      }
                    }
                  },
                  "start_date": {
                    "type": "string",
                    "nullable": true,
                    "format": "date-time",
                    "description": "Start date"
                  },
                  "end_date": {
                    "type": "string",
                    "nullable": true,
                    "format": "date-time",
                    "description": "End date"
                  }
                },
                "allOf": [
                  {
                    "type": "object",
                    "description": "Common Properties to all entities",
                    "required": [
                      "label"
                    ],
                    "properties": {
                      "entity_id": {
                        "type": "string",
                        "description": "Customer identifier",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "label": {
                        "type": "string",
                        "description": "Label for the entity"
                      },
                      "slug": {
                        "type": "string",
                        "description": "Slug for the entity (Auto-generated from the label)",
                        "readOnly": true,
                        "deprecated": true,
                        "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                      },
                      "created": {
                        "description": "Date the entity was created",
                        "type": "string",
                        "format": "date-time",
                        "readOnly": true
                      },
                      "updated": {
                        "description": "Last date the entity was updated",
                        "type": "string",
                        "format": "date-time",
                        "readOnly": true
                      }
                    }
                  }
                ]
              },
              "work_flows": {
                "type": "array",
                "description": "Cycles of work flows needed to complete the work order",
                "items": {
                  "type": "object",
                  "required": [
                    "cycles_needed",
                    "work_flow"
                  ],
                  "properties": {
                    "cycles_needed": {
                      "type": "integer",
                      "description": "The number of cycles needed",
                      "minimum": 1
                    },
                    "work_flow": {
                      "type": "object",
                      "description": "Workflow",
                      "additionalProperties": false,
                      "required": [
                        "label",
                        "entity_id",
                        "entity_type",
                        "created",
                        "updated",
                        "steps",
                        "starts_at",
                        "applies_to",
                        "schema_version"
                      ],
                      "properties": {
                        "work_flow_id": {
                          "type": "string",
                          "description": "Customer identifier",
                          "readOnly": true,
                          "pattern": "^[0-9a-zA-Z-_]+$"
                        },
                        "entity_id": {
                          "x-no-api-doc": true,
                          "type": "string",
                          "description": "Customer identifier",
                          "readOnly": true,
                          "pattern": "^[0-9a-zA-Z-_]+$"
                        },
                        "entity_type": {
                          "x-no-api-doc": true,
                          "enum": [
                            "WKF"
                          ]
                        },
                        "label": {
                          "type": "string",
                          "description": "Label for the entity"
                        },
                        "slug": {
                          "type": "string",
                          "description": "Slug for the entity (Auto-generated from the label)",
                          "readOnly": true,
                          "deprecated": true,
                          "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                        },
                        "created": {
                          "description": "Date the entity was created",
                          "type": "string",
                          "format": "date-time",
                          "readOnly": true
                        },
                        "updated": {
                          "description": "Last date the entity was updated",
                          "type": "string",
                          "format": "date-time",
                          "readOnly": true
                        },
                        "schema_version": {
                          "type": "string",
                          "description": "Version of the workflow schema used",
                          "enum": [
                            "1.0"
                          ]
                        },
                        "workflow_version": {
                          "type": "integer",
                          "description": "Version number for the work flows (the number of times it has been changed",
                          "readOnly": true
                        },
                        "applies_to": {
                          "type": "string",
                          "description": "The entity type this work flow applies too",
                          "enum": [
                            "unit",
                            "part",
                            "program",
                            "project",
                            "customer",
                            "contact"
                          ]
                        },
                        "starts_at": {
                          "type": "string",
                          "description": "Starting step"
                        },
                        "steps": {
                          "type": "object",
                          "description": "Steps for the workflow",
                          "uniqueItems": true,
                          "additionalProperties": true,
                          "x-patternProperties": {
                            "^[A-Za-z][A-Za-z0-9_]*$": {
                              "anyOf": [
                                {
                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/function/allocateUnitsToProject.json",
                                  "type": "object",
                                  "description": "Require the user confirm an action. This is normally used when Niagara cannot automatically detect that a task or action has been performed.",
                                  "properties": {
                                    "label": {
                                      "type": "string",
                                      "description": "Label for the entity"
                                    },
                                    "options": {
                                      "type": "object",
                                      "required": [
                                        "function",
                                        "payload"
                                      ],
                                      "properties": {
                                        "function": {
                                          "type": "string",
                                          "enum": [
                                            "allocate-units-to-project"
                                          ]
                                        },
                                        "payload": {
                                          "type": "object",
                                          "required": [
                                            "part_id",
                                            "project_id",
                                            "qty"
                                          ],
                                          "properties": {
                                            "part_id": {
                                              "type": "string",
                                              "description": "Part ID of the to assign"
                                            },
                                            "program_id": {
                                              "type": "string",
                                              "description": "Program ID of the to assign"
                                            },
                                            "qty": {
                                              "type": "number",
                                              "minimum": 1,
                                              "description": "Number of units to assign to the project"
                                            },
                                            "allow_scarcity": {
                                              "type": "boolean",
                                              "description": "Allow the workflow to continue even if there are not enough units"
                                            },
                                            "force": {
                                              "type": "boolean",
                                              "description": "Assign the units even if the project already has units allocated"
                                            },
                                            "status": {
                                              "type": "string",
                                              "description": "Only assign units which are in this status"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/followPDFInstructions.json",
                                  "type": "object",
                                  "description": "Display a link or modal to a user which contains instructions from a PDF",
                                  "required": [
                                    "label",
                                    "payload"
                                  ],
                                  "properties": {
                                    "label": {
                                      "type": "string",
                                      "description": "Label for the step"
                                    },
                                    "options": {
                                      "type": "object",
                                      "required": [
                                        "component",
                                        "payload"
                                      ],
                                      "properties": {
                                        "component": {
                                          "enum": [
                                            "follow-pds-instructions"
                                          ]
                                        },
                                        "payload": {
                                          "type": "object",
                                          "required": [
                                            "attachment_id"
                                          ],
                                          "properties": {
                                            "attachment_id": {
                                              "type": "string",
                                              "description": "UUID for the attachment",
                                              "format": "uuid"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "allOf": [
                                    {
                                      "$schema": "http://json-schema.org/draft-07/schema#",
                                      "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepUser.json",
                                      "type": "object",
                                      "description": "A step which requires a user to complete",
                                      "required": [
                                        "type",
                                        "options"
                                      ],
                                      "properties": {
                                        "type": {
                                          "type": "string",
                                          "description": "Type of workflow step",
                                          "enum": [
                                            "load",
                                            "choice",
                                            "function",
                                            "machine",
                                            "pass",
                                            "fail",
                                            "success",
                                            "user",
                                            "wait"
                                          ]
                                        },
                                        "options": {
                                          "type": "object",
                                          "required": [
                                            "component",
                                            "payload"
                                          ],
                                          "properties": {
                                            "component": {
                                              "type": "string",
                                              "description": "Name of the function to invoke"
                                            },
                                            "payload": {
                                              "type": "object"
                                            }
                                          }
                                        }
                                      },
                                      "allOf": [
                                        {
                                          "$schema": "http://json-schema.org/draft-07/schema#",
                                          "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepCommon.json",
                                          "type": "object",
                                          "required": [
                                            "type",
                                            "label",
                                            "goto"
                                          ],
                                          "properties": {
                                            "type": {
                                              "type": "string",
                                              "description": "Type of workflow step",
                                              "enum": [
                                                "load",
                                                "choice",
                                                "function",
                                                "machine",
                                                "pass",
                                                "fail",
                                                "success",
                                                "user",
                                                "wait"
                                              ]
                                            },
                                            "label": {
                                              "type": "string",
                                              "description": "Label for the step"
                                            },
                                            "goto": {
                                              "type": "string",
                                              "description": "Step to move to",
                                              "pattern": "^[a-z][a-z-]+[a-z]$"
                                            },
                                            "goto-fail": {
                                              "type": "string",
                                              "description": "Step to transition too if this step cannot be completed",
                                              "pattern": "^[a-z][a-z-]+[a-z]$"
                                            },
                                            "onComplete": {
                                              "$schema": "http://json-schema.org/draft-07/schema#",
                                              "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                              "type": "object",
                                              "required": [
                                                "retry",
                                                "finally"
                                              ],
                                              "properties": {
                                                "actions": {
                                                  "type": "array",
                                                  "description": "Actions to take on failure",
                                                  "maxItems": 10,
                                                  "items": {
                                                    "type": "object"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/manualDataEntry.json",
                                  "type": "object",
                                  "description": "Ask the user to manually enter (or confirm) data for an entity",
                                  "properties": {
                                    "label": {
                                      "type": "string",
                                      "description": "Label for the step"
                                    },
                                    "options": {
                                      "type": "object",
                                      "required": [
                                        "component",
                                        "payload"
                                      ],
                                      "properties": {
                                        "component": {
                                          "enum": [
                                            "manual-data-entry"
                                          ]
                                        },
                                        "payload": {
                                          "type": "object",
                                          "required": [
                                            "fields"
                                          ],
                                          "properties": {
                                            "fields": {
                                              "type": "array",
                                              "description": "Configuration for each field",
                                              "items": {
                                                "type": "object",
                                                "required": [
                                                  "input_type",
                                                  "label",
                                                  "required",
                                                  "entity_field"
                                                ],
                                                "properties": {
                                                  "input_type": {
                                                    "type": "string",
                                                    "description": "The type of input field to display",
                                                    "enum": [
                                                      "textbox",
                                                      "input"
                                                    ]
                                                  },
                                                  "label": {
                                                    "type": "string",
                                                    "description": "Label to display for the field"
                                                  },
                                                  "required": {
                                                    "type": "boolean",
                                                    "description": "Display the field as required input. Note: this is a helper function. It singles that the user is required to input data at this step. If the field is required on the entity, the user will be presented with a validation message"
                                                  },
                                                  "entity_field": {
                                                    "type": "string",
                                                    "description": "JSON Path to the field on the entity. If the path does not start with '$' then the entity on the context is assumed. Otherwise the data will be set on the context path"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "allOf": [
                                    {
                                      "$schema": "http://json-schema.org/draft-07/schema#",
                                      "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepUser.json",
                                      "type": "object",
                                      "description": "A step which requires a user to complete",
                                      "required": [
                                        "type",
                                        "options"
                                      ],
                                      "properties": {
                                        "type": {
                                          "type": "string",
                                          "description": "Type of workflow step",
                                          "enum": [
                                            "load",
                                            "choice",
                                            "function",
                                            "machine",
                                            "pass",
                                            "fail",
                                            "success",
                                            "user",
                                            "wait"
                                          ]
                                        },
                                        "options": {
                                          "type": "object",
                                          "required": [
                                            "component",
                                            "payload"
                                          ],
                                          "properties": {
                                            "component": {
                                              "type": "string",
                                              "description": "Name of the function to invoke"
                                            },
                                            "payload": {
                                              "type": "object"
                                            }
                                          }
                                        }
                                      },
                                      "allOf": [
                                        {
                                          "$schema": "http://json-schema.org/draft-07/schema#",
                                          "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepCommon.json",
                                          "type": "object",
                                          "required": [
                                            "type",
                                            "label",
                                            "goto"
                                          ],
                                          "properties": {
                                            "type": {
                                              "type": "string",
                                              "description": "Type of workflow step",
                                              "enum": [
                                                "load",
                                                "choice",
                                                "function",
                                                "machine",
                                                "pass",
                                                "fail",
                                                "success",
                                                "user",
                                                "wait"
                                              ]
                                            },
                                            "label": {
                                              "type": "string",
                                              "description": "Label for the step"
                                            },
                                            "goto": {
                                              "type": "string",
                                              "description": "Step to move to",
                                              "pattern": "^[a-z][a-z-]+[a-z]$"
                                            },
                                            "goto-fail": {
                                              "type": "string",
                                              "description": "Step to transition too if this step cannot be completed",
                                              "pattern": "^[a-z][a-z-]+[a-z]$"
                                            },
                                            "onComplete": {
                                              "$schema": "http://json-schema.org/draft-07/schema#",
                                              "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                              "type": "object",
                                              "required": [
                                                "retry",
                                                "finally"
                                              ],
                                              "properties": {
                                                "actions": {
                                                  "type": "array",
                                                  "description": "Actions to take on failure",
                                                  "maxItems": 10,
                                                  "items": {
                                                    "type": "object"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/taskList.json",
                                  "type": "object",
                                  "description": "Ask the user to follow a list and check off boxes",
                                  "properties": {
                                    "label": {
                                      "type": "string",
                                      "description": "Label for the step"
                                    },
                                    "options": {
                                      "type": "object",
                                      "required": [
                                        "component",
                                        "payload"
                                      ],
                                      "properties": {
                                        "component": {
                                          "enum": [
                                            "task-list"
                                          ]
                                        },
                                        "payload": {
                                          "type": "object",
                                          "required": [
                                            "items"
                                          ],
                                          "properties": {
                                            "is_qc": {
                                              "type": "boolean",
                                              "description": "Flags this list as a QC task list. This means that a different user can close the task to one previously on the context"
                                            },
                                            "items": {
                                              "type": "array",
                                              "description": "Configuration for each task list item",
                                              "items": {
                                                "type": "object",
                                                "required": [
                                                  "label",
                                                  "evaluated",
                                                  "na_option"
                                                ],
                                                "properties": {
                                                  "label": {
                                                    "type": "string",
                                                    "description": "Label to display for the field"
                                                  },
                                                  "slug": {
                                                    "type": "string",
                                                    "description": "Slug for the item (Auto-generated from the label)",
                                                    "readOnly": true,
                                                    "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                                                  },
                                                  "help": {
                                                    "type": "string",
                                                    "description": "Message describing what is needed to be checked"
                                                  },
                                                  "evaluated": {
                                                    "type": "boolean",
                                                    "description": "When set to true, this will fail the step if the value for the item is false or N/A"
                                                  },
                                                  "na_field": {
                                                    "type": "boolean",
                                                    "description": "Allow the user to select the N/A option when checking off the list"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "allOf": [
                                    {
                                      "$schema": "http://json-schema.org/draft-07/schema#",
                                      "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepUser.json",
                                      "type": "object",
                                      "description": "A step which requires a user to complete",
                                      "required": [
                                        "type",
                                        "options"
                                      ],
                                      "properties": {
                                        "type": {
                                          "type": "string",
                                          "description": "Type of workflow step",
                                          "enum": [
                                            "load",
                                            "choice",
                                            "function",
                                            "machine",
                                            "pass",
                                            "fail",
                                            "success",
                                            "user",
                                            "wait"
                                          ]
                                        },
                                        "options": {
                                          "type": "object",
                                          "required": [
                                            "component",
                                            "payload"
                                          ],
                                          "properties": {
                                            "component": {
                                              "type": "string",
                                              "description": "Name of the function to invoke"
                                            },
                                            "payload": {
                                              "type": "object"
                                            }
                                          }
                                        }
                                      },
                                      "allOf": [
                                        {
                                          "$schema": "http://json-schema.org/draft-07/schema#",
                                          "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepCommon.json",
                                          "type": "object",
                                          "required": [
                                            "type",
                                            "label",
                                            "goto"
                                          ],
                                          "properties": {
                                            "type": {
                                              "type": "string",
                                              "description": "Type of workflow step",
                                              "enum": [
                                                "load",
                                                "choice",
                                                "function",
                                                "machine",
                                                "pass",
                                                "fail",
                                                "success",
                                                "user",
                                                "wait"
                                              ]
                                            },
                                            "label": {
                                              "type": "string",
                                              "description": "Label for the step"
                                            },
                                            "goto": {
                                              "type": "string",
                                              "description": "Step to move to",
                                              "pattern": "^[a-z][a-z-]+[a-z]$"
                                            },
                                            "goto-fail": {
                                              "type": "string",
                                              "description": "Step to transition too if this step cannot be completed",
                                              "pattern": "^[a-z][a-z-]+[a-z]$"
                                            },
                                            "onComplete": {
                                              "$schema": "http://json-schema.org/draft-07/schema#",
                                              "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                              "type": "object",
                                              "required": [
                                                "retry",
                                                "finally"
                                              ],
                                              "properties": {
                                                "actions": {
                                                  "type": "array",
                                                  "description": "Actions to take on failure",
                                                  "maxItems": 10,
                                                  "items": {
                                                    "type": "object"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/machine/aceIos.json",
                                  "type": "object",
                                  "description": "Run the ACE-IOS application to provision iOS devices or ",
                                  "properties": {
                                    "type": {
                                      "type": "string",
                                      "enum": [
                                        "machine"
                                      ]
                                    },
                                    "label": {
                                      "type": "string",
                                      "description": "Label for the step"
                                    },
                                    "options": {
                                      "type": "object",
                                      "required": [
                                        "application",
                                        "configuration"
                                      ],
                                      "properties": {
                                        "configuration": {
                                          "type": "object",
                                          "description": "ACE Configuration options",
                                          "properties": {
                                            "pairing_cert": {
                                              "type": "string",
                                              "description": "Contents of a *.crt file exported from Apple Configurator or MDM",
                                              "pattern": "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
                                            },
                                            "pairing_key": {
                                              "type": "string",
                                              "description": "Contents of a *.der file exported from Apple Configurator or MDM",
                                              "pattern": "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
                                            },
                                            "restore_device": {
                                              "type": "boolean",
                                              "description": "Restore device to factory defaults"
                                            },
                                            "automated_enrollment": {
                                              "type": "boolean",
                                              "description": "Automatically enroll the device to MDM"
                                            },
                                            "mdm": {
                                              "type": "object",
                                              "description": "The settings for the Customers MDM",
                                              "properties": {
                                                "vendor": {
                                                  "type": "string",
                                                  "description": "MDM vendor. Currently, supported values are AirWatch, JAMF, and Meraki.",
                                                  "enum": [
                                                    "AirWatch",
                                                    "JAMF",
                                                    "Meraki"
                                                  ]
                                                },
                                                "console_url": {
                                                  "type": "string",
                                                  "format": "uri",
                                                  "description": "Base URL for HTTP requests"
                                                },
                                                "user": {
                                                  "type": "string",
                                                  "description": "MDM User name"
                                                },
                                                "password": {
                                                  "type": "string",
                                                  "description": "MDM password"
                                                },
                                                "tenant_code": {
                                                  "type": "string",
                                                  "description": "MDM authentication key"
                                                },
                                                "set_asset_tag": {
                                                  "type": "string",
                                                  "description": "Sets the devices Asset tag based on a field from the unit"
                                                }
                                              }
                                            },
                                            "field_mappings": {
                                              "type": "array",
                                              "description": "List of fields to map to the device",
                                              "items": {
                                                "type": "object",
                                                "properties": {
                                                  "from": {
                                                    "type": "string",
                                                    "description": "The field reported from ACE",
                                                    "enum": [
                                                      "serial_number",
                                                      "name",
                                                      "ecid",
                                                      "udid",
                                                      "configurator_serial",
                                                      "ios",
                                                      "model",
                                                      "storage",
                                                      "wifi_mac",
                                                      "bt_mac",
                                                      "ethernet_mac",
                                                      "thundersync_serial",
                                                      "iccid",
                                                      "iccid2",
                                                      "imei",
                                                      "imei2",
                                                      "missed_profiles",
                                                      "missed_apps",
                                                      "icon_list_regex",
                                                      "icon_layout",
                                                      "bat_capacity"
                                                    ]
                                                  },
                                                  "to": {
                                                    "type": "string",
                                                    "description": "Field to set on the entity"
                                                  }
                                                }
                                              }
                                            },
                                            "wait_for_apps": {
                                              "type": "array",
                                              "description": "A list of applications needed to be installed on the device. This will cause the extension to poll the device for installed applications. Once all the applications have been installed, this step can be completed",
                                              "items": {
                                                "type": "string",
                                                "format": "uri"
                                              }
                                            },
                                            "wait_for_battery_charge": {
                                              "type": "integer",
                                              "description": "The required battery percentage needed before this step can move on",
                                              "minimum": 0,
                                              "maximum": 100
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepChoice.json",
                                  "type": "object",
                                  "description": "A Step choice",
                                  "maxProperties": 2,
                                  "minProperties": 2,
                                  "required": [
                                    "decision"
                                  ],
                                  "properties": {
                                    "decision": {
                                      "type": "array",
                                      "description": "Context variable to check",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "variable": {
                                            "type": "string",
                                            "description": "Variable or value"
                                          },
                                          "operator": {
                                            "type": "string",
                                            "description": "Operator to perform",
                                            "enum": [
                                              "greater_than_equals",
                                              "less_than_equals",
                                              "greater_than",
                                              "less_than",
                                              "equals",
                                              "not_equals"
                                            ]
                                          },
                                          "operand": {
                                            "type": "string",
                                            "description": "operand to compare with"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "allOf": [
                                    {
                                      "$schema": "http://json-schema.org/draft-07/schema#",
                                      "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepNext.json",
                                      "type": "object",
                                      "required": [
                                        "type",
                                        "label",
                                        "goto"
                                      ],
                                      "properties": {
                                        "goto": {
                                          "type": "string",
                                          "description": "Step to move to",
                                          "pattern": "^[a-z][a-z-]+[a-z]$"
                                        },
                                        "goto-fail": {
                                          "type": "string",
                                          "description": "Step to transition too if this step cannot be completed",
                                          "pattern": "^[a-z][a-z-]+[a-z]$"
                                        },
                                        "context": {
                                          "type": "array",
                                          "description": "Values to set on the context",
                                          "items": {
                                            "type": "object",
                                            "required": [
                                              "key",
                                              "value"
                                            ],
                                            "properties": {
                                              "key": {
                                                "type": "string",
                                                "description": "The context key to set"
                                              },
                                              "value": {
                                                "type": "string",
                                                "description": "Value to set"
                                              },
                                              "lock": {
                                                "type": "boolean",
                                                "description": "Prevents other steps from writing this value"
                                              },
                                              "ignore": {
                                                "type": "boolean",
                                                "description": "When trying to set a locked key, do not fail"
                                              }
                                            }
                                          }
                                        },
                                        "onStart": {
                                          "$schema": "http://json-schema.org/draft-07/schema#",
                                          "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                          "type": "object",
                                          "required": [
                                            "retry",
                                            "finally"
                                          ],
                                          "properties": {
                                            "actions": {
                                              "type": "array",
                                              "description": "Actions to take on failure",
                                              "maxItems": 10,
                                              "items": {
                                                "type": "object"
                                              }
                                            }
                                          }
                                        },
                                        "onError": {
                                          "$schema": "http://json-schema.org/draft-07/schema#",
                                          "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepError.json",
                                          "type": "object",
                                          "required": [
                                            "retry",
                                            "finally"
                                          ],
                                          "properties": {
                                            "retry": {
                                              "type": "integer",
                                              "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                              "minimum": 0,
                                              "maximum": 10,
                                              "default": 0
                                            },
                                            "finally": {
                                              "type": "object",
                                              "description": "What to do after all retries",
                                              "properties": {
                                                "actions": {
                                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                                  "type": "object",
                                                  "required": [
                                                    "retry",
                                                    "finally"
                                                  ],
                                                  "properties": {
                                                    "actions": {
                                                      "type": "array",
                                                      "description": "Actions to take on failure",
                                                      "maxItems": 10,
                                                      "items": {
                                                        "type": "object"
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "onTimeout": {
                                          "$schema": "http://json-schema.org/draft-07/schema#",
                                          "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepError.json",
                                          "type": "object",
                                          "required": [
                                            "retry",
                                            "finally"
                                          ],
                                          "properties": {
                                            "retry": {
                                              "type": "integer",
                                              "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                              "minimum": 0,
                                              "maximum": 10,
                                              "default": 0
                                            },
                                            "finally": {
                                              "type": "object",
                                              "description": "What to do after all retries",
                                              "properties": {
                                                "actions": {
                                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                                  "type": "object",
                                                  "required": [
                                                    "retry",
                                                    "finally"
                                                  ],
                                                  "properties": {
                                                    "actions": {
                                                      "type": "array",
                                                      "description": "Actions to take on failure",
                                                      "maxItems": 10,
                                                      "items": {
                                                        "type": "object"
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ]
                                },
                                {
                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepFail.json",
                                  "type": "object",
                                  "description": "Finial step which is marked as failed",
                                  "properties": {
                                    "label": {
                                      "type": "string",
                                      "description": "Label for the step"
                                    },
                                    "type": {
                                      "type": "string",
                                      "description": "Type of workflow step",
                                      "enum": [
                                        "load",
                                        "choice",
                                        "function",
                                        "machine",
                                        "pass",
                                        "fail",
                                        "success",
                                        "user",
                                        "wait"
                                      ]
                                    },
                                    "onComplete": {
                                      "$schema": "http://json-schema.org/draft-07/schema#",
                                      "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                      "type": "object",
                                      "required": [
                                        "retry",
                                        "finally"
                                      ],
                                      "properties": {
                                        "actions": {
                                          "type": "array",
                                          "description": "Actions to take on failure",
                                          "maxItems": 10,
                                          "items": {
                                            "type": "object"
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepPass.json",
                                  "type": "object",
                                  "description": "Allows executing actions with out performing any function",
                                  "properties": {
                                    "label": {
                                      "type": "string",
                                      "description": "Label for the entity"
                                    },
                                    "type": {
                                      "type": "string",
                                      "description": "Type of workflow step",
                                      "enum": [
                                        "load",
                                        "choice",
                                        "function",
                                        "machine",
                                        "pass",
                                        "fail",
                                        "success",
                                        "user",
                                        "wait"
                                      ]
                                    }
                                  },
                                  "allOf": [
                                    {
                                      "$schema": "http://json-schema.org/draft-07/schema#",
                                      "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepCommon.json",
                                      "type": "object",
                                      "required": [
                                        "type",
                                        "label",
                                        "goto"
                                      ],
                                      "properties": {
                                        "type": {
                                          "type": "string",
                                          "description": "Type of workflow step",
                                          "enum": [
                                            "load",
                                            "choice",
                                            "function",
                                            "machine",
                                            "pass",
                                            "fail",
                                            "success",
                                            "user",
                                            "wait"
                                          ]
                                        },
                                        "label": {
                                          "type": "string",
                                          "description": "Label for the step"
                                        },
                                        "goto": {
                                          "type": "string",
                                          "description": "Step to move to",
                                          "pattern": "^[a-z][a-z-]+[a-z]$"
                                        },
                                        "goto-fail": {
                                          "type": "string",
                                          "description": "Step to transition too if this step cannot be completed",
                                          "pattern": "^[a-z][a-z-]+[a-z]$"
                                        },
                                        "onComplete": {
                                          "$schema": "http://json-schema.org/draft-07/schema#",
                                          "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                          "type": "object",
                                          "required": [
                                            "retry",
                                            "finally"
                                          ],
                                          "properties": {
                                            "actions": {
                                              "type": "array",
                                              "description": "Actions to take on failure",
                                              "maxItems": 10,
                                              "items": {
                                                "type": "object"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ]
                                },
                                {
                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepSuccess.json",
                                  "type": "object",
                                  "description": "Finial step which is marked as completed successfully",
                                  "properties": {
                                    "label": {
                                      "type": "string",
                                      "description": "Label for the step"
                                    },
                                    "type": {
                                      "type": "string",
                                      "description": "Type of workflow step",
                                      "enum": [
                                        "load",
                                        "choice",
                                        "function",
                                        "machine",
                                        "pass",
                                        "fail",
                                        "success",
                                        "user",
                                        "wait"
                                      ]
                                    },
                                    "onComplete": {
                                      "$schema": "http://json-schema.org/draft-07/schema#",
                                      "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                      "type": "object",
                                      "required": [
                                        "retry",
                                        "finally"
                                      ],
                                      "properties": {
                                        "actions": {
                                          "type": "array",
                                          "description": "Actions to take on failure",
                                          "maxItems": 10,
                                          "items": {
                                            "type": "object"
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepWait.json",
                                  "type": "object",
                                  "description": "A step which run at certain times",
                                  "required": [
                                    "stop_at",
                                    "time"
                                  ],
                                  "properties": {
                                    "label": {
                                      "type": "string",
                                      "description": "Label for the step"
                                    },
                                    "type": {
                                      "type": "string",
                                      "enum": [
                                        "wait"
                                      ]
                                    },
                                    "stop_at": {
                                      "type": "integer",
                                      "description": "Time in seconds to stop this task",
                                      "maximum": 900,
                                      "minimum": 1
                                    },
                                    "time": {
                                      "type": "integer",
                                      "description": "Time to wait before checking this step",
                                      "maximum": 900,
                                      "minimum": 1
                                    },
                                    "listen_for": {
                                      "type": "array",
                                      "description": "List of events and conditions to listen for to trigger",
                                      "items": {
                                        "type": "object",
                                        "required": [
                                          "event"
                                        ],
                                        "properties": {
                                          "event": {
                                            "type": "string",
                                            "description": "Name of the event to listen for",
                                            "allOf": [
                                              {
                                                "type": "string",
                                                "description": "Possible entity events",
                                                "enum": [
                                                  "CON.attached",
                                                  "CON.created",
                                                  "CON.deleted",
                                                  "CON.detached",
                                                  "CON.removed",
                                                  "CON.updated",
                                                  "CUS.attached",
                                                  "CUS.created",
                                                  "CUS.deleted",
                                                  "CUS.detached",
                                                  "CUS.removed",
                                                  "CUS.updated",
                                                  "LOC.attached",
                                                  "LOC.created",
                                                  "LOC.deleted",
                                                  "LOC.detached",
                                                  "LOC.removed",
                                                  "LOC.updated",
                                                  "NOTE.attached",
                                                  "NOTE.created",
                                                  "NOTE.deleted",
                                                  "NOTE.detached",
                                                  "NOTE.removed",
                                                  "NOTE.updated",
                                                  "PART.attached",
                                                  "PART.created",
                                                  "PART.deleted",
                                                  "PART.detached",
                                                  "PART.removed",
                                                  "PART.updated",
                                                  "PGM.attached",
                                                  "PGM.created",
                                                  "PGM.deleted",
                                                  "PGM.detached",
                                                  "PGM.removed",
                                                  "PGM.updated",
                                                  "PRO.attached",
                                                  "PRO.created",
                                                  "PRO.deleted",
                                                  "PRO.detached",
                                                  "PRO.removed",
                                                  "PRO.updated",
                                                  "RES.attached",
                                                  "RES.created",
                                                  "RES.deleted",
                                                  "RES.detached",
                                                  "RES.removed",
                                                  "RES.updated",
                                                  "UNIT.attached",
                                                  "UNIT.created",
                                                  "UNIT.deleted",
                                                  "UNIT.detached",
                                                  "UNIT.removed",
                                                  "UNIT.updated",
                                                  "USER.attached",
                                                  "USER.created",
                                                  "USER.deleted",
                                                  "USER.detached",
                                                  "USER.removed",
                                                  "USER.updated",
                                                  "WKF.attached",
                                                  "WKF.created",
                                                  "WKF.deleted",
                                                  "WKF.detached",
                                                  "WKF.removed",
                                                  "WKF.updated",
                                                  "WOR.attached",
                                                  "WOR.created",
                                                  "WOR.deleted",
                                                  "WOR.detached",
                                                  "WOR.removed",
                                                  "WOR.updated"
                                                ]
                                              }
                                            ]
                                          },
                                          "event_value": {
                                            "type": "object",
                                            "description": "The event conditions that have to be met",
                                            "allOf": [
                                              {
                                                "$schema": "http://json-schema.org/draft-07/schema#",
                                                "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepChoice.json",
                                                "type": "object",
                                                "description": "A Step choice",
                                                "maxProperties": 2,
                                                "minProperties": 2,
                                                "required": [
                                                  "decision"
                                                ],
                                                "properties": {
                                                  "decision": {
                                                    "type": "array",
                                                    "description": "Context variable to check",
                                                    "items": {
                                                      "type": "object",
                                                      "properties": {
                                                        "variable": {
                                                          "type": "string",
                                                          "description": "Variable or value"
                                                        },
                                                        "operator": {
                                                          "type": "string",
                                                          "description": "Operator to perform",
                                                          "enum": [
                                                            "greater_than_equals",
                                                            "less_than_equals",
                                                            "greater_than",
                                                            "less_than",
                                                            "equals",
                                                            "not_equals"
                                                          ]
                                                        },
                                                        "operand": {
                                                          "type": "string",
                                                          "description": "operand to compare with"
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "allOf": [
                                                  {
                                                    "$schema": "http://json-schema.org/draft-07/schema#",
                                                    "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepNext.json",
                                                    "type": "object",
                                                    "required": [
                                                      "type",
                                                      "label",
                                                      "goto"
                                                    ],
                                                    "properties": {
                                                      "goto": {
                                                        "type": "string",
                                                        "description": "Step to move to",
                                                        "pattern": "^[a-z][a-z-]+[a-z]$"
                                                      },
                                                      "goto-fail": {
                                                        "type": "string",
                                                        "description": "Step to transition too if this step cannot be completed",
                                                        "pattern": "^[a-z][a-z-]+[a-z]$"
                                                      },
                                                      "context": {
                                                        "type": "array",
                                                        "description": "Values to set on the context",
                                                        "items": {
                                                          "type": "object",
                                                          "required": [
                                                            "key",
                                                            "value"
                                                          ],
                                                          "properties": {
                                                            "key": {
                                                              "type": "string",
                                                              "description": "The context key to set"
                                                            },
                                                            "value": {
                                                              "type": "string",
                                                              "description": "Value to set"
                                                            },
                                                            "lock": {
                                                              "type": "boolean",
                                                              "description": "Prevents other steps from writing this value"
                                                            },
                                                            "ignore": {
                                                              "type": "boolean",
                                                              "description": "When trying to set a locked key, do not fail"
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "onStart": {
                                                        "$schema": "http://json-schema.org/draft-07/schema#",
                                                        "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                                        "type": "object",
                                                        "required": [
                                                          "retry",
                                                          "finally"
                                                        ],
                                                        "properties": {
                                                          "actions": {
                                                            "type": "array",
                                                            "description": "Actions to take on failure",
                                                            "maxItems": 10,
                                                            "items": {
                                                              "type": "object"
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "onError": {
                                                        "$schema": "http://json-schema.org/draft-07/schema#",
                                                        "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepError.json",
                                                        "type": "object",
                                                        "required": [
                                                          "retry",
                                                          "finally"
                                                        ],
                                                        "properties": {
                                                          "retry": {
                                                            "type": "integer",
                                                            "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                            "minimum": 0,
                                                            "maximum": 10,
                                                            "default": 0
                                                          },
                                                          "finally": {
                                                            "type": "object",
                                                            "description": "What to do after all retries",
                                                            "properties": {
                                                              "actions": {
                                                                "$schema": "http://json-schema.org/draft-07/schema#",
                                                                "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                                                "type": "object",
                                                                "required": [
                                                                  "retry",
                                                                  "finally"
                                                                ],
                                                                "properties": {
                                                                  "actions": {
                                                                    "type": "array",
                                                                    "description": "Actions to take on failure",
                                                                    "maxItems": 10,
                                                                    "items": {
                                                                      "type": "object"
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "onTimeout": {
                                                        "$schema": "http://json-schema.org/draft-07/schema#",
                                                        "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepError.json",
                                                        "type": "object",
                                                        "required": [
                                                          "retry",
                                                          "finally"
                                                        ],
                                                        "properties": {
                                                          "retry": {
                                                            "type": "integer",
                                                            "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                            "minimum": 0,
                                                            "maximum": 10,
                                                            "default": 0
                                                          },
                                                          "finally": {
                                                            "type": "object",
                                                            "description": "What to do after all retries",
                                                            "properties": {
                                                              "actions": {
                                                                "$schema": "http://json-schema.org/draft-07/schema#",
                                                                "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                                                "type": "object",
                                                                "required": [
                                                                  "retry",
                                                                  "finally"
                                                                ],
                                                                "properties": {
                                                                  "actions": {
                                                                    "type": "array",
                                                                    "description": "Actions to take on failure",
                                                                    "maxItems": 10,
                                                                    "items": {
                                                                      "type": "object"
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "allOf": [
                                    {
                                      "$schema": "http://json-schema.org/draft-07/schema#",
                                      "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepCommon.json",
                                      "type": "object",
                                      "required": [
                                        "type",
                                        "label",
                                        "goto"
                                      ],
                                      "properties": {
                                        "type": {
                                          "type": "string",
                                          "description": "Type of workflow step",
                                          "enum": [
                                            "load",
                                            "choice",
                                            "function",
                                            "machine",
                                            "pass",
                                            "fail",
                                            "success",
                                            "user",
                                            "wait"
                                          ]
                                        },
                                        "label": {
                                          "type": "string",
                                          "description": "Label for the step"
                                        },
                                        "goto": {
                                          "type": "string",
                                          "description": "Step to move to",
                                          "pattern": "^[a-z][a-z-]+[a-z]$"
                                        },
                                        "goto-fail": {
                                          "type": "string",
                                          "description": "Step to transition too if this step cannot be completed",
                                          "pattern": "^[a-z][a-z-]+[a-z]$"
                                        },
                                        "onComplete": {
                                          "$schema": "http://json-schema.org/draft-07/schema#",
                                          "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                          "type": "object",
                                          "required": [
                                            "retry",
                                            "finally"
                                          ],
                                          "properties": {
                                            "actions": {
                                              "type": "array",
                                              "description": "Actions to take on failure",
                                              "maxItems": 10,
                                              "items": {
                                                "type": "object"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "example": {
            "href": "https://api.nterprise.com/work-orders"
          },
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "next": {
          "example": {
            "href": "https://api.nterprise.com/work-orders?offset=QVBrO2wm13iEyl&limit=100"
          },
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        }
      }
    }
  }
}
```

<h3 id="fetchallprojectworkorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for work orders|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchallprojectworkorders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:work-orders|[object]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» work_order_id|string|false|none|The identifier for the unit|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» start_date|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» end_date|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» description|string|false|none|Detailed description for the work order|
|»»»» work_order_type|string|false|none|Type of work order|
|»»»» due_date|string(date-time)|false|none|End date|
|»»»» current_status|object|false|none|Defines the properties for a status|
|»»»»» status|string|true|none|A Custom label for the status|
|»»»»» category|string|true|none|The classifier for the statues|
|»»»» project|object|false|none|Defines the properties for a project|
|»»»»» project_id|string|false|none|Unique identifier|
|»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»» entity_type|string|true|none|none|
|»»»»» label|string|true|none|Label for the entity|
|»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»» customer|object|true|none|Customer|
|»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»» entity_type|string|true|none|none|
|»»»»»» label|string|true|none|Label for the entity|
|»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»» program|object|true|none|Defines the properties for a program|
|»»»»»» program_id|string|false|read-only|Unique identifier|
|»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»» entity_type|string|true|none|none|
|»»»»»» label|string|false|none|Label for the entity|
|»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»»»» customer|object|true|none|Customer|
|»»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»» entity_type|string|true|none|none|
|»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»»» work_flows|[object]|false|none|Cycles of work flows needed to complete the work order|
|»»»»»» cycles_needed|integer|true|none|The number of cycles needed|
|»»»»»» work_flow|object|true|none|Workflow|
|»»»»»»» work_flow_id|string|false|read-only|Customer identifier|
|»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»» entity_type|string|true|none|none|
|»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»» schema_version|string|true|none|Version of the workflow schema used|
|»»»»»»» workflow_version|integer|false|read-only|Version number for the work flows (the number of times it has been changed|
|»»»»»»» applies_to|string|true|none|The entity type this work flow applies too|
|»»»»»»» starts_at|string|true|none|Starting step|
|»»»»»»» steps|object|true|none|Steps for the workflow|
|»»»»»» _links|object|false|none|none|
|»»»»»»» self|object|false|none|none|
|»»»»»»»» href|string(uri)|false|none|none|
|»»»»»»» next|object|false|none|none|
|»»»»»»»» href|string(uri)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|work_order_type|device|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|PRJ|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|PGM|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|WKF|
|schema_version|1.0|
|applies_to|unit|
|applies_to|part|
|applies_to|program|
|applies_to|project|
|applies_to|customer|
|applies_to|contact|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Unauthorized|
|type|https://docs.nterprise.com/api/problem/Unauthorized|
|status|401|
|detail|You are not authorized to access this resource|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Forbidden|
|type|https://docs.nterprise.com/api/problem/Forbidden|
|status|403|
|detail|You are forbidden to access this resource|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Not Found|
|type|https://docs.nterprise.com/api/problem/NotFound|
|status|404|
|detail|Resource not found|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocSproject">Project</h2>

<a id="schemaproject"></a>

```yaml
type: object
description: Defines the properties for a project
additionalProperties: false
required:
  - label
  - entity_id
  - entity_type
  - created
  - updated
  - customer
  - program
  - allowed_statuses
properties:
  project_id:
    type: string
    description: Unique identifier
    pattern: '^[0-9a-zA-Z-_]+$'
  entity_id:
    x-no-api-doc: true
    type: string
    description: Customer identifier
    readOnly: true
    pattern: '^[0-9a-zA-Z-_]+$'
  entity_type:
    x-no-api-doc: true
    enum:
      - PRJ
  label:
    type: string
    description: Label for the entity
  slug:
    type: string
    description: Slug for the entity (Auto-generated from the label)
    readOnly: true
    deprecated: true
    pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$'
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
  customer:
    type: object
    description: Customer
    additionalProperties: false
    required:
      - label
      - entity_id
      - entity_type
      - created
      - updated
      - allowed_statuses
    properties:
      customer_id:
        description: Customer identifier
        type: string
        readOnly: true
        pattern: '^[0-9a-zA-Z-_]+$'
      entity_id:
        x-no-api-doc: true
        type: string
        description: Customer identifier
        readOnly: true
        pattern: '^[0-9a-zA-Z-_]+$'
      entity_type:
        x-no-api-doc: true
        enum:
          - CUS
      label:
        type: string
        description: Label for the entity
      slug:
        type: string
        description: Slug for the entity (Auto-generated from the label)
        readOnly: true
        deprecated: true
        pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$'
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
        x-patternProperties: &ref_0
          '^[A-Za-z][A-Za-z0-9_]*$':
            type: string
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
              pattern: '^[A-Za-z][0-9a-zA-Z-_ ]+$'
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
      total_programs:
        type: number
        description: Total programs under the customer
      total_projects:
        type: number
        description: Total projects under the customer
  program:
    type: object
    description: Defines the properties for a program
    additionalProperties: false
    required:
      - entity_id
      - entity_type
      - created
      - updated
      - customer
      - allowed_statuses
    properties:
      program_id:
        description: Unique identifier
        type: string
        readOnly: true
        pattern: '^[0-9a-zA-Z-_]+$'
      entity_id:
        x-no-api-doc: true
        type: string
        description: Customer identifier
        readOnly: true
        pattern: '^[0-9a-zA-Z-_]+$'
      entity_type:
        x-no-api-doc: true
        enum:
          - PGM
      label:
        type: string
        description: Label for the entity
      slug:
        type: string
        description: Slug for the entity (Auto-generated from the label)
        readOnly: true
        deprecated: true
        pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$'
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
        description: Customer
        additionalProperties: false
        required:
          - label
          - entity_id
          - entity_type
          - created
          - updated
          - allowed_statuses
        properties:
          customer_id:
            description: Customer identifier
            type: string
            readOnly: true
            pattern: '^[0-9a-zA-Z-_]+$'
          entity_id:
            x-no-api-doc: true
            type: string
            description: Customer identifier
            readOnly: true
            pattern: '^[0-9a-zA-Z-_]+$'
          entity_type:
            x-no-api-doc: true
            enum:
              - CUS
          label:
            type: string
            description: Label for the entity
          slug:
            type: string
            description: Slug for the entity (Auto-generated from the label)
            readOnly: true
            deprecated: true
            pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$'
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
            x-patternProperties: *ref_0
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
                  pattern: '^[A-Za-z][0-9a-zA-Z-_ ]+$'
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
              pattern: '^[A-Za-z][0-9a-zA-Z-_ ]+$'
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
          pattern: '^[A-Za-z][0-9a-zA-Z-_ ]+$'
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
allOf:
  - type: object
    description: Common Properties to all entities
    required:
      - label
    properties:
      entity_id:
        type: string
        description: Customer identifier
        readOnly: true
        pattern: '^[0-9a-zA-Z-_]+$'
      label:
        type: string
        description: Label for the entity
      slug:
        type: string
        description: Slug for the entity (Auto-generated from the label)
        readOnly: true
        deprecated: true
        pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$'
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

```

*Defines the properties for a project*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|string|false|none|Unique identifier|
|entity_id|string|true|read-only|Customer identifier|
|entity_type|string|true|none|none|
|label|string|true|none|Label for the entity|
|slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|customer|object|true|none|Customer|
|» customer_id|string|false|read-only|Customer identifier|
|» entity_id|string|true|read-only|Customer identifier|
|» entity_type|string|true|none|none|
|» label|string|true|none|Label for the entity|
|» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|» created|string(date-time)|true|read-only|Date the entity was created|
|» updated|string(date-time)|true|read-only|Last date the entity was updated|
|» external_platform|object|false|none|External Identifiers for the customer|
|» allowed_statuses|[object]|true|none|List of allowed statuses|
|»» status|string|true|none|A Custom label for the status|
|»» category|string|true|none|The classifier for the statues|
|» total_programs|number|false|none|Total programs under the customer|
|» total_projects|number|false|none|Total projects under the customer|
|program|object|true|none|Defines the properties for a program|
|» program_id|string|false|read-only|Unique identifier|
|» entity_id|string|true|read-only|Customer identifier|
|» entity_type|string|true|none|none|
|» label|string|false|none|Label for the entity|
|» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|» created|string(date-time)|true|read-only|Date the entity was created|
|» updated|string(date-time)|true|read-only|Last date the entity was updated|
|» start_date|string(date-time)\|null|false|none|Start date|
|» end_date|string(date-time)\|null|false|none|End date|
|» customer|object|true|none|Customer|
|»» customer_id|string|false|read-only|Customer identifier|
|»» entity_id|string|true|read-only|Customer identifier|
|»» entity_type|string|true|none|none|
|»» label|string|true|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|true|read-only|Date the entity was created|
|»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»» external_platform|object|false|none|External Identifiers for the customer|
|»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»» status|string|true|none|A Custom label for the status|
|»»» category|string|true|none|The classifier for the statues|
|»» total_programs|number|false|none|Total programs under the customer|
|»» total_projects|number|false|none|Total projects under the customer|
|» allowed_statuses|[object]|true|none|List of allowed statuses|
|»» status|string|true|none|A Custom label for the status|
|»» category|string|true|none|The classifier for the statues|
|» allowed_statuses|[object]|true|none|List of allowed statuses|
|»» status|string|true|none|A Custom label for the status|
|»» category|string|true|none|The classifier for the statues|
|» start_date|string(date-time)\|null|false|none|Start date|
|» end_date|string(date-time)\|null|false|none|End date|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|PRJ|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|PGM|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|

