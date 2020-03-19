---
layout: page
parent: Niagara API
nav_order: 3
title: Customers
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="customers">Customers v2.0.0</h1>

> Scroll down for example requests and responses.

Customers may have multiple Programs, Projects, and Locations, as well as device Parts and individual Units.

<h1 id="customers-customer">Customer</h1>

## fetchAllCustomers

<a id="opIdfetchAllCustomers"></a>

`GET /customers`

*Fetches A Page of customers*

Fetch Customer

<h3 id="fetchallcustomers-parameters">Parameters</h3>

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
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-programs": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-projects": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-units": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-work-orders": {
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
    "customer_id": {
      "description": "Customer identifier",
      "type": "string",
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
}
```

<h3 id="fetchallcustomers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A Customer HAL response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallcustomers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-programs|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-projects|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-units|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-work-orders|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» customer_id|string|false|read-only|Customer identifier|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» external_platform|object|false|none|External Identifiers for the customer|
|»» allowed_statuses|[object]|false|none|List of allowed statuses|
|»»» status|string|true|none|A Custom label for the status|
|»»» category|string|true|none|The classifier for the statues|
|»» total_programs|number|false|none|Total programs under the customer|
|»» total_projects|number|false|none|Total projects under the customer|

#### Enumerated Values

|Property|Value|
|---|---|
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

## createCustomer

<a id="opIdcreateCustomer"></a>

`POST /customers`

*Creates a customer*

Creates a new customer following the customer schema

> Body parameter

```json
{
  "type": "object",
  "required": [
    "label",
    "allowed_statuses"
  ],
  "properties": {
    "label": {
      "type": "string",
      "description": "Label for the entity"
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
    }
  }
}
```

<h3 id="createcustomer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Label for the entity|
|external_platform|body|object|false|External Identifiers for the customer|
|allowed_statuses|body|[object]|true|List of allowed statuses|
|» status|body|string|true|A Custom label for the status|
|» category|body|string|true|The classifier for the statues|

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
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-programs": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-projects": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-units": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-work-orders": {
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
    "customer_id": {
      "description": "Customer identifier",
      "type": "string",
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
}
```

<h3 id="createcustomer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A Customer HAL response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|

<h3 id="createcustomer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-programs|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-projects|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-units|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-work-orders|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» customer_id|string|false|read-only|Customer identifier|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» external_platform|object|false|none|External Identifiers for the customer|
|»» allowed_statuses|[object]|false|none|List of allowed statuses|
|»»» status|string|true|none|A Custom label for the status|
|»»» category|string|true|none|The classifier for the statues|
|»» total_programs|number|false|none|Total programs under the customer|
|»» total_projects|number|false|none|Total projects under the customer|

#### Enumerated Values

|Property|Value|
|---|---|
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

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Conflict|
|type|https://docs.nterprise.com/api/problem/Conflict|
|status|409|
|detail|This request contains a conflict to another resource|

<aside class="success">
This operation does not require authentication
</aside>

## fetchCustomerById

<a id="opIdfetchCustomerById"></a>

`GET /customers/{customer_id}`

*Fetches a customer by the customer Id*

Fetch Customer

<h3 id="fetchcustomerbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|string|true|Id of the customer|

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
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-programs": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-projects": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-units": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-work-orders": {
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
    "customer_id": {
      "description": "Customer identifier",
      "type": "string",
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
}
```

<h3 id="fetchcustomerbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A Customer HAL response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchcustomerbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-programs|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-projects|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-units|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-work-orders|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» customer_id|string|false|read-only|Customer identifier|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» external_platform|object|false|none|External Identifiers for the customer|
|»» allowed_statuses|[object]|false|none|List of allowed statuses|
|»»» status|string|true|none|A Custom label for the status|
|»»» category|string|true|none|The classifier for the statues|
|»» total_programs|number|false|none|Total programs under the customer|
|»» total_projects|number|false|none|Total projects under the customer|

#### Enumerated Values

|Property|Value|
|---|---|
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

## updateCustomer

<a id="opIdupdateCustomer"></a>

`PUT /customers/{customer_id}`

*Updates a customer*

Updates a new customer following the customer schema

> Body parameter

```json
{
  "type": "object",
  "required": [
    "label",
    "allowed_statuses"
  ],
  "properties": {
    "label": {
      "type": "string",
      "description": "Label for the entity"
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
    }
  }
}
```

<h3 id="updatecustomer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|string|true|Id of the customer|
|label|body|string|true|Label for the entity|
|external_platform|body|object|false|External Identifiers for the customer|
|allowed_statuses|body|[object]|true|List of allowed statuses|
|» status|body|string|true|A Custom label for the status|
|» category|body|string|true|The classifier for the statues|

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
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-programs": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-projects": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-units": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
              "format": "uri"
            }
          }
        },
        "nter:customer-work-orders": {
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
    "customer_id": {
      "description": "Customer identifier",
      "type": "string",
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
}
```

<h3 id="updatecustomer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A Customer HAL response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="updatecustomer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-programs|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-projects|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-units|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» nter:customer-work-orders|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» customer_id|string|false|read-only|Customer identifier|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» external_platform|object|false|none|External Identifiers for the customer|
|»» allowed_statuses|[object]|false|none|List of allowed statuses|
|»»» status|string|true|none|A Custom label for the status|
|»»» category|string|true|none|The classifier for the statues|
|»» total_programs|number|false|none|Total programs under the customer|
|»» total_projects|number|false|none|Total projects under the customer|

#### Enumerated Values

|Property|Value|
|---|---|
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

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Conflict|
|type|https://docs.nterprise.com/api/problem/Conflict|
|status|409|
|detail|This request contains a conflict to another resource|

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

## deleteCustomer

<a id="opIddeleteCustomer"></a>

`DELETE /customers/{customer_id}`

*Deletes a customer*

This will remove the customer from the system

<h3 id="deletecustomer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|string|true|Id of the customer|

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

<h3 id="deletecustomer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Customer deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="deletecustomer-responseschema">Response Schema</h3>

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

## fetchAllCustomerContacts

<a id="opIdfetchAllCustomerContacts"></a>

`GET /customers/{customer_id}/contacts`

*Fetches A Page of contacts for the customer*

Fetch customer contacts

<h3 id="fetchallcustomercontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|string|true|Id of the customer|
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
        "nter:contacts": {
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
                      "href": "https://api.nterprise.com/contacts/QVBrO2wm13iEyl"
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
              "contact_id": {
                "description": "Identifier for the contact",
                "type": "string",
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
              },
              "name": {
                "type": "string",
                "description": "Contact name"
              },
              "email": {
                "type": "string",
                "format": "email",
                "description": "Email address"
              },
              "phone": {
                "type": "string",
                "description": "Phone number"
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
            "href": "https://api.nterprise.com/contacts"
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
            "href": "https://api.nterprise.com/contacts?offset=QVBrO2wm13iEyl&limit=100"
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

<h3 id="fetchallcustomercontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for contacts|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchallcustomercontacts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:contacts|[object]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» contact_id|string|false|read-only|Identifier for the contact|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» name|string|false|none|Contact name|
|»»»» email|string(email)|false|none|Email address|
|»»»» phone|string|false|none|Phone number|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» next|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|

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

## attachCustomerContact

<a id="opIdattachCustomerContact"></a>

`POST /customers/{customer_id}/contacts`

*Creates a contact for a customer*

Creates a new contact for the customer

> Body parameter

```json
{
  "type": "object",
  "required": [
    "label",
    "name",
    "email"
  ],
  "properties": {
    "label": {
      "type": "string",
      "description": "Label for the entity"
    },
    "name": {
      "type": "string",
      "description": "Contact name"
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "Email address"
    },
    "phone": {
      "type": "string",
      "description": "Phone number"
    }
  }
}
```

<h3 id="attachcustomercontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|string|true|Id of the customer|
|label|body|string|true|Label for the entity|
|name|body|string|true|Contact name|
|email|body|string(email)|true|Email address|
|phone|body|string|false|Phone number|

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
            "href": "https://api.nterprise.com/contacts/QVBrO2wm13iEyl"
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
    "contact_id": {
      "description": "Identifier for the contact",
      "type": "string",
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
    },
    "name": {
      "type": "string",
      "description": "Contact name"
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "Email address"
    },
    "phone": {
      "type": "string",
      "description": "Phone number"
    }
  }
}
```

<h3 id="attachcustomercontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A contact response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|

<h3 id="attachcustomercontact-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» contact_id|string|false|read-only|Identifier for the contact|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» name|string|false|none|Contact name|
|»» email|string(email)|false|none|Email address|
|»» phone|string|false|none|Phone number|

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

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|string|false|none|none|
|» type|string|false|none|none|
|» status|number|false|none|none|
|» detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Conflict|
|type|https://docs.nterprise.com/api/problem/Conflict|
|status|409|
|detail|This request contains a conflict to another resource|

<aside class="success">
This operation does not require authentication
</aside>

## fetchAllCustomerParts

<a id="opIdfetchAllCustomerParts"></a>

`GET /customers/{customer_id}/parts`

*Fetches A Page of parts for the customer*

Fetch customer parts

<h3 id="fetchallcustomerparts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|string|true|Id of the customer|
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
        "nter:parts": {
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
                      "href": "https://api.nterprise.com/parts/23Y1rNJ6zyiRzqN"
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
              "part_id": {
                "description": "Unique identifier",
                "type": "string",
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
              "manufacturer": {
                "type": "object",
                "description": "Manufacturer information for the part",
                "required": [
                  "part_number"
                ],
                "properties": {
                  "part_number": {
                    "type": "string",
                    "description": "Manufacturer part number"
                  }
                },
                "additionalProperties": false
              },
              "serial_prefix": {
                "type": "string",
                "description": "A serial number prefix for the part"
              },
              "input_filter": {
                "type": "array",
                "description": "Input Filters allow custom fields to be defined for entities",
                "items": {
                  "type": "object",
                  "description": "Input filter specification",
                  "required": [
                    "label",
                    "key",
                    "filters",
                    "validators"
                  ],
                  "properties": {
                    "label": {
                      "type": "string",
                      "description": "Human readable name"
                    },
                    "key": {
                      "type": "string",
                      "description": "Slug used to store the property",
                      "readOnly": true,
                      "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                    },
                    "filters": {
                      "type": "array",
                      "description": "A Collection of filters applied to the field",
                      "maxItems": 100,
                      "items": {
                        "anyOf": [
                          {
                            "type": "object",
                            "description": "This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "allowed_list"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "approved_values"
                                ],
                                "properties": {
                                  "approved_values": {
                                    "type": "array",
                                    "minimum": 1,
                                    "maximum": 100,
                                    "description": "The list of approved values",
                                    "items": {
                                      "type": "string"
                                    }
                                  },
                                  "check_case": {
                                    "type": "boolean",
                                    "description": "Perform a case sensitive match. By default will not match case",
                                    "default": false
                                  },
                                  "default": {
                                    "type": "string",
                                    "description": "If this is set and the value is not in the approved_list, set the value to this",
                                    "nullable": true
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Make the value camelCase",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "camel"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "description": "This filter has no options"
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Filter to transform a value into a date",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "date"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "description": "Date filter has no options"
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:\n# The number 0 or 0.0\n# empty string ''\n# A boolean false\n# The word 'false'\n# ",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "empty"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "description": "empty filter has no options"
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Filter to transform a value into a float. Non numeric characters (including comma) will be removed",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "float"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "properties": {
                                  "precision": {
                                    "type": "integer",
                                    "minimum": 1,
                                    "maximum": 8,
                                    "default": 3,
                                    "description": "How many decimal places to preserve"
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Make the value kebab-case",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "kebab"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "description": "This filter has no options"
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Make the value lowercase",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "lower"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "description": "This filter has no options"
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "number"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "description": "Number filter has no options"
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "prefix"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "prefix"
                                ],
                                "properties": {
                                  "prefix": {
                                    "type": "string",
                                    "description": "The prefix to add"
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Make the value snake_case",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "snake"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "description": "This filter has no options"
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Filter to transform a value into a string",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "string"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "description": "String filter has no options"
                              }
                            }
                          },
                          {
                            "description": "Add a suffix to the start of a string. If the string already start with the suffix, it will not append.",
                            "type": "object",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "suffix"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "suffix"
                                ],
                                "properties": {
                                  "suffix": {
                                    "type": "string",
                                    "description": "The suffix to add"
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Filter to trim whitespace from a value",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "trim"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "description": "By default will trim from the start and end",
                                "properties": {
                                  "start": {
                                    "type": "boolean",
                                    "description": "Remove white space from the start of the string",
                                    "default": true
                                  },
                                  "end": {
                                    "type": "boolean",
                                    "description": "Remove white space from the end of the string",
                                    "default": true
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Make the value UPPERCASE",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "upper"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "description": "This filter has no options"
                              }
                            }
                          }
                        ]
                      }
                    },
                    "validators": {
                      "type": "array",
                      "description": "A set of validators to use for this field",
                      "maxItems": 100,
                      "items": {
                        "anyOf": [
                          {
                            "type": "object",
                            "description": "Validate number is between two values. By default, min and max are included",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "greater_than"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "min",
                                  "max"
                                ],
                                "properties": {
                                  "min": {
                                    "type": "number",
                                    "description": "Minimum value to check"
                                  },
                                  "max": {
                                    "type": "number",
                                    "description": "The maximum value to check"
                                  },
                                  "precision": {
                                    "type": "integer",
                                    "description": "When number is a float, this will set the decimal precision",
                                    "minimum": 1,
                                    "maximum": 8,
                                    "default": 3
                                  },
                                  "include": {
                                    "type": "boolean",
                                    "description": "Include the value in the check",
                                    "default": true
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate value does not match a list (black list)",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "white_list"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "list"
                                ],
                                "properties": {
                                  "list": {
                                    "type": "array",
                                    "minimum": 1,
                                    "maximum": 100,
                                    "description": "The list of approved values",
                                    "items": {
                                      "type": "string"
                                    }
                                  },
                                  "check_case": {
                                    "type": "boolean",
                                    "description": "Perform a case sensitive match. By default will not match case",
                                    "default": false
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate string contains a value",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "contains"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "contains"
                                ],
                                "properties": {
                                  "contains": {
                                    "type": "string",
                                    "description": "String must contain with this value"
                                  },
                                  "check_case": {
                                    "type": "boolean",
                                    "description": "Perform a case sensitive match. By default will not match case",
                                    "default": false
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate string is a correct email address",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "email_address"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "properties": {
                                  "strict": {
                                    "type": "boolean",
                                    "description": "Enforce strict standards from ARPA. This will enforce the length of the string",
                                    "default": true
                                  },
                                  "lookup": {
                                    "type": "boolean",
                                    "description": "Look up the host name and check if it has a valid MX record",
                                    "default": false
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate string ends with a value",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "ends_with"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "ends_with"
                                ],
                                "properties": {
                                  "ends_with": {
                                    "type": "string",
                                    "description": "String must end with this value"
                                  },
                                  "check_case": {
                                    "type": "boolean",
                                    "description": "Perform a case sensitive match. By default will not match case",
                                    "default": false
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate number equals a value",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "equals"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "value"
                                ],
                                "properties": {
                                  "value": {
                                    "type": "number",
                                    "description": "The value to compare against"
                                  },
                                  "precision": {
                                    "type": "integer",
                                    "description": "When value is a float, this will set the decimal precision",
                                    "minimum": 1,
                                    "maximum": 8,
                                    "default": 3
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate number is greater than a value. By default, this will check if value is greater than or equals to",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "greater_than"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "value"
                                ],
                                "properties": {
                                  "value": {
                                    "type": "number",
                                    "description": "The value to compare against"
                                  },
                                  "precision": {
                                    "type": "integer",
                                    "description": "When number is a float, this will set the decimal precision",
                                    "minimum": 1,
                                    "maximum": 8,
                                    "default": 3
                                  },
                                  "include": {
                                    "type": "boolean",
                                    "description": "Include the value in the check",
                                    "default": true
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate string has a correct DNS records",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "hostname"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "properties": {
                                  "record_type": {
                                    "type": "string",
                                    "description": "DNS record type to validate",
                                    "default": "A",
                                    "enum": [
                                      "A",
                                      "AAAA",
                                      "AFSDB",
                                      "APL",
                                      "CAA",
                                      "CDNSKEY",
                                      "CDS",
                                      "CERT",
                                      "CNAME",
                                      "CSYNC",
                                      "DHCID",
                                      "DLV",
                                      "DNAME",
                                      "DNSKEY",
                                      "DS",
                                      "HIP",
                                      "IPSECKEY",
                                      "KEY",
                                      "KX",
                                      "LOC",
                                      "MX",
                                      "NAPTR",
                                      "NS",
                                      "NSEC",
                                      "NSEC3",
                                      "NSEC3PARAM",
                                      "OPENPGPKEY",
                                      "PTR",
                                      "RRSIG",
                                      "RP",
                                      "SIG",
                                      "SMIMEA",
                                      "SOA",
                                      "SRV",
                                      "SSHFP",
                                      "TA",
                                      "TKEY",
                                      "TLSA",
                                      "TSIG",
                                      "TXT",
                                      "URI"
                                    ]
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate string matches an IP address format. Defaults to matching IPv4",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "ipAddress"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "properties": {
                                  "versions": {
                                    "type": "array",
                                    "description": "IP Version to match against",
                                    "items": {
                                      "type": "string",
                                      "enum": [
                                        "IPv4",
                                        "IPv6"
                                      ]
                                    }
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate string is a certain length",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "length"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "length"
                                ],
                                "properties": {
                                  "length": {
                                    "type": "string",
                                    "description": "String must contain with this value"
                                  },
                                  "operator": {
                                    "type": "string",
                                    "description": "Which type of length comparision to make",
                                    "default": "equals",
                                    "enum": [
                                      "equals",
                                      "less_than",
                                      "less_than_equals",
                                      "greater_than",
                                      "greater_than_equals"
                                    ]
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate number is less than a value. By default, this will check if value is less than or equals to",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "lessThan"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "value"
                                ],
                                "properties": {
                                  "value": {
                                    "type": "number",
                                    "description": "The value to compare against"
                                  },
                                  "precision": {
                                    "type": "integer",
                                    "description": "When number is a float, this will set the decimal precision",
                                    "minimum": 1,
                                    "maximum": 8,
                                    "default": 3
                                  },
                                  "include": {
                                    "type": "boolean",
                                    "description": "Include the value in the check",
                                    "default": true
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate string matches an MAC address format",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "macAddress"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "description": "This validator has no options"
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate string matches a regular expression",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "mask"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "mask"
                                ],
                                "properties": {
                                  "mask": {
                                    "type": "string",
                                    "description": "Mask to validate against"
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate string starts with a value",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "startsWith"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "starts_with"
                                ],
                                "properties": {
                                  "starts_with": {
                                    "type": "string",
                                    "description": "String must start with this value"
                                  },
                                  "check_case": {
                                    "type": "boolean",
                                    "description": "Perform a case sensitive match. By default will not match case",
                                    "default": false
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "step"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "step"
                                ],
                                "properties": {
                                  "step": {
                                    "type": "number",
                                    "description": "The step value"
                                  },
                                  "start": {
                                    "type": "integer",
                                    "description": "Start stepping at this value"
                                  },
                                  "end": {
                                    "type": "integer",
                                    "description": "End stepping at this value"
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate string matches an URI",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "uri"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "properties": {
                                  "schemes": {
                                    "type": "array",
                                    "description": "Schemes to match. By default all are matched",
                                    "items": {
                                      "type": "string",
                                      "enum": [
                                        "http",
                                        "https",
                                        "sip",
                                        "sips",
                                        "ftp",
                                        "ftps",
                                        "ldap",
                                        "ldaps",
                                        "file",
                                        "udp",
                                        "tcp",
                                        "urn"
                                      ]
                                    }
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "object",
                            "description": "Validate value matches a list (white list)",
                            "required": [
                              "type",
                              "options"
                            ],
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "whiteList"
                                ]
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "list"
                                ],
                                "properties": {
                                  "list": {
                                    "type": "array",
                                    "minimum": 1,
                                    "maximum": 100,
                                    "description": "The list of approved values",
                                    "items": {
                                      "type": "string"
                                    }
                                  },
                                  "check_case": {
                                    "type": "boolean",
                                    "description": "Perform a case sensitive match. By default will not match case",
                                    "default": false
                                  }
                                }
                              }
                            }
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
    },
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "example": {
            "href": "https://api.nterprise.com/parts"
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
            "href": "https://api.nterprise.com/parts?offset=QVBrO2wm13iEyl&limit=100"
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

<h3 id="fetchallcustomerparts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for parts|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchallcustomerparts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:parts|[object]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» part_id|string|false|read-only|Unique identifier|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
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
|»»»» manufacturer|object|false|none|Manufacturer information for the part|
|»»»»» part_number|string|true|none|Manufacturer part number|
|»»»» serial_prefix|string|false|none|A serial number prefix for the part|
|»»»» input_filter|[object]|false|none|Input Filters allow custom fields to be defined for entities|
|»»»»» label|string|true|none|Human readable name|
|»»»»» key|string|true|read-only|Slug used to store the property|
|»»»»» filters|[anyOf]|true|none|A Collection of filters applied to the field|

*anyOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»» *anonymous*|object|false|none|This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set|
|»»»»»»» type|string|true|none|none|
|»»»»»»» options|object|true|none|none|
|»»»»»»»» approved_values|[string]|true|none|The list of approved values|
|»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|
|»»»»»»»» default|string\|null|false|none|If this is set and the value is not in the approved_list, set the value to this|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»» *anonymous*|object|false|none|Make the value camelCase|
|»»»»»»»» type|string|true|none|none|
|»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a date|
|»»»»»»»» type|string|true|none|none|
|»»»»»»»» options|object|true|none|Date filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»» *anonymous*|object|false|none|Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty: # The number 0 or 0.0 # empty string '' # A boolean false # The word 'false' #|
|»»»»»»»» type|string|true|none|none|
|»»»»»»»» options|object|true|none|empty filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a float. Non numeric characters (including comma) will be removed|
|»»»»»»»» type|string|true|none|none|
|»»»»»»»» options|object|true|none|none|
|»»»»»»»»» precision|integer|false|none|How many decimal places to preserve|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»» *anonymous*|object|false|none|Make the value kebab-case|
|»»»»»»»»» type|string|true|none|none|
|»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»» *anonymous*|object|false|none|Make the value lowercase|
|»»»»»»»»» type|string|true|none|none|
|»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed|
|»»»»»»»»» type|string|true|none|none|
|»»»»»»»»» options|object|true|none|Number filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»» *anonymous*|object|false|none|Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.|
|»»»»»»»»» type|string|true|none|none|
|»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»» prefix|string|true|none|The prefix to add|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»» *anonymous*|object|false|none|Make the value snake_case|
|»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a string|
|»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»» options|object|true|none|String filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»» *anonymous*|object|false|none|Add a suffix to the start of a string. If the string already start with the suffix, it will not append.|
|»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»» suffix|string|true|none|The suffix to add|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»» *anonymous*|object|false|none|Filter to trim whitespace from a value|
|»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»» options|object|true|none|By default will trim from the start and end|
|»»»»»»»»»»»» start|boolean|false|none|Remove white space from the start of the string|
|»»»»»»»»»»»» end|boolean|false|none|Remove white space from the end of the string|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»» *anonymous*|object|false|none|Make the value UPPERCASE|
|»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»» options|object|true|none|This filter has no options|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»» validators|[anyOf]|true|none|A set of validators to use for this field|

*anyOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is between two values. By default, min and max are included|
|»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»» min|number|true|none|Minimum value to check|
|»»»»»»»»»»»»»» max|number|true|none|The maximum value to check|
|»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»» *anonymous*|object|false|none|Validate value does not match a list (black list)|
|»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»» list|[string]|true|none|The list of approved values|
|»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string contains a value|
|»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»» contains|string|true|none|String must contain with this value|
|»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string is a correct email address|
|»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»» strict|boolean|false|none|Enforce strict standards from ARPA. This will enforce the length of the string|
|»»»»»»»»»»»»»»»»» lookup|boolean|false|none|Look up the host name and check if it has a valid MX record|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string ends with a value|
|»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»» ends_with|string|true|none|String must end with this value|
|»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number equals a value|
|»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When value is a float, this will set the decimal precision|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is greater than a value. By default, this will check if value is greater than or equals to|
|»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string has a correct DNS records|
|»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»» record_type|string|false|none|DNS record type to validate|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an IP address format. Defaults to matching IPv4|
|»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»» versions|[string]|false|none|IP Version to match against|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string is a certain length|
|»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»» length|string|true|none|String must contain with this value|
|»»»»»»»»»»»»»»»»»»»»»»» operator|string|false|none|Which type of length comparision to make|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is less than a value. By default, this will check if value is less than or equals to|
|»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an MAC address format|
|»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This validator has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches a regular expression|
|»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»» mask|string|true|none|Mask to validate against|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string starts with a value|
|»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»» starts_with|string|true|none|String must start with this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.|
|»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»» step|number|true|none|The step value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»» start|integer|false|none|Start stepping at this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»» end|integer|false|none|End stepping at this value|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an URI|
|»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»» schemes|[string]|false|none|Schemes to match. By default all are matched|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate value matches a list (white list)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»» list|[string]|true|none|The list of approved values|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»» _links|object|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»» self|object|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» href|string(uri)|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»» next|object|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» href|string(uri)|false|none|none|

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
|type|allowed_list|
|type|camel|
|type|date|
|type|empty|
|type|float|
|type|kebab|
|type|lower|
|type|number|
|type|prefix|
|type|snake|
|type|string|
|type|suffix|
|type|trim|
|type|upper|
|type|greater_than|
|type|white_list|
|type|contains|
|type|email_address|
|type|ends_with|
|type|equals|
|type|greater_than|
|type|hostname|
|record_type|A|
|record_type|AAAA|
|record_type|AFSDB|
|record_type|APL|
|record_type|CAA|
|record_type|CDNSKEY|
|record_type|CDS|
|record_type|CERT|
|record_type|CNAME|
|record_type|CSYNC|
|record_type|DHCID|
|record_type|DLV|
|record_type|DNAME|
|record_type|DNSKEY|
|record_type|DS|
|record_type|HIP|
|record_type|IPSECKEY|
|record_type|KEY|
|record_type|KX|
|record_type|LOC|
|record_type|MX|
|record_type|NAPTR|
|record_type|NS|
|record_type|NSEC|
|record_type|NSEC3|
|record_type|NSEC3PARAM|
|record_type|OPENPGPKEY|
|record_type|PTR|
|record_type|RRSIG|
|record_type|RP|
|record_type|SIG|
|record_type|SMIMEA|
|record_type|SOA|
|record_type|SRV|
|record_type|SSHFP|
|record_type|TA|
|record_type|TKEY|
|record_type|TLSA|
|record_type|TSIG|
|record_type|TXT|
|record_type|URI|
|type|ipAddress|
|type|length|
|operator|equals|
|operator|less_than|
|operator|less_than_equals|
|operator|greater_than|
|operator|greater_than_equals|
|type|lessThan|
|type|macAddress|
|type|mask|
|type|startsWith|
|type|step|
|type|uri|
|type|whiteList|

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

## fetchAllCustomerPrograms

<a id="opIdfetchAllCustomerPrograms"></a>

`GET /customers/{customer_id}/programs`

*Fetches A Page of programs for the customer*

Fetch customer programs

<h3 id="fetchallcustomerprograms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|string|true|Id of the customer|
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
        "nter:programs": {
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
                      "href": "https://api.nterprise.com/programs/ZRPrErZZJrIO6mB"
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
              "program_id": {
                "description": "Unique identifier",
                "type": "string",
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
          }
        }
      }
    },
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "example": {
            "href": "https://api.nterprise.com/programs"
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
            "href": "https://api.nterprise.com/programs?offset=QVBrO2wm13iEyl&limit=100"
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

<h3 id="fetchallcustomerprograms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for programs|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchallcustomerprograms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:programs|[object]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» program_id|string|false|read-only|Unique identifier|
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
|»»»» allowed_statuses|[object]|false|none|List of allowed statuses|
|»»»»» status|string|true|none|A Custom label for the status|
|»»»»» category|string|true|none|The classifier for the statues|
|»»»» _links|object|false|none|none|
|»»»»» self|object|false|none|none|
|»»»»»» href|string(uri)|false|none|none|
|»»»»» next|object|false|none|none|
|»»»»»» href|string(uri)|false|none|none|

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

# Schemas

<h2 id="tocScustomer">Customer</h2>

<a id="schemacustomer"></a>

```yaml
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
    x-patternProperties:
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

```

*Customer*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer_id|string|false|read-only|Customer identifier|
|entity_id|string|true|read-only|Customer identifier|
|entity_type|string|true|none|none|
|label|string|true|none|Label for the entity|
|slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|external_platform|object|false|none|External Identifiers for the customer|
|allowed_statuses|[object]|true|none|List of allowed statuses|
|» status|string|true|none|A Custom label for the status|
|» category|string|true|none|The classifier for the statues|
|total_programs|number|false|none|Total programs under the customer|
|total_projects|number|false|none|Total projects under the customer|

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

