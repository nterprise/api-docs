---
layout: page
nav_order: 2
title: Customer accessible API
---

<h1 id="customer-accessible-api">Customer accessible API</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Customer API for FTM and CIMS

<h1 id="customer-accessible-api-customer">Customer</h1>

## Operations

### GET /customers/{customer_id} - *Fetches information about a customer*

<a id="opIdfetchCustomerById"></a>

*Fetches information about a customer*

Fetches information about a customer the account has access too

<h3 id="fetchcustomerbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|number(int32)|true|The id of the customer to retrieve|

<!-- START responses.def -->

<h3 id="fetchcustomerbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Details about the customer|Inline|

> Example responses

> 200 Response

```json
{
  "allOf": [
    {
      "description": "A Customer",
      "type": "object",
      "required": [
        "cName"
      ],
      "properties": {
        "customer_id": {
          "description": "The Customer Id",
          "readOnly": true,
          "type": "string"
        },
        "cName": {
          "description": "The name of the customer",
          "type": "string",
          "example": "Zones",
          "readOnly": true
        },
        "total_projects": {
          "description": "Total Projects for the customer",
          "type": "number",
          "readOnly": true,
          "minimum": 0,
          "example": 42
        },
        "total_sites": {
          "description": "Total Sites for the customer",
          "type": "number",
          "readOnly": true,
          "minimum": 0,
          "example": 84
        }
      }
    },
    {
      "type": "object",
      "properties": {
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "self": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "href": {
                  "type": "string",
                  "format": "url",
                  "readOnly": true,
                  "example": "https://api.nterprise.com/{entity}/{entity_id}"
                }
              }
            }
          }
        }
      }
    }
  ]
}
```

<h3 id="fetchcustomerbyid-responseschema">Response Schema</h3>

<!-- END responses.def -->

### GET /customers/ - *List all customers*

<a id="opIdfetchAllCustomers"></a>

*List all customers*

Fetches all the account has access too

<h3 id="fetchallcustomers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|

<!-- START responses.def -->

<h3 id="fetchallcustomers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of customers|Inline|

> Example responses

> 200 Response

```json
{
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "customers": {
          "type": "array",
          "items": {
            "type": "object",
            "allOf": [
              {
                "description": "A Customer",
                "type": "object",
                "required": [
                  "cName"
                ],
                "properties": {
                  "customer_id": {
                    "description": "The Customer Id",
                    "readOnly": true,
                    "type": "string"
                  },
                  "cName": {
                    "description": "The name of the customer",
                    "type": "string",
                    "example": "Zones",
                    "readOnly": true
                  },
                  "total_projects": {
                    "description": "Total Projects for the customer",
                    "type": "number",
                    "readOnly": true,
                    "minimum": 0,
                    "example": 42
                  },
                  "total_sites": {
                    "description": "Total Sites for the customer",
                    "type": "number",
                    "readOnly": true,
                    "minimum": 0,
                    "example": 84
                  }
                }
              },
              {
                "type": "object",
                "properties": {
                  "_links": {
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "self": {
                        "type": "object",
                        "readOnly": true,
                        "properties": {
                          "href": {
                            "type": "string",
                            "format": "url",
                            "readOnly": true,
                            "example": "https://api.nterprise.com/{entity}/{entity_id}"
                          }
                        }
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  },
  "allOf": [
    {
      "type": "object",
      "properties": {
        "total_count": {
          "type": "number",
          "readOnly": true,
          "minimum": 0,
          "example": 32
        },
        "per_page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "next": {
              "type": "object",
              "description": "Link to the next page",
              "properties": {
                "href": {
                  "type": "string",
                  "format": "url",
                  "example": "https://api.neterprise.com/foo?page=2&per_page=50"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "type": "object",
          "properties": {
            "_links": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "self": {
                  "type": "object",
                  "readOnly": true,
                  "properties": {
                    "href": {
                      "type": "string",
                      "format": "url",
                      "readOnly": true,
                      "example": "https://api.nterprise.com/{entity}/{entity_id}"
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  ]
}
```

<h3 id="fetchallcustomers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; _embedded|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customers|[allOf]|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|A Customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customer_id|string|false|read-only|The Customer Id|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cName|string|true|read-only|The name of the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_projects|number|false|read-only|Total Projects for the customer|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_sites|number|false|read-only|Total Sites for the customer|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _links|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(url)|false|read-only|none|

<!-- END responses.def -->

### GET /customers/{customer_id}/projects - *Fetches all projects for a customer*

<a id="opIdfetchCustomerProjects"></a>

*Fetches all projects for a customer*

List all projects for a customer

<h3 id="fetchcustomerprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|customer_id|path|number(int32)|true|The id of the customer to retrieve|
|sort|query|string|false|Sort by field|

<!-- START responses.def -->

<h3 id="fetchcustomerprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of projects|Inline|

> Example responses

> 200 Response

```json
{
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "projects": {
          "type": "array",
          "items": {
            "type": "object",
            "allOf": [
              {
                "type": "object",
                "description": "A Project",
                "required": [
                  "pLabel"
                ],
                "properties": {
                  "project_id": {
                    "description": "The Project Id",
                    "readOnly": true,
                    "type": "string"
                  },
                  "pLabel": {
                    "description": "The name of the project",
                    "type": "string",
                    "example": "Zones",
                    "readOnly": true
                  },
                  "pStart_dt": {
                    "description": "Project Start date",
                    "type": "string",
                    "nullable": true,
                    "format": "date-time",
                    "readOnly": true
                  },
                  "pEnd_dt": {
                    "description": "Project end date",
                    "type": "string",
                    "nullable": true,
                    "format": "date-time",
                    "readOnly": true
                  },
                  "pDesc": {
                    "type": "string",
                    "description": "Project Description",
                    "readOnly": true
                  },
                  "total_work_orders": {
                    "description": "Total work orders for the project",
                    "type": "number",
                    "readOnly": true,
                    "minimum": 0
                  },
                  "total_work_orders_status": {
                    "description": "Work order counts by status",
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "active": {
                        "type": "number",
                        "example": 10
                      },
                      "pending": {
                        "type": "number",
                        "example": 10
                      },
                      "complete": {
                        "type": "number",
                        "example": 5
                      }
                    }
                  }
                }
              },
              {
                "type": "object",
                "properties": {
                  "_links": {
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "self": {
                        "type": "object",
                        "readOnly": true,
                        "properties": {
                          "href": {
                            "type": "string",
                            "format": "url",
                            "readOnly": true,
                            "example": "https://api.nterprise.com/{entity}/{entity_id}"
                          }
                        }
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  },
  "allOf": [
    {
      "type": "object",
      "properties": {
        "total_count": {
          "type": "number",
          "readOnly": true,
          "minimum": 0,
          "example": 32
        },
        "per_page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "next": {
              "type": "object",
              "description": "Link to the next page",
              "properties": {
                "href": {
                  "type": "string",
                  "format": "url",
                  "example": "https://api.neterprise.com/foo?page=2&per_page=50"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "type": "object",
          "properties": {
            "_links": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "self": {
                  "type": "object",
                  "readOnly": true,
                  "properties": {
                    "href": {
                      "type": "string",
                      "format": "url",
                      "readOnly": true,
                      "example": "https://api.nterprise.com/{entity}/{entity_id}"
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  ]
}
```

