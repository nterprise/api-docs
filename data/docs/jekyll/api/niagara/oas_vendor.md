---
layout: page
parent: Niagara API
nav_order: 17
title: Vendors
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="vendors">Vendors v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

<h1 id="vendors-vendor">Vendor</h1>

## fetchAllVendor

<a id="opIdfetchAllVendor"></a>

`GET /vendors`

*Fetches A Page of vendor*

Fetch Part

<h3 id="fetchallvendor-parameters">Parameters</h3>

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
        "nter:vendors": {
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
                        "example": "https://api.nterprise.com/vendors/d918d1cd-6a3f-43b5-a8f4-771c9aca4bf1"
                      }
                    }
                  }
                }
              }
            },
            "allOf": [
              {
                "x-id": "#vendor",
                "x-nter-relation": "vendors",
                "x-nter-model": "Vendor",
                "x-nter-callable": true,
                "description": "A Vendor which sells parts",
                "required": [
                  "vendor_id"
                ],
                "properties": {
                  "vendor_id": {
                    "type": "string",
                    "description": "unique id",
                    "example": "3beea89a-3367-4beb-aa43-2aadc0873785",
                    "x-examples": [
                      "3beea89a-3367-4beb-aa43-2aadc0873785"
                    ],
                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                  },
                  "label": {
                    "type": "object",
                    "example": "Micro Center",
                    "x-examples": [
                      "Micro Center"
                    ],
                    "description": "Label for the vendor"
                  },
                  "slug": {
                    "type": "object",
                    "example": "micro-center",
                    "x-examples": [
                      "micro-center"
                    ],
                    "description": "Auto-generated slug for the vendor"
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
                  "vendor_id": "3beea89a-3367-4beb-aa43-2aadc0873785",
                  "label": "Micro Center",
                  "slug": "micro-center",
                  "created": "1941-08-07T21:18:39.275Z",
                  "updated": "1955-03-30T18:46:07.572Z"
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

<h3 id="fetchallvendor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for vendors|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallvendor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:vendors|[allOf]|false|none|none|
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

## createVendor

<a id="opIdcreateVendor"></a>

`POST /vendors`

*Creates a vendor*

Creates a new vendor

> Body parameter

```json
{
  "type": "object",
  "required": [
    "label"
  ],
  "properties": {
    "label": {
      "type": "object",
      "example": "Micro Center",
      "x-examples": [
        "Micro Center"
      ],
      "description": "Label for the vendor"
    }
  }
}
```

<h3 id="createvendor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|object|true|Label for the vendor|

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
                  "example": "https://api.nterprise.com/vendors/d918d1cd-6a3f-43b5-a8f4-771c9aca4bf1"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#vendor",
          "x-nter-relation": "vendors",
          "x-nter-model": "Vendor",
          "x-nter-callable": true,
          "description": "A Vendor which sells parts",
          "required": [
            "vendor_id"
          ],
          "properties": {
            "vendor_id": {
              "type": "string",
              "description": "unique id",
              "example": "3beea89a-3367-4beb-aa43-2aadc0873785",
              "x-examples": [
                "3beea89a-3367-4beb-aa43-2aadc0873785"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "label": {
              "type": "object",
              "example": "Micro Center",
              "x-examples": [
                "Micro Center"
              ],
              "description": "Label for the vendor"
            },
            "slug": {
              "type": "object",
              "example": "micro-center",
              "x-examples": [
                "micro-center"
              ],
              "description": "Auto-generated slug for the vendor"
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
            "vendor_id": "3beea89a-3367-4beb-aa43-2aadc0873785",
            "label": "Micro Center",
            "slug": "micro-center",
            "created": "1941-08-07T21:18:39.275Z",
            "updated": "1955-03-30T18:46:07.572Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="createvendor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A vendor response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|

<h3 id="createvendor-responseschema">Response Schema</h3>

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

## fetchVendorById

<a id="opIdfetchVendorById"></a>

`GET /vendors/:vendor_id`

*Fetches a vendor by Id*

Fetch Vendor

<h3 id="fetchvendorbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vendor_id|path|string|true|Id of the vendor|

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
                  "example": "https://api.nterprise.com/vendors/d918d1cd-6a3f-43b5-a8f4-771c9aca4bf1"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#vendor",
          "x-nter-relation": "vendors",
          "x-nter-model": "Vendor",
          "x-nter-callable": true,
          "description": "A Vendor which sells parts",
          "required": [
            "vendor_id"
          ],
          "properties": {
            "vendor_id": {
              "type": "string",
              "description": "unique id",
              "example": "3beea89a-3367-4beb-aa43-2aadc0873785",
              "x-examples": [
                "3beea89a-3367-4beb-aa43-2aadc0873785"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "label": {
              "type": "object",
              "example": "Micro Center",
              "x-examples": [
                "Micro Center"
              ],
              "description": "Label for the vendor"
            },
            "slug": {
              "type": "object",
              "example": "micro-center",
              "x-examples": [
                "micro-center"
              ],
              "description": "Auto-generated slug for the vendor"
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
            "vendor_id": "3beea89a-3367-4beb-aa43-2aadc0873785",
            "label": "Micro Center",
            "slug": "micro-center",
            "created": "1941-08-07T21:18:39.275Z",
            "updated": "1955-03-30T18:46:07.572Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="fetchvendorbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A vendor response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchvendorbyid-responseschema">Response Schema</h3>

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

## updateVendor

<a id="opIdupdateVendor"></a>

`PUT /vendors/:vendor_id`

*Updates a vendor*

Updates a vendor

> Body parameter

```json
{
  "type": "object",
  "required": [
    "label"
  ],
  "properties": {
    "label": {
      "type": "object",
      "example": "Micro Center",
      "x-examples": [
        "Micro Center"
      ],
      "description": "Label for the vendor"
    }
  }
}
```

<h3 id="updatevendor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vendor_id|path|string|true|Id of the vendor|
|label|body|object|true|Label for the vendor|

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
                  "example": "https://api.nterprise.com/vendors/d918d1cd-6a3f-43b5-a8f4-771c9aca4bf1"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#vendor",
          "x-nter-relation": "vendors",
          "x-nter-model": "Vendor",
          "x-nter-callable": true,
          "description": "A Vendor which sells parts",
          "required": [
            "vendor_id"
          ],
          "properties": {
            "vendor_id": {
              "type": "string",
              "description": "unique id",
              "example": "3beea89a-3367-4beb-aa43-2aadc0873785",
              "x-examples": [
                "3beea89a-3367-4beb-aa43-2aadc0873785"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "label": {
              "type": "object",
              "example": "Micro Center",
              "x-examples": [
                "Micro Center"
              ],
              "description": "Label for the vendor"
            },
            "slug": {
              "type": "object",
              "example": "micro-center",
              "x-examples": [
                "micro-center"
              ],
              "description": "Auto-generated slug for the vendor"
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
            "vendor_id": "3beea89a-3367-4beb-aa43-2aadc0873785",
            "label": "Micro Center",
            "slug": "micro-center",
            "created": "1941-08-07T21:18:39.275Z",
            "updated": "1955-03-30T18:46:07.572Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="updatevendor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A vendor response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="updatevendor-responseschema">Response Schema</h3>

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

## deleteVendor

<a id="opIddeleteVendor"></a>

`DELETE /vendors/:vendor_id`

*Deletes a vendor*

This will remove the vendor from the system

<h3 id="deletevendor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vendor_id|path|string|true|Id of the vendor|

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

<h3 id="deletevendor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Vendor deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="deletevendor-responseschema">Response Schema</h3>

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

## fetchAllVendorParts

<a id="opIdfetchAllVendorParts"></a>

`GET /vendors/:vendor_id/parts`

*Fetches A Page of parts for the vendor*

Fetch vendor parts

<h3 id="fetchallvendorparts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vendor_id|path|string|true|Id of the vendor|
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

<h3 id="fetchallvendorparts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for contacts|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchallvendorparts-responseschema">Response Schema</h3>

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

## fetchAllVendorUnits

<a id="opIdfetchAllVendorUnits"></a>

`GET /vendors/:vendor_id/units`

*Fetches A Page of units for the vendor*

Fetch vendor units

<h3 id="fetchallvendorunits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vendor_id|path|string|true|Id of the vendor|
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

<h3 id="fetchallvendorunits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for contacts|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchallvendorunits-responseschema">Response Schema</h3>

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

<h2 id="tocSvendor">Vendor</h2>

<a id="schemavendor"></a>

```yaml
vendor_id: 3beea89a-3367-4beb-aa43-2aadc0873785
label: Micro Center
slug: micro-center
created: '1941-08-07T21:18:39.275Z'
updated: '1955-03-30T18:46:07.572Z'

```

*A Vendor which sells parts*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vendor_id|string|true|none|unique id|
|label|object|false|none|Label for the vendor|
|slug|object|false|none|Auto-generated slug for the vendor|

