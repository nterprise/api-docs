---
layout: page
parent: Niagara API
nav_order: 14
title: Reporting
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="reporting">Reporting</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Reporting endpoints

<h1 id="reporting-report">Report</h1>

## Operations

### GET /fields

<a id="opIdfetchFieldsForEntity"></a>

Fetches custom fields for an entity

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="fetchfieldsforentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter[key]|query|string|false|Filter on field key|

> Example responses

> 200 Response

```json
{
  "fields": [
    {
      "field": "fizz",
      "label": "A Fizz id"
    }
  ],
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/fields"
    }
  }
}
```

### POST /reports

<a id="opIdcreateReport"></a>

Runs a report for an entity

<aside class="success">
This operation does not require authentication
</aside>

> Body parameter

<h3 id="createreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|base_entity|body|string|false|Entity type|
|custom_fields|body|object|false|none|
|&nbsp;&nbsp; fields|body|[string]|false|List of custom filed keys to return|
|&nbsp;&nbsp; query|body|[object]|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; field|body|string|false|The field to query|
|&nbsp;&nbsp;&nbsp;&nbsp; operators|body|string|false|The operation|
|&nbsp;&nbsp;&nbsp;&nbsp; operand|body|string¦null|false|The value for the operator|
|&nbsp;&nbsp; aliases|body|[object]|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; key|body|string|false|The field to alias|
|&nbsp;&nbsp;&nbsp;&nbsp; alias|body|string|false|The alias for the field. Note: this does not impact the query above.|
|core_fields|body|object|false|none|
|&nbsp;&nbsp; fields|body|[string]|false|List of custom filed keys to return|
|&nbsp;&nbsp; query|body|[object]|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; field|body|string|false|The field to query|
|&nbsp;&nbsp;&nbsp;&nbsp; operators|body|string|false|The operation|
|&nbsp;&nbsp;&nbsp;&nbsp; operand|body|string¦null|false|The value for the operator|
|&nbsp;&nbsp; aliases|body|[object]|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; key|body|string|false|The field to alias|
|&nbsp;&nbsp;&nbsp;&nbsp; alias|body|string|false|The alias for the field. Note: this does not impact the query above.|

> Example responses

> 201 Response

```json
{
  "report_id": "fe385753-8d50-49b5-b24f-25726bfbe357",
  "header": [
    {
      "label": "Unit Id",
      "key": "unit_id"
    },
    {
      "label": "Unit Label",
      "key": "unit_label"
    }
  ],
  "data": [
    {
      "0": {
        "key": "unit_id",
        "value": "unit_one"
      },
      "1": {
        "key": "unit_label",
        "value": "Unit One"
      }
    },
    {
      "0": {
        "key": "unit_id",
        "value": "unit_two"
      },
      "1": {
        "key": "unit_label",
        "value": "Unit Two"
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/reports/fe385753-8d50-49b5-b24f-25726bfbe357"
    }
  }
}
```

### GET /reports/{report_id}/download

<a id="opIdexportReport"></a>

Download a report

<aside class="success">
This operation does not require authentication
</aside>

<h3 id="exportreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|report_id|path|string|true|Id of the report|

> Example responses

> 200 Response

# Embedded Schemas

## Role
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role_id|string|true|read-only|Role identifier|
|label|string|true|none|Label for the entity|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|grants|[object]|true|none|Permissions granted to this role|
|&nbsp;&nbsp; permission|string|true|none|The granted permission|
|&nbsp;&nbsp; label|string|true|none|Label for the entity|
|&nbsp;&nbsp; match_location|boolean|true|none|The user must be located at this location to access this entity|
|total_users|number|true|none|Number of users who have this role|

#### Specification

```yaml
type: object
required:
  - updated
  - label
  - created
  - role_id
  - grants
  - total_users
properties:
  role_id:
    description: Role identifier
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
  grants:
    type: array
    description: Permissions granted to this role
    minItems: 1
    uniqueItems: false
    items:
      type: object
      description: Permission
      additionalProperties: false
      required:
        - permission
        - label
        - match_location
      properties:
        permission:
          description: The granted permission
          type: string
          pattern: ^(create|update|delete|read):(CON|CUS|LOC|NOTE|PART|PGM|PRJ|RES|SRES|UNIT|USER|WKF|WOR)$
        label:
          type: string
          description: Label for the entity
        match_location:
          type: boolean
          description: The user must be located at this location to access this entity
  total_users:
    type: number
    description: Number of users who have this role
    minimum: 0

```

