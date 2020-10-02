---
layout: page
parent: Niagara API
nav_order: 6
redirect_from:
  - /rel/locations
  - /rel/location
  - /rel/resource-location
  - /rel/sub-resource-location
  - /rel/batch-location
  - /rel/unit-last-known-location
  - /rel/queue-location
  - /rel/work-order-location
title: Locations
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="locations">Locations</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Locations in nterprise niagara will eventually belong to one of three groups: Facility, Warehouse, or Site.  At the current time, only Facilities are supported.

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|location:create|Allows creating a location|
|location:update|Allows editing a location|
|location:delete|Allows deleting a location|
|location:read|Allows access to a location|
|location:attach|Allows attaching a relation from a location|
|location:detach|Allows detaching a relation from a location|
|location:all|Allows reading all locations|

<h1 id="locations-location">Location</h1>

## Operations

### GET /facilities

<a id="opIdfetchAllFacilities"></a>

Fetches A Page of facilities

<aside class="warning">
Permissions required:<br>
<ul><li>location:read-all</li></ul>
</aside>

<h3 id="fetchallfacilities-parameters">Parameters</h3>

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
    "nter:locations": [
      {
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
        "input_filter": [],
        "_links": {
          "nter:location-resources": {
            "href": "https://api.nterprise.com/locations/location/resources"
          },
          "self": {
            "href": "https://api.nterprise.com/locations/location"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/locations?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/locations?limit=42"
    }
  }
}
```

### GET /locations

<a id="opIdfetchAllLocations"></a>

Fetches A Page of locations

<aside class="warning">
Permissions required:<br>
<ul><li>location:read-all</li></ul>
</aside>

<h3 id="fetchalllocations-parameters">Parameters</h3>

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
    "nter:locations": [
      {
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
        "input_filter": [],
        "_links": {
          "nter:location-resources": {
            "href": "https://api.nterprise.com/locations/location/resources"
          },
          "self": {
            "href": "https://api.nterprise.com/locations/location"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/locations?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/locations?limit=42"
    }
  }
}
```

### POST /locations

<a id="opIdcreateLocation"></a>

Creates a location

<aside class="warning">
Permissions required:<br>
<ul><li>location:create</li></ul>
</aside>

> Body parameter

<h3 id="createlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|The identifier for the location|
|location_type|body|string|true|The type of location|
|address|body|object|true|xNAL address for the location|
|&nbsp;&nbsp; country|body|string|true|Three Letter ISO country code|
|&nbsp;&nbsp; administrative_area|body|string|true|State / Province / Region|
|&nbsp;&nbsp; sub_administrative_area|body|string|false|County / District|
|&nbsp;&nbsp; locality|body|string|true|City / Town|
|&nbsp;&nbsp; postal_code|body|string|true|Postal Code / Zip Code|
|&nbsp;&nbsp; thoroughfare|body|string|true|Street Address|
|&nbsp;&nbsp; premise|body|string|false|Apartment / Suite / Box number etc|
|&nbsp;&nbsp; sub_premise|body|string|false|Floor # / Room # / Building label etc|
|<a href="https://docs.nterprise.com/niagara/inputFilter.html">input_filter</a>|body|[object]|false|Input Filters allow custom fields to be defined for entities|

> Example responses

> 200 Response

```json
{
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
  "input_filter": [],
  "_links": {
    "nter:location-resources": {
      "href": "https://api.nterprise.com/locations/location/resources"
    },
    "self": {
      "href": "https://api.nterprise.com/locations/location"
    }
  }
}
```

### GET /locations/{location_id}

<a id="opIdfetchLocationById"></a>

Fetches a location

<aside class="warning">
Permissions required:<br>
<ul><li>location:read</li></ul>
</aside>

<h3 id="fetchlocationbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|

> Example responses

> 200 Response

```json
{
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
  "input_filter": [],
  "_links": {
    "nter:location-resources": {
      "href": "https://api.nterprise.com/locations/location/resources"
    },
    "self": {
      "href": "https://api.nterprise.com/locations/location"
    }
  }
}
```

### PUT /locations/{location_id}

<a id="opIdupdateLocation"></a>

Updates a location

<aside class="warning">
Permissions required:<br>
<ul><li>location:update</li></ul>
</aside>

> Body parameter

<h3 id="updatelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|
|label|body|string|true|The identifier for the location|
|location_type|body|string|true|The type of location|
|address|body|object|true|xNAL address for the location|
|&nbsp;&nbsp; country|body|string|true|Three Letter ISO country code|
|&nbsp;&nbsp; administrative_area|body|string|true|State / Province / Region|
|&nbsp;&nbsp; sub_administrative_area|body|string|false|County / District|
|&nbsp;&nbsp; locality|body|string|true|City / Town|
|&nbsp;&nbsp; postal_code|body|string|true|Postal Code / Zip Code|
|&nbsp;&nbsp; thoroughfare|body|string|true|Street Address|
|&nbsp;&nbsp; premise|body|string|false|Apartment / Suite / Box number etc|
|&nbsp;&nbsp; sub_premise|body|string|false|Floor # / Room # / Building label etc|
|<a href="https://docs.nterprise.com/niagara/inputFilter.html">input_filter</a>|body|[object]|false|Input Filters allow custom fields to be defined for entities|

> Example responses

> 200 Response

```json
{
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
  "input_filter": [],
  "_links": {
    "nter:location-resources": {
      "href": "https://api.nterprise.com/locations/location/resources"
    },
    "self": {
      "href": "https://api.nterprise.com/locations/location"
    }
  }
}
```

### DELETE /locations/{location_id}

<a id="opIddeleteLocation"></a>

This will remove the location

<aside class="warning">
Permissions required:<br>
<ul><li>location:delete</li></ul>
</aside>

<h3 id="deletelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|

### GET /locations/{location_id}/diff

<a id="opIdfetchDiffForLocation"></a>

Fetches A Page diff records for a location

<aside class="warning">
Permissions required:<br>
<ul><li>location:read</li></ul>
</aside>

<h3 id="fetchdiffforlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|
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

### GET /locations/{location_id}/queues

<a id="opIdfetchAllResources"></a>

Fetches A Page of resources for the location

<aside class="warning">
Permissions required:<br>
<ul><li>location:read</li></ul>
</aside>

<h3 id="fetchallresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|
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
    "nter:sub-resources": [
      {
        "sub_resource_id": "sub-resource",
        "label": "sub resource",
        "created": "2020-01-13T22:12:13.000Z",
        "updated": "2020-01-13T22:12:13.000Z",
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
        "resource": {
          "resource_id": "parent-resource",
          "label": "parent resource",
          "created": "2020-01-09T22:12:03.000Z",
          "updated": "2020-01-09T22:12:03.000Z",
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
          "resource_type": "station",
          "meta": {
            "power": "50w"
          },
          "input_filter": []
        },
        "resource_type": "slot",
        "meta": {
          "power": "5w"
        },
        "input_filter": [],
        "_links": {
          "nter:resources": {
            "href": "https://api.nterprise.com/resources/parent-resource"
          },
          "nter:resource-location": {
            "href": "https://api.nterprise.com/locations/location"
          },
          "self": {
            "href": "https://api.nterprise.com/sub-resources/sub-resource"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/sub-resources?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/sub-resources?limit=42"
    }
  }
}
```

### GET /ware-houses

<a id="opIdfetchAllWarehouses"></a>

Fetches A Page of warehouses

<aside class="warning">
Permissions required:<br>
<ul><li>location:read-all</li></ul>
</aside>

<h3 id="fetchallwarehouses-parameters">Parameters</h3>

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
    "nter:locations": [
      {
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
        "input_filter": [],
        "_links": {
          "nter:location-resources": {
            "href": "https://api.nterprise.com/locations/location/resources"
          },
          "self": {
            "href": "https://api.nterprise.com/locations/location"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/locations?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/locations?limit=42"
    }
  }
}
```

### GET /locations/{location_id}/relations

<a id="opIdfetchRelationsForLocation"></a>

Fetches the relations for a location

<aside class="warning">
Permissions required:<br>
<ul><li>location:relations-read-all</li></ul>
</aside>

<h3 id="fetchrelationsforlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|
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

### POST /locations/{location_id}/relations

<a id="opIdcreateRelationForLocation"></a>

Creates a relation for a location

<aside class="warning">
Permissions required:<br>
<ul><li>location:attach</li></ul>
</aside>

> Body parameter

<h3 id="createrelationforlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|
|relation|body|string|true|Type of relation|
|entity|body|object|true|none|
|&nbsp;&nbsp; entity_id|body|string|true|Entity identifier|
|&nbsp;&nbsp; entity_type|body|string|true|Entity type|

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

### DELETE /locations/{location_id}/relations/{relation_id}

<a id="opIddeleteRelationForLocation"></a>

Deletes a relation for a location

<aside class="warning">
Permissions required:<br>
<ul><li>location:detach</li></ul>
</aside>

<h3 id="deleterelationforlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|
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

### GET /locations/{location_id}/techs

<a id="opIdfetchTechsForLocation"></a>

Fetches the techs for a location

<aside class="warning">
Permissions required:<br>
<ul><li>location:relations-read-all</li></ul>
</aside>

<h3 id="fetchtechsforlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|

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

### DELETE /locations/{location_id}/techs/{tech_id}

<a id="opIddetachTechFromLocation"></a>

Remove tech from a location

<aside class="warning">
Permissions required:<br>
<ul><li>location:detach</li></ul>
</aside>

<h3 id="detachtechfromlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|
|tech_id|path|string|true|Id of the Tech|

### GET /locations/{location_id}/actions

<a id="opIdfetchActionsForLocation"></a>

Fetch a page of actions for a location

<aside class="warning">
Permissions required:<br>
<ul><li>action:read</li></ul>
</aside>

<h3 id="fetchactionsforlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|

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

### POST /locations/{location_id}/actions

<a id="opIdcreateActionForLocation"></a>

Creates a new action

<aside class="warning">
Permissions required:<br>
<ul><li>action:create</li></ul>
</aside>

> Body parameter

<h3 id="createactionforlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|
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

## Location
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location_id|string|true|read-only|The identifier for the location|
|label|string|true|none|Label for the entity|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|location_type|string|true|none|The type of location|
|formatted_address|string|true|read-only|Address formatted for the where region the location exists in|
|address|object|true|none|xNAL address for the location|
|&nbsp;&nbsp; country|string|true|none|Three Letter ISO country code|
|&nbsp;&nbsp; administrative_area|string|true|none|State / Province / Region|
|&nbsp;&nbsp; sub_administrative_area|string|false|none|County / District|
|&nbsp;&nbsp; locality|string|true|none|City / Town|
|&nbsp;&nbsp; postal_code|string|true|none|Postal Code / Zip Code|
|&nbsp;&nbsp; thoroughfare|string|true|none|Street Address|
|&nbsp;&nbsp; premise|string|false|none|Apartment / Suite / Box number etc|
|&nbsp;&nbsp; sub_premise|string|false|none|Floor # / Room # / Building label etc|
|input_filter|[object]|true|none|Input Filters allow custom fields to be defined for entities|

#### Specification

```yaml
type: object
required:
  - updated
  - label
  - created
  - address
  - formatted_address
  - location_id
  - location_type
  - input_filter
properties:
  location_id:
    description: The identifier for the location
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
  location_type:
    type: string
    description: The type of location
    enum:
      - warehouse
      - facility
      - other
  formatted_address:
    type: string
    readOnly: true
    description: Address formatted for the where region the location exists in
  address:
    type: object
    required:
      - country
      - administrative_area
      - locality
      - postal_code
      - thoroughfare
    description: "xNAL address for the location "
    properties:
      country:
        type: string
        description: Three Letter ISO country code
        enum:
          - ABW
          - AFG
          - AGO
          - AIA
          - ALA
          - ALB
          - AND
          - ARE
          - ARG
          - ARM
          - ASM
          - ATA
          - ATF
          - ATG
          - AUS
          - AUT
          - AZE
          - BDI
          - BEL
          - BEN
          - BES
          - BFA
          - BGD
          - BGR
          - BHR
          - BHS
          - BIH
          - BLM
          - BLR
          - BLZ
          - BMU
          - BOL
          - BRA
          - BRB
          - BRN
          - BTN
          - BVT
          - BWA
          - CAF
          - CAN
          - CCK
          - CHE
          - CHL
          - CHN
          - CIV
          - CMR
          - COD
          - COG
          - COK
          - COL
          - COM
          - CPV
          - CRI
          - CUB
          - CUW
          - CXR
          - CYM
          - CYP
          - CZE
          - DEU
          - DJI
          - DMA
          - DNK
          - DOM
          - DZA
          - ECU
          - EGY
          - ERI
          - ESH
          - ESP
          - EST
          - ETH
          - FIN
          - FJI
          - FLK
          - FRA
          - FRO
          - FSM
          - GAB
          - GBR
          - GEO
          - GGY
          - GHA
          - GIB
          - GIN
          - GLP
          - GMB
          - GNB
          - GNQ
          - GRC
          - GRD
          - GRL
          - GTM
          - GUF
          - GUM
          - GUY
          - HKG
          - HMD
          - HND
          - HRV
          - HTI
          - HUN
          - IDN
          - IMN
          - IND
          - IOT
          - IRL
          - IRN
          - IRQ
          - ISL
          - ISR
          - ITA
          - JAM
          - JEY
          - JOR
          - JPN
          - KAZ
          - KEN
          - KGZ
          - KHM
          - KIR
          - KNA
          - KOR
          - KWT
          - LAO
          - LBN
          - LBR
          - LBY
          - LCA
          - LIE
          - LKA
          - LSO
          - LTU
          - LUX
          - LVA
          - MAC
          - MAF
          - MAR
          - MCO
          - MDA
          - MDG
          - MDV
          - MEX
          - MHL
          - MKD
          - MLI
          - MLT
          - MMR
          - MNE
          - MNG
          - MNP
          - MOZ
          - MRT
          - MSR
          - MTQ
          - MUS
          - MWI
          - MYS
          - MYT
          - NAM
          - NCL
          - NER
          - NFK
          - NGA
          - NIC
          - NIU
          - NLD
          - NOR
          - NPL
          - NRU
          - NZL
          - OMN
          - PAK
          - PAN
          - PCN
          - PER
          - PHL
          - PLW
          - PNG
          - POL
          - PRI
          - PRK
          - PRT
          - PRY
          - PSE
          - PYF
          - QAT
          - REU
          - ROU
          - RUS
          - RWA
          - SAU
          - SDN
          - SEN
          - SGP
          - SGS
          - SHN
          - SJM
          - SLB
          - SLE
          - SLV
          - SMR
          - SOM
          - SPM
          - SRB
          - SSD
          - STP
          - SUR
          - SVK
          - SVN
          - SWE
          - SWZ
          - SXM
          - SYC
          - SYR
          - TCA
          - TCD
          - TGO
          - THA
          - TJK
          - TKL
          - TKM
          - TLS
          - TON
          - TTO
          - TUN
          - TUR
          - TUV
          - TWN
          - TZA
          - UGA
          - UKR
          - UMI
          - URY
          - USA
          - UZB
          - VAT
          - VCT
          - VEN
          - VGB
          - VIR
          - VNM
          - VUT
          - WLF
          - WSM
          - YEM
          - ZAF
          - ZMB
          - ZWE
      administrative_area:
        type: string
        description: State / Province / Region
      sub_administrative_area:
        type: string
        description: County / District
      locality:
        type: string
        description: City / Town
      postal_code:
        type: string
        description: Postal Code / Zip Code
      thoroughfare:
        type: string
        description: Street Address
      premise:
        type: string
        description: Apartment / Suite / Box number etc
      sub_premise:
        type: string
        description: "Floor # / Room # / Building label etc"
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
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
                    description: Date filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
                    description: empty filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
                    description: Number filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
                    description: String filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                description: Add a suffix to the start of a string. If the string already start
                  with the suffix, it will not append.
                type: object
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
                    description: This validator has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
                    description: This validator has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
                    description: This validator has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
                    description: Required validator has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
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
              type: string
              description: Entity type
              enum:
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
                - QUE
                - RES
                - SRES
                - TEN
                - UNIT
                - USER
                - VEN
                - WKF
                - WOR
        apply_to:
          x-nter-skip-param: true
          type: string
          description: Entity type
          enum:
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
            - QUE
            - RES
            - SRES
            - TEN
            - UNIT
            - USER
            - VEN
            - WKF
            - WOR

```

