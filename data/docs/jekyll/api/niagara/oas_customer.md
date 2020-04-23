---
layout: page
parent: Niagara API
nav_order: 5
redirect_from:
  - /rel/customers
  - /rel/batch-customer
  - /rel/program-customer
  - /rel/project-customer
  - /rel/part-customer
title: Customers
---

<h1 id="customers">Customers</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Customers may have multiple Programs, Projects, and Locations, as well as device Parts and individual Units.

<h1 id="customers-customer">Customer</h1>

## Operations

### GET /customers - *Fetch Customers*

<a id="opIdfetchAllCustomers"></a>

*Fetch Customers*

Fetches A Page of customers

<h3 id="fetchallcustomers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|

<h3 id="fetchallcustomers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A Customer HAL response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

> Example responses

> 200 Response

```json
{
  "customer_id": "customer",
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
  "_links": {
    "nter:customer-parts": {
      "href": "https://api.example.com/customers/customer/parts"
    },
    "nter:customer-units": {
      "href": "https://api.example.com/customers/customer/units"
    },
    "nter:customer-programs": {
      "href": "https://api.example.com/customers/customer/programs"
    },
    "nter:customer-projects": {
      "href": "https://api.example.com/customers/customer/projects"
    },
    "nter:customer-work-orders": {
      "href": "https://api.example.com/customers/customer/work-orders"
    },
    "self": {
      "href": "https://api.example.com/customers/customer"
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

<h3 id="fetchallcustomers-responseschema">Response Schema</h3>

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

### POST /customers - *Create customer*

<a id="opIdcreateCustomer"></a>

*Create customer*

Creates a new customer

> Body parameter

<h3 id="createcustomer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Label for the entity|
|external_platform|body|object|false|External Identifiers for the customer|
|allowed_statuses|body|[object]|true|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp; status|body|string|true|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; category|body|string|true|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp; description|body|string¦null|false|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; order|body|number|false|Order status appears when listing|

<h3 id="createcustomer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A Customer HAL response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|

> Example responses

> 200 Response

```json
{
  "customer_id": "customer",
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
  "_links": {
    "nter:customer-parts": {
      "href": "https://api.example.com/customers/customer/parts"
    },
    "nter:customer-units": {
      "href": "https://api.example.com/customers/customer/units"
    },
    "nter:customer-programs": {
      "href": "https://api.example.com/customers/customer/programs"
    },
    "nter:customer-projects": {
      "href": "https://api.example.com/customers/customer/projects"
    },
    "nter:customer-work-orders": {
      "href": "https://api.example.com/customers/customer/work-orders"
    },
    "self": {
      "href": "https://api.example.com/customers/customer"
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

> 409 Response

```json
{
  "title": "Conflict",
  "type": "https://docs.nterprise.com/api/problem/Conflict",
  "status": 409,
  "detail": "A similar resource exists"
}
```

<h3 id="createcustomer-responseschema">Response Schema</h3>

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

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

### GET /customers/{customer_id} - *Fetch Customer*

<a id="opIdfetchCustomerById"></a>

*Fetch Customer*

Fetches a customer by the customer Id

<h3 id="fetchcustomerbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|string|true|Id of the customer|

<h3 id="fetchcustomerbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A Customer HAL response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

> Example responses

> 200 Response

```json
{
  "customer_id": "customer",
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
  "_links": {
    "nter:customer-parts": {
      "href": "https://api.example.com/customers/customer/parts"
    },
    "nter:customer-units": {
      "href": "https://api.example.com/customers/customer/units"
    },
    "nter:customer-programs": {
      "href": "https://api.example.com/customers/customer/programs"
    },
    "nter:customer-projects": {
      "href": "https://api.example.com/customers/customer/projects"
    },
    "nter:customer-work-orders": {
      "href": "https://api.example.com/customers/customer/work-orders"
    },
    "self": {
      "href": "https://api.example.com/customers/customer"
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

<h3 id="fetchcustomerbyid-responseschema">Response Schema</h3>

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

### PUT /customers/{customer_id} - *Update customer*

<a id="opIdupdateCustomer"></a>

*Update customer*

Updates a new customer following the customer schema

> Body parameter

<h3 id="updatecustomer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|string|true|Id of the customer|
|label|body|string|true|Label for the entity|
|external_platform|body|object|false|External Identifiers for the customer|
|allowed_statuses|body|[object]|true|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp; status|body|string|true|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; category|body|string|true|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp; description|body|string¦null|false|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; order|body|number|false|Order status appears when listing|

<h3 id="updatecustomer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A Customer HAL response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

> Example responses

> 200 Response

```json
{
  "customer_id": "customer",
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
  "_links": {
    "nter:customer-parts": {
      "href": "https://api.example.com/customers/customer/parts"
    },
    "nter:customer-units": {
      "href": "https://api.example.com/customers/customer/units"
    },
    "nter:customer-programs": {
      "href": "https://api.example.com/customers/customer/programs"
    },
    "nter:customer-projects": {
      "href": "https://api.example.com/customers/customer/projects"
    },
    "nter:customer-work-orders": {
      "href": "https://api.example.com/customers/customer/work-orders"
    },
    "self": {
      "href": "https://api.example.com/customers/customer"
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

> 409 Response

```json
{
  "title": "Conflict",
  "type": "https://docs.nterprise.com/api/problem/Conflict",
  "status": 409,
  "detail": "A similar resource exists"
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

<h3 id="updatecustomer-responseschema">Response Schema</h3>

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

Status Code **409**

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

### DELETE /customers/{customer_id} - *Delete customer*

<a id="opIddeleteCustomer"></a>

*Delete customer*

This will remove the customer from the system

<h3 id="deletecustomer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|string|true|Id of the customer|

<h3 id="deletecustomer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Customer deleted|None|
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

<h3 id="deletecustomer-responseschema">Response Schema</h3>

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

### GET /customers/{customer_id}/contacts - *Fetch customer contacts*

<a id="opIdfetchAllCustomerContacts"></a>

*Fetch customer contacts*

Fetches A Page of contacts for the customer

<h3 id="fetchallcustomercontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|string|true|Id of the customer|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|

<h3 id="fetchallcustomercontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for contacts|Inline|
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
    "nter:contacts": [
      {
        "contact_id": "contact",
        "label": "Major",
        "created": "2019-08-19T00:01:02.000Z",
        "updated": "2020-08-19T01:01:02.000Z",
        "name": "Major Samantha Carter",
        "email": "s.carter@sg1.com",
        "phone": "518-867-5309",
        "_links": {
          "self": {
            "href": "https://api.example.com/contacts/contact"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://api.example.com/contacts?limit=42"
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

<h3 id="fetchallcustomercontacts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; total_count|number|true|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp; limit|number|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; offset|string¦null|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; _embedded|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; nter:contacts|[allOf]|true|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; contact_id|string|false|read-only|Identifier for the contact|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|false|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|false|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|false|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; name|string|false|none|Contact name|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; email|string(email)|false|none|Email address|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; phone|string|false|none|Phone number|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _links|object|false|none|none|
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

### POST /customers/{customer_id}/contacts - *Create customer contact*

<a id="opIdattachCustomerContact"></a>

*Create customer contact*

This will create the contact along with linking it to the customer. If a contact is found based on the email address, this will just link the contact to the customer

> Body parameter

<h3 id="attachcustomercontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|string|true|Id of the customer|
|label|body|string|true|Label for the entity|
|name|body|string|true|Contact name|
|email|body|string(email)|true|Email address|
|phone|body|string|false|Phone number|

<h3 id="attachcustomercontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A contact response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|

> Example responses

> 200 Response

```json
{
  "contact_id": "contact",
  "label": "Major",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "name": "Major Samantha Carter",
  "email": "s.carter@sg1.com",
  "phone": "518-867-5309",
  "_links": {
    "self": {
      "href": "https://api.example.com/contacts/contact"
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

> 404 Response

```json
{
  "title": "Not Found",
  "type": "https://docs.nterprise.com/api/problem/NotFound",
  "status": 404,
  "detail": "A Resource with the id \"foo\" was not found"
}
```

> 409 Response

```json
{
  "title": "Conflict",
  "type": "https://docs.nterprise.com/api/problem/Conflict",
  "status": 409,
  "detail": "A similar resource exists"
}
```

<h3 id="attachcustomercontact-responseschema">Response Schema</h3>

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

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

### GET /customers/{customer_id}/programs - *Fetch customer programs*

<a id="opIdfetchAllCustomerPrograms"></a>

*Fetch customer programs*

Fetches A Page of programs for the customer

<h3 id="fetchallcustomerprograms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|string|true|Id of the customer|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|

<h3 id="fetchallcustomerprograms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for programs|Inline|
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
    "nter:programs": [
      {
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
        ],
        "_links": {
          "nter:program-customer": {
            "href": "https://api.example.com/customers/customer"
          },
          "nter:program-projects": {
            "href": "https://api.example.com/programs/program/projects"
          },
          "self": {
            "href": "https://api.example.com/programs/program"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.example.com/programs?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.example.com/programs?limit=42"
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

<h3 id="fetchallcustomerprograms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; total_count|number|true|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp; limit|number|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; offset|string¦null|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; _embedded|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; nter:programs|[allOf]|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; program_id|string|true|read-only|Unique identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; start_date|string(date-time)¦null|true|none|Start date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; end_date|string(date-time)¦null|true|none|End date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customer|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customer_id|string|true|read-only|Customer identifier|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; created|string(date-time)|true|read-only|Date the entity was created|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updated|string(date-time)|true|read-only|Last date the entity was updated|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; external_platform|object|true|none|External Identifiers for the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; allowed_statuses|[object]|true|none|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_programs|number|true|none|Total programs under the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_projects|number|true|none|Total projects under the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; allowed_statuses|[object]|true|none|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _links|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; nter:program-customer|object|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(uri)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; nter:program-projects|object|true|none|none|
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

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; title|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; detail|string|false|none|none|

# Embedded Schemas

## Customer
<!-- backwards compatibility -->
<a id="schemacustomer"></a>
<a id="schema_Customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer_id|string|true|read-only|Customer identifier|
|label|string|true|none|Label for the entity|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|external_platform|object|true|none|External Identifiers for the customer|
|allowed_statuses|[object]|true|none|List of allowed statuses|
|&nbsp;&nbsp;&nbsp;&nbsp; status|string|true|none|A Custom label for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; category|string|true|none|The classifier for the statues|
|&nbsp;&nbsp;&nbsp;&nbsp; description|string¦null|false|none|A description for the status|
|&nbsp;&nbsp;&nbsp;&nbsp; order|number|false|none|Order status appears when listing|
|total_programs|number|true|none|Total programs under the customer|
|total_projects|number|true|none|Total projects under the customer|

#### Specification

```yaml
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

```

