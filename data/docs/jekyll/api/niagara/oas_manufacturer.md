---
layout: page
parent: Niagara API
nav_order: 7
redirect_from:
  - /rel/manufacturers
  - /rel/manufacturer
  - /rel/part-manufacturer
  - /rel/unit-manufacturer
title: Manufacturers
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="manufacturers">Manufacturers</h1>

* Do not remove this line (it will not be displayed)
{:toc}

In nterprise niagara, the Manufacturer refers to the company that produced a particular Part and its Units. Manufacturers need to be created by an authorized User before it can be selected on the Part form.

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|manufacturer:create|Allows creating a manufacturer|
|manufacturer:update|Allows editing a manufacturer|
|manufacturer:delete|Allows deleting a manufacturer|
|manufacturer:read|Allows access to a manufacturer|
|manufacturer:attach|Allows attaching a relation from a manufacturer|
|manufacturer:detach|Allows detaching a relation from a manufacturer|
|manufacturer:all|Allows reading all manufacturers|

<h1 id="manufacturers-manufacturer">Manufacturer</h1>

## Operations

### GET /manufacturers

<a id="opIdfetchAllManufacturer"></a>

Fetches A Page of manufacturers

<aside class="warning">
Permissions required:<br>
<ul><li>manufacturer:all</li></ul>
</aside>

