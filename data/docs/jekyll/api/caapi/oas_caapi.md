---
layout: page
nav_order: 2
title: Customer accessible API
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="customer-accessible-api">Customer accessible API</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Customer API for FTM and CIMS

# Authentication

* API Key (signedToken)
    - Parameter Name: **Authorization**, in: header. To Generate an API Follow these steps:
 1. concatenate KEY + URL + REQUEST BODY
 1. create SHA512 hash of step 1 string
 1. concatenate USER + ":" + SHA512 hash
 1. base64 encode string from step 3
 1. Pass in as a Bearer token

<h1 id="customer-accessible-api-customer">Customer</h1>

## Operations

### GET /customers/{customer_id}

<a id="opIdfetchCustomerById"></a>

Fetches information about a customer the account has access too

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchcustomerbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|path|number(int32)|true|The id of the customer to retrieve|

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

### GET /customers/

<a id="opIdfetchAllCustomers"></a>

Fetches all the account has access too

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchallcustomers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|

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

### GET /customers/{customer_id}/projects

<a id="opIdfetchCustomerProjects"></a>

List all projects for a customer

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchcustomerprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|customer_id|path|number(int32)|true|The id of the customer to retrieve|
|sort|query|string|false|Sort by field|

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

### GET /customers/{customer_id}/sites

<a id="opIdfetchCustomerSites"></a>

List all sites for a customer

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchcustomersites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|sort|query|string|false|Sort by field|
|filter[site_group]|query|string|false|Filter where the site group is this value|
|filter[county]|query|string|false|Filter where the county is this value|
|filter[state]|query|string|false|Filter where the state is this value|

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

<h1 id="customer-accessible-api-project">Project</h1>

## Operations

### GET /projects/

<a id="opIdfetchAllProjects"></a>

Fetches all the account has access too

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchallprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|filter[customer_id]|query|string|false|Filter where the customer id is this value|
|sort|query|string|false|Sort by field|

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

### GET /projects/{project_id}

<a id="opIdfetchProjectById"></a>

Fetches information about a project the account has access too

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchprojectbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The id of the project to retrieve|

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

### GET /projects/{project_id}/inventory

<a id="opIdfetchAllProjectInventory"></a>

Fetches all the inventory for a project

<aside class="warning">
Permissions required:<br>

</aside>

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

### GET /projects/{project_id}/inventory/{inventory_id}

<a id="opIdfetchProjectInventory"></a>

Fetches all the inventory for a project

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchprojectinventory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|project_id|path|string|true|The id of the project to retrieve|
|inventory_id|path|string|true|The id of the inventory to retrieve|

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

### GET /projects/{project_id}/inventory/{inventory_id}/history

<a id="opIdfetchProjectInventoryHistory"></a>

