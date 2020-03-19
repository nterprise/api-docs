---
layout: page
parent: Niagara API
nav_order: 2
title: Contacts
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="contacts">Contacts v2.0.0</h1>

> Scroll down for example requests and responses.

Contacts contain email and phone number information for a non-user entity which allows sending notification information without the need to create a user login

## Security Restrictions

Contacts are considered a top-level `entity.` `Users` must be granted the `create` permission on the Contact entity to be able to create contacts. Grant the `create` or `update` permissions to the user for the linked `entity` for the relationship operation to be approved.

<h1 id="contacts-contact">Contact</h1>

## fetchAllContacts

<a id="opIdfetchAllContacts"></a>

`GET /contacts`

*Fetches A Page of contacts*

Fetch Contact

<h3 id="fetchallcontacts-parameters">Parameters</h3>

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

<h3 id="fetchallcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for contacts|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallcontacts-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## createContact

<a id="opIdcreateContact"></a>

`POST /contacts`

*Creates a contact*

Creates a new contact following the contact schema

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

<h3 id="createcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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

<h3 id="createcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A contact response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|

<h3 id="createcontact-responseschema">Response Schema</h3>

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

## fetchContactById

<a id="opIdfetchContactById"></a>

`GET /contacts/{contact_id}`

*Fetches a contact by the contact Id*

Fetch Contact

<h3 id="fetchcontactbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|Id of the contact|

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

<h3 id="fetchcontactbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A contact response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchcontactbyid-responseschema">Response Schema</h3>

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

## updateContact

<a id="opIdupdateContact"></a>

`PUT /contacts/{contact_id}`

*Updates a contact*

Updates a new contact following the contact schema

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

<h3 id="updatecontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|Id of the contact|
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

<h3 id="updatecontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A contact response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="updatecontact-responseschema">Response Schema</h3>

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

## deleteContact

<a id="opIddeleteContact"></a>

`DELETE /contacts/{contact_id}`

*Deletes a contact*

This will remove the contact from the system

<h3 id="deletecontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|Id of the contact|

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

<h3 id="deletecontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Contact deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="deletecontact-responseschema">Response Schema</h3>

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

# Schemas

<h2 id="tocScontact">Contact</h2>

<a id="schemacontact"></a>

```yaml
type: object
description: Contact Information
additionalProperties: false
required:
  - label
  - entity_id
  - entity_type
  - created
  - updated
properties:
  contact_id:
    description: Identifier for the contact
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
      - CON
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
  email:
    type: string
    format: email
    description: Email address
  name:
    type: string
    description: Contact name
  phone:
    type: string
    description: Phone number
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

*Contact Information*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact_id|string|false|read-only|Identifier for the contact|
|entity_id|string|true|read-only|Customer identifier|
|entity_type|string|true|none|none|
|label|string|true|none|Label for the entity|
|slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|email|string(email)|false|none|Email address|
|name|string|false|none|Contact name|
|phone|string|false|none|Phone number|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CON|

