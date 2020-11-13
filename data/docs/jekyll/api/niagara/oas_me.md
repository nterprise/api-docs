---
layout: page
parent: Niagara API
nav_order: 8
redirect_from:
  - /rel/me
title: Me
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="me">Me</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Information about the current authenticated user.

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|me:profile|Allows access to the me endpoints|

<h1 id="me-me">Me</h1>

## Operations

### GET /me

<a id="opIdfetchMe"></a>

Fetches the current user information along with resources they can access

<aside class="warning">
Permissions required:<br>
<ul><li>me:profile</li></ul>
</aside>

> Example responses

> 200 Response

```json
{
  "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
  "created": "2019-08-19T00:01:02.639Z",
  "updated": "2019-08-19T00:01:02.639Z",
  "name": "Daniel Jackson",
  "email": "daniel.jackson@niagara.com",
  "profile": "https://bit.ly/18gECvy",
  "picture": "https://bit.ly/18gECvy",
  "notifications": {
    "un_read": 42,
    "read": 8,
    "archived": 2
  },
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/users/3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
    }
  }
}
```

### GET /me/customers

<a id="opIdfetchMeCustomers"></a>

Fetches A Page of customers the user has access to

<aside class="warning">
Permissions required:<br>
<ul><li>me:profile</li></ul>
</aside>

<h3 id="fetchmecustomers-parameters">Parameters</h3>

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
    "nter:customers": [
      {
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
        "input_filter": [],
        "_links": {
          "nter:customer-parts": {
            "href": "https://api.nterprise.com/customers/customer/parts"
          },
          "nter:customer-units": {
            "href": "https://api.nterprise.com/customers/customer/units"
          },
          "nter:customer-programs": {
            "href": "https://api.nterprise.com/customers/customer/programs"
          },
          "nter:customer-projects": {
            "href": "https://api.nterprise.com/customers/customer/projects"
          },
          "self": {
            "href": "https://api.nterprise.com/customers/customer"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/customers?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/customers?limit=42"
    }
  }
}
```

### GET /me/manufacturers

<a id="opIdfetchMeManufacturer"></a>

Fetches A Page of manufacturers the user has access too

<aside class="warning">
Permissions required:<br>
<ul><li>me:profile</li></ul>
</aside>

<h3 id="fetchmemanufacturer-parameters">Parameters</h3>

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

### GET /me/locations

<a id="opIdfetchMeLocations"></a>

Fetches A Page of locations the user has access too

<aside class="warning">
Permissions required:<br>
<ul><li>me:profile</li></ul>
</aside>

<h3 id="fetchmelocations-parameters">Parameters</h3>

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

### GET /me/notifications

<a id="opIdfetchNotifications"></a>

Fetches the notifications for a user

<aside class="warning">
Permissions required:<br>
<ul><li>me:profile</li></ul>
</aside>

<h3 id="fetchnotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|filter[read]|query|boolean|false|Filter on the read flag|
|filter[archive]|query|boolean|false|Filter on the archived flag|

> Example responses

> 200 Response

```json
{
  "total_count": 21,
  "limit": 42,
  "offset": "next-offset",
  "_embedded": {
    "nter:notes": [
      {
        "notification_id": "notification",
        "label": "A Note",
        "created": "2019-10-09T19:30:35.639Z",
        "updated": "2019-10-09T20:30:35.639Z",
        "message": "Lorem ipsum dolor sit amet",
        "read": false,
        "archived": false,
        "_links": {
          "nter:note-sender": {
            "href": "https://api.nterprise.com/users/3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
          },
          "nter:note-regarding": {
            "href": "https://api.nterprise.com/unit/unit"
          },
          "self": {
            "href": "https://api.nterprise.com/notifications/notification"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/notes?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/notes?limit=42"
    }
  }
}
```

### GET /me/notifications/{notification_id}

<a id="opIdfetchNotificationById"></a>

Fetch detail about a notification

<aside class="warning">
Permissions required:<br>
<ul><li>me:profile</li></ul>
</aside>

<h3 id="fetchnotificationbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|notification_id|path|string|true|Id of the notification|

> Example responses

> 200 Response

```json
{
  "notification_id": "notification",
  "label": "A Note",
  "created": "2019-10-09T19:30:35.639Z",
  "updated": "2019-10-09T20:30:35.639Z",
  "message": "Lorem ipsum dolor sit amet",
  "read": false,
  "archived": false,
  "_embedded": {
    "nter:notification-sender": [
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
    ],
    "nter:notification-regarding": [
      {
        "entity_id": "entity",
        "entity_type": "UNIT",
        "label": "A unit",
        "_links": {
          "self": {
            "href": "https://api.nterprise.com/unit/unit"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/notes/note"
    }
  }
}
```

### PATCH /me/notifications/{notification_id}

<a id="opIdupdateNotification"></a>

Updates a notification for a user

<aside class="warning">
Permissions required:<br>
<ul><li>me:profile</li></ul>
</aside>

> Body parameter

<h3 id="updatenotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|notification_id|path|string|true|Id of the notification|

> Example responses

> 200 Response

```json
{
  "notification_id": "notification",
  "label": "A Note",
  "created": "2019-10-09T19:30:35.639Z",
  "updated": "2019-10-09T20:30:35.639Z",
  "message": "Lorem ipsum dolor sit amet",
  "read": false,
  "archived": false,
  "_embedded": {
    "nter:notification-sender": [
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
    ],
    "nter:notification-regarding": [
      {
        "entity_id": "entity",
        "entity_type": "UNIT",
        "label": "A unit",
        "_links": {
          "self": {
            "href": "https://api.nterprise.com/unit/unit"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/notes/note"
    }
  }
}
```

<h1 id="me-vendor">Vendor</h1>

## Operations

### GET /me/vendors

<a id="opIdfetchMeVendors"></a>

Fetches A Page of vendor

<aside class="warning">
Permissions required:<br>
<ul><li>me:profile</li></ul>
</aside>

<h3 id="fetchmevendors-parameters">Parameters</h3>

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
    "nter:vendors": [
      {
        "vendor_id": "vendor",
        "label": "Manchuck Inc",
        "created": "2019-08-19T00:01:02.000Z",
        "updated": "2020-08-19T01:01:02.000Z",
        "input_filter": [],
        "_links": {
          "nter:vendor-units": {
            "href": "https://api.nterprise.com/vendors/vendor/units"
          },
          "self": {
            "href": "https://api.nterprise.com/vendors/vendor"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/vendors?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/vendors?limit=42"
    }
  }
}
```