<h3 id="fetchcustomerprojects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; _embedded|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; projects|[allOf]|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|A Project|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; project_id|string|false|read-only|The Project Id|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pLabel|string|true|read-only|The name of the project|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pStart_dt|string(date-time)¦null|false|read-only|Project Start date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pEnd_dt|string(date-time)¦null|false|read-only|Project end date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pDesc|string|false|read-only|Project Description|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_work_orders|number|false|read-only|Total work orders for the project|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_work_orders_status|object|false|read-only|Work order counts by status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; active|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pending|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; complete|number|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _links|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(url)|false|read-only|none|

<!-- END responses.def -->

### GET /customers/{customer_id}/sites - *Fetches all sites for a customer*

<a id="opIdfetchCustomerSites"></a>

*Fetches all sites for a customer*

List all sites for a customer

<h3 id="fetchcustomersites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|sort|query|string|false|Sort by field|
|filter[site_group]|query|string|false|Filter where the site group is this value|
|filter[county]|query|string|false|Filter where the county is this value|
|filter[state]|query|string|false|Filter where the state is this value|

<!-- START responses.def -->

<h3 id="fetchcustomersites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of sites|Inline|

> Example responses

> 200 Response

```json
{
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "projects": {
          "type": "array",
          "items": {
            "type": "object",
            "allOf": [
              {
                "description": "A Site",
                "type": "object",
                "required": [
                  "siteName"
                ],
                "properties": {
                  "project_id": {
                    "description": "The Project Id",
                    "readOnly": true,
                    "type": "string"
                  },
                  "customer_id": {
                    "description": "The Customer Id",
                    "readOnly": true
                  },
                  "siteName": {
                    "description": "The name of the site",
                    "type": "string",
                    "example": "Site 196"
                  },
                  "siteLabel": {
                    "description": "The label of the site",
                    "type": "string",
                    "example": "Zones"
                  },
                  "siteGroup": {
                    "description": "The group name of the site",
                    "type": "string",
                    "example": "Group A"
                  },
                  "addr1": {
                    "description": "The address",
                    "type": "string",
                    "example": "Town Squire Pl"
                  },
                  "addr2": {
                    "description": "The address",
                    "type": "string",
                    "example": "329 Glenmont Rd"
                  },
                  "city": {
                    "description": "The city",
                    "type": "string",
                    "example": "Glenmont"
                  },
                  "state": {
                    "description": "The state",
                    "type": "string",
                    "example": "NY"
                  },
                  "zip": {
                    "description": "The zip code",
                    "type": "string",
                    "example": "12345"
                  },
                  "country": {
                    "description": "The country",
                    "type": "string",
                    "example": "US"
                  },
                  "lng": {
                    "description": "The longitude coordinates",
                    "type": "number",
                    "example": -73.7831,
                    "minimum": -180,
                    "maximum": 180
                  },
                  "lat": {
                    "description": "The latitude coordinates",
                    "type": "number",
                    "example": 42.6014,
                    "minimum": -180,
                    "maximum": 180
                  },
                  "sTZ": {
                    "description": "Standard time zone",
                    "type": "string",
                    "example": "America/New_York"
                  },
                  "contactName": {
                    "description": "Name of the site contact",
                    "type": "string",
                    "example": "Carlo DiLorenzo"
                  },
                  "contactPhone": {
                    "description": "Phone number of the site contact",
                    "type": "string",
                    "example": "(555) 555-5555 "
                  },
                  "contactEmail": {
                    "description": "Email of the site contact",
                    "type": "string",
                    "example": "(555) 555-5555 "
                  }
                }
              },
              {
                "type": "object",
                "properties": {
                  "_links": {
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "self": {
                        "type": "object",
                        "readOnly": true,
                        "properties": {
                          "href": {
                            "type": "string",
                            "format": "url",
                            "readOnly": true,
                            "example": "https://api.nterprise.com/{entity}/{entity_id}"
                          }
                        }
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  },
  "allOf": [
    {
      "type": "object",
      "properties": {
        "total_count": {
          "type": "number",
          "readOnly": true,
          "minimum": 0,
          "example": 32
        },
        "per_page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "next": {
              "type": "object",
              "description": "Link to the next page",
              "properties": {
                "href": {
                  "type": "string",
                  "format": "url",
                  "example": "https://api.neterprise.com/foo?page=2&per_page=50"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "type": "object",
          "properties": {
            "_links": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "self": {
                  "type": "object",
                  "readOnly": true,
                  "properties": {
                    "href": {
                      "type": "string",
                      "format": "url",
                      "readOnly": true,
                      "example": "https://api.nterprise.com/{entity}/{entity_id}"
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  ]
}
```

<h3 id="fetchcustomersites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; _embedded|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; projects|[allOf]|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|A Site|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; project_id|string|false|read-only|The Project Id|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customer_id|any|false|read-only|The Customer Id|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; siteName|string|true|none|The name of the site|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; siteLabel|string|false|none|The label of the site|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; siteGroup|string|false|none|The group name of the site|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; addr1|string|false|none|The address|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; addr2|string|false|none|The address|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; city|string|false|none|The city|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; state|string|false|none|The state|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; zip|string|false|none|The zip code|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; country|string|false|none|The country|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lng|number|false|none|The longitude coordinates|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lat|number|false|none|The latitude coordinates|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sTZ|string|false|none|Standard time zone|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; contactName|string|false|none|Name of the site contact|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; contactPhone|string|false|none|Phone number of the site contact|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; contactEmail|string|false|none|Email of the site contact|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _links|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(url)|false|read-only|none|

<!-- END responses.def -->

<h1 id="customer-accessible-api-project">Project</h1>

## Operations

### GET /projects/ - *List all projects*

<a id="opIdfetchAllProjects"></a>

*List all projects*

Fetches all the account has access too

<h3 id="fetchallprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|filter[customer_id]|query|string|false|Filter where the customer id is this value|
|sort|query|string|false|Sort by field|

<!-- START responses.def -->

<h3 id="fetchallprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of projects|Inline|

> Example responses

> 200 Response

```json
{
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "projects": {
          "type": "array",
          "items": {
            "type": "object",
            "allOf": [
              {
                "type": "object",
                "description": "A Project",
                "required": [
                  "pLabel"
                ],
                "properties": {
                  "project_id": {
                    "description": "The Project Id",
                    "readOnly": true,
                    "type": "string"
                  },
                  "pLabel": {
                    "description": "The name of the project",
                    "type": "string",
                    "example": "Zones",
                    "readOnly": true
                  },
                  "pStart_dt": {
                    "description": "Project Start date",
                    "type": "string",
                    "nullable": true,
                    "format": "date-time",
                    "readOnly": true
                  },
                  "pEnd_dt": {
                    "description": "Project end date",
                    "type": "string",
                    "nullable": true,
                    "format": "date-time",
                    "readOnly": true
                  },
                  "pDesc": {
                    "type": "string",
                    "description": "Project Description",
                    "readOnly": true
                  },
                  "total_work_orders": {
                    "description": "Total work orders for the project",
                    "type": "number",
                    "readOnly": true,
                    "minimum": 0
                  },
                  "total_work_orders_status": {
                    "description": "Work order counts by status",
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "active": {
                        "type": "number",
                        "example": 10
                      },
                      "pending": {
                        "type": "number",
                        "example": 10
                      },
                      "complete": {
                        "type": "number",
                        "example": 5
                      }
                    }
                  }
                }
              },
              {
                "type": "object",
                "properties": {
                  "_links": {
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "self": {
                        "type": "object",
                        "readOnly": true,
                        "properties": {
                          "href": {
                            "type": "string",
                            "format": "url",
                            "readOnly": true,
                            "example": "https://api.nterprise.com/{entity}/{entity_id}"
                          }
                        }
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  },
  "allOf": [
    {
      "type": "object",
      "properties": {
        "total_count": {
          "type": "number",
          "readOnly": true,
          "minimum": 0,
          "example": 32
        },
        "per_page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "next": {
              "type": "object",
              "description": "Link to the next page",
              "properties": {
                "href": {
                  "type": "string",
                  "format": "url",
                  "example": "https://api.neterprise.com/foo?page=2&per_page=50"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "type": "object",
          "properties": {
            "_links": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "self": {
                  "type": "object",
                  "readOnly": true,
                  "properties": {
                    "href": {
                      "type": "string",
                      "format": "url",
                      "readOnly": true,
                      "example": "https://api.nterprise.com/{entity}/{entity_id}"
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  ]
}
```

