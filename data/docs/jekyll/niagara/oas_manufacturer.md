---
layout: page
parent: Niagara API
nav_order: 6
title: Manufacturers
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="manufacturers">Manufacturers v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

<h1 id="manufacturers-manufacturer">Manufacturer</h1>

## fetchAllManufacturer

<a id="opIdfetchAllManufacturer"></a>

`GET /manufacturers`

*Fetches A Page of manufacturer*

Fetch Part

<h3 id="fetchallmanufacturer-parameters">Parameters</h3>

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

> Example responses

> 200 Response

```json
{
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:manufacturers": {
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
                        "example": "https://api.nterprise.com/manufacturers/d17542cb-a7a5-408a-9a35-27d863f15d39"
                      }
                    }
                  }
                }
              }
            },
            "allOf": [
              {
                "x-id": "#manufacturer",
                "x-nter-relation": "manufacturers",
                "x-nter-model": "Manufacturer",
                "x-nter-callable": true,
                "description": "A Manufacturer of parts",
                "required": [
                  "label",
                  "manufacturer_id"
                ],
                "properties": {
                  "manufacturer_id": {
                    "type": "string",
                    "description": "unique id",
                    "example": "99ec26f2-fa31-4768-b357-268c708fcda5",
                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                  },
                  "label": {
                    "type": "string",
                    "example": "Apple Inc",
                    "x-examples": [
                      "Apple Inc"
                    ],
                    "description": "Label for the manufacturer"
                  },
                  "slug": {
                    "type": "string",
                    "example": "apple-inc",
                    "x-examples": [
                      "apple-inc"
                    ],
                    "description": "Auto-generated slug for the manufacturer"
                  }
                },
                "allOf": [
                  {
                    "x-ui-hide": true,
                    "type": "object",
                    "description": "Common Properties to all entities",
                    "required": [
                      "label"
                    ],
                    "properties": {
                      "label": {
                        "type": "string",
                        "description": "Label for the entity",
                        "example": "primary"
                      },
                      "slug": {
                        "type": "string",
                        "description": "Slug for the entity (Auto-generated from the label)",
                        "readOnly": true,
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
                ],
                "example": {
                  "label": "Apple Inc",
                  "manufacturer_id": "003DffD7-Dff3-3E2A-Ae76-26E6C7aE5F7B",
                  "slug": "apple-inc",
                  "created": "1978-03-10T02:20:23.811Z",
                  "updated": "1940-10-01T09:10:03.934Z"
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

<h3 id="fetchallmanufacturer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for manufacturers|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallmanufacturer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:manufacturers|[allOf]|false|none|none|
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

## createManufacturer

<a id="opIdcreateManufacturer"></a>

`POST /manufacturers`

*Creates a manufacturer*

Creates a new manufacturer

> Body parameter

```json
{
  "type": "object",
  "required": [
    "label"
  ],
  "properties": {
    "label": {
      "type": "string",
      "example": "Apple Inc",
      "x-examples": [
        "Apple Inc"
      ],
      "description": "Label for the manufacturer"
    }
  }
}
```

<h3 id="createmanufacturer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Label for the manufacturer|

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
                  "example": "https://api.nterprise.com/manufacturers/d17542cb-a7a5-408a-9a35-27d863f15d39"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#manufacturer",
          "x-nter-relation": "manufacturers",
          "x-nter-model": "Manufacturer",
          "x-nter-callable": true,
          "description": "A Manufacturer of parts",
          "required": [
            "label",
            "manufacturer_id"
          ],
          "properties": {
            "manufacturer_id": {
              "type": "string",
              "description": "unique id",
              "example": "99ec26f2-fa31-4768-b357-268c708fcda5",
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "label": {
              "type": "string",
              "example": "Apple Inc",
              "x-examples": [
                "Apple Inc"
              ],
              "description": "Label for the manufacturer"
            },
            "slug": {
              "type": "string",
              "example": "apple-inc",
              "x-examples": [
                "apple-inc"
              ],
              "description": "Auto-generated slug for the manufacturer"
            }
          },
          "allOf": [
            {
              "x-ui-hide": true,
              "type": "object",
              "description": "Common Properties to all entities",
              "required": [
                "label"
              ],
              "properties": {
                "label": {
                  "type": "string",
                  "description": "Label for the entity",
                  "example": "primary"
                },
                "slug": {
                  "type": "string",
                  "description": "Slug for the entity (Auto-generated from the label)",
                  "readOnly": true,
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
          ],
          "example": {
            "label": "Apple Inc",
            "manufacturer_id": "003DffD7-Dff3-3E2A-Ae76-26E6C7aE5F7B",
            "slug": "apple-inc",
            "created": "1978-03-10T02:20:23.811Z",
            "updated": "1940-10-01T09:10:03.934Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="createmanufacturer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A manufacturer response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|

<h3 id="createmanufacturer-responseschema">Response Schema</h3>

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

## fetchManufacturerById

<a id="opIdfetchManufacturerById"></a>

`GET /manufacturers/:manufacturer_id`

*Fetches a manufacturer by Id*

Fetch Manufacturer

<h3 id="fetchmanufacturerbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|

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
                  "example": "https://api.nterprise.com/manufacturers/d17542cb-a7a5-408a-9a35-27d863f15d39"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#manufacturer",
          "x-nter-relation": "manufacturers",
          "x-nter-model": "Manufacturer",
          "x-nter-callable": true,
          "description": "A Manufacturer of parts",
          "required": [
            "label",
            "manufacturer_id"
          ],
          "properties": {
            "manufacturer_id": {
              "type": "string",
              "description": "unique id",
              "example": "99ec26f2-fa31-4768-b357-268c708fcda5",
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "label": {
              "type": "string",
              "example": "Apple Inc",
              "x-examples": [
                "Apple Inc"
              ],
              "description": "Label for the manufacturer"
            },
            "slug": {
              "type": "string",
              "example": "apple-inc",
              "x-examples": [
                "apple-inc"
              ],
              "description": "Auto-generated slug for the manufacturer"
            }
          },
          "allOf": [
            {
              "x-ui-hide": true,
              "type": "object",
              "description": "Common Properties to all entities",
              "required": [
                "label"
              ],
              "properties": {
                "label": {
                  "type": "string",
                  "description": "Label for the entity",
                  "example": "primary"
                },
                "slug": {
                  "type": "string",
                  "description": "Slug for the entity (Auto-generated from the label)",
                  "readOnly": true,
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
          ],
          "example": {
            "label": "Apple Inc",
            "manufacturer_id": "003DffD7-Dff3-3E2A-Ae76-26E6C7aE5F7B",
            "slug": "apple-inc",
            "created": "1978-03-10T02:20:23.811Z",
            "updated": "1940-10-01T09:10:03.934Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="fetchmanufacturerbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A manufacturer response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchmanufacturerbyid-responseschema">Response Schema</h3>

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

## updateManufacturer

<a id="opIdupdateManufacturer"></a>

`PUT /manufacturers/:manufacturer_id`

*Updates a manufacturer*

Updates a manufacturer

> Body parameter

```json
{
  "type": "object",
  "required": [
    "label"
  ],
  "properties": {
    "label": {
      "type": "string",
      "example": "Apple Inc",
      "x-examples": [
        "Apple Inc"
      ],
      "description": "Label for the manufacturer"
    }
  }
}
```

<h3 id="updatemanufacturer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|
|label|body|string|true|Label for the manufacturer|

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
                  "example": "https://api.nterprise.com/manufacturers/d17542cb-a7a5-408a-9a35-27d863f15d39"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#manufacturer",
          "x-nter-relation": "manufacturers",
          "x-nter-model": "Manufacturer",
          "x-nter-callable": true,
          "description": "A Manufacturer of parts",
          "required": [
            "label",
            "manufacturer_id"
          ],
          "properties": {
            "manufacturer_id": {
              "type": "string",
              "description": "unique id",
              "example": "99ec26f2-fa31-4768-b357-268c708fcda5",
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "label": {
              "type": "string",
              "example": "Apple Inc",
              "x-examples": [
                "Apple Inc"
              ],
              "description": "Label for the manufacturer"
            },
            "slug": {
              "type": "string",
              "example": "apple-inc",
              "x-examples": [
                "apple-inc"
              ],
              "description": "Auto-generated slug for the manufacturer"
            }
          },
          "allOf": [
            {
              "x-ui-hide": true,
              "type": "object",
              "description": "Common Properties to all entities",
              "required": [
                "label"
              ],
              "properties": {
                "label": {
                  "type": "string",
                  "description": "Label for the entity",
                  "example": "primary"
                },
                "slug": {
                  "type": "string",
                  "description": "Slug for the entity (Auto-generated from the label)",
                  "readOnly": true,
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
          ],
          "example": {
            "label": "Apple Inc",
            "manufacturer_id": "003DffD7-Dff3-3E2A-Ae76-26E6C7aE5F7B",
            "slug": "apple-inc",
            "created": "1978-03-10T02:20:23.811Z",
            "updated": "1940-10-01T09:10:03.934Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="updatemanufacturer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A manufacturer response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="updatemanufacturer-responseschema">Response Schema</h3>

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

## deleteManufacturer

<a id="opIddeleteManufacturer"></a>

`DELETE /manufacturers/:manufacturer_id`

*Deletes a manufacturer*

This will remove the manufacturer from the system

<h3 id="deletemanufacturer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|

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

<h3 id="deletemanufacturer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Manufacturer deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="deletemanufacturer-responseschema">Response Schema</h3>

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

## fetchAllManufacturerParts

<a id="opIdfetchAllManufacturerParts"></a>

`GET /manufacturers/:manufacturer_id/parts`

*Fetches A Page of parts for the manufacturer*

Fetch manufacturer parts

<h3 id="fetchallmanufacturerparts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|
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
|sort|manufacturer|
|sort|-manufacturer|
|sort|part_number|
|sort|-part_number|
|sort|customer|
|sort|-customer|

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

<h3 id="fetchallmanufacturerparts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for contacts|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchallmanufacturerparts-responseschema">Response Schema</h3>

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

## fetchAllManufacturerUnits

<a id="opIdfetchAllManufacturerUnits"></a>

`GET /manufacturers/:manufacturer_id/units`

*Fetches A Page of units for the manufacturer*

Fetch manufacturer units

<h3 id="fetchallmanufacturerunits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manufacturer_id|path|string|true|Id of the manufacturer|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|sort|query|string|false|Sort by field|
|filter[label]|query|string|false|Filter where the label contains this value|
|filter[vendor_id]|query|string|false|Filter where the vendor id is this value|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|label|
|sort|-label|
|sort|created|
|sort|-created|
|sort|updated|
|sort|-updated|
|sort|manufacturer|
|sort|-manufacturer|
|sort|part_unit_number|
|sort|-part_unit_number|
|sort|vendor|
|sort|-vendor|
|sort|customer|
|sort|-customer|

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

<h3 id="fetchallmanufacturerunits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for contacts|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchallmanufacturerunits-responseschema">Response Schema</h3>

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

# Schemas

<h2 id="tocSmanufacturer">Manufacturer</h2>

<a id="schemamanufacturer"></a>

```yaml
label: Apple Inc
manufacturer_id: 003DffD7-Dff3-3E2A-Ae76-26E6C7aE5F7B
slug: apple-inc
created: '1978-03-10T02:20:23.811Z'
updated: '1940-10-01T09:10:03.934Z'

```

*A Manufacturer of parts*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manufacturer_id|string|true|none|unique id|
|label|string|true|none|Label for the manufacturer|
|slug|string|false|none|Auto-generated slug for the manufacturer|

