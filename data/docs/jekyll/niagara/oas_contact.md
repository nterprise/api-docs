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

API for the nterprise application

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
|sort|query|string|false|Sort by field|
|filter[label]|query|string|false|Filter where the label contains this value|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|label|
|sort|-label|
|sort|created|
|sort|-created|
|sort|updated|
|sort|-updated|
|sort|phone|
|sort|-phone|
|sort|email|
|sort|-email|

> Example responses

> 200 Response

```json
{
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:contacts": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "object",
            "x-hal": true,
            "x-ui-hide": true,
            "properties": {
              "_links": {
                "type": "object",
                "properties": {
                  "self": {
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "href": {
                        "type": "string",
                        "example": "https://api.nterprise.com/contacts/3bd1a313-5bf8-468f-85ff-59d2214c8158"
                      }
                    }
                  }
                }
              }
            },
            "allOf": [
              {
                "x-id": "#contact",
                "x-nter-relation": "contacts",
                "x-nter-model": "Contact",
                "x-nter-callable": true,
                "type": "object",
                "description": "Contact Information",
                "required": [
                  "contact_id",
                  "label",
                  "email",
                  "name"
                ],
                "properties": {
                  "label": {
                    "x-faker": "name.title",
                    "allOf": [
                      {
                        "type": "string",
                        "description": "Label for the entity",
                        "example": "primary"
                      }
                    ]
                  },
                  "contact_id": {
                    "type": "string",
                    "description": "Identifier for the contact",
                    "readOnly": true,
                    "example": "1c022258-afcd-4bf2-a576-ae59b7a15d73",
                    "x-examples": [
                      "1c022258-afcd-4bf2-a576-ae59b7a15d73"
                    ],
                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                  },
                  "email": {
                    "type": "string",
                    "format": "email",
                    "description": "Email address",
                    "example": "bob@zones.com",
                    "x-examples": [
                      "bob@zones.com"
                    ],
                    "nullable": true
                  },
                  "name": {
                    "type": "string",
                    "description": "Contact name",
                    "example": "Bob Alice",
                    "x-examples": [
                      "Bob Alice"
                    ],
                    "nullable": true
                  },
                  "phone": {
                    "type": "string",
                    "description": "Phone number",
                    "example": "+1 518 867 5309",
                    "x-examples": [
                      "+1 518 867 5309"
                    ]
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
                },
                "example": {
                  "contact_id": "1c022258-afcd-4bf2-a576-ae59b7a15d73",
                  "label": "Customer Division Representative",
                  "email": "bob@zones.com",
                  "name": "Bob Alice",
                  "phone": "+1 518 867 5309",
                  "created": "2000-01-03T02:33:07.848Z",
                  "updated": "1961-09-02T06:16:27.807Z"
                }
              }
            ],
            "example": "undefined"
          }
        }
      }
    }
  },
  "allOf": [
    {
      "type": "object",
      "x-hal": true,
      "x-ui-hide": true,
      "properties": {
        "total_count": {
          "type": "integer",
          "format": "int32",
          "readOnly": true,
          "minimum": 0,
          "example": 32
        },
        "limit": {
          "type": "integer",
          "format": "int32",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "offset": {
          "type": "string",
          "readOnly": true,
          "example": "363yHhUhhI"
        }
      },
      "allOf": [
        {
          "type": "object",
          "x-ui-hide": true,
          "properties": {
            "_links": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "self": {
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
        },
        {
          "type": "object",
          "x-ui-hide": true,
          "properties": {
            "_links": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "next": {
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
      ],
      "example": "undefined"
    }
  ]
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
|»» nter:contacts|[allOf]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|read-only|none|
|»»»»» href|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

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
      "x-faker": "name.title",
      "allOf": [
        {
          "type": "string",
          "description": "Label for the entity",
          "example": "primary"
        }
      ]
    },
    "name": {
      "type": "string",
      "description": "Contact name",
      "example": "Bob Alice",
      "x-examples": [
        "Bob Alice"
      ],
      "nullable": true
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "Email address",
      "example": "bob@zones.com",
      "x-examples": [
        "bob@zones.com"
      ],
      "nullable": true
    },
    "phone": {
      "type": "string",
      "description": "Phone number",
      "example": "+1 518 867 5309",
      "x-examples": [
        "+1 518 867 5309"
      ]
    }
  }
}
```