<h3 id="fetchallprojects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; _embedded|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; projects|[allOf]|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|A Project|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; project_id|string|false|read-only|The Project Id|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pLabel|string|true|read-only|The name of the project|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pStart_dt|string(date-time)¦null|false|read-only|Project Start date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pEnd_dt|string(date-time)¦null|false|read-only|Project end date|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pDesc|string|false|read-only|Project Description|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_work_orders|number|false|read-only|Total work orders for the project|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_work_orders_status|object|false|read-only|Work order counts by status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; active|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pending|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; complete|number|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _links|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(url)|false|read-only|none|

<!-- END responses.def -->

### GET /projects/{project_id} - *Fetch Project*

<a id="opIdfetchProjectById"></a>

*Fetch Project*

Fetches information about a project the account has access too

<h3 id="fetchprojectbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The id of the project to retrieve|

<!-- START responses.def -->

<h3 id="fetchprojectbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Details about the project|Inline|

> Example responses

> 200 Response

```json
{
  "allOf": [
    {
      "type": "object",
      "description": "A Project",
      "required": [
        "pLabel"
      ],
      "properties": {
        "project_id": {
          "description": "The Project Id",
          "readOnly": true,
          "type": "string"
        },
        "pLabel": {
          "description": "The name of the project",
          "type": "string",
          "example": "Zones",
          "readOnly": true
        },
        "pStart_dt": {
          "description": "Project Start date",
          "type": "string",
          "nullable": true,
          "format": "date-time",
          "readOnly": true
        },
        "pEnd_dt": {
          "description": "Project end date",
          "type": "string",
          "nullable": true,
          "format": "date-time",
          "readOnly": true
        },
        "pDesc": {
          "type": "string",
          "description": "Project Description",
          "readOnly": true
        },
        "total_work_orders": {
          "description": "Total work orders for the project",
          "type": "number",
          "readOnly": true,
          "minimum": 0
        },
        "total_work_orders_status": {
          "description": "Work order counts by status",
          "type": "object",
          "readOnly": true,
          "properties": {
            "active": {
              "type": "number",
              "example": 10
            },
            "pending": {
              "type": "number",
              "example": 10
            },
            "complete": {
              "type": "number",
              "example": 5
            }
          }
        }
      }
    },
    {
      "type": "object",
      "properties": {
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "self": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "href": {
                  "type": "string",
                  "format": "url",
                  "readOnly": true,
                  "example": "https://api.nterprise.com/{entity}/{entity_id}"
                }
              }
            }
          }
        }
      }
    }
  ]
}
```

<h3 id="fetchprojectbyid-responseschema">Response Schema</h3>

<!-- END responses.def -->

### GET /projects/{project_id}/inventory - *Fetch project inventory*

<a id="opIdfetchAllProjectInventory"></a>

*Fetch project inventory*

Fetches all the inventory for a project

<h3 id="fetchallprojectinventory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|project_id|path|string|true|The id of the project to retrieve|
|filter[serial_number]|query|string|false|Filter where the serial number is this value|
|filter[part_number]|query|string|false|Filter where the part number is this value|
|filter[location_code]|query|string|false|Filter where the location code is this value|
|filter[asset_tag]|query|string|false|Filter where the asset tag is this value|

<!-- START responses.def -->

<h3 id="fetchallprojectinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of inventory|Inline|

> Example responses

> 200 Response

```json
{
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "inventory": {
          "type": "array",
          "items": {
            "type": "object",
            "allOf": [
              {
                "type": "object",
                "description": "A Listing of inventory",
                "properties": {
                  "inventory_id": {
                    "type": "string",
                    "description": "inventory id, not required for \"Q\" type inventory",
                    "readOnly": true
                  },
                  "project_id": {
                    "type": "string",
                    "description": "project id of inventory",
                    "readOnly": true
                  },
                  "PartNo": {
                    "type": "string",
                    "description": "product referenced part number",
                    "readOnly": true
                  },
                  "InventoryType": {
                    "type": "string",
                    "description": "inventory type, \"Q\" ( quantity ) or \"S\" (serialized)",
                    "enum": [
                      "Q",
                      "S"
                    ],
                    "readOnly": true
                  },
                  "Status": {
                    "type": "string",
                    "description": "inventory status",
                    "readOnly": true
                  },
                  "Quantity": {
                    "type": "number",
                    "description": "inventory count, will be \"1\" for S type inventory",
                    "readOnly": true
                  },
                  "SerialNumber": {
                    "type": "string",
                    "description": "inventory serial number, will be empty for Q type inventory"
                  }
                }
              },
              {
                "type": "object",
                "properties": {
                  "_links": {
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "self": {
                        "type": "object",
                        "readOnly": true,
                        "properties": {
                          "href": {
                            "type": "string",
                            "format": "url",
                            "readOnly": true,
                            "example": "https://api.nterprise.com/{entity}/{entity_id}"
                          }
                        }
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  },
  "allOf": [
    {
      "type": "object",
      "properties": {
        "total_count": {
          "type": "number",
          "readOnly": true,
          "minimum": 0,
          "example": 32
        },
        "per_page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "next": {
              "type": "object",
              "description": "Link to the next page",
              "properties": {
                "href": {
                  "type": "string",
                  "format": "url",
                  "example": "https://api.neterprise.com/foo?page=2&per_page=50"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "type": "object",
          "properties": {
            "_links": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "self": {
                  "type": "object",
                  "readOnly": true,
                  "properties": {
                    "href": {
                      "type": "string",
                      "format": "url",
                      "readOnly": true,
                      "example": "https://api.nterprise.com/{entity}/{entity_id}"
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  ]
}
```

<h3 id="fetchallprojectinventory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; _embedded|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; inventory|[allOf]|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|A Listing of inventory|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; inventory_id|string|false|read-only|inventory id, not required for "Q" type inventory|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; project_id|string|false|read-only|project id of inventory|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PartNo|string|false|read-only|product referenced part number|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; InventoryType|string|false|read-only|inventory type, "Q" ( quantity ) or "S" (serialized)|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Status|string|false|read-only|inventory status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantity|number|false|read-only|inventory count, will be "1" for S type inventory|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SerialNumber|string|false|none|inventory serial number, will be empty for Q type inventory|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _links|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(url)|false|read-only|none|