<h3 id="fetchallmanufacturer-parameters">Parameters</h3>

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
    "nter:manufacturers": [
      {
        "manufacturer_id": "manufacturer",
        "label": "Manchuck Inc",
        "created": "2019-08-19T00:01:02.000Z",
        "updated": "2020-08-19T01:01:02.000Z",
        "input_filter": [],
        "_links": {
          "nter:manufacturer-units": {
            "href": "https://api.nterprise.com/manufacturers/manufacturer/units"
          },
          "nter:manufacturer-parts": {
            "href": "https://api.nterprise.com/manufacturers/manufacturer/parts"
          },
          "self": {
            "href": "https://api.nterprise.com/manufacturers/manufacturer"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/manufacturers?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/manufacturers?limit=42"
    }
  }
}
```

### POST /manufacturers

<a id="opIdcreateManufacturer"></a>

Creates a manufacturer

<aside class="warning">
Permissions required:<br>
<ul><li>manufacturer:create</li></ul>
</aside>

> Body parameter

<h3 id="createmanufacturer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Label for the entity|
|<a href="https://docs.nterprise.com/niagara/inputFilter.html">input_filter</a>|body|[object]|false|Input Filters allow custom fields to be defined for entities|

> Example responses

> 200 Response

```json
{
  "manufacturer_id": "manufacturer",
  "label": "Manchuck Inc",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "input_filter": [],
  "_links": {
    "nter:manufacturer-units": {
      "href": "https://api.nterprise.com/manufacturers/manufacturer/units"
    },
    "nter:manufacturer-parts": {
      "href": "https://api.nterprise.com/manufacturers/manufacturer/parts"
    },
    "self": {
      "href": "https://api.nterprise.com/manufacturers/manufacturer"
    }
  }
}
```

### GET /manufacturers/{manufacturer_id}

<a id="opIdfetchManufacturerById"></a>

Fetches a manufacturer

<aside class="warning">
Permissions required:<br>
<ul><li>manufacturer:read</li></ul>
</aside>

<h3 id="fetchmanufacturerbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|

> Example responses

> 200 Response

```json
{
  "manufacturer_id": "manufacturer",
  "label": "Manchuck Inc",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "input_filter": [],
  "_links": {
    "nter:manufacturer-units": {
      "href": "https://api.nterprise.com/manufacturers/manufacturer/units"
    },
    "nter:manufacturer-parts": {
      "href": "https://api.nterprise.com/manufacturers/manufacturer/parts"
    },
    "self": {
      "href": "https://api.nterprise.com/manufacturers/manufacturer"
    }
  }
}
```

### PUT /manufacturers/{manufacturer_id}

<a id="opIdupdateManufacturer"></a>

Updates a manufacturer

<aside class="warning">
Permissions required:<br>
<ul><li>manufacturer:update</li></ul>
</aside>

> Body parameter

<h3 id="updatemanufacturer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|
|label|body|string|true|Label for the entity|
|<a href="https://docs.nterprise.com/niagara/inputFilter.html">input_filter</a>|body|[object]|false|Input Filters allow custom fields to be defined for entities|

> Example responses

> 200 Response

```json
{
  "manufacturer_id": "manufacturer",
  "label": "Manchuck Inc",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "input_filter": [],
  "_links": {
    "nter:manufacturer-units": {
      "href": "https://api.nterprise.com/manufacturers/manufacturer/units"
    },
    "nter:manufacturer-parts": {
      "href": "https://api.nterprise.com/manufacturers/manufacturer/parts"
    },
    "self": {
      "href": "https://api.nterprise.com/manufacturers/manufacturer"
    }
  }
}
```

### DELETE /manufacturers/{manufacturer_id}

<a id="opIddeleteManufacturer"></a>

This will remove the manufacturer from the system

<aside class="warning">
Permissions required:<br>
<ul><li>manufacturer:delete</li></ul>
</aside>

<h3 id="deletemanufacturer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|

### GET /manufacturers/{manufacturer_id}/diff

<a id="opIdfetchDiffForManufacturer"></a>

Fetches A Page diff records for a manufacturer

<aside class="warning">
Permissions required:<br>
<ul><li>manufacturer:read</li></ul>
</aside>

<h3 id="fetchdiffformanufacturer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|
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

### GET /manufacturers/{manufacturer_id}/parts

<a id="opIdfetchAllManufacturerParts"></a>

Fetches A Page of parts for the manufacturer

<aside class="warning">
Permissions required:<br>
<ul><li>manufacturer:read</li></ul>
</aside>

<h3 id="fetchallmanufacturerparts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|
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
    "nter:parts": [
      {
        "part_id": "part",
        "label": "Widget",
        "created": "2019-08-19T00:01:02.000Z",
        "updated": "2020-08-19T01:01:02.000Z",
        "serial_prefix": "ABC",
        "total_units": 5,
        "total_units_allocated": 2,
        "total_units_unallocated": 3,
        "customer": {
          "customer_id": "customer",
          "label": "manchuck",
          "created": "2020-01-09T22:12:03.000Z",
          "updated": "2020-01-09T22:12:03.000Z",
          "total_programs": 21,
          "total_projects": 42,
          "input_filter": [],
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
        "manufacturer": {
          "manufacturer_id": "manufacturer",
          "label": "Manchuck Inc",
          "created": "2019-08-19T00:01:02.000Z",
          "updated": "2020-08-19T01:01:02.000Z",
          "part_number": "1-888-482-858-832",
          "input_filter": []
        },
        "input_filter": [],
        "_links": {
          "nter:part-manufacturer": {
            "href": "https://api.nterprise.com/manufacturers/manufacturer"
          },
          "nter:part-customer": {
            "href": "https://api.nterprise.com/customers/customer"
          },
          "nter:part-units": {
            "href": "https://api.nterprise.com/parts/part/units"
          },
          "self": {
            "href": "https://api.nterprise.com/parts/part"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/parts?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/parts?limit=42"
    }
  }
}
```

### GET /manufacturers/{manufacturer_id}/relations

<a id="opIdfetchRelationsForManufacturer"></a>

Fetches the relations for a manufacturer

<aside class="warning">
Permissions required:<br>
<ul><li>manufacturer:read</li></ul>
</aside>

<h3 id="fetchrelationsformanufacturer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|
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

### POST /manufacturers/{manufacturer_id}/relations

<a id="opIdcreateRelationForManufacturer"></a>

Creates a relation for a manufacturer

<aside class="warning">
Permissions required:<br>
<ul><li>manufacturer:attach</li></ul>
</aside>

> Body parameter

<h3 id="createrelationformanufacturer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|
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

### DELETE /manufacturers/{manufacturer_id}/relations/{relation_id}

<a id="opIddeleteRelationForManufacturer"></a>

Deletes a relation for a manufacturer

<aside class="warning">
Permissions required:<br>
<ul><li>manufacturer:detach</li></ul>
</aside>

<h3 id="deleterelationformanufacturer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|
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

### GET /manufacturers/{manufacturer_id}/units

<a id="opIdfetchAllManufacturerUnits"></a>

Fetches A Page of units for the manufacturer

<aside class="warning">
Permissions required:<br>
<ul><li>manufacturer:read</li></ul>
</aside>

<h3 id="fetchallmanufacturerunits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|
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
    "nter:units": [
      {
        "unit_id": "unit",
        "label": "My widget",
        "created": "2019-08-19T00:01:02.000Z",
        "updated": "2020-08-19T01:01:02.000Z",
        "serial_number": "DEF123456",
        "raw_serial_number": "ABCDEF123456",
        "current_status": {
          "status": "Reticulating Splines",
          "description": "For something that is Reticulating Splines",
          "category": "IN_PROGRESS",
          "order": 2
        },
        "tenant_part_number": "UNIT-number",
        "part": {
          "part_id": "part",
          "label": "Widget",
          "created": "2019-08-19T00:01:02.000Z",
          "updated": "2020-08-19T01:01:02.000Z",
          "serial_prefix": "ABC",
          "total_units": 5,
          "total_units_allocated": 2,
          "total_units_unallocated": 3,
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
          "manufacturer": {
            "manufacturer_id": "manufacturer",
            "label": "Manchuck Inc",
            "created": "2019-08-19T00:01:02.000Z",
            "updated": "2020-08-19T01:01:02.000Z",
            "part_number": "1-888-482-858-832",
            "input_filter": []
          },
          "input_filter": []
        },
        "vendor": {
          "vendor_id": "vendor",
          "label": "Manchuck Inc",
          "created": "2019-08-19T00:01:02.000Z",
          "updated": "2020-08-19T01:01:02.000Z",
          "part_number": "VEN-number",
          "input_filter": []
        },
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
        "manufacturer": {
          "manufacturer_id": "manufacturer",
          "label": "Manchuck Inc",
          "created": "2019-08-19T00:01:02.000Z",
          "updated": "2020-08-19T01:01:02.000Z",
          "part_number": "1-888-482-858-832",
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
        "current_location": {
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
        "resource": null,
        "input_filter": [],
        "_links": {
          "nter:unit-manufacturer": {
            "href": "https://api.nterprise.com/manufacturers/manufacturer"
          },
          "nter:unit-customer": {
            "href": "https://api.nterprise.com/customers/customer"
          },
          "nter:unit-part": {
            "href": "https://api.nterprise.com/parts/part"
          },
          "nter:unit-vendor": {
            "href": "https://api.nterprise.com/vendors/vendor"
          },
          "nter:unit-last-known-location": {
            "href": "https://api.nterprise.com/locations/location"
          },
          "nter:unit-resource": {
            "href": "https://api.nterprise.com/resources/parent-resource"
          },
          "self": {
            "href": "https://api.nterprise.com/units/unit"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/units?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/units?limit=42"
    }
  }
}
```

### GET /manufacturers/{manufacturer_id}/actions

<a id="opIdfetchActionsForManufacturer"></a>

Fetch a page of actions for a manufacturer

<aside class="warning">
Permissions required:<br>
<ul><li>action:read</li></ul>
</aside>

<h3 id="fetchactionsformanufacturer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|

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

### POST /manufacturers/{manufacturer_id}/actions

<a id="opIdcreateActionForManufacturer"></a>

Creates a new action

<aside class="warning">
Permissions required:<br>
<ul><li>action:create</li></ul>
</aside>

> Body parameter

<h3 id="createactionformanufacturer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|
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

## Manufacturer
<!-- backwards compatibility -->
<a id="schemamanufacturer"></a>
<a id="schema_Manufacturer"></a>
<a id="tocSmanufacturer"></a>
<a id="tocsmanufacturer"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manufacturer_id|string|true|read-only|Manufacturer identifier|
|label|string|true|none|Label for the entity|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|input_filter|[object]|true|none|Input Filters allow custom fields to be defined for entities|

#### Specification

```yaml
type: object
x-model: Manufacturer
required:
  - updated
  - label
  - created
  - manufacturer_id
  - input_filter
properties:
  manufacturer_id:
    description: Manufacturer identifier
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

```

