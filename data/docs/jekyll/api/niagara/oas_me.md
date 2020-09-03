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

<h1 id="me-me">Me</h1>

## Operations

### GET /me

<a id="opIdfetchMe"></a>

Fetches the current user information along with resources they can access

<aside class="success">
This operation does not require authentication
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

### GET /me/notifications

<a id="opIdfetchNotifications"></a>

Fetches the notifications for a user

<aside class="success">
This operation does not require authentication
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

<aside class="success">
This operation does not require authentication
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

<aside class="success">
This operation does not require authentication
</aside>

> Body parameter

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