<!-- END responses.def -->

### GET /projects/{project_id}/inventory/{inventory_id} - *Fetch inventory for project*

<a id="opIdfetchProjectInventory"></a>

*Fetch inventory for project*

Fetches all the inventory for a project

<h3 id="fetchprojectinventory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|project_id|path|string|true|The id of the project to retrieve|
|inventory_id|path|string|true|The id of the inventory to retrieve|

<!-- START responses.def -->

<h3 id="fetchprojectinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Details about the project|Inline|

> Example responses

> 200 Response

```json
{
  "allOf": [
    {
      "type": "object",
      "description": "A Listing of inventory",
      "properties": {
        "inventory_id": {
          "type": "string",
          "description": "inventory id, not required for \"Q\" type inventory",
          "readOnly": true
        },
        "project_id": {
          "type": "string",
          "description": "project id of inventory",
          "readOnly": true
        },
        "PartNo": {
          "type": "string",
          "description": "product referenced part number",
          "readOnly": true
        },
        "InventoryType": {
          "type": "string",
          "description": "inventory type, \"Q\" ( quantity ) or \"S\" (serialized)",
          "enum": [
            "Q",
            "S"
          ],
          "readOnly": true
        },
        "Status": {
          "type": "string",
          "description": "inventory status",
          "readOnly": true
        },
        "Quantity": {
          "type": "number",
          "description": "inventory count, will be \"1\" for S type inventory",
          "readOnly": true
        },
        "SerialNumber": {
          "type": "string",
          "description": "inventory serial number, will be empty for Q type inventory"
        }
      }
    },
    {
      "type": "object",
      "properties": {
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "self": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "href": {
                  "type": "string",
                  "format": "url",
                  "readOnly": true,
                  "example": "https://api.nterprise.com/{entity}/{entity_id}"
                }
              }
            }
          }
        }
      }
    }
  ]
}
```

<h3 id="fetchprojectinventory-responseschema">Response Schema</h3>

<!-- END responses.def -->

### GET /projects/{project_id}/products - *Fetches projects products*

<a id="opIdfetchProjectProducts"></a>

*Fetches projects products*

Fetches all the products for a project

<h3 id="fetchprojectproducts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|project_id|path|string|true|The id of the project to retrieve|

<!-- START responses.def -->

<h3 id="fetchprojectproducts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of products|Inline|

> Example responses

> 200 Response

```json
{
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "projects": {
          "type": "array",
          "items": {
            "type": "object",
            "allOf": [
              {
                "description": "A product",
                "type": "object",
                "required": [
                  "ProductType"
                ],
                "properties": {
                  "project_id": {
                    "description": "The Project Id",
                    "readOnly": true,
                    "type": "string"
                  },
                  "product_id": {
                    "description": "The Product Id",
                    "readOnly": true,
                    "type": "string"
                  },
                  "ProductType": {
                    "description": "The product type",
                    "type": "string",
                    "example": "Printer Accessory"
                  },
                  "ProductName": {
                    "description": "The product name",
                    "type": "string",
                    "example": "Face down exit assembly"
                  },
                  "AltPartNo": {
                    "description": "Alternate Part Number",
                    "type": "string",
                    "example": "0040X1027"
                  },
                  "PartNo": {
                    "description": "Part Number",
                    "type": "string",
                    "example": "0040X1027"
                  },
                  "TrackingType": {
                    "description": "Tracking type",
                    "type": "string",
                    "example": "Face down exit assembly"
                  },
                  "total_inventory": {
                    "description": "Total Inventory",
                    "type": "number",
                    "minimum": 0
                  },
                  "total_inventory_status": {
                    "description": "Total Inventory",
                    "type": "string",
                    "example": "Face down exit assembly"
                  }
                }
              },
              {
                "type": "object",
                "properties": {
                  "_links": {
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "self": {
                        "type": "object",
                        "readOnly": true,
                        "properties": {
                          "href": {
                            "type": "string",
                            "format": "url",
                            "readOnly": true,
                            "example": "https://api.nterprise.com/{entity}/{entity_id}"
                          }
                        }
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  },
  "allOf": [
    {
      "type": "object",
      "properties": {
        "total_count": {
          "type": "number",
          "readOnly": true,
          "minimum": 0,
          "example": 32
        },
        "per_page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "next": {
              "type": "object",
              "description": "Link to the next page",
              "properties": {
                "href": {
                  "type": "string",
                  "format": "url",
                  "example": "https://api.neterprise.com/foo?page=2&per_page=50"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "type": "object",
          "properties": {
            "_links": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "self": {
                  "type": "object",
                  "readOnly": true,
                  "properties": {
                    "href": {
                      "type": "string",
                      "format": "url",
                      "readOnly": true,
                      "example": "https://api.nterprise.com/{entity}/{entity_id}"
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  ]
}
```

<h3 id="fetchprojectproducts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; _embedded|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; projects|[allOf]|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|A product|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; project_id|string|false|read-only|The Project Id|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; product_id|string|false|read-only|The Product Id|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ProductType|string|true|none|The product type|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ProductName|string|false|none|The product name|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AltPartNo|string|false|none|Alternate Part Number|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PartNo|string|false|none|Part Number|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TrackingType|string|false|none|Tracking type|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_inventory|number|false|none|Total Inventory|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total_inventory_status|string|false|none|Total Inventory|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _links|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(url)|false|read-only|none|

<!-- END responses.def -->

### GET /projects/{project_id}/kits/{kit_id} - *Fetch project kit*

<a id="opIdfetchProjectKit"></a>

*Fetch project kit*

Fetches all the kit for a project

<h3 id="fetchprojectkit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|project_id|path|string|true|The id of the project to retrieve|
|kit_id|path|string|true|The id of the kit to retrieve|

<!-- START responses.def -->

<h3 id="fetchprojectkit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Details about the kit|Inline|

> Example responses

> 200 Response

```json
{
  "allOf": [
    {
      "type": "object",
      "description": "A collection of products or inventory",
      "properties": {
        "project_id": {
          "description": "The Project Id",
          "readOnly": true,
          "type": "string"
        },
        "kit_id": {
          "type": "string",
          "description": "Kit definition id",
          "readOnly": true
        },
        "KitName": {
          "type": "string",
          "description": "Kit name",
          "readOnly": true
        },
        "KitType": {
          "type": "string",
          "description": "Kit Type ( P or C )",
          "enum": [
            "P",
            "C"
          ],
          "readOnly": true
        },
        "MainPartNo": {
          "type": "string",
          "description": "Kit referenced Part Number, will be empty for KitType = 'P'",
          "readOnly": true
        }
      }
    }
  ]
}
```

<h3 id="fetchprojectkit-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; project_id|string|false|read-only|The Project Id|
|&nbsp;&nbsp;&nbsp;&nbsp; kit_id|string|false|read-only|Kit definition id|
|&nbsp;&nbsp;&nbsp;&nbsp; KitName|string|false|read-only|Kit name|
|&nbsp;&nbsp;&nbsp;&nbsp; KitType|string|false|read-only|Kit Type ( P or C )|
|&nbsp;&nbsp;&nbsp;&nbsp; MainPartNo|string|false|read-only|Kit referenced Part Number, will be empty for KitType = 'P'|

