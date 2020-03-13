---
layout: page
parent: Niagara API
nav_order: 12
title: Queues
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="queues">Queues v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

<h1 id="queues-queue">Queue</h1>

## fetchAllQueues

<a id="opIdfetchAllQueues"></a>

`GET /queues`

*Fetches A Page of queues*

Fetch Queue

<h3 id="fetchallqueues-parameters">Parameters</h3>

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
        "nter:queues": {
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
                        "example": "https://api.nterprise.com/queues/56835d6f-71ac-4605-bf44-b200191d7ad7"
                      }
                    }
                  }
                }
              }
            },
            "allOf": [
              {
                "x-nter-relation": "queues",
                "x-nter-model": "Queue",
                "x-nter-callable": true,
                "description": "Defines the properties for a location queue",
                "required": [
                  "label"
                ],
                "properties": {
                  "label": {
                    "type": "string",
                    "example": "Fast Lane",
                    "x-examples": [
                      "Fast Lane"
                    ],
                    "description": "Name of the queue"
                  },
                  "slug": {
                    "type": "string",
                    "example": "fast-lane",
                    "x-examples": [
                      "fast-lane"
                    ],
                    "description": "Auto-generated slug for the queue"
                  },
                  "queue_id": {
                    "type": "string",
                    "description": "The identifier for the queue",
                    "example": "59c834ad-d9cc-4e0f-a569-8f4e52c351b9",
                    "x-examples": [
                      "59c834ad-d9cc-4e0f-a569-8f4e52c351b9"
                    ],
                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                  },
                  "location": {
                    "type": "object",
                    "description": "The location for the queue",
                    "allOf": [
                      {
                        "x-id": "#location",
                        "x-nter-relation": "locations",
                        "x-nter-model": "Location",
                        "x-nter-callable": true,
                        "description": "Defines the properties for a part unit",
                        "required": [
                          "location_type",
                          "address"
                        ],
                        "properties": {
                          "label": {
                            "type": "string",
                            "example": "Zones Innovation Center",
                            "x-examples": [
                              "Zones Innovation Center"
                            ]
                          },
                          "slug": {
                            "type": "string",
                            "example": "zones-innovation-center",
                            "x-examples": [
                              "zones-innovation-center"
                            ]
                          },
                          "location_id": {
                            "type": "string",
                            "description": "The identifier for the location",
                            "example": "b994961b-30b4-4f33-9330-f46fd6172909",
                            "x-examples": [
                              "b994961b-30b4-4f33-9330-f46fd6172909"
                            ],
                            "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                          },
                          "location_type": {
                            "type": "string",
                            "description": "The type of location",
                            "enum": [
                              "warehouse",
                              "facility",
                              "other"
                            ],
                            "example": "other",
                            "x-examples": [
                              "other"
                            ]
                          },
                          "formatted_address": {
                            "type": "string",
                            "readOnly": true,
                            "description": "Address formatted for the where region the location exists in",
                            "example": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
                            "x-examples": [
                              "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA"
                            ]
                          },
                          "address": {
                            "type": "object",
                            "required": [
                              "country",
                              "administrative_area",
                              "locality",
                              "postal_code",
                              "thoroughfare"
                            ],
                            "description": "xNAL address for the location ",
                            "properties": {
                              "country": {
                                "type": "string",
                                "description": "Three Letter ISO country code",
                                "example": "USA",
                                "x-examples": [
                                  "USA"
                                ]
                              },
                              "administrative_area": {
                                "type": "string",
                                "description": "State / Province / Region",
                                "example": "NY",
                                "x-examples": [
                                  "NY"
                                ]
                              },
                              "sub_administrative_area": {
                                "type": "string",
                                "description": "County / District",
                                "example": "Albany",
                                "x-examples": [
                                  "Albany"
                                ]
                              },
                              "locality": {
                                "type": "string",
                                "description": "City / Town",
                                "example": "Menands",
                                "x-examples": [
                                  "Menands"
                                ]
                              },
                              "postal_code": {
                                "type": "string",
                                "description": "Postal Code / Zip Code",
                                "example": "12204",
                                "x-examples": [
                                  "12204"
                                ]
                              },
                              "thoroughfare": {
                                "type": "string",
                                "description": "Street Address",
                                "example": "431 Broadway",
                                "x-examples": [
                                  "431 Broadway"
                                ]
                              },
                              "premise": {
                                "type": "string",
                                "description": "Apartment / Suite / Box number etc",
                                "example": "Suite c",
                                "x-examples": [
                                  "Suite c"
                                ]
                              },
                              "sub_premise": {
                                "type": "string",
                                "description": "Floor # / Room # / Building label etc",
                                "example": "Zones Innovation Center",
                                "x-examples": [
                                  "Zones Innovation Center"
                                ]
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
                          "location_type": "other",
                          "address": {
                            "country": "USA",
                            "administrative_area": "NY",
                            "locality": "Menands",
                            "postal_code": "12204",
                            "thoroughfare": "431 Broadway",
                            "sub_administrative_area": "Albany",
                            "premise": "Suite c",
                            "sub_premise": "Zones Innovation Center"
                          },
                          "label": "Zones Innovation Center",
                          "slug": "zones-innovation-center",
                          "location_id": "b994961b-30b4-4f33-9330-f46fd6172909",
                          "formatted_address": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
                          "created": "2011-12-22T07:39:56.809Z",
                          "updated": "1958-10-08T23:35:29.923Z"
                        }
                      }
                    ]
                  },
                  "priority": {
                    "type": "integer",
                    "description": "Priority level for queue",
                    "example": 42,
                    "x-examples": [
                      42
                    ],
                    "format": "int32"
                  },
                  "total_work_orders": {
                    "type": "object",
                    "description": "The number of batches assigned to the queue",
                    "readOnly": true,
                    "properties": {
                      "pending": {
                        "type": "integer",
                        "description": "The number of cycles pending",
                        "format": "int32",
                        "readOnly": true,
                        "example": 4,
                        "x-examples": [
                          4
                        ]
                      },
                      "in_progress": {
                        "type": "integer",
                        "description": "The number of cycles in progress",
                        "format": "int32",
                        "readOnly": true,
                        "example": 4,
                        "x-examples": [
                          4
                        ]
                      },
                      "verifying": {
                        "type": "integer",
                        "description": "The number of cycles verifying",
                        "format": "int32",
                        "readOnly": true,
                        "example": 4,
                        "x-examples": [
                          4
                        ]
                      },
                      "complete": {
                        "type": "integer",
                        "description": "The number of cycles complete",
                        "format": "int32",
                        "readOnly": true,
                        "example": 4,
                        "x-examples": [
                          4
                        ]
                      },
                      "blocked": {
                        "type": "integer",
                        "description": "The number of cycles blocked",
                        "format": "int32",
                        "readOnly": true,
                        "example": 4,
                        "x-examples": [
                          4
                        ]
                      },
                      "cancelled": {
                        "type": "integer",
                        "description": "The number of cycles cancelled",
                        "format": "int32",
                        "readOnly": true,
                        "example": 4,
                        "x-examples": [
                          4
                        ]
                      }
                    }
                  },
                  "total_batches": {
                    "type": "integer",
                    "description": "Number of batches assigned to the queue",
                    "example": 56,
                    "x-examples": [
                      56
                    ],
                    "readOnly": true
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
                  "label": "Fast Lane",
                  "slug": "fast-lane",
                  "queue_id": "59c834ad-d9cc-4e0f-a569-8f4e52c351b9",
                  "location": {
                    "location_type": "other",
                    "address": {
                      "country": "USA",
                      "administrative_area": "NY",
                      "locality": "Menands",
                      "postal_code": "12204",
                      "thoroughfare": "431 Broadway",
                      "sub_administrative_area": "Albany",
                      "premise": "Suite c",
                      "sub_premise": "Zones Innovation Center"
                    },
                    "label": "Zones Innovation Center",
                    "slug": "zones-innovation-center",
                    "location_id": "b994961b-30b4-4f33-9330-f46fd6172909",
                    "formatted_address": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
                    "created": "1941-03-07T11:32:04.61Z",
                    "updated": "1968-09-20T02:34:41.51Z"
                  },
                  "priority": 42,
                  "total_work_orders": {
                    "pending": 4,
                    "in_progress": 4,
                    "verifying": 4,
                    "complete": 4,
                    "blocked": 4,
                    "cancelled": 4
                  },
                  "total_batches": 56,
                  "created": "1982-10-09T10:47:50.127Z",
                  "updated": "1974-04-13T17:50:50.06Z"
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

<h3 id="fetchallqueues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for queues|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallqueues-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:queues|[allOf]|false|none|none|
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

## createQueue

<a id="opIdcreateQueue"></a>

`POST /queues`

*Creates a queue*

Creates a new queue

> Body parameter

```json
{
  "type": "object",
  "required": [
    "label",
    "location",
    "priority"
  ],
  "properties": {
    "label": {
      "type": "string",
      "example": "Fast Lane",
      "x-examples": [
        "Fast Lane"
      ],
      "description": "Name of the queue"
    },
    "location": {
      "type": "object",
      "required": [
        "location_id"
      ],
      "properties": {
        "location_id": {
          "type": "string",
          "description": "The identifier for the location",
          "example": "b994961b-30b4-4f33-9330-f46fd6172909",
          "x-examples": [
            "b994961b-30b4-4f33-9330-f46fd6172909"
          ],
          "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
        }
      }
    },
    "priority": {
      "type": "integer",
      "description": "Priority level for queue",
      "example": 42,
      "x-examples": [
        42
      ],
      "format": "int32"
    }
  }
}
```

<h3 id="createqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Name of the queue|
|location|body|object|true|none|
|» location_id|body|string|true|The identifier for the location|
|priority|body|integer(int32)|true|Priority level for queue|

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
                  "example": "https://api.nterprise.com/queues/56835d6f-71ac-4605-bf44-b200191d7ad7"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-nter-relation": "queues",
          "x-nter-model": "Queue",
          "x-nter-callable": true,
          "description": "Defines the properties for a location queue",
          "required": [
            "label"
          ],
          "properties": {
            "label": {
              "type": "string",
              "example": "Fast Lane",
              "x-examples": [
                "Fast Lane"
              ],
              "description": "Name of the queue"
            },
            "slug": {
              "type": "string",
              "example": "fast-lane",
              "x-examples": [
                "fast-lane"
              ],
              "description": "Auto-generated slug for the queue"
            },
            "queue_id": {
              "type": "string",
              "description": "The identifier for the queue",
              "example": "59c834ad-d9cc-4e0f-a569-8f4e52c351b9",
              "x-examples": [
                "59c834ad-d9cc-4e0f-a569-8f4e52c351b9"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "location": {
              "type": "object",
              "description": "The location for the queue",
              "allOf": [
                {
                  "x-id": "#location",
                  "x-nter-relation": "locations",
                  "x-nter-model": "Location",
                  "x-nter-callable": true,
                  "description": "Defines the properties for a part unit",
                  "required": [
                    "location_type",
                    "address"
                  ],
                  "properties": {
                    "label": {
                      "type": "string",
                      "example": "Zones Innovation Center",
                      "x-examples": [
                        "Zones Innovation Center"
                      ]
                    },
                    "slug": {
                      "type": "string",
                      "example": "zones-innovation-center",
                      "x-examples": [
                        "zones-innovation-center"
                      ]
                    },
                    "location_id": {
                      "type": "string",
                      "description": "The identifier for the location",
                      "example": "b994961b-30b4-4f33-9330-f46fd6172909",
                      "x-examples": [
                        "b994961b-30b4-4f33-9330-f46fd6172909"
                      ],
                      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                    },
                    "location_type": {
                      "type": "string",
                      "description": "The type of location",
                      "enum": [
                        "warehouse",
                        "facility",
                        "other"
                      ],
                      "example": "other",
                      "x-examples": [
                        "other"
                      ]
                    },
                    "formatted_address": {
                      "type": "string",
                      "readOnly": true,
                      "description": "Address formatted for the where region the location exists in",
                      "example": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
                      "x-examples": [
                        "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA"
                      ]
                    },
                    "address": {
                      "type": "object",
                      "required": [
                        "country",
                        "administrative_area",
                        "locality",
                        "postal_code",
                        "thoroughfare"
                      ],
                      "description": "xNAL address for the location ",
                      "properties": {
                        "country": {
                          "type": "string",
                          "description": "Three Letter ISO country code",
                          "example": "USA",
                          "x-examples": [
                            "USA"
                          ]
                        },
                        "administrative_area": {
                          "type": "string",
                          "description": "State / Province / Region",
                          "example": "NY",
                          "x-examples": [
                            "NY"
                          ]
                        },
                        "sub_administrative_area": {
                          "type": "string",
                          "description": "County / District",
                          "example": "Albany",
                          "x-examples": [
                            "Albany"
                          ]
                        },
                        "locality": {
                          "type": "string",
                          "description": "City / Town",
                          "example": "Menands",
                          "x-examples": [
                            "Menands"
                          ]
                        },
                        "postal_code": {
                          "type": "string",
                          "description": "Postal Code / Zip Code",
                          "example": "12204",
                          "x-examples": [
                            "12204"
                          ]
                        },
                        "thoroughfare": {
                          "type": "string",
                          "description": "Street Address",
                          "example": "431 Broadway",
                          "x-examples": [
                            "431 Broadway"
                          ]
                        },
                        "premise": {
                          "type": "string",
                          "description": "Apartment / Suite / Box number etc",
                          "example": "Suite c",
                          "x-examples": [
                            "Suite c"
                          ]
                        },
                        "sub_premise": {
                          "type": "string",
                          "description": "Floor # / Room # / Building label etc",
                          "example": "Zones Innovation Center",
                          "x-examples": [
                            "Zones Innovation Center"
                          ]
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
                    "location_type": "other",
                    "address": {
                      "country": "USA",
                      "administrative_area": "NY",
                      "locality": "Menands",
                      "postal_code": "12204",
                      "thoroughfare": "431 Broadway",
                      "sub_administrative_area": "Albany",
                      "premise": "Suite c",
                      "sub_premise": "Zones Innovation Center"
                    },
                    "label": "Zones Innovation Center",
                    "slug": "zones-innovation-center",
                    "location_id": "b994961b-30b4-4f33-9330-f46fd6172909",
                    "formatted_address": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
                    "created": "2011-12-22T07:39:56.809Z",
                    "updated": "1958-10-08T23:35:29.923Z"
                  }
                }
              ]
            },
            "priority": {
              "type": "integer",
              "description": "Priority level for queue",
              "example": 42,
              "x-examples": [
                42
              ],
              "format": "int32"
            },
            "total_work_orders": {
              "type": "object",
              "description": "The number of batches assigned to the queue",
              "readOnly": true,
              "properties": {
                "pending": {
                  "type": "integer",
                  "description": "The number of cycles pending",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "in_progress": {
                  "type": "integer",
                  "description": "The number of cycles in progress",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "verifying": {
                  "type": "integer",
                  "description": "The number of cycles verifying",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "complete": {
                  "type": "integer",
                  "description": "The number of cycles complete",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "blocked": {
                  "type": "integer",
                  "description": "The number of cycles blocked",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "cancelled": {
                  "type": "integer",
                  "description": "The number of cycles cancelled",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                }
              }
            },
            "total_batches": {
              "type": "integer",
              "description": "Number of batches assigned to the queue",
              "example": 56,
              "x-examples": [
                56
              ],
              "readOnly": true
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
            "label": "Fast Lane",
            "slug": "fast-lane",
            "queue_id": "59c834ad-d9cc-4e0f-a569-8f4e52c351b9",
            "location": {
              "location_type": "other",
              "address": {
                "country": "USA",
                "administrative_area": "NY",
                "locality": "Menands",
                "postal_code": "12204",
                "thoroughfare": "431 Broadway",
                "sub_administrative_area": "Albany",
                "premise": "Suite c",
                "sub_premise": "Zones Innovation Center"
              },
              "label": "Zones Innovation Center",
              "slug": "zones-innovation-center",
              "location_id": "b994961b-30b4-4f33-9330-f46fd6172909",
              "formatted_address": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
              "created": "1941-03-07T11:32:04.61Z",
              "updated": "1968-09-20T02:34:41.51Z"
            },
            "priority": 42,
            "total_work_orders": {
              "pending": 4,
              "in_progress": 4,
              "verifying": 4,
              "complete": 4,
              "blocked": 4,
              "cancelled": 4
            },
            "total_batches": 56,
            "created": "1982-10-09T10:47:50.127Z",
            "updated": "1974-04-13T17:50:50.06Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="createqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A queue response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="createqueue-responseschema">Response Schema</h3>

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

## fetchQueueById

<a id="opIdfetchQueueById"></a>

`GET /queues/:queue_id`

*Fetches a queue by Id*

Fetch Queue

<h3 id="fetchqueuebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue_id|path|string|true|Id for the queue|

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
                  "example": "https://api.nterprise.com/queues/56835d6f-71ac-4605-bf44-b200191d7ad7"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-nter-relation": "queues",
          "x-nter-model": "Queue",
          "x-nter-callable": true,
          "description": "Defines the properties for a location queue",
          "required": [
            "label"
          ],
          "properties": {
            "label": {
              "type": "string",
              "example": "Fast Lane",
              "x-examples": [
                "Fast Lane"
              ],
              "description": "Name of the queue"
            },
            "slug": {
              "type": "string",
              "example": "fast-lane",
              "x-examples": [
                "fast-lane"
              ],
              "description": "Auto-generated slug for the queue"
            },
            "queue_id": {
              "type": "string",
              "description": "The identifier for the queue",
              "example": "59c834ad-d9cc-4e0f-a569-8f4e52c351b9",
              "x-examples": [
                "59c834ad-d9cc-4e0f-a569-8f4e52c351b9"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "location": {
              "type": "object",
              "description": "The location for the queue",
              "allOf": [
                {
                  "x-id": "#location",
                  "x-nter-relation": "locations",
                  "x-nter-model": "Location",
                  "x-nter-callable": true,
                  "description": "Defines the properties for a part unit",
                  "required": [
                    "location_type",
                    "address"
                  ],
                  "properties": {
                    "label": {
                      "type": "string",
                      "example": "Zones Innovation Center",
                      "x-examples": [
                        "Zones Innovation Center"
                      ]
                    },
                    "slug": {
                      "type": "string",
                      "example": "zones-innovation-center",
                      "x-examples": [
                        "zones-innovation-center"
                      ]
                    },
                    "location_id": {
                      "type": "string",
                      "description": "The identifier for the location",
                      "example": "b994961b-30b4-4f33-9330-f46fd6172909",
                      "x-examples": [
                        "b994961b-30b4-4f33-9330-f46fd6172909"
                      ],
                      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                    },
                    "location_type": {
                      "type": "string",
                      "description": "The type of location",
                      "enum": [
                        "warehouse",
                        "facility",
                        "other"
                      ],
                      "example": "other",
                      "x-examples": [
                        "other"
                      ]
                    },
                    "formatted_address": {
                      "type": "string",
                      "readOnly": true,
                      "description": "Address formatted for the where region the location exists in",
                      "example": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
                      "x-examples": [
                        "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA"
                      ]
                    },
                    "address": {
                      "type": "object",
                      "required": [
                        "country",
                        "administrative_area",
                        "locality",
                        "postal_code",
                        "thoroughfare"
                      ],
                      "description": "xNAL address for the location ",
                      "properties": {
                        "country": {
                          "type": "string",
                          "description": "Three Letter ISO country code",
                          "example": "USA",
                          "x-examples": [
                            "USA"
                          ]
                        },
                        "administrative_area": {
                          "type": "string",
                          "description": "State / Province / Region",
                          "example": "NY",
                          "x-examples": [
                            "NY"
                          ]
                        },
                        "sub_administrative_area": {
                          "type": "string",
                          "description": "County / District",
                          "example": "Albany",
                          "x-examples": [
                            "Albany"
                          ]
                        },
                        "locality": {
                          "type": "string",
                          "description": "City / Town",
                          "example": "Menands",
                          "x-examples": [
                            "Menands"
                          ]
                        },
                        "postal_code": {
                          "type": "string",
                          "description": "Postal Code / Zip Code",
                          "example": "12204",
                          "x-examples": [
                            "12204"
                          ]
                        },
                        "thoroughfare": {
                          "type": "string",
                          "description": "Street Address",
                          "example": "431 Broadway",
                          "x-examples": [
                            "431 Broadway"
                          ]
                        },
                        "premise": {
                          "type": "string",
                          "description": "Apartment / Suite / Box number etc",
                          "example": "Suite c",
                          "x-examples": [
                            "Suite c"
                          ]
                        },
                        "sub_premise": {
                          "type": "string",
                          "description": "Floor # / Room # / Building label etc",
                          "example": "Zones Innovation Center",
                          "x-examples": [
                            "Zones Innovation Center"
                          ]
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
                    "location_type": "other",
                    "address": {
                      "country": "USA",
                      "administrative_area": "NY",
                      "locality": "Menands",
                      "postal_code": "12204",
                      "thoroughfare": "431 Broadway",
                      "sub_administrative_area": "Albany",
                      "premise": "Suite c",
                      "sub_premise": "Zones Innovation Center"
                    },
                    "label": "Zones Innovation Center",
                    "slug": "zones-innovation-center",
                    "location_id": "b994961b-30b4-4f33-9330-f46fd6172909",
                    "formatted_address": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
                    "created": "2011-12-22T07:39:56.809Z",
                    "updated": "1958-10-08T23:35:29.923Z"
                  }
                }
              ]
            },
            "priority": {
              "type": "integer",
              "description": "Priority level for queue",
              "example": 42,
              "x-examples": [
                42
              ],
              "format": "int32"
            },
            "total_work_orders": {
              "type": "object",
              "description": "The number of batches assigned to the queue",
              "readOnly": true,
              "properties": {
                "pending": {
                  "type": "integer",
                  "description": "The number of cycles pending",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "in_progress": {
                  "type": "integer",
                  "description": "The number of cycles in progress",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "verifying": {
                  "type": "integer",
                  "description": "The number of cycles verifying",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "complete": {
                  "type": "integer",
                  "description": "The number of cycles complete",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "blocked": {
                  "type": "integer",
                  "description": "The number of cycles blocked",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "cancelled": {
                  "type": "integer",
                  "description": "The number of cycles cancelled",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                }
              }
            },
            "total_batches": {
              "type": "integer",
              "description": "Number of batches assigned to the queue",
              "example": 56,
              "x-examples": [
                56
              ],
              "readOnly": true
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
            "label": "Fast Lane",
            "slug": "fast-lane",
            "queue_id": "59c834ad-d9cc-4e0f-a569-8f4e52c351b9",
            "location": {
              "location_type": "other",
              "address": {
                "country": "USA",
                "administrative_area": "NY",
                "locality": "Menands",
                "postal_code": "12204",
                "thoroughfare": "431 Broadway",
                "sub_administrative_area": "Albany",
                "premise": "Suite c",
                "sub_premise": "Zones Innovation Center"
              },
              "label": "Zones Innovation Center",
              "slug": "zones-innovation-center",
              "location_id": "b994961b-30b4-4f33-9330-f46fd6172909",
              "formatted_address": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
              "created": "1941-03-07T11:32:04.61Z",
              "updated": "1968-09-20T02:34:41.51Z"
            },
            "priority": 42,
            "total_work_orders": {
              "pending": 4,
              "in_progress": 4,
              "verifying": 4,
              "complete": 4,
              "blocked": 4,
              "cancelled": 4
            },
            "total_batches": 56,
            "created": "1982-10-09T10:47:50.127Z",
            "updated": "1974-04-13T17:50:50.06Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="fetchqueuebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A queue response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchqueuebyid-responseschema">Response Schema</h3>

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

## updateQueue

<a id="opIdupdateQueue"></a>

`PUT /queues/:queue_id`

*Updates a queue*

Updates a queue

> Body parameter

```json
{
  "type": "object",
  "required": [
    "label",
    "location",
    "priority"
  ],
  "properties": {
    "label": {
      "type": "string",
      "example": "Fast Lane",
      "x-examples": [
        "Fast Lane"
      ],
      "description": "Name of the queue"
    },
    "location": {
      "type": "object",
      "required": [
        "location_id"
      ],
      "properties": {
        "location_id": {
          "type": "string",
          "description": "The identifier for the location",
          "example": "b994961b-30b4-4f33-9330-f46fd6172909",
          "x-examples": [
            "b994961b-30b4-4f33-9330-f46fd6172909"
          ],
          "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
        }
      }
    },
    "priority": {
      "type": "integer",
      "description": "Priority level for queue",
      "example": 42,
      "x-examples": [
        42
      ],
      "format": "int32"
    }
  }
}
```

<h3 id="updatequeue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue_id|path|string|true|Id for the queue|
|label|body|string|true|Name of the queue|
|location|body|object|true|none|
|» location_id|body|string|true|The identifier for the location|
|priority|body|integer(int32)|true|Priority level for queue|

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
                  "example": "https://api.nterprise.com/queues/56835d6f-71ac-4605-bf44-b200191d7ad7"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-nter-relation": "queues",
          "x-nter-model": "Queue",
          "x-nter-callable": true,
          "description": "Defines the properties for a location queue",
          "required": [
            "label"
          ],
          "properties": {
            "label": {
              "type": "string",
              "example": "Fast Lane",
              "x-examples": [
                "Fast Lane"
              ],
              "description": "Name of the queue"
            },
            "slug": {
              "type": "string",
              "example": "fast-lane",
              "x-examples": [
                "fast-lane"
              ],
              "description": "Auto-generated slug for the queue"
            },
            "queue_id": {
              "type": "string",
              "description": "The identifier for the queue",
              "example": "59c834ad-d9cc-4e0f-a569-8f4e52c351b9",
              "x-examples": [
                "59c834ad-d9cc-4e0f-a569-8f4e52c351b9"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "location": {
              "type": "object",
              "description": "The location for the queue",
              "allOf": [
                {
                  "x-id": "#location",
                  "x-nter-relation": "locations",
                  "x-nter-model": "Location",
                  "x-nter-callable": true,
                  "description": "Defines the properties for a part unit",
                  "required": [
                    "location_type",
                    "address"
                  ],
                  "properties": {
                    "label": {
                      "type": "string",
                      "example": "Zones Innovation Center",
                      "x-examples": [
                        "Zones Innovation Center"
                      ]
                    },
                    "slug": {
                      "type": "string",
                      "example": "zones-innovation-center",
                      "x-examples": [
                        "zones-innovation-center"
                      ]
                    },
                    "location_id": {
                      "type": "string",
                      "description": "The identifier for the location",
                      "example": "b994961b-30b4-4f33-9330-f46fd6172909",
                      "x-examples": [
                        "b994961b-30b4-4f33-9330-f46fd6172909"
                      ],
                      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                    },
                    "location_type": {
                      "type": "string",
                      "description": "The type of location",
                      "enum": [
                        "warehouse",
                        "facility",
                        "other"
                      ],
                      "example": "other",
                      "x-examples": [
                        "other"
                      ]
                    },
                    "formatted_address": {
                      "type": "string",
                      "readOnly": true,
                      "description": "Address formatted for the where region the location exists in",
                      "example": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
                      "x-examples": [
                        "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA"
                      ]
                    },
                    "address": {
                      "type": "object",
                      "required": [
                        "country",
                        "administrative_area",
                        "locality",
                        "postal_code",
                        "thoroughfare"
                      ],
                      "description": "xNAL address for the location ",
                      "properties": {
                        "country": {
                          "type": "string",
                          "description": "Three Letter ISO country code",
                          "example": "USA",
                          "x-examples": [
                            "USA"
                          ]
                        },
                        "administrative_area": {
                          "type": "string",
                          "description": "State / Province / Region",
                          "example": "NY",
                          "x-examples": [
                            "NY"
                          ]
                        },
                        "sub_administrative_area": {
                          "type": "string",
                          "description": "County / District",
                          "example": "Albany",
                          "x-examples": [
                            "Albany"
                          ]
                        },
                        "locality": {
                          "type": "string",
                          "description": "City / Town",
                          "example": "Menands",
                          "x-examples": [
                            "Menands"
                          ]
                        },
                        "postal_code": {
                          "type": "string",
                          "description": "Postal Code / Zip Code",
                          "example": "12204",
                          "x-examples": [
                            "12204"
                          ]
                        },
                        "thoroughfare": {
                          "type": "string",
                          "description": "Street Address",
                          "example": "431 Broadway",
                          "x-examples": [
                            "431 Broadway"
                          ]
                        },
                        "premise": {
                          "type": "string",
                          "description": "Apartment / Suite / Box number etc",
                          "example": "Suite c",
                          "x-examples": [
                            "Suite c"
                          ]
                        },
                        "sub_premise": {
                          "type": "string",
                          "description": "Floor # / Room # / Building label etc",
                          "example": "Zones Innovation Center",
                          "x-examples": [
                            "Zones Innovation Center"
                          ]
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
                    "location_type": "other",
                    "address": {
                      "country": "USA",
                      "administrative_area": "NY",
                      "locality": "Menands",
                      "postal_code": "12204",
                      "thoroughfare": "431 Broadway",
                      "sub_administrative_area": "Albany",
                      "premise": "Suite c",
                      "sub_premise": "Zones Innovation Center"
                    },
                    "label": "Zones Innovation Center",
                    "slug": "zones-innovation-center",
                    "location_id": "b994961b-30b4-4f33-9330-f46fd6172909",
                    "formatted_address": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
                    "created": "2011-12-22T07:39:56.809Z",
                    "updated": "1958-10-08T23:35:29.923Z"
                  }
                }
              ]
            },
            "priority": {
              "type": "integer",
              "description": "Priority level for queue",
              "example": 42,
              "x-examples": [
                42
              ],
              "format": "int32"
            },
            "total_work_orders": {
              "type": "object",
              "description": "The number of batches assigned to the queue",
              "readOnly": true,
              "properties": {
                "pending": {
                  "type": "integer",
                  "description": "The number of cycles pending",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "in_progress": {
                  "type": "integer",
                  "description": "The number of cycles in progress",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "verifying": {
                  "type": "integer",
                  "description": "The number of cycles verifying",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "complete": {
                  "type": "integer",
                  "description": "The number of cycles complete",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "blocked": {
                  "type": "integer",
                  "description": "The number of cycles blocked",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                },
                "cancelled": {
                  "type": "integer",
                  "description": "The number of cycles cancelled",
                  "format": "int32",
                  "readOnly": true,
                  "example": 4,
                  "x-examples": [
                    4
                  ]
                }
              }
            },
            "total_batches": {
              "type": "integer",
              "description": "Number of batches assigned to the queue",
              "example": 56,
              "x-examples": [
                56
              ],
              "readOnly": true
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
            "label": "Fast Lane",
            "slug": "fast-lane",
            "queue_id": "59c834ad-d9cc-4e0f-a569-8f4e52c351b9",
            "location": {
              "location_type": "other",
              "address": {
                "country": "USA",
                "administrative_area": "NY",
                "locality": "Menands",
                "postal_code": "12204",
                "thoroughfare": "431 Broadway",
                "sub_administrative_area": "Albany",
                "premise": "Suite c",
                "sub_premise": "Zones Innovation Center"
              },
              "label": "Zones Innovation Center",
              "slug": "zones-innovation-center",
              "location_id": "b994961b-30b4-4f33-9330-f46fd6172909",
              "formatted_address": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
              "created": "1941-03-07T11:32:04.61Z",
              "updated": "1968-09-20T02:34:41.51Z"
            },
            "priority": 42,
            "total_work_orders": {
              "pending": 4,
              "in_progress": 4,
              "verifying": 4,
              "complete": 4,
              "blocked": 4,
              "cancelled": 4
            },
            "total_batches": 56,
            "created": "1982-10-09T10:47:50.127Z",
            "updated": "1974-04-13T17:50:50.06Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="updatequeue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A queue response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="updatequeue-responseschema">Response Schema</h3>

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

## deleteQueue

<a id="opIddeleteQueue"></a>

`DELETE /queues/:queue_id`

*Deletes a queue*

This will soft delete the queue

<h3 id="deletequeue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue_id|path|string|true|Id for the queue|

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

<h3 id="deletequeue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Queue deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="deletequeue-responseschema">Response Schema</h3>

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

## fetchAllBatchesForQueue

<a id="opIdfetchAllBatchesForQueue"></a>

`GET /queues/:queue_id/batches`

*Fetches A Page of batches for a queue*

Fetch Queue Batches

<h3 id="fetchallbatchesforqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue_id|path|string|true|Id for the queue|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|sort|query|string|false|Sort by field|
|offset|query|string|false|Continue from last offset|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|label|
|sort|-label|
|sort|priority|
|sort|-priority|
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
        "nter:batches": {
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
                        "example": "https://api.nterprise.com/batches/c01d0ffe-d81b-4871-ab42-900280d8fc14"
                      }
                    }
                  }
                }
              }
            },
            "allOf": [
              {
                "x-id": "#batch",
                "x-nter-relation": "batches",
                "x-nter-model": "Batch",
                "x-nter-callable": true,
                "description": "Defines the properties for a work order batch",
                "required": [
                  "label",
                  "queue"
                ],
                "properties": {
                  "batch_id": {
                    "type": "string",
                    "description": "The identifier for the batch",
                    "example": "59c834ad-d9cc-4e0f-a569-8f4e52c351b9",
                    "x-examples": [
                      "59c834ad-d9cc-4e0f-a569-8f4e52c351b9"
                    ],
                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                  },
                  "queue": {
                    "x-nter-relation": "queues",
                    "x-nter-model": "Queue",
                    "x-nter-callable": true,
                    "description": "Defines the properties for a location queue",
                    "required": [
                      "label"
                    ],
                    "properties": {
                      "label": {
                        "type": "string",
                        "example": "Fast Lane",
                        "x-examples": [
                          "Fast Lane"
                        ],
                        "description": "Name of the queue"
                      },
                      "slug": {
                        "type": "string",
                        "example": "fast-lane",
                        "x-examples": [
                          "fast-lane"
                        ],
                        "description": "Auto-generated slug for the queue"
                      },
                      "queue_id": {
                        "type": "string",
                        "description": "The identifier for the queue",
                        "example": "59c834ad-d9cc-4e0f-a569-8f4e52c351b9",
                        "x-examples": [
                          "59c834ad-d9cc-4e0f-a569-8f4e52c351b9"
                        ],
                        "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                      },
                      "location": {
                        "type": "object",
                        "description": "The location for the queue",
                        "allOf": [
                          {
                            "x-id": "#location",
                            "x-nter-relation": "locations",
                            "x-nter-model": "Location",
                            "x-nter-callable": true,
                            "description": "Defines the properties for a part unit",
                            "required": [
                              "location_type",
                              "address"
                            ],
                            "properties": {
                              "label": {
                                "type": "string",
                                "example": "Zones Innovation Center",
                                "x-examples": [
                                  "Zones Innovation Center"
                                ]
                              },
                              "slug": {
                                "type": "string",
                                "example": "zones-innovation-center",
                                "x-examples": [
                                  "zones-innovation-center"
                                ]
                              },
                              "location_id": {
                                "type": "string",
                                "description": "The identifier for the location",
                                "example": "b994961b-30b4-4f33-9330-f46fd6172909",
                                "x-examples": [
                                  "b994961b-30b4-4f33-9330-f46fd6172909"
                                ],
                                "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                              },
                              "location_type": {
                                "type": "string",
                                "description": "The type of location",
                                "enum": [
                                  "warehouse",
                                  "facility",
                                  "other"
                                ],
                                "example": "other",
                                "x-examples": [
                                  "other"
                                ]
                              },
                              "formatted_address": {
                                "type": "string",
                                "readOnly": true,
                                "description": "Address formatted for the where region the location exists in",
                                "example": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
                                "x-examples": [
                                  "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA"
                                ]
                              },
                              "address": {
                                "type": "object",
                                "required": [
                                  "country",
                                  "administrative_area",
                                  "locality",
                                  "postal_code",
                                  "thoroughfare"
                                ],
                                "description": "xNAL address for the location ",
                                "properties": {
                                  "country": {
                                    "type": "string",
                                    "description": "Three Letter ISO country code",
                                    "example": "USA",
                                    "x-examples": [
                                      "USA"
                                    ]
                                  },
                                  "administrative_area": {
                                    "type": "string",
                                    "description": "State / Province / Region",
                                    "example": "NY",
                                    "x-examples": [
                                      "NY"
                                    ]
                                  },
                                  "sub_administrative_area": {
                                    "type": "string",
                                    "description": "County / District",
                                    "example": "Albany",
                                    "x-examples": [
                                      "Albany"
                                    ]
                                  },
                                  "locality": {
                                    "type": "string",
                                    "description": "City / Town",
                                    "example": "Menands",
                                    "x-examples": [
                                      "Menands"
                                    ]
                                  },
                                  "postal_code": {
                                    "type": "string",
                                    "description": "Postal Code / Zip Code",
                                    "example": "12204",
                                    "x-examples": [
                                      "12204"
                                    ]
                                  },
                                  "thoroughfare": {
                                    "type": "string",
                                    "description": "Street Address",
                                    "example": "431 Broadway",
                                    "x-examples": [
                                      "431 Broadway"
                                    ]
                                  },
                                  "premise": {
                                    "type": "string",
                                    "description": "Apartment / Suite / Box number etc",
                                    "example": "Suite c",
                                    "x-examples": [
                                      "Suite c"
                                    ]
                                  },
                                  "sub_premise": {
                                    "type": "string",
                                    "description": "Floor # / Room # / Building label etc",
                                    "example": "Zones Innovation Center",
                                    "x-examples": [
                                      "Zones Innovation Center"
                                    ]
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
                              "location_type": "other",
                              "address": {
                                "country": "USA",
                                "administrative_area": "NY",
                                "locality": "Menands",
                                "postal_code": "12204",
                                "thoroughfare": "431 Broadway",
                                "sub_administrative_area": "Albany",
                                "premise": "Suite c",
                                "sub_premise": "Zones Innovation Center"
                              },
                              "label": "Zones Innovation Center",
                              "slug": "zones-innovation-center",
                              "location_id": "b994961b-30b4-4f33-9330-f46fd6172909",
                              "formatted_address": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
                              "created": "2011-12-22T07:39:56.809Z",
                              "updated": "1958-10-08T23:35:29.923Z"
                            }
                          }
                        ]
                      },
                      "priority": {
                        "type": "integer",
                        "description": "Priority level for queue",
                        "example": 42,
                        "x-examples": [
                          42
                        ],
                        "format": "int32"
                      },
                      "total_work_orders": {
                        "type": "object",
                        "description": "The number of batches assigned to the queue",
                        "readOnly": true,
                        "properties": {
                          "pending": {
                            "type": "integer",
                            "description": "The number of cycles pending",
                            "format": "int32",
                            "readOnly": true,
                            "example": 4,
                            "x-examples": [
                              4
                            ]
                          },
                          "in_progress": {
                            "type": "integer",
                            "description": "The number of cycles in progress",
                            "format": "int32",
                            "readOnly": true,
                            "example": 4,
                            "x-examples": [
                              4
                            ]
                          },
                          "verifying": {
                            "type": "integer",
                            "description": "The number of cycles verifying",
                            "format": "int32",
                            "readOnly": true,
                            "example": 4,
                            "x-examples": [
                              4
                            ]
                          },
                          "complete": {
                            "type": "integer",
                            "description": "The number of cycles complete",
                            "format": "int32",
                            "readOnly": true,
                            "example": 4,
                            "x-examples": [
                              4
                            ]
                          },
                          "blocked": {
                            "type": "integer",
                            "description": "The number of cycles blocked",
                            "format": "int32",
                            "readOnly": true,
                            "example": 4,
                            "x-examples": [
                              4
                            ]
                          },
                          "cancelled": {
                            "type": "integer",
                            "description": "The number of cycles cancelled",
                            "format": "int32",
                            "readOnly": true,
                            "example": 4,
                            "x-examples": [
                              4
                            ]
                          }
                        }
                      },
                      "total_batches": {
                        "type": "integer",
                        "description": "Number of batches assigned to the queue",
                        "example": 56,
                        "x-examples": [
                          56
                        ],
                        "readOnly": true
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
                      "label": "Fast Lane",
                      "slug": "fast-lane",
                      "queue_id": "59c834ad-d9cc-4e0f-a569-8f4e52c351b9",
                      "location": {
                        "location_type": "other",
                        "address": {
                          "country": "USA",
                          "administrative_area": "NY",
                          "locality": "Menands",
                          "postal_code": "12204",
                          "thoroughfare": "431 Broadway",
                          "sub_administrative_area": "Albany",
                          "premise": "Suite c",
                          "sub_premise": "Zones Innovation Center"
                        },
                        "label": "Zones Innovation Center",
                        "slug": "zones-innovation-center",
                        "location_id": "b994961b-30b4-4f33-9330-f46fd6172909",
                        "formatted_address": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
                        "created": "1941-03-07T11:32:04.61Z",
                        "updated": "1968-09-20T02:34:41.51Z"
                      },
                      "priority": 42,
                      "total_work_orders": {
                        "pending": 4,
                        "in_progress": 4,
                        "verifying": 4,
                        "complete": 4,
                        "blocked": 4,
                        "cancelled": 4
                      },
                      "total_batches": 56,
                      "created": "1982-10-09T10:47:50.127Z",
                      "updated": "1974-04-13T17:50:50.06Z"
                    }
                  },
                  "order": {
                    "type": "integer",
                    "description": "Order for the queue",
                    "example": 1,
                    "x-examples": [
                      1
                    ],
                    "format": "int32"
                  },
                  "users": {
                    "type": "array",
                    "description": "Users assigned to this batch",
                    "maximum": 100,
                    "items": {
                      "description": "User Information",
                      "x-nter-relation": "users",
                      "x-nter-model": "User",
                      "x-nter-callable": true,
                      "properties": {
                        "user_id": {
                          "type": "string",
                          "description": "The identifier for the user",
                          "example": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
                          "x-examples": [
                            "3dddba3e-6122-46a8-ae26-8c7c95bd82d7"
                          ],
                          "pattern": "[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}"
                        },
                        "email": {
                          "type": "string",
                          "format": "email",
                          "description": "Email address",
                          "example": "alice@zones.com",
                          "x-examples": [
                            "alice@zones.com"
                          ]
                        },
                        "name": {
                          "type": "string",
                          "description": "Human readable name",
                          "nullable": true,
                          "example": "Alice Bob",
                          "x-examples": [
                            "Alice Bob"
                          ]
                        },
                        "picture": {
                          "type": "string",
                          "description": "Image for the user",
                          "nullable": true,
                          "example": "https://bit.ly/18gECvy",
                          "x-examples": [
                            "https://bit.ly/18gECvy"
                          ]
                        },
                        "profile": {
                          "type": "string",
                          "description": "Link to the users profile",
                          "nullable": true,
                          "example": "https://bit.ly/18gECvy",
                          "x-examples": [
                            "https://bit.ly/18gECvy"
                          ]
                        }
                      },
                      "example": {
                        "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
                        "email": "alice@zones.com",
                        "name": "Alice Bob",
                        "picture": "https://bit.ly/18gECvy",
                        "profile": "https://bit.ly/18gECvy"
                      }
                    }
                  },
                  "number_cycles": {
                    "type": "integer",
                    "description": "The number of cycles for this batch",
                    "format": "int32",
                    "example": 20,
                    "x-examples": [
                      20
                    ]
                  },
                  "cycles": {
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "pending": {
                        "type": "integer",
                        "description": "The number of cycles pending",
                        "format": "int32",
                        "readOnly": true,
                        "example": 13,
                        "x-examples": [
                          13
                        ]
                      },
                      "in_progress": {
                        "type": "integer",
                        "description": "The number of cycles in progress",
                        "format": "int32",
                        "readOnly": true,
                        "example": 2,
                        "x-examples": [
                          2
                        ]
                      },
                      "verifying": {
                        "type": "integer",
                        "description": "The number of cycles verifying",
                        "format": "int32",
                        "readOnly": true,
                        "example": 1,
                        "x-examples": [
                          1
                        ]
                      },
                      "complete": {
                        "type": "integer",
                        "description": "The number of cycles complete",
                        "format": "int32",
                        "readOnly": true,
                        "example": 4,
                        "x-examples": [
                          4
                        ]
                      },
                      "blocked": {
                        "type": "integer",
                        "description": "The number of cycles blocked",
                        "format": "int32",
                        "readOnly": true,
                        "example": 0,
                        "x-examples": [
                          0
                        ]
                      },
                      "cancelled": {
                        "type": "integer",
                        "description": "The number of cycles cancelled",
                        "format": "int32",
                        "readOnly": true,
                        "example": 0,
                        "x-examples": [
                          0
                        ]
                      }
                    }
                  },
                  "work_order": {
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
                  "queue": {
                    "label": "Fast Lane",
                    "slug": "fast-lane",
                    "queue_id": "59c834ad-d9cc-4e0f-a569-8f4e52c351b9",
                    "location": {
                      "location_type": "other",
                      "address": {
                        "country": "USA",
                        "administrative_area": "NY",
                        "locality": "Menands",
                        "postal_code": "12204",
                        "thoroughfare": "431 Broadway",
                        "sub_administrative_area": "Albany",
                        "premise": "Suite c",
                        "sub_premise": "Zones Innovation Center"
                      },
                      "label": "Zones Innovation Center",
                      "slug": "zones-innovation-center",
                      "location_id": "b994961b-30b4-4f33-9330-f46fd6172909",
                      "formatted_address": "Zones Innovation Center\n431 Broadway\nSuite C\nMenands NY, 12204\nUSA",
                      "created": "1960-03-30T20:21:22.38Z",
                      "updated": "2014-11-25T22:29:22.985Z"
                    },
                    "priority": 42,
                    "total_work_orders": {
                      "pending": 4,
                      "in_progress": 4,
                      "verifying": 4,
                      "complete": 4,
                      "blocked": 4,
                      "cancelled": 4
                    },
                    "total_batches": 56,
                    "created": "1967-08-19T11:31:08.32Z",
                    "updated": "1990-08-16T05:38:22.338Z"
                  },
                  "batch_id": "59c834ad-d9cc-4e0f-a569-8f4e52c351b9",
                  "order": 1,
                  "users": [
                    {
                      "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
                      "email": "alice@zones.com",
                      "name": "Alice Bob",
                      "picture": "https://bit.ly/18gECvy",
                      "profile": "https://bit.ly/18gECvy"
                    },
                    {
                      "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
                      "email": "alice@zones.com",
                      "name": "Alice Bob",
                      "picture": "https://bit.ly/18gECvy",
                      "profile": "https://bit.ly/18gECvy"
                    },
                    {
                      "user_id": "3dddba3e-6122-46a8-ae26-8c7c95bd82d7",
                      "email": "alice@zones.com",
                      "name": "Alice Bob",
                      "picture": "https://bit.ly/18gECvy",
                      "profile": "https://bit.ly/18gECvy"
                    }
                  ],
                  "number_cycles": 20,
                  "cycles": {
                    "pending": 13,
                    "in_progress": 2,
                    "verifying": 1,
                    "complete": 4,
                    "blocked": 0,
                    "cancelled": 0
                  },
                  "work_order": {
                    "label": "Provision devices",
                    "work_order_id": "0f40ff8c-a3b5-4a30-90e5-0421c153183c",
                    "slug": "provision-devices",
                    "description": "Provision 150 devices for 123 Main St",
                    "type": "device",
                    "due_date": "2020-08-07T18:10:53.0Z",
                    "current_status": {
                      "status": "Verifying",
                      "category": "BLOCKED"
                    },
                    "status_history": [
                      {
                        "status": "Complete",
                        "created": "1942-05-15T23:56:57.845Z",
                        "category": "BLOCKED"
                      },
                      {
                        "status": "Cancelled",
                        "created": "2017-07-25T15:14:24.006Z",
                        "category": "IN_PROGRESS"
                      },
                      {
                        "status": "Blocked",
                        "created": "2014-03-16T06:07:06.571Z",
                        "category": "VERIFYING"
                      },
                      {
                        "status": "In Progress",
                        "created": "1951-11-21T18:28:33.468Z",
                        "category": "IN_PROGRESS"
                      },
                      {
                        "status": "Cancelled",
                        "created": "1976-09-28T16:47:01.748Z",
                        "category": "CANCELLED"
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
                            "category": "PENDING"
                          }
                        ],
                        "created": "1990-05-21T04:32:01.47Z",
                        "updated": "1963-08-20T13:59:21.542Z"
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
                              "category": "CANCELLED"
                            }
                          ],
                          "created": "1953-01-25T05:00:34.317Z",
                          "updated": "2018-01-30T10:45:54.994Z"
                        },
                        "program_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                        "slug": "gap-store-refresh",
                        "allowed_statuses": [
                          {
                            "status": "Cancelled",
                            "category": "IN_PROGRESS"
                          },
                          {
                            "status": "Cancelled",
                            "category": "CANCELLED"
                          },
                          {
                            "status": "Reticulating Splines",
                            "category": "VERIFYING"
                          }
                        ],
                        "start_date": "2019-08-07T18:10:53.0Z",
                        "end_date": "2020-08-07T18:10:53.0Z",
                        "created": "1958-12-15T13:21:20.626Z",
                        "updated": "1950-08-07T05:32:04.827Z"
                      },
                      "slug": "store-42",
                      "project_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                      "allowed_statuses": [
                        {
                          "status": "Pending",
                          "category": "VERIFYING"
                        }
                      ],
                      "start_date": "2019-08-07T18:10:53.0Z",
                      "end_date": "2020-08-07T18:10:53.0Z",
                      "created": "2015-01-15T19:54:58.468Z",
                      "updated": "1989-01-25T15:47:26.931Z"
                    },
                    "work_flows": [
                      {
                        "cycles_needed": 4,
                        "work_flow": {
                          "steps": {
                            "fail": {
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
                            },
                            "eiusmod_4": {
                              "step": "complete",
                              "type": "user",
                              "options": {
                                "component": "assignUnitsFromCustomerToProject",
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
                                  "key": "$.unit.status",
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
                                    }
                                  ]
                                },
                                "retry": 6
                              },
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
                            }
                          },
                          "starts_at": "entry",
                          "label": "MLTI iPad Assembly Assignment",
                          "workflow_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                          "applies_to": "part",
                          "slug": "mlti-ipad-assembly-assignment",
                          "version": "1.0",
                          "workflow_version": 7,
                          "context": [
                            {
                              "key": "extract_fields",
                              "value": "Pending",
                              "lock": false,
                              "ignore": false
                            },
                            {
                              "key": "$.unit.status",
                              "value": "Pending",
                              "lock": false,
                              "ignore": false
                            },
                            {
                              "key": "$.unit.status",
                              "value": "Pending",
                              "lock": true,
                              "ignore": false
                            },
                            {
                              "key": "$.unit.status",
                              "value": "Pending",
                              "lock": false,
                              "ignore": false
                            },
                            {
                              "key": "$.fizz",
                              "value": "Pending",
                              "lock": false,
                              "ignore": true
                            }
                          ],
                          "created": "2004-01-05T13:24:32.088Z",
                          "updated": "1994-08-09T02:28:32.446Z"
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
                            "confirm": {
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
                          "applies_to": "contact",
                          "slug": "mlti-ipad-assembly-assignment",
                          "version": "1.0",
                          "workflow_version": 7,
                          "context": [
                            {
                              "key": "$.unit.status",
                              "value": "$.buzz",
                              "lock": false,
                              "ignore": true
                            },
                            {
                              "key": "$.fizz",
                              "value": "true",
                              "lock": true,
                              "ignore": true
                            },
                            {
                              "key": "$.unit.status",
                              "value": "true",
                              "lock": true,
                              "ignore": true
                            },
                            {
                              "key": "extract_fields",
                              "value": "true",
                              "lock": false,
                              "ignore": false
                            },
                            {
                              "key": "extract_fields",
                              "value": "Pending",
                              "lock": true,
                              "ignore": false
                            }
                          ],
                          "created": "1949-11-21T21:12:11.318Z",
                          "updated": "1988-07-11T00:42:26.036Z"
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
                            "success": {
                              "step": "complete",
                              "label": "Find units",
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
                            "in_fe4$": {
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
                                  }
                                ]
                              }
                            },
                            "voluptate_573$": {
                              "step": "complete",
                              "type": "user",
                              "options": {
                                "component": "task-list",
                                "payload": {
                                  "items": [
                                    {
                                      "label": "Asset Tag placement",
                                      "help": "Asset Tag attached to the unit in the correct position",
                                      "evaluated": false,
                                      "slug": "asset-tag-placement",
                                      "na_field": true
                                    },
                                    {
                                      "label": "Asset Tag placement",
                                      "help": "Asset Tag attached to the unit in the correct position",
                                      "evaluated": true,
                                      "slug": "asset-tag-placement",
                                      "na_field": false
                                    }
                                  ],
                                  "is_qc": true
                                }
                              },
                              "label": "Find units",
                              "goto": "complete",
                              "goto-fail": "process-fail",
                              "context": [
                                {
                                  "key": "$.fizz",
                                  "value": "true",
                                  "lock": true,
                                  "ignore": false
                                },
                                {
                                  "key": "extract_fields",
                                  "value": "$.buzz",
                                  "lock": false,
                                  "ignore": false
                                },
                                {
                                  "key": "$.fizz",
                                  "value": "true",
                                  "lock": true,
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
                            "ut8bb$": {
                              "step": "complete",
                              "type": "choice",
                              "label": "Is device ok?",
                              "goto": "complete",
                              "choices": [
                                {
                                  "goto": "complete",
                                  "and": [
                                    {
                                      "variable": "$.parts.available",
                                      "greater_than_equals": "42"
                                    },
                                    {
                                      "variable": "$.parts.available",
                                      "greater_than_equals": "42"
                                    },
                                    {
                                      "variable": "$.parts.available",
                                      "greater_than_equals": "42"
                                    },
                                    {
                                      "variable": "$.parts.available",
                                      "greater_than_equals": "42"
                                    }
                                  ]
                                }
                              ],
                              "goto-fail": "process-fail",
                              "context": [
                                {
                                  "key": "$.fizz",
                                  "value": "Pending",
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
                                "retry": 2
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
                            }
                          },
                          "starts_at": "entry",
                          "label": "MLTI iPad Assembly Assignment",
                          "workflow_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                          "applies_to": "part",
                          "slug": "mlti-ipad-assembly-assignment",
                          "version": "1.0",
                          "workflow_version": 7,
                          "context": [
                            {
                              "key": "extract_fields",
                              "value": "true",
                              "lock": true,
                              "ignore": false
                            },
                            {
                              "key": "$.unit.status",
                              "value": "Pending",
                              "lock": true,
                              "ignore": false
                            },
                            {
                              "key": "extract_fields",
                              "value": "true",
                              "lock": false,
                              "ignore": false
                            }
                          ],
                          "created": "1959-06-30T11:18:52.446Z",
                          "updated": "1943-08-18T04:00:47.212Z"
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
                    "created": "1959-09-09T11:35:30.545Z",
                    "updated": "1970-03-03T00:55:22.934Z"
                  },
                  "created": "1998-05-09T04:29:38.967Z",
                  "updated": "2006-07-05T00:16:03.846Z"
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

<h3 id="fetchallbatchesforqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for batches|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallbatchesforqueue-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:batches|[allOf]|false|none|none|
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

# Schemas

<h2 id="tocSqueue">Queue</h2>

<a id="schemaqueue"></a>

```yaml
label: Fast Lane
slug: fast-lane
queue_id: 59c834ad-d9cc-4e0f-a569-8f4e52c351b9
location:
  location_type: other
  address:
    country: USA
    administrative_area: NY
    locality: Menands
    postal_code: '12204'
    thoroughfare: 431 Broadway
    sub_administrative_area: Albany
    premise: Suite c
    sub_premise: Zones Innovation Center
  label: Zones Innovation Center
  slug: zones-innovation-center
  location_id: b994961b-30b4-4f33-9330-f46fd6172909
  formatted_address: |-
    Zones Innovation Center
    431 Broadway
    Suite C
    Menands NY, 12204
    USA
  created: '1941-03-07T11:32:04.61Z'
  updated: '1968-09-20T02:34:41.51Z'
priority: 42
total_work_orders:
  pending: 4
  in_progress: 4
  verifying: 4
  complete: 4
  blocked: 4
  cancelled: 4
total_batches: 56
created: '1982-10-09T10:47:50.127Z'
updated: '1974-04-13T17:50:50.06Z'

```

*Defines the properties for a location queue*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|Name of the queue|
|slug|string|false|none|Auto-generated slug for the queue|
|queue_id|string|false|none|The identifier for the queue|
|location|object|false|none|The location for the queue|
|» label|string|false|none|none|
|» slug|string|false|none|none|
|» location_id|string|false|none|The identifier for the location|
|» location_type|string|true|none|The type of location|
|» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|» address|object|true|none|xNAL address for the location|
|»» country|string|true|none|Three Letter ISO country code|
|»» administrative_area|string|true|none|State / Province / Region|
|»» sub_administrative_area|string|false|none|County / District|
|»» locality|string|true|none|City / Town|
|»» postal_code|string|true|none|Postal Code / Zip Code|
|»» thoroughfare|string|true|none|Street Address|
|»» premise|string|false|none|Apartment / Suite / Box number etc|
|»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|» priority|integer(int32)|false|none|Priority level for queue|
|» total_work_orders|object|false|read-only|The number of batches assigned to the queue|
|»» pending|integer(int32)|false|read-only|The number of cycles pending|
|»» in_progress|integer(int32)|false|read-only|The number of cycles in progress|
|»» verifying|integer(int32)|false|read-only|The number of cycles verifying|
|»» complete|integer(int32)|false|read-only|The number of cycles complete|
|»» blocked|integer(int32)|false|read-only|The number of cycles blocked|
|»» cancelled|integer(int32)|false|read-only|The number of cycles cancelled|
|» total_batches|integer|false|read-only|Number of batches assigned to the queue|

#### Enumerated Values

|Property|Value|
|---|---|
|location_type|warehouse|
|location_type|facility|
|location_type|other|

