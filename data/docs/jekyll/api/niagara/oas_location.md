---
layout: page
parent: Niagara API
nav_order: 5
title: Locations
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="locations">Locations v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

<h1 id="locations-location">Location</h1>

## fetchAllFacilities

<a id="opIdfetchAllFacilities"></a>

`GET /facilities`

*Fetches A Page of facilities*

Fetch facilities

<h3 id="fetchallfacilities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|sort|query|string|false|Sort by field|
|filter[administrative_area]|query|string|false|Filter where the administrative area (state or province) contains this value|
|filter[country]|query|string|false|Filter where the country contains this value|
|filter[postal_code]|query|string|false|Filter where the postal code contains this value|
|filter[thoroughfare]|query|string|false|Filter where the thoroughfare contains this value|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|country|
|sort|-country|
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
        "nter:locations": {
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
                        "example": "https://api.nterprise.com/locations/1e39c8d4-b2a4-45c2-93ac-de3130a6b75f"
                      }
                    }
                  }
                }
              }
            },
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

<h3 id="fetchallfacilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for locations|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallfacilities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:locations|[allOf]|false|none|none|
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

## fetchAllLocations

<a id="opIdfetchAllLocations"></a>

`GET /locations`

*Fetches A Page of locations*

Fetch Location

<h3 id="fetchalllocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|sort|query|string|false|Sort by field|
|filter[type]|query|string|false|Filter where the location type is this value|
|filter[administrative_area]|query|string|false|Filter where the administrative area (state or province) contains this value|
|filter[country]|query|string|false|Filter where the country contains this value|
|filter[postal_code]|query|string|false|Filter where the postal code contains this value|
|filter[thoroughfare]|query|string|false|Filter where the thoroughfare contains this value|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|country|
|sort|-country|
|sort|created|
|sort|-created|
|sort|updated|
|sort|-updated|
|filter[type]|warehouse|
|filter[type]|facility|
|filter[type]|other|

> Example responses

> 200 Response