<!-- END responses.def -->

### GET /projects/{project_id}/products/{product_id} - *Fetches products for a project*

<a id="opIdfetchProjectProduct"></a>

*Fetches products for a project*

Fetches all the product for a project

<h3 id="fetchprojectproduct-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|project_id|path|string|true|The id of the project to retrieve|
|product_id|path|string|true|The id of the product to retrieve|

<!-- START responses.def -->

<h3 id="fetchprojectproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Details about the product|Inline|

> Example responses

> 200 Response

```json
{
  "allOf": [
    {
      "description": "A product",
      "type": "object",
      "required": [
        "ProductType"
      ],
      "properties": {
        "project_id": {
          "description": "The Project Id",
          "readOnly": true,
          "type": "string"
        },
        "product_id": {
          "description": "The Product Id",
          "readOnly": true,
          "type": "string"
        },
        "ProductType": {
          "description": "The product type",
          "type": "string",
          "example": "Printer Accessory"
        },
        "ProductName": {
          "description": "The product name",
          "type": "string",
          "example": "Face down exit assembly"
        },
        "AltPartNo": {
          "description": "Alternate Part Number",
          "type": "string",
          "example": "0040X1027"
        },
        "PartNo": {
          "description": "Part Number",
          "type": "string",
          "example": "0040X1027"
        },
        "TrackingType": {
          "description": "Tracking type",
          "type": "string",
          "example": "Face down exit assembly"
        },
        "total_inventory": {
          "description": "Total Inventory",
          "type": "number",
          "minimum": 0
        },
        "total_inventory_status": {
          "description": "Total Inventory",
          "type": "string",
          "example": "Face down exit assembly"
        }
      }
    }
  ]
}
```

<h3 id="fetchprojectproduct-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; project_id|string|false|read-only|The Project Id|
|&nbsp;&nbsp;&nbsp;&nbsp; product_id|string|false|read-only|The Product Id|
|&nbsp;&nbsp;&nbsp;&nbsp; ProductType|string|true|none|The product type|
|&nbsp;&nbsp;&nbsp;&nbsp; ProductName|string|false|none|The product name|
|&nbsp;&nbsp;&nbsp;&nbsp; AltPartNo|string|false|none|Alternate Part Number|
|&nbsp;&nbsp;&nbsp;&nbsp; PartNo|string|false|none|Part Number|
|&nbsp;&nbsp;&nbsp;&nbsp; TrackingType|string|false|none|Tracking type|
|&nbsp;&nbsp;&nbsp;&nbsp; total_inventory|number|false|none|Total Inventory|
|&nbsp;&nbsp;&nbsp;&nbsp; total_inventory_status|string|false|none|Total Inventory|

<!-- END responses.def -->

<h1 id="customer-accessible-api-site">Site</h1>

## Operations

### GET /sites/ - *List all sites*

<a id="opIdfetchAllSites"></a>

*List all sites*

Fetches all the sites the account has access too

<h3 id="fetchallsites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|sort|query|string|false|Sort by field|
|filter[customer_id]|query|string|false|Filter where the customer id is this value|
|filter[project_id]|query|string|false|Filter where the project id is this value|
|filter[site_group]|query|string|false|Filter where the site group is this value|
|filter[county]|query|string|false|Filter where the county is this value|
|filter[state]|query|string|false|Filter where the state is this value|

<!-- START responses.def -->

<h3 id="fetchallsites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of sites|Inline|

> Example responses

> 200 Response

```json
{
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "projects": {
          "type": "array",
          "items": {
            "type": "object",
            "allOf": [
              {
                "description": "A Site",
                "type": "object",
                "required": [
                  "siteName"
                ],
                "properties": {
                  "project_id": {
                    "description": "The Project Id",
                    "readOnly": true,
                    "type": "string"
                  },
                  "customer_id": {
                    "description": "The Customer Id",
                    "readOnly": true
                  },
                  "siteName": {
                    "description": "The name of the site",
                    "type": "string",
                    "example": "Site 196"
                  },
                  "siteLabel": {
                    "description": "The label of the site",
                    "type": "string",
                    "example": "Zones"
                  },
                  "siteGroup": {
                    "description": "The group name of the site",
                    "type": "string",
                    "example": "Group A"
                  },
                  "addr1": {
                    "description": "The address",
                    "type": "string",
                    "example": "Town Squire Pl"
                  },
                  "addr2": {
                    "description": "The address",
                    "type": "string",
                    "example": "329 Glenmont Rd"
                  },
                  "city": {
                    "description": "The city",
                    "type": "string",
                    "example": "Glenmont"
                  },
                  "state": {
                    "description": "The state",
                    "type": "string",
                    "example": "NY"
                  },
                  "zip": {
                    "description": "The zip code",
                    "type": "string",
                    "example": "12345"
                  },
                  "country": {
                    "description": "The country",
                    "type": "string",
                    "example": "US"
                  },
                  "lng": {
                    "description": "The longitude coordinates",
                    "type": "number",
                    "example": -73.7831,
                    "minimum": -180,
                    "maximum": 180
                  },
                  "lat": {
                    "description": "The latitude coordinates",
                    "type": "number",
                    "example": 42.6014,
                    "minimum": -180,
                    "maximum": 180
                  },
                  "sTZ": {
                    "description": "Standard time zone",
                    "type": "string",
                    "example": "America/New_York"
                  },
                  "contactName": {
                    "description": "Name of the site contact",
                    "type": "string",
                    "example": "Carlo DiLorenzo"
                  },
                  "contactPhone": {
                    "description": "Phone number of the site contact",
                    "type": "string",
                    "example": "(555) 555-5555 "
                  },
                  "contactEmail": {
                    "description": "Email of the site contact",
                    "type": "string",
                    "example": "(555) 555-5555 "
                  }
                }
              },
              {
                "type": "object",
                "properties": {
                  "_links": {
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "self": {
                        "type": "object",
                        "readOnly": true,
                        "properties": {
                          "href": {
                            "type": "string",
                            "format": "url",
                            "readOnly": true,
                            "example": "https://api.nterprise.com/{entity}/{entity_id}"
                          }
                        }
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  },
  "allOf": [
    {
      "type": "object",
      "properties": {
        "total_count": {
          "type": "number",
          "readOnly": true,
          "minimum": 0,
          "example": 32
        },
        "per_page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "next": {
              "type": "object",
              "description": "Link to the next page",
              "properties": {
                "href": {
                  "type": "string",
                  "format": "url",
                  "example": "https://api.neterprise.com/foo?page=2&per_page=50"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "type": "object",
          "properties": {
            "_links": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "self": {
                  "type": "object",
                  "readOnly": true,
                  "properties": {
                    "href": {
                      "type": "string",
                      "format": "url",
                      "readOnly": true,
                      "example": "https://api.nterprise.com/{entity}/{entity_id}"
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  ]
}
```

<h3 id="fetchallsites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; _embedded|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; projects|[allOf]|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|A Site|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; project_id|string|false|read-only|The Project Id|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customer_id|any|false|read-only|The Customer Id|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; siteName|string|true|none|The name of the site|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; siteLabel|string|false|none|The label of the site|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; siteGroup|string|false|none|The group name of the site|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; addr1|string|false|none|The address|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; addr2|string|false|none|The address|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; city|string|false|none|The city|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; state|string|false|none|The state|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; zip|string|false|none|The zip code|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; country|string|false|none|The country|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lng|number|false|none|The longitude coordinates|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lat|number|false|none|The latitude coordinates|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sTZ|string|false|none|Standard time zone|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; contactName|string|false|none|Name of the site contact|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; contactPhone|string|false|none|Phone number of the site contact|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; contactEmail|string|false|none|Email of the site contact|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _links|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(url)|false|read-only|none|