<h3 id="createcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Label for the entity|
|name|body|string\|null|true|Contact name|
|email|body|string(email)\|null|true|Email address|
|phone|body|string|false|Phone number|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "allOf": [
    {
      "type": "object",
      "x-hal": true,
      "x-ui-hide": true,
      "properties": {
        "_links": {
          "type": "object",
          "properties": {
            "self": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "href": {
                  "type": "string",
                  "example": "https://api.nterprise.com/contacts/3bd1a313-5bf8-468f-85ff-59d2214c8158"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#contact",
          "x-nter-relation": "contacts",
          "x-nter-model": "Contact",
          "x-nter-callable": true,
          "type": "object",
          "description": "Contact Information",
          "required": [
            "contact_id",
            "label",
            "email",
            "name"
          ],
          "properties": {
            "label": {
              "x-faker": "name.title",
              "allOf": [
                {
                  "type": "string",
                  "description": "Label for the entity",
                  "example": "primary"
                }
              ]
            },
            "contact_id": {
              "type": "string",
              "description": "Identifier for the contact",
              "readOnly": true,
              "example": "1c022258-afcd-4bf2-a576-ae59b7a15d73",
              "x-examples": [
                "1c022258-afcd-4bf2-a576-ae59b7a15d73"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "email": {
              "type": "string",
              "format": "email",
              "description": "Email address",
              "example": "bob@zones.com",
              "x-examples": [
                "bob@zones.com"
              ],
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "Contact name",
              "example": "Bob Alice",
              "x-examples": [
                "Bob Alice"
              ],
              "nullable": true
            },
            "phone": {
              "type": "string",
              "description": "Phone number",
              "example": "+1 518 867 5309",
              "x-examples": [
                "+1 518 867 5309"
              ]
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
          },
          "example": {
            "contact_id": "1c022258-afcd-4bf2-a576-ae59b7a15d73",
            "label": "Customer Division Representative",
            "email": "bob@zones.com",
            "name": "Bob Alice",
            "phone": "+1 518 867 5309",
            "created": "2000-01-03T02:33:07.848Z",
            "updated": "1961-09-02T06:16:27.807Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
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
|»» self|object|false|read-only|none|
|»»» href|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## fetchContactById

<a id="opIdfetchContactById"></a>

`GET /contacts/:contact_id`

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
  "allOf": [
    {
      "type": "object",
      "x-hal": true,
      "x-ui-hide": true,
      "properties": {
        "_links": {
          "type": "object",
          "properties": {
            "self": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "href": {
                  "type": "string",
                  "example": "https://api.nterprise.com/contacts/3bd1a313-5bf8-468f-85ff-59d2214c8158"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#contact",
          "x-nter-relation": "contacts",
          "x-nter-model": "Contact",
          "x-nter-callable": true,
          "type": "object",
          "description": "Contact Information",
          "required": [
            "contact_id",
            "label",
            "email",
            "name"
          ],
          "properties": {
            "label": {
              "x-faker": "name.title",
              "allOf": [
                {
                  "type": "string",
                  "description": "Label for the entity",
                  "example": "primary"
                }
              ]
            },
            "contact_id": {
              "type": "string",
              "description": "Identifier for the contact",
              "readOnly": true,
              "example": "1c022258-afcd-4bf2-a576-ae59b7a15d73",
              "x-examples": [
                "1c022258-afcd-4bf2-a576-ae59b7a15d73"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "email": {
              "type": "string",
              "format": "email",
              "description": "Email address",
              "example": "bob@zones.com",
              "x-examples": [
                "bob@zones.com"
              ],
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "Contact name",
              "example": "Bob Alice",
              "x-examples": [
                "Bob Alice"
              ],
              "nullable": true
            },
            "phone": {
              "type": "string",
              "description": "Phone number",
              "example": "+1 518 867 5309",
              "x-examples": [
                "+1 518 867 5309"
              ]
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
          },
          "example": {
            "contact_id": "1c022258-afcd-4bf2-a576-ae59b7a15d73",
            "label": "Customer Division Representative",
            "email": "bob@zones.com",
            "name": "Bob Alice",
            "phone": "+1 518 867 5309",
            "created": "2000-01-03T02:33:07.848Z",
            "updated": "1961-09-02T06:16:27.807Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
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
|»» self|object|false|read-only|none|
|»»» href|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## updateContact

<a id="opIdupdateContact"></a>

`PUT /contacts/:contact_id`

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
      "x-faker": "name.title",
      "allOf": [
        {
          "type": "string",
          "description": "Label for the entity",
          "example": "primary"
        }
      ]
    },
    "name": {
      "type": "string",
      "description": "Contact name",
      "example": "Bob Alice",
      "x-examples": [
        "Bob Alice"
      ],
      "nullable": true
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "Email address",
      "example": "bob@zones.com",
      "x-examples": [
        "bob@zones.com"
      ],
      "nullable": true
    },
    "phone": {
      "type": "string",
      "description": "Phone number",
      "example": "+1 518 867 5309",
      "x-examples": [
        "+1 518 867 5309"
      ]
    }
  }
}
```

<h3 id="updatecontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|Id of the contact|
|label|body|string|true|Label for the entity|
|name|body|string\|null|true|Contact name|
|email|body|string(email)\|null|true|Email address|
|phone|body|string|false|Phone number|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "allOf": [
    {
      "type": "object",
      "x-hal": true,
      "x-ui-hide": true,
      "properties": {
        "_links": {
          "type": "object",
          "properties": {
            "self": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "href": {
                  "type": "string",
                  "example": "https://api.nterprise.com/contacts/3bd1a313-5bf8-468f-85ff-59d2214c8158"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#contact",
          "x-nter-relation": "contacts",
          "x-nter-model": "Contact",
          "x-nter-callable": true,
          "type": "object",
          "description": "Contact Information",
          "required": [
            "contact_id",
            "label",
            "email",
            "name"
          ],
          "properties": {
            "label": {
              "x-faker": "name.title",
              "allOf": [
                {
                  "type": "string",
                  "description": "Label for the entity",
                  "example": "primary"
                }
              ]
            },
            "contact_id": {
              "type": "string",
              "description": "Identifier for the contact",
              "readOnly": true,
              "example": "1c022258-afcd-4bf2-a576-ae59b7a15d73",
              "x-examples": [
                "1c022258-afcd-4bf2-a576-ae59b7a15d73"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "email": {
              "type": "string",
              "format": "email",
              "description": "Email address",
              "example": "bob@zones.com",
              "x-examples": [
                "bob@zones.com"
              ],
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "Contact name",
              "example": "Bob Alice",
              "x-examples": [
                "Bob Alice"
              ],
              "nullable": true
            },
            "phone": {
              "type": "string",
              "description": "Phone number",
              "example": "+1 518 867 5309",
              "x-examples": [
                "+1 518 867 5309"
              ]
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
          },
          "example": {
            "contact_id": "1c022258-afcd-4bf2-a576-ae59b7a15d73",
            "label": "Customer Division Representative",
            "email": "bob@zones.com",
            "name": "Bob Alice",
            "phone": "+1 518 867 5309",
            "created": "2000-01-03T02:33:07.848Z",
            "updated": "1961-09-02T06:16:27.807Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
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
|»» self|object|false|read-only|none|
|»»» href|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **423**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteContact

<a id="opIddeleteContact"></a>

`DELETE /contacts/:contact_id`

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
      "example": "Unauthorized"
    },
    "type": {
      "example": "https://docs.nterprise.com/api/problem/Unauthorized"
    },
    "status": {
      "example": 401
    },
    "detail": {
      "example": "You are not authorized to access this resource"
    }
  },
  "allOf": [
    {
      "type": "object",
      "x-ui-hide": true,
      "description": "API Error",
      "properties": {
        "type": {
          "type": "string",
          "format": "uri",
          "description": "An absolute URI that identifies the problem type",
          "default": "about:blank",
          "example": "https://docs.nterprise.com/problem/InternalServerError"
        },
        "title": {
          "type": "string",
          "example": "Internal Server Error",
          "description": "A short, summary of the problem type"
        },
        "status": {
          "type": "integer",
          "format": "int32",
          "description": "The HTTP status code generated by the origin server for this occurrence of the problem",
          "minimum": 100,
          "maximum": 600,
          "example": 500
        },
        "detail": {
          "type": "string",
          "description": "A human readable explanation specific to this occurrence of the problem",
          "example": "Failed to reticulate splines"
        }
      }
    }
  ]
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
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

Status Code **423**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» title|any|false|none|none|
|» type|any|false|none|none|
|» status|any|false|none|none|
|» detail|any|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocScontact">Contact</h2>

<a id="schemacontact"></a>

```yaml
contact_id: 1c022258-afcd-4bf2-a576-ae59b7a15d73
label: Customer Division Representative
email: bob@zones.com
name: Bob Alice
phone: +1 518 867 5309
created: '2000-01-03T02:33:07.848Z'
updated: '1961-09-02T06:16:27.807Z'

```

*Contact Information*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|Label for the entity|
|contact_id|string|true|read-only|Identifier for the contact|
|email|string(email)\|null|true|none|Email address|
|name|string\|null|true|none|Contact name|
|phone|string|false|none|Phone number|
|created|string(date-time)|false|read-only|Date the entity was created|
|updated|string(date-time)|false|read-only|Last date the entity was updated|

