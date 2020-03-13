---
layout: page
parent: Niagara API
nav_order: 13
title: Resources
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="resources">Resources v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

<h1 id="resources-resource">Resource</h1>

## fetchAllResources

<a id="opIdfetchAllResources"></a>

`GET /resources`

*Fetches A Page of resources*

Fetch resources

<h3 id="fetchallresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|sort|query|string|false|Sort by field|
|filter[resource_type]|query|string|false|Filter where the resource type is this value|

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
        "nter:resources": {
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
                        "example": "https://api.nterprise.com/resources/b3179fc4-ae45-4ceb-bc62-6deacc921d06"
                      }
                    }
                  }
                }
              }
            },
            "allOf": [
              {
                "x-id": "#resource",
                "x-nter-relation": "resources",
                "x-nter-model": "Resource",
                "x-nter-callable": true,
                "description": "Defines the properties for a resource",
                "required": [
                  "label",
                  "resource_type",
                  "location"
                ],
                "properties": {
                  "resource_id": {
                    "type": "string",
                    "description": "The identifier for the resource",
                    "example": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
                    "x-examples": [
                      "3c730679-dcfa-4b5a-8f6e-b76fe80c6078"
                    ],
                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                  },
                  "label": {
                    "example": "Server room",
                    "x-examples": [
                      "Server room"
                    ],
                    "description": "Name of the resource"
                  },
                  "slug": {
                    "example": "server-room",
                    "x-examples": [
                      "server-room"
                    ],
                    "description": "Auto-generated slug for the resource"
                  },
                  "resource_type": {
                    "type": "string",
                    "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
                    "example": "station",
                    "x-examples": [
                      "station"
                    ],
                    "pattern": "^[a-z][0-9a-zA-Z-]+$"
                  },
                  "meta": {
                    "type": "object",
                    "description": "Data for the resource as a key value pair",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "x-examples": [
                      {
                        "power": "50w"
                      }
                    ]
                  },
                  "location": {
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
                  },
                  "resource": {
                    "type": "object",
                    "description": "The parent resource if this is a child resource",
                    "properties": {
                      "resource_id": {
                        "type": "string",
                        "description": "The identifier for the resource",
                        "example": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
                        "x-examples": [
                          "3c730679-dcfa-4b5a-8f6e-b76fe80c6078"
                        ],
                        "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                      },
                      "label": {
                        "example": "Server room",
                        "x-examples": [
                          "Server room"
                        ],
                        "description": "Name of the resource"
                      },
                      "resource_type": {
                        "type": "string",
                        "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
                        "example": "station",
                        "x-examples": [
                          "station"
                        ],
                        "pattern": "^[a-z][0-9a-zA-Z-]+$"
                      },
                      "meta": {
                        "type": "object",
                        "description": "Data for the resource as a key value pair",
                        "additionalProperties": {
                          "type": "string"
                        },
                        "x-examples": [
                          {
                            "power": "50w"
                          }
                        ]
                      },
                      "location": {
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
                  "label": "Server room",
                  "resource_type": "station",
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
                    "created": "1985-09-01T23:19:08.81Z",
                    "updated": "2000-06-12T15:29:47.719Z"
                  },
                  "resource_id": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
                  "slug": "server-room",
                  "meta": {
                    "power": "50w"
                  },
                  "resource": {
                    "resource_id": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
                    "label": "Server room",
                    "resource_type": "station",
                    "meta": {
                      "power": "50w"
                    },
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
                      "created": "1988-03-07T06:57:57.579Z",
                      "updated": "2004-01-03T20:29:06.105Z"
                    }
                  },
                  "created": "1965-07-23T14:14:37.122Z",
                  "updated": "2004-08-08T22:03:34.923Z"
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

<h3 id="fetchallresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for resources|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallresources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:resources|[allOf]|false|none|none|
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

## createResource

<a id="opIdcreateResource"></a>

`POST /resources`

*Creates a resource*

Creates a new resource

> Body parameter

```json
{
  "type": "object",
  "required": [
    "location",
    "resource_type",
    "label"
  ],
  "properties": {
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
    "label": {
      "type": "string",
      "description": "Label for the entity",
      "example": "primary"
    },
    "resource_type": {
      "type": "string",
      "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
      "example": "station",
      "x-examples": [
        "station"
      ],
      "pattern": "^[a-z][0-9a-zA-Z-]+$"
    },
    "meta": {
      "type": "object",
      "description": "Data for the resource as a key value pair",
      "additionalProperties": {
        "type": "string"
      },
      "x-examples": [
        {
          "power": "50w"
        }
      ]
    },
    "resource": {
      "type": "object",
      "required": [
        "resource_id"
      ],
      "properties": {
        "resource_id": {
          "type": "string",
          "description": "The identifier for the resource",
          "example": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
          "x-examples": [
            "3c730679-dcfa-4b5a-8f6e-b76fe80c6078"
          ],
          "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
        }
      }
    }
  }
}
```

<h3 id="createresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|body|object|true|none|
|» location_id|body|string|true|The identifier for the location|
|label|body|string|true|Label for the entity|
|resource_type|body|string|true|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|meta|body|object|false|Data for the resource as a key value pair|
|» **additionalProperties**|body|string|false|none|
|resource|body|object|false|none|
|» resource_id|body|string|true|The identifier for the resource|

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
                  "example": "https://api.nterprise.com/resources/b3179fc4-ae45-4ceb-bc62-6deacc921d06"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#resource",
          "x-nter-relation": "resources",
          "x-nter-model": "Resource",
          "x-nter-callable": true,
          "description": "Defines the properties for a resource",
          "required": [
            "label",
            "resource_type",
            "location"
          ],
          "properties": {
            "resource_id": {
              "type": "string",
              "description": "The identifier for the resource",
              "example": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
              "x-examples": [
                "3c730679-dcfa-4b5a-8f6e-b76fe80c6078"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "label": {
              "example": "Server room",
              "x-examples": [
                "Server room"
              ],
              "description": "Name of the resource"
            },
            "slug": {
              "example": "server-room",
              "x-examples": [
                "server-room"
              ],
              "description": "Auto-generated slug for the resource"
            },
            "resource_type": {
              "type": "string",
              "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
              "example": "station",
              "x-examples": [
                "station"
              ],
              "pattern": "^[a-z][0-9a-zA-Z-]+$"
            },
            "meta": {
              "type": "object",
              "description": "Data for the resource as a key value pair",
              "additionalProperties": {
                "type": "string"
              },
              "x-examples": [
                {
                  "power": "50w"
                }
              ]
            },
            "location": {
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
            },
            "resource": {
              "type": "object",
              "description": "The parent resource if this is a child resource",
              "properties": {
                "resource_id": {
                  "type": "string",
                  "description": "The identifier for the resource",
                  "example": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
                  "x-examples": [
                    "3c730679-dcfa-4b5a-8f6e-b76fe80c6078"
                  ],
                  "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                },
                "label": {
                  "example": "Server room",
                  "x-examples": [
                    "Server room"
                  ],
                  "description": "Name of the resource"
                },
                "resource_type": {
                  "type": "string",
                  "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
                  "example": "station",
                  "x-examples": [
                    "station"
                  ],
                  "pattern": "^[a-z][0-9a-zA-Z-]+$"
                },
                "meta": {
                  "type": "object",
                  "description": "Data for the resource as a key value pair",
                  "additionalProperties": {
                    "type": "string"
                  },
                  "x-examples": [
                    {
                      "power": "50w"
                    }
                  ]
                },
                "location": {
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
            "label": "Server room",
            "resource_type": "station",
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
              "created": "1985-09-01T23:19:08.81Z",
              "updated": "2000-06-12T15:29:47.719Z"
            },
            "resource_id": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
            "slug": "server-room",
            "meta": {
              "power": "50w"
            },
            "resource": {
              "resource_id": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
              "label": "Server room",
              "resource_type": "station",
              "meta": {
                "power": "50w"
              },
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
                "created": "1988-03-07T06:57:57.579Z",
                "updated": "2004-01-03T20:29:06.105Z"
              }
            },
            "created": "1965-07-23T14:14:37.122Z",
            "updated": "2004-08-08T22:03:34.923Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="createresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A resource response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="createresource-responseschema">Response Schema</h3>

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

## fetchResourceById

<a id="opIdfetchResourceById"></a>

`GET /resources/:resource_id`

*Fetches a resource by Id*

Fetch Resource

<h3 id="fetchresourcebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_id|path|string|true|Id for the resource|

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
                  "example": "https://api.nterprise.com/resources/b3179fc4-ae45-4ceb-bc62-6deacc921d06"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#resource",
          "x-nter-relation": "resources",
          "x-nter-model": "Resource",
          "x-nter-callable": true,
          "description": "Defines the properties for a resource",
          "required": [
            "label",
            "resource_type",
            "location"
          ],
          "properties": {
            "resource_id": {
              "type": "string",
              "description": "The identifier for the resource",
              "example": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
              "x-examples": [
                "3c730679-dcfa-4b5a-8f6e-b76fe80c6078"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "label": {
              "example": "Server room",
              "x-examples": [
                "Server room"
              ],
              "description": "Name of the resource"
            },
            "slug": {
              "example": "server-room",
              "x-examples": [
                "server-room"
              ],
              "description": "Auto-generated slug for the resource"
            },
            "resource_type": {
              "type": "string",
              "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
              "example": "station",
              "x-examples": [
                "station"
              ],
              "pattern": "^[a-z][0-9a-zA-Z-]+$"
            },
            "meta": {
              "type": "object",
              "description": "Data for the resource as a key value pair",
              "additionalProperties": {
                "type": "string"
              },
              "x-examples": [
                {
                  "power": "50w"
                }
              ]
            },
            "location": {
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
            },
            "resource": {
              "type": "object",
              "description": "The parent resource if this is a child resource",
              "properties": {
                "resource_id": {
                  "type": "string",
                  "description": "The identifier for the resource",
                  "example": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
                  "x-examples": [
                    "3c730679-dcfa-4b5a-8f6e-b76fe80c6078"
                  ],
                  "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                },
                "label": {
                  "example": "Server room",
                  "x-examples": [
                    "Server room"
                  ],
                  "description": "Name of the resource"
                },
                "resource_type": {
                  "type": "string",
                  "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
                  "example": "station",
                  "x-examples": [
                    "station"
                  ],
                  "pattern": "^[a-z][0-9a-zA-Z-]+$"
                },
                "meta": {
                  "type": "object",
                  "description": "Data for the resource as a key value pair",
                  "additionalProperties": {
                    "type": "string"
                  },
                  "x-examples": [
                    {
                      "power": "50w"
                    }
                  ]
                },
                "location": {
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
            "label": "Server room",
            "resource_type": "station",
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
              "created": "1985-09-01T23:19:08.81Z",
              "updated": "2000-06-12T15:29:47.719Z"
            },
            "resource_id": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
            "slug": "server-room",
            "meta": {
              "power": "50w"
            },
            "resource": {
              "resource_id": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
              "label": "Server room",
              "resource_type": "station",
              "meta": {
                "power": "50w"
              },
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
                "created": "1988-03-07T06:57:57.579Z",
                "updated": "2004-01-03T20:29:06.105Z"
              }
            },
            "created": "1965-07-23T14:14:37.122Z",
            "updated": "2004-08-08T22:03:34.923Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="fetchresourcebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A resource response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchresourcebyid-responseschema">Response Schema</h3>

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

## updateResource

<a id="opIdupdateResource"></a>

`PUT /resources/:resource_id`

*Updates a resource*

Updates a resource

> Body parameter

```json
{
  "type": "object",
  "required": [
    "location",
    "resource_type",
    "label"
  ],
  "properties": {
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
    "label": {
      "type": "string",
      "description": "Label for the entity",
      "example": "primary"
    },
    "resource_type": {
      "type": "string",
      "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
      "example": "station",
      "x-examples": [
        "station"
      ],
      "pattern": "^[a-z][0-9a-zA-Z-]+$"
    },
    "meta": {
      "type": "object",
      "description": "Data for the resource as a key value pair",
      "additionalProperties": {
        "type": "string"
      },
      "x-examples": [
        {
          "power": "50w"
        }
      ]
    },
    "resource": {
      "type": "object",
      "required": [
        "resource_id"
      ],
      "properties": {
        "resource_id": {
          "type": "string",
          "description": "The identifier for the resource",
          "example": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
          "x-examples": [
            "3c730679-dcfa-4b5a-8f6e-b76fe80c6078"
          ],
          "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
        }
      }
    }
  }
}
```

<h3 id="updateresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_id|path|string|true|Id for the resource|
|location|body|object|true|none|
|» location_id|body|string|true|The identifier for the location|
|label|body|string|true|Label for the entity|
|resource_type|body|string|true|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|meta|body|object|false|Data for the resource as a key value pair|
|» **additionalProperties**|body|string|false|none|
|resource|body|object|false|none|
|» resource_id|body|string|true|The identifier for the resource|

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
                  "example": "https://api.nterprise.com/resources/b3179fc4-ae45-4ceb-bc62-6deacc921d06"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#resource",
          "x-nter-relation": "resources",
          "x-nter-model": "Resource",
          "x-nter-callable": true,
          "description": "Defines the properties for a resource",
          "required": [
            "label",
            "resource_type",
            "location"
          ],
          "properties": {
            "resource_id": {
              "type": "string",
              "description": "The identifier for the resource",
              "example": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
              "x-examples": [
                "3c730679-dcfa-4b5a-8f6e-b76fe80c6078"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "label": {
              "example": "Server room",
              "x-examples": [
                "Server room"
              ],
              "description": "Name of the resource"
            },
            "slug": {
              "example": "server-room",
              "x-examples": [
                "server-room"
              ],
              "description": "Auto-generated slug for the resource"
            },
            "resource_type": {
              "type": "string",
              "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
              "example": "station",
              "x-examples": [
                "station"
              ],
              "pattern": "^[a-z][0-9a-zA-Z-]+$"
            },
            "meta": {
              "type": "object",
              "description": "Data for the resource as a key value pair",
              "additionalProperties": {
                "type": "string"
              },
              "x-examples": [
                {
                  "power": "50w"
                }
              ]
            },
            "location": {
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
            },
            "resource": {
              "type": "object",
              "description": "The parent resource if this is a child resource",
              "properties": {
                "resource_id": {
                  "type": "string",
                  "description": "The identifier for the resource",
                  "example": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
                  "x-examples": [
                    "3c730679-dcfa-4b5a-8f6e-b76fe80c6078"
                  ],
                  "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                },
                "label": {
                  "example": "Server room",
                  "x-examples": [
                    "Server room"
                  ],
                  "description": "Name of the resource"
                },
                "resource_type": {
                  "type": "string",
                  "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
                  "example": "station",
                  "x-examples": [
                    "station"
                  ],
                  "pattern": "^[a-z][0-9a-zA-Z-]+$"
                },
                "meta": {
                  "type": "object",
                  "description": "Data for the resource as a key value pair",
                  "additionalProperties": {
                    "type": "string"
                  },
                  "x-examples": [
                    {
                      "power": "50w"
                    }
                  ]
                },
                "location": {
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
            "label": "Server room",
            "resource_type": "station",
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
              "created": "1985-09-01T23:19:08.81Z",
              "updated": "2000-06-12T15:29:47.719Z"
            },
            "resource_id": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
            "slug": "server-room",
            "meta": {
              "power": "50w"
            },
            "resource": {
              "resource_id": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
              "label": "Server room",
              "resource_type": "station",
              "meta": {
                "power": "50w"
              },
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
                "created": "1988-03-07T06:57:57.579Z",
                "updated": "2004-01-03T20:29:06.105Z"
              }
            },
            "created": "1965-07-23T14:14:37.122Z",
            "updated": "2004-08-08T22:03:34.923Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="updateresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A resource response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="updateresource-responseschema">Response Schema</h3>

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

## deleteResource

<a id="opIddeleteResource"></a>

`DELETE /resources/:resource_id`

*Deletes a resource*

This will soft delete the resource

<h3 id="deleteresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_id|path|string|true|Id for the resource|

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

<h3 id="deleteresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Resource deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="deleteresource-responseschema">Response Schema</h3>

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

## fetchAllChildResources

<a id="opIdfetchAllChildResources"></a>

`GET /resources/:resource_id/sub-resources`

*Fetches A Page of child resources*

Fetch child resources

<h3 id="fetchallchildresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_id|path|string|true|Id for the resource|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|sort|query|string|false|Sort by field|
|filter[resource_type]|query|string|false|Filter where the resource type is this value|

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
        "nter:resources": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "object",
            "x-hal": true,
            "x-ui-hide": true,
            "properties": {
              "resource_id": {
                "type": "string",
                "description": "The identifier for the resource",
                "example": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
                "x-examples": [
                  "3c730679-dcfa-4b5a-8f6e-b76fe80c6078"
                ],
                "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
              },
              "label": {
                "example": "Server room",
                "x-examples": [
                  "Server room"
                ],
                "description": "Name of the resource"
              },
              "resource_type": {
                "type": "string",
                "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
                "example": "station",
                "x-examples": [
                  "station"
                ],
                "pattern": "^[a-z][0-9a-zA-Z-]+$"
              },
              "meta": {
                "type": "object",
                "description": "Data for the resource as a key value pair",
                "additionalProperties": {
                  "type": "string"
                },
                "x-examples": [
                  {
                    "power": "50w"
                  }
                ]
              },
              "location": {
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
              },
              "parent": {
                "type": "object",
                "description": "The parent resource if this is a child resource",
                "properties": {
                  "resource_id": {
                    "type": "string",
                    "description": "The identifier for the resource",
                    "example": "3c730679-dcfa-4b5a-8f6e-b76fe80c6078",
                    "x-examples": [
                      "3c730679-dcfa-4b5a-8f6e-b76fe80c6078"
                    ],
                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                  },
                  "label": {
                    "example": "Server room",
                    "x-examples": [
                      "Server room"
                    ],
                    "description": "Name of the resource"
                  },
                  "resource_type": {
                    "type": "string",
                    "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
                    "example": "station",
                    "x-examples": [
                      "station"
                    ],
                    "pattern": "^[a-z][0-9a-zA-Z-]+$"
                  },
                  "meta": {
                    "type": "object",
                    "description": "Data for the resource as a key value pair",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "x-examples": [
                      {
                        "power": "50w"
                      }
                    ]
                  },
                  "location": {
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
                }
              },
              "_links": {
                "type": "object",
                "properties": {
                  "self": {
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "href": {
                        "type": "string",
                        "example": "https://api.nterprise.com/resources/b3179fc4-ae45-4ceb-bc62-6deacc921d06"
                      }
                    }
                  },
                  "nter:parent-resource": {
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                      "href": {
                        "type": "string",
                        "example": "https://api.nterprise.com/resources/b3179fc4-ae45-4ceb-bc62-6deacc921d06"
                      }
                    }
                  }
                }
              }
            },
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

<h3 id="fetchallchildresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for resources|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallchildresources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:resources|[object]|false|none|none|
|»»» resource_id|string|false|none|The identifier for the resource|
|»»» label|any|false|none|Name of the resource|
|»»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»»» meta|object|false|none|Data for the resource as a key value pair|
|»»»» **additionalProperties**|string|false|none|none|
|»»» location|object|false|none|Defines the properties for a part unit|
|»»»» label|string|false|none|none|
|»»»» slug|string|false|none|none|
|»»»» location_id|string|false|none|The identifier for the location|
|»»»» location_type|string|true|none|The type of location|
|»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»» address|object|true|none|xNAL address for the location|
|»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»» locality|string|true|none|City / Town|
|»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»» thoroughfare|string|true|none|Street Address|
|»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»» parent|object|false|none|The parent resource if this is a child resource|
|»»»»» resource_id|string|false|none|The identifier for the resource|
|»»»»» label|any|false|none|Name of the resource|
|»»»»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»»»»» meta|object|false|none|Data for the resource as a key value pair|
|»»»»» location|object|false|none|Defines the properties for a part unit|
|»»»»»» label|string|false|none|none|
|»»»»»» slug|string|false|none|none|
|»»»»»» location_id|string|false|none|The identifier for the location|
|»»»»»» location_type|string|true|none|The type of location|
|»»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»»» address|object|true|none|xNAL address for the location|
|»»»»» _links|object|false|none|none|
|»»»»»» self|object|false|read-only|none|
|»»»»»»» href|string|false|none|none|
|»»»»»» nter:parent-resource|object|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|location_type|warehouse|
|location_type|facility|
|location_type|other|

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

## fetchAllResourceContexts

<a id="opIdfetchAllResourceContexts"></a>

`GET /resources/:resource_id/contexts`

*Fetches all the contexts at a resource*

Fetches all the contexts at a resource

<h3 id="fetchallresourcecontexts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_id|path|string|true|Id for the resource|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|sort|query|string|false|Sort by field|

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
        "nter:contexts": {
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
                        "example": "https://api.nterprise.com/contexts/ab87d29b-02ac-46f0-a487-dc84059907f0"
                      }
                    }
                  }
                }
              }
            },
            "allOf": [
              {
                "x-nter-relation": "contexts",
                "x-nter-model": "Context",
                "x-nter-callable": true,
                "type": "object",
                "properties": {
                  "context_id": {
                    "type": "string",
                    "description": "Identifier for the context",
                    "example": "MWMwMjIyNTgtYWZjZC00YmYyLWE1NzYtYWU1OWI3YTE1ZDczOlVOSVQ6NTMxMDI5MjQtNDUwYS00ZjFlLWI1ZDQtYTIwN2JjNTg2NTIxOjE1Njc2MDUwNTU5OTUuNDQ1NjYzNDM-",
                    "x-examples": [
                      "MWMwMjIyNTgtYWZjZC00YmYyLWE1NzYtYWU1OWI3YTE1ZDczOlVOSVQ6NTMxMDI5MjQtNDUwYS00ZjFlLWI1ZDQtYTIwN2JjNTg2NTIxOjE1Njc2MDUwNTU5OTUuNDQ1NjYzNDM-"
                    ],
                    "pattern": "^[A-Za-z0-9-_]+$"
                  },
                  "workflow": {
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
                  },
                  "current_step": {
                    "type": "string",
                    "description": "The current step to execute",
                    "readOnly": true,
                    "example": "assign-units",
                    "x-examples": [
                      "assign-units"
                    ]
                  },
                  "last_steps": {
                    "type": "array",
                    "description": "Ordered list of the executed steps",
                    "readOnly": true,
                    "items": {
                      "type": "object",
                      "description": "Details for the step",
                      "properties": {
                        "step_name": {
                          "type": "string",
                          "description": "Name for the step",
                          "readOnly": true,
                          "example": "choose-units",
                          "x-examples": [
                            "choose-units"
                          ]
                        },
                        "started_at": {
                          "type": "string",
                          "format": "date-time",
                          "description": "The date time the step started",
                          "readOnly": true
                        },
                        "ended_at": {
                          "type": "string",
                          "format": "date-time",
                          "description": "The date time the step ended",
                          "readOnly": true
                        },
                        "time_to_run": {
                          "type": "string",
                          "description": "The total time it took to run the step (with milliseconds)",
                          "readOnly": true,
                          "example": 1567605055995.677,
                          "x-examples": [
                            1567605055995.677
                          ]
                        },
                        "did_error": {
                          "type": "boolean",
                          "description": "Flag to test if the step errored",
                          "readOnly": true
                        },
                        "did_timeout": {
                          "type": "boolean",
                          "description": "Flag if the step timed-out",
                          "readOnly": true
                        }
                      }
                    }
                  },
                  "started_at": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The date time the context started",
                    "readOnly": true
                  },
                  "ended_at": {
                    "type": "string",
                    "format": "date-time",
                    "nullable": true,
                    "description": "The date time the context ended",
                    "readOnly": true
                  },
                  "time_to_run": {
                    "type": "string",
                    "description": "The total time it took to run the workflow (with milliseconds)",
                    "example": 1567605055995.677,
                    "x-examples": [
                      1567605055995.677
                    ],
                    "readOnly": true
                  },
                  "active": {
                    "type": "boolean",
                    "description": "Flag set if there are still steps which need to be executed",
                    "example": true,
                    "readOnly": true
                  },
                  "waiting_for_user": {
                    "type": "boolean",
                    "description": "Flag for when the user needs to complete the step",
                    "example": false
                  },
                  "data": {
                    "type": "object",
                    "description": "Data set for the context",
                    "additionalProperties": true,
                    "readOnly": true,
                    "x-examples": [
                      {
                        "can_foo_the_bar": true,
                        "available_units_by_part": {
                          "373b7cd6-3fde-4afe-a790-411d72e07c89": 42,
                          "8faaacaa-94d4-4f1f-a8eb-39353dbbf524": 84
                        }
                      }
                    ]
                  }
                },
                "example": {
                  "context_id": "MWMwMjIyNTgtYWZjZC00YmYyLWE1NzYtYWU1OWI3YTE1ZDczOlVOSVQ6NTMxMDI5MjQtNDUwYS00ZjFlLWI1ZDQtYTIwN2JjNTg2NTIxOjE1Njc2MDUwNTU5OTUuNDQ1NjYzNDM-",
                  "workflow": {
                    "steps": {
                      "run-ace": {
                        "step": "complete",
                        "label": "Complete",
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
                        "value": "true",
                        "lock": false,
                        "ignore": false
                      }
                    ],
                    "created": "1980-10-24T16:13:53.108Z",
                    "updated": "2004-05-16T12:58:40.748Z"
                  },
                  "current_step": "assign-units",
                  "last_steps": [
                    {
                      "step_name": "choose-units",
                      "started_at": "2004-03-26T20:11:11.319Z",
                      "ended_at": "1947-05-20T10:51:37.27Z",
                      "time_to_run": "1567605055995.677",
                      "did_error": true,
                      "did_timeout": false
                    },
                    {
                      "step_name": "choose-units",
                      "started_at": "1996-05-02T21:53:24.816Z",
                      "ended_at": "1957-05-12T04:23:30.642Z",
                      "time_to_run": "1567605055995.677",
                      "did_error": true,
                      "did_timeout": false
                    },
                    {
                      "step_name": "choose-units",
                      "started_at": "1972-09-07T03:05:38.229Z",
                      "ended_at": "1976-02-21T06:04:22.606Z",
                      "time_to_run": "1567605055995.677",
                      "did_error": true,
                      "did_timeout": false
                    },
                    {
                      "step_name": "choose-units",
                      "started_at": "1944-11-06T12:27:38.328Z",
                      "ended_at": "1973-07-18T17:26:33.254Z",
                      "time_to_run": "1567605055995.677",
                      "did_error": true,
                      "did_timeout": false
                    },
                    {
                      "step_name": "choose-units",
                      "started_at": "1990-02-05T22:18:57.355Z",
                      "ended_at": "2007-06-07T06:03:28.691Z",
                      "time_to_run": "1567605055995.677",
                      "did_error": false,
                      "did_timeout": true
                    }
                  ],
                  "started_at": "1983-12-17T14:12:56.411Z",
                  "ended_at": "1946-09-13T16:51:37.652Z",
                  "time_to_run": "1567605055995.677",
                  "active": true,
                  "waiting_for_user": false,
                  "data": {
                    "can_foo_the_bar": true,
                    "available_units_by_part": {
                      "373b7cd6-3fde-4afe-a790-411d72e07c89": 42,
                      "8faaacaa-94d4-4f1f-a8eb-39353dbbf524": 84
                    }
                  }
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

<h3 id="fetchallresourcecontexts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for contexts|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallresourcecontexts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:contexts|[allOf]|false|none|none|
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

<h2 id="tocSresource">Resource</h2>

<a id="schemaresource"></a>

```yaml
label: Server room
resource_type: station
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
  created: '1985-09-01T23:19:08.81Z'
  updated: '2000-06-12T15:29:47.719Z'
resource_id: 3c730679-dcfa-4b5a-8f6e-b76fe80c6078
slug: server-room
meta:
  power: 50w
resource:
  resource_id: 3c730679-dcfa-4b5a-8f6e-b76fe80c6078
  label: Server room
  resource_type: station
  meta:
    power: 50w
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
    created: '1988-03-07T06:57:57.579Z'
    updated: '2004-01-03T20:29:06.105Z'
created: '1965-07-23T14:14:37.122Z'
updated: '2004-08-08T22:03:34.923Z'

```

*Defines the properties for a resource*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource_id|string|false|none|The identifier for the resource|
|label|any|true|none|Name of the resource|
|slug|any|false|none|Auto-generated slug for the resource|
|resource_type|string|true|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|meta|object|false|none|Data for the resource as a key value pair|
|» **additionalProperties**|string|false|none|none|
|location|object|true|none|Defines the properties for a part unit|
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
|» resource|object|false|none|The parent resource if this is a child resource|
|»» resource_id|string|false|none|The identifier for the resource|
|»» label|any|false|none|Name of the resource|
|»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»» meta|object|false|none|Data for the resource as a key value pair|
|»»» **additionalProperties**|string|false|none|none|
|»» location|object|false|none|Defines the properties for a part unit|
|»»» label|string|false|none|none|
|»»» slug|string|false|none|none|
|»»» location_id|string|false|none|The identifier for the location|
|»»» location_type|string|true|none|The type of location|
|»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»» address|object|true|none|xNAL address for the location|
|»»»» country|string|true|none|Three Letter ISO country code|
|»»»» administrative_area|string|true|none|State / Province / Region|
|»»»» sub_administrative_area|string|false|none|County / District|
|»»»» locality|string|true|none|City / Town|
|»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»» thoroughfare|string|true|none|Street Address|
|»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|

#### Enumerated Values

|Property|Value|
|---|---|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|location_type|warehouse|
|location_type|facility|
|location_type|other|