<!-- END responses.def -->

### GET /sites/{site_id} - *Fetch site*

<a id="opIdfetchSiteById"></a>

*Fetch site*

Fetches information about a site the account has access too

<h3 id="fetchsitebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|The id of the site to retrieve|

<!-- START responses.def -->

<h3 id="fetchsitebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Details about the site|Inline|

> Example responses

> 200 Response

```json
{
  "allOf": [
    {
      "description": "A Site",
      "type": "object",
      "required": [
        "siteName"
      ],
      "properties": {
        "project_id": {
          "description": "The Project Id",
          "readOnly": true,
          "type": "string"
        },
        "customer_id": {
          "description": "The Customer Id",
          "readOnly": true
        },
        "siteName": {
          "description": "The name of the site",
          "type": "string",
          "example": "Site 196"
        },
        "siteLabel": {
          "description": "The label of the site",
          "type": "string",
          "example": "Zones"
        },
        "siteGroup": {
          "description": "The group name of the site",
          "type": "string",
          "example": "Group A"
        },
        "addr1": {
          "description": "The address",
          "type": "string",
          "example": "Town Squire Pl"
        },
        "addr2": {
          "description": "The address",
          "type": "string",
          "example": "329 Glenmont Rd"
        },
        "city": {
          "description": "The city",
          "type": "string",
          "example": "Glenmont"
        },
        "state": {
          "description": "The state",
          "type": "string",
          "example": "NY"
        },
        "zip": {
          "description": "The zip code",
          "type": "string",
          "example": "12345"
        },
        "country": {
          "description": "The country",
          "type": "string",
          "example": "US"
        },
        "lng": {
          "description": "The longitude coordinates",
          "type": "number",
          "example": -73.7831,
          "minimum": -180,
          "maximum": 180
        },
        "lat": {
          "description": "The latitude coordinates",
          "type": "number",
          "example": 42.6014,
          "minimum": -180,
          "maximum": 180
        },
        "sTZ": {
          "description": "Standard time zone",
          "type": "string",
          "example": "America/New_York"
        },
        "contactName": {
          "description": "Name of the site contact",
          "type": "string",
          "example": "Carlo DiLorenzo"
        },
        "contactPhone": {
          "description": "Phone number of the site contact",
          "type": "string",
          "example": "(555) 555-5555 "
        },
        "contactEmail": {
          "description": "Email of the site contact",
          "type": "string",
          "example": "(555) 555-5555 "
        }
      }
    },
    {
      "type": "object",
      "properties": {
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "self": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "href": {
                  "type": "string",
                  "format": "url",
                  "readOnly": true,
                  "example": "https://api.nterprise.com/{entity}/{entity_id}"
                }
              }
            }
          }
        }
      }
    }
  ]
}
```

<h3 id="fetchsitebyid-responseschema">Response Schema</h3>

<!-- END responses.def -->

<h1 id="customer-accessible-api-work-request">Work Request</h1>

## Operations

### GET /work-requests/{work_request_id} - *List all work request submissions*

<a id="opIdfetchAllWorkRequests"></a>

*List all work request submissions*

Fetches all the work requests the account has access too

<h3 id="fetchallworkrequests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|sort|query|string|false|Sort by field|

<!-- START responses.def -->

<h3 id="fetchallworkrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of work requests|Inline|

> Example responses

> 200 Response

```json
{
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "customers": {
          "type": "array",
          "items": {
            "type": "object",
            "allOf": [
              {
                "description": "A request to create a workorder",
                "type": "object",
                "required": [
                  "work_request_id"
                ],
                "properties": {
                  "work_request_id": {
                    "type": "string",
                    "description": "The Id of the template to follow"
                  },
                  "work_request_submission_id": {
                    "type": "string",
                    "description": "The Id of the submission"
                  },
                  "project_id": {
                    "description": "The Project Id",
                    "readOnly": true,
                    "type": "string"
                  },
                  "requestor": {
                    "type": "string",
                    "description": "Work Request Submission submitter user name"
                  },
                  "insert_dt": {
                    "type": "string",
                    "format": "date-time",
                    "description": "Work Request Submission insert date/time"
                  },
                  "wrStatus": {
                    "type": "string",
                    "readOnly": true,
                    "description": "Work Request Submission status"
                  },
                  "is_approved": {
                    "type": "boolean",
                    "description": "Approved boolean"
                  },
                  "approved_by": {
                    "type": "string",
                    "description": "User that approved the Work Request Submission"
                  },
                  "approved_dt": {
                    "type": "string",
                    "format": "date-time",
                    "description": "Date the Work Request Submission was approved"
                  },
                  "data_count": {
                    "type": "number",
                    "description": "count of work request submission name/value records"
                  },
                  "data": {
                    "type": "array",
                    "description": "array of Work Request Submission name/value records",
                    "items": {
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string",
                          "description": "The name of the work request property to set"
                        },
                        "value": {
                          "type": "string",
                          "description": "the value to set to the property"
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "object",
                "properties": {
                  "_links": {
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "self": {
                        "type": "object",
                        "readOnly": true,
                        "properties": {
                          "href": {
                            "type": "string",
                            "format": "url",
                            "readOnly": true,
                            "example": "https://api.nterprise.com/{entity}/{entity_id}"
                          }
                        }
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  },
  "allOf": [
    {
      "type": "object",
      "properties": {
        "total_count": {
          "type": "number",
          "readOnly": true,
          "minimum": 0,
          "example": 32
        },
        "per_page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "page": {
          "type": "number",
          "readOnly": true,
          "minimum": 1,
          "maximum": 100,
          "example": 50
        },
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "next": {
              "type": "object",
              "description": "Link to the next page",
              "properties": {
                "href": {
                  "type": "string",
                  "format": "url",
                  "example": "https://api.neterprise.com/foo?page=2&per_page=50"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "type": "object",
          "properties": {
            "_links": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "self": {
                  "type": "object",
                  "readOnly": true,
                  "properties": {
                    "href": {
                      "type": "string",
                      "format": "url",
                      "readOnly": true,
                      "example": "https://api.nterprise.com/{entity}/{entity_id}"
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  ]
}
```

<h3 id="fetchallworkrequests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; _embedded|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; customers|[allOf]|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|A request to create a workorder|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; work_request_id|string|true|none|The Id of the template to follow|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; work_request_submission_id|string|false|none|The Id of the submission|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; project_id|string|false|read-only|The Project Id|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; requestor|string|false|none|Work Request Submission submitter user name|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; insert_dt|string(date-time)|false|none|Work Request Submission insert date/time|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; wrStatus|string|false|read-only|Work Request Submission status|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; is_approved|boolean|false|none|Approved boolean|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; approved_by|string|false|none|User that approved the Work Request Submission|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; approved_dt|string(date-time)|false|none|Date the Work Request Submission was approved|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; data_count|number|false|none|count of work request submission name/value records|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; data|[object]|false|none|array of Work Request Submission name/value records|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; name|string|false|none|The name of the work request property to set|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; value|string|false|none|the value to set to the property|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _links|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self|object|false|read-only|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; href|string(url)|false|read-only|none|