```json
{
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:locations": {
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
                        "example": "https://api.nterprise.com/locations/1e39c8d4-b2a4-45c2-93ac-de3130a6b75f"
                      }
                    }
                  }
                }
              }
            },
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

<h3 id="fetchalllocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for locations|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchalllocations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:locations|[allOf]|false|none|none|
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

## createLocation

<a id="opIdcreateLocation"></a>

`POST /locations`

*Creates a location*

Creates a new location

> Body parameter

```json
{
  "type": "object",
  "required": [
    "location_type",
    "address"
  ],
  "properties": {
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
    },
    "label": {
      "type": "string",
      "description": "Label for the entity",
      "example": "primary"
    }
  }
}
```

<h3 id="createlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_type|body|string|true|The type of location|
|address|body|object|true|xNAL address for the location|
|» country|body|string|true|Three Letter ISO country code|
|» administrative_area|body|string|true|State / Province / Region|
|» sub_administrative_area|body|string|false|County / District|
|» locality|body|string|true|City / Town|
|» postal_code|body|string|true|Postal Code / Zip Code|
|» thoroughfare|body|string|true|Street Address|
|» premise|body|string|false|Apartment / Suite / Box number etc|
|» sub_premise|body|string|false|Floor # / Room # / Building label etc|
|label|body|string|false|Label for the entity|

#### Enumerated Values

|Parameter|Value|
|---|---|
|location_type|warehouse|
|location_type|facility|
|location_type|other|

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
                  "example": "https://api.nterprise.com/locations/1e39c8d4-b2a4-45c2-93ac-de3130a6b75f"
                }
              }
            }
          }
        }
      },
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
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="createlocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A location response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="createlocation-responseschema">Response Schema</h3>

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

## fetchLocationById

<a id="opIdfetchLocationById"></a>

`GET /locations/:location_id`

*Fetches a location by Id*

Fetch Location

<h3 id="fetchlocationbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|

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
                  "example": "https://api.nterprise.com/locations/1e39c8d4-b2a4-45c2-93ac-de3130a6b75f"
                }
              }
            }
          }
        }
      },
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
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="fetchlocationbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A location response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchlocationbyid-responseschema">Response Schema</h3>

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

## updateLocation

<a id="opIdupdateLocation"></a>

`PUT /locations/:location_id`

*Updates a location*

Updates a location

> Body parameter

```json
{
  "type": "object",
  "required": [
    "location_type",
    "address"
  ],
  "properties": {
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
    },
    "label": {
      "type": "string",
      "description": "Label for the entity",
      "example": "primary"
    }
  }
}
```

<h3 id="updatelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|
|location_type|body|string|true|The type of location|
|address|body|object|true|xNAL address for the location|
|» country|body|string|true|Three Letter ISO country code|
|» administrative_area|body|string|true|State / Province / Region|
|» sub_administrative_area|body|string|false|County / District|
|» locality|body|string|true|City / Town|
|» postal_code|body|string|true|Postal Code / Zip Code|
|» thoroughfare|body|string|true|Street Address|
|» premise|body|string|false|Apartment / Suite / Box number etc|
|» sub_premise|body|string|false|Floor # / Room # / Building label etc|
|label|body|string|false|Label for the entity|

#### Enumerated Values

|Parameter|Value|
|---|---|
|location_type|warehouse|
|location_type|facility|
|location_type|other|

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
                  "example": "https://api.nterprise.com/locations/1e39c8d4-b2a4-45c2-93ac-de3130a6b75f"
                }
              }
            }
          }
        }
      },
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
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="updatelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A location response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="updatelocation-responseschema">Response Schema</h3>

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

## deleteLocation

<a id="opIddeleteLocation"></a>

`DELETE /locations/:location_id`

*Deletes a location*

This will soft delete the location

<h3 id="deletelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|

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

<h3 id="deletelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Location deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="deletelocation-responseschema">Response Schema</h3>

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

## fetchAllResources

<a id="opIdfetchAllResources"></a>

`GET /locations/:location_id/resources`

*Fetches A Page of resources for the location*

Fetch location resources

<h3 id="fetchallresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|
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

## fetchResourceById

<a id="opIdfetchResourceById"></a>

`GET /locations/:location_id/resources/:resource_id`

*Fetches a location resource by Id*

Fetch location Resource

<h3 id="fetchresourcebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|
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

## fetchAllWarehouses

<a id="opIdfetchAllWarehouses"></a>

`GET /ware-houses`

*Fetches A Page of warehouses*

Fetch warehouses

<h3 id="fetchallwarehouses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|sort|query|string|false|Sort by field|
|filter[administrative_area]|query|string|false|Filter where the administrative area (state or province) contains this value|
|filter[country]|query|string|false|Filter where the country contains this value|
|filter[postal_code]|query|string|false|Filter where the postal code contains this value|
|filter[thoroughfare]|query|string|false|Filter where the thoroughfare contains this value|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|country|
|sort|-country|
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
        "nter:locations": {
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
                        "example": "https://api.nterprise.com/locations/1e39c8d4-b2a4-45c2-93ac-de3130a6b75f"
                      }
                    }
                  }
                }
              }
            },
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

<h3 id="fetchallwarehouses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for locations|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallwarehouses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:locations|[allOf]|false|none|none|
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

<h2 id="tocSlocation">Location</h2>

<a id="schemalocation"></a>

```yaml
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
created: '2011-12-22T07:39:56.809Z'
updated: '1958-10-08T23:35:29.923Z'

```

*Defines the properties for a part unit*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|none|
|slug|string|false|none|none|
|location_id|string|false|none|The identifier for the location|
|location_type|string|true|none|The type of location|
|formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|address|object|true|none|xNAL address for the location|
|» country|string|true|none|Three Letter ISO country code|
|» administrative_area|string|true|none|State / Province / Region|
|» sub_administrative_area|string|false|none|County / District|
|» locality|string|true|none|City / Town|
|» postal_code|string|true|none|Postal Code / Zip Code|
|» thoroughfare|string|true|none|Street Address|
|» premise|string|false|none|Apartment / Suite / Box number etc|
|» sub_premise|string|false|none|Floor # / Room # / Building label etc|

#### Enumerated Values

|Property|Value|
|---|---|
|location_type|warehouse|
|location_type|facility|
|location_type|other|

