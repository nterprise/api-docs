---
layout: page
parent: Niagara API
nav_order: 10
title: Programs
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="programs">Programs v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

<h1 id="programs-program">Program</h1>

## fetchAllPrograms

<a id="opIdfetchAllPrograms"></a>

`GET /programs`

*Fetches A Page of programs*

Fetch Program

<h3 id="fetchallprograms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|sort|query|string|false|Sort by field|
|filter[label]|query|string|false|Filter where the label contains this value|
|filter[customer_id]|query|string|false|Filter where the customer id is this value|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|label|
|sort|-label|
|sort|start_date|
|sort|-start_date|
|sort|end_date|
|sort|-end_date|
|sort|created|
|sort|-created|
|sort|updated|
|sort|-updated|
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
        "nter:programs": {
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
                        "example": "https://api.nterprise.com/programs/998c7019-46b8-4cfe-8416-f46390c2b6d9"
                      }
                    }
                  }
                }
              }
            },
            "allOf": [
              {
                "x-nter-relation": "programs",
                "x-nter-model": "Program",
                "x-nter-callable": true,
                "description": "Defines the properties for a program",
                "required": [
                  "label",
                  "customer",
                  "program_id",
                  "status_map"
                ],
                "properties": {
                  "label": {
                    "type": "string",
                    "example": "GAP Store refresh",
                    "x-examples": [
                      "GAP Store refresh"
                    ],
                    "description": "Name of the program"
                  },
                  "slug": {
                    "type": "string",
                    "example": "gap-store-refresh",
                    "x-examples": [
                      "gap-store-refresh"
                    ],
                    "description": "Name of the program"
                  },
                  "program_id": {
                    "type": "string",
                    "description": "Unique identifier",
                    "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                    "x-examples": [
                      "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
                    ],
                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                  },
                  "customer": {
                    "description": "The cstomer this program is for",
                    "allOf": [
                      {
                        "x-id": "#customer",
                        "x-nter-relation": "customers",
                        "x-nter-model": "Customer",
                        "x-nter-callable": true,
                        "description": "Customer",
                        "required": [
                          "label",
                          "customer_id",
                          "status_map"
                        ],
                        "properties": {
                          "customer_id": {
                            "type": "string",
                            "description": "Customer identifier",
                            "example": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                            "x-examples": [
                              "e530652e-28e8-4f64-84af-e1cf0ff7c805"
                            ],
                            "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
                            "x-faker": "random.uuid"
                          },
                          "label": {
                            "type": "string",
                            "example": "Zones Inc",
                            "x-examples": [
                              "Zones Inc"
                            ],
                            "description": "Label for the customer"
                          },
                          "slug": {
                            "type": "string",
                            "example": "zones-inc",
                            "x-examples": [
                              "zones-inc"
                            ],
                            "description": "Auto generated slug"
                          },
                          "external_platform": {
                            "type": "object",
                            "description": "External Identifiers for the customer",
                            "nullable": true,
                            "additionalProperties": {
                              "type": "string"
                            },
                            "x-examples": [
                              {
                                "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                              }
                            ]
                          },
                          "allowed_statuses": {
                            "type": "array",
                            "description": "List of allowed statuses",
                            "items": {
                              "x-id": "#status",
                              "x-nter-relation": "statuses",
                              "x-nter-model": "Status",
                              "x-nter-callable": true,
                              "x-ui-hide": true,
                              "description": "Defines the properties for a status",
                              "type": "object",
                              "required": [
                                "status",
                                "status_category"
                              ],
                              "properties": {
                                "status": {
                                  "type": "string",
                                  "description": "A Custom label for the status",
                                  "x-examples": [
                                    "Pending",
                                    "In Progress",
                                    "Verifying",
                                    "Complete",
                                    "Cancelled",
                                    "Blocked",
                                    "Reticulating Splines"
                                  ]
                                },
                                "category": {
                                  "type": "string",
                                  "description": "The classifier for the statues",
                                  "x-examples": [
                                    "PENDING",
                                    "IN_PROGRESS",
                                    "VERIFYING",
                                    "COMPLETE",
                                    "CANCELLED",
                                    "BLOCKED"
                                  ],
                                  "enum": [
                                    "PENDING",
                                    "IN_PROGRESS",
                                    "VERIFYING",
                                    "COMPLETE",
                                    "CANCELLED",
                                    "BLOCKED"
                                  ]
                                }
                              }
                            }
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
                          "label": "Zones Inc",
                          "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                          "slug": "zones-inc",
                          "external_platform": {
                            "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                          },
                          "allowed_statuses": [
                            {
                              "status": "Reticulating Splines",
                              "category": "BLOCKED"
                            }
                          ],
                          "created": "1960-01-22T21:27:37.876Z",
                          "updated": "2015-12-03T17:42:43.706Z"
                        }
                      }
                    ]
                  },
                  "allowed_statuses": {
                    "type": "array",
                    "description": "List of allowed statuses",
                    "items": {
                      "x-id": "#status",
                      "x-nter-relation": "statuses",
                      "x-nter-model": "Status",
                      "x-nter-callable": true,
                      "x-ui-hide": true,
                      "description": "Defines the properties for a status",
                      "type": "object",
                      "required": [
                        "status",
                        "status_category"
                      ],
                      "properties": {
                        "status": {
                          "type": "string",
                          "description": "A Custom label for the status",
                          "x-examples": [
                            "Pending",
                            "In Progress",
                            "Verifying",
                            "Complete",
                            "Cancelled",
                            "Blocked",
                            "Reticulating Splines"
                          ]
                        },
                        "category": {
                          "type": "string",
                          "description": "The classifier for the statues",
                          "x-examples": [
                            "PENDING",
                            "IN_PROGRESS",
                            "VERIFYING",
                            "COMPLETE",
                            "CANCELLED",
                            "BLOCKED"
                          ],
                          "enum": [
                            "PENDING",
                            "IN_PROGRESS",
                            "VERIFYING",
                            "COMPLETE",
                            "CANCELLED",
                            "BLOCKED"
                          ]
                        }
                      }
                    }
                  },
                  "start_date": {
                    "type": "string",
                    "format": "date-time",
                    "description": "Start date",
                    "example": "2019-08-07T18:10:53+00:00",
                    "x-examples": [
                      "2019-08-07T18:10:53+00:00"
                    ]
                  },
                  "end_date": {
                    "type": "string",
                    "format": "date-time",
                    "description": "End date",
                    "example": "2020-08-07T18:10:53+00:00",
                    "x-examples": [
                      "2020-08-07T18:10:53+00:00"
                    ]
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
                  "label": "GAP Store refresh",
                  "customer": {
                    "label": "Zones Inc",
                    "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                    "slug": "zones-inc",
                    "external_platform": {
                      "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                    },
                    "allowed_statuses": [
                      {
                        "status": "Complete",
                        "category": "PENDING"
                      },
                      {
                        "status": "Complete",
                        "category": "COMPLETE"
                      }
                    ],
                    "created": "1955-12-06T23:51:05.546Z",
                    "updated": "2006-05-29T02:08:42.08Z"
                  },
                  "program_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                  "slug": "gap-store-refresh",
                  "allowed_statuses": [
                    {
                      "status": "Pending",
                      "category": "CANCELLED"
                    },
                    {
                      "status": "Reticulating Splines",
                      "category": "VERIFYING"
                    }
                  ],
                  "start_date": "2019-08-07T18:10:53.0Z",
                  "end_date": "2020-08-07T18:10:53.0Z",
                  "created": "2012-12-18T00:08:56.495Z",
                  "updated": "1976-03-14T20:01:04.153Z"
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

<h3 id="fetchallprograms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for programs|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallprograms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:programs|[allOf]|false|none|none|
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

## createProgram

<a id="opIdcreateProgram"></a>

`POST /programs`

*Creates a program*

Creates a new program

> Body parameter

```json
{
  "type": "object",
  "description": "Program to create",
  "required": [
    "label"
  ],
  "properties": {
    "label": {
      "type": "string",
      "example": "GAP Store refresh",
      "x-examples": [
        "GAP Store refresh"
      ],
      "description": "Name of the program"
    },
    "allowed_statuses": {
      "type": "array",
      "description": "List of allowed statuses",
      "items": {
        "x-id": "#status",
        "x-nter-relation": "statuses",
        "x-nter-model": "Status",
        "x-nter-callable": true,
        "x-ui-hide": true,
        "description": "Defines the properties for a status",
        "type": "object",
        "required": [
          "status",
          "status_category"
        ],
        "properties": {
          "status": {
            "type": "string",
            "description": "A Custom label for the status",
            "x-examples": [
              "Pending",
              "In Progress",
              "Verifying",
              "Complete",
              "Cancelled",
              "Blocked",
              "Reticulating Splines"
            ]
          },
          "category": {
            "type": "string",
            "description": "The classifier for the statues",
            "x-examples": [
              "PENDING",
              "IN_PROGRESS",
              "VERIFYING",
              "COMPLETE",
              "CANCELLED",
              "BLOCKED"
            ],
            "enum": [
              "PENDING",
              "IN_PROGRESS",
              "VERIFYING",
              "COMPLETE",
              "CANCELLED",
              "BLOCKED"
            ]
          }
        }
      }
    },
    "start_date": {
      "type": "string",
      "format": "date-time",
      "description": "Start date",
      "example": "2019-08-07T18:10:53+00:00",
      "x-examples": [
        "2019-08-07T18:10:53+00:00"
      ]
    },
    "end_date": {
      "type": "string",
      "format": "date-time",
      "description": "End date",
      "example": "2020-08-07T18:10:53+00:00",
      "x-examples": [
        "2020-08-07T18:10:53+00:00"
      ]
    }
  }
}
```

<h3 id="createprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Name of the program|
|allowed_statuses|body|[object]|false|List of allowed statuses|
|» status|body|string|true|A Custom label for the status|
|» category|body|string|false|The classifier for the statues|
|start_date|body|string(date-time)|false|Start date|
|end_date|body|string(date-time)|false|End date|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|PENDING|
|» category|IN_PROGRESS|
|» category|VERIFYING|
|» category|COMPLETE|
|» category|CANCELLED|
|» category|BLOCKED|

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
                  "example": "https://api.nterprise.com/programs/998c7019-46b8-4cfe-8416-f46390c2b6d9"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-nter-relation": "programs",
          "x-nter-model": "Program",
          "x-nter-callable": true,
          "description": "Defines the properties for a program",
          "required": [
            "label",
            "customer",
            "program_id",
            "status_map"
          ],
          "properties": {
            "label": {
              "type": "string",
              "example": "GAP Store refresh",
              "x-examples": [
                "GAP Store refresh"
              ],
              "description": "Name of the program"
            },
            "slug": {
              "type": "string",
              "example": "gap-store-refresh",
              "x-examples": [
                "gap-store-refresh"
              ],
              "description": "Name of the program"
            },
            "program_id": {
              "type": "string",
              "description": "Unique identifier",
              "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
              "x-examples": [
                "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "customer": {
              "description": "The cstomer this program is for",
              "allOf": [
                {
                  "x-id": "#customer",
                  "x-nter-relation": "customers",
                  "x-nter-model": "Customer",
                  "x-nter-callable": true,
                  "description": "Customer",
                  "required": [
                    "label",
                    "customer_id",
                    "status_map"
                  ],
                  "properties": {
                    "customer_id": {
                      "type": "string",
                      "description": "Customer identifier",
                      "example": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                      "x-examples": [
                        "e530652e-28e8-4f64-84af-e1cf0ff7c805"
                      ],
                      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
                      "x-faker": "random.uuid"
                    },
                    "label": {
                      "type": "string",
                      "example": "Zones Inc",
                      "x-examples": [
                        "Zones Inc"
                      ],
                      "description": "Label for the customer"
                    },
                    "slug": {
                      "type": "string",
                      "example": "zones-inc",
                      "x-examples": [
                        "zones-inc"
                      ],
                      "description": "Auto generated slug"
                    },
                    "external_platform": {
                      "type": "object",
                      "description": "External Identifiers for the customer",
                      "nullable": true,
                      "additionalProperties": {
                        "type": "string"
                      },
                      "x-examples": [
                        {
                          "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                        }
                      ]
                    },
                    "allowed_statuses": {
                      "type": "array",
                      "description": "List of allowed statuses",
                      "items": {
                        "x-id": "#status",
                        "x-nter-relation": "statuses",
                        "x-nter-model": "Status",
                        "x-nter-callable": true,
                        "x-ui-hide": true,
                        "description": "Defines the properties for a status",
                        "type": "object",
                        "required": [
                          "status",
                          "status_category"
                        ],
                        "properties": {
                          "status": {
                            "type": "string",
                            "description": "A Custom label for the status",
                            "x-examples": [
                              "Pending",
                              "In Progress",
                              "Verifying",
                              "Complete",
                              "Cancelled",
                              "Blocked",
                              "Reticulating Splines"
                            ]
                          },
                          "category": {
                            "type": "string",
                            "description": "The classifier for the statues",
                            "x-examples": [
                              "PENDING",
                              "IN_PROGRESS",
                              "VERIFYING",
                              "COMPLETE",
                              "CANCELLED",
                              "BLOCKED"
                            ],
                            "enum": [
                              "PENDING",
                              "IN_PROGRESS",
                              "VERIFYING",
                              "COMPLETE",
                              "CANCELLED",
                              "BLOCKED"
                            ]
                          }
                        }
                      }
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
                    "label": "Zones Inc",
                    "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                    "slug": "zones-inc",
                    "external_platform": {
                      "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                    },
                    "allowed_statuses": [
                      {
                        "status": "Reticulating Splines",
                        "category": "BLOCKED"
                      }
                    ],
                    "created": "1960-01-22T21:27:37.876Z",
                    "updated": "2015-12-03T17:42:43.706Z"
                  }
                }
              ]
            },
            "allowed_statuses": {
              "type": "array",
              "description": "List of allowed statuses",
              "items": {
                "x-id": "#status",
                "x-nter-relation": "statuses",
                "x-nter-model": "Status",
                "x-nter-callable": true,
                "x-ui-hide": true,
                "description": "Defines the properties for a status",
                "type": "object",
                "required": [
                  "status",
                  "status_category"
                ],
                "properties": {
                  "status": {
                    "type": "string",
                    "description": "A Custom label for the status",
                    "x-examples": [
                      "Pending",
                      "In Progress",
                      "Verifying",
                      "Complete",
                      "Cancelled",
                      "Blocked",
                      "Reticulating Splines"
                    ]
                  },
                  "category": {
                    "type": "string",
                    "description": "The classifier for the statues",
                    "x-examples": [
                      "PENDING",
                      "IN_PROGRESS",
                      "VERIFYING",
                      "COMPLETE",
                      "CANCELLED",
                      "BLOCKED"
                    ],
                    "enum": [
                      "PENDING",
                      "IN_PROGRESS",
                      "VERIFYING",
                      "COMPLETE",
                      "CANCELLED",
                      "BLOCKED"
                    ]
                  }
                }
              }
            },
            "start_date": {
              "type": "string",
              "format": "date-time",
              "description": "Start date",
              "example": "2019-08-07T18:10:53+00:00",
              "x-examples": [
                "2019-08-07T18:10:53+00:00"
              ]
            },
            "end_date": {
              "type": "string",
              "format": "date-time",
              "description": "End date",
              "example": "2020-08-07T18:10:53+00:00",
              "x-examples": [
                "2020-08-07T18:10:53+00:00"
              ]
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
            "label": "GAP Store refresh",
            "customer": {
              "label": "Zones Inc",
              "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
              "slug": "zones-inc",
              "external_platform": {
                "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
              },
              "allowed_statuses": [
                {
                  "status": "Complete",
                  "category": "PENDING"
                },
                {
                  "status": "Complete",
                  "category": "COMPLETE"
                }
              ],
              "created": "1955-12-06T23:51:05.546Z",
              "updated": "2006-05-29T02:08:42.08Z"
            },
            "program_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
            "slug": "gap-store-refresh",
            "allowed_statuses": [
              {
                "status": "Pending",
                "category": "CANCELLED"
              },
              {
                "status": "Reticulating Splines",
                "category": "VERIFYING"
              }
            ],
            "start_date": "2019-08-07T18:10:53.0Z",
            "end_date": "2020-08-07T18:10:53.0Z",
            "created": "2012-12-18T00:08:56.495Z",
            "updated": "1976-03-14T20:01:04.153Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="createprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A program response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="createprogram-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## fetchProgramById

<a id="opIdfetchProgramById"></a>

`GET /programs/:program_id`

*Fetches a program by Id*

Fetch Program

<h3 id="fetchprogrambyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|program_id|path|string|true|Id for the program|

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
                  "example": "https://api.nterprise.com/programs/998c7019-46b8-4cfe-8416-f46390c2b6d9"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-nter-relation": "programs",
          "x-nter-model": "Program",
          "x-nter-callable": true,
          "description": "Defines the properties for a program",
          "required": [
            "label",
            "customer",
            "program_id",
            "status_map"
          ],
          "properties": {
            "label": {
              "type": "string",
              "example": "GAP Store refresh",
              "x-examples": [
                "GAP Store refresh"
              ],
              "description": "Name of the program"
            },
            "slug": {
              "type": "string",
              "example": "gap-store-refresh",
              "x-examples": [
                "gap-store-refresh"
              ],
              "description": "Name of the program"
            },
            "program_id": {
              "type": "string",
              "description": "Unique identifier",
              "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
              "x-examples": [
                "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "customer": {
              "description": "The cstomer this program is for",
              "allOf": [
                {
                  "x-id": "#customer",
                  "x-nter-relation": "customers",
                  "x-nter-model": "Customer",
                  "x-nter-callable": true,
                  "description": "Customer",
                  "required": [
                    "label",
                    "customer_id",
                    "status_map"
                  ],
                  "properties": {
                    "customer_id": {
                      "type": "string",
                      "description": "Customer identifier",
                      "example": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                      "x-examples": [
                        "e530652e-28e8-4f64-84af-e1cf0ff7c805"
                      ],
                      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
                      "x-faker": "random.uuid"
                    },
                    "label": {
                      "type": "string",
                      "example": "Zones Inc",
                      "x-examples": [
                        "Zones Inc"
                      ],
                      "description": "Label for the customer"
                    },
                    "slug": {
                      "type": "string",
                      "example": "zones-inc",
                      "x-examples": [
                        "zones-inc"
                      ],
                      "description": "Auto generated slug"
                    },
                    "external_platform": {
                      "type": "object",
                      "description": "External Identifiers for the customer",
                      "nullable": true,
                      "additionalProperties": {
                        "type": "string"
                      },
                      "x-examples": [
                        {
                          "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                        }
                      ]
                    },
                    "allowed_statuses": {
                      "type": "array",
                      "description": "List of allowed statuses",
                      "items": {
                        "x-id": "#status",
                        "x-nter-relation": "statuses",
                        "x-nter-model": "Status",
                        "x-nter-callable": true,
                        "x-ui-hide": true,
                        "description": "Defines the properties for a status",
                        "type": "object",
                        "required": [
                          "status",
                          "status_category"
                        ],
                        "properties": {
                          "status": {
                            "type": "string",
                            "description": "A Custom label for the status",
                            "x-examples": [
                              "Pending",
                              "In Progress",
                              "Verifying",
                              "Complete",
                              "Cancelled",
                              "Blocked",
                              "Reticulating Splines"
                            ]
                          },
                          "category": {
                            "type": "string",
                            "description": "The classifier for the statues",
                            "x-examples": [
                              "PENDING",
                              "IN_PROGRESS",
                              "VERIFYING",
                              "COMPLETE",
                              "CANCELLED",
                              "BLOCKED"
                            ],
                            "enum": [
                              "PENDING",
                              "IN_PROGRESS",
                              "VERIFYING",
                              "COMPLETE",
                              "CANCELLED",
                              "BLOCKED"
                            ]
                          }
                        }
                      }
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
                    "label": "Zones Inc",
                    "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                    "slug": "zones-inc",
                    "external_platform": {
                      "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                    },
                    "allowed_statuses": [
                      {
                        "status": "Reticulating Splines",
                        "category": "BLOCKED"
                      }
                    ],
                    "created": "1960-01-22T21:27:37.876Z",
                    "updated": "2015-12-03T17:42:43.706Z"
                  }
                }
              ]
            },
            "allowed_statuses": {
              "type": "array",
              "description": "List of allowed statuses",
              "items": {
                "x-id": "#status",
                "x-nter-relation": "statuses",
                "x-nter-model": "Status",
                "x-nter-callable": true,
                "x-ui-hide": true,
                "description": "Defines the properties for a status",
                "type": "object",
                "required": [
                  "status",
                  "status_category"
                ],
                "properties": {
                  "status": {
                    "type": "string",
                    "description": "A Custom label for the status",
                    "x-examples": [
                      "Pending",
                      "In Progress",
                      "Verifying",
                      "Complete",
                      "Cancelled",
                      "Blocked",
                      "Reticulating Splines"
                    ]
                  },
                  "category": {
                    "type": "string",
                    "description": "The classifier for the statues",
                    "x-examples": [
                      "PENDING",
                      "IN_PROGRESS",
                      "VERIFYING",
                      "COMPLETE",
                      "CANCELLED",
                      "BLOCKED"
                    ],
                    "enum": [
                      "PENDING",
                      "IN_PROGRESS",
                      "VERIFYING",
                      "COMPLETE",
                      "CANCELLED",
                      "BLOCKED"
                    ]
                  }
                }
              }
            },
            "start_date": {
              "type": "string",
              "format": "date-time",
              "description": "Start date",
              "example": "2019-08-07T18:10:53+00:00",
              "x-examples": [
                "2019-08-07T18:10:53+00:00"
              ]
            },
            "end_date": {
              "type": "string",
              "format": "date-time",
              "description": "End date",
              "example": "2020-08-07T18:10:53+00:00",
              "x-examples": [
                "2020-08-07T18:10:53+00:00"
              ]
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
            "label": "GAP Store refresh",
            "customer": {
              "label": "Zones Inc",
              "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
              "slug": "zones-inc",
              "external_platform": {
                "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
              },
              "allowed_statuses": [
                {
                  "status": "Complete",
                  "category": "PENDING"
                },
                {
                  "status": "Complete",
                  "category": "COMPLETE"
                }
              ],
              "created": "1955-12-06T23:51:05.546Z",
              "updated": "2006-05-29T02:08:42.08Z"
            },
            "program_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
            "slug": "gap-store-refresh",
            "allowed_statuses": [
              {
                "status": "Pending",
                "category": "CANCELLED"
              },
              {
                "status": "Reticulating Splines",
                "category": "VERIFYING"
              }
            ],
            "start_date": "2019-08-07T18:10:53.0Z",
            "end_date": "2020-08-07T18:10:53.0Z",
            "created": "2012-12-18T00:08:56.495Z",
            "updated": "1976-03-14T20:01:04.153Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="fetchprogrambyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A program response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchprogrambyid-responseschema">Response Schema</h3>

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

## updateProgram

<a id="opIdupdateProgram"></a>

`PUT /programs/:program_id`

*Updates a program*

Updates a program

> Body parameter

```json
{
  "type": "object",
  "description": "Program to create",
  "required": [
    "label"
  ],
  "properties": {
    "label": {
      "type": "string",
      "example": "GAP Store refresh",
      "x-examples": [
        "GAP Store refresh"
      ],
      "description": "Name of the program"
    },
    "allowed_statuses": {
      "type": "array",
      "description": "List of allowed statuses",
      "items": {
        "x-id": "#status",
        "x-nter-relation": "statuses",
        "x-nter-model": "Status",
        "x-nter-callable": true,
        "x-ui-hide": true,
        "description": "Defines the properties for a status",
        "type": "object",
        "required": [
          "status",
          "status_category"
        ],
        "properties": {
          "status": {
            "type": "string",
            "description": "A Custom label for the status",
            "x-examples": [
              "Pending",
              "In Progress",
              "Verifying",
              "Complete",
              "Cancelled",
              "Blocked",
              "Reticulating Splines"
            ]
          },
          "category": {
            "type": "string",
            "description": "The classifier for the statues",
            "x-examples": [
              "PENDING",
              "IN_PROGRESS",
              "VERIFYING",
              "COMPLETE",
              "CANCELLED",
              "BLOCKED"
            ],
            "enum": [
              "PENDING",
              "IN_PROGRESS",
              "VERIFYING",
              "COMPLETE",
              "CANCELLED",
              "BLOCKED"
            ]
          }
        }
      }
    },
    "start_date": {
      "type": "string",
      "format": "date-time",
      "description": "Start date",
      "example": "2019-08-07T18:10:53+00:00",
      "x-examples": [
        "2019-08-07T18:10:53+00:00"
      ]
    },
    "end_date": {
      "type": "string",
      "format": "date-time",
      "description": "End date",
      "example": "2020-08-07T18:10:53+00:00",
      "x-examples": [
        "2020-08-07T18:10:53+00:00"
      ]
    }
  }
}
```

<h3 id="updateprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|program_id|path|string|true|Id for the program|
|label|body|string|true|Name of the program|
|allowed_statuses|body|[object]|false|List of allowed statuses|
|» status|body|string|true|A Custom label for the status|
|» category|body|string|false|The classifier for the statues|
|start_date|body|string(date-time)|false|Start date|
|end_date|body|string(date-time)|false|End date|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|PENDING|
|» category|IN_PROGRESS|
|» category|VERIFYING|
|» category|COMPLETE|
|» category|CANCELLED|
|» category|BLOCKED|

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
                  "example": "https://api.nterprise.com/programs/998c7019-46b8-4cfe-8416-f46390c2b6d9"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-nter-relation": "programs",
          "x-nter-model": "Program",
          "x-nter-callable": true,
          "description": "Defines the properties for a program",
          "required": [
            "label",
            "customer",
            "program_id",
            "status_map"
          ],
          "properties": {
            "label": {
              "type": "string",
              "example": "GAP Store refresh",
              "x-examples": [
                "GAP Store refresh"
              ],
              "description": "Name of the program"
            },
            "slug": {
              "type": "string",
              "example": "gap-store-refresh",
              "x-examples": [
                "gap-store-refresh"
              ],
              "description": "Name of the program"
            },
            "program_id": {
              "type": "string",
              "description": "Unique identifier",
              "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
              "x-examples": [
                "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "customer": {
              "description": "The cstomer this program is for",
              "allOf": [
                {
                  "x-id": "#customer",
                  "x-nter-relation": "customers",
                  "x-nter-model": "Customer",
                  "x-nter-callable": true,
                  "description": "Customer",
                  "required": [
                    "label",
                    "customer_id",
                    "status_map"
                  ],
                  "properties": {
                    "customer_id": {
                      "type": "string",
                      "description": "Customer identifier",
                      "example": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                      "x-examples": [
                        "e530652e-28e8-4f64-84af-e1cf0ff7c805"
                      ],
                      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
                      "x-faker": "random.uuid"
                    },
                    "label": {
                      "type": "string",
                      "example": "Zones Inc",
                      "x-examples": [
                        "Zones Inc"
                      ],
                      "description": "Label for the customer"
                    },
                    "slug": {
                      "type": "string",
                      "example": "zones-inc",
                      "x-examples": [
                        "zones-inc"
                      ],
                      "description": "Auto generated slug"
                    },
                    "external_platform": {
                      "type": "object",
                      "description": "External Identifiers for the customer",
                      "nullable": true,
                      "additionalProperties": {
                        "type": "string"
                      },
                      "x-examples": [
                        {
                          "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                        }
                      ]
                    },
                    "allowed_statuses": {
                      "type": "array",
                      "description": "List of allowed statuses",
                      "items": {
                        "x-id": "#status",
                        "x-nter-relation": "statuses",
                        "x-nter-model": "Status",
                        "x-nter-callable": true,
                        "x-ui-hide": true,
                        "description": "Defines the properties for a status",
                        "type": "object",
                        "required": [
                          "status",
                          "status_category"
                        ],
                        "properties": {
                          "status": {
                            "type": "string",
                            "description": "A Custom label for the status",
                            "x-examples": [
                              "Pending",
                              "In Progress",
                              "Verifying",
                              "Complete",
                              "Cancelled",
                              "Blocked",
                              "Reticulating Splines"
                            ]
                          },
                          "category": {
                            "type": "string",
                            "description": "The classifier for the statues",
                            "x-examples": [
                              "PENDING",
                              "IN_PROGRESS",
                              "VERIFYING",
                              "COMPLETE",
                              "CANCELLED",
                              "BLOCKED"
                            ],
                            "enum": [
                              "PENDING",
                              "IN_PROGRESS",
                              "VERIFYING",
                              "COMPLETE",
                              "CANCELLED",
                              "BLOCKED"
                            ]
                          }
                        }
                      }
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
                    "label": "Zones Inc",
                    "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                    "slug": "zones-inc",
                    "external_platform": {
                      "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                    },
                    "allowed_statuses": [
                      {
                        "status": "Reticulating Splines",
                        "category": "BLOCKED"
                      }
                    ],
                    "created": "1960-01-22T21:27:37.876Z",
                    "updated": "2015-12-03T17:42:43.706Z"
                  }
                }
              ]
            },
            "allowed_statuses": {
              "type": "array",
              "description": "List of allowed statuses",
              "items": {
                "x-id": "#status",
                "x-nter-relation": "statuses",
                "x-nter-model": "Status",
                "x-nter-callable": true,
                "x-ui-hide": true,
                "description": "Defines the properties for a status",
                "type": "object",
                "required": [
                  "status",
                  "status_category"
                ],
                "properties": {
                  "status": {
                    "type": "string",
                    "description": "A Custom label for the status",
                    "x-examples": [
                      "Pending",
                      "In Progress",
                      "Verifying",
                      "Complete",
                      "Cancelled",
                      "Blocked",
                      "Reticulating Splines"
                    ]
                  },
                  "category": {
                    "type": "string",
                    "description": "The classifier for the statues",
                    "x-examples": [
                      "PENDING",
                      "IN_PROGRESS",
                      "VERIFYING",
                      "COMPLETE",
                      "CANCELLED",
                      "BLOCKED"
                    ],
                    "enum": [
                      "PENDING",
                      "IN_PROGRESS",
                      "VERIFYING",
                      "COMPLETE",
                      "CANCELLED",
                      "BLOCKED"
                    ]
                  }
                }
              }
            },
            "start_date": {
              "type": "string",
              "format": "date-time",
              "description": "Start date",
              "example": "2019-08-07T18:10:53+00:00",
              "x-examples": [
                "2019-08-07T18:10:53+00:00"
              ]
            },
            "end_date": {
              "type": "string",
              "format": "date-time",
              "description": "End date",
              "example": "2020-08-07T18:10:53+00:00",
              "x-examples": [
                "2020-08-07T18:10:53+00:00"
              ]
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
            "label": "GAP Store refresh",
            "customer": {
              "label": "Zones Inc",
              "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
              "slug": "zones-inc",
              "external_platform": {
                "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
              },
              "allowed_statuses": [
                {
                  "status": "Complete",
                  "category": "PENDING"
                },
                {
                  "status": "Complete",
                  "category": "COMPLETE"
                }
              ],
              "created": "1955-12-06T23:51:05.546Z",
              "updated": "2006-05-29T02:08:42.08Z"
            },
            "program_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
            "slug": "gap-store-refresh",
            "allowed_statuses": [
              {
                "status": "Pending",
                "category": "CANCELLED"
              },
              {
                "status": "Reticulating Splines",
                "category": "VERIFYING"
              }
            ],
            "start_date": "2019-08-07T18:10:53.0Z",
            "end_date": "2020-08-07T18:10:53.0Z",
            "created": "2012-12-18T00:08:56.495Z",
            "updated": "1976-03-14T20:01:04.153Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="updateprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A program response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="updateprogram-responseschema">Response Schema</h3>

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

## deleteProgram

<a id="opIddeleteProgram"></a>

`DELETE /programs/:program_id`

*Deletes a program*

This will soft delete the program

<h3 id="deleteprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|program_id|path|string|true|Id for the program|

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

<h3 id="deleteprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Program deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="deleteprogram-responseschema">Response Schema</h3>

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

## fetchAllProgramProjects

<a id="opIdfetchAllProgramProjects"></a>

`GET /programs/:program_id/projects`

*Fetches A Page of projects for a program*

Fetch Projects

<h3 id="fetchallprogramprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|program_id|path|string|true|Id for the program|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|sort|query|string|false|Sort by field|
|filter[label]|query|string|false|Filter where the label contains this value|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|label|
|sort|-label|
|sort|start_date|
|sort|-start_date|
|sort|end_date|
|sort|-end_date|
|sort|created|
|sort|-created|
|sort|updated|
|sort|-updated|
|sort|customer|
|sort|-customer|
|sort|program|
|sort|-program|

> Example responses

> 200 Response

```json
{
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:projects": {
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
                        "example": "https://api.nterprise.com/projects/f1ee214c-8f6b-4eab-a56a-98cafd7f42d6"
                      }
                    }
                  }
                }
              }
            },
            "allOf": [
              {
                "x-nter-relation": "projects",
                "x-nter-model": "Project",
                "x-nter-callable": true,
                "description": "Defines the properties for a project",
                "required": [
                  "label",
                  "customer",
                  "program",
                  "status_map"
                ],
                "properties": {
                  "label": {
                    "type": "string",
                    "example": "Store 42",
                    "x-examples": [
                      "Store 42"
                    ],
                    "description": "Name of the project"
                  },
                  "slug": {
                    "type": "string",
                    "example": "store-42",
                    "x-examples": [
                      "store-42"
                    ],
                    "description": "Auto-generated slug for the project"
                  },
                  "project_id": {
                    "type": "string",
                    "description": "Unique identifier",
                    "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                    "x-examples": [
                      "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
                    ],
                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                  },
                  "customer": {
                    "description": "The customer this project is for",
                    "allOf": [
                      {
                        "x-id": "#customer",
                        "x-nter-relation": "customers",
                        "x-nter-model": "Customer",
                        "x-nter-callable": true,
                        "description": "Customer",
                        "required": [
                          "label",
                          "customer_id",
                          "status_map"
                        ],
                        "properties": {
                          "customer_id": {
                            "type": "string",
                            "description": "Customer identifier",
                            "example": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                            "x-examples": [
                              "e530652e-28e8-4f64-84af-e1cf0ff7c805"
                            ],
                            "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
                            "x-faker": "random.uuid"
                          },
                          "label": {
                            "type": "string",
                            "example": "Zones Inc",
                            "x-examples": [
                              "Zones Inc"
                            ],
                            "description": "Label for the customer"
                          },
                          "slug": {
                            "type": "string",
                            "example": "zones-inc",
                            "x-examples": [
                              "zones-inc"
                            ],
                            "description": "Auto generated slug"
                          },
                          "external_platform": {
                            "type": "object",
                            "description": "External Identifiers for the customer",
                            "nullable": true,
                            "additionalProperties": {
                              "type": "string"
                            },
                            "x-examples": [
                              {
                                "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                              }
                            ]
                          },
                          "allowed_statuses": {
                            "type": "array",
                            "description": "List of allowed statuses",
                            "items": {
                              "x-id": "#status",
                              "x-nter-relation": "statuses",
                              "x-nter-model": "Status",
                              "x-nter-callable": true,
                              "x-ui-hide": true,
                              "description": "Defines the properties for a status",
                              "type": "object",
                              "required": [
                                "status",
                                "status_category"
                              ],
                              "properties": {
                                "status": {
                                  "type": "string",
                                  "description": "A Custom label for the status",
                                  "x-examples": [
                                    "Pending",
                                    "In Progress",
                                    "Verifying",
                                    "Complete",
                                    "Cancelled",
                                    "Blocked",
                                    "Reticulating Splines"
                                  ]
                                },
                                "category": {
                                  "type": "string",
                                  "description": "The classifier for the statues",
                                  "x-examples": [
                                    "PENDING",
                                    "IN_PROGRESS",
                                    "VERIFYING",
                                    "COMPLETE",
                                    "CANCELLED",
                                    "BLOCKED"
                                  ],
                                  "enum": [
                                    "PENDING",
                                    "IN_PROGRESS",
                                    "VERIFYING",
                                    "COMPLETE",
                                    "CANCELLED",
                                    "BLOCKED"
                                  ]
                                }
                              }
                            }
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
                          "label": "Zones Inc",
                          "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                          "slug": "zones-inc",
                          "external_platform": {
                            "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                          },
                          "allowed_statuses": [
                            {
                              "status": "Reticulating Splines",
                              "category": "BLOCKED"
                            }
                          ],
                          "created": "1960-01-22T21:27:37.876Z",
                          "updated": "2015-12-03T17:42:43.706Z"
                        }
                      }
                    ]
                  },
                  "program": {
                    "x-ref": "#program",
                    "description": "The program this project is for",
                    "allOf": [
                      {
                        "x-nter-relation": "programs",
                        "x-nter-model": "Program",
                        "x-nter-callable": true,
                        "description": "Defines the properties for a program",
                        "required": [
                          "label",
                          "customer",
                          "program_id",
                          "status_map"
                        ],
                        "properties": {
                          "label": {
                            "type": "string",
                            "example": "GAP Store refresh",
                            "x-examples": [
                              "GAP Store refresh"
                            ],
                            "description": "Name of the program"
                          },
                          "slug": {
                            "type": "string",
                            "example": "gap-store-refresh",
                            "x-examples": [
                              "gap-store-refresh"
                            ],
                            "description": "Name of the program"
                          },
                          "program_id": {
                            "type": "string",
                            "description": "Unique identifier",
                            "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                            "x-examples": [
                              "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
                            ],
                            "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                          },
                          "customer": {
                            "description": "The cstomer this program is for",
                            "allOf": [
                              {
                                "x-id": "#customer",
                                "x-nter-relation": "customers",
                                "x-nter-model": "Customer",
                                "x-nter-callable": true,
                                "description": "Customer",
                                "required": [
                                  "label",
                                  "customer_id",
                                  "status_map"
                                ],
                                "properties": {
                                  "customer_id": {
                                    "type": "string",
                                    "description": "Customer identifier",
                                    "example": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                                    "x-examples": [
                                      "e530652e-28e8-4f64-84af-e1cf0ff7c805"
                                    ],
                                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
                                    "x-faker": "random.uuid"
                                  },
                                  "label": {
                                    "type": "string",
                                    "example": "Zones Inc",
                                    "x-examples": [
                                      "Zones Inc"
                                    ],
                                    "description": "Label for the customer"
                                  },
                                  "slug": {
                                    "type": "string",
                                    "example": "zones-inc",
                                    "x-examples": [
                                      "zones-inc"
                                    ],
                                    "description": "Auto generated slug"
                                  },
                                  "external_platform": {
                                    "type": "object",
                                    "description": "External Identifiers for the customer",
                                    "nullable": true,
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "x-examples": [
                                      {
                                        "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                                      }
                                    ]
                                  },
                                  "allowed_statuses": {
                                    "type": "array",
                                    "description": "List of allowed statuses",
                                    "items": {
                                      "x-id": "#status",
                                      "x-nter-relation": "statuses",
                                      "x-nter-model": "Status",
                                      "x-nter-callable": true,
                                      "x-ui-hide": true,
                                      "description": "Defines the properties for a status",
                                      "type": "object",
                                      "required": [
                                        "status",
                                        "status_category"
                                      ],
                                      "properties": {
                                        "status": {
                                          "type": "string",
                                          "description": "A Custom label for the status",
                                          "x-examples": [
                                            "Pending",
                                            "In Progress",
                                            "Verifying",
                                            "Complete",
                                            "Cancelled",
                                            "Blocked",
                                            "Reticulating Splines"
                                          ]
                                        },
                                        "category": {
                                          "type": "string",
                                          "description": "The classifier for the statues",
                                          "x-examples": [
                                            "PENDING",
                                            "IN_PROGRESS",
                                            "VERIFYING",
                                            "COMPLETE",
                                            "CANCELLED",
                                            "BLOCKED"
                                          ],
                                          "enum": [
                                            "PENDING",
                                            "IN_PROGRESS",
                                            "VERIFYING",
                                            "COMPLETE",
                                            "CANCELLED",
                                            "BLOCKED"
                                          ]
                                        }
                                      }
                                    }
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
                                  "label": "Zones Inc",
                                  "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                                  "slug": "zones-inc",
                                  "external_platform": {
                                    "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                                  },
                                  "allowed_statuses": [
                                    {
                                      "status": "Reticulating Splines",
                                      "category": "BLOCKED"
                                    }
                                  ],
                                  "created": "1960-01-22T21:27:37.876Z",
                                  "updated": "2015-12-03T17:42:43.706Z"
                                }
                              }
                            ]
                          },
                          "allowed_statuses": {
                            "type": "array",
                            "description": "List of allowed statuses",
                            "items": {
                              "x-id": "#status",
                              "x-nter-relation": "statuses",
                              "x-nter-model": "Status",
                              "x-nter-callable": true,
                              "x-ui-hide": true,
                              "description": "Defines the properties for a status",
                              "type": "object",
                              "required": [
                                "status",
                                "status_category"
                              ],
                              "properties": {
                                "status": {
                                  "type": "string",
                                  "description": "A Custom label for the status",
                                  "x-examples": [
                                    "Pending",
                                    "In Progress",
                                    "Verifying",
                                    "Complete",
                                    "Cancelled",
                                    "Blocked",
                                    "Reticulating Splines"
                                  ]
                                },
                                "category": {
                                  "type": "string",
                                  "description": "The classifier for the statues",
                                  "x-examples": [
                                    "PENDING",
                                    "IN_PROGRESS",
                                    "VERIFYING",
                                    "COMPLETE",
                                    "CANCELLED",
                                    "BLOCKED"
                                  ],
                                  "enum": [
                                    "PENDING",
                                    "IN_PROGRESS",
                                    "VERIFYING",
                                    "COMPLETE",
                                    "CANCELLED",
                                    "BLOCKED"
                                  ]
                                }
                              }
                            }
                          },
                          "start_date": {
                            "type": "string",
                            "format": "date-time",
                            "description": "Start date",
                            "example": "2019-08-07T18:10:53+00:00",
                            "x-examples": [
                              "2019-08-07T18:10:53+00:00"
                            ]
                          },
                          "end_date": {
                            "type": "string",
                            "format": "date-time",
                            "description": "End date",
                            "example": "2020-08-07T18:10:53+00:00",
                            "x-examples": [
                              "2020-08-07T18:10:53+00:00"
                            ]
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
                          "label": "GAP Store refresh",
                          "customer": {
                            "label": "Zones Inc",
                            "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                            "slug": "zones-inc",
                            "external_platform": {
                              "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                            },
                            "allowed_statuses": [
                              {
                                "status": "Complete",
                                "category": "PENDING"
                              },
                              {
                                "status": "Complete",
                                "category": "COMPLETE"
                              }
                            ],
                            "created": "1955-12-06T23:51:05.546Z",
                            "updated": "2006-05-29T02:08:42.08Z"
                          },
                          "program_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                          "slug": "gap-store-refresh",
                          "allowed_statuses": [
                            {
                              "status": "Pending",
                              "category": "CANCELLED"
                            },
                            {
                              "status": "Reticulating Splines",
                              "category": "VERIFYING"
                            }
                          ],
                          "start_date": "2019-08-07T18:10:53.0Z",
                          "end_date": "2020-08-07T18:10:53.0Z",
                          "created": "2012-12-18T00:08:56.495Z",
                          "updated": "1976-03-14T20:01:04.153Z"
                        }
                      }
                    ]
                  },
                  "allowed_statuses": {
                    "type": "array",
                    "description": "List of allowed statuses",
                    "items": {
                      "x-id": "#status",
                      "x-nter-relation": "statuses",
                      "x-nter-model": "Status",
                      "x-nter-callable": true,
                      "x-ui-hide": true,
                      "description": "Defines the properties for a status",
                      "type": "object",
                      "required": [
                        "status",
                        "status_category"
                      ],
                      "properties": {
                        "status": {
                          "type": "string",
                          "description": "A Custom label for the status",
                          "x-examples": [
                            "Pending",
                            "In Progress",
                            "Verifying",
                            "Complete",
                            "Cancelled",
                            "Blocked",
                            "Reticulating Splines"
                          ]
                        },
                        "category": {
                          "type": "string",
                          "description": "The classifier for the statues",
                          "x-examples": [
                            "PENDING",
                            "IN_PROGRESS",
                            "VERIFYING",
                            "COMPLETE",
                            "CANCELLED",
                            "BLOCKED"
                          ],
                          "enum": [
                            "PENDING",
                            "IN_PROGRESS",
                            "VERIFYING",
                            "COMPLETE",
                            "CANCELLED",
                            "BLOCKED"
                          ]
                        }
                      }
                    }
                  },
                  "start_date": {
                    "type": "string",
                    "format": "date-time",
                    "description": "Start date",
                    "example": "2019-08-07T18:10:53+00:00",
                    "x-examples": [
                      "2019-08-07T18:10:53+00:00"
                    ]
                  },
                  "end_date": {
                    "type": "string",
                    "format": "date-time",
                    "description": "End date",
                    "example": "2020-08-07T18:10:53+00:00",
                    "x-examples": [
                      "2020-08-07T18:10:53+00:00"
                    ]
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
                  "label": "Store 42",
                  "customer": {
                    "label": "Zones Inc",
                    "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                    "slug": "zones-inc",
                    "external_platform": {
                      "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                    },
                    "allowed_statuses": [
                      {
                        "status": "Cancelled",
                        "category": "BLOCKED"
                      },
                      {
                        "status": "Blocked",
                        "category": "IN_PROGRESS"
                      },
                      {
                        "status": "In Progress",
                        "category": "BLOCKED"
                      },
                      {
                        "status": "Pending",
                        "category": "IN_PROGRESS"
                      },
                      {
                        "status": "Cancelled",
                        "category": "PENDING"
                      }
                    ],
                    "created": "1964-10-25T11:53:33.874Z",
                    "updated": "1967-05-02T04:57:03.849Z"
                  },
                  "program": {
                    "label": "GAP Store refresh",
                    "customer": {
                      "label": "Zones Inc",
                      "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                      "slug": "zones-inc",
                      "external_platform": {
                        "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                      },
                      "allowed_statuses": [
                        {
                          "status": "Pending",
                          "category": "IN_PROGRESS"
                        }
                      ],
                      "created": "1951-05-06T15:05:25.354Z",
                      "updated": "1999-06-26T00:52:18.397Z"
                    },
                    "program_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                    "slug": "gap-store-refresh",
                    "allowed_statuses": [
                      {
                        "status": "Complete",
                        "category": "PENDING"
                      },
                      {
                        "status": "Cancelled",
                        "category": "COMPLETE"
                      },
                      {
                        "status": "Blocked",
                        "category": "PENDING"
                      }
                    ],
                    "start_date": "2019-08-07T18:10:53.0Z",
                    "end_date": "2020-08-07T18:10:53.0Z",
                    "created": "1987-08-14T20:40:24.45Z",
                    "updated": "1959-10-27T04:46:00.439Z"
                  },
                  "slug": "store-42",
                  "project_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                  "allowed_statuses": [
                    {
                      "status": "Blocked",
                      "category": "CANCELLED"
                    },
                    {
                      "status": "Blocked",
                      "category": "VERIFYING"
                    },
                    {
                      "status": "Verifying",
                      "category": "BLOCKED"
                    }
                  ],
                  "start_date": "2019-08-07T18:10:53.0Z",
                  "end_date": "2020-08-07T18:10:53.0Z",
                  "created": "1945-03-13T02:13:07.403Z",
                  "updated": "1972-09-28T18:30:22.6Z"
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

<h3 id="fetchallprogramprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for projects|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallprogramprojects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:projects|[allOf]|false|none|none|
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

## fetchAllProgramWorkOrders

<a id="opIdfetchAllProgramWorkOrders"></a>

`GET /programs/:program_id/work-orders`

*Fetches work orders for a program*

Fetch program work orders

<h3 id="fetchallprogramworkorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|program_id|path|string|true|Id for the program|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|sort|query|string|false|Sort by field|
|filter[label]|query|string|false|Filter where the label contains this value|
|filter[project_id]|query|string|false|Filter where the project id is this value|
|filter[program_id]|query|string|false|Filter where the program id is this value|
|filter[location_id]|query|string|false|Filter where the location id is this value|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|customer|
|sort|-customer|
|sort|project|
|sort|-project|
|sort|program|
|sort|-program|
|sort|dueDate|
|sort|-dueDate|
|sort|startDate|
|sort|-startDate|
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
        "nter:work-orders": {
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
                        "example": "https://api.nterprise.com/work-orders/d8a49f8b-85af-4c71-9518-481f3319105b"
                      }
                    }
                  }
                }
              }
            },
            "allOf": [
              {
                "x-id": "#work-order",
                "x-nter-relation": "work-orders",
                "x-nter-model": "WorkOrder",
                "x-nter-callable": true,
                "description": "Defines the properties for a unit",
                "required": [
                  "label",
                  "part",
                  "unit_id"
                ],
                "properties": {
                  "work_order_id": {
                    "type": "string",
                    "description": "The identifier for the unit",
                    "example": "0f40ff8c-a3b5-4a30-90e5-0421c153183c",
                    "x-examples": [
                      "0f40ff8c-a3b5-4a30-90e5-0421c153183c"
                    ],
                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                  },
                  "label": {
                    "type": "string",
                    "example": "Provision devices",
                    "x-examples": [
                      "Provision devices"
                    ],
                    "description": "Label for the work order"
                  },
                  "slug": {
                    "type": "string",
                    "example": "provision-devices",
                    "x-examples": [
                      "provision-devices"
                    ],
                    "description": "Auto-generated slug for the work order"
                  },
                  "description": {
                    "type": "string",
                    "example": "Provision 150 devices for 123 Main St",
                    "x-examples": [
                      "Provision 150 devices for 123 Main St"
                    ],
                    "description": "Detailed description for the work order"
                  },
                  "type": {
                    "type": "string",
                    "description": "Type of work order",
                    "example": "device",
                    "x-examples": [
                      "device"
                    ],
                    "enum": [
                      "device"
                    ]
                  },
                  "due_date": {
                    "type": "string",
                    "format": "date-time",
                    "description": "End date",
                    "example": "2020-08-07T18:10:53+00:00",
                    "x-examples": [
                      "2020-08-07T18:10:53+00:00"
                    ]
                  },
                  "current_status": {
                    "x-id": "#status",
                    "x-nter-relation": "statuses",
                    "x-nter-model": "Status",
                    "x-nter-callable": true,
                    "x-ui-hide": true,
                    "description": "Defines the properties for a status",
                    "type": "object",
                    "required": [
                      "status",
                      "status_category"
                    ],
                    "properties": {
                      "status": {
                        "type": "string",
                        "description": "A Custom label for the status",
                        "x-examples": [
                          "Pending",
                          "In Progress",
                          "Verifying",
                          "Complete",
                          "Cancelled",
                          "Blocked",
                          "Reticulating Splines"
                        ]
                      },
                      "category": {
                        "type": "string",
                        "description": "The classifier for the statues",
                        "x-examples": [
                          "PENDING",
                          "IN_PROGRESS",
                          "VERIFYING",
                          "COMPLETE",
                          "CANCELLED",
                          "BLOCKED"
                        ],
                        "enum": [
                          "PENDING",
                          "IN_PROGRESS",
                          "VERIFYING",
                          "COMPLETE",
                          "CANCELLED",
                          "BLOCKED"
                        ]
                      }
                    }
                  },
                  "status_history": {
                    "maximum": 10,
                    "description": "The last ten statuses",
                    "allOf": [
                      {
                        "x-id": "#status",
                        "x-ui-hide": true,
                        "description": "Defines the properties for a status history",
                        "type": "array",
                        "readOnly": true,
                        "items": {
                          "type": "object",
                          "description": "The time of transition into this status",
                          "properties": {
                            "created": {
                              "type": "string",
                              "description": "The date time this transition occurred",
                              "format": "date-time",
                              "x-comment": "Instead of using a new DB field, we will use the existing created field"
                            }
                          },
                          "allOf": [
                            {
                              "x-id": "#status",
                              "x-nter-relation": "statuses",
                              "x-nter-model": "Status",
                              "x-nter-callable": true,
                              "x-ui-hide": true,
                              "description": "Defines the properties for a status",
                              "type": "object",
                              "required": [
                                "status",
                                "status_category"
                              ],
                              "properties": {
                                "status": {
                                  "type": "string",
                                  "description": "A Custom label for the status",
                                  "x-examples": [
                                    "Pending",
                                    "In Progress",
                                    "Verifying",
                                    "Complete",
                                    "Cancelled",
                                    "Blocked",
                                    "Reticulating Splines"
                                  ]
                                },
                                "category": {
                                  "type": "string",
                                  "description": "The classifier for the statues",
                                  "x-examples": [
                                    "PENDING",
                                    "IN_PROGRESS",
                                    "VERIFYING",
                                    "COMPLETE",
                                    "CANCELLED",
                                    "BLOCKED"
                                  ],
                                  "enum": [
                                    "PENDING",
                                    "IN_PROGRESS",
                                    "VERIFYING",
                                    "COMPLETE",
                                    "CANCELLED",
                                    "BLOCKED"
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "project": {
                    "x-nter-relation": "projects",
                    "x-nter-model": "Project",
                    "x-nter-callable": true,
                    "description": "Defines the properties for a project",
                    "required": [
                      "label",
                      "customer",
                      "program",
                      "status_map"
                    ],
                    "properties": {
                      "label": {
                        "type": "string",
                        "example": "Store 42",
                        "x-examples": [
                          "Store 42"
                        ],
                        "description": "Name of the project"
                      },
                      "slug": {
                        "type": "string",
                        "example": "store-42",
                        "x-examples": [
                          "store-42"
                        ],
                        "description": "Auto-generated slug for the project"
                      },
                      "project_id": {
                        "type": "string",
                        "description": "Unique identifier",
                        "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                        "x-examples": [
                          "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
                        ],
                        "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                      },
                      "customer": {
                        "description": "The customer this project is for",
                        "allOf": [
                          {
                            "x-id": "#customer",
                            "x-nter-relation": "customers",
                            "x-nter-model": "Customer",
                            "x-nter-callable": true,
                            "description": "Customer",
                            "required": [
                              "label",
                              "customer_id",
                              "status_map"
                            ],
                            "properties": {
                              "customer_id": {
                                "type": "string",
                                "description": "Customer identifier",
                                "example": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                                "x-examples": [
                                  "e530652e-28e8-4f64-84af-e1cf0ff7c805"
                                ],
                                "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
                                "x-faker": "random.uuid"
                              },
                              "label": {
                                "type": "string",
                                "example": "Zones Inc",
                                "x-examples": [
                                  "Zones Inc"
                                ],
                                "description": "Label for the customer"
                              },
                              "slug": {
                                "type": "string",
                                "example": "zones-inc",
                                "x-examples": [
                                  "zones-inc"
                                ],
                                "description": "Auto generated slug"
                              },
                              "external_platform": {
                                "type": "object",
                                "description": "External Identifiers for the customer",
                                "nullable": true,
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "x-examples": [
                                  {
                                    "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                                  }
                                ]
                              },
                              "allowed_statuses": {
                                "type": "array",
                                "description": "List of allowed statuses",
                                "items": {
                                  "x-id": "#status",
                                  "x-nter-relation": "statuses",
                                  "x-nter-model": "Status",
                                  "x-nter-callable": true,
                                  "x-ui-hide": true,
                                  "description": "Defines the properties for a status",
                                  "type": "object",
                                  "required": [
                                    "status",
                                    "status_category"
                                  ],
                                  "properties": {
                                    "status": {
                                      "type": "string",
                                      "description": "A Custom label for the status",
                                      "x-examples": [
                                        "Pending",
                                        "In Progress",
                                        "Verifying",
                                        "Complete",
                                        "Cancelled",
                                        "Blocked",
                                        "Reticulating Splines"
                                      ]
                                    },
                                    "category": {
                                      "type": "string",
                                      "description": "The classifier for the statues",
                                      "x-examples": [
                                        "PENDING",
                                        "IN_PROGRESS",
                                        "VERIFYING",
                                        "COMPLETE",
                                        "CANCELLED",
                                        "BLOCKED"
                                      ],
                                      "enum": [
                                        "PENDING",
                                        "IN_PROGRESS",
                                        "VERIFYING",
                                        "COMPLETE",
                                        "CANCELLED",
                                        "BLOCKED"
                                      ]
                                    }
                                  }
                                }
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
                              "label": "Zones Inc",
                              "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                              "slug": "zones-inc",
                              "external_platform": {
                                "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                              },
                              "allowed_statuses": [
                                {
                                  "status": "Reticulating Splines",
                                  "category": "BLOCKED"
                                }
                              ],
                              "created": "1960-01-22T21:27:37.876Z",
                              "updated": "2015-12-03T17:42:43.706Z"
                            }
                          }
                        ]
                      },
                      "program": {
                        "x-ref": "#program",
                        "description": "The program this project is for",
                        "allOf": [
                          {
                            "x-nter-relation": "programs",
                            "x-nter-model": "Program",
                            "x-nter-callable": true,
                            "description": "Defines the properties for a program",
                            "required": [
                              "label",
                              "customer",
                              "program_id",
                              "status_map"
                            ],
                            "properties": {
                              "label": {
                                "type": "string",
                                "example": "GAP Store refresh",
                                "x-examples": [
                                  "GAP Store refresh"
                                ],
                                "description": "Name of the program"
                              },
                              "slug": {
                                "type": "string",
                                "example": "gap-store-refresh",
                                "x-examples": [
                                  "gap-store-refresh"
                                ],
                                "description": "Name of the program"
                              },
                              "program_id": {
                                "type": "string",
                                "description": "Unique identifier",
                                "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                                "x-examples": [
                                  "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
                                ],
                                "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                              },
                              "customer": {
                                "description": "The cstomer this program is for",
                                "allOf": [
                                  {
                                    "x-id": "#customer",
                                    "x-nter-relation": "customers",
                                    "x-nter-model": "Customer",
                                    "x-nter-callable": true,
                                    "description": "Customer",
                                    "required": [
                                      "label",
                                      "customer_id",
                                      "status_map"
                                    ],
                                    "properties": {
                                      "customer_id": {
                                        "type": "string",
                                        "description": "Customer identifier",
                                        "example": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                                        "x-examples": [
                                          "e530652e-28e8-4f64-84af-e1cf0ff7c805"
                                        ],
                                        "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
                                        "x-faker": "random.uuid"
                                      },
                                      "label": {
                                        "type": "string",
                                        "example": "Zones Inc",
                                        "x-examples": [
                                          "Zones Inc"
                                        ],
                                        "description": "Label for the customer"
                                      },
                                      "slug": {
                                        "type": "string",
                                        "example": "zones-inc",
                                        "x-examples": [
                                          "zones-inc"
                                        ],
                                        "description": "Auto generated slug"
                                      },
                                      "external_platform": {
                                        "type": "object",
                                        "description": "External Identifiers for the customer",
                                        "nullable": true,
                                        "additionalProperties": {
                                          "type": "string"
                                        },
                                        "x-examples": [
                                          {
                                            "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                                          }
                                        ]
                                      },
                                      "allowed_statuses": {
                                        "type": "array",
                                        "description": "List of allowed statuses",
                                        "items": {
                                          "x-id": "#status",
                                          "x-nter-relation": "statuses",
                                          "x-nter-model": "Status",
                                          "x-nter-callable": true,
                                          "x-ui-hide": true,
                                          "description": "Defines the properties for a status",
                                          "type": "object",
                                          "required": [
                                            "status",
                                            "status_category"
                                          ],
                                          "properties": {
                                            "status": {
                                              "type": "string",
                                              "description": "A Custom label for the status",
                                              "x-examples": [
                                                "Pending",
                                                "In Progress",
                                                "Verifying",
                                                "Complete",
                                                "Cancelled",
                                                "Blocked",
                                                "Reticulating Splines"
                                              ]
                                            },
                                            "category": {
                                              "type": "string",
                                              "description": "The classifier for the statues",
                                              "x-examples": [
                                                "PENDING",
                                                "IN_PROGRESS",
                                                "VERIFYING",
                                                "COMPLETE",
                                                "CANCELLED",
                                                "BLOCKED"
                                              ],
                                              "enum": [
                                                "PENDING",
                                                "IN_PROGRESS",
                                                "VERIFYING",
                                                "COMPLETE",
                                                "CANCELLED",
                                                "BLOCKED"
                                              ]
                                            }
                                          }
                                        }
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
                                      "label": "Zones Inc",
                                      "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                                      "slug": "zones-inc",
                                      "external_platform": {
                                        "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                                      },
                                      "allowed_statuses": [
                                        {
                                          "status": "Reticulating Splines",
                                          "category": "BLOCKED"
                                        }
                                      ],
                                      "created": "1960-01-22T21:27:37.876Z",
                                      "updated": "2015-12-03T17:42:43.706Z"
                                    }
                                  }
                                ]
                              },
                              "allowed_statuses": {
                                "type": "array",
                                "description": "List of allowed statuses",
                                "items": {
                                  "x-id": "#status",
                                  "x-nter-relation": "statuses",
                                  "x-nter-model": "Status",
                                  "x-nter-callable": true,
                                  "x-ui-hide": true,
                                  "description": "Defines the properties for a status",
                                  "type": "object",
                                  "required": [
                                    "status",
                                    "status_category"
                                  ],
                                  "properties": {
                                    "status": {
                                      "type": "string",
                                      "description": "A Custom label for the status",
                                      "x-examples": [
                                        "Pending",
                                        "In Progress",
                                        "Verifying",
                                        "Complete",
                                        "Cancelled",
                                        "Blocked",
                                        "Reticulating Splines"
                                      ]
                                    },
                                    "category": {
                                      "type": "string",
                                      "description": "The classifier for the statues",
                                      "x-examples": [
                                        "PENDING",
                                        "IN_PROGRESS",
                                        "VERIFYING",
                                        "COMPLETE",
                                        "CANCELLED",
                                        "BLOCKED"
                                      ],
                                      "enum": [
                                        "PENDING",
                                        "IN_PROGRESS",
                                        "VERIFYING",
                                        "COMPLETE",
                                        "CANCELLED",
                                        "BLOCKED"
                                      ]
                                    }
                                  }
                                }
                              },
                              "start_date": {
                                "type": "string",
                                "format": "date-time",
                                "description": "Start date",
                                "example": "2019-08-07T18:10:53+00:00",
                                "x-examples": [
                                  "2019-08-07T18:10:53+00:00"
                                ]
                              },
                              "end_date": {
                                "type": "string",
                                "format": "date-time",
                                "description": "End date",
                                "example": "2020-08-07T18:10:53+00:00",
                                "x-examples": [
                                  "2020-08-07T18:10:53+00:00"
                                ]
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
                              "label": "GAP Store refresh",
                              "customer": {
                                "label": "Zones Inc",
                                "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                                "slug": "zones-inc",
                                "external_platform": {
                                  "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                                },
                                "allowed_statuses": [
                                  {
                                    "status": "Complete",
                                    "category": "PENDING"
                                  },
                                  {
                                    "status": "Complete",
                                    "category": "COMPLETE"
                                  }
                                ],
                                "created": "1955-12-06T23:51:05.546Z",
                                "updated": "2006-05-29T02:08:42.08Z"
                              },
                              "program_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                              "slug": "gap-store-refresh",
                              "allowed_statuses": [
                                {
                                  "status": "Pending",
                                  "category": "CANCELLED"
                                },
                                {
                                  "status": "Reticulating Splines",
                                  "category": "VERIFYING"
                                }
                              ],
                              "start_date": "2019-08-07T18:10:53.0Z",
                              "end_date": "2020-08-07T18:10:53.0Z",
                              "created": "2012-12-18T00:08:56.495Z",
                              "updated": "1976-03-14T20:01:04.153Z"
                            }
                          }
                        ]
                      },
                      "allowed_statuses": {
                        "type": "array",
                        "description": "List of allowed statuses",
                        "items": {
                          "x-id": "#status",
                          "x-nter-relation": "statuses",
                          "x-nter-model": "Status",
                          "x-nter-callable": true,
                          "x-ui-hide": true,
                          "description": "Defines the properties for a status",
                          "type": "object",
                          "required": [
                            "status",
                            "status_category"
                          ],
                          "properties": {
                            "status": {
                              "type": "string",
                              "description": "A Custom label for the status",
                              "x-examples": [
                                "Pending",
                                "In Progress",
                                "Verifying",
                                "Complete",
                                "Cancelled",
                                "Blocked",
                                "Reticulating Splines"
                              ]
                            },
                            "category": {
                              "type": "string",
                              "description": "The classifier for the statues",
                              "x-examples": [
                                "PENDING",
                                "IN_PROGRESS",
                                "VERIFYING",
                                "COMPLETE",
                                "CANCELLED",
                                "BLOCKED"
                              ],
                              "enum": [
                                "PENDING",
                                "IN_PROGRESS",
                                "VERIFYING",
                                "COMPLETE",
                                "CANCELLED",
                                "BLOCKED"
                              ]
                            }
                          }
                        }
                      },
                      "start_date": {
                        "type": "string",
                        "format": "date-time",
                        "description": "Start date",
                        "example": "2019-08-07T18:10:53+00:00",
                        "x-examples": [
                          "2019-08-07T18:10:53+00:00"
                        ]
                      },
                      "end_date": {
                        "type": "string",
                        "format": "date-time",
                        "description": "End date",
                        "example": "2020-08-07T18:10:53+00:00",
                        "x-examples": [
                          "2020-08-07T18:10:53+00:00"
                        ]
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
                      "label": "Store 42",
                      "customer": {
                        "label": "Zones Inc",
                        "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                        "slug": "zones-inc",
                        "external_platform": {
                          "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                        },
                        "allowed_statuses": [
                          {
                            "status": "Cancelled",
                            "category": "BLOCKED"
                          },
                          {
                            "status": "Blocked",
                            "category": "IN_PROGRESS"
                          },
                          {
                            "status": "In Progress",
                            "category": "BLOCKED"
                          },
                          {
                            "status": "Pending",
                            "category": "IN_PROGRESS"
                          },
                          {
                            "status": "Cancelled",
                            "category": "PENDING"
                          }
                        ],
                        "created": "1964-10-25T11:53:33.874Z",
                        "updated": "1967-05-02T04:57:03.849Z"
                      },
                      "program": {
                        "label": "GAP Store refresh",
                        "customer": {
                          "label": "Zones Inc",
                          "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                          "slug": "zones-inc",
                          "external_platform": {
                            "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                          },
                          "allowed_statuses": [
                            {
                              "status": "Pending",
                              "category": "IN_PROGRESS"
                            }
                          ],
                          "created": "1951-05-06T15:05:25.354Z",
                          "updated": "1999-06-26T00:52:18.397Z"
                        },
                        "program_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                        "slug": "gap-store-refresh",
                        "allowed_statuses": [
                          {
                            "status": "Complete",
                            "category": "PENDING"
                          },
                          {
                            "status": "Cancelled",
                            "category": "COMPLETE"
                          },
                          {
                            "status": "Blocked",
                            "category": "PENDING"
                          }
                        ],
                        "start_date": "2019-08-07T18:10:53.0Z",
                        "end_date": "2020-08-07T18:10:53.0Z",
                        "created": "1987-08-14T20:40:24.45Z",
                        "updated": "1959-10-27T04:46:00.439Z"
                      },
                      "slug": "store-42",
                      "project_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                      "allowed_statuses": [
                        {
                          "status": "Blocked",
                          "category": "CANCELLED"
                        },
                        {
                          "status": "Blocked",
                          "category": "VERIFYING"
                        },
                        {
                          "status": "Verifying",
                          "category": "BLOCKED"
                        }
                      ],
                      "start_date": "2019-08-07T18:10:53.0Z",
                      "end_date": "2020-08-07T18:10:53.0Z",
                      "created": "1945-03-13T02:13:07.403Z",
                      "updated": "1972-09-28T18:30:22.6Z"
                    }
                  },
                  "work_flows": {
                    "type": "array",
                    "description": "Cycles of work flows needed to complete the work order",
                    "items": {
                      "type": "object",
                      "required": [
                        "cycles_needed",
                        "work_flow"
                      ],
                      "properties": {
                        "cycles_needed": {
                          "type": "integer",
                          "description": "The number of cycles needed",
                          "format": "int32",
                          "example": 4,
                          "x-examples": [
                            4
                          ]
                        },
                        "cycles_pending": {
                          "type": "integer",
                          "description": "The number of cycles pending",
                          "format": "int32",
                          "readOnly": true,
                          "example": 4,
                          "x-examples": [
                            4
                          ]
                        },
                        "cycles_in_progress": {
                          "type": "integer",
                          "description": "The number of cycles in progress",
                          "format": "int32",
                          "readOnly": true,
                          "example": 4,
                          "x-examples": [
                            4
                          ]
                        },
                        "cycles_verifying": {
                          "type": "integer",
                          "description": "The number of cycles verifying",
                          "format": "int32",
                          "readOnly": true,
                          "example": 4,
                          "x-examples": [
                            4
                          ]
                        },
                        "cycles_complete": {
                          "type": "integer",
                          "description": "The number of cycles complete",
                          "format": "int32",
                          "readOnly": true,
                          "example": 4,
                          "x-examples": [
                            4
                          ]
                        },
                        "cycles_blocked": {
                          "type": "integer",
                          "description": "The number of cycles blocked",
                          "format": "int32",
                          "readOnly": true,
                          "example": 4,
                          "x-examples": [
                            4
                          ]
                        },
                        "cycles_cancelled": {
                          "type": "integer",
                          "description": "The number of cycles cancelled",
                          "format": "int32",
                          "readOnly": true,
                          "example": 4,
                          "x-examples": [
                            4
                          ]
                        },
                        "work_flow": {
                          "x-id": "#workflow",
                          "x-nter-relation": "work-flows",
                          "x-nter-model": "WorkFlow",
                          "x-nter-callable": true,
                          "type": "object",
                          "description": "Workflow",
                          "required": [
                            "steps",
                            "starts_at",
                            "label",
                            "workflow_id",
                            "applies_to"
                          ],
                          "properties": {
                            "workflow_id": {
                              "type": "string",
                              "description": "Customer identifier",
                              "example": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                              "x-examples": [
                                "e530652e-28e8-4f64-84af-e1cf0ff7c805"
                              ],
                              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                            },
                            "label": {
                              "type": "string",
                              "example": "MLTI iPad Assembly Assignment",
                              "x-examples": [
                                "MLTI iPad Assembly Assignment"
                              ],
                              "description": "Label for the workflow"
                            },
                            "slug": {
                              "type": "string",
                              "description": "Auto-generated slug for the workflow",
                              "example": "mlti-ipad-assembly-assignment",
                              "x-examples": [
                                "mlti-ipad-assembly-assignment"
                              ]
                            },
                            "version": {
                              "type": "string",
                              "description": "Version of the workflow schema used",
                              "enum": [
                                "1.0"
                              ],
                              "example": "1.0"
                            },
                            "workflow_version": {
                              "type": "integer",
                              "format": "int32",
                              "example": 7,
                              "x-examples": [
                                7
                              ],
                              "readOnly": true,
                              "description": "Version number for the work flows (the number of times it has been changed"
                            },
                            "applies_to": {
                              "type": "string",
                              "description": "The entity type this work flow applies too",
                              "enum": [
                                "unit",
                                "part",
                                "program",
                                "project",
                                "customer",
                                "contact"
                              ],
                              "example": "unit"
                            },
                            "starts_at": {
                              "type": "string",
                              "description": "Starting step",
                              "example": "entry",
                              "x-examples": [
                                "entry"
                              ]
                            },
                            "context": {
                              "type": "array",
                              "description": "Initial values to set on the context",
                              "items": {
                                "type": "object",
                                "required": [
                                  "key",
                                  "value"
                                ],
                                "properties": {
                                  "key": {
                                    "type": "string",
                                    "description": "The context key to set",
                                    "example": "$.fizz",
                                    "x-examples": [
                                      "$.fizz",
                                      "$.unit.status",
                                      "extract_fields"
                                    ]
                                  },
                                  "value": {
                                    "type": "string",
                                    "description": "Value to set",
                                    "example": "$.buzz",
                                    "x-examples": [
                                      "$.buzz",
                                      "Pending",
                                      true
                                    ]
                                  },
                                  "lock": {
                                    "type": "boolean",
                                    "description": "Prevents other steps from writing this value",
                                    "example": true
                                  },
                                  "ignore": {
                                    "type": "boolean",
                                    "description": "When trying to set a locked key, do not fail",
                                    "example": false
                                  }
                                }
                              }
                            },
                            "steps": {
                              "type": "object",
                              "description": "Steps for the workflow",
                              "x-patternProperties": {
                                "(confirm|success|fail|manual|run-ace|follow)": {
                                  "type": "object",
                                  "allOf": [
                                    {
                                      "type": "object",
                                      "description": "Close step",
                                      "required": [
                                        "step"
                                      ],
                                      "properties": {
                                        "step": {
                                          "type": "string",
                                          "description": "Step to mark as complete",
                                          "pattern": "^[a-z][a-z-]+[a-z]$",
                                          "example": "complete",
                                          "x-examples": [
                                            "complete"
                                          ]
                                        }
                                      },
                                      "anyOf": [
                                        {
                                          "type": "object",
                                          "description": "Require the user confirm an action. This is normally used when Niagara cannot automatically detect that a task or action has been performed.",
                                          "x-nter-step-component": "confirm-action",
                                          "properties": {
                                            "label": {
                                              "x-examples": [
                                                "Confirm the device has powered off"
                                              ]
                                            },
                                            "options": {
                                              "type": "object",
                                              "required": [
                                                "component",
                                                "payload"
                                              ],
                                              "properties": {
                                                "component": {
                                                  "enum": [
                                                    "confirm-action"
                                                  ],
                                                  "example": "confirm-action",
                                                  "x-examples": [
                                                    "confirm-action"
                                                  ]
                                                },
                                                "payload": {
                                                  "type": "object",
                                                  "required": [
                                                    "message"
                                                  ],
                                                  "properties": {
                                                    "message": {
                                                      "type": "string",
                                                      "description": "The confirmation message to display to the user",
                                                      "example": "Device powered off?",
                                                      "x-examples": [
                                                        "Device powered off?"
                                                      ]
                                                    },
                                                    "negative_message": {
                                                      "type": "string",
                                                      "description": "An optional inverse message",
                                                      "nullable": true,
                                                      "example": "Device not functioning",
                                                      "x-examples": [
                                                        "Device not functioning"
                                                      ]
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "allOf": [
                                            {
                                              "type": "object",
                                              "x-ui-hide": true,
                                              "description": "A step which requires a user to complete",
                                              "required": [
                                                "type",
                                                "options"
                                              ],
                                              "properties": {
                                                "type": {
                                                  "example": "user",
                                                  "x-examples": [
                                                    "user"
                                                  ]
                                                },
                                                "options": {
                                                  "type": "object",
                                                  "required": [
                                                    "component",
                                                    "payload"
                                                  ],
                                                  "properties": {
                                                    "component": {
                                                      "type": "string",
                                                      "description": "Name of the function to invoke",
                                                      "example": "assignUnitsFromCustomerToProject",
                                                      "x-examples": [
                                                        "assignUnitsFromCustomerToProject"
                                                      ]
                                                    },
                                                    "payload": {
                                                      "type": "object"
                                                    }
                                                  }
                                                }
                                              },
                                              "allOf": [
                                                {
                                                  "type": "object",
                                                  "x-ui-hide": true,
                                                  "required": [
                                                    "type",
                                                    "label",
                                                    "goto"
                                                  ],
                                                  "properties": {
                                                    "type": {
                                                      "type": "string",
                                                      "description": "Type of workflow step",
                                                      "enum": [
                                                        "load",
                                                        "choice",
                                                        "function",
                                                        "machine",
                                                        "pass",
                                                        "fail",
                                                        "success",
                                                        "user",
                                                        "wait"
                                                      ]
                                                    },
                                                    "label": {
                                                      "type": "string",
                                                      "description": "Label for the step",
                                                      "example": "Find units",
                                                      "x-examples": [
                                                        "Find units"
                                                      ]
                                                    },
                                                    "goto": {
                                                      "type": "string",
                                                      "description": "Step to move to",
                                                      "pattern": "^[a-z][a-z-]+[a-z]$",
                                                      "example": "complete",
                                                      "x-examples": [
                                                        "complete"
                                                      ]
                                                    },
                                                    "goto-fail": {
                                                      "type": "string",
                                                      "description": "Step to transition too if this step cannot be completed",
                                                      "pattern": "^[a-z][a-z-]+[a-z]$",
                                                      "example": "process-fail",
                                                      "x-examples": [
                                                        "process-fail"
                                                      ]
                                                    },
                                                    "context": {
                                                      "type": "array",
                                                      "description": "Initial values to set on the context",
                                                      "items": {
                                                        "type": "object",
                                                        "required": [
                                                          "key",
                                                          "value"
                                                        ],
                                                        "properties": {
                                                          "key": {
                                                            "type": "string",
                                                            "description": "The context key to set",
                                                            "example": "$.fizz",
                                                            "x-examples": [
                                                              "$.fizz",
                                                              "$.unit.status",
                                                              "extract_fields"
                                                            ]
                                                          },
                                                          "value": {
                                                            "type": "string",
                                                            "description": "Value to set",
                                                            "example": "$.buzz",
                                                            "x-examples": [
                                                              "$.buzz",
                                                              "Pending",
                                                              true
                                                            ]
                                                          },
                                                          "lock": {
                                                            "type": "boolean",
                                                            "description": "Prevents other steps from writing this value",
                                                            "example": true
                                                          },
                                                          "ignore": {
                                                            "type": "boolean",
                                                            "description": "When trying to set a locked key, do not fail",
                                                            "example": false
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "onError": {
                                                      "type": "object",
                                                      "description": "Action to take when step fails",
                                                      "required": [
                                                        "finally"
                                                      ],
                                                      "properties": {
                                                        "retry": {
                                                          "type": "integer",
                                                          "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                          "minimum": 0,
                                                          "maximum": 10,
                                                          "example": 3,
                                                          "default": 0
                                                        },
                                                        "finally": {
                                                          "type": "object",
                                                          "description": "What to do after all retries",
                                                          "required": [
                                                            "goto"
                                                          ],
                                                          "properties": {
                                                            "actions": {
                                                              "type": "array",
                                                              "description": "Actions to take on failure",
                                                              "items": {
                                                                "anyOf": [
                                                                  {
                                                                    "type": "object",
                                                                    "properties": {
                                                                      "type": {
                                                                        "type": "string",
                                                                        "description": "The type of the action",
                                                                        "enum": [
                                                                          "email"
                                                                        ]
                                                                      },
                                                                      "options": {
                                                                        "type": "object",
                                                                        "description": "settings for the action",
                                                                        "additionalProperties": {
                                                                          "type": "string"
                                                                        },
                                                                        "x-examples": [
                                                                          {
                                                                            "to": "bob@example.com",
                                                                            "from": "alice@example.com"
                                                                          }
                                                                        ]
                                                                      }
                                                                    }
                                                                  }
                                                                ]
                                                              }
                                                            },
                                                            "goto": {
                                                              "type": "string",
                                                              "description": "Step to transition to on failure",
                                                              "pattern": "^[a-z][a-z-]+[a-z]$",
                                                              "example": "failed",
                                                              "x-examples": [
                                                                "failed"
                                                              ]
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "onComplete": {
                                                      "type": "object",
                                                      "description": "Actions to take when the step completes",
                                                      "properties": {
                                                        "actions": {
                                                          "type": "array",
                                                          "items": {
                                                            "anyOf": [
                                                              {
                                                                "type": "object",
                                                                "properties": {
                                                                  "type": {
                                                                    "type": "string",
                                                                    "description": "The type of the action",
                                                                    "enum": [
                                                                      "email"
                                                                    ]
                                                                  },
                                                                  "options": {
                                                                    "type": "object",
                                                                    "description": "settings for the action",
                                                                    "additionalProperties": {
                                                                      "type": "string"
                                                                    },
                                                                    "x-examples": [
                                                                      {
                                                                        "to": "bob@example.com",
                                                                        "from": "alice@example.com"
                                                                      }
                                                                    ]
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "type": "object",
                                          "description": "Display a link or modal to a user which contains instructions from a PDF",
                                          "x-nter-step-component": "follow-pdf-instructions",
                                          "required": [
                                            "label",
                                            "payload"
                                          ],
                                          "properties": {
                                            "label": {
                                              "x-examples": [
                                                "Instruct user to follow steps outlined in Apple PDF"
                                              ]
                                            },
                                            "options": {
                                              "type": "object",
                                              "required": [
                                                "component",
                                                "payload"
                                              ],
                                              "properties": {
                                                "component": {
                                                  "enum": [
                                                    "follow-pds-instructions"
                                                  ],
                                                  "example": "follow-pdf-instructions",
                                                  "x-examples": [
                                                    "follow-pdf-instructions"
                                                  ]
                                                },
                                                "payload": {
                                                  "type": "object",
                                                  "required": [
                                                    "attachment_id"
                                                  ],
                                                  "properties": {
                                                    "attachment_id": {
                                                      "type": "string",
                                                      "description": "UUID for the attachment",
                                                      "format": "uuid",
                                                      "example": "eb65b19f-efb4-40e7-991c-03ba1a2d7ca7",
                                                      "x-examples": [
                                                        "eb65b19f-efb4-40e7-991c-03ba1a2d7ca7"
                                                      ]
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "allOf": [
                                            {
                                              "type": "object",
                                              "x-ui-hide": true,
                                              "description": "A step which requires a user to complete",
                                              "required": [
                                                "type",
                                                "options"
                                              ],
                                              "properties": {
                                                "type": {
                                                  "example": "user",
                                                  "x-examples": [
                                                    "user"
                                                  ]
                                                },
                                                "options": {
                                                  "type": "object",
                                                  "required": [
                                                    "component",
                                                    "payload"
                                                  ],
                                                  "properties": {
                                                    "component": {
                                                      "type": "string",
                                                      "description": "Name of the function to invoke",
                                                      "example": "assignUnitsFromCustomerToProject",
                                                      "x-examples": [
                                                        "assignUnitsFromCustomerToProject"
                                                      ]
                                                    },
                                                    "payload": {
                                                      "type": "object"
                                                    }
                                                  }
                                                }
                                              },
                                              "allOf": [
                                                {
                                                  "type": "object",
                                                  "x-ui-hide": true,
                                                  "required": [
                                                    "type",
                                                    "label",
                                                    "goto"
                                                  ],
                                                  "properties": {
                                                    "type": {
                                                      "type": "string",
                                                      "description": "Type of workflow step",
                                                      "enum": [
                                                        "load",
                                                        "choice",
                                                        "function",
                                                        "machine",
                                                        "pass",
                                                        "fail",
                                                        "success",
                                                        "user",
                                                        "wait"
                                                      ]
                                                    },
                                                    "label": {
                                                      "type": "string",
                                                      "description": "Label for the step",
                                                      "example": "Find units",
                                                      "x-examples": [
                                                        "Find units"
                                                      ]
                                                    },
                                                    "goto": {
                                                      "type": "string",
                                                      "description": "Step to move to",
                                                      "pattern": "^[a-z][a-z-]+[a-z]$",
                                                      "example": "complete",
                                                      "x-examples": [
                                                        "complete"
                                                      ]
                                                    },
                                                    "goto-fail": {
                                                      "type": "string",
                                                      "description": "Step to transition too if this step cannot be completed",
                                                      "pattern": "^[a-z][a-z-]+[a-z]$",
                                                      "example": "process-fail",
                                                      "x-examples": [
                                                        "process-fail"
                                                      ]
                                                    },
                                                    "context": {
                                                      "type": "array",
                                                      "description": "Initial values to set on the context",
                                                      "items": {
                                                        "type": "object",
                                                        "required": [
                                                          "key",
                                                          "value"
                                                        ],
                                                        "properties": {
                                                          "key": {
                                                            "type": "string",
                                                            "description": "The context key to set",
                                                            "example": "$.fizz",
                                                            "x-examples": [
                                                              "$.fizz",
                                                              "$.unit.status",
                                                              "extract_fields"
                                                            ]
                                                          },
                                                          "value": {
                                                            "type": "string",
                                                            "description": "Value to set",
                                                            "example": "$.buzz",
                                                            "x-examples": [
                                                              "$.buzz",
                                                              "Pending",
                                                              true
                                                            ]
                                                          },
                                                          "lock": {
                                                            "type": "boolean",
                                                            "description": "Prevents other steps from writing this value",
                                                            "example": true
                                                          },
                                                          "ignore": {
                                                            "type": "boolean",
                                                            "description": "When trying to set a locked key, do not fail",
                                                            "example": false
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "onError": {
                                                      "type": "object",
                                                      "description": "Action to take when step fails",
                                                      "required": [
                                                        "finally"
                                                      ],
                                                      "properties": {
                                                        "retry": {
                                                          "type": "integer",
                                                          "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                          "minimum": 0,
                                                          "maximum": 10,
                                                          "example": 3,
                                                          "default": 0
                                                        },
                                                        "finally": {
                                                          "type": "object",
                                                          "description": "What to do after all retries",
                                                          "required": [
                                                            "goto"
                                                          ],
                                                          "properties": {
                                                            "actions": {
                                                              "type": "array",
                                                              "description": "Actions to take on failure",
                                                              "items": {
                                                                "anyOf": [
                                                                  {
                                                                    "type": "object",
                                                                    "properties": {
                                                                      "type": {
                                                                        "type": "string",
                                                                        "description": "The type of the action",
                                                                        "enum": [
                                                                          "email"
                                                                        ]
                                                                      },
                                                                      "options": {
                                                                        "type": "object",
                                                                        "description": "settings for the action",
                                                                        "additionalProperties": {
                                                                          "type": "string"
                                                                        },
                                                                        "x-examples": [
                                                                          {
                                                                            "to": "bob@example.com",
                                                                            "from": "alice@example.com"
                                                                          }
                                                                        ]
                                                                      }
                                                                    }
                                                                  }
                                                                ]
                                                              }
                                                            },
                                                            "goto": {
                                                              "type": "string",
                                                              "description": "Step to transition to on failure",
                                                              "pattern": "^[a-z][a-z-]+[a-z]$",
                                                              "example": "failed",
                                                              "x-examples": [
                                                                "failed"
                                                              ]
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "onComplete": {
                                                      "type": "object",
                                                      "description": "Actions to take when the step completes",
                                                      "properties": {
                                                        "actions": {
                                                          "type": "array",
                                                          "items": {
                                                            "anyOf": [
                                                              {
                                                                "type": "object",
                                                                "properties": {
                                                                  "type": {
                                                                    "type": "string",
                                                                    "description": "The type of the action",
                                                                    "enum": [
                                                                      "email"
                                                                    ]
                                                                  },
                                                                  "options": {
                                                                    "type": "object",
                                                                    "description": "settings for the action",
                                                                    "additionalProperties": {
                                                                      "type": "string"
                                                                    },
                                                                    "x-examples": [
                                                                      {
                                                                        "to": "bob@example.com",
                                                                        "from": "alice@example.com"
                                                                      }
                                                                    ]
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "type": "object",
                                          "description": "Ask the user to manually enter (or confirm) data for an entity",
                                          "x-nter-step-component": "manual-data-entry",
                                          "properties": {
                                            "label": {
                                              "x-examples": [
                                                "Enter asset tag and confirm serial number"
                                              ]
                                            },
                                            "options": {
                                              "type": "object",
                                              "required": [
                                                "component",
                                                "payload"
                                              ],
                                              "properties": {
                                                "component": {
                                                  "enum": [
                                                    "manual-data-entry"
                                                  ],
                                                  "example": "manual-data-entry",
                                                  "x-examples": [
                                                    "manual-data-entry"
                                                  ]
                                                },
                                                "payload": {
                                                  "type": "object",
                                                  "required": [
                                                    "fields"
                                                  ],
                                                  "properties": {
                                                    "fields": {
                                                      "type": "array",
                                                      "description": "Configuration for each field",
                                                      "items": {
                                                        "type": "object",
                                                        "required": [
                                                          "input_type",
                                                          "label",
                                                          "required",
                                                          "entity_field"
                                                        ],
                                                        "properties": {
                                                          "input_type": {
                                                            "type": "string",
                                                            "description": "The type of input field to display",
                                                            "enum": [
                                                              "textbox",
                                                              "input"
                                                            ]
                                                          },
                                                          "label": {
                                                            "type": "string",
                                                            "description": "Label to display for the field",
                                                            "example": "Asset Tag",
                                                            "x-examples": [
                                                              "Asset Tag"
                                                            ]
                                                          },
                                                          "required": {
                                                            "type": "boolean",
                                                            "description": "Display the field as required input. Note: this is a helper function. It singles that the user is required to input data at this step. If the field is required on the entity, the user will be presented with a validation message",
                                                            "example": true
                                                          },
                                                          "entity_field": {
                                                            "type": "string",
                                                            "description": "JSON Path to the field on the entity. If the path does not start with '$' then the entity on the context is assumed. Otherwise the data will be set on the context path",
                                                            "example": "input_filter[?(@.key = 'asset-tag')]",
                                                            "x-examples": [
                                                              "input_filter[?(@.key = 'asset-tag')]"
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "allOf": [
                                            {
                                              "type": "object",
                                              "x-ui-hide": true,
                                              "description": "A step which requires a user to complete",
                                              "required": [
                                                "type",
                                                "options"
                                              ],
                                              "properties": {
                                                "type": {
                                                  "example": "user",
                                                  "x-examples": [
                                                    "user"
                                                  ]
                                                },
                                                "options": {
                                                  "type": "object",
                                                  "required": [
                                                    "component",
                                                    "payload"
                                                  ],
                                                  "properties": {
                                                    "component": {
                                                      "type": "string",
                                                      "description": "Name of the function to invoke",
                                                      "example": "assignUnitsFromCustomerToProject",
                                                      "x-examples": [
                                                        "assignUnitsFromCustomerToProject"
                                                      ]
                                                    },
                                                    "payload": {
                                                      "type": "object"
                                                    }
                                                  }
                                                }
                                              },
                                              "allOf": [
                                                {
                                                  "type": "object",
                                                  "x-ui-hide": true,
                                                  "required": [
                                                    "type",
                                                    "label",
                                                    "goto"
                                                  ],
                                                  "properties": {
                                                    "type": {
                                                      "type": "string",
                                                      "description": "Type of workflow step",
                                                      "enum": [
                                                        "load",
                                                        "choice",
                                                        "function",
                                                        "machine",
                                                        "pass",
                                                        "fail",
                                                        "success",
                                                        "user",
                                                        "wait"
                                                      ]
                                                    },
                                                    "label": {
                                                      "type": "string",
                                                      "description": "Label for the step",
                                                      "example": "Find units",
                                                      "x-examples": [
                                                        "Find units"
                                                      ]
                                                    },
                                                    "goto": {
                                                      "type": "string",
                                                      "description": "Step to move to",
                                                      "pattern": "^[a-z][a-z-]+[a-z]$",
                                                      "example": "complete",
                                                      "x-examples": [
                                                        "complete"
                                                      ]
                                                    },
                                                    "goto-fail": {
                                                      "type": "string",
                                                      "description": "Step to transition too if this step cannot be completed",
                                                      "pattern": "^[a-z][a-z-]+[a-z]$",
                                                      "example": "process-fail",
                                                      "x-examples": [
                                                        "process-fail"
                                                      ]
                                                    },
                                                    "context": {
                                                      "type": "array",
                                                      "description": "Initial values to set on the context",
                                                      "items": {
                                                        "type": "object",
                                                        "required": [
                                                          "key",
                                                          "value"
                                                        ],
                                                        "properties": {
                                                          "key": {
                                                            "type": "string",
                                                            "description": "The context key to set",
                                                            "example": "$.fizz",
                                                            "x-examples": [
                                                              "$.fizz",
                                                              "$.unit.status",
                                                              "extract_fields"
                                                            ]
                                                          },
                                                          "value": {
                                                            "type": "string",
                                                            "description": "Value to set",
                                                            "example": "$.buzz",
                                                            "x-examples": [
                                                              "$.buzz",
                                                              "Pending",
                                                              true
                                                            ]
                                                          },
                                                          "lock": {
                                                            "type": "boolean",
                                                            "description": "Prevents other steps from writing this value",
                                                            "example": true
                                                          },
                                                          "ignore": {
                                                            "type": "boolean",
                                                            "description": "When trying to set a locked key, do not fail",
                                                            "example": false
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "onError": {
                                                      "type": "object",
                                                      "description": "Action to take when step fails",
                                                      "required": [
                                                        "finally"
                                                      ],
                                                      "properties": {
                                                        "retry": {
                                                          "type": "integer",
                                                          "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                          "minimum": 0,
                                                          "maximum": 10,
                                                          "example": 3,
                                                          "default": 0
                                                        },
                                                        "finally": {
                                                          "type": "object",
                                                          "description": "What to do after all retries",
                                                          "required": [
                                                            "goto"
                                                          ],
                                                          "properties": {
                                                            "actions": {
                                                              "type": "array",
                                                              "description": "Actions to take on failure",
                                                              "items": {
                                                                "anyOf": [
                                                                  {
                                                                    "type": "object",
                                                                    "properties": {
                                                                      "type": {
                                                                        "type": "string",
                                                                        "description": "The type of the action",
                                                                        "enum": [
                                                                          "email"
                                                                        ]
                                                                      },
                                                                      "options": {
                                                                        "type": "object",
                                                                        "description": "settings for the action",
                                                                        "additionalProperties": {
                                                                          "type": "string"
                                                                        },
                                                                        "x-examples": [
                                                                          {
                                                                            "to": "bob@example.com",
                                                                            "from": "alice@example.com"
                                                                          }
                                                                        ]
                                                                      }
                                                                    }
                                                                  }
                                                                ]
                                                              }
                                                            },
                                                            "goto": {
                                                              "type": "string",
                                                              "description": "Step to transition to on failure",
                                                              "pattern": "^[a-z][a-z-]+[a-z]$",
                                                              "example": "failed",
                                                              "x-examples": [
                                                                "failed"
                                                              ]
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "onComplete": {
                                                      "type": "object",
                                                      "description": "Actions to take when the step completes",
                                                      "properties": {
                                                        "actions": {
                                                          "type": "array",
                                                          "items": {
                                                            "anyOf": [
                                                              {
                                                                "type": "object",
                                                                "properties": {
                                                                  "type": {
                                                                    "type": "string",
                                                                    "description": "The type of the action",
                                                                    "enum": [
                                                                      "email"
                                                                    ]
                                                                  },
                                                                  "options": {
                                                                    "type": "object",
                                                                    "description": "settings for the action",
                                                                    "additionalProperties": {
                                                                      "type": "string"
                                                                    },
                                                                    "x-examples": [
                                                                      {
                                                                        "to": "bob@example.com",
                                                                        "from": "alice@example.com"
                                                                      }
                                                                    ]
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "type": "object",
                                          "description": "Ask the user to follow a list and check off boxes",
                                          "x-nter-step-component": "task-list",
                                          "properties": {
                                            "label": {
                                              "x-examples": [
                                                "Enter asset tag and confirm serial number"
                                              ]
                                            },
                                            "options": {
                                              "type": "object",
                                              "required": [
                                                "component",
                                                "payload"
                                              ],
                                              "properties": {
                                                "component": {
                                                  "enum": [
                                                    "task-list"
                                                  ],
                                                  "example": "task-list",
                                                  "x-examples": [
                                                    "task-list"
                                                  ]
                                                },
                                                "payload": {
                                                  "type": "object",
                                                  "required": [
                                                    "items"
                                                  ],
                                                  "properties": {
                                                    "is_qc": {
                                                      "type": "boolean",
                                                      "description": "Flags this list as a QC task list. This means that a different user can close the task to one previously on the context"
                                                    },
                                                    "items": {
                                                      "type": "array",
                                                      "description": "Configuration for each task list item",
                                                      "items": {
                                                        "type": "object",
                                                        "required": [
                                                          "label",
                                                          "help",
                                                          "evaluated",
                                                          "na_option"
                                                        ],
                                                        "properties": {
                                                          "label": {
                                                            "type": "string",
                                                            "description": "Label to display for the field",
                                                            "example": "Asset Tag placement",
                                                            "x-examples": [
                                                              "Asset Tag placement"
                                                            ]
                                                          },
                                                          "slug": {
                                                            "type": "string",
                                                            "description": "Slug for the item (Auto-generated from the label)",
                                                            "readOnly": true,
                                                            "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$",
                                                            "example": "asset-tag-placement",
                                                            "x-examples": [
                                                              "asset-tag-placement"
                                                            ]
                                                          },
                                                          "help": {
                                                            "type": "string",
                                                            "description": "Message describing what is needed to be checked",
                                                            "example": "Asset Tag attached to the unit in the correct position",
                                                            "x-examples": [
                                                              "Asset Tag attached to the unit in the correct position"
                                                            ]
                                                          },
                                                          "evaluated": {
                                                            "type": "boolean",
                                                            "description": "When set to true, this will fail the step if the value for the item is false or N/A",
                                                            "example": true
                                                          },
                                                          "na_field": {
                                                            "type": "boolean",
                                                            "description": "Allow the user to select the N/A option when checking off the list",
                                                            "example": true
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "allOf": [
                                            {
                                              "type": "object",
                                              "x-ui-hide": true,
                                              "description": "A step which requires a user to complete",
                                              "required": [
                                                "type",
                                                "options"
                                              ],
                                              "properties": {
                                                "type": {
                                                  "example": "user",
                                                  "x-examples": [
                                                    "user"
                                                  ]
                                                },
                                                "options": {
                                                  "type": "object",
                                                  "required": [
                                                    "component",
                                                    "payload"
                                                  ],
                                                  "properties": {
                                                    "component": {
                                                      "type": "string",
                                                      "description": "Name of the function to invoke",
                                                      "example": "assignUnitsFromCustomerToProject",
                                                      "x-examples": [
                                                        "assignUnitsFromCustomerToProject"
                                                      ]
                                                    },
                                                    "payload": {
                                                      "type": "object"
                                                    }
                                                  }
                                                }
                                              },
                                              "allOf": [
                                                {
                                                  "type": "object",
                                                  "x-ui-hide": true,
                                                  "required": [
                                                    "type",
                                                    "label",
                                                    "goto"
                                                  ],
                                                  "properties": {
                                                    "type": {
                                                      "type": "string",
                                                      "description": "Type of workflow step",
                                                      "enum": [
                                                        "load",
                                                        "choice",
                                                        "function",
                                                        "machine",
                                                        "pass",
                                                        "fail",
                                                        "success",
                                                        "user",
                                                        "wait"
                                                      ]
                                                    },
                                                    "label": {
                                                      "type": "string",
                                                      "description": "Label for the step",
                                                      "example": "Find units",
                                                      "x-examples": [
                                                        "Find units"
                                                      ]
                                                    },
                                                    "goto": {
                                                      "type": "string",
                                                      "description": "Step to move to",
                                                      "pattern": "^[a-z][a-z-]+[a-z]$",
                                                      "example": "complete",
                                                      "x-examples": [
                                                        "complete"
                                                      ]
                                                    },
                                                    "goto-fail": {
                                                      "type": "string",
                                                      "description": "Step to transition too if this step cannot be completed",
                                                      "pattern": "^[a-z][a-z-]+[a-z]$",
                                                      "example": "process-fail",
                                                      "x-examples": [
                                                        "process-fail"
                                                      ]
                                                    },
                                                    "context": {
                                                      "type": "array",
                                                      "description": "Initial values to set on the context",
                                                      "items": {
                                                        "type": "object",
                                                        "required": [
                                                          "key",
                                                          "value"
                                                        ],
                                                        "properties": {
                                                          "key": {
                                                            "type": "string",
                                                            "description": "The context key to set",
                                                            "example": "$.fizz",
                                                            "x-examples": [
                                                              "$.fizz",
                                                              "$.unit.status",
                                                              "extract_fields"
                                                            ]
                                                          },
                                                          "value": {
                                                            "type": "string",
                                                            "description": "Value to set",
                                                            "example": "$.buzz",
                                                            "x-examples": [
                                                              "$.buzz",
                                                              "Pending",
                                                              true
                                                            ]
                                                          },
                                                          "lock": {
                                                            "type": "boolean",
                                                            "description": "Prevents other steps from writing this value",
                                                            "example": true
                                                          },
                                                          "ignore": {
                                                            "type": "boolean",
                                                            "description": "When trying to set a locked key, do not fail",
                                                            "example": false
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "onError": {
                                                      "type": "object",
                                                      "description": "Action to take when step fails",
                                                      "required": [
                                                        "finally"
                                                      ],
                                                      "properties": {
                                                        "retry": {
                                                          "type": "integer",
                                                          "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                          "minimum": 0,
                                                          "maximum": 10,
                                                          "example": 3,
                                                          "default": 0
                                                        },
                                                        "finally": {
                                                          "type": "object",
                                                          "description": "What to do after all retries",
                                                          "required": [
                                                            "goto"
                                                          ],
                                                          "properties": {
                                                            "actions": {
                                                              "type": "array",
                                                              "description": "Actions to take on failure",
                                                              "items": {
                                                                "anyOf": [
                                                                  {
                                                                    "type": "object",
                                                                    "properties": {
                                                                      "type": {
                                                                        "type": "string",
                                                                        "description": "The type of the action",
                                                                        "enum": [
                                                                          "email"
                                                                        ]
                                                                      },
                                                                      "options": {
                                                                        "type": "object",
                                                                        "description": "settings for the action",
                                                                        "additionalProperties": {
                                                                          "type": "string"
                                                                        },
                                                                        "x-examples": [
                                                                          {
                                                                            "to": "bob@example.com",
                                                                            "from": "alice@example.com"
                                                                          }
                                                                        ]
                                                                      }
                                                                    }
                                                                  }
                                                                ]
                                                              }
                                                            },
                                                            "goto": {
                                                              "type": "string",
                                                              "description": "Step to transition to on failure",
                                                              "pattern": "^[a-z][a-z-]+[a-z]$",
                                                              "example": "failed",
                                                              "x-examples": [
                                                                "failed"
                                                              ]
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "onComplete": {
                                                      "type": "object",
                                                      "description": "Actions to take when the step completes",
                                                      "properties": {
                                                        "actions": {
                                                          "type": "array",
                                                          "items": {
                                                            "anyOf": [
                                                              {
                                                                "type": "object",
                                                                "properties": {
                                                                  "type": {
                                                                    "type": "string",
                                                                    "description": "The type of the action",
                                                                    "enum": [
                                                                      "email"
                                                                    ]
                                                                  },
                                                                  "options": {
                                                                    "type": "object",
                                                                    "description": "settings for the action",
                                                                    "additionalProperties": {
                                                                      "type": "string"
                                                                    },
                                                                    "x-examples": [
                                                                      {
                                                                        "to": "bob@example.com",
                                                                        "from": "alice@example.com"
                                                                      }
                                                                    ]
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "type": "object",
                                          "description": "Run the ACE-IOS application to provision iOS devices or ",
                                          "properties": {
                                            "type": {
                                              "example": "machine",
                                              "x-examples": [
                                                "machine"
                                              ]
                                            },
                                            "label": {
                                              "x-examples": [
                                                "Run Application"
                                              ]
                                            },
                                            "options": {
                                              "type": "object",
                                              "required": [
                                                "application",
                                                "configuration"
                                              ],
                                              "properties": {
                                                "configuration": {
                                                  "type": "object",
                                                  "description": "ACE Configuration options",
                                                  "properties": {
                                                    "pairing_cert": {
                                                      "type": "string",
                                                      "format": "base64",
                                                      "description": "Contents of a *.crt file exported from Apple Configurator or MDM",
                                                      "example": "dGhpcyBpcyBub3QgYSBjZXJ0IGZpbGUganVzdCBhbiBleGFtcGxl",
                                                      "x-examples": [
                                                        "dGhpcyBpcyBub3QgYSBjZXJ0IGZpbGUganVzdCBhbiBleGFtcGxl"
                                                      ],
                                                      "pattern": "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
                                                    },
                                                    "pairing_key": {
                                                      "type": "string",
                                                      "format": "base64",
                                                      "description": "Contents of a *.der file exported from Apple Configurator or MDM",
                                                      "example": "dGhpcyBpcyBub3QgYSBjZXJ0IGZpbGUganVzdCBhbiBleGFtcGxl",
                                                      "x-examples": [
                                                        "dGhpcyBpcyBub3QgYSBjZXJ0IGZpbGUganVzdCBhbiBleGFtcGxl"
                                                      ],
                                                      "pattern": "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
                                                    },
                                                    "restore_device": {
                                                      "type": "boolean",
                                                      "description": "Restore device to factory defaults"
                                                    },
                                                    "automated_enrollment": {
                                                      "type": "boolean",
                                                      "description": "Automatically enroll the device to MDM"
                                                    },
                                                    "mdm": {
                                                      "type": "object",
                                                      "format": "base64",
                                                      "description": "The settings for the Customers MDM",
                                                      "properties": {
                                                        "vendor": {
                                                          "type": "string",
                                                          "description": "MDM vendor. Currently, supported values are AirWatch, JAMF, and Meraki.",
                                                          "enum": [
                                                            "AirWatch",
                                                            "JAMF",
                                                            "Meraki"
                                                          ]
                                                        },
                                                        "console_url": {
                                                          "type": "string",
                                                          "format": "uri",
                                                          "description": "Base URL for HTTP requests",
                                                          "example": "http://jamf.zones.com",
                                                          "x-examples": [
                                                            "http://jamf.zones.com"
                                                          ]
                                                        },
                                                        "user": {
                                                          "type": "string",
                                                          "description": "MDM User name",
                                                          "example": "NterpriseBob",
                                                          "x-examples": [
                                                            "NterpriseBob"
                                                          ]
                                                        },
                                                        "password": {
                                                          "type": "string",
                                                          "description": "MDM password"
                                                        },
                                                        "tenant_code": {
                                                          "type": "string",
                                                          "description": "MDM authentication key",
                                                          "example": "nterprise",
                                                          "x-examples": [
                                                            "nterprise"
                                                          ]
                                                        },
                                                        "set_asset_tag": {
                                                          "type": "string",
                                                          "description": "Sets the devices Asset tag based on a field from the unit",
                                                          "example": "$._entity.input_filter[?(@.key = 'asset-tag')]",
                                                          "x-examples": [
                                                            "$._entity.input_filter[?(@.key = 'asset-tag')]"
                                                          ]
                                                        }
                                                      }
                                                    },
                                                    "field_mappings": {
                                                      "type": "array",
                                                      "description": "List of fields to map to the device",
                                                      "items": {
                                                        "type": "object",
                                                        "properties": {
                                                          "from": {
                                                            "type": "string",
                                                            "description": "The field reported from ACE",
                                                            "enum": [
                                                              "serial_number",
                                                              "name",
                                                              "ecid",
                                                              "udid",
                                                              "configurator_serial",
                                                              "ios",
                                                              "model",
                                                              "storage",
                                                              "wifi_mac",
                                                              "bt_mac",
                                                              "ethernet_mac",
                                                              "thundersync_serial",
                                                              "iccid",
                                                              "iccid2",
                                                              "imei",
                                                              "imei2",
                                                              "missed_profiles",
                                                              "missed_apps",
                                                              "icon_list_regex",
                                                              "icon_layout",
                                                              "bat_capacity"
                                                            ]
                                                          },
                                                          "to": {
                                                            "type": "string",
                                                            "description": "Field to set on the entity",
                                                            "example": "$._entity.input_filter[?(@.key = 'serial-number')]",
                                                            "x-examples": [
                                                              "$._entity.input_filter[?(@.key = 'serial-number')]"
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "wait_for_apps": {
                                                      "type": "array",
                                                      "description": "A list of applications needed to be installed on the device. This will cause the extension to poll the device for installed applications. Once all the applications have been installed, this step can be completed",
                                                      "items": {
                                                        "type": "string",
                                                        "format": "uri",
                                                        "example": "com.apple.itunes",
                                                        "x-examples": [
                                                          "com.apple.itunes"
                                                        ]
                                                      }
                                                    },
                                                    "wait_for_battery_charge": {
                                                      "type": "integer",
                                                      "description": "The required battery percentage needed before this step can move on",
                                                      "minimum": 0,
                                                      "maximum": 100
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "allOf": [
                                            {
                                              "type": "object",
                                              "description": "Run an application extension",
                                              "properties": {
                                                "label": {
                                                  "x-examples": [
                                                    "Run Application"
                                                  ]
                                                },
                                                "options": {
                                                  "type": "object",
                                                  "required": [
                                                    "application",
                                                    "configuration"
                                                  ],
                                                  "properties": {
                                                    "application": {
                                                      "type": "object",
                                                      "required": [
                                                        "application_id",
                                                        "platforms"
                                                      ],
                                                      "properties": {
                                                        "application_id": {
                                                          "type": "string",
                                                          "description": "Registered application ID",
                                                          "example": "ace-ios",
                                                          "x-examples": [
                                                            "ace-ios"
                                                          ]
                                                        },
                                                        "platforms": {
                                                          "type": "array",
                                                          "description": "Allowed platforms the application can run on",
                                                          "items": {
                                                            "type": "object",
                                                            "required": [
                                                              "platform",
                                                              "arch"
                                                            ],
                                                            "properties": {
                                                              "platform": {
                                                                "type": "string",
                                                                "description": "The platform (OS) the application can run on",
                                                                "enum": [
                                                                  "aix",
                                                                  "darwin",
                                                                  "freebsd",
                                                                  "linux",
                                                                  "openbsd",
                                                                  "sunos",
                                                                  "win32"
                                                                ]
                                                              },
                                                              "arch": {
                                                                "type": "string",
                                                                "description": "The CPU architecture needed to run the application",
                                                                "enum": [
                                                                  "arm",
                                                                  "arm64",
                                                                  "ia32",
                                                                  "mips",
                                                                  "mipsel",
                                                                  "ppc",
                                                                  "ppc64",
                                                                  "s390",
                                                                  "s390x",
                                                                  "x32",
                                                                  "x64"
                                                                ]
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "allOf": [
                                                {
                                                  "type": "object",
                                                  "x-ui-hide": true,
                                                  "required": [
                                                    "type",
                                                    "label",
                                                    "goto"
                                                  ],
                                                  "properties": {
                                                    "type": {
                                                      "type": "string",
                                                      "description": "Type of workflow step",
                                                      "enum": [
                                                        "load",
                                                        "choice",
                                                        "function",
                                                        "machine",
                                                        "pass",
                                                        "fail",
                                                        "success",
                                                        "user",
                                                        "wait"
                                                      ]
                                                    },
                                                    "label": {
                                                      "type": "string",
                                                      "description": "Label for the step",
                                                      "example": "Find units",
                                                      "x-examples": [
                                                        "Find units"
                                                      ]
                                                    },
                                                    "goto": {
                                                      "type": "string",
                                                      "description": "Step to move to",
                                                      "pattern": "^[a-z][a-z-]+[a-z]$",
                                                      "example": "complete",
                                                      "x-examples": [
                                                        "complete"
                                                      ]
                                                    },
                                                    "goto-fail": {
                                                      "type": "string",
                                                      "description": "Step to transition too if this step cannot be completed",
                                                      "pattern": "^[a-z][a-z-]+[a-z]$",
                                                      "example": "process-fail",
                                                      "x-examples": [
                                                        "process-fail"
                                                      ]
                                                    },
                                                    "context": {
                                                      "type": "array",
                                                      "description": "Initial values to set on the context",
                                                      "items": {
                                                        "type": "object",
                                                        "required": [
                                                          "key",
                                                          "value"
                                                        ],
                                                        "properties": {
                                                          "key": {
                                                            "type": "string",
                                                            "description": "The context key to set",
                                                            "example": "$.fizz",
                                                            "x-examples": [
                                                              "$.fizz",
                                                              "$.unit.status",
                                                              "extract_fields"
                                                            ]
                                                          },
                                                          "value": {
                                                            "type": "string",
                                                            "description": "Value to set",
                                                            "example": "$.buzz",
                                                            "x-examples": [
                                                              "$.buzz",
                                                              "Pending",
                                                              true
                                                            ]
                                                          },
                                                          "lock": {
                                                            "type": "boolean",
                                                            "description": "Prevents other steps from writing this value",
                                                            "example": true
                                                          },
                                                          "ignore": {
                                                            "type": "boolean",
                                                            "description": "When trying to set a locked key, do not fail",
                                                            "example": false
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "onError": {
                                                      "type": "object",
                                                      "description": "Action to take when step fails",
                                                      "required": [
                                                        "finally"
                                                      ],
                                                      "properties": {
                                                        "retry": {
                                                          "type": "integer",
                                                          "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                          "minimum": 0,
                                                          "maximum": 10,
                                                          "example": 3,
                                                          "default": 0
                                                        },
                                                        "finally": {
                                                          "type": "object",
                                                          "description": "What to do after all retries",
                                                          "required": [
                                                            "goto"
                                                          ],
                                                          "properties": {
                                                            "actions": {
                                                              "type": "array",
                                                              "description": "Actions to take on failure",
                                                              "items": {
                                                                "anyOf": [
                                                                  {
                                                                    "type": "object",
                                                                    "properties": {
                                                                      "type": {
                                                                        "type": "string",
                                                                        "description": "The type of the action",
                                                                        "enum": [
                                                                          "email"
                                                                        ]
                                                                      },
                                                                      "options": {
                                                                        "type": "object",
                                                                        "description": "settings for the action",
                                                                        "additionalProperties": {
                                                                          "type": "string"
                                                                        },
                                                                        "x-examples": [
                                                                          {
                                                                            "to": "bob@example.com",
                                                                            "from": "alice@example.com"
                                                                          }
                                                                        ]
                                                                      }
                                                                    }
                                                                  }
                                                                ]
                                                              }
                                                            },
                                                            "goto": {
                                                              "type": "string",
                                                              "description": "Step to transition to on failure",
                                                              "pattern": "^[a-z][a-z-]+[a-z]$",
                                                              "example": "failed",
                                                              "x-examples": [
                                                                "failed"
                                                              ]
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "onComplete": {
                                                      "type": "object",
                                                      "description": "Actions to take when the step completes",
                                                      "properties": {
                                                        "actions": {
                                                          "type": "array",
                                                          "items": {
                                                            "anyOf": [
                                                              {
                                                                "type": "object",
                                                                "properties": {
                                                                  "type": {
                                                                    "type": "string",
                                                                    "description": "The type of the action",
                                                                    "enum": [
                                                                      "email"
                                                                    ]
                                                                  },
                                                                  "options": {
                                                                    "type": "object",
                                                                    "description": "settings for the action",
                                                                    "additionalProperties": {
                                                                      "type": "string"
                                                                    },
                                                                    "x-examples": [
                                                                      {
                                                                        "to": "bob@example.com",
                                                                        "from": "alice@example.com"
                                                                      }
                                                                    ]
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "type": "object",
                                          "properties": {
                                            "label": {
                                              "example": "Is device ok?",
                                              "x-examples": [
                                                "Is device ok?"
                                              ]
                                            },
                                            "type": {
                                              "example": "choice",
                                              "x-examples": [
                                                "choice"
                                              ]
                                            },
                                            "choices": {
                                              "type": "array",
                                              "items": {
                                                "type": "object",
                                                "required": [
                                                  "goto"
                                                ],
                                                "maxProperties": 2,
                                                "minProperties": 2,
                                                "maximum": 20,
                                                "properties": {
                                                  "and": {
                                                    "type": "array",
                                                    "description": "All choices must be satisfied",
                                                    "maximum": 5,
                                                    "items": {
                                                      "description": "A Step choice",
                                                      "type": "object",
                                                      "maxProperties": 2,
                                                      "minProperties": 2,
                                                      "required": [
                                                        "variable"
                                                      ],
                                                      "properties": {
                                                        "variable": {
                                                          "type": "string",
                                                          "description": "Context variable to check",
                                                          "example": "$.parts.available",
                                                          "x-examples": [
                                                            "$.parts.available"
                                                          ]
                                                        },
                                                        "greater_than_equals": {
                                                          "type": "string",
                                                          "description": "Value has to be greater than or equals to",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "less_than_equals": {
                                                          "type": "string",
                                                          "description": "Value has to be less than or equals to",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "greater_than": {
                                                          "type": "string",
                                                          "description": "Value has to be greater than",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "less_than": {
                                                          "type": "string",
                                                          "description": "Value has to be less than",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "equals": {
                                                          "type": "string",
                                                          "description": "Value has to equal",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "not_equals": {
                                                          "type": "string",
                                                          "description": "Value must not equal",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "or": {
                                                    "type": "array",
                                                    "description": "Any of these choices must be satisfied",
                                                    "maximum": 5,
                                                    "items": {
                                                      "description": "A Step choice",
                                                      "type": "object",
                                                      "maxProperties": 2,
                                                      "minProperties": 2,
                                                      "required": [
                                                        "variable"
                                                      ],
                                                      "properties": {
                                                        "variable": {
                                                          "type": "string",
                                                          "description": "Context variable to check",
                                                          "example": "$.parts.available",
                                                          "x-examples": [
                                                            "$.parts.available"
                                                          ]
                                                        },
                                                        "greater_than_equals": {
                                                          "type": "string",
                                                          "description": "Value has to be greater than or equals to",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "less_than_equals": {
                                                          "type": "string",
                                                          "description": "Value has to be less than or equals to",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "greater_than": {
                                                          "type": "string",
                                                          "description": "Value has to be greater than",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "less_than": {
                                                          "type": "string",
                                                          "description": "Value has to be less than",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "equals": {
                                                          "type": "string",
                                                          "description": "Value has to equal",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "not_equals": {
                                                          "type": "string",
                                                          "description": "Value must not equal",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "not": {
                                                    "type": "array",
                                                    "description": "None of these choices must be satisfied",
                                                    "maximum": 5,
                                                    "items": {
                                                      "description": "A Step choice",
                                                      "type": "object",
                                                      "maxProperties": 2,
                                                      "minProperties": 2,
                                                      "required": [
                                                        "variable"
                                                      ],
                                                      "properties": {
                                                        "variable": {
                                                          "type": "string",
                                                          "description": "Context variable to check",
                                                          "example": "$.parts.available",
                                                          "x-examples": [
                                                            "$.parts.available"
                                                          ]
                                                        },
                                                        "greater_than_equals": {
                                                          "type": "string",
                                                          "description": "Value has to be greater than or equals to",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "less_than_equals": {
                                                          "type": "string",
                                                          "description": "Value has to be less than or equals to",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "greater_than": {
                                                          "type": "string",
                                                          "description": "Value has to be greater than",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "less_than": {
                                                          "type": "string",
                                                          "description": "Value has to be less than",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "equals": {
                                                          "type": "string",
                                                          "description": "Value has to equal",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "not_equals": {
                                                          "type": "string",
                                                          "description": "Value must not equal",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "goto": {
                                                    "description": "Step to goto when condition is met",
                                                    "allOf": [
                                                      {
                                                        "type": "string",
                                                        "description": "Step to move to",
                                                        "pattern": "^[a-z][a-z-]+[a-z]$",
                                                        "example": "complete",
                                                        "x-examples": [
                                                          "complete"
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                }
                                              }
                                            },
                                            "goto": {
                                              "description": "Default step to goto when no choice can be made"
                                            }
                                          },
                                          "allOf": [
                                            {
                                              "type": "object",
                                              "x-ui-hide": true,
                                              "required": [
                                                "type",
                                                "label",
                                                "goto"
                                              ],
                                              "properties": {
                                                "type": {
                                                  "type": "string",
                                                  "description": "Type of workflow step",
                                                  "enum": [
                                                    "load",
                                                    "choice",
                                                    "function",
                                                    "machine",
                                                    "pass",
                                                    "fail",
                                                    "success",
                                                    "user",
                                                    "wait"
                                                  ]
                                                },
                                                "label": {
                                                  "type": "string",
                                                  "description": "Label for the step",
                                                  "example": "Find units",
                                                  "x-examples": [
                                                    "Find units"
                                                  ]
                                                },
                                                "goto": {
                                                  "type": "string",
                                                  "description": "Step to move to",
                                                  "pattern": "^[a-z][a-z-]+[a-z]$",
                                                  "example": "complete",
                                                  "x-examples": [
                                                    "complete"
                                                  ]
                                                },
                                                "goto-fail": {
                                                  "type": "string",
                                                  "description": "Step to transition too if this step cannot be completed",
                                                  "pattern": "^[a-z][a-z-]+[a-z]$",
                                                  "example": "process-fail",
                                                  "x-examples": [
                                                    "process-fail"
                                                  ]
                                                },
                                                "context": {
                                                  "type": "array",
                                                  "description": "Initial values to set on the context",
                                                  "items": {
                                                    "type": "object",
                                                    "required": [
                                                      "key",
                                                      "value"
                                                    ],
                                                    "properties": {
                                                      "key": {
                                                        "type": "string",
                                                        "description": "The context key to set",
                                                        "example": "$.fizz",
                                                        "x-examples": [
                                                          "$.fizz",
                                                          "$.unit.status",
                                                          "extract_fields"
                                                        ]
                                                      },
                                                      "value": {
                                                        "type": "string",
                                                        "description": "Value to set",
                                                        "example": "$.buzz",
                                                        "x-examples": [
                                                          "$.buzz",
                                                          "Pending",
                                                          true
                                                        ]
                                                      },
                                                      "lock": {
                                                        "type": "boolean",
                                                        "description": "Prevents other steps from writing this value",
                                                        "example": true
                                                      },
                                                      "ignore": {
                                                        "type": "boolean",
                                                        "description": "When trying to set a locked key, do not fail",
                                                        "example": false
                                                      }
                                                    }
                                                  }
                                                },
                                                "onError": {
                                                  "type": "object",
                                                  "description": "Action to take when step fails",
                                                  "required": [
                                                    "finally"
                                                  ],
                                                  "properties": {
                                                    "retry": {
                                                      "type": "integer",
                                                      "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                      "minimum": 0,
                                                      "maximum": 10,
                                                      "example": 3,
                                                      "default": 0
                                                    },
                                                    "finally": {
                                                      "type": "object",
                                                      "description": "What to do after all retries",
                                                      "required": [
                                                        "goto"
                                                      ],
                                                      "properties": {
                                                        "actions": {
                                                          "type": "array",
                                                          "description": "Actions to take on failure",
                                                          "items": {
                                                            "anyOf": [
                                                              {
                                                                "type": "object",
                                                                "properties": {
                                                                  "type": {
                                                                    "type": "string",
                                                                    "description": "The type of the action",
                                                                    "enum": [
                                                                      "email"
                                                                    ]
                                                                  },
                                                                  "options": {
                                                                    "type": "object",
                                                                    "description": "settings for the action",
                                                                    "additionalProperties": {
                                                                      "type": "string"
                                                                    },
                                                                    "x-examples": [
                                                                      {
                                                                        "to": "bob@example.com",
                                                                        "from": "alice@example.com"
                                                                      }
                                                                    ]
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        },
                                                        "goto": {
                                                          "type": "string",
                                                          "description": "Step to transition to on failure",
                                                          "pattern": "^[a-z][a-z-]+[a-z]$",
                                                          "example": "failed",
                                                          "x-examples": [
                                                            "failed"
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "onComplete": {
                                                  "type": "object",
                                                  "description": "Actions to take when the step completes",
                                                  "properties": {
                                                    "actions": {
                                                      "type": "array",
                                                      "items": {
                                                        "anyOf": [
                                                          {
                                                            "type": "object",
                                                            "properties": {
                                                              "type": {
                                                                "type": "string",
                                                                "description": "The type of the action",
                                                                "enum": [
                                                                  "email"
                                                                ]
                                                              },
                                                              "options": {
                                                                "type": "object",
                                                                "description": "settings for the action",
                                                                "additionalProperties": {
                                                                  "type": "string"
                                                                },
                                                                "x-examples": [
                                                                  {
                                                                    "to": "bob@example.com",
                                                                    "from": "alice@example.com"
                                                                  }
                                                                ]
                                                              }
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          "type": "object",
                                          "description": "Finial step which is marked as failed",
                                          "properties": {
                                            "label": {
                                              "example": "Failed",
                                              "x-examples": [
                                                "Failed"
                                              ],
                                              "allOf": [
                                                {
                                                  "type": "string",
                                                  "description": "Label for the step",
                                                  "example": "Find units",
                                                  "x-examples": [
                                                    "Find units"
                                                  ]
                                                }
                                              ]
                                            },
                                            "type": {
                                              "example": "fail",
                                              "x-examples": [
                                                "fail"
                                              ],
                                              "allOf": [
                                                {
                                                  "type": "string",
                                                  "description": "Type of workflow step",
                                                  "enum": [
                                                    "load",
                                                    "choice",
                                                    "function",
                                                    "machine",
                                                    "pass",
                                                    "fail",
                                                    "success",
                                                    "user",
                                                    "wait"
                                                  ]
                                                }
                                              ]
                                            },
                                            "onComplete": {
                                              "type": "object",
                                              "description": "Actions to take when the step completes",
                                              "properties": {
                                                "actions": {
                                                  "type": "array",
                                                  "items": {
                                                    "anyOf": [
                                                      {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "string",
                                                            "description": "The type of the action",
                                                            "enum": [
                                                              "email"
                                                            ]
                                                          },
                                                          "options": {
                                                            "type": "object",
                                                            "description": "settings for the action",
                                                            "additionalProperties": {
                                                              "type": "string"
                                                            },
                                                            "x-examples": [
                                                              {
                                                                "to": "bob@example.com",
                                                                "from": "alice@example.com"
                                                              }
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        {
                                          "type": "object",
                                          "description": "Allows executing actions with out performing any function",
                                          "properties": {
                                            "label": {
                                              "example": "Send email to project manager",
                                              "x-examples": [
                                                "Send email to project manager"
                                              ]
                                            },
                                            "type": {
                                              "example": "pass",
                                              "x-examples": [
                                                "pass"
                                              ],
                                              "allOf": [
                                                {
                                                  "type": "string",
                                                  "description": "Type of workflow step",
                                                  "enum": [
                                                    "load",
                                                    "choice",
                                                    "function",
                                                    "machine",
                                                    "pass",
                                                    "fail",
                                                    "success",
                                                    "user",
                                                    "wait"
                                                  ]
                                                }
                                              ]
                                            }
                                          },
                                          "allOf": [
                                            {
                                              "type": "object",
                                              "x-ui-hide": true,
                                              "required": [
                                                "type",
                                                "label",
                                                "goto"
                                              ],
                                              "properties": {
                                                "type": {
                                                  "type": "string",
                                                  "description": "Type of workflow step",
                                                  "enum": [
                                                    "load",
                                                    "choice",
                                                    "function",
                                                    "machine",
                                                    "pass",
                                                    "fail",
                                                    "success",
                                                    "user",
                                                    "wait"
                                                  ]
                                                },
                                                "label": {
                                                  "type": "string",
                                                  "description": "Label for the step",
                                                  "example": "Find units",
                                                  "x-examples": [
                                                    "Find units"
                                                  ]
                                                },
                                                "goto": {
                                                  "type": "string",
                                                  "description": "Step to move to",
                                                  "pattern": "^[a-z][a-z-]+[a-z]$",
                                                  "example": "complete",
                                                  "x-examples": [
                                                    "complete"
                                                  ]
                                                },
                                                "goto-fail": {
                                                  "type": "string",
                                                  "description": "Step to transition too if this step cannot be completed",
                                                  "pattern": "^[a-z][a-z-]+[a-z]$",
                                                  "example": "process-fail",
                                                  "x-examples": [
                                                    "process-fail"
                                                  ]
                                                },
                                                "context": {
                                                  "type": "array",
                                                  "description": "Initial values to set on the context",
                                                  "items": {
                                                    "type": "object",
                                                    "required": [
                                                      "key",
                                                      "value"
                                                    ],
                                                    "properties": {
                                                      "key": {
                                                        "type": "string",
                                                        "description": "The context key to set",
                                                        "example": "$.fizz",
                                                        "x-examples": [
                                                          "$.fizz",
                                                          "$.unit.status",
                                                          "extract_fields"
                                                        ]
                                                      },
                                                      "value": {
                                                        "type": "string",
                                                        "description": "Value to set",
                                                        "example": "$.buzz",
                                                        "x-examples": [
                                                          "$.buzz",
                                                          "Pending",
                                                          true
                                                        ]
                                                      },
                                                      "lock": {
                                                        "type": "boolean",
                                                        "description": "Prevents other steps from writing this value",
                                                        "example": true
                                                      },
                                                      "ignore": {
                                                        "type": "boolean",
                                                        "description": "When trying to set a locked key, do not fail",
                                                        "example": false
                                                      }
                                                    }
                                                  }
                                                },
                                                "onError": {
                                                  "type": "object",
                                                  "description": "Action to take when step fails",
                                                  "required": [
                                                    "finally"
                                                  ],
                                                  "properties": {
                                                    "retry": {
                                                      "type": "integer",
                                                      "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                      "minimum": 0,
                                                      "maximum": 10,
                                                      "example": 3,
                                                      "default": 0
                                                    },
                                                    "finally": {
                                                      "type": "object",
                                                      "description": "What to do after all retries",
                                                      "required": [
                                                        "goto"
                                                      ],
                                                      "properties": {
                                                        "actions": {
                                                          "type": "array",
                                                          "description": "Actions to take on failure",
                                                          "items": {
                                                            "anyOf": [
                                                              {
                                                                "type": "object",
                                                                "properties": {
                                                                  "type": {
                                                                    "type": "string",
                                                                    "description": "The type of the action",
                                                                    "enum": [
                                                                      "email"
                                                                    ]
                                                                  },
                                                                  "options": {
                                                                    "type": "object",
                                                                    "description": "settings for the action",
                                                                    "additionalProperties": {
                                                                      "type": "string"
                                                                    },
                                                                    "x-examples": [
                                                                      {
                                                                        "to": "bob@example.com",
                                                                        "from": "alice@example.com"
                                                                      }
                                                                    ]
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        },
                                                        "goto": {
                                                          "type": "string",
                                                          "description": "Step to transition to on failure",
                                                          "pattern": "^[a-z][a-z-]+[a-z]$",
                                                          "example": "failed",
                                                          "x-examples": [
                                                            "failed"
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "onComplete": {
                                                  "type": "object",
                                                  "description": "Actions to take when the step completes",
                                                  "properties": {
                                                    "actions": {
                                                      "type": "array",
                                                      "items": {
                                                        "anyOf": [
                                                          {
                                                            "type": "object",
                                                            "properties": {
                                                              "type": {
                                                                "type": "string",
                                                                "description": "The type of the action",
                                                                "enum": [
                                                                  "email"
                                                                ]
                                                              },
                                                              "options": {
                                                                "type": "object",
                                                                "description": "settings for the action",
                                                                "additionalProperties": {
                                                                  "type": "string"
                                                                },
                                                                "x-examples": [
                                                                  {
                                                                    "to": "bob@example.com",
                                                                    "from": "alice@example.com"
                                                                  }
                                                                ]
                                                              }
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          "type": "object",
                                          "description": "Finial step which is marked as completed successfully",
                                          "properties": {
                                            "label": {
                                              "example": "Complete",
                                              "x-examples": [
                                                "Complete"
                                              ],
                                              "allOf": [
                                                {
                                                  "type": "string",
                                                  "description": "Label for the step",
                                                  "example": "Find units",
                                                  "x-examples": [
                                                    "Find units"
                                                  ]
                                                }
                                              ]
                                            },
                                            "type": {
                                              "example": "success",
                                              "x-examples": [
                                                "success"
                                              ],
                                              "allOf": [
                                                {
                                                  "type": "string",
                                                  "description": "Type of workflow step",
                                                  "enum": [
                                                    "load",
                                                    "choice",
                                                    "function",
                                                    "machine",
                                                    "pass",
                                                    "fail",
                                                    "success",
                                                    "user",
                                                    "wait"
                                                  ]
                                                }
                                              ]
                                            },
                                            "onComplete": {
                                              "type": "object",
                                              "description": "Actions to take when the step completes",
                                              "properties": {
                                                "actions": {
                                                  "type": "array",
                                                  "items": {
                                                    "anyOf": [
                                                      {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "string",
                                                            "description": "The type of the action",
                                                            "enum": [
                                                              "email"
                                                            ]
                                                          },
                                                          "options": {
                                                            "type": "object",
                                                            "description": "settings for the action",
                                                            "additionalProperties": {
                                                              "type": "string"
                                                            },
                                                            "x-examples": [
                                                              {
                                                                "to": "bob@example.com",
                                                                "from": "alice@example.com"
                                                              }
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        {
                                          "type": "object",
                                          "description": "A step which run at certain times",
                                          "required": [
                                            "stop_at",
                                            "time"
                                          ],
                                          "properties": {
                                            "label": {
                                              "example": "Wait for cable",
                                              "x-examples": [
                                                "Wait for cable"
                                              ],
                                              "allOf": [
                                                {
                                                  "type": "string",
                                                  "description": "Label for the step",
                                                  "example": "Find units",
                                                  "x-examples": [
                                                    "Find units"
                                                  ]
                                                }
                                              ]
                                            },
                                            "type": {
                                              "x-examples": [
                                                "wait"
                                              ],
                                              "example": "wait"
                                            },
                                            "stop_at": {
                                              "type": "integer",
                                              "description": "Time in seconds to stop this task",
                                              "maximum": 900,
                                              "minimum": 1
                                            },
                                            "time": {
                                              "type": "integer",
                                              "description": "Time to wait before checking this step",
                                              "example": 600,
                                              "maximum": 900,
                                              "minimum": 1
                                            },
                                            "listen_for": {
                                              "type": "array",
                                              "description": "List of events and conditions to listen for to trigger",
                                              "items": {
                                                "type": "object",
                                                "required": [
                                                  "event"
                                                ],
                                                "properties": {
                                                  "event": {
                                                    "type": "string",
                                                    "description": "Name of the event to listen for",
                                                    "allOf": [
                                                      {
                                                        "type": "string",
                                                        "description": "Possible entity events",
                                                        "enum": [
                                                          "CON.attached",
                                                          "CON.created",
                                                          "CON.deleted",
                                                          "CON.detached",
                                                          "CON.removed",
                                                          "CON.updated",
                                                          "CUS.attached",
                                                          "CUS.created",
                                                          "CUS.deleted",
                                                          "CUS.detached",
                                                          "CUS.removed",
                                                          "CUS.updated",
                                                          "LOC.attached",
                                                          "LOC.created",
                                                          "LOC.deleted",
                                                          "LOC.detached",
                                                          "LOC.removed",
                                                          "LOC.updated",
                                                          "NOTE.attached",
                                                          "NOTE.created",
                                                          "NOTE.deleted",
                                                          "NOTE.detached",
                                                          "NOTE.removed",
                                                          "NOTE.updated",
                                                          "PART.attached",
                                                          "PART.created",
                                                          "PART.deleted",
                                                          "PART.detached",
                                                          "PART.removed",
                                                          "PART.updated",
                                                          "PGM.attached",
                                                          "PGM.created",
                                                          "PGM.deleted",
                                                          "PGM.detached",
                                                          "PGM.removed",
                                                          "PGM.updated",
                                                          "PRO.attached",
                                                          "PRO.created",
                                                          "PRO.deleted",
                                                          "PRO.detached",
                                                          "PRO.removed",
                                                          "PRO.updated",
                                                          "RES.attached",
                                                          "RES.created",
                                                          "RES.deleted",
                                                          "RES.detached",
                                                          "RES.removed",
                                                          "RES.updated",
                                                          "UNIT.attached",
                                                          "UNIT.created",
                                                          "UNIT.deleted",
                                                          "UNIT.detached",
                                                          "UNIT.removed",
                                                          "UNIT.updated",
                                                          "USER.attached",
                                                          "USER.created",
                                                          "USER.deleted",
                                                          "USER.detached",
                                                          "USER.removed",
                                                          "USER.updated",
                                                          "WKF.attached",
                                                          "WKF.created",
                                                          "WKF.deleted",
                                                          "WKF.detached",
                                                          "WKF.removed",
                                                          "WKF.updated",
                                                          "WOR.attached",
                                                          "WOR.created",
                                                          "WOR.deleted",
                                                          "WOR.detached",
                                                          "WOR.removed",
                                                          "WOR.updated"
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  "event_value": {
                                                    "type": "object",
                                                    "description": "The event conditions that have to be met",
                                                    "allOf": [
                                                      {
                                                        "description": "A Step choice",
                                                        "type": "object",
                                                        "maxProperties": 2,
                                                        "minProperties": 2,
                                                        "required": [
                                                          "variable"
                                                        ],
                                                        "properties": {
                                                          "variable": {
                                                            "type": "string",
                                                            "description": "Context variable to check",
                                                            "example": "$.parts.available",
                                                            "x-examples": [
                                                              "$.parts.available"
                                                            ]
                                                          },
                                                          "greater_than_equals": {
                                                            "type": "string",
                                                            "description": "Value has to be greater than or equals to",
                                                            "example": "42",
                                                            "x-examples": [
                                                              "42"
                                                            ]
                                                          },
                                                          "less_than_equals": {
                                                            "type": "string",
                                                            "description": "Value has to be less than or equals to",
                                                            "example": "42",
                                                            "x-examples": [
                                                              "42"
                                                            ]
                                                          },
                                                          "greater_than": {
                                                            "type": "string",
                                                            "description": "Value has to be greater than",
                                                            "example": "42",
                                                            "x-examples": [
                                                              "42"
                                                            ]
                                                          },
                                                          "less_than": {
                                                            "type": "string",
                                                            "description": "Value has to be less than",
                                                            "example": "42",
                                                            "x-examples": [
                                                              "42"
                                                            ]
                                                          },
                                                          "equals": {
                                                            "type": "string",
                                                            "description": "Value has to equal",
                                                            "example": "42",
                                                            "x-examples": [
                                                              "42"
                                                            ]
                                                          },
                                                          "not_equals": {
                                                            "type": "string",
                                                            "description": "Value must not equal",
                                                            "example": "42",
                                                            "x-examples": [
                                                              "42"
                                                            ]
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
                                              "x-ui-hide": true,
                                              "required": [
                                                "type",
                                                "label",
                                                "goto"
                                              ],
                                              "properties": {
                                                "type": {
                                                  "type": "string",
                                                  "description": "Type of workflow step",
                                                  "enum": [
                                                    "load",
                                                    "choice",
                                                    "function",
                                                    "machine",
                                                    "pass",
                                                    "fail",
                                                    "success",
                                                    "user",
                                                    "wait"
                                                  ]
                                                },
                                                "label": {
                                                  "type": "string",
                                                  "description": "Label for the step",
                                                  "example": "Find units",
                                                  "x-examples": [
                                                    "Find units"
                                                  ]
                                                },
                                                "goto": {
                                                  "type": "string",
                                                  "description": "Step to move to",
                                                  "pattern": "^[a-z][a-z-]+[a-z]$",
                                                  "example": "complete",
                                                  "x-examples": [
                                                    "complete"
                                                  ]
                                                },
                                                "goto-fail": {
                                                  "type": "string",
                                                  "description": "Step to transition too if this step cannot be completed",
                                                  "pattern": "^[a-z][a-z-]+[a-z]$",
                                                  "example": "process-fail",
                                                  "x-examples": [
                                                    "process-fail"
                                                  ]
                                                },
                                                "context": {
                                                  "type": "array",
                                                  "description": "Initial values to set on the context",
                                                  "items": {
                                                    "type": "object",
                                                    "required": [
                                                      "key",
                                                      "value"
                                                    ],
                                                    "properties": {
                                                      "key": {
                                                        "type": "string",
                                                        "description": "The context key to set",
                                                        "example": "$.fizz",
                                                        "x-examples": [
                                                          "$.fizz",
                                                          "$.unit.status",
                                                          "extract_fields"
                                                        ]
                                                      },
                                                      "value": {
                                                        "type": "string",
                                                        "description": "Value to set",
                                                        "example": "$.buzz",
                                                        "x-examples": [
                                                          "$.buzz",
                                                          "Pending",
                                                          true
                                                        ]
                                                      },
                                                      "lock": {
                                                        "type": "boolean",
                                                        "description": "Prevents other steps from writing this value",
                                                        "example": true
                                                      },
                                                      "ignore": {
                                                        "type": "boolean",
                                                        "description": "When trying to set a locked key, do not fail",
                                                        "example": false
                                                      }
                                                    }
                                                  }
                                                },
                                                "onError": {
                                                  "type": "object",
                                                  "description": "Action to take when step fails",
                                                  "required": [
                                                    "finally"
                                                  ],
                                                  "properties": {
                                                    "retry": {
                                                      "type": "integer",
                                                      "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                      "minimum": 0,
                                                      "maximum": 10,
                                                      "example": 3,
                                                      "default": 0
                                                    },
                                                    "finally": {
                                                      "type": "object",
                                                      "description": "What to do after all retries",
                                                      "required": [
                                                        "goto"
                                                      ],
                                                      "properties": {
                                                        "actions": {
                                                          "type": "array",
                                                          "description": "Actions to take on failure",
                                                          "items": {
                                                            "anyOf": [
                                                              {
                                                                "type": "object",
                                                                "properties": {
                                                                  "type": {
                                                                    "type": "string",
                                                                    "description": "The type of the action",
                                                                    "enum": [
                                                                      "email"
                                                                    ]
                                                                  },
                                                                  "options": {
                                                                    "type": "object",
                                                                    "description": "settings for the action",
                                                                    "additionalProperties": {
                                                                      "type": "string"
                                                                    },
                                                                    "x-examples": [
                                                                      {
                                                                        "to": "bob@example.com",
                                                                        "from": "alice@example.com"
                                                                      }
                                                                    ]
                                                                  }
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        },
                                                        "goto": {
                                                          "type": "string",
                                                          "description": "Step to transition to on failure",
                                                          "pattern": "^[a-z][a-z-]+[a-z]$",
                                                          "example": "failed",
                                                          "x-examples": [
                                                            "failed"
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "onComplete": {
                                                  "type": "object",
                                                  "description": "Actions to take when the step completes",
                                                  "properties": {
                                                    "actions": {
                                                      "type": "array",
                                                      "items": {
                                                        "anyOf": [
                                                          {
                                                            "type": "object",
                                                            "properties": {
                                                              "type": {
                                                                "type": "string",
                                                                "description": "The type of the action",
                                                                "enum": [
                                                                  "email"
                                                                ]
                                                              },
                                                              "options": {
                                                                "type": "object",
                                                                "description": "settings for the action",
                                                                "additionalProperties": {
                                                                  "type": "string"
                                                                },
                                                                "x-examples": [
                                                                  {
                                                                    "to": "bob@example.com",
                                                                    "from": "alice@example.com"
                                                                  }
                                                                ]
                                                              }
                                                            }
                                                          }
                                                        ]
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
                                  ]
                                }
                              },
                              "additionalProperties": {
                                "type": "object",
                                "anyOf": [
                                  {
                                    "type": "object",
                                    "description": "Close step",
                                    "required": [
                                      "step"
                                    ],
                                    "properties": {
                                      "step": {
                                        "type": "string",
                                        "description": "Step to mark as complete",
                                        "pattern": "^[a-z][a-z-]+[a-z]$",
                                        "example": "complete",
                                        "x-examples": [
                                          "complete"
                                        ]
                                      }
                                    },
                                    "anyOf": [
                                      {
                                        "type": "object",
                                        "description": "Require the user confirm an action. This is normally used when Niagara cannot automatically detect that a task or action has been performed.",
                                        "x-nter-step-component": "confirm-action",
                                        "properties": {
                                          "label": {
                                            "x-examples": [
                                              "Confirm the device has powered off"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "component",
                                              "payload"
                                            ],
                                            "properties": {
                                              "component": {
                                                "enum": [
                                                  "confirm-action"
                                                ],
                                                "example": "confirm-action",
                                                "x-examples": [
                                                  "confirm-action"
                                                ]
                                              },
                                              "payload": {
                                                "type": "object",
                                                "required": [
                                                  "message"
                                                ],
                                                "properties": {
                                                  "message": {
                                                    "type": "string",
                                                    "description": "The confirmation message to display to the user",
                                                    "example": "Device powered off?",
                                                    "x-examples": [
                                                      "Device powered off?"
                                                    ]
                                                  },
                                                  "negative_message": {
                                                    "type": "string",
                                                    "description": "An optional inverse message",
                                                    "nullable": true,
                                                    "example": "Device not functioning",
                                                    "x-examples": [
                                                      "Device not functioning"
                                                    ]
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "allOf": [
                                          {
                                            "type": "object",
                                            "x-ui-hide": true,
                                            "description": "A step which requires a user to complete",
                                            "required": [
                                              "type",
                                              "options"
                                            ],
                                            "properties": {
                                              "type": {
                                                "example": "user",
                                                "x-examples": [
                                                  "user"
                                                ]
                                              },
                                              "options": {
                                                "type": "object",
                                                "required": [
                                                  "component",
                                                  "payload"
                                                ],
                                                "properties": {
                                                  "component": {
                                                    "type": "string",
                                                    "description": "Name of the function to invoke",
                                                    "example": "assignUnitsFromCustomerToProject",
                                                    "x-examples": [
                                                      "assignUnitsFromCustomerToProject"
                                                    ]
                                                  },
                                                  "payload": {
                                                    "type": "object"
                                                  }
                                                }
                                              }
                                            },
                                            "allOf": [
                                              {
                                                "type": "object",
                                                "x-ui-hide": true,
                                                "required": [
                                                  "type",
                                                  "label",
                                                  "goto"
                                                ],
                                                "properties": {
                                                  "type": {
                                                    "type": "string",
                                                    "description": "Type of workflow step",
                                                    "enum": [
                                                      "load",
                                                      "choice",
                                                      "function",
                                                      "machine",
                                                      "pass",
                                                      "fail",
                                                      "success",
                                                      "user",
                                                      "wait"
                                                    ]
                                                  },
                                                  "label": {
                                                    "type": "string",
                                                    "description": "Label for the step",
                                                    "example": "Find units",
                                                    "x-examples": [
                                                      "Find units"
                                                    ]
                                                  },
                                                  "goto": {
                                                    "type": "string",
                                                    "description": "Step to move to",
                                                    "pattern": "^[a-z][a-z-]+[a-z]$",
                                                    "example": "complete",
                                                    "x-examples": [
                                                      "complete"
                                                    ]
                                                  },
                                                  "goto-fail": {
                                                    "type": "string",
                                                    "description": "Step to transition too if this step cannot be completed",
                                                    "pattern": "^[a-z][a-z-]+[a-z]$",
                                                    "example": "process-fail",
                                                    "x-examples": [
                                                      "process-fail"
                                                    ]
                                                  },
                                                  "context": {
                                                    "type": "array",
                                                    "description": "Initial values to set on the context",
                                                    "items": {
                                                      "type": "object",
                                                      "required": [
                                                        "key",
                                                        "value"
                                                      ],
                                                      "properties": {
                                                        "key": {
                                                          "type": "string",
                                                          "description": "The context key to set",
                                                          "example": "$.fizz",
                                                          "x-examples": [
                                                            "$.fizz",
                                                            "$.unit.status",
                                                            "extract_fields"
                                                          ]
                                                        },
                                                        "value": {
                                                          "type": "string",
                                                          "description": "Value to set",
                                                          "example": "$.buzz",
                                                          "x-examples": [
                                                            "$.buzz",
                                                            "Pending",
                                                            true
                                                          ]
                                                        },
                                                        "lock": {
                                                          "type": "boolean",
                                                          "description": "Prevents other steps from writing this value",
                                                          "example": true
                                                        },
                                                        "ignore": {
                                                          "type": "boolean",
                                                          "description": "When trying to set a locked key, do not fail",
                                                          "example": false
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "onError": {
                                                    "type": "object",
                                                    "description": "Action to take when step fails",
                                                    "required": [
                                                      "finally"
                                                    ],
                                                    "properties": {
                                                      "retry": {
                                                        "type": "integer",
                                                        "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                        "minimum": 0,
                                                        "maximum": 10,
                                                        "example": 3,
                                                        "default": 0
                                                      },
                                                      "finally": {
                                                        "type": "object",
                                                        "description": "What to do after all retries",
                                                        "required": [
                                                          "goto"
                                                        ],
                                                        "properties": {
                                                          "actions": {
                                                            "type": "array",
                                                            "description": "Actions to take on failure",
                                                            "items": {
                                                              "anyOf": [
                                                                {
                                                                  "type": "object",
                                                                  "properties": {
                                                                    "type": {
                                                                      "type": "string",
                                                                      "description": "The type of the action",
                                                                      "enum": [
                                                                        "email"
                                                                      ]
                                                                    },
                                                                    "options": {
                                                                      "type": "object",
                                                                      "description": "settings for the action",
                                                                      "additionalProperties": {
                                                                        "type": "string"
                                                                      },
                                                                      "x-examples": [
                                                                        {
                                                                          "to": "bob@example.com",
                                                                          "from": "alice@example.com"
                                                                        }
                                                                      ]
                                                                    }
                                                                  }
                                                                }
                                                              ]
                                                            }
                                                          },
                                                          "goto": {
                                                            "type": "string",
                                                            "description": "Step to transition to on failure",
                                                            "pattern": "^[a-z][a-z-]+[a-z]$",
                                                            "example": "failed",
                                                            "x-examples": [
                                                              "failed"
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "onComplete": {
                                                    "type": "object",
                                                    "description": "Actions to take when the step completes",
                                                    "properties": {
                                                      "actions": {
                                                        "type": "array",
                                                        "items": {
                                                          "anyOf": [
                                                            {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "string",
                                                                  "description": "The type of the action",
                                                                  "enum": [
                                                                    "email"
                                                                  ]
                                                                },
                                                                "options": {
                                                                  "type": "object",
                                                                  "description": "settings for the action",
                                                                  "additionalProperties": {
                                                                    "type": "string"
                                                                  },
                                                                  "x-examples": [
                                                                    {
                                                                      "to": "bob@example.com",
                                                                      "from": "alice@example.com"
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "type": "object",
                                        "description": "Display a link or modal to a user which contains instructions from a PDF",
                                        "x-nter-step-component": "follow-pdf-instructions",
                                        "required": [
                                          "label",
                                          "payload"
                                        ],
                                        "properties": {
                                          "label": {
                                            "x-examples": [
                                              "Instruct user to follow steps outlined in Apple PDF"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "component",
                                              "payload"
                                            ],
                                            "properties": {
                                              "component": {
                                                "enum": [
                                                  "follow-pds-instructions"
                                                ],
                                                "example": "follow-pdf-instructions",
                                                "x-examples": [
                                                  "follow-pdf-instructions"
                                                ]
                                              },
                                              "payload": {
                                                "type": "object",
                                                "required": [
                                                  "attachment_id"
                                                ],
                                                "properties": {
                                                  "attachment_id": {
                                                    "type": "string",
                                                    "description": "UUID for the attachment",
                                                    "format": "uuid",
                                                    "example": "eb65b19f-efb4-40e7-991c-03ba1a2d7ca7",
                                                    "x-examples": [
                                                      "eb65b19f-efb4-40e7-991c-03ba1a2d7ca7"
                                                    ]
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "allOf": [
                                          {
                                            "type": "object",
                                            "x-ui-hide": true,
                                            "description": "A step which requires a user to complete",
                                            "required": [
                                              "type",
                                              "options"
                                            ],
                                            "properties": {
                                              "type": {
                                                "example": "user",
                                                "x-examples": [
                                                  "user"
                                                ]
                                              },
                                              "options": {
                                                "type": "object",
                                                "required": [
                                                  "component",
                                                  "payload"
                                                ],
                                                "properties": {
                                                  "component": {
                                                    "type": "string",
                                                    "description": "Name of the function to invoke",
                                                    "example": "assignUnitsFromCustomerToProject",
                                                    "x-examples": [
                                                      "assignUnitsFromCustomerToProject"
                                                    ]
                                                  },
                                                  "payload": {
                                                    "type": "object"
                                                  }
                                                }
                                              }
                                            },
                                            "allOf": [
                                              {
                                                "type": "object",
                                                "x-ui-hide": true,
                                                "required": [
                                                  "type",
                                                  "label",
                                                  "goto"
                                                ],
                                                "properties": {
                                                  "type": {
                                                    "type": "string",
                                                    "description": "Type of workflow step",
                                                    "enum": [
                                                      "load",
                                                      "choice",
                                                      "function",
                                                      "machine",
                                                      "pass",
                                                      "fail",
                                                      "success",
                                                      "user",
                                                      "wait"
                                                    ]
                                                  },
                                                  "label": {
                                                    "type": "string",
                                                    "description": "Label for the step",
                                                    "example": "Find units",
                                                    "x-examples": [
                                                      "Find units"
                                                    ]
                                                  },
                                                  "goto": {
                                                    "type": "string",
                                                    "description": "Step to move to",
                                                    "pattern": "^[a-z][a-z-]+[a-z]$",
                                                    "example": "complete",
                                                    "x-examples": [
                                                      "complete"
                                                    ]
                                                  },
                                                  "goto-fail": {
                                                    "type": "string",
                                                    "description": "Step to transition too if this step cannot be completed",
                                                    "pattern": "^[a-z][a-z-]+[a-z]$",
                                                    "example": "process-fail",
                                                    "x-examples": [
                                                      "process-fail"
                                                    ]
                                                  },
                                                  "context": {
                                                    "type": "array",
                                                    "description": "Initial values to set on the context",
                                                    "items": {
                                                      "type": "object",
                                                      "required": [
                                                        "key",
                                                        "value"
                                                      ],
                                                      "properties": {
                                                        "key": {
                                                          "type": "string",
                                                          "description": "The context key to set",
                                                          "example": "$.fizz",
                                                          "x-examples": [
                                                            "$.fizz",
                                                            "$.unit.status",
                                                            "extract_fields"
                                                          ]
                                                        },
                                                        "value": {
                                                          "type": "string",
                                                          "description": "Value to set",
                                                          "example": "$.buzz",
                                                          "x-examples": [
                                                            "$.buzz",
                                                            "Pending",
                                                            true
                                                          ]
                                                        },
                                                        "lock": {
                                                          "type": "boolean",
                                                          "description": "Prevents other steps from writing this value",
                                                          "example": true
                                                        },
                                                        "ignore": {
                                                          "type": "boolean",
                                                          "description": "When trying to set a locked key, do not fail",
                                                          "example": false
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "onError": {
                                                    "type": "object",
                                                    "description": "Action to take when step fails",
                                                    "required": [
                                                      "finally"
                                                    ],
                                                    "properties": {
                                                      "retry": {
                                                        "type": "integer",
                                                        "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                        "minimum": 0,
                                                        "maximum": 10,
                                                        "example": 3,
                                                        "default": 0
                                                      },
                                                      "finally": {
                                                        "type": "object",
                                                        "description": "What to do after all retries",
                                                        "required": [
                                                          "goto"
                                                        ],
                                                        "properties": {
                                                          "actions": {
                                                            "type": "array",
                                                            "description": "Actions to take on failure",
                                                            "items": {
                                                              "anyOf": [
                                                                {
                                                                  "type": "object",
                                                                  "properties": {
                                                                    "type": {
                                                                      "type": "string",
                                                                      "description": "The type of the action",
                                                                      "enum": [
                                                                        "email"
                                                                      ]
                                                                    },
                                                                    "options": {
                                                                      "type": "object",
                                                                      "description": "settings for the action",
                                                                      "additionalProperties": {
                                                                        "type": "string"
                                                                      },
                                                                      "x-examples": [
                                                                        {
                                                                          "to": "bob@example.com",
                                                                          "from": "alice@example.com"
                                                                        }
                                                                      ]
                                                                    }
                                                                  }
                                                                }
                                                              ]
                                                            }
                                                          },
                                                          "goto": {
                                                            "type": "string",
                                                            "description": "Step to transition to on failure",
                                                            "pattern": "^[a-z][a-z-]+[a-z]$",
                                                            "example": "failed",
                                                            "x-examples": [
                                                              "failed"
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "onComplete": {
                                                    "type": "object",
                                                    "description": "Actions to take when the step completes",
                                                    "properties": {
                                                      "actions": {
                                                        "type": "array",
                                                        "items": {
                                                          "anyOf": [
                                                            {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "string",
                                                                  "description": "The type of the action",
                                                                  "enum": [
                                                                    "email"
                                                                  ]
                                                                },
                                                                "options": {
                                                                  "type": "object",
                                                                  "description": "settings for the action",
                                                                  "additionalProperties": {
                                                                    "type": "string"
                                                                  },
                                                                  "x-examples": [
                                                                    {
                                                                      "to": "bob@example.com",
                                                                      "from": "alice@example.com"
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "type": "object",
                                        "description": "Ask the user to manually enter (or confirm) data for an entity",
                                        "x-nter-step-component": "manual-data-entry",
                                        "properties": {
                                          "label": {
                                            "x-examples": [
                                              "Enter asset tag and confirm serial number"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "component",
                                              "payload"
                                            ],
                                            "properties": {
                                              "component": {
                                                "enum": [
                                                  "manual-data-entry"
                                                ],
                                                "example": "manual-data-entry",
                                                "x-examples": [
                                                  "manual-data-entry"
                                                ]
                                              },
                                              "payload": {
                                                "type": "object",
                                                "required": [
                                                  "fields"
                                                ],
                                                "properties": {
                                                  "fields": {
                                                    "type": "array",
                                                    "description": "Configuration for each field",
                                                    "items": {
                                                      "type": "object",
                                                      "required": [
                                                        "input_type",
                                                        "label",
                                                        "required",
                                                        "entity_field"
                                                      ],
                                                      "properties": {
                                                        "input_type": {
                                                          "type": "string",
                                                          "description": "The type of input field to display",
                                                          "enum": [
                                                            "textbox",
                                                            "input"
                                                          ]
                                                        },
                                                        "label": {
                                                          "type": "string",
                                                          "description": "Label to display for the field",
                                                          "example": "Asset Tag",
                                                          "x-examples": [
                                                            "Asset Tag"
                                                          ]
                                                        },
                                                        "required": {
                                                          "type": "boolean",
                                                          "description": "Display the field as required input. Note: this is a helper function. It singles that the user is required to input data at this step. If the field is required on the entity, the user will be presented with a validation message",
                                                          "example": true
                                                        },
                                                        "entity_field": {
                                                          "type": "string",
                                                          "description": "JSON Path to the field on the entity. If the path does not start with '$' then the entity on the context is assumed. Otherwise the data will be set on the context path",
                                                          "example": "input_filter[?(@.key = 'asset-tag')]",
                                                          "x-examples": [
                                                            "input_filter[?(@.key = 'asset-tag')]"
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "allOf": [
                                          {
                                            "type": "object",
                                            "x-ui-hide": true,
                                            "description": "A step which requires a user to complete",
                                            "required": [
                                              "type",
                                              "options"
                                            ],
                                            "properties": {
                                              "type": {
                                                "example": "user",
                                                "x-examples": [
                                                  "user"
                                                ]
                                              },
                                              "options": {
                                                "type": "object",
                                                "required": [
                                                  "component",
                                                  "payload"
                                                ],
                                                "properties": {
                                                  "component": {
                                                    "type": "string",
                                                    "description": "Name of the function to invoke",
                                                    "example": "assignUnitsFromCustomerToProject",
                                                    "x-examples": [
                                                      "assignUnitsFromCustomerToProject"
                                                    ]
                                                  },
                                                  "payload": {
                                                    "type": "object"
                                                  }
                                                }
                                              }
                                            },
                                            "allOf": [
                                              {
                                                "type": "object",
                                                "x-ui-hide": true,
                                                "required": [
                                                  "type",
                                                  "label",
                                                  "goto"
                                                ],
                                                "properties": {
                                                  "type": {
                                                    "type": "string",
                                                    "description": "Type of workflow step",
                                                    "enum": [
                                                      "load",
                                                      "choice",
                                                      "function",
                                                      "machine",
                                                      "pass",
                                                      "fail",
                                                      "success",
                                                      "user",
                                                      "wait"
                                                    ]
                                                  },
                                                  "label": {
                                                    "type": "string",
                                                    "description": "Label for the step",
                                                    "example": "Find units",
                                                    "x-examples": [
                                                      "Find units"
                                                    ]
                                                  },
                                                  "goto": {
                                                    "type": "string",
                                                    "description": "Step to move to",
                                                    "pattern": "^[a-z][a-z-]+[a-z]$",
                                                    "example": "complete",
                                                    "x-examples": [
                                                      "complete"
                                                    ]
                                                  },
                                                  "goto-fail": {
                                                    "type": "string",
                                                    "description": "Step to transition too if this step cannot be completed",
                                                    "pattern": "^[a-z][a-z-]+[a-z]$",
                                                    "example": "process-fail",
                                                    "x-examples": [
                                                      "process-fail"
                                                    ]
                                                  },
                                                  "context": {
                                                    "type": "array",
                                                    "description": "Initial values to set on the context",
                                                    "items": {
                                                      "type": "object",
                                                      "required": [
                                                        "key",
                                                        "value"
                                                      ],
                                                      "properties": {
                                                        "key": {
                                                          "type": "string",
                                                          "description": "The context key to set",
                                                          "example": "$.fizz",
                                                          "x-examples": [
                                                            "$.fizz",
                                                            "$.unit.status",
                                                            "extract_fields"
                                                          ]
                                                        },
                                                        "value": {
                                                          "type": "string",
                                                          "description": "Value to set",
                                                          "example": "$.buzz",
                                                          "x-examples": [
                                                            "$.buzz",
                                                            "Pending",
                                                            true
                                                          ]
                                                        },
                                                        "lock": {
                                                          "type": "boolean",
                                                          "description": "Prevents other steps from writing this value",
                                                          "example": true
                                                        },
                                                        "ignore": {
                                                          "type": "boolean",
                                                          "description": "When trying to set a locked key, do not fail",
                                                          "example": false
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "onError": {
                                                    "type": "object",
                                                    "description": "Action to take when step fails",
                                                    "required": [
                                                      "finally"
                                                    ],
                                                    "properties": {
                                                      "retry": {
                                                        "type": "integer",
                                                        "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                        "minimum": 0,
                                                        "maximum": 10,
                                                        "example": 3,
                                                        "default": 0
                                                      },
                                                      "finally": {
                                                        "type": "object",
                                                        "description": "What to do after all retries",
                                                        "required": [
                                                          "goto"
                                                        ],
                                                        "properties": {
                                                          "actions": {
                                                            "type": "array",
                                                            "description": "Actions to take on failure",
                                                            "items": {
                                                              "anyOf": [
                                                                {
                                                                  "type": "object",
                                                                  "properties": {
                                                                    "type": {
                                                                      "type": "string",
                                                                      "description": "The type of the action",
                                                                      "enum": [
                                                                        "email"
                                                                      ]
                                                                    },
                                                                    "options": {
                                                                      "type": "object",
                                                                      "description": "settings for the action",
                                                                      "additionalProperties": {
                                                                        "type": "string"
                                                                      },
                                                                      "x-examples": [
                                                                        {
                                                                          "to": "bob@example.com",
                                                                          "from": "alice@example.com"
                                                                        }
                                                                      ]
                                                                    }
                                                                  }
                                                                }
                                                              ]
                                                            }
                                                          },
                                                          "goto": {
                                                            "type": "string",
                                                            "description": "Step to transition to on failure",
                                                            "pattern": "^[a-z][a-z-]+[a-z]$",
                                                            "example": "failed",
                                                            "x-examples": [
                                                              "failed"
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "onComplete": {
                                                    "type": "object",
                                                    "description": "Actions to take when the step completes",
                                                    "properties": {
                                                      "actions": {
                                                        "type": "array",
                                                        "items": {
                                                          "anyOf": [
                                                            {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "string",
                                                                  "description": "The type of the action",
                                                                  "enum": [
                                                                    "email"
                                                                  ]
                                                                },
                                                                "options": {
                                                                  "type": "object",
                                                                  "description": "settings for the action",
                                                                  "additionalProperties": {
                                                                    "type": "string"
                                                                  },
                                                                  "x-examples": [
                                                                    {
                                                                      "to": "bob@example.com",
                                                                      "from": "alice@example.com"
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "type": "object",
                                        "description": "Ask the user to follow a list and check off boxes",
                                        "x-nter-step-component": "task-list",
                                        "properties": {
                                          "label": {
                                            "x-examples": [
                                              "Enter asset tag and confirm serial number"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "component",
                                              "payload"
                                            ],
                                            "properties": {
                                              "component": {
                                                "enum": [
                                                  "task-list"
                                                ],
                                                "example": "task-list",
                                                "x-examples": [
                                                  "task-list"
                                                ]
                                              },
                                              "payload": {
                                                "type": "object",
                                                "required": [
                                                  "items"
                                                ],
                                                "properties": {
                                                  "is_qc": {
                                                    "type": "boolean",
                                                    "description": "Flags this list as a QC task list. This means that a different user can close the task to one previously on the context"
                                                  },
                                                  "items": {
                                                    "type": "array",
                                                    "description": "Configuration for each task list item",
                                                    "items": {
                                                      "type": "object",
                                                      "required": [
                                                        "label",
                                                        "help",
                                                        "evaluated",
                                                        "na_option"
                                                      ],
                                                      "properties": {
                                                        "label": {
                                                          "type": "string",
                                                          "description": "Label to display for the field",
                                                          "example": "Asset Tag placement",
                                                          "x-examples": [
                                                            "Asset Tag placement"
                                                          ]
                                                        },
                                                        "slug": {
                                                          "type": "string",
                                                          "description": "Slug for the item (Auto-generated from the label)",
                                                          "readOnly": true,
                                                          "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$",
                                                          "example": "asset-tag-placement",
                                                          "x-examples": [
                                                            "asset-tag-placement"
                                                          ]
                                                        },
                                                        "help": {
                                                          "type": "string",
                                                          "description": "Message describing what is needed to be checked",
                                                          "example": "Asset Tag attached to the unit in the correct position",
                                                          "x-examples": [
                                                            "Asset Tag attached to the unit in the correct position"
                                                          ]
                                                        },
                                                        "evaluated": {
                                                          "type": "boolean",
                                                          "description": "When set to true, this will fail the step if the value for the item is false or N/A",
                                                          "example": true
                                                        },
                                                        "na_field": {
                                                          "type": "boolean",
                                                          "description": "Allow the user to select the N/A option when checking off the list",
                                                          "example": true
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "allOf": [
                                          {
                                            "type": "object",
                                            "x-ui-hide": true,
                                            "description": "A step which requires a user to complete",
                                            "required": [
                                              "type",
                                              "options"
                                            ],
                                            "properties": {
                                              "type": {
                                                "example": "user",
                                                "x-examples": [
                                                  "user"
                                                ]
                                              },
                                              "options": {
                                                "type": "object",
                                                "required": [
                                                  "component",
                                                  "payload"
                                                ],
                                                "properties": {
                                                  "component": {
                                                    "type": "string",
                                                    "description": "Name of the function to invoke",
                                                    "example": "assignUnitsFromCustomerToProject",
                                                    "x-examples": [
                                                      "assignUnitsFromCustomerToProject"
                                                    ]
                                                  },
                                                  "payload": {
                                                    "type": "object"
                                                  }
                                                }
                                              }
                                            },
                                            "allOf": [
                                              {
                                                "type": "object",
                                                "x-ui-hide": true,
                                                "required": [
                                                  "type",
                                                  "label",
                                                  "goto"
                                                ],
                                                "properties": {
                                                  "type": {
                                                    "type": "string",
                                                    "description": "Type of workflow step",
                                                    "enum": [
                                                      "load",
                                                      "choice",
                                                      "function",
                                                      "machine",
                                                      "pass",
                                                      "fail",
                                                      "success",
                                                      "user",
                                                      "wait"
                                                    ]
                                                  },
                                                  "label": {
                                                    "type": "string",
                                                    "description": "Label for the step",
                                                    "example": "Find units",
                                                    "x-examples": [
                                                      "Find units"
                                                    ]
                                                  },
                                                  "goto": {
                                                    "type": "string",
                                                    "description": "Step to move to",
                                                    "pattern": "^[a-z][a-z-]+[a-z]$",
                                                    "example": "complete",
                                                    "x-examples": [
                                                      "complete"
                                                    ]
                                                  },
                                                  "goto-fail": {
                                                    "type": "string",
                                                    "description": "Step to transition too if this step cannot be completed",
                                                    "pattern": "^[a-z][a-z-]+[a-z]$",
                                                    "example": "process-fail",
                                                    "x-examples": [
                                                      "process-fail"
                                                    ]
                                                  },
                                                  "context": {
                                                    "type": "array",
                                                    "description": "Initial values to set on the context",
                                                    "items": {
                                                      "type": "object",
                                                      "required": [
                                                        "key",
                                                        "value"
                                                      ],
                                                      "properties": {
                                                        "key": {
                                                          "type": "string",
                                                          "description": "The context key to set",
                                                          "example": "$.fizz",
                                                          "x-examples": [
                                                            "$.fizz",
                                                            "$.unit.status",
                                                            "extract_fields"
                                                          ]
                                                        },
                                                        "value": {
                                                          "type": "string",
                                                          "description": "Value to set",
                                                          "example": "$.buzz",
                                                          "x-examples": [
                                                            "$.buzz",
                                                            "Pending",
                                                            true
                                                          ]
                                                        },
                                                        "lock": {
                                                          "type": "boolean",
                                                          "description": "Prevents other steps from writing this value",
                                                          "example": true
                                                        },
                                                        "ignore": {
                                                          "type": "boolean",
                                                          "description": "When trying to set a locked key, do not fail",
                                                          "example": false
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "onError": {
                                                    "type": "object",
                                                    "description": "Action to take when step fails",
                                                    "required": [
                                                      "finally"
                                                    ],
                                                    "properties": {
                                                      "retry": {
                                                        "type": "integer",
                                                        "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                        "minimum": 0,
                                                        "maximum": 10,
                                                        "example": 3,
                                                        "default": 0
                                                      },
                                                      "finally": {
                                                        "type": "object",
                                                        "description": "What to do after all retries",
                                                        "required": [
                                                          "goto"
                                                        ],
                                                        "properties": {
                                                          "actions": {
                                                            "type": "array",
                                                            "description": "Actions to take on failure",
                                                            "items": {
                                                              "anyOf": [
                                                                {
                                                                  "type": "object",
                                                                  "properties": {
                                                                    "type": {
                                                                      "type": "string",
                                                                      "description": "The type of the action",
                                                                      "enum": [
                                                                        "email"
                                                                      ]
                                                                    },
                                                                    "options": {
                                                                      "type": "object",
                                                                      "description": "settings for the action",
                                                                      "additionalProperties": {
                                                                        "type": "string"
                                                                      },
                                                                      "x-examples": [
                                                                        {
                                                                          "to": "bob@example.com",
                                                                          "from": "alice@example.com"
                                                                        }
                                                                      ]
                                                                    }
                                                                  }
                                                                }
                                                              ]
                                                            }
                                                          },
                                                          "goto": {
                                                            "type": "string",
                                                            "description": "Step to transition to on failure",
                                                            "pattern": "^[a-z][a-z-]+[a-z]$",
                                                            "example": "failed",
                                                            "x-examples": [
                                                              "failed"
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "onComplete": {
                                                    "type": "object",
                                                    "description": "Actions to take when the step completes",
                                                    "properties": {
                                                      "actions": {
                                                        "type": "array",
                                                        "items": {
                                                          "anyOf": [
                                                            {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "string",
                                                                  "description": "The type of the action",
                                                                  "enum": [
                                                                    "email"
                                                                  ]
                                                                },
                                                                "options": {
                                                                  "type": "object",
                                                                  "description": "settings for the action",
                                                                  "additionalProperties": {
                                                                    "type": "string"
                                                                  },
                                                                  "x-examples": [
                                                                    {
                                                                      "to": "bob@example.com",
                                                                      "from": "alice@example.com"
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "type": "object",
                                        "description": "Run the ACE-IOS application to provision iOS devices or ",
                                        "properties": {
                                          "type": {
                                            "example": "machine",
                                            "x-examples": [
                                              "machine"
                                            ]
                                          },
                                          "label": {
                                            "x-examples": [
                                              "Run Application"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "application",
                                              "configuration"
                                            ],
                                            "properties": {
                                              "configuration": {
                                                "type": "object",
                                                "description": "ACE Configuration options",
                                                "properties": {
                                                  "pairing_cert": {
                                                    "type": "string",
                                                    "format": "base64",
                                                    "description": "Contents of a *.crt file exported from Apple Configurator or MDM",
                                                    "example": "dGhpcyBpcyBub3QgYSBjZXJ0IGZpbGUganVzdCBhbiBleGFtcGxl",
                                                    "x-examples": [
                                                      "dGhpcyBpcyBub3QgYSBjZXJ0IGZpbGUganVzdCBhbiBleGFtcGxl"
                                                    ],
                                                    "pattern": "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
                                                  },
                                                  "pairing_key": {
                                                    "type": "string",
                                                    "format": "base64",
                                                    "description": "Contents of a *.der file exported from Apple Configurator or MDM",
                                                    "example": "dGhpcyBpcyBub3QgYSBjZXJ0IGZpbGUganVzdCBhbiBleGFtcGxl",
                                                    "x-examples": [
                                                      "dGhpcyBpcyBub3QgYSBjZXJ0IGZpbGUganVzdCBhbiBleGFtcGxl"
                                                    ],
                                                    "pattern": "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
                                                  },
                                                  "restore_device": {
                                                    "type": "boolean",
                                                    "description": "Restore device to factory defaults"
                                                  },
                                                  "automated_enrollment": {
                                                    "type": "boolean",
                                                    "description": "Automatically enroll the device to MDM"
                                                  },
                                                  "mdm": {
                                                    "type": "object",
                                                    "format": "base64",
                                                    "description": "The settings for the Customers MDM",
                                                    "properties": {
                                                      "vendor": {
                                                        "type": "string",
                                                        "description": "MDM vendor. Currently, supported values are AirWatch, JAMF, and Meraki.",
                                                        "enum": [
                                                          "AirWatch",
                                                          "JAMF",
                                                          "Meraki"
                                                        ]
                                                      },
                                                      "console_url": {
                                                        "type": "string",
                                                        "format": "uri",
                                                        "description": "Base URL for HTTP requests",
                                                        "example": "http://jamf.zones.com",
                                                        "x-examples": [
                                                          "http://jamf.zones.com"
                                                        ]
                                                      },
                                                      "user": {
                                                        "type": "string",
                                                        "description": "MDM User name",
                                                        "example": "NterpriseBob",
                                                        "x-examples": [
                                                          "NterpriseBob"
                                                        ]
                                                      },
                                                      "password": {
                                                        "type": "string",
                                                        "description": "MDM password"
                                                      },
                                                      "tenant_code": {
                                                        "type": "string",
                                                        "description": "MDM authentication key",
                                                        "example": "nterprise",
                                                        "x-examples": [
                                                          "nterprise"
                                                        ]
                                                      },
                                                      "set_asset_tag": {
                                                        "type": "string",
                                                        "description": "Sets the devices Asset tag based on a field from the unit",
                                                        "example": "$._entity.input_filter[?(@.key = 'asset-tag')]",
                                                        "x-examples": [
                                                          "$._entity.input_filter[?(@.key = 'asset-tag')]"
                                                        ]
                                                      }
                                                    }
                                                  },
                                                  "field_mappings": {
                                                    "type": "array",
                                                    "description": "List of fields to map to the device",
                                                    "items": {
                                                      "type": "object",
                                                      "properties": {
                                                        "from": {
                                                          "type": "string",
                                                          "description": "The field reported from ACE",
                                                          "enum": [
                                                            "serial_number",
                                                            "name",
                                                            "ecid",
                                                            "udid",
                                                            "configurator_serial",
                                                            "ios",
                                                            "model",
                                                            "storage",
                                                            "wifi_mac",
                                                            "bt_mac",
                                                            "ethernet_mac",
                                                            "thundersync_serial",
                                                            "iccid",
                                                            "iccid2",
                                                            "imei",
                                                            "imei2",
                                                            "missed_profiles",
                                                            "missed_apps",
                                                            "icon_list_regex",
                                                            "icon_layout",
                                                            "bat_capacity"
                                                          ]
                                                        },
                                                        "to": {
                                                          "type": "string",
                                                          "description": "Field to set on the entity",
                                                          "example": "$._entity.input_filter[?(@.key = 'serial-number')]",
                                                          "x-examples": [
                                                            "$._entity.input_filter[?(@.key = 'serial-number')]"
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "wait_for_apps": {
                                                    "type": "array",
                                                    "description": "A list of applications needed to be installed on the device. This will cause the extension to poll the device for installed applications. Once all the applications have been installed, this step can be completed",
                                                    "items": {
                                                      "type": "string",
                                                      "format": "uri",
                                                      "example": "com.apple.itunes",
                                                      "x-examples": [
                                                        "com.apple.itunes"
                                                      ]
                                                    }
                                                  },
                                                  "wait_for_battery_charge": {
                                                    "type": "integer",
                                                    "description": "The required battery percentage needed before this step can move on",
                                                    "minimum": 0,
                                                    "maximum": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "allOf": [
                                          {
                                            "type": "object",
                                            "description": "Run an application extension",
                                            "properties": {
                                              "label": {
                                                "x-examples": [
                                                  "Run Application"
                                                ]
                                              },
                                              "options": {
                                                "type": "object",
                                                "required": [
                                                  "application",
                                                  "configuration"
                                                ],
                                                "properties": {
                                                  "application": {
                                                    "type": "object",
                                                    "required": [
                                                      "application_id",
                                                      "platforms"
                                                    ],
                                                    "properties": {
                                                      "application_id": {
                                                        "type": "string",
                                                        "description": "Registered application ID",
                                                        "example": "ace-ios",
                                                        "x-examples": [
                                                          "ace-ios"
                                                        ]
                                                      },
                                                      "platforms": {
                                                        "type": "array",
                                                        "description": "Allowed platforms the application can run on",
                                                        "items": {
                                                          "type": "object",
                                                          "required": [
                                                            "platform",
                                                            "arch"
                                                          ],
                                                          "properties": {
                                                            "platform": {
                                                              "type": "string",
                                                              "description": "The platform (OS) the application can run on",
                                                              "enum": [
                                                                "aix",
                                                                "darwin",
                                                                "freebsd",
                                                                "linux",
                                                                "openbsd",
                                                                "sunos",
                                                                "win32"
                                                              ]
                                                            },
                                                            "arch": {
                                                              "type": "string",
                                                              "description": "The CPU architecture needed to run the application",
                                                              "enum": [
                                                                "arm",
                                                                "arm64",
                                                                "ia32",
                                                                "mips",
                                                                "mipsel",
                                                                "ppc",
                                                                "ppc64",
                                                                "s390",
                                                                "s390x",
                                                                "x32",
                                                                "x64"
                                                              ]
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "allOf": [
                                              {
                                                "type": "object",
                                                "x-ui-hide": true,
                                                "required": [
                                                  "type",
                                                  "label",
                                                  "goto"
                                                ],
                                                "properties": {
                                                  "type": {
                                                    "type": "string",
                                                    "description": "Type of workflow step",
                                                    "enum": [
                                                      "load",
                                                      "choice",
                                                      "function",
                                                      "machine",
                                                      "pass",
                                                      "fail",
                                                      "success",
                                                      "user",
                                                      "wait"
                                                    ]
                                                  },
                                                  "label": {
                                                    "type": "string",
                                                    "description": "Label for the step",
                                                    "example": "Find units",
                                                    "x-examples": [
                                                      "Find units"
                                                    ]
                                                  },
                                                  "goto": {
                                                    "type": "string",
                                                    "description": "Step to move to",
                                                    "pattern": "^[a-z][a-z-]+[a-z]$",
                                                    "example": "complete",
                                                    "x-examples": [
                                                      "complete"
                                                    ]
                                                  },
                                                  "goto-fail": {
                                                    "type": "string",
                                                    "description": "Step to transition too if this step cannot be completed",
                                                    "pattern": "^[a-z][a-z-]+[a-z]$",
                                                    "example": "process-fail",
                                                    "x-examples": [
                                                      "process-fail"
                                                    ]
                                                  },
                                                  "context": {
                                                    "type": "array",
                                                    "description": "Initial values to set on the context",
                                                    "items": {
                                                      "type": "object",
                                                      "required": [
                                                        "key",
                                                        "value"
                                                      ],
                                                      "properties": {
                                                        "key": {
                                                          "type": "string",
                                                          "description": "The context key to set",
                                                          "example": "$.fizz",
                                                          "x-examples": [
                                                            "$.fizz",
                                                            "$.unit.status",
                                                            "extract_fields"
                                                          ]
                                                        },
                                                        "value": {
                                                          "type": "string",
                                                          "description": "Value to set",
                                                          "example": "$.buzz",
                                                          "x-examples": [
                                                            "$.buzz",
                                                            "Pending",
                                                            true
                                                          ]
                                                        },
                                                        "lock": {
                                                          "type": "boolean",
                                                          "description": "Prevents other steps from writing this value",
                                                          "example": true
                                                        },
                                                        "ignore": {
                                                          "type": "boolean",
                                                          "description": "When trying to set a locked key, do not fail",
                                                          "example": false
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "onError": {
                                                    "type": "object",
                                                    "description": "Action to take when step fails",
                                                    "required": [
                                                      "finally"
                                                    ],
                                                    "properties": {
                                                      "retry": {
                                                        "type": "integer",
                                                        "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                        "minimum": 0,
                                                        "maximum": 10,
                                                        "example": 3,
                                                        "default": 0
                                                      },
                                                      "finally": {
                                                        "type": "object",
                                                        "description": "What to do after all retries",
                                                        "required": [
                                                          "goto"
                                                        ],
                                                        "properties": {
                                                          "actions": {
                                                            "type": "array",
                                                            "description": "Actions to take on failure",
                                                            "items": {
                                                              "anyOf": [
                                                                {
                                                                  "type": "object",
                                                                  "properties": {
                                                                    "type": {
                                                                      "type": "string",
                                                                      "description": "The type of the action",
                                                                      "enum": [
                                                                        "email"
                                                                      ]
                                                                    },
                                                                    "options": {
                                                                      "type": "object",
                                                                      "description": "settings for the action",
                                                                      "additionalProperties": {
                                                                        "type": "string"
                                                                      },
                                                                      "x-examples": [
                                                                        {
                                                                          "to": "bob@example.com",
                                                                          "from": "alice@example.com"
                                                                        }
                                                                      ]
                                                                    }
                                                                  }
                                                                }
                                                              ]
                                                            }
                                                          },
                                                          "goto": {
                                                            "type": "string",
                                                            "description": "Step to transition to on failure",
                                                            "pattern": "^[a-z][a-z-]+[a-z]$",
                                                            "example": "failed",
                                                            "x-examples": [
                                                              "failed"
                                                            ]
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "onComplete": {
                                                    "type": "object",
                                                    "description": "Actions to take when the step completes",
                                                    "properties": {
                                                      "actions": {
                                                        "type": "array",
                                                        "items": {
                                                          "anyOf": [
                                                            {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "string",
                                                                  "description": "The type of the action",
                                                                  "enum": [
                                                                    "email"
                                                                  ]
                                                                },
                                                                "options": {
                                                                  "type": "object",
                                                                  "description": "settings for the action",
                                                                  "additionalProperties": {
                                                                    "type": "string"
                                                                  },
                                                                  "x-examples": [
                                                                    {
                                                                      "to": "bob@example.com",
                                                                      "from": "alice@example.com"
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "type": "object",
                                        "properties": {
                                          "label": {
                                            "example": "Is device ok?",
                                            "x-examples": [
                                              "Is device ok?"
                                            ]
                                          },
                                          "type": {
                                            "example": "choice",
                                            "x-examples": [
                                              "choice"
                                            ]
                                          },
                                          "choices": {
                                            "type": "array",
                                            "items": {
                                              "type": "object",
                                              "required": [
                                                "goto"
                                              ],
                                              "maxProperties": 2,
                                              "minProperties": 2,
                                              "maximum": 20,
                                              "properties": {
                                                "and": {
                                                  "type": "array",
                                                  "description": "All choices must be satisfied",
                                                  "maximum": 5,
                                                  "items": {
                                                    "description": "A Step choice",
                                                    "type": "object",
                                                    "maxProperties": 2,
                                                    "minProperties": 2,
                                                    "required": [
                                                      "variable"
                                                    ],
                                                    "properties": {
                                                      "variable": {
                                                        "type": "string",
                                                        "description": "Context variable to check",
                                                        "example": "$.parts.available",
                                                        "x-examples": [
                                                          "$.parts.available"
                                                        ]
                                                      },
                                                      "greater_than_equals": {
                                                        "type": "string",
                                                        "description": "Value has to be greater than or equals to",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "less_than_equals": {
                                                        "type": "string",
                                                        "description": "Value has to be less than or equals to",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "greater_than": {
                                                        "type": "string",
                                                        "description": "Value has to be greater than",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "less_than": {
                                                        "type": "string",
                                                        "description": "Value has to be less than",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "equals": {
                                                        "type": "string",
                                                        "description": "Value has to equal",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "not_equals": {
                                                        "type": "string",
                                                        "description": "Value must not equal",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      }
                                                    }
                                                  }
                                                },
                                                "or": {
                                                  "type": "array",
                                                  "description": "Any of these choices must be satisfied",
                                                  "maximum": 5,
                                                  "items": {
                                                    "description": "A Step choice",
                                                    "type": "object",
                                                    "maxProperties": 2,
                                                    "minProperties": 2,
                                                    "required": [
                                                      "variable"
                                                    ],
                                                    "properties": {
                                                      "variable": {
                                                        "type": "string",
                                                        "description": "Context variable to check",
                                                        "example": "$.parts.available",
                                                        "x-examples": [
                                                          "$.parts.available"
                                                        ]
                                                      },
                                                      "greater_than_equals": {
                                                        "type": "string",
                                                        "description": "Value has to be greater than or equals to",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "less_than_equals": {
                                                        "type": "string",
                                                        "description": "Value has to be less than or equals to",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "greater_than": {
                                                        "type": "string",
                                                        "description": "Value has to be greater than",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "less_than": {
                                                        "type": "string",
                                                        "description": "Value has to be less than",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "equals": {
                                                        "type": "string",
                                                        "description": "Value has to equal",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "not_equals": {
                                                        "type": "string",
                                                        "description": "Value must not equal",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      }
                                                    }
                                                  }
                                                },
                                                "not": {
                                                  "type": "array",
                                                  "description": "None of these choices must be satisfied",
                                                  "maximum": 5,
                                                  "items": {
                                                    "description": "A Step choice",
                                                    "type": "object",
                                                    "maxProperties": 2,
                                                    "minProperties": 2,
                                                    "required": [
                                                      "variable"
                                                    ],
                                                    "properties": {
                                                      "variable": {
                                                        "type": "string",
                                                        "description": "Context variable to check",
                                                        "example": "$.parts.available",
                                                        "x-examples": [
                                                          "$.parts.available"
                                                        ]
                                                      },
                                                      "greater_than_equals": {
                                                        "type": "string",
                                                        "description": "Value has to be greater than or equals to",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "less_than_equals": {
                                                        "type": "string",
                                                        "description": "Value has to be less than or equals to",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "greater_than": {
                                                        "type": "string",
                                                        "description": "Value has to be greater than",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "less_than": {
                                                        "type": "string",
                                                        "description": "Value has to be less than",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "equals": {
                                                        "type": "string",
                                                        "description": "Value has to equal",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      },
                                                      "not_equals": {
                                                        "type": "string",
                                                        "description": "Value must not equal",
                                                        "example": "42",
                                                        "x-examples": [
                                                          "42"
                                                        ]
                                                      }
                                                    }
                                                  }
                                                },
                                                "goto": {
                                                  "description": "Step to goto when condition is met",
                                                  "allOf": [
                                                    {
                                                      "type": "string",
                                                      "description": "Step to move to",
                                                      "pattern": "^[a-z][a-z-]+[a-z]$",
                                                      "example": "complete",
                                                      "x-examples": [
                                                        "complete"
                                                      ]
                                                    }
                                                  ]
                                                }
                                              }
                                            }
                                          },
                                          "goto": {
                                            "description": "Default step to goto when no choice can be made"
                                          }
                                        },
                                        "allOf": [
                                          {
                                            "type": "object",
                                            "x-ui-hide": true,
                                            "required": [
                                              "type",
                                              "label",
                                              "goto"
                                            ],
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "Type of workflow step",
                                                "enum": [
                                                  "load",
                                                  "choice",
                                                  "function",
                                                  "machine",
                                                  "pass",
                                                  "fail",
                                                  "success",
                                                  "user",
                                                  "wait"
                                                ]
                                              },
                                              "label": {
                                                "type": "string",
                                                "description": "Label for the step",
                                                "example": "Find units",
                                                "x-examples": [
                                                  "Find units"
                                                ]
                                              },
                                              "goto": {
                                                "type": "string",
                                                "description": "Step to move to",
                                                "pattern": "^[a-z][a-z-]+[a-z]$",
                                                "example": "complete",
                                                "x-examples": [
                                                  "complete"
                                                ]
                                              },
                                              "goto-fail": {
                                                "type": "string",
                                                "description": "Step to transition too if this step cannot be completed",
                                                "pattern": "^[a-z][a-z-]+[a-z]$",
                                                "example": "process-fail",
                                                "x-examples": [
                                                  "process-fail"
                                                ]
                                              },
                                              "context": {
                                                "type": "array",
                                                "description": "Initial values to set on the context",
                                                "items": {
                                                  "type": "object",
                                                  "required": [
                                                    "key",
                                                    "value"
                                                  ],
                                                  "properties": {
                                                    "key": {
                                                      "type": "string",
                                                      "description": "The context key to set",
                                                      "example": "$.fizz",
                                                      "x-examples": [
                                                        "$.fizz",
                                                        "$.unit.status",
                                                        "extract_fields"
                                                      ]
                                                    },
                                                    "value": {
                                                      "type": "string",
                                                      "description": "Value to set",
                                                      "example": "$.buzz",
                                                      "x-examples": [
                                                        "$.buzz",
                                                        "Pending",
                                                        true
                                                      ]
                                                    },
                                                    "lock": {
                                                      "type": "boolean",
                                                      "description": "Prevents other steps from writing this value",
                                                      "example": true
                                                    },
                                                    "ignore": {
                                                      "type": "boolean",
                                                      "description": "When trying to set a locked key, do not fail",
                                                      "example": false
                                                    }
                                                  }
                                                }
                                              },
                                              "onError": {
                                                "type": "object",
                                                "description": "Action to take when step fails",
                                                "required": [
                                                  "finally"
                                                ],
                                                "properties": {
                                                  "retry": {
                                                    "type": "integer",
                                                    "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                    "minimum": 0,
                                                    "maximum": 10,
                                                    "example": 3,
                                                    "default": 0
                                                  },
                                                  "finally": {
                                                    "type": "object",
                                                    "description": "What to do after all retries",
                                                    "required": [
                                                      "goto"
                                                    ],
                                                    "properties": {
                                                      "actions": {
                                                        "type": "array",
                                                        "description": "Actions to take on failure",
                                                        "items": {
                                                          "anyOf": [
                                                            {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "string",
                                                                  "description": "The type of the action",
                                                                  "enum": [
                                                                    "email"
                                                                  ]
                                                                },
                                                                "options": {
                                                                  "type": "object",
                                                                  "description": "settings for the action",
                                                                  "additionalProperties": {
                                                                    "type": "string"
                                                                  },
                                                                  "x-examples": [
                                                                    {
                                                                      "to": "bob@example.com",
                                                                      "from": "alice@example.com"
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            }
                                                          ]
                                                        }
                                                      },
                                                      "goto": {
                                                        "type": "string",
                                                        "description": "Step to transition to on failure",
                                                        "pattern": "^[a-z][a-z-]+[a-z]$",
                                                        "example": "failed",
                                                        "x-examples": [
                                                          "failed"
                                                        ]
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "onComplete": {
                                                "type": "object",
                                                "description": "Actions to take when the step completes",
                                                "properties": {
                                                  "actions": {
                                                    "type": "array",
                                                    "items": {
                                                      "anyOf": [
                                                        {
                                                          "type": "object",
                                                          "properties": {
                                                            "type": {
                                                              "type": "string",
                                                              "description": "The type of the action",
                                                              "enum": [
                                                                "email"
                                                              ]
                                                            },
                                                            "options": {
                                                              "type": "object",
                                                              "description": "settings for the action",
                                                              "additionalProperties": {
                                                                "type": "string"
                                                              },
                                                              "x-examples": [
                                                                {
                                                                  "to": "bob@example.com",
                                                                  "from": "alice@example.com"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "type": "object",
                                        "description": "Finial step which is marked as failed",
                                        "properties": {
                                          "label": {
                                            "example": "Failed",
                                            "x-examples": [
                                              "Failed"
                                            ],
                                            "allOf": [
                                              {
                                                "type": "string",
                                                "description": "Label for the step",
                                                "example": "Find units",
                                                "x-examples": [
                                                  "Find units"
                                                ]
                                              }
                                            ]
                                          },
                                          "type": {
                                            "example": "fail",
                                            "x-examples": [
                                              "fail"
                                            ],
                                            "allOf": [
                                              {
                                                "type": "string",
                                                "description": "Type of workflow step",
                                                "enum": [
                                                  "load",
                                                  "choice",
                                                  "function",
                                                  "machine",
                                                  "pass",
                                                  "fail",
                                                  "success",
                                                  "user",
                                                  "wait"
                                                ]
                                              }
                                            ]
                                          },
                                          "onComplete": {
                                            "type": "object",
                                            "description": "Actions to take when the step completes",
                                            "properties": {
                                              "actions": {
                                                "type": "array",
                                                "items": {
                                                  "anyOf": [
                                                    {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "string",
                                                          "description": "The type of the action",
                                                          "enum": [
                                                            "email"
                                                          ]
                                                        },
                                                        "options": {
                                                          "type": "object",
                                                          "description": "settings for the action",
                                                          "additionalProperties": {
                                                            "type": "string"
                                                          },
                                                          "x-examples": [
                                                            {
                                                              "to": "bob@example.com",
                                                              "from": "alice@example.com"
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Allows executing actions with out performing any function",
                                        "properties": {
                                          "label": {
                                            "example": "Send email to project manager",
                                            "x-examples": [
                                              "Send email to project manager"
                                            ]
                                          },
                                          "type": {
                                            "example": "pass",
                                            "x-examples": [
                                              "pass"
                                            ],
                                            "allOf": [
                                              {
                                                "type": "string",
                                                "description": "Type of workflow step",
                                                "enum": [
                                                  "load",
                                                  "choice",
                                                  "function",
                                                  "machine",
                                                  "pass",
                                                  "fail",
                                                  "success",
                                                  "user",
                                                  "wait"
                                                ]
                                              }
                                            ]
                                          }
                                        },
                                        "allOf": [
                                          {
                                            "type": "object",
                                            "x-ui-hide": true,
                                            "required": [
                                              "type",
                                              "label",
                                              "goto"
                                            ],
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "Type of workflow step",
                                                "enum": [
                                                  "load",
                                                  "choice",
                                                  "function",
                                                  "machine",
                                                  "pass",
                                                  "fail",
                                                  "success",
                                                  "user",
                                                  "wait"
                                                ]
                                              },
                                              "label": {
                                                "type": "string",
                                                "description": "Label for the step",
                                                "example": "Find units",
                                                "x-examples": [
                                                  "Find units"
                                                ]
                                              },
                                              "goto": {
                                                "type": "string",
                                                "description": "Step to move to",
                                                "pattern": "^[a-z][a-z-]+[a-z]$",
                                                "example": "complete",
                                                "x-examples": [
                                                  "complete"
                                                ]
                                              },
                                              "goto-fail": {
                                                "type": "string",
                                                "description": "Step to transition too if this step cannot be completed",
                                                "pattern": "^[a-z][a-z-]+[a-z]$",
                                                "example": "process-fail",
                                                "x-examples": [
                                                  "process-fail"
                                                ]
                                              },
                                              "context": {
                                                "type": "array",
                                                "description": "Initial values to set on the context",
                                                "items": {
                                                  "type": "object",
                                                  "required": [
                                                    "key",
                                                    "value"
                                                  ],
                                                  "properties": {
                                                    "key": {
                                                      "type": "string",
                                                      "description": "The context key to set",
                                                      "example": "$.fizz",
                                                      "x-examples": [
                                                        "$.fizz",
                                                        "$.unit.status",
                                                        "extract_fields"
                                                      ]
                                                    },
                                                    "value": {
                                                      "type": "string",
                                                      "description": "Value to set",
                                                      "example": "$.buzz",
                                                      "x-examples": [
                                                        "$.buzz",
                                                        "Pending",
                                                        true
                                                      ]
                                                    },
                                                    "lock": {
                                                      "type": "boolean",
                                                      "description": "Prevents other steps from writing this value",
                                                      "example": true
                                                    },
                                                    "ignore": {
                                                      "type": "boolean",
                                                      "description": "When trying to set a locked key, do not fail",
                                                      "example": false
                                                    }
                                                  }
                                                }
                                              },
                                              "onError": {
                                                "type": "object",
                                                "description": "Action to take when step fails",
                                                "required": [
                                                  "finally"
                                                ],
                                                "properties": {
                                                  "retry": {
                                                    "type": "integer",
                                                    "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                    "minimum": 0,
                                                    "maximum": 10,
                                                    "example": 3,
                                                    "default": 0
                                                  },
                                                  "finally": {
                                                    "type": "object",
                                                    "description": "What to do after all retries",
                                                    "required": [
                                                      "goto"
                                                    ],
                                                    "properties": {
                                                      "actions": {
                                                        "type": "array",
                                                        "description": "Actions to take on failure",
                                                        "items": {
                                                          "anyOf": [
                                                            {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "string",
                                                                  "description": "The type of the action",
                                                                  "enum": [
                                                                    "email"
                                                                  ]
                                                                },
                                                                "options": {
                                                                  "type": "object",
                                                                  "description": "settings for the action",
                                                                  "additionalProperties": {
                                                                    "type": "string"
                                                                  },
                                                                  "x-examples": [
                                                                    {
                                                                      "to": "bob@example.com",
                                                                      "from": "alice@example.com"
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            }
                                                          ]
                                                        }
                                                      },
                                                      "goto": {
                                                        "type": "string",
                                                        "description": "Step to transition to on failure",
                                                        "pattern": "^[a-z][a-z-]+[a-z]$",
                                                        "example": "failed",
                                                        "x-examples": [
                                                          "failed"
                                                        ]
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "onComplete": {
                                                "type": "object",
                                                "description": "Actions to take when the step completes",
                                                "properties": {
                                                  "actions": {
                                                    "type": "array",
                                                    "items": {
                                                      "anyOf": [
                                                        {
                                                          "type": "object",
                                                          "properties": {
                                                            "type": {
                                                              "type": "string",
                                                              "description": "The type of the action",
                                                              "enum": [
                                                                "email"
                                                              ]
                                                            },
                                                            "options": {
                                                              "type": "object",
                                                              "description": "settings for the action",
                                                              "additionalProperties": {
                                                                "type": "string"
                                                              },
                                                              "x-examples": [
                                                                {
                                                                  "to": "bob@example.com",
                                                                  "from": "alice@example.com"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "type": "object",
                                        "description": "Finial step which is marked as completed successfully",
                                        "properties": {
                                          "label": {
                                            "example": "Complete",
                                            "x-examples": [
                                              "Complete"
                                            ],
                                            "allOf": [
                                              {
                                                "type": "string",
                                                "description": "Label for the step",
                                                "example": "Find units",
                                                "x-examples": [
                                                  "Find units"
                                                ]
                                              }
                                            ]
                                          },
                                          "type": {
                                            "example": "success",
                                            "x-examples": [
                                              "success"
                                            ],
                                            "allOf": [
                                              {
                                                "type": "string",
                                                "description": "Type of workflow step",
                                                "enum": [
                                                  "load",
                                                  "choice",
                                                  "function",
                                                  "machine",
                                                  "pass",
                                                  "fail",
                                                  "success",
                                                  "user",
                                                  "wait"
                                                ]
                                              }
                                            ]
                                          },
                                          "onComplete": {
                                            "type": "object",
                                            "description": "Actions to take when the step completes",
                                            "properties": {
                                              "actions": {
                                                "type": "array",
                                                "items": {
                                                  "anyOf": [
                                                    {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "string",
                                                          "description": "The type of the action",
                                                          "enum": [
                                                            "email"
                                                          ]
                                                        },
                                                        "options": {
                                                          "type": "object",
                                                          "description": "settings for the action",
                                                          "additionalProperties": {
                                                            "type": "string"
                                                          },
                                                          "x-examples": [
                                                            {
                                                              "to": "bob@example.com",
                                                              "from": "alice@example.com"
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "A step which run at certain times",
                                        "required": [
                                          "stop_at",
                                          "time"
                                        ],
                                        "properties": {
                                          "label": {
                                            "example": "Wait for cable",
                                            "x-examples": [
                                              "Wait for cable"
                                            ],
                                            "allOf": [
                                              {
                                                "type": "string",
                                                "description": "Label for the step",
                                                "example": "Find units",
                                                "x-examples": [
                                                  "Find units"
                                                ]
                                              }
                                            ]
                                          },
                                          "type": {
                                            "x-examples": [
                                              "wait"
                                            ],
                                            "example": "wait"
                                          },
                                          "stop_at": {
                                            "type": "integer",
                                            "description": "Time in seconds to stop this task",
                                            "maximum": 900,
                                            "minimum": 1
                                          },
                                          "time": {
                                            "type": "integer",
                                            "description": "Time to wait before checking this step",
                                            "example": 600,
                                            "maximum": 900,
                                            "minimum": 1
                                          },
                                          "listen_for": {
                                            "type": "array",
                                            "description": "List of events and conditions to listen for to trigger",
                                            "items": {
                                              "type": "object",
                                              "required": [
                                                "event"
                                              ],
                                              "properties": {
                                                "event": {
                                                  "type": "string",
                                                  "description": "Name of the event to listen for",
                                                  "allOf": [
                                                    {
                                                      "type": "string",
                                                      "description": "Possible entity events",
                                                      "enum": [
                                                        "CON.attached",
                                                        "CON.created",
                                                        "CON.deleted",
                                                        "CON.detached",
                                                        "CON.removed",
                                                        "CON.updated",
                                                        "CUS.attached",
                                                        "CUS.created",
                                                        "CUS.deleted",
                                                        "CUS.detached",
                                                        "CUS.removed",
                                                        "CUS.updated",
                                                        "LOC.attached",
                                                        "LOC.created",
                                                        "LOC.deleted",
                                                        "LOC.detached",
                                                        "LOC.removed",
                                                        "LOC.updated",
                                                        "NOTE.attached",
                                                        "NOTE.created",
                                                        "NOTE.deleted",
                                                        "NOTE.detached",
                                                        "NOTE.removed",
                                                        "NOTE.updated",
                                                        "PART.attached",
                                                        "PART.created",
                                                        "PART.deleted",
                                                        "PART.detached",
                                                        "PART.removed",
                                                        "PART.updated",
                                                        "PGM.attached",
                                                        "PGM.created",
                                                        "PGM.deleted",
                                                        "PGM.detached",
                                                        "PGM.removed",
                                                        "PGM.updated",
                                                        "PRO.attached",
                                                        "PRO.created",
                                                        "PRO.deleted",
                                                        "PRO.detached",
                                                        "PRO.removed",
                                                        "PRO.updated",
                                                        "RES.attached",
                                                        "RES.created",
                                                        "RES.deleted",
                                                        "RES.detached",
                                                        "RES.removed",
                                                        "RES.updated",
                                                        "UNIT.attached",
                                                        "UNIT.created",
                                                        "UNIT.deleted",
                                                        "UNIT.detached",
                                                        "UNIT.removed",
                                                        "UNIT.updated",
                                                        "USER.attached",
                                                        "USER.created",
                                                        "USER.deleted",
                                                        "USER.detached",
                                                        "USER.removed",
                                                        "USER.updated",
                                                        "WKF.attached",
                                                        "WKF.created",
                                                        "WKF.deleted",
                                                        "WKF.detached",
                                                        "WKF.removed",
                                                        "WKF.updated",
                                                        "WOR.attached",
                                                        "WOR.created",
                                                        "WOR.deleted",
                                                        "WOR.detached",
                                                        "WOR.removed",
                                                        "WOR.updated"
                                                      ]
                                                    }
                                                  ]
                                                },
                                                "event_value": {
                                                  "type": "object",
                                                  "description": "The event conditions that have to be met",
                                                  "allOf": [
                                                    {
                                                      "description": "A Step choice",
                                                      "type": "object",
                                                      "maxProperties": 2,
                                                      "minProperties": 2,
                                                      "required": [
                                                        "variable"
                                                      ],
                                                      "properties": {
                                                        "variable": {
                                                          "type": "string",
                                                          "description": "Context variable to check",
                                                          "example": "$.parts.available",
                                                          "x-examples": [
                                                            "$.parts.available"
                                                          ]
                                                        },
                                                        "greater_than_equals": {
                                                          "type": "string",
                                                          "description": "Value has to be greater than or equals to",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "less_than_equals": {
                                                          "type": "string",
                                                          "description": "Value has to be less than or equals to",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "greater_than": {
                                                          "type": "string",
                                                          "description": "Value has to be greater than",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "less_than": {
                                                          "type": "string",
                                                          "description": "Value has to be less than",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "equals": {
                                                          "type": "string",
                                                          "description": "Value has to equal",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
                                                        },
                                                        "not_equals": {
                                                          "type": "string",
                                                          "description": "Value must not equal",
                                                          "example": "42",
                                                          "x-examples": [
                                                            "42"
                                                          ]
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
                                            "x-ui-hide": true,
                                            "required": [
                                              "type",
                                              "label",
                                              "goto"
                                            ],
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "Type of workflow step",
                                                "enum": [
                                                  "load",
                                                  "choice",
                                                  "function",
                                                  "machine",
                                                  "pass",
                                                  "fail",
                                                  "success",
                                                  "user",
                                                  "wait"
                                                ]
                                              },
                                              "label": {
                                                "type": "string",
                                                "description": "Label for the step",
                                                "example": "Find units",
                                                "x-examples": [
                                                  "Find units"
                                                ]
                                              },
                                              "goto": {
                                                "type": "string",
                                                "description": "Step to move to",
                                                "pattern": "^[a-z][a-z-]+[a-z]$",
                                                "example": "complete",
                                                "x-examples": [
                                                  "complete"
                                                ]
                                              },
                                              "goto-fail": {
                                                "type": "string",
                                                "description": "Step to transition too if this step cannot be completed",
                                                "pattern": "^[a-z][a-z-]+[a-z]$",
                                                "example": "process-fail",
                                                "x-examples": [
                                                  "process-fail"
                                                ]
                                              },
                                              "context": {
                                                "type": "array",
                                                "description": "Initial values to set on the context",
                                                "items": {
                                                  "type": "object",
                                                  "required": [
                                                    "key",
                                                    "value"
                                                  ],
                                                  "properties": {
                                                    "key": {
                                                      "type": "string",
                                                      "description": "The context key to set",
                                                      "example": "$.fizz",
                                                      "x-examples": [
                                                        "$.fizz",
                                                        "$.unit.status",
                                                        "extract_fields"
                                                      ]
                                                    },
                                                    "value": {
                                                      "type": "string",
                                                      "description": "Value to set",
                                                      "example": "$.buzz",
                                                      "x-examples": [
                                                        "$.buzz",
                                                        "Pending",
                                                        true
                                                      ]
                                                    },
                                                    "lock": {
                                                      "type": "boolean",
                                                      "description": "Prevents other steps from writing this value",
                                                      "example": true
                                                    },
                                                    "ignore": {
                                                      "type": "boolean",
                                                      "description": "When trying to set a locked key, do not fail",
                                                      "example": false
                                                    }
                                                  }
                                                }
                                              },
                                              "onError": {
                                                "type": "object",
                                                "description": "Action to take when step fails",
                                                "required": [
                                                  "finally"
                                                ],
                                                "properties": {
                                                  "retry": {
                                                    "type": "integer",
                                                    "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                    "minimum": 0,
                                                    "maximum": 10,
                                                    "example": 3,
                                                    "default": 0
                                                  },
                                                  "finally": {
                                                    "type": "object",
                                                    "description": "What to do after all retries",
                                                    "required": [
                                                      "goto"
                                                    ],
                                                    "properties": {
                                                      "actions": {
                                                        "type": "array",
                                                        "description": "Actions to take on failure",
                                                        "items": {
                                                          "anyOf": [
                                                            {
                                                              "type": "object",
                                                              "properties": {
                                                                "type": {
                                                                  "type": "string",
                                                                  "description": "The type of the action",
                                                                  "enum": [
                                                                    "email"
                                                                  ]
                                                                },
                                                                "options": {
                                                                  "type": "object",
                                                                  "description": "settings for the action",
                                                                  "additionalProperties": {
                                                                    "type": "string"
                                                                  },
                                                                  "x-examples": [
                                                                    {
                                                                      "to": "bob@example.com",
                                                                      "from": "alice@example.com"
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            }
                                                          ]
                                                        }
                                                      },
                                                      "goto": {
                                                        "type": "string",
                                                        "description": "Step to transition to on failure",
                                                        "pattern": "^[a-z][a-z-]+[a-z]$",
                                                        "example": "failed",
                                                        "x-examples": [
                                                          "failed"
                                                        ]
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "onComplete": {
                                                "type": "object",
                                                "description": "Actions to take when the step completes",
                                                "properties": {
                                                  "actions": {
                                                    "type": "array",
                                                    "items": {
                                                      "anyOf": [
                                                        {
                                                          "type": "object",
                                                          "properties": {
                                                            "type": {
                                                              "type": "string",
                                                              "description": "The type of the action",
                                                              "enum": [
                                                                "email"
                                                              ]
                                                            },
                                                            "options": {
                                                              "type": "object",
                                                              "description": "settings for the action",
                                                              "additionalProperties": {
                                                                "type": "string"
                                                              },
                                                              "x-examples": [
                                                                {
                                                                  "to": "bob@example.com",
                                                                  "from": "alice@example.com"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        }
                                                      ]
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
                                ]
                              }
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
                            "steps": {
                              "fail": {
                                "step": "complete",
                                "type": "user",
                                "options": {
                                  "component": "assignUnitsFromCustomerToProject",
                                  "payload": {
                                    "message": "Device powered off?",
                                    "negative_message": "Device not functioning"
                                  }
                                },
                                "label": "Find units",
                                "goto": "complete",
                                "goto-fail": "process-fail",
                                "context": [
                                  {
                                    "key": "$.unit.status",
                                    "value": "Pending",
                                    "lock": true,
                                    "ignore": true
                                  }
                                ],
                                "onError": {
                                  "finally": {
                                    "goto": "failed",
                                    "actions": [
                                      {
                                        "type": "email",
                                        "options": {
                                          "to": "bob@example.com",
                                          "from": "alice@example.com"
                                        }
                                      }
                                    ]
                                  },
                                  "retry": 8
                                },
                                "onComplete": {
                                  "actions": [
                                    {
                                      "type": "email",
                                      "options": {
                                        "to": "bob@example.com",
                                        "from": "alice@example.com"
                                      }
                                    },
                                    {
                                      "type": "email",
                                      "options": {
                                        "to": "bob@example.com",
                                        "from": "alice@example.com"
                                      }
                                    },
                                    {
                                      "type": "email",
                                      "options": {
                                        "to": "bob@example.com",
                                        "from": "alice@example.com"
                                      }
                                    }
                                  ]
                                }
                              },
                              "amet_b64$": {
                                "step": "complete",
                                "label": "Find units",
                                "type": "success",
                                "onComplete": {
                                  "actions": [
                                    {
                                      "type": "email",
                                      "options": {
                                        "to": "bob@example.com",
                                        "from": "alice@example.com"
                                      }
                                    }
                                  ]
                                }
                              },
                              "minim2__": {
                                "step": "complete",
                                "type": "pass",
                                "label": "Find units",
                                "goto": "complete",
                                "goto-fail": "process-fail",
                                "context": [
                                  {
                                    "key": "$.fizz",
                                    "value": "$.buzz",
                                    "lock": false,
                                    "ignore": true
                                  }
                                ],
                                "onError": {
                                  "finally": {
                                    "goto": "failed",
                                    "actions": [
                                      {
                                        "type": "email",
                                        "options": {
                                          "to": "bob@example.com",
                                          "from": "alice@example.com"
                                        }
                                      },
                                      {
                                        "type": "email",
                                        "options": {
                                          "to": "bob@example.com",
                                          "from": "alice@example.com"
                                        }
                                      },
                                      {
                                        "type": "email",
                                        "options": {
                                          "to": "bob@example.com",
                                          "from": "alice@example.com"
                                        }
                                      },
                                      {
                                        "type": "email",
                                        "options": {
                                          "to": "bob@example.com",
                                          "from": "alice@example.com"
                                        }
                                      }
                                    ]
                                  },
                                  "retry": 0
                                },
                                "onComplete": {
                                  "actions": [
                                    {
                                      "type": "email",
                                      "options": {
                                        "to": "bob@example.com",
                                        "from": "alice@example.com"
                                      }
                                    },
                                    {
                                      "type": "email",
                                      "options": {
                                        "to": "bob@example.com",
                                        "from": "alice@example.com"
                                      }
                                    },
                                    {
                                      "type": "email",
                                      "options": {
                                        "to": "bob@example.com",
                                        "from": "alice@example.com"
                                      }
                                    },
                                    {
                                      "type": "email",
                                      "options": {
                                        "to": "bob@example.com",
                                        "from": "alice@example.com"
                                      }
                                    }
                                  ]
                                }
                              }
                            },
                            "starts_at": "entry",
                            "label": "MLTI iPad Assembly Assignment",
                            "workflow_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                            "applies_to": "customer",
                            "slug": "mlti-ipad-assembly-assignment",
                            "version": "1.0",
                            "workflow_version": 7,
                            "context": [
                              {
                                "key": "$.fizz",
                                "value": "Pending",
                                "lock": false,
                                "ignore": true
                              },
                              {
                                "key": "$.unit.status",
                                "value": "true",
                                "lock": false,
                                "ignore": true
                              },
                              {
                                "key": "$.unit.status",
                                "value": "Pending",
                                "lock": false,
                                "ignore": true
                              },
                              {
                                "key": "extract_fields",
                                "value": "Pending",
                                "lock": true,
                                "ignore": false
                              }
                            ],
                            "created": "1991-03-23T20:31:55.727Z",
                            "updated": "1988-03-24T09:13:18.759Z"
                          }
                        }
                      }
                    }
                  },
                  "start_date": {
                    "type": "string",
                    "format": "date-time",
                    "description": "Start date",
                    "example": "2019-08-07T18:10:53+00:00",
                    "x-examples": [
                      "2019-08-07T18:10:53+00:00"
                    ]
                  },
                  "end_date": {
                    "type": "string",
                    "format": "date-time",
                    "description": "End date",
                    "example": "2020-08-07T18:10:53+00:00",
                    "x-examples": [
                      "2020-08-07T18:10:53+00:00"
                    ]
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
                  "label": "Provision devices",
                  "work_order_id": "0f40ff8c-a3b5-4a30-90e5-0421c153183c",
                  "slug": "provision-devices",
                  "description": "Provision 150 devices for 123 Main St",
                  "type": "device",
                  "due_date": "2020-08-07T18:10:53.0Z",
                  "current_status": {
                    "status": "Verifying",
                    "category": "VERIFYING"
                  },
                  "status_history": [
                    {
                      "status": "Cancelled",
                      "created": "2009-05-01T03:14:38.499Z",
                      "category": "VERIFYING"
                    },
                    {
                      "status": "Reticulating Splines",
                      "created": "1964-08-17T23:56:30.469Z",
                      "category": "CANCELLED"
                    },
                    {
                      "status": "Verifying",
                      "created": "2014-03-18T09:16:59.294Z",
                      "category": "BLOCKED"
                    }
                  ],
                  "project": {
                    "label": "Store 42",
                    "customer": {
                      "label": "Zones Inc",
                      "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                      "slug": "zones-inc",
                      "external_platform": {
                        "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                      },
                      "allowed_statuses": [
                        {
                          "status": "Cancelled",
                          "category": "BLOCKED"
                        },
                        {
                          "status": "Complete",
                          "category": "CANCELLED"
                        }
                      ],
                      "created": "1973-05-05T11:34:19.922Z",
                      "updated": "2011-04-02T17:06:21.034Z"
                    },
                    "program": {
                      "label": "GAP Store refresh",
                      "customer": {
                        "label": "Zones Inc",
                        "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                        "slug": "zones-inc",
                        "external_platform": {
                          "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                        },
                        "allowed_statuses": [
                          {
                            "status": "Cancelled",
                            "category": "PENDING"
                          },
                          {
                            "status": "Reticulating Splines",
                            "category": "BLOCKED"
                          },
                          {
                            "status": "Reticulating Splines",
                            "category": "BLOCKED"
                          },
                          {
                            "status": "Verifying",
                            "category": "PENDING"
                          },
                          {
                            "status": "Complete",
                            "category": "PENDING"
                          }
                        ],
                        "created": "1980-09-25T09:32:25.457Z",
                        "updated": "1980-09-23T04:48:09.289Z"
                      },
                      "program_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                      "slug": "gap-store-refresh",
                      "allowed_statuses": [
                        {
                          "status": "Cancelled",
                          "category": "CANCELLED"
                        },
                        {
                          "status": "Complete",
                          "category": "IN_PROGRESS"
                        },
                        {
                          "status": "Blocked",
                          "category": "BLOCKED"
                        },
                        {
                          "status": "Cancelled",
                          "category": "VERIFYING"
                        }
                      ],
                      "start_date": "2019-08-07T18:10:53.0Z",
                      "end_date": "2020-08-07T18:10:53.0Z",
                      "created": "2003-08-15T11:18:12.588Z",
                      "updated": "1966-04-08T06:05:57.63Z"
                    },
                    "slug": "store-42",
                    "project_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                    "allowed_statuses": [
                      {
                        "status": "Complete",
                        "category": "BLOCKED"
                      },
                      {
                        "status": "Pending",
                        "category": "VERIFYING"
                      },
                      {
                        "status": "Complete",
                        "category": "IN_PROGRESS"
                      },
                      {
                        "status": "Blocked",
                        "category": "VERIFYING"
                      }
                    ],
                    "start_date": "2019-08-07T18:10:53.0Z",
                    "end_date": "2020-08-07T18:10:53.0Z",
                    "created": "1975-04-26T06:27:03.774Z",
                    "updated": "1958-11-15T18:58:42.925Z"
                  },
                  "work_flows": [
                    {
                      "cycles_needed": 4,
                      "work_flow": {
                        "steps": {
                          "confirm": {
                            "step": "complete",
                            "type": "pass",
                            "label": "Send email to project manager",
                            "goto": "complete",
                            "goto-fail": "process-fail",
                            "context": [
                              {
                                "key": "$.fizz",
                                "value": "Pending",
                                "lock": false,
                                "ignore": false
                              },
                              {
                                "key": "$.unit.status",
                                "value": "$.buzz",
                                "lock": false,
                                "ignore": true
                              },
                              {
                                "key": "$.fizz",
                                "value": "$.buzz",
                                "lock": true,
                                "ignore": false
                              },
                              {
                                "key": "$.unit.status",
                                "value": "Pending",
                                "lock": false,
                                "ignore": false
                              }
                            ],
                            "onError": {
                              "finally": {
                                "goto": "failed",
                                "actions": [
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  },
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  },
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  },
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  }
                                ]
                              },
                              "retry": 10
                            },
                            "onComplete": {
                              "actions": [
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                }
                              ]
                            }
                          },
                          "consectetur_f0f": {
                            "step": "complete",
                            "type": "user",
                            "options": {
                              "component": "assignUnitsFromCustomerToProject",
                              "payload": {
                                "fields": [
                                  {
                                    "input_type": "textbox",
                                    "label": "Asset Tag",
                                    "required": false,
                                    "entity_field": "input_filter[?(@.key = 'asset-tag')]"
                                  },
                                  {
                                    "input_type": "input",
                                    "label": "Asset Tag",
                                    "required": true,
                                    "entity_field": "input_filter[?(@.key = 'asset-tag')]"
                                  },
                                  {
                                    "input_type": "textbox",
                                    "label": "Asset Tag",
                                    "required": false,
                                    "entity_field": "input_filter[?(@.key = 'asset-tag')]"
                                  }
                                ]
                              }
                            },
                            "label": "Find units",
                            "goto": "complete",
                            "goto-fail": "process-fail",
                            "context": [
                              {
                                "key": "$.unit.status",
                                "value": "true",
                                "lock": true,
                                "ignore": true
                              },
                              {
                                "key": "extract_fields",
                                "value": "true",
                                "lock": true,
                                "ignore": true
                              }
                            ],
                            "onError": {
                              "finally": {
                                "goto": "failed",
                                "actions": [
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  }
                                ]
                              },
                              "retry": 5
                            },
                            "onComplete": {
                              "actions": [
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                }
                              ]
                            }
                          },
                          "irureb": {
                            "step": "complete",
                            "type": "user",
                            "options": {
                              "component": "confirm-action",
                              "payload": {
                                "message": "Device powered off?",
                                "negative_message": "Device not functioning"
                              }
                            },
                            "label": "Confirm the device has powered off",
                            "goto": "complete",
                            "goto-fail": "process-fail",
                            "context": [
                              {
                                "key": "extract_fields",
                                "value": "$.buzz",
                                "lock": true,
                                "ignore": false
                              },
                              {
                                "key": "$.fizz",
                                "value": "Pending",
                                "lock": false,
                                "ignore": false
                              },
                              {
                                "key": "$.unit.status",
                                "value": "$.buzz",
                                "lock": false,
                                "ignore": false
                              },
                              {
                                "key": "$.unit.status",
                                "value": "$.buzz",
                                "lock": true,
                                "ignore": true
                              }
                            ],
                            "onError": {
                              "finally": {
                                "goto": "failed",
                                "actions": [
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  }
                                ]
                              },
                              "retry": 1
                            },
                            "onComplete": {
                              "actions": [
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                }
                              ]
                            }
                          },
                          "ullamco_a": {
                            "step": "complete",
                            "label": "Failed",
                            "type": "fail",
                            "onComplete": {
                              "actions": [
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "starts_at": "entry",
                        "label": "MLTI iPad Assembly Assignment",
                        "workflow_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                        "applies_to": "customer",
                        "slug": "mlti-ipad-assembly-assignment",
                        "version": "1.0",
                        "workflow_version": 7,
                        "context": [
                          {
                            "key": "$.fizz",
                            "value": "true",
                            "lock": true,
                            "ignore": false
                          },
                          {
                            "key": "$.unit.status",
                            "value": "Pending",
                            "lock": true,
                            "ignore": true
                          },
                          {
                            "key": "$.fizz",
                            "value": "Pending",
                            "lock": false,
                            "ignore": false
                          },
                          {
                            "key": "$.fizz",
                            "value": "$.buzz",
                            "lock": false,
                            "ignore": true
                          }
                        ],
                        "created": "1996-09-25T09:07:21.046Z",
                        "updated": "1985-10-10T01:37:08.251Z"
                      },
                      "cycles_pending": 4,
                      "cycles_in_progress": 4,
                      "cycles_verifying": 4,
                      "cycles_complete": 4,
                      "cycles_blocked": 4,
                      "cycles_cancelled": 4
                    },
                    {
                      "cycles_needed": 4,
                      "work_flow": {
                        "steps": {
                          "fail": {
                            "step": "complete",
                            "type": "pass",
                            "label": "Find units",
                            "goto": "complete",
                            "goto-fail": "process-fail",
                            "context": [
                              {
                                "key": "$.unit.status",
                                "value": "true",
                                "lock": true,
                                "ignore": true
                              }
                            ],
                            "onError": {
                              "finally": {
                                "goto": "failed",
                                "actions": [
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  },
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  },
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  },
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  },
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  }
                                ]
                              },
                              "retry": 8
                            },
                            "onComplete": {
                              "actions": [
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                }
                              ]
                            }
                          },
                          "ea_33$": {
                            "step": "complete",
                            "type": "machine",
                            "label": "Find units",
                            "goto": "complete",
                            "options": {
                              "application": {
                                "application_id": "ace-ios",
                                "platforms": [
                                  {
                                    "platform": "darwin",
                                    "arch": "arm"
                                  },
                                  {
                                    "platform": "sunos",
                                    "arch": "s390x"
                                  },
                                  {
                                    "platform": "sunos",
                                    "arch": "ppc"
                                  }
                                ]
                              },
                              "configuration": {
                                "pairing_cert": "dGhpcyBpcyBub3QgYSBjZXJ0IGZpbGUganVzdCBhbiBleGFtcGxl",
                                "pairing_key": "dGhpcyBpcyBub3QgYSBjZXJ0IGZpbGUganVzdCBhbiBleGFtcGxl",
                                "restore_device": true,
                                "automated_enrollment": true,
                                "mdm": {
                                  "vendor": "Meraki",
                                  "console_url": "http://jamf.zones.com",
                                  "user": "NterpriseBob",
                                  "password": "deserunt sed",
                                  "tenant_code": "nterprise",
                                  "set_asset_tag": "$._entity.input_filter[?(@.key = 'asset-tag')]"
                                },
                                "field_mappings": [
                                  {
                                    "from": "serial_number",
                                    "to": "$._entity.input_filter[?(@.key = 'serial-number')]"
                                  },
                                  {
                                    "from": "ios",
                                    "to": "$._entity.input_filter[?(@.key = 'serial-number')]"
                                  },
                                  {
                                    "from": "thundersync_serial",
                                    "to": "$._entity.input_filter[?(@.key = 'serial-number')]"
                                  },
                                  {
                                    "from": "model",
                                    "to": "$._entity.input_filter[?(@.key = 'serial-number')]"
                                  }
                                ],
                                "wait_for_apps": [
                                  "com.apple.itunes",
                                  "com.apple.itunes",
                                  "com.apple.itunes",
                                  "com.apple.itunes"
                                ],
                                "wait_for_battery_charge": 49
                              }
                            },
                            "goto-fail": "process-fail",
                            "context": [
                              {
                                "key": "$.unit.status",
                                "value": "true",
                                "lock": false,
                                "ignore": false
                              },
                              {
                                "key": "$.fizz",
                                "value": "true",
                                "lock": true,
                                "ignore": true
                              },
                              {
                                "key": "$.unit.status",
                                "value": "$.buzz",
                                "lock": false,
                                "ignore": false
                              }
                            ],
                            "onError": {
                              "finally": {
                                "goto": "failed",
                                "actions": [
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  },
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  },
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  },
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  }
                                ]
                              },
                              "retry": 1
                            },
                            "onComplete": {
                              "actions": [
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "starts_at": "entry",
                        "label": "MLTI iPad Assembly Assignment",
                        "workflow_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                        "applies_to": "contact",
                        "slug": "mlti-ipad-assembly-assignment",
                        "version": "1.0",
                        "workflow_version": 7,
                        "context": [
                          {
                            "key": "extract_fields",
                            "value": "$.buzz",
                            "lock": false,
                            "ignore": false
                          },
                          {
                            "key": "$.fizz",
                            "value": "true",
                            "lock": false,
                            "ignore": true
                          },
                          {
                            "key": "extract_fields",
                            "value": "true",
                            "lock": true,
                            "ignore": true
                          },
                          {
                            "key": "$.unit.status",
                            "value": "true",
                            "lock": false,
                            "ignore": false
                          },
                          {
                            "key": "extract_fields",
                            "value": "Pending",
                            "lock": true,
                            "ignore": true
                          }
                        ],
                        "created": "1964-01-25T15:33:11.934Z",
                        "updated": "1984-05-26T11:02:17.475Z"
                      },
                      "cycles_pending": 4,
                      "cycles_in_progress": 4,
                      "cycles_verifying": 4,
                      "cycles_complete": 4,
                      "cycles_blocked": 4,
                      "cycles_cancelled": 4
                    },
                    {
                      "cycles_needed": 4,
                      "work_flow": {
                        "steps": {
                          "manual": {
                            "step": "complete",
                            "type": "pass",
                            "label": "Send email to project manager",
                            "goto": "complete",
                            "goto-fail": "process-fail",
                            "context": [
                              {
                                "key": "$.fizz",
                                "value": "$.buzz",
                                "lock": true,
                                "ignore": true
                              }
                            ],
                            "onError": {
                              "finally": {
                                "goto": "failed",
                                "actions": [
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  },
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  }
                                ]
                              },
                              "retry": 5
                            },
                            "onComplete": {
                              "actions": [
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                }
                              ]
                            }
                          },
                          "elit_4$": {
                            "step": "complete",
                            "type": "machine",
                            "label": "Find units",
                            "goto": "complete",
                            "options": {
                              "application": {
                                "application_id": "ace-ios",
                                "platforms": [
                                  {
                                    "platform": "win32",
                                    "arch": "ppc64"
                                  },
                                  {
                                    "platform": "freebsd",
                                    "arch": "s390"
                                  },
                                  {
                                    "platform": "aix",
                                    "arch": "ppc"
                                  },
                                  {
                                    "platform": "win32",
                                    "arch": "ia32"
                                  },
                                  {
                                    "platform": "darwin",
                                    "arch": "arm"
                                  }
                                ]
                              },
                              "configuration": {
                                "pairing_cert": "dGhpcyBpcyBub3QgYSBjZXJ0IGZpbGUganVzdCBhbiBleGFtcGxl",
                                "pairing_key": "dGhpcyBpcyBub3QgYSBjZXJ0IGZpbGUganVzdCBhbiBleGFtcGxl",
                                "restore_device": false,
                                "automated_enrollment": true,
                                "mdm": {
                                  "vendor": "AirWatch",
                                  "console_url": "http://jamf.zones.com",
                                  "user": "NterpriseBob",
                                  "password": "Duis sint cillum mollit qui",
                                  "tenant_code": "nterprise",
                                  "set_asset_tag": "$._entity.input_filter[?(@.key = 'asset-tag')]"
                                },
                                "field_mappings": [
                                  {
                                    "from": "bt_mac",
                                    "to": "$._entity.input_filter[?(@.key = 'serial-number')]"
                                  },
                                  {
                                    "from": "icon_list_regex",
                                    "to": "$._entity.input_filter[?(@.key = 'serial-number')]"
                                  },
                                  {
                                    "from": "name",
                                    "to": "$._entity.input_filter[?(@.key = 'serial-number')]"
                                  },
                                  {
                                    "from": "ecid",
                                    "to": "$._entity.input_filter[?(@.key = 'serial-number')]"
                                  }
                                ],
                                "wait_for_apps": [
                                  "com.apple.itunes"
                                ],
                                "wait_for_battery_charge": 86
                              }
                            },
                            "goto-fail": "process-fail",
                            "context": [
                              {
                                "key": "$.unit.status",
                                "value": "true",
                                "lock": false,
                                "ignore": true
                              },
                              {
                                "key": "$.unit.status",
                                "value": "$.buzz",
                                "lock": true,
                                "ignore": false
                              },
                              {
                                "key": "$.fizz",
                                "value": "$.buzz",
                                "lock": false,
                                "ignore": true
                              }
                            ],
                            "onError": {
                              "finally": {
                                "goto": "failed",
                                "actions": [
                                  {
                                    "type": "email",
                                    "options": {
                                      "to": "bob@example.com",
                                      "from": "alice@example.com"
                                    }
                                  }
                                ]
                              },
                              "retry": 7
                            },
                            "onComplete": {
                              "actions": [
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                }
                              ]
                            }
                          },
                          "dolora8$": {
                            "step": "complete",
                            "label": "Find units",
                            "type": "success",
                            "onComplete": {
                              "actions": [
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                },
                                {
                                  "type": "email",
                                  "options": {
                                    "to": "bob@example.com",
                                    "from": "alice@example.com"
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "starts_at": "entry",
                        "label": "MLTI iPad Assembly Assignment",
                        "workflow_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                        "applies_to": "unit",
                        "slug": "mlti-ipad-assembly-assignment",
                        "version": "1.0",
                        "workflow_version": 7,
                        "context": [
                          {
                            "key": "extract_fields",
                            "value": "Pending",
                            "lock": true,
                            "ignore": false
                          },
                          {
                            "key": "$.unit.status",
                            "value": "$.buzz",
                            "lock": false,
                            "ignore": false
                          },
                          {
                            "key": "extract_fields",
                            "value": "$.buzz",
                            "lock": true,
                            "ignore": true
                          },
                          {
                            "key": "$.unit.status",
                            "value": "$.buzz",
                            "lock": true,
                            "ignore": true
                          },
                          {
                            "key": "$.unit.status",
                            "value": "Pending",
                            "lock": false,
                            "ignore": true
                          }
                        ],
                        "created": "2008-08-05T22:38:08.324Z",
                        "updated": "1966-01-01T09:10:05.397Z"
                      },
                      "cycles_pending": 4,
                      "cycles_in_progress": 4,
                      "cycles_verifying": 4,
                      "cycles_complete": 4,
                      "cycles_blocked": 4,
                      "cycles_cancelled": 4
                    }
                  ],
                  "start_date": "2019-08-07T18:10:53.0Z",
                  "end_date": "2020-08-07T18:10:53.0Z",
                  "created": "1966-11-10T21:35:07.101Z",
                  "updated": "1946-08-31T13:10:53.793Z"
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

<h3 id="fetchallprogramworkorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for work orders|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchallprogramworkorders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:work-orders|[allOf]|false|none|none|
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

<h2 id="tocSprogram">Program</h2>

<a id="schemaprogram"></a>

```yaml
label: GAP Store refresh
customer:
  label: Zones Inc
  customer_id: e530652e-28e8-4f64-84af-e1cf0ff7c805
  slug: zones-inc
  external_platform:
    ax_customer_id: eff3ada3-0966-42be-a5e8-78efd3c52d39
  allowed_statuses:
    - status: Complete
      category: PENDING
    - status: Complete
      category: COMPLETE
  created: '1955-12-06T23:51:05.546Z'
  updated: '2006-05-29T02:08:42.08Z'
program_id: ec5db56d-32e6-4e5d-9bef-1016f3e13670
slug: gap-store-refresh
allowed_statuses:
  - status: Pending
    category: CANCELLED
  - status: Reticulating Splines
    category: VERIFYING
start_date: '2019-08-07T18:10:53.0Z'
end_date: '2020-08-07T18:10:53.0Z'
created: '2012-12-18T00:08:56.495Z'
updated: '1976-03-14T20:01:04.153Z'

```

*Defines the properties for a program*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|Name of the program|
|slug|string|false|none|Name of the program|
|program_id|string|true|none|Unique identifier|
|customer|object|true|none|The cstomer this program is for|
|» customer_id|string|true|none|Customer identifier|
|» label|string|true|none|Label for the customer|
|» slug|string|false|none|Auto generated slug|
|» external_platform|object\|null|false|none|External Identifiers for the customer|
|»» **additionalProperties**|string|false|none|none|
|» allowed_statuses|[object]|false|none|List of allowed statuses|
|»» status|string|true|none|A Custom label for the status|
|»» category|string|false|none|The classifier for the statues|
|» allowed_statuses|[object]|false|none|List of allowed statuses|
|»» status|string|true|none|A Custom label for the status|
|»» category|string|false|none|The classifier for the statues|
|» start_date|string(date-time)|false|none|Start date|
|» end_date|string(date-time)|false|none|End date|

#### Enumerated Values

|Property|Value|
|---|---|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|