<!-- END responses.def -->

### GET /work-requests/{work_request_id}/submissions - *fetch submission*

<a id="opIdfetchWorkRequestById"></a>

*fetch submission*

Fetches information about a work request the account has access too

<h3 id="fetchworkrequestbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_request_id|path|number(int32)|true|The id of the work request to retrieve|

<!-- START responses.def -->

<h3 id="fetchworkrequestbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Details about the work request|Inline|

> Example responses

> 200 Response

```json
{
  "allOf": [
    {
      "description": "A request to create a workorder",
      "type": "object",
      "required": [
        "work_request_id"
      ],
      "properties": {
        "work_request_id": {
          "type": "string",
          "description": "The Id of the template to follow"
        },
        "work_request_submission_id": {
          "type": "string",
          "description": "The Id of the submission"
        },
        "project_id": {
          "description": "The Project Id",
          "readOnly": true,
          "type": "string"
        },
        "requestor": {
          "type": "string",
          "description": "Work Request Submission submitter user name"
        },
        "insert_dt": {
          "type": "string",
          "format": "date-time",
          "description": "Work Request Submission insert date/time"
        },
        "wrStatus": {
          "type": "string",
          "readOnly": true,
          "description": "Work Request Submission status"
        },
        "is_approved": {
          "type": "boolean",
          "description": "Approved boolean"
        },
        "approved_by": {
          "type": "string",
          "description": "User that approved the Work Request Submission"
        },
        "approved_dt": {
          "type": "string",
          "format": "date-time",
          "description": "Date the Work Request Submission was approved"
        },
        "data_count": {
          "type": "number",
          "description": "count of work request submission name/value records"
        },
        "data": {
          "type": "array",
          "description": "array of Work Request Submission name/value records",
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "description": "The name of the work request property to set"
              },
              "value": {
                "type": "string",
                "description": "the value to set to the property"
              }
            }
          }
        }
      }
    },
    {
      "type": "object",
      "properties": {
        "_links": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "self": {
              "type": "object",
              "readOnly": true,
              "properties": {
                "href": {
                  "type": "string",
                  "format": "url",
                  "readOnly": true,
                  "example": "https://api.nterprise.com/{entity}/{entity_id}"
                }
              }
            }
          }
        }
      }
    }
  ]
}
```

<h3 id="fetchworkrequestbyid-responseschema">Response Schema</h3>

<!-- END responses.def -->

# Embedded Schemas

## Customer
<!-- backwards compatibility -->
<a id="schemacustomer"></a>
<a id="schema_Customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

A Customer

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer_id|string|false|read-only|The Customer Id|
|cName|string|true|read-only|The name of the customer|
|total_projects|number|false|read-only|Total Projects for the customer|
|total_sites|number|false|read-only|Total Sites for the customer|

#### Specification

```yaml
description: A Customer
type: object
required:
  - cName
properties:
  customer_id:
    description: The Customer Id
    readOnly: true
    type: string
  cName:
    description: The name of the customer
    type: string
    example: Zones
    readOnly: true
  total_projects:
    description: Total Projects for the customer
    type: number
    readOnly: true
    minimum: 0
    example: 42
  total_sites:
    description: Total Sites for the customer
    type: number
    readOnly: true
    minimum: 0
    example: 84

```

## Inventory
<!-- backwards compatibility -->
<a id="schemainventory"></a>
<a id="schema_Inventory"></a>
<a id="tocSinventory"></a>
<a id="tocsinventory"></a>

A Listing of inventory

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inventory_id|string|false|read-only|inventory id, not required for "Q" type inventory|
|project_id|string|false|read-only|project id of inventory|
|PartNo|string|false|read-only|product referenced part number|
|InventoryType|string|false|read-only|inventory type, "Q" ( quantity ) or "S" (serialized)|
|Status|string|false|read-only|inventory status|
|Quantity|number|false|read-only|inventory count, will be "1" for S type inventory|
|SerialNumber|string|false|none|inventory serial number, will be empty for Q type inventory|

#### Specification

```yaml
type: object
description: A Listing of inventory
properties:
  inventory_id:
    type: string
    description: inventory id, not required for "Q" type inventory
    readOnly: true
  project_id:
    type: string
    description: project id of inventory
    readOnly: true
  PartNo:
    type: string
    description: product referenced part number
    readOnly: true
  InventoryType:
    type: string
    description: inventory type, "Q" ( quantity ) or "S" (serialized)
    enum:
      - Q
      - S
    readOnly: true
  Status:
    type: string
    description: inventory status
    readOnly: true
  Quantity:
    type: number
    description: inventory count, will be "1" for S type inventory
    readOnly: true
  SerialNumber:
    type: string
    description: inventory serial number, will be empty for Q type inventory

```

## Kit
<!-- backwards compatibility -->
<a id="schemakit"></a>
<a id="schema_Kit"></a>
<a id="tocSkit"></a>
<a id="tocskit"></a>

A collection of products or inventory

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|string|false|read-only|The Project Id|
|kit_id|string|false|read-only|Kit definition id|
|KitName|string|false|read-only|Kit name|
|KitType|string|false|read-only|Kit Type ( P or C )|
|MainPartNo|string|false|read-only|Kit referenced Part Number, will be empty for KitType = 'P'|

#### Specification

```yaml
type: object
description: A collection of products or inventory
properties:
  project_id:
    description: The Project Id
    readOnly: true
    type: string
  kit_id:
    type: string
    description: Kit definition id
    readOnly: true
  KitName:
    type: string
    description: Kit name
    readOnly: true
  KitType:
    type: string
    description: Kit Type ( P or C )
    enum:
      - P
      - C
    readOnly: true
  MainPartNo:
    type: string
    description: Kit referenced Part Number, will be empty for KitType = 'P'
    readOnly: true

```

## Note
<!-- backwards compatibility -->
<a id="schemanote"></a>
<a id="schema_Note"></a>
<a id="tocSnote"></a>
<a id="tocsnote"></a>

Notes for a workorder

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note_id|string|false|read-only|note Id|
|work_order_id|string|false|read-only|work order id|
|note|string|false|read-only|note text|
|user|string|false|read-only|login user that posted the note|
|created_dt|string(date-time)|false|read-only|note create datetime|
|issue|boolean|false|read-only|note flagged as an issue|
|resolved|boolean|false|read-only|issue resolved|
|resolvedBy|string|false|read-only|issue resolved by user|
|resolved_dt|string(date-time)|false|read-only|date the issue was resolved|
|tags|string|false|read-only|set note tag CSV|

#### Specification

```yaml
type: object
description: Notes for a workorder
properties:
  note_id:
    type: string
    description: note Id
    readOnly: true
  work_order_id:
    type: string
    description: work order id
    readOnly: true
  note:
    type: string
    description: note text
    readOnly: true
  user:
    type: string
    description: login user that posted the note
    readOnly: true
  created_dt:
    type: string
    description: note create datetime
    format: date-time
    readOnly: true
  issue:
    type: boolean
    description: note flagged as an issue
    readOnly: true
  resolved:
    type: boolean
    description: issue resolved
    readOnly: true
  resolvedBy:
    type: string
    description: issue resolved by user
    readOnly: true
  resolved_dt:
    type: string
    description: date the issue was resolved
    readOnly: true
    format: date-time
  tags:
    type: string
    description: set note tag CSV
    readOnly: true

```