Fetches the project inventory history

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchprojectinventoryhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|project_id|path|string|true|The id of the project to retrieve|
|inventory_id|path|string|true|The id of the inventory to retrieve|

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
                "description": "An inventory history event",
                "properties": {
                  "inventory_id": {
                    "type": "string",
                    "description": "inventory id",
                    "readOnly": true
                  },
                  "project_id": {
                    "type": "string",
                    "description": "project id of inventory",
                    "readOnly": true
                  },
                  "event_id": {
                    "type": "string",
                    "description": "event id of inventory history record",
                    "readOnly": true
                  },
                  "event_type": {
                    "event_id": {
                      "type": "string",
                      "enum": [
                        "receipt",
                        "doa",
                        "shipment",
                        "installation",
                        "kit",
                        "transfer",
                        "configuration",
                        "audit",
                        "trans_project",
                        "mark_refreshed",
                        "return_receipt",
                        "cancel_last_event",
                        "transfer_out",
                        "transfer_in"
                      ],
                      "description": "event type of inventory history record",
                      "readOnly": true
                    }
                  },
                  "event_date": {
                    "description": "The inventory history event date",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                  },
                  "new_status": {
                    "description": "The inventory history event new status",
                    "type": "string",
                    "enum": [
                      "received",
                      "raw",
                      "in_configuration",
                      "configured",
                      "shipped",
                      "installed",
                      "doa",
                      "other",
                      "in_noc",
                      "eol",
                      "in_transit"
                    ],
                    "readOnly": true
                  },
                  "comments": {
                    "description": "The inventory history event comments",
                    "type": "string",
                    "readOnly": true
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

### GET /projects/{project_id}/products

<a id="opIdfetchProjectProducts"></a>

Fetches all the products for a project

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchprojectproducts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|project_id|path|string|true|The id of the project to retrieve|

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

### GET /projects/{project_id}/kits/{kit_id}

<a id="opIdfetchProjectKit"></a>

Fetches all the kit for a project

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchprojectkit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|project_id|path|string|true|The id of the project to retrieve|
|kit_id|path|string|true|The id of the kit to retrieve|

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

### GET /projects/{project_id}/products/{product_id}

<a id="opIdfetchProjectProduct"></a>

Fetches all the product for a project

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchprojectproduct-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|project_id|path|string|true|The id of the project to retrieve|
|product_id|path|string|true|The id of the product to retrieve|

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

### GET /projects/{project_id}/ship-orders

<a id="opIdfetchProjectShipOrders"></a>

Fetches all the ship orders for a project

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchprojectshiporders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|filter[min_date]|query|string(date-time)|false|Filter where the date is greater than this value|
|filter[max_date]|query|string(date-time)|false|Filter where the date is less than this value|
|filter[status]|query|string|false|Filter where the ship order status is this value|
|filter[order_number]|query|string|false|Filter where the ship order number contains this value|
|project_id|path|string|true|The id of the project to retrieve|

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
                "description": "A ship order",
                "type": "object",
                "properties": {
                  "ship_order_id": {
                    "description": "The ship order ID",
                    "readOnly": true,
                    "type": "string"
                  },
                  "project_id": {
                    "description": "The project ID",
                    "readOnly": true,
                    "type": "string"
                  },
                  "order_number": {
                    "description": "The ship order number",
                    "type": "string"
                  },
                  "ship_to": {
                    "description": "The destination address",
                    "type": "object",
                    "properties": {
                      "location_code": {
                        "description": "The destination location code",
                        "type": "string"
                      },
                      "name": {
                        "description": "The destination recipient name",
                        "type": "string"
                      },
                      "address_line_1": {
                        "description": "The destination address line 1",
                        "type": "string"
                      },
                      "address_line_2": {
                        "description": "The destination address line 2",
                        "type": "string"
                      },
                      "city": {
                        "description": "The destination city",
                        "type": "string"
                      },
                      "state": {
                        "description": "The destination state",
                        "type": "string"
                      },
                      "european_province": {
                        "description": "The destination european province",
                        "type": "string"
                      },
                      "zip": {
                        "description": "The destination zip",
                        "type": "string"
                      },
                      "country": {
                        "description": "The destination country",
                        "type": "string"
                      }
                    }
                  },
                  "order_date": {
                    "description": "The ship order date",
                    "type": "string",
                    "format": "date-time"
                  },
                  "ship_date": {
                    "description": "The ship order ship date",
                    "type": "string",
                    "format": "date-time"
                  },
                  "status": {
                    "description": "The ship order status",
                    "type": "string",
                    "enum": [
                      "drafting",
                      "released_to_warehouse",
                      "order_complete",
                      "shipped",
                      "installed",
                      "received_at_warehouse"
                    ]
                  },
                  "carrier_code": {
                    "description": "The ship order carrier code",
                    "type": "string"
                  },
                  "carrier_tracking_number": {
                    "description": "The ship order carrier tracking number",
                    "type": "string"
                  },
                  "instructions": {
                    "description": "The ship order instructions",
                    "type": "string"
                  },
                  "team": {
                    "description": "The ship order team",
                    "type": "string"
                  },
                  "shipped_date": {
                    "description": "The ship order shipped date",
                    "type": "string",
                    "format": "date-time"
                  },
                  "warehouse_code": {
                    "description": "The ship order warehouse code",
                    "type": "string"
                  },
                  "delivered_date": {
                    "description": "The ship order delivered date",
                    "type": "string",
                    "format": "date-time"
                  },
                  "customer_po": {
                    "description": "The ship order customer PO",
                    "type": "string"
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

### GET /projects/{project_id}/ship-orders/{ship_order_id}

<a id="opIdfetchProjectShipOrder"></a>

Fetches a ship order for a project

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchprojectshiporder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The id of the project to retrieve|
|ship_order_id|path|string|true|The id of the ship order to retrieve|

> Example responses

> 200 Response

```json
{
  "description": "A ship order with line details",
  "type": "object",
  "allOf": [
    {
      "description": "A ship order",
      "type": "object",
      "properties": {
        "ship_order_id": {
          "description": "The ship order ID",
          "readOnly": true,
          "type": "string"
        },
        "project_id": {
          "description": "The project ID",
          "readOnly": true,
          "type": "string"
        },
        "order_number": {
          "description": "The ship order number",
          "type": "string"
        },
        "ship_to": {
          "description": "The destination address",
          "type": "object",
          "properties": {
            "location_code": {
              "description": "The destination location code",
              "type": "string"
            },
            "name": {
              "description": "The destination recipient name",
              "type": "string"
            },
            "address_line_1": {
              "description": "The destination address line 1",
              "type": "string"
            },
            "address_line_2": {
              "description": "The destination address line 2",
              "type": "string"
            },
            "city": {
              "description": "The destination city",
              "type": "string"
            },
            "state": {
              "description": "The destination state",
              "type": "string"
            },
            "european_province": {
              "description": "The destination european province",
              "type": "string"
            },
            "zip": {
              "description": "The destination zip",
              "type": "string"
            },
            "country": {
              "description": "The destination country",
              "type": "string"
            }
          }
        },
        "order_date": {
          "description": "The ship order date",
          "type": "string",
          "format": "date-time"
        },
        "ship_date": {
          "description": "The ship order ship date",
          "type": "string",
          "format": "date-time"
        },
        "status": {
          "description": "The ship order status",
          "type": "string",
          "enum": [
            "drafting",
            "released_to_warehouse",
            "order_complete",
            "shipped",
            "installed",
            "received_at_warehouse"
          ]
        },
        "carrier_code": {
          "description": "The ship order carrier code",
          "type": "string"
        },
        "carrier_tracking_number": {
          "description": "The ship order carrier tracking number",
          "type": "string"
        },
        "instructions": {
          "description": "The ship order instructions",
          "type": "string"
        },
        "team": {
          "description": "The ship order team",
          "type": "string"
        },
        "shipped_date": {
          "description": "The ship order shipped date",
          "type": "string",
          "format": "date-time"
        },
        "warehouse_code": {
          "description": "The ship order warehouse code",
          "type": "string"
        },
        "delivered_date": {
          "description": "The ship order delivered date",
          "type": "string",
          "format": "date-time"
        },
        "customer_po": {
          "description": "The ship order customer PO",
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "properties": {
        "lines": {
          "description": "The ship order lines",
          "type": "array",
          "items": {
            "description": "A ship order line",
            "type": "object",
            "properties": {
              "line_number": {
                "description": "The ship order line line number",
                "type": "string"
              },
              "part_number": {
                "description": "The ship order line part number",
                "type": "string"
              },
              "product_name": {
                "description": "The ship order line product name",
                "type": "string"
              },
              "tracking_type": {
                "description": "The ship order line tracking type",
                "type": "string"
              },
              "product_id": {
                "description": "The ship order line product id",
                "type": "string"
              },
              "quantity": {
                "description": "The ship order line quantity",
                "type": "number"
              },
              "quantity_added": {
                "description": "The ship order line quantity added",
                "type": "number"
              },
              "serial_numbers": {
                "description": "The ship order line serial numbers",
                "type": "array",
                "items": {
                  "description": "A ship order line serial number",
                  "type": "string"
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

<h1 id="customer-accessible-api-site">Site</h1>

## Operations

### GET /sites/

<a id="opIdfetchAllSites"></a>

Fetches all the sites the account has access too

<aside class="warning">
Permissions required:<br>

</aside>

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

### GET /sites/{site_id}

<a id="opIdfetchSiteById"></a>

Fetches information about a site the account has access too

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchsitebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|The id of the site to retrieve|

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

<h1 id="customer-accessible-api-work-request">Work Request</h1>

## Operations

### GET /work-requests/{work_request_id}

<a id="opIdfetchAllWorkRequests"></a>

Fetches all the work requests the account has access too

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchallworkrequests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page number to fetch|
|page_size|query|number|false|How many items to return at one time (max 100)|
|sort|query|string|false|Sort by field|

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

### GET /work-requests/{work_request_id}/submissions

<a id="opIdfetchWorkRequestById"></a>

Fetches information about a work request the account has access too

<aside class="warning">
Permissions required:<br>

</aside>

<h3 id="fetchworkrequestbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|work_request_id|path|number(int32)|true|The id of the work request to retrieve|

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

## Inventory History
<!-- backwards compatibility -->
<a id="schemainventory history"></a>
<a id="schema_Inventory History"></a>
<a id="tocSinventory history"></a>
<a id="tocsinventory history"></a>

An inventory history event

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inventory_id|string|false|read-only|inventory id|
|project_id|string|false|read-only|project id of inventory|
|event_id|string|false|read-only|event id of inventory history record|
|event_type|any|false|none|none|
|event_date|string(date-time)|false|read-only|The inventory history event date|
|new_status|string|false|read-only|The inventory history event new status|
|comments|string|false|read-only|The inventory history event comments|

#### Specification

```yaml
type: object
description: An inventory history event
properties:
  inventory_id:
    type: string
    description: inventory id
    readOnly: true
  project_id:
    type: string
    description: project id of inventory
    readOnly: true
  event_id:
    type: string
    description: event id of inventory history record
    readOnly: true
  event_type:
    event_id:
      type: string
      enum:
        - receipt
        - doa
        - shipment
        - installation
        - kit
        - transfer
        - configuration
        - audit
        - trans_project
        - mark_refreshed
        - return_receipt
        - cancel_last_event
        - transfer_out
        - transfer_in
      description: event type of inventory history record
      readOnly: true
  event_date:
    description: The inventory history event date
    type: string
    format: date-time
    readOnly: true
  new_status:
    description: The inventory history event new status
    type: string
    enum:
      - received
      - raw
      - in_configuration
      - configured
      - shipped
      - installed
      - doa
      - other
      - in_noc
      - eol
      - in_transit
    readOnly: true
  comments:
    description: The inventory history event comments
    type: string
    readOnly: true

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

## Ship Order
<!-- backwards compatibility -->
<a id="schemaship order"></a>
<a id="schema_Ship Order"></a>
<a id="tocSship order"></a>
<a id="tocsship order"></a>

A ship order

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ship_order_id|string|false|read-only|The ship order ID|
|project_id|string|false|read-only|The project ID|
|order_number|string|false|none|The ship order number|
|ship_to|object|false|none|The destination address|
|&nbsp;&nbsp; location_code|string|false|none|The destination location code|
|&nbsp;&nbsp; name|string|false|none|The destination recipient name|
|&nbsp;&nbsp; address_line_1|string|false|none|The destination address line 1|
|&nbsp;&nbsp; address_line_2|string|false|none|The destination address line 2|
|&nbsp;&nbsp; city|string|false|none|The destination city|
|&nbsp;&nbsp; state|string|false|none|The destination state|
|&nbsp;&nbsp; european_province|string|false|none|The destination european province|
|&nbsp;&nbsp; zip|string|false|none|The destination zip|
|&nbsp;&nbsp; country|string|false|none|The destination country|
|order_date|string(date-time)|false|none|The ship order date|
|ship_date|string(date-time)|false|none|The ship order ship date|
|status|string|false|none|The ship order status|
|carrier_code|string|false|none|The ship order carrier code|
|carrier_tracking_number|string|false|none|The ship order carrier tracking number|
|instructions|string|false|none|The ship order instructions|
|team|string|false|none|The ship order team|
|shipped_date|string(date-time)|false|none|The ship order shipped date|
|warehouse_code|string|false|none|The ship order warehouse code|
|delivered_date|string(date-time)|false|none|The ship order delivered date|
|customer_po|string|false|none|The ship order customer PO|

#### Specification

```yaml
description: A ship order
type: object
properties:
  ship_order_id:
    description: The ship order ID
    readOnly: true
    type: string
  project_id:
    description: The project ID
    readOnly: true
    type: string
  order_number:
    description: The ship order number
    type: string
  ship_to:
    description: The destination address
    type: object
    properties:
      location_code:
        description: The destination location code
        type: string
      name:
        description: The destination recipient name
        type: string
      address_line_1:
        description: The destination address line 1
        type: string
      address_line_2:
        description: The destination address line 2
        type: string
      city:
        description: The destination city
        type: string
      state:
        description: The destination state
        type: string
      european_province:
        description: The destination european province
        type: string
      zip:
        description: The destination zip
        type: string
      country:
        description: The destination country
        type: string
  order_date:
    description: The ship order date
    type: string
    format: date-time
  ship_date:
    description: The ship order ship date
    type: string
    format: date-time
  status:
    description: The ship order status
    type: string
    enum:
      - drafting
      - released_to_warehouse
      - order_complete
      - shipped
      - installed
      - received_at_warehouse
  carrier_code:
    description: The ship order carrier code
    type: string
  carrier_tracking_number:
    description: The ship order carrier tracking number
    type: string
  instructions:
    description: The ship order instructions
    type: string
  team:
    description: The ship order team
    type: string
  shipped_date:
    description: The ship order shipped date
    type: string
    format: date-time
  warehouse_code:
    description: The ship order warehouse code
    type: string
  delivered_date:
    description: The ship order delivered date
    type: string
    format: date-time
  customer_po:
    description: The ship order customer PO
    type: string

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
|&nbsp;&nbsp; active|number|false|none|none|
|&nbsp;&nbsp; pending|number|false|none|none|
|&nbsp;&nbsp; complete|number|false|none|none|

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
|&nbsp;&nbsp; name|string|false|none|The name of the work request property to set|
|&nbsp;&nbsp; value|string|false|none|the value to set to the property|

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