## Project
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

A Project

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|string|false|read-only|The Project Id|
|pLabel|string|true|read-only|The name of the project|
|pStart_dt|string(date-time)¦null|false|read-only|Project Start date|
|pEnd_dt|string(date-time)¦null|false|read-only|Project end date|
|pDesc|string|false|read-only|Project Description|
|total_work_orders|number|false|read-only|Total work orders for the project|
|total_work_orders_status|object|false|read-only|Work order counts by status|
|&nbsp;&nbsp;&nbsp;&nbsp; active|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; pending|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; complete|number|false|none|none|

#### Specification

```yaml
type: object
description: A Project
required:
  - pLabel
properties:
  project_id:
    description: The Project Id
    readOnly: true
    type: string
  pLabel:
    description: The name of the project
    type: string
    example: Zones
    readOnly: true
  pStart_dt:
    description: Project Start date
    type: string
    nullable: true
    format: date-time
    readOnly: true
  pEnd_dt:
    description: Project end date
    type: string
    nullable: true
    format: date-time
    readOnly: true
  pDesc:
    type: string
    description: Project Description
    readOnly: true
  total_work_orders:
    description: Total work orders for the project
    type: number
    readOnly: true
    minimum: 0
  total_work_orders_status:
    description: Work order counts by status
    type: object
    readOnly: true
    properties:
      active:
        type: number
        example: 10
      pending:
        type: number
        example: 10
      complete:
        type: number
        example: 5

```

## Problem
<!-- backwards compatibility -->
<a id="schemaproblem"></a>
<a id="schema_Problem"></a>
<a id="tocSproblem"></a>
<a id="tocsproblem"></a>

API Error

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string(uri)|false|none|An absolute URI that identifies the problem type|
|title|string|false|none|A short, summary of the problem type|
|status|integer|false|none|The HTTP status code generated by the origin server for this occurrence of the problem|
|detail|string|false|none|A human readable explanation specific to this occurrence of the problem|

#### Specification

```yaml
type: object
description: API Error
properties:
  type:
    type: string
    format: uri
    description: An absolute URI that identifies the problem type
    default: about:blank
    example: https://docs.nterprise.com/problem/InternalServerError
  title:
    type: string
    example: Internal Server Error
    description: A short, summary of the problem type
  status:
    type: integer
    description: The HTTP status code generated by the origin server for this
      occurrence of the problem
    minimum: 100
    maximum: 600
    example: 500
  detail:
    type: string
    description: A human readable explanation specific to this occurrence of the problem
    example: Failed to reticulate splines

```

## Site
<!-- backwards compatibility -->
<a id="schemasite"></a>
<a id="schema_Site"></a>
<a id="tocSsite"></a>
<a id="tocssite"></a>

A Site

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|string|false|read-only|The Project Id|
|customer_id|any|false|read-only|The Customer Id|
|siteName|string|true|none|The name of the site|
|siteLabel|string|false|none|The label of the site|
|siteGroup|string|false|none|The group name of the site|
|addr1|string|false|none|The address|
|addr2|string|false|none|The address|
|city|string|false|none|The city|
|state|string|false|none|The state|
|zip|string|false|none|The zip code|
|country|string|false|none|The country|
|lng|number|false|none|The longitude coordinates|
|lat|number|false|none|The latitude coordinates|
|sTZ|string|false|none|Standard time zone|
|contactName|string|false|none|Name of the site contact|
|contactPhone|string|false|none|Phone number of the site contact|
|contactEmail|string|false|none|Email of the site contact|

#### Specification

```yaml
description: A Site
type: object
required:
  - siteName
properties:
  project_id:
    description: The Project Id
    readOnly: true
    type: string
  customer_id:
    description: The Customer Id
    readOnly: true
  siteName:
    description: The name of the site
    type: string
    example: Site 196
  siteLabel:
    description: The label of the site
    type: string
    example: Zones
  siteGroup:
    description: The group name of the site
    type: string
    example: Group A
  addr1:
    description: The address
    type: string
    example: Town Squire Pl
  addr2:
    description: The address
    type: string
    example: 329 Glenmont Rd
  city:
    description: The city
    type: string
    example: Glenmont
  state:
    description: The state
    type: string
    example: NY
  zip:
    description: The zip code
    type: string
    example: "12345"
  country:
    description: The country
    type: string
    example: US
  lng:
    description: The longitude coordinates
    type: number
    example: -73.7831
    minimum: -180
    maximum: 180
  lat:
    description: The latitude coordinates
    type: number
    example: 42.6014
    minimum: -180
    maximum: 180
  sTZ:
    description: Standard time zone
    type: string
    example: America/New_York
  contactName:
    description: Name of the site contact
    type: string
    example: Carlo DiLorenzo
  contactPhone:
    description: Phone number of the site contact
    type: string
    example: "(555) 555-5555 "
  contactEmail:
    description: Email of the site contact
    type: string
    example: "(555) 555-5555 "

```

## Work Request
<!-- backwards compatibility -->
<a id="schemawork request"></a>
<a id="schema_Work Request"></a>
<a id="tocSwork request"></a>
<a id="tocswork request"></a>

A request to create a workorder

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|work_request_id|string|true|none|The Id of the template to follow|
|work_request_submission_id|string|false|none|The Id of the submission|
|project_id|string|false|read-only|The Project Id|
|requestor|string|false|none|Work Request Submission submitter user name|
|insert_dt|string(date-time)|false|none|Work Request Submission insert date/time|
|wrStatus|string|false|read-only|Work Request Submission status|
|is_approved|boolean|false|none|Approved boolean|
|approved_by|string|false|none|User that approved the Work Request Submission|
|approved_dt|string(date-time)|false|none|Date the Work Request Submission was approved|
|data_count|number|false|none|count of work request submission name/value records|
|data|[object]|false|none|array of Work Request Submission name/value records|
|&nbsp;&nbsp;&nbsp;&nbsp; name|string|false|none|The name of the work request property to set|
|&nbsp;&nbsp;&nbsp;&nbsp; value|string|false|none|the value to set to the property|

#### Specification

```yaml
description: A request to create a workorder
type: object
required:
  - work_request_id
properties:
  work_request_id:
    type: string
    description: The Id of the template to follow
  work_request_submission_id:
    type: string
    description: The Id of the submission
  project_id:
    description: The Project Id
    readOnly: true
    type: string
  requestor:
    type: string
    description: Work Request Submission submitter user name
  insert_dt:
    type: string
    format: date-time
    description: Work Request Submission insert date/time
  wrStatus:
    type: string
    readOnly: true
    description: Work Request Submission status
  is_approved:
    type: boolean
    description: Approved boolean
  approved_by:
    type: string
    description: User that approved the Work Request Submission
  approved_dt:
    type: string
    format: date-time
    description: Date the Work Request Submission was approved
  data_count:
    type: number
    description: count of work request submission name/value records
  data:
    type: array
    description: array of Work Request Submission name/value records
    items:
      type: object
      properties:
        name:
          type: string
          description: The name of the work request property to set
        value:
          type: string
          description: the value to set to the property

```

