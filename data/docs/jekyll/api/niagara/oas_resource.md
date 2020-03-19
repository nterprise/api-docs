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

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:resources": {
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
                      "href": "https://api.nterprise.com/resources/QEvVrVMMwVcJ6om"
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
              "resource_id": {
                "type": "string",
                "description": "The identifier for the resource",
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
              "resource_type": {
                "type": "string",
                "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
                "pattern": "^[a-z][0-9a-zA-Z-]+$"
              },
              "meta": {
                "type": "object",
                "description": "Data for the resource as a key value pair",
                "additionalProperties": {
                  "type": "string"
                },
                "propertyNames": {
                  "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
                }
              },
              "location": {
                "type": "object",
                "description": "Defines the properties for a part unit",
                "additionalProperties": false,
                "required": [
                  "label",
                  "entity_id",
                  "entity_type",
                  "created",
                  "updated",
                  "location_type",
                  "address"
                ],
                "properties": {
                  "location_id": {
                    "description": "The identifier for the location",
                    "type": "string",
                    "readOnly": true,
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_id": {
                    "x-no-api-doc": true,
                    "type": "string",
                    "description": "Customer identifier",
                    "readOnly": true,
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_type": {
                    "x-no-api-doc": true,
                    "enum": [
                      "LOC"
                    ]
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
                  "location_type": {
                    "type": "string",
                    "description": "The type of location",
                    "enum": [
                      "warehouse",
                      "facility",
                      "other"
                    ]
                  },
                  "formatted_address": {
                    "type": "string",
                    "readOnly": true,
                    "description": "Address formatted for the where region the location exists in"
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
                        "enum": [
                          "ABW",
                          "AFG",
                          "AGO",
                          "AIA",
                          "ALA",
                          "ALB",
                          "AND",
                          "ARE",
                          "ARG",
                          "ARM",
                          "ASM",
                          "ATA",
                          "ATF",
                          "ATG",
                          "AUS",
                          "AUT",
                          "AZE",
                          "BDI",
                          "BEL",
                          "BEN",
                          "BES",
                          "BFA",
                          "BGD",
                          "BGR",
                          "BHR",
                          "BHS",
                          "BIH",
                          "BLM",
                          "BLR",
                          "BLZ",
                          "BMU",
                          "BOL",
                          "BRA",
                          "BRB",
                          "BRN",
                          "BTN",
                          "BVT",
                          "BWA",
                          "CAF",
                          "CAN",
                          "CCK",
                          "CHE",
                          "CHL",
                          "CHN",
                          "CIV",
                          "CMR",
                          "COD",
                          "COG",
                          "COK",
                          "COL",
                          "COM",
                          "CPV",
                          "CRI",
                          "CUB",
                          "CUW",
                          "CXR",
                          "CYM",
                          "CYP",
                          "CZE",
                          "DEU",
                          "DJI",
                          "DMA",
                          "DNK",
                          "DOM",
                          "DZA",
                          "ECU",
                          "EGY",
                          "ERI",
                          "ESH",
                          "ESP",
                          "EST",
                          "ETH",
                          "FIN",
                          "FJI",
                          "FLK",
                          "FRA",
                          "FRO",
                          "FSM",
                          "GAB",
                          "GBR",
                          "GEO",
                          "GGY",
                          "GHA",
                          "GIB",
                          "GIN",
                          "GLP",
                          "GMB",
                          "GNB",
                          "GNQ",
                          "GRC",
                          "GRD",
                          "GRL",
                          "GTM",
                          "GUF",
                          "GUM",
                          "GUY",
                          "HKG",
                          "HMD",
                          "HND",
                          "HRV",
                          "HTI",
                          "HUN",
                          "IDN",
                          "IMN",
                          "IND",
                          "IOT",
                          "IRL",
                          "IRN",
                          "IRQ",
                          "ISL",
                          "ISR",
                          "ITA",
                          "JAM",
                          "JEY",
                          "JOR",
                          "JPN",
                          "KAZ",
                          "KEN",
                          "KGZ",
                          "KHM",
                          "KIR",
                          "KNA",
                          "KOR",
                          "KWT",
                          "LAO",
                          "LBN",
                          "LBR",
                          "LBY",
                          "LCA",
                          "LIE",
                          "LKA",
                          "LSO",
                          "LTU",
                          "LUX",
                          "LVA",
                          "MAC",
                          "MAF",
                          "MAR",
                          "MCO",
                          "MDA",
                          "MDG",
                          "MDV",
                          "MEX",
                          "MHL",
                          "MKD",
                          "MLI",
                          "MLT",
                          "MMR",
                          "MNE",
                          "MNG",
                          "MNP",
                          "MOZ",
                          "MRT",
                          "MSR",
                          "MTQ",
                          "MUS",
                          "MWI",
                          "MYS",
                          "MYT",
                          "NAM",
                          "NCL",
                          "NER",
                          "NFK",
                          "NGA",
                          "NIC",
                          "NIU",
                          "NLD",
                          "NOR",
                          "NPL",
                          "NRU",
                          "NZL",
                          "OMN",
                          "PAK",
                          "PAN",
                          "PCN",
                          "PER",
                          "PHL",
                          "PLW",
                          "PNG",
                          "POL",
                          "PRI",
                          "PRK",
                          "PRT",
                          "PRY",
                          "PSE",
                          "PYF",
                          "QAT",
                          "REU",
                          "ROU",
                          "RUS",
                          "RWA",
                          "SAU",
                          "SDN",
                          "SEN",
                          "SGP",
                          "SGS",
                          "SHN",
                          "SJM",
                          "SLB",
                          "SLE",
                          "SLV",
                          "SMR",
                          "SOM",
                          "SPM",
                          "SRB",
                          "SSD",
                          "STP",
                          "SUR",
                          "SVK",
                          "SVN",
                          "SWE",
                          "SWZ",
                          "SXM",
                          "SYC",
                          "SYR",
                          "TCA",
                          "TCD",
                          "TGO",
                          "THA",
                          "TJK",
                          "TKL",
                          "TKM",
                          "TLS",
                          "TON",
                          "TTO",
                          "TUN",
                          "TUR",
                          "TUV",
                          "TWN",
                          "TZA",
                          "UGA",
                          "UKR",
                          "UMI",
                          "URY",
                          "USA",
                          "UZB",
                          "VAT",
                          "VCT",
                          "VEN",
                          "VGB",
                          "VIR",
                          "VNM",
                          "VUT",
                          "WLF",
                          "WSM",
                          "YEM",
                          "ZAF",
                          "ZMB",
                          "ZWE"
                        ]
                      },
                      "administrative_area": {
                        "type": "string",
                        "description": "State / Province / Region"
                      },
                      "sub_administrative_area": {
                        "type": "string",
                        "description": "County / District"
                      },
                      "locality": {
                        "type": "string",
                        "description": "City / Town"
                      },
                      "postal_code": {
                        "type": "string",
                        "description": "Postal Code / Zip Code"
                      },
                      "thoroughfare": {
                        "type": "string",
                        "description": "Street Address"
                      },
                      "premise": {
                        "type": "string",
                        "description": "Apartment / Suite / Box number etc"
                      },
                      "sub_premise": {
                        "type": "string",
                        "description": "Floor # / Room # / Building label etc"
                      }
                    }
                  }
                }
              },
              "resource": {
                "type": "object",
                "description": "The parent resource if this is a child resource",
                "properties": {
                  "resource_id": {
                    "type": "string",
                    "description": "The identifier for the resource",
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_id": {
                    "x-no-api-doc": true,
                    "type": "string",
                    "description": "Customer identifier",
                    "readOnly": true,
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_type": {
                    "x-no-api-doc": true,
                    "enum": [
                      "RES"
                    ]
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
                  "resource_type": {
                    "type": "string",
                    "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
                    "pattern": "^[a-z][0-9a-zA-Z-]+$"
                  },
                  "meta": {
                    "type": "object",
                    "description": "Data for the resource as a key value pair",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "propertyNames": {
                      "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
                    }
                  },
                  "location": {
                    "type": "object",
                    "description": "Defines the properties for a part unit",
                    "additionalProperties": false,
                    "required": [
                      "label",
                      "entity_id",
                      "entity_type",
                      "created",
                      "updated",
                      "location_type",
                      "address"
                    ],
                    "properties": {
                      "location_id": {
                        "description": "The identifier for the location",
                        "type": "string",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_id": {
                        "x-no-api-doc": true,
                        "type": "string",
                        "description": "Customer identifier",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_type": {
                        "x-no-api-doc": true,
                        "enum": [
                          "LOC"
                        ]
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
                      "location_type": {
                        "type": "string",
                        "description": "The type of location",
                        "enum": [
                          "warehouse",
                          "facility",
                          "other"
                        ]
                      },
                      "formatted_address": {
                        "type": "string",
                        "readOnly": true,
                        "description": "Address formatted for the where region the location exists in"
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
                            "enum": [
                              "ABW",
                              "AFG",
                              "AGO",
                              "AIA",
                              "ALA",
                              "ALB",
                              "AND",
                              "ARE",
                              "ARG",
                              "ARM",
                              "ASM",
                              "ATA",
                              "ATF",
                              "ATG",
                              "AUS",
                              "AUT",
                              "AZE",
                              "BDI",
                              "BEL",
                              "BEN",
                              "BES",
                              "BFA",
                              "BGD",
                              "BGR",
                              "BHR",
                              "BHS",
                              "BIH",
                              "BLM",
                              "BLR",
                              "BLZ",
                              "BMU",
                              "BOL",
                              "BRA",
                              "BRB",
                              "BRN",
                              "BTN",
                              "BVT",
                              "BWA",
                              "CAF",
                              "CAN",
                              "CCK",
                              "CHE",
                              "CHL",
                              "CHN",
                              "CIV",
                              "CMR",
                              "COD",
                              "COG",
                              "COK",
                              "COL",
                              "COM",
                              "CPV",
                              "CRI",
                              "CUB",
                              "CUW",
                              "CXR",
                              "CYM",
                              "CYP",
                              "CZE",
                              "DEU",
                              "DJI",
                              "DMA",
                              "DNK",
                              "DOM",
                              "DZA",
                              "ECU",
                              "EGY",
                              "ERI",
                              "ESH",
                              "ESP",
                              "EST",
                              "ETH",
                              "FIN",
                              "FJI",
                              "FLK",
                              "FRA",
                              "FRO",
                              "FSM",
                              "GAB",
                              "GBR",
                              "GEO",
                              "GGY",
                              "GHA",
                              "GIB",
                              "GIN",
                              "GLP",
                              "GMB",
                              "GNB",
                              "GNQ",
                              "GRC",
                              "GRD",
                              "GRL",
                              "GTM",
                              "GUF",
                              "GUM",
                              "GUY",
                              "HKG",
                              "HMD",
                              "HND",
                              "HRV",
                              "HTI",
                              "HUN",
                              "IDN",
                              "IMN",
                              "IND",
                              "IOT",
                              "IRL",
                              "IRN",
                              "IRQ",
                              "ISL",
                              "ISR",
                              "ITA",
                              "JAM",
                              "JEY",
                              "JOR",
                              "JPN",
                              "KAZ",
                              "KEN",
                              "KGZ",
                              "KHM",
                              "KIR",
                              "KNA",
                              "KOR",
                              "KWT",
                              "LAO",
                              "LBN",
                              "LBR",
                              "LBY",
                              "LCA",
                              "LIE",
                              "LKA",
                              "LSO",
                              "LTU",
                              "LUX",
                              "LVA",
                              "MAC",
                              "MAF",
                              "MAR",
                              "MCO",
                              "MDA",
                              "MDG",
                              "MDV",
                              "MEX",
                              "MHL",
                              "MKD",
                              "MLI",
                              "MLT",
                              "MMR",
                              "MNE",
                              "MNG",
                              "MNP",
                              "MOZ",
                              "MRT",
                              "MSR",
                              "MTQ",
                              "MUS",
                              "MWI",
                              "MYS",
                              "MYT",
                              "NAM",
                              "NCL",
                              "NER",
                              "NFK",
                              "NGA",
                              "NIC",
                              "NIU",
                              "NLD",
                              "NOR",
                              "NPL",
                              "NRU",
                              "NZL",
                              "OMN",
                              "PAK",
                              "PAN",
                              "PCN",
                              "PER",
                              "PHL",
                              "PLW",
                              "PNG",
                              "POL",
                              "PRI",
                              "PRK",
                              "PRT",
                              "PRY",
                              "PSE",
                              "PYF",
                              "QAT",
                              "REU",
                              "ROU",
                              "RUS",
                              "RWA",
                              "SAU",
                              "SDN",
                              "SEN",
                              "SGP",
                              "SGS",
                              "SHN",
                              "SJM",
                              "SLB",
                              "SLE",
                              "SLV",
                              "SMR",
                              "SOM",
                              "SPM",
                              "SRB",
                              "SSD",
                              "STP",
                              "SUR",
                              "SVK",
                              "SVN",
                              "SWE",
                              "SWZ",
                              "SXM",
                              "SYC",
                              "SYR",
                              "TCA",
                              "TCD",
                              "TGO",
                              "THA",
                              "TJK",
                              "TKL",
                              "TKM",
                              "TLS",
                              "TON",
                              "TTO",
                              "TUN",
                              "TUR",
                              "TUV",
                              "TWN",
                              "TZA",
                              "UGA",
                              "UKR",
                              "UMI",
                              "URY",
                              "USA",
                              "UZB",
                              "VAT",
                              "VCT",
                              "VEN",
                              "VGB",
                              "VIR",
                              "VNM",
                              "VUT",
                              "WLF",
                              "WSM",
                              "YEM",
                              "ZAF",
                              "ZMB",
                              "ZWE"
                            ]
                          },
                          "administrative_area": {
                            "type": "string",
                            "description": "State / Province / Region"
                          },
                          "sub_administrative_area": {
                            "type": "string",
                            "description": "County / District"
                          },
                          "locality": {
                            "type": "string",
                            "description": "City / Town"
                          },
                          "postal_code": {
                            "type": "string",
                            "description": "Postal Code / Zip Code"
                          },
                          "thoroughfare": {
                            "type": "string",
                            "description": "Street Address"
                          },
                          "premise": {
                            "type": "string",
                            "description": "Apartment / Suite / Box number etc"
                          },
                          "sub_premise": {
                            "type": "string",
                            "description": "Floor # / Room # / Building label etc"
                          }
                        }
                      }
                    }
                  }
                }
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
            "href": "https://api.nterprise.com/resources"
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
            "href": "https://api.nterprise.com/resources?offset=QVBrO2wm13iEyl&limit=100"
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
|»» nter:resources|[object]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» resource_id|string|false|none|The identifier for the resource|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»»»» meta|object|false|none|Data for the resource as a key value pair|
|»»»»» **additionalProperties**|string|false|none|none|
|»»»» location|object|false|none|Defines the properties for a part unit|
|»»»»» location_id|string|false|read-only|The identifier for the location|
|»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»» entity_type|string|true|none|none|
|»»»»» label|string|true|none|Label for the entity|
|»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»» location_type|string|true|none|The type of location|
|»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»» address|object|true|none|xNAL address for the location|
|»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»» locality|string|true|none|City / Town|
|»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»»» resource|object|false|none|The parent resource if this is a child resource|
|»»»»»» resource_id|string|false|none|The identifier for the resource|
|»»»»»» entity_id|string|false|read-only|Customer identifier|
|»»»»»» entity_type|string|false|none|none|
|»»»»»» label|string|false|none|Label for the entity|
|»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»»»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»»»»»» meta|object|false|none|Data for the resource as a key value pair|
|»»»»»»» **additionalProperties**|string|false|none|none|
|»»»»»» location|object|false|none|Defines the properties for a part unit|
|»»»»»»» location_id|string|false|read-only|The identifier for the location|
|»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»» entity_type|string|true|none|none|
|»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»» location_type|string|true|none|The type of location|
|»»»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»»»» address|object|true|none|xNAL address for the location|
|»»»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»»»» locality|string|true|none|City / Town|
|»»»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»»»»» _links|object|false|none|none|
|»»»»»»»» self|object|false|none|none|
|»»»»»»»»» href|string(uri)|false|none|none|
|»»»»»»»» next|object|false|none|none|
|»»»»»»»»» href|string(uri)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|
|entity_type|RES|
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|

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
          "description": "The identifier for the location",
          "type": "string",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        }
      }
    },
    "label": {
      "type": "string",
      "description": "Label for the entity"
    },
    "resource_type": {
      "type": "string",
      "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
      "pattern": "^[a-z][0-9a-zA-Z-]+$"
    },
    "meta": {
      "type": "object",
      "description": "Data for the resource as a key value pair",
      "additionalProperties": {
        "type": "string"
      },
      "propertyNames": {
        "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
      }
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
          "pattern": "^[0-9a-zA-Z-_]+$"
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
  "properties": {
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "example": {
            "href": "https://api.nterprise.com/resources/QEvVrVMMwVcJ6om"
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
    "resource_id": {
      "type": "string",
      "description": "The identifier for the resource",
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
    "resource_type": {
      "type": "string",
      "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
      "pattern": "^[a-z][0-9a-zA-Z-]+$"
    },
    "meta": {
      "type": "object",
      "description": "Data for the resource as a key value pair",
      "additionalProperties": {
        "type": "string"
      },
      "propertyNames": {
        "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
      }
    },
    "location": {
      "type": "object",
      "description": "Defines the properties for a part unit",
      "additionalProperties": false,
      "required": [
        "label",
        "entity_id",
        "entity_type",
        "created",
        "updated",
        "location_type",
        "address"
      ],
      "properties": {
        "location_id": {
          "description": "The identifier for the location",
          "type": "string",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_id": {
          "x-no-api-doc": true,
          "type": "string",
          "description": "Customer identifier",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_type": {
          "x-no-api-doc": true,
          "enum": [
            "LOC"
          ]
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
        "location_type": {
          "type": "string",
          "description": "The type of location",
          "enum": [
            "warehouse",
            "facility",
            "other"
          ]
        },
        "formatted_address": {
          "type": "string",
          "readOnly": true,
          "description": "Address formatted for the where region the location exists in"
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
              "enum": [
                "ABW",
                "AFG",
                "AGO",
                "AIA",
                "ALA",
                "ALB",
                "AND",
                "ARE",
                "ARG",
                "ARM",
                "ASM",
                "ATA",
                "ATF",
                "ATG",
                "AUS",
                "AUT",
                "AZE",
                "BDI",
                "BEL",
                "BEN",
                "BES",
                "BFA",
                "BGD",
                "BGR",
                "BHR",
                "BHS",
                "BIH",
                "BLM",
                "BLR",
                "BLZ",
                "BMU",
                "BOL",
                "BRA",
                "BRB",
                "BRN",
                "BTN",
                "BVT",
                "BWA",
                "CAF",
                "CAN",
                "CCK",
                "CHE",
                "CHL",
                "CHN",
                "CIV",
                "CMR",
                "COD",
                "COG",
                "COK",
                "COL",
                "COM",
                "CPV",
                "CRI",
                "CUB",
                "CUW",
                "CXR",
                "CYM",
                "CYP",
                "CZE",
                "DEU",
                "DJI",
                "DMA",
                "DNK",
                "DOM",
                "DZA",
                "ECU",
                "EGY",
                "ERI",
                "ESH",
                "ESP",
                "EST",
                "ETH",
                "FIN",
                "FJI",
                "FLK",
                "FRA",
                "FRO",
                "FSM",
                "GAB",
                "GBR",
                "GEO",
                "GGY",
                "GHA",
                "GIB",
                "GIN",
                "GLP",
                "GMB",
                "GNB",
                "GNQ",
                "GRC",
                "GRD",
                "GRL",
                "GTM",
                "GUF",
                "GUM",
                "GUY",
                "HKG",
                "HMD",
                "HND",
                "HRV",
                "HTI",
                "HUN",
                "IDN",
                "IMN",
                "IND",
                "IOT",
                "IRL",
                "IRN",
                "IRQ",
                "ISL",
                "ISR",
                "ITA",
                "JAM",
                "JEY",
                "JOR",
                "JPN",
                "KAZ",
                "KEN",
                "KGZ",
                "KHM",
                "KIR",
                "KNA",
                "KOR",
                "KWT",
                "LAO",
                "LBN",
                "LBR",
                "LBY",
                "LCA",
                "LIE",
                "LKA",
                "LSO",
                "LTU",
                "LUX",
                "LVA",
                "MAC",
                "MAF",
                "MAR",
                "MCO",
                "MDA",
                "MDG",
                "MDV",
                "MEX",
                "MHL",
                "MKD",
                "MLI",
                "MLT",
                "MMR",
                "MNE",
                "MNG",
                "MNP",
                "MOZ",
                "MRT",
                "MSR",
                "MTQ",
                "MUS",
                "MWI",
                "MYS",
                "MYT",
                "NAM",
                "NCL",
                "NER",
                "NFK",
                "NGA",
                "NIC",
                "NIU",
                "NLD",
                "NOR",
                "NPL",
                "NRU",
                "NZL",
                "OMN",
                "PAK",
                "PAN",
                "PCN",
                "PER",
                "PHL",
                "PLW",
                "PNG",
                "POL",
                "PRI",
                "PRK",
                "PRT",
                "PRY",
                "PSE",
                "PYF",
                "QAT",
                "REU",
                "ROU",
                "RUS",
                "RWA",
                "SAU",
                "SDN",
                "SEN",
                "SGP",
                "SGS",
                "SHN",
                "SJM",
                "SLB",
                "SLE",
                "SLV",
                "SMR",
                "SOM",
                "SPM",
                "SRB",
                "SSD",
                "STP",
                "SUR",
                "SVK",
                "SVN",
                "SWE",
                "SWZ",
                "SXM",
                "SYC",
                "SYR",
                "TCA",
                "TCD",
                "TGO",
                "THA",
                "TJK",
                "TKL",
                "TKM",
                "TLS",
                "TON",
                "TTO",
                "TUN",
                "TUR",
                "TUV",
                "TWN",
                "TZA",
                "UGA",
                "UKR",
                "UMI",
                "URY",
                "USA",
                "UZB",
                "VAT",
                "VCT",
                "VEN",
                "VGB",
                "VIR",
                "VNM",
                "VUT",
                "WLF",
                "WSM",
                "YEM",
                "ZAF",
                "ZMB",
                "ZWE"
              ]
            },
            "administrative_area": {
              "type": "string",
              "description": "State / Province / Region"
            },
            "sub_administrative_area": {
              "type": "string",
              "description": "County / District"
            },
            "locality": {
              "type": "string",
              "description": "City / Town"
            },
            "postal_code": {
              "type": "string",
              "description": "Postal Code / Zip Code"
            },
            "thoroughfare": {
              "type": "string",
              "description": "Street Address"
            },
            "premise": {
              "type": "string",
              "description": "Apartment / Suite / Box number etc"
            },
            "sub_premise": {
              "type": "string",
              "description": "Floor # / Room # / Building label etc"
            }
          }
        }
      }
    },
    "resource": {
      "type": "object",
      "description": "The parent resource if this is a child resource",
      "properties": {
        "resource_id": {
          "type": "string",
          "description": "The identifier for the resource",
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_id": {
          "x-no-api-doc": true,
          "type": "string",
          "description": "Customer identifier",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_type": {
          "x-no-api-doc": true,
          "enum": [
            "RES"
          ]
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
        "resource_type": {
          "type": "string",
          "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
          "pattern": "^[a-z][0-9a-zA-Z-]+$"
        },
        "meta": {
          "type": "object",
          "description": "Data for the resource as a key value pair",
          "additionalProperties": {
            "type": "string"
          },
          "propertyNames": {
            "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
          }
        },
        "location": {
          "type": "object",
          "description": "Defines the properties for a part unit",
          "additionalProperties": false,
          "required": [
            "label",
            "entity_id",
            "entity_type",
            "created",
            "updated",
            "location_type",
            "address"
          ],
          "properties": {
            "location_id": {
              "description": "The identifier for the location",
              "type": "string",
              "readOnly": true,
              "pattern": "^[0-9a-zA-Z-_]+$"
            },
            "entity_id": {
              "x-no-api-doc": true,
              "type": "string",
              "description": "Customer identifier",
              "readOnly": true,
              "pattern": "^[0-9a-zA-Z-_]+$"
            },
            "entity_type": {
              "x-no-api-doc": true,
              "enum": [
                "LOC"
              ]
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
            "location_type": {
              "type": "string",
              "description": "The type of location",
              "enum": [
                "warehouse",
                "facility",
                "other"
              ]
            },
            "formatted_address": {
              "type": "string",
              "readOnly": true,
              "description": "Address formatted for the where region the location exists in"
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
                  "enum": [
                    "ABW",
                    "AFG",
                    "AGO",
                    "AIA",
                    "ALA",
                    "ALB",
                    "AND",
                    "ARE",
                    "ARG",
                    "ARM",
                    "ASM",
                    "ATA",
                    "ATF",
                    "ATG",
                    "AUS",
                    "AUT",
                    "AZE",
                    "BDI",
                    "BEL",
                    "BEN",
                    "BES",
                    "BFA",
                    "BGD",
                    "BGR",
                    "BHR",
                    "BHS",
                    "BIH",
                    "BLM",
                    "BLR",
                    "BLZ",
                    "BMU",
                    "BOL",
                    "BRA",
                    "BRB",
                    "BRN",
                    "BTN",
                    "BVT",
                    "BWA",
                    "CAF",
                    "CAN",
                    "CCK",
                    "CHE",
                    "CHL",
                    "CHN",
                    "CIV",
                    "CMR",
                    "COD",
                    "COG",
                    "COK",
                    "COL",
                    "COM",
                    "CPV",
                    "CRI",
                    "CUB",
                    "CUW",
                    "CXR",
                    "CYM",
                    "CYP",
                    "CZE",
                    "DEU",
                    "DJI",
                    "DMA",
                    "DNK",
                    "DOM",
                    "DZA",
                    "ECU",
                    "EGY",
                    "ERI",
                    "ESH",
                    "ESP",
                    "EST",
                    "ETH",
                    "FIN",
                    "FJI",
                    "FLK",
                    "FRA",
                    "FRO",
                    "FSM",
                    "GAB",
                    "GBR",
                    "GEO",
                    "GGY",
                    "GHA",
                    "GIB",
                    "GIN",
                    "GLP",
                    "GMB",
                    "GNB",
                    "GNQ",
                    "GRC",
                    "GRD",
                    "GRL",
                    "GTM",
                    "GUF",
                    "GUM",
                    "GUY",
                    "HKG",
                    "HMD",
                    "HND",
                    "HRV",
                    "HTI",
                    "HUN",
                    "IDN",
                    "IMN",
                    "IND",
                    "IOT",
                    "IRL",
                    "IRN",
                    "IRQ",
                    "ISL",
                    "ISR",
                    "ITA",
                    "JAM",
                    "JEY",
                    "JOR",
                    "JPN",
                    "KAZ",
                    "KEN",
                    "KGZ",
                    "KHM",
                    "KIR",
                    "KNA",
                    "KOR",
                    "KWT",
                    "LAO",
                    "LBN",
                    "LBR",
                    "LBY",
                    "LCA",
                    "LIE",
                    "LKA",
                    "LSO",
                    "LTU",
                    "LUX",
                    "LVA",
                    "MAC",
                    "MAF",
                    "MAR",
                    "MCO",
                    "MDA",
                    "MDG",
                    "MDV",
                    "MEX",
                    "MHL",
                    "MKD",
                    "MLI",
                    "MLT",
                    "MMR",
                    "MNE",
                    "MNG",
                    "MNP",
                    "MOZ",
                    "MRT",
                    "MSR",
                    "MTQ",
                    "MUS",
                    "MWI",
                    "MYS",
                    "MYT",
                    "NAM",
                    "NCL",
                    "NER",
                    "NFK",
                    "NGA",
                    "NIC",
                    "NIU",
                    "NLD",
                    "NOR",
                    "NPL",
                    "NRU",
                    "NZL",
                    "OMN",
                    "PAK",
                    "PAN",
                    "PCN",
                    "PER",
                    "PHL",
                    "PLW",
                    "PNG",
                    "POL",
                    "PRI",
                    "PRK",
                    "PRT",
                    "PRY",
                    "PSE",
                    "PYF",
                    "QAT",
                    "REU",
                    "ROU",
                    "RUS",
                    "RWA",
                    "SAU",
                    "SDN",
                    "SEN",
                    "SGP",
                    "SGS",
                    "SHN",
                    "SJM",
                    "SLB",
                    "SLE",
                    "SLV",
                    "SMR",
                    "SOM",
                    "SPM",
                    "SRB",
                    "SSD",
                    "STP",
                    "SUR",
                    "SVK",
                    "SVN",
                    "SWE",
                    "SWZ",
                    "SXM",
                    "SYC",
                    "SYR",
                    "TCA",
                    "TCD",
                    "TGO",
                    "THA",
                    "TJK",
                    "TKL",
                    "TKM",
                    "TLS",
                    "TON",
                    "TTO",
                    "TUN",
                    "TUR",
                    "TUV",
                    "TWN",
                    "TZA",
                    "UGA",
                    "UKR",
                    "UMI",
                    "URY",
                    "USA",
                    "UZB",
                    "VAT",
                    "VCT",
                    "VEN",
                    "VGB",
                    "VIR",
                    "VNM",
                    "VUT",
                    "WLF",
                    "WSM",
                    "YEM",
                    "ZAF",
                    "ZMB",
                    "ZWE"
                  ]
                },
                "administrative_area": {
                  "type": "string",
                  "description": "State / Province / Region"
                },
                "sub_administrative_area": {
                  "type": "string",
                  "description": "County / District"
                },
                "locality": {
                  "type": "string",
                  "description": "City / Town"
                },
                "postal_code": {
                  "type": "string",
                  "description": "Postal Code / Zip Code"
                },
                "thoroughfare": {
                  "type": "string",
                  "description": "Street Address"
                },
                "premise": {
                  "type": "string",
                  "description": "Apartment / Suite / Box number etc"
                },
                "sub_premise": {
                  "type": "string",
                  "description": "Floor # / Room # / Building label etc"
                }
              }
            }
          }
        }
      }
    }
  }
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
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» resource_id|string|false|none|The identifier for the resource|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»» meta|object|false|none|Data for the resource as a key value pair|
|»»» **additionalProperties**|string|false|none|none|
|»» location|object|false|none|Defines the properties for a part unit|
|»»» location_id|string|false|read-only|The identifier for the location|
|»»» entity_id|string|true|read-only|Customer identifier|
|»»» entity_type|string|true|none|none|
|»»» label|string|true|none|Label for the entity|
|»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
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
|»»» resource|object|false|none|The parent resource if this is a child resource|
|»»»» resource_id|string|false|none|The identifier for the resource|
|»»»» entity_id|string|false|read-only|Customer identifier|
|»»»» entity_type|string|false|none|none|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»»»» meta|object|false|none|Data for the resource as a key value pair|
|»»»»» **additionalProperties**|string|false|none|none|
|»»»» location|object|false|none|Defines the properties for a part unit|
|»»»»» location_id|string|false|read-only|The identifier for the location|
|»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»» entity_type|string|true|none|none|
|»»»»» label|string|true|none|Label for the entity|
|»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»» location_type|string|true|none|The type of location|
|»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»» address|object|true|none|xNAL address for the location|
|»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»» locality|string|true|none|City / Town|
|»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|
|entity_type|RES|
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|

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

<aside class="success">
This operation does not require authentication
</aside>

## fetchResourceById

<a id="opIdfetchResourceById"></a>

`GET /resources/{resource_id}`

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
  "properties": {
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "example": {
            "href": "https://api.nterprise.com/resources/QEvVrVMMwVcJ6om"
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
    "resource_id": {
      "type": "string",
      "description": "The identifier for the resource",
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
    "resource_type": {
      "type": "string",
      "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
      "pattern": "^[a-z][0-9a-zA-Z-]+$"
    },
    "meta": {
      "type": "object",
      "description": "Data for the resource as a key value pair",
      "additionalProperties": {
        "type": "string"
      },
      "propertyNames": {
        "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
      }
    },
    "location": {
      "type": "object",
      "description": "Defines the properties for a part unit",
      "additionalProperties": false,
      "required": [
        "label",
        "entity_id",
        "entity_type",
        "created",
        "updated",
        "location_type",
        "address"
      ],
      "properties": {
        "location_id": {
          "description": "The identifier for the location",
          "type": "string",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_id": {
          "x-no-api-doc": true,
          "type": "string",
          "description": "Customer identifier",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_type": {
          "x-no-api-doc": true,
          "enum": [
            "LOC"
          ]
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
        "location_type": {
          "type": "string",
          "description": "The type of location",
          "enum": [
            "warehouse",
            "facility",
            "other"
          ]
        },
        "formatted_address": {
          "type": "string",
          "readOnly": true,
          "description": "Address formatted for the where region the location exists in"
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
              "enum": [
                "ABW",
                "AFG",
                "AGO",
                "AIA",
                "ALA",
                "ALB",
                "AND",
                "ARE",
                "ARG",
                "ARM",
                "ASM",
                "ATA",
                "ATF",
                "ATG",
                "AUS",
                "AUT",
                "AZE",
                "BDI",
                "BEL",
                "BEN",
                "BES",
                "BFA",
                "BGD",
                "BGR",
                "BHR",
                "BHS",
                "BIH",
                "BLM",
                "BLR",
                "BLZ",
                "BMU",
                "BOL",
                "BRA",
                "BRB",
                "BRN",
                "BTN",
                "BVT",
                "BWA",
                "CAF",
                "CAN",
                "CCK",
                "CHE",
                "CHL",
                "CHN",
                "CIV",
                "CMR",
                "COD",
                "COG",
                "COK",
                "COL",
                "COM",
                "CPV",
                "CRI",
                "CUB",
                "CUW",
                "CXR",
                "CYM",
                "CYP",
                "CZE",
                "DEU",
                "DJI",
                "DMA",
                "DNK",
                "DOM",
                "DZA",
                "ECU",
                "EGY",
                "ERI",
                "ESH",
                "ESP",
                "EST",
                "ETH",
                "FIN",
                "FJI",
                "FLK",
                "FRA",
                "FRO",
                "FSM",
                "GAB",
                "GBR",
                "GEO",
                "GGY",
                "GHA",
                "GIB",
                "GIN",
                "GLP",
                "GMB",
                "GNB",
                "GNQ",
                "GRC",
                "GRD",
                "GRL",
                "GTM",
                "GUF",
                "GUM",
                "GUY",
                "HKG",
                "HMD",
                "HND",
                "HRV",
                "HTI",
                "HUN",
                "IDN",
                "IMN",
                "IND",
                "IOT",
                "IRL",
                "IRN",
                "IRQ",
                "ISL",
                "ISR",
                "ITA",
                "JAM",
                "JEY",
                "JOR",
                "JPN",
                "KAZ",
                "KEN",
                "KGZ",
                "KHM",
                "KIR",
                "KNA",
                "KOR",
                "KWT",
                "LAO",
                "LBN",
                "LBR",
                "LBY",
                "LCA",
                "LIE",
                "LKA",
                "LSO",
                "LTU",
                "LUX",
                "LVA",
                "MAC",
                "MAF",
                "MAR",
                "MCO",
                "MDA",
                "MDG",
                "MDV",
                "MEX",
                "MHL",
                "MKD",
                "MLI",
                "MLT",
                "MMR",
                "MNE",
                "MNG",
                "MNP",
                "MOZ",
                "MRT",
                "MSR",
                "MTQ",
                "MUS",
                "MWI",
                "MYS",
                "MYT",
                "NAM",
                "NCL",
                "NER",
                "NFK",
                "NGA",
                "NIC",
                "NIU",
                "NLD",
                "NOR",
                "NPL",
                "NRU",
                "NZL",
                "OMN",
                "PAK",
                "PAN",
                "PCN",
                "PER",
                "PHL",
                "PLW",
                "PNG",
                "POL",
                "PRI",
                "PRK",
                "PRT",
                "PRY",
                "PSE",
                "PYF",
                "QAT",
                "REU",
                "ROU",
                "RUS",
                "RWA",
                "SAU",
                "SDN",
                "SEN",
                "SGP",
                "SGS",
                "SHN",
                "SJM",
                "SLB",
                "SLE",
                "SLV",
                "SMR",
                "SOM",
                "SPM",
                "SRB",
                "SSD",
                "STP",
                "SUR",
                "SVK",
                "SVN",
                "SWE",
                "SWZ",
                "SXM",
                "SYC",
                "SYR",
                "TCA",
                "TCD",
                "TGO",
                "THA",
                "TJK",
                "TKL",
                "TKM",
                "TLS",
                "TON",
                "TTO",
                "TUN",
                "TUR",
                "TUV",
                "TWN",
                "TZA",
                "UGA",
                "UKR",
                "UMI",
                "URY",
                "USA",
                "UZB",
                "VAT",
                "VCT",
                "VEN",
                "VGB",
                "VIR",
                "VNM",
                "VUT",
                "WLF",
                "WSM",
                "YEM",
                "ZAF",
                "ZMB",
                "ZWE"
              ]
            },
            "administrative_area": {
              "type": "string",
              "description": "State / Province / Region"
            },
            "sub_administrative_area": {
              "type": "string",
              "description": "County / District"
            },
            "locality": {
              "type": "string",
              "description": "City / Town"
            },
            "postal_code": {
              "type": "string",
              "description": "Postal Code / Zip Code"
            },
            "thoroughfare": {
              "type": "string",
              "description": "Street Address"
            },
            "premise": {
              "type": "string",
              "description": "Apartment / Suite / Box number etc"
            },
            "sub_premise": {
              "type": "string",
              "description": "Floor # / Room # / Building label etc"
            }
          }
        }
      }
    },
    "resource": {
      "type": "object",
      "description": "The parent resource if this is a child resource",
      "properties": {
        "resource_id": {
          "type": "string",
          "description": "The identifier for the resource",
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_id": {
          "x-no-api-doc": true,
          "type": "string",
          "description": "Customer identifier",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_type": {
          "x-no-api-doc": true,
          "enum": [
            "RES"
          ]
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
        "resource_type": {
          "type": "string",
          "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
          "pattern": "^[a-z][0-9a-zA-Z-]+$"
        },
        "meta": {
          "type": "object",
          "description": "Data for the resource as a key value pair",
          "additionalProperties": {
            "type": "string"
          },
          "propertyNames": {
            "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
          }
        },
        "location": {
          "type": "object",
          "description": "Defines the properties for a part unit",
          "additionalProperties": false,
          "required": [
            "label",
            "entity_id",
            "entity_type",
            "created",
            "updated",
            "location_type",
            "address"
          ],
          "properties": {
            "location_id": {
              "description": "The identifier for the location",
              "type": "string",
              "readOnly": true,
              "pattern": "^[0-9a-zA-Z-_]+$"
            },
            "entity_id": {
              "x-no-api-doc": true,
              "type": "string",
              "description": "Customer identifier",
              "readOnly": true,
              "pattern": "^[0-9a-zA-Z-_]+$"
            },
            "entity_type": {
              "x-no-api-doc": true,
              "enum": [
                "LOC"
              ]
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
            "location_type": {
              "type": "string",
              "description": "The type of location",
              "enum": [
                "warehouse",
                "facility",
                "other"
              ]
            },
            "formatted_address": {
              "type": "string",
              "readOnly": true,
              "description": "Address formatted for the where region the location exists in"
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
                  "enum": [
                    "ABW",
                    "AFG",
                    "AGO",
                    "AIA",
                    "ALA",
                    "ALB",
                    "AND",
                    "ARE",
                    "ARG",
                    "ARM",
                    "ASM",
                    "ATA",
                    "ATF",
                    "ATG",
                    "AUS",
                    "AUT",
                    "AZE",
                    "BDI",
                    "BEL",
                    "BEN",
                    "BES",
                    "BFA",
                    "BGD",
                    "BGR",
                    "BHR",
                    "BHS",
                    "BIH",
                    "BLM",
                    "BLR",
                    "BLZ",
                    "BMU",
                    "BOL",
                    "BRA",
                    "BRB",
                    "BRN",
                    "BTN",
                    "BVT",
                    "BWA",
                    "CAF",
                    "CAN",
                    "CCK",
                    "CHE",
                    "CHL",
                    "CHN",
                    "CIV",
                    "CMR",
                    "COD",
                    "COG",
                    "COK",
                    "COL",
                    "COM",
                    "CPV",
                    "CRI",
                    "CUB",
                    "CUW",
                    "CXR",
                    "CYM",
                    "CYP",
                    "CZE",
                    "DEU",
                    "DJI",
                    "DMA",
                    "DNK",
                    "DOM",
                    "DZA",
                    "ECU",
                    "EGY",
                    "ERI",
                    "ESH",
                    "ESP",
                    "EST",
                    "ETH",
                    "FIN",
                    "FJI",
                    "FLK",
                    "FRA",
                    "FRO",
                    "FSM",
                    "GAB",
                    "GBR",
                    "GEO",
                    "GGY",
                    "GHA",
                    "GIB",
                    "GIN",
                    "GLP",
                    "GMB",
                    "GNB",
                    "GNQ",
                    "GRC",
                    "GRD",
                    "GRL",
                    "GTM",
                    "GUF",
                    "GUM",
                    "GUY",
                    "HKG",
                    "HMD",
                    "HND",
                    "HRV",
                    "HTI",
                    "HUN",
                    "IDN",
                    "IMN",
                    "IND",
                    "IOT",
                    "IRL",
                    "IRN",
                    "IRQ",
                    "ISL",
                    "ISR",
                    "ITA",
                    "JAM",
                    "JEY",
                    "JOR",
                    "JPN",
                    "KAZ",
                    "KEN",
                    "KGZ",
                    "KHM",
                    "KIR",
                    "KNA",
                    "KOR",
                    "KWT",
                    "LAO",
                    "LBN",
                    "LBR",
                    "LBY",
                    "LCA",
                    "LIE",
                    "LKA",
                    "LSO",
                    "LTU",
                    "LUX",
                    "LVA",
                    "MAC",
                    "MAF",
                    "MAR",
                    "MCO",
                    "MDA",
                    "MDG",
                    "MDV",
                    "MEX",
                    "MHL",
                    "MKD",
                    "MLI",
                    "MLT",
                    "MMR",
                    "MNE",
                    "MNG",
                    "MNP",
                    "MOZ",
                    "MRT",
                    "MSR",
                    "MTQ",
                    "MUS",
                    "MWI",
                    "MYS",
                    "MYT",
                    "NAM",
                    "NCL",
                    "NER",
                    "NFK",
                    "NGA",
                    "NIC",
                    "NIU",
                    "NLD",
                    "NOR",
                    "NPL",
                    "NRU",
                    "NZL",
                    "OMN",
                    "PAK",
                    "PAN",
                    "PCN",
                    "PER",
                    "PHL",
                    "PLW",
                    "PNG",
                    "POL",
                    "PRI",
                    "PRK",
                    "PRT",
                    "PRY",
                    "PSE",
                    "PYF",
                    "QAT",
                    "REU",
                    "ROU",
                    "RUS",
                    "RWA",
                    "SAU",
                    "SDN",
                    "SEN",
                    "SGP",
                    "SGS",
                    "SHN",
                    "SJM",
                    "SLB",
                    "SLE",
                    "SLV",
                    "SMR",
                    "SOM",
                    "SPM",
                    "SRB",
                    "SSD",
                    "STP",
                    "SUR",
                    "SVK",
                    "SVN",
                    "SWE",
                    "SWZ",
                    "SXM",
                    "SYC",
                    "SYR",
                    "TCA",
                    "TCD",
                    "TGO",
                    "THA",
                    "TJK",
                    "TKL",
                    "TKM",
                    "TLS",
                    "TON",
                    "TTO",
                    "TUN",
                    "TUR",
                    "TUV",
                    "TWN",
                    "TZA",
                    "UGA",
                    "UKR",
                    "UMI",
                    "URY",
                    "USA",
                    "UZB",
                    "VAT",
                    "VCT",
                    "VEN",
                    "VGB",
                    "VIR",
                    "VNM",
                    "VUT",
                    "WLF",
                    "WSM",
                    "YEM",
                    "ZAF",
                    "ZMB",
                    "ZWE"
                  ]
                },
                "administrative_area": {
                  "type": "string",
                  "description": "State / Province / Region"
                },
                "sub_administrative_area": {
                  "type": "string",
                  "description": "County / District"
                },
                "locality": {
                  "type": "string",
                  "description": "City / Town"
                },
                "postal_code": {
                  "type": "string",
                  "description": "Postal Code / Zip Code"
                },
                "thoroughfare": {
                  "type": "string",
                  "description": "Street Address"
                },
                "premise": {
                  "type": "string",
                  "description": "Apartment / Suite / Box number etc"
                },
                "sub_premise": {
                  "type": "string",
                  "description": "Floor # / Room # / Building label etc"
                }
              }
            }
          }
        }
      }
    }
  }
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
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» resource_id|string|false|none|The identifier for the resource|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»» meta|object|false|none|Data for the resource as a key value pair|
|»»» **additionalProperties**|string|false|none|none|
|»» location|object|false|none|Defines the properties for a part unit|
|»»» location_id|string|false|read-only|The identifier for the location|
|»»» entity_id|string|true|read-only|Customer identifier|
|»»» entity_type|string|true|none|none|
|»»» label|string|true|none|Label for the entity|
|»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
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
|»»» resource|object|false|none|The parent resource if this is a child resource|
|»»»» resource_id|string|false|none|The identifier for the resource|
|»»»» entity_id|string|false|read-only|Customer identifier|
|»»»» entity_type|string|false|none|none|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»»»» meta|object|false|none|Data for the resource as a key value pair|
|»»»»» **additionalProperties**|string|false|none|none|
|»»»» location|object|false|none|Defines the properties for a part unit|
|»»»»» location_id|string|false|read-only|The identifier for the location|
|»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»» entity_type|string|true|none|none|
|»»»»» label|string|true|none|Label for the entity|
|»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»» location_type|string|true|none|The type of location|
|»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»» address|object|true|none|xNAL address for the location|
|»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»» locality|string|true|none|City / Town|
|»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|
|entity_type|RES|
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|

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

## updateResource

<a id="opIdupdateResource"></a>

`PUT /resources/{resource_id}`

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
          "description": "The identifier for the location",
          "type": "string",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        }
      }
    },
    "label": {
      "type": "string",
      "description": "Label for the entity"
    },
    "resource_type": {
      "type": "string",
      "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
      "pattern": "^[a-z][0-9a-zA-Z-]+$"
    },
    "meta": {
      "type": "object",
      "description": "Data for the resource as a key value pair",
      "additionalProperties": {
        "type": "string"
      },
      "propertyNames": {
        "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
      }
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
          "pattern": "^[0-9a-zA-Z-_]+$"
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
  "properties": {
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "example": {
            "href": "https://api.nterprise.com/resources/QEvVrVMMwVcJ6om"
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
    "resource_id": {
      "type": "string",
      "description": "The identifier for the resource",
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
    "resource_type": {
      "type": "string",
      "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
      "pattern": "^[a-z][0-9a-zA-Z-]+$"
    },
    "meta": {
      "type": "object",
      "description": "Data for the resource as a key value pair",
      "additionalProperties": {
        "type": "string"
      },
      "propertyNames": {
        "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
      }
    },
    "location": {
      "type": "object",
      "description": "Defines the properties for a part unit",
      "additionalProperties": false,
      "required": [
        "label",
        "entity_id",
        "entity_type",
        "created",
        "updated",
        "location_type",
        "address"
      ],
      "properties": {
        "location_id": {
          "description": "The identifier for the location",
          "type": "string",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_id": {
          "x-no-api-doc": true,
          "type": "string",
          "description": "Customer identifier",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_type": {
          "x-no-api-doc": true,
          "enum": [
            "LOC"
          ]
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
        "location_type": {
          "type": "string",
          "description": "The type of location",
          "enum": [
            "warehouse",
            "facility",
            "other"
          ]
        },
        "formatted_address": {
          "type": "string",
          "readOnly": true,
          "description": "Address formatted for the where region the location exists in"
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
              "enum": [
                "ABW",
                "AFG",
                "AGO",
                "AIA",
                "ALA",
                "ALB",
                "AND",
                "ARE",
                "ARG",
                "ARM",
                "ASM",
                "ATA",
                "ATF",
                "ATG",
                "AUS",
                "AUT",
                "AZE",
                "BDI",
                "BEL",
                "BEN",
                "BES",
                "BFA",
                "BGD",
                "BGR",
                "BHR",
                "BHS",
                "BIH",
                "BLM",
                "BLR",
                "BLZ",
                "BMU",
                "BOL",
                "BRA",
                "BRB",
                "BRN",
                "BTN",
                "BVT",
                "BWA",
                "CAF",
                "CAN",
                "CCK",
                "CHE",
                "CHL",
                "CHN",
                "CIV",
                "CMR",
                "COD",
                "COG",
                "COK",
                "COL",
                "COM",
                "CPV",
                "CRI",
                "CUB",
                "CUW",
                "CXR",
                "CYM",
                "CYP",
                "CZE",
                "DEU",
                "DJI",
                "DMA",
                "DNK",
                "DOM",
                "DZA",
                "ECU",
                "EGY",
                "ERI",
                "ESH",
                "ESP",
                "EST",
                "ETH",
                "FIN",
                "FJI",
                "FLK",
                "FRA",
                "FRO",
                "FSM",
                "GAB",
                "GBR",
                "GEO",
                "GGY",
                "GHA",
                "GIB",
                "GIN",
                "GLP",
                "GMB",
                "GNB",
                "GNQ",
                "GRC",
                "GRD",
                "GRL",
                "GTM",
                "GUF",
                "GUM",
                "GUY",
                "HKG",
                "HMD",
                "HND",
                "HRV",
                "HTI",
                "HUN",
                "IDN",
                "IMN",
                "IND",
                "IOT",
                "IRL",
                "IRN",
                "IRQ",
                "ISL",
                "ISR",
                "ITA",
                "JAM",
                "JEY",
                "JOR",
                "JPN",
                "KAZ",
                "KEN",
                "KGZ",
                "KHM",
                "KIR",
                "KNA",
                "KOR",
                "KWT",
                "LAO",
                "LBN",
                "LBR",
                "LBY",
                "LCA",
                "LIE",
                "LKA",
                "LSO",
                "LTU",
                "LUX",
                "LVA",
                "MAC",
                "MAF",
                "MAR",
                "MCO",
                "MDA",
                "MDG",
                "MDV",
                "MEX",
                "MHL",
                "MKD",
                "MLI",
                "MLT",
                "MMR",
                "MNE",
                "MNG",
                "MNP",
                "MOZ",
                "MRT",
                "MSR",
                "MTQ",
                "MUS",
                "MWI",
                "MYS",
                "MYT",
                "NAM",
                "NCL",
                "NER",
                "NFK",
                "NGA",
                "NIC",
                "NIU",
                "NLD",
                "NOR",
                "NPL",
                "NRU",
                "NZL",
                "OMN",
                "PAK",
                "PAN",
                "PCN",
                "PER",
                "PHL",
                "PLW",
                "PNG",
                "POL",
                "PRI",
                "PRK",
                "PRT",
                "PRY",
                "PSE",
                "PYF",
                "QAT",
                "REU",
                "ROU",
                "RUS",
                "RWA",
                "SAU",
                "SDN",
                "SEN",
                "SGP",
                "SGS",
                "SHN",
                "SJM",
                "SLB",
                "SLE",
                "SLV",
                "SMR",
                "SOM",
                "SPM",
                "SRB",
                "SSD",
                "STP",
                "SUR",
                "SVK",
                "SVN",
                "SWE",
                "SWZ",
                "SXM",
                "SYC",
                "SYR",
                "TCA",
                "TCD",
                "TGO",
                "THA",
                "TJK",
                "TKL",
                "TKM",
                "TLS",
                "TON",
                "TTO",
                "TUN",
                "TUR",
                "TUV",
                "TWN",
                "TZA",
                "UGA",
                "UKR",
                "UMI",
                "URY",
                "USA",
                "UZB",
                "VAT",
                "VCT",
                "VEN",
                "VGB",
                "VIR",
                "VNM",
                "VUT",
                "WLF",
                "WSM",
                "YEM",
                "ZAF",
                "ZMB",
                "ZWE"
              ]
            },
            "administrative_area": {
              "type": "string",
              "description": "State / Province / Region"
            },
            "sub_administrative_area": {
              "type": "string",
              "description": "County / District"
            },
            "locality": {
              "type": "string",
              "description": "City / Town"
            },
            "postal_code": {
              "type": "string",
              "description": "Postal Code / Zip Code"
            },
            "thoroughfare": {
              "type": "string",
              "description": "Street Address"
            },
            "premise": {
              "type": "string",
              "description": "Apartment / Suite / Box number etc"
            },
            "sub_premise": {
              "type": "string",
              "description": "Floor # / Room # / Building label etc"
            }
          }
        }
      }
    },
    "resource": {
      "type": "object",
      "description": "The parent resource if this is a child resource",
      "properties": {
        "resource_id": {
          "type": "string",
          "description": "The identifier for the resource",
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_id": {
          "x-no-api-doc": true,
          "type": "string",
          "description": "Customer identifier",
          "readOnly": true,
          "pattern": "^[0-9a-zA-Z-_]+$"
        },
        "entity_type": {
          "x-no-api-doc": true,
          "enum": [
            "RES"
          ]
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
        "resource_type": {
          "type": "string",
          "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
          "pattern": "^[a-z][0-9a-zA-Z-]+$"
        },
        "meta": {
          "type": "object",
          "description": "Data for the resource as a key value pair",
          "additionalProperties": {
            "type": "string"
          },
          "propertyNames": {
            "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
          }
        },
        "location": {
          "type": "object",
          "description": "Defines the properties for a part unit",
          "additionalProperties": false,
          "required": [
            "label",
            "entity_id",
            "entity_type",
            "created",
            "updated",
            "location_type",
            "address"
          ],
          "properties": {
            "location_id": {
              "description": "The identifier for the location",
              "type": "string",
              "readOnly": true,
              "pattern": "^[0-9a-zA-Z-_]+$"
            },
            "entity_id": {
              "x-no-api-doc": true,
              "type": "string",
              "description": "Customer identifier",
              "readOnly": true,
              "pattern": "^[0-9a-zA-Z-_]+$"
            },
            "entity_type": {
              "x-no-api-doc": true,
              "enum": [
                "LOC"
              ]
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
            "location_type": {
              "type": "string",
              "description": "The type of location",
              "enum": [
                "warehouse",
                "facility",
                "other"
              ]
            },
            "formatted_address": {
              "type": "string",
              "readOnly": true,
              "description": "Address formatted for the where region the location exists in"
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
                  "enum": [
                    "ABW",
                    "AFG",
                    "AGO",
                    "AIA",
                    "ALA",
                    "ALB",
                    "AND",
                    "ARE",
                    "ARG",
                    "ARM",
                    "ASM",
                    "ATA",
                    "ATF",
                    "ATG",
                    "AUS",
                    "AUT",
                    "AZE",
                    "BDI",
                    "BEL",
                    "BEN",
                    "BES",
                    "BFA",
                    "BGD",
                    "BGR",
                    "BHR",
                    "BHS",
                    "BIH",
                    "BLM",
                    "BLR",
                    "BLZ",
                    "BMU",
                    "BOL",
                    "BRA",
                    "BRB",
                    "BRN",
                    "BTN",
                    "BVT",
                    "BWA",
                    "CAF",
                    "CAN",
                    "CCK",
                    "CHE",
                    "CHL",
                    "CHN",
                    "CIV",
                    "CMR",
                    "COD",
                    "COG",
                    "COK",
                    "COL",
                    "COM",
                    "CPV",
                    "CRI",
                    "CUB",
                    "CUW",
                    "CXR",
                    "CYM",
                    "CYP",
                    "CZE",
                    "DEU",
                    "DJI",
                    "DMA",
                    "DNK",
                    "DOM",
                    "DZA",
                    "ECU",
                    "EGY",
                    "ERI",
                    "ESH",
                    "ESP",
                    "EST",
                    "ETH",
                    "FIN",
                    "FJI",
                    "FLK",
                    "FRA",
                    "FRO",
                    "FSM",
                    "GAB",
                    "GBR",
                    "GEO",
                    "GGY",
                    "GHA",
                    "GIB",
                    "GIN",
                    "GLP",
                    "GMB",
                    "GNB",
                    "GNQ",
                    "GRC",
                    "GRD",
                    "GRL",
                    "GTM",
                    "GUF",
                    "GUM",
                    "GUY",
                    "HKG",
                    "HMD",
                    "HND",
                    "HRV",
                    "HTI",
                    "HUN",
                    "IDN",
                    "IMN",
                    "IND",
                    "IOT",
                    "IRL",
                    "IRN",
                    "IRQ",
                    "ISL",
                    "ISR",
                    "ITA",
                    "JAM",
                    "JEY",
                    "JOR",
                    "JPN",
                    "KAZ",
                    "KEN",
                    "KGZ",
                    "KHM",
                    "KIR",
                    "KNA",
                    "KOR",
                    "KWT",
                    "LAO",
                    "LBN",
                    "LBR",
                    "LBY",
                    "LCA",
                    "LIE",
                    "LKA",
                    "LSO",
                    "LTU",
                    "LUX",
                    "LVA",
                    "MAC",
                    "MAF",
                    "MAR",
                    "MCO",
                    "MDA",
                    "MDG",
                    "MDV",
                    "MEX",
                    "MHL",
                    "MKD",
                    "MLI",
                    "MLT",
                    "MMR",
                    "MNE",
                    "MNG",
                    "MNP",
                    "MOZ",
                    "MRT",
                    "MSR",
                    "MTQ",
                    "MUS",
                    "MWI",
                    "MYS",
                    "MYT",
                    "NAM",
                    "NCL",
                    "NER",
                    "NFK",
                    "NGA",
                    "NIC",
                    "NIU",
                    "NLD",
                    "NOR",
                    "NPL",
                    "NRU",
                    "NZL",
                    "OMN",
                    "PAK",
                    "PAN",
                    "PCN",
                    "PER",
                    "PHL",
                    "PLW",
                    "PNG",
                    "POL",
                    "PRI",
                    "PRK",
                    "PRT",
                    "PRY",
                    "PSE",
                    "PYF",
                    "QAT",
                    "REU",
                    "ROU",
                    "RUS",
                    "RWA",
                    "SAU",
                    "SDN",
                    "SEN",
                    "SGP",
                    "SGS",
                    "SHN",
                    "SJM",
                    "SLB",
                    "SLE",
                    "SLV",
                    "SMR",
                    "SOM",
                    "SPM",
                    "SRB",
                    "SSD",
                    "STP",
                    "SUR",
                    "SVK",
                    "SVN",
                    "SWE",
                    "SWZ",
                    "SXM",
                    "SYC",
                    "SYR",
                    "TCA",
                    "TCD",
                    "TGO",
                    "THA",
                    "TJK",
                    "TKL",
                    "TKM",
                    "TLS",
                    "TON",
                    "TTO",
                    "TUN",
                    "TUR",
                    "TUV",
                    "TWN",
                    "TZA",
                    "UGA",
                    "UKR",
                    "UMI",
                    "URY",
                    "USA",
                    "UZB",
                    "VAT",
                    "VCT",
                    "VEN",
                    "VGB",
                    "VIR",
                    "VNM",
                    "VUT",
                    "WLF",
                    "WSM",
                    "YEM",
                    "ZAF",
                    "ZMB",
                    "ZWE"
                  ]
                },
                "administrative_area": {
                  "type": "string",
                  "description": "State / Province / Region"
                },
                "sub_administrative_area": {
                  "type": "string",
                  "description": "County / District"
                },
                "locality": {
                  "type": "string",
                  "description": "City / Town"
                },
                "postal_code": {
                  "type": "string",
                  "description": "Postal Code / Zip Code"
                },
                "thoroughfare": {
                  "type": "string",
                  "description": "Street Address"
                },
                "premise": {
                  "type": "string",
                  "description": "Apartment / Suite / Box number etc"
                },
                "sub_premise": {
                  "type": "string",
                  "description": "Floor # / Room # / Building label etc"
                }
              }
            }
          }
        }
      }
    }
  }
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
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» resource_id|string|false|none|The identifier for the resource|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»» meta|object|false|none|Data for the resource as a key value pair|
|»»» **additionalProperties**|string|false|none|none|
|»» location|object|false|none|Defines the properties for a part unit|
|»»» location_id|string|false|read-only|The identifier for the location|
|»»» entity_id|string|true|read-only|Customer identifier|
|»»» entity_type|string|true|none|none|
|»»» label|string|true|none|Label for the entity|
|»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
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
|»»» resource|object|false|none|The parent resource if this is a child resource|
|»»»» resource_id|string|false|none|The identifier for the resource|
|»»»» entity_id|string|false|read-only|Customer identifier|
|»»»» entity_type|string|false|none|none|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»»»» meta|object|false|none|Data for the resource as a key value pair|
|»»»»» **additionalProperties**|string|false|none|none|
|»»»» location|object|false|none|Defines the properties for a part unit|
|»»»»» location_id|string|false|read-only|The identifier for the location|
|»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»» entity_type|string|true|none|none|
|»»»»» label|string|true|none|Label for the entity|
|»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»» location_type|string|true|none|The type of location|
|»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»» address|object|true|none|xNAL address for the location|
|»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»» locality|string|true|none|City / Town|
|»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|
|entity_type|RES|
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|

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

## deleteResource

<a id="opIddeleteResource"></a>

`DELETE /resources/{resource_id}`

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

## fetchAllChildResources

<a id="opIdfetchAllChildResources"></a>

`GET /resources/{resource_id}/sub-resources`

*Fetches A Page of child resources*

Fetch child resources

<h3 id="fetchallchildresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_id|path|string|true|Id for the resource|
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
        "nter:resources": {
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
                      "href": "https://api.nterprise.com/resources/QEvVrVMMwVcJ6om"
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
              "resource_id": {
                "type": "string",
                "description": "The identifier for the resource",
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
              "resource_type": {
                "type": "string",
                "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
                "pattern": "^[a-z][0-9a-zA-Z-]+$"
              },
              "meta": {
                "type": "object",
                "description": "Data for the resource as a key value pair",
                "additionalProperties": {
                  "type": "string"
                },
                "propertyNames": {
                  "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
                }
              },
              "location": {
                "type": "object",
                "description": "Defines the properties for a part unit",
                "additionalProperties": false,
                "required": [
                  "label",
                  "entity_id",
                  "entity_type",
                  "created",
                  "updated",
                  "location_type",
                  "address"
                ],
                "properties": {
                  "location_id": {
                    "description": "The identifier for the location",
                    "type": "string",
                    "readOnly": true,
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_id": {
                    "x-no-api-doc": true,
                    "type": "string",
                    "description": "Customer identifier",
                    "readOnly": true,
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_type": {
                    "x-no-api-doc": true,
                    "enum": [
                      "LOC"
                    ]
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
                  "location_type": {
                    "type": "string",
                    "description": "The type of location",
                    "enum": [
                      "warehouse",
                      "facility",
                      "other"
                    ]
                  },
                  "formatted_address": {
                    "type": "string",
                    "readOnly": true,
                    "description": "Address formatted for the where region the location exists in"
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
                        "enum": [
                          "ABW",
                          "AFG",
                          "AGO",
                          "AIA",
                          "ALA",
                          "ALB",
                          "AND",
                          "ARE",
                          "ARG",
                          "ARM",
                          "ASM",
                          "ATA",
                          "ATF",
                          "ATG",
                          "AUS",
                          "AUT",
                          "AZE",
                          "BDI",
                          "BEL",
                          "BEN",
                          "BES",
                          "BFA",
                          "BGD",
                          "BGR",
                          "BHR",
                          "BHS",
                          "BIH",
                          "BLM",
                          "BLR",
                          "BLZ",
                          "BMU",
                          "BOL",
                          "BRA",
                          "BRB",
                          "BRN",
                          "BTN",
                          "BVT",
                          "BWA",
                          "CAF",
                          "CAN",
                          "CCK",
                          "CHE",
                          "CHL",
                          "CHN",
                          "CIV",
                          "CMR",
                          "COD",
                          "COG",
                          "COK",
                          "COL",
                          "COM",
                          "CPV",
                          "CRI",
                          "CUB",
                          "CUW",
                          "CXR",
                          "CYM",
                          "CYP",
                          "CZE",
                          "DEU",
                          "DJI",
                          "DMA",
                          "DNK",
                          "DOM",
                          "DZA",
                          "ECU",
                          "EGY",
                          "ERI",
                          "ESH",
                          "ESP",
                          "EST",
                          "ETH",
                          "FIN",
                          "FJI",
                          "FLK",
                          "FRA",
                          "FRO",
                          "FSM",
                          "GAB",
                          "GBR",
                          "GEO",
                          "GGY",
                          "GHA",
                          "GIB",
                          "GIN",
                          "GLP",
                          "GMB",
                          "GNB",
                          "GNQ",
                          "GRC",
                          "GRD",
                          "GRL",
                          "GTM",
                          "GUF",
                          "GUM",
                          "GUY",
                          "HKG",
                          "HMD",
                          "HND",
                          "HRV",
                          "HTI",
                          "HUN",
                          "IDN",
                          "IMN",
                          "IND",
                          "IOT",
                          "IRL",
                          "IRN",
                          "IRQ",
                          "ISL",
                          "ISR",
                          "ITA",
                          "JAM",
                          "JEY",
                          "JOR",
                          "JPN",
                          "KAZ",
                          "KEN",
                          "KGZ",
                          "KHM",
                          "KIR",
                          "KNA",
                          "KOR",
                          "KWT",
                          "LAO",
                          "LBN",
                          "LBR",
                          "LBY",
                          "LCA",
                          "LIE",
                          "LKA",
                          "LSO",
                          "LTU",
                          "LUX",
                          "LVA",
                          "MAC",
                          "MAF",
                          "MAR",
                          "MCO",
                          "MDA",
                          "MDG",
                          "MDV",
                          "MEX",
                          "MHL",
                          "MKD",
                          "MLI",
                          "MLT",
                          "MMR",
                          "MNE",
                          "MNG",
                          "MNP",
                          "MOZ",
                          "MRT",
                          "MSR",
                          "MTQ",
                          "MUS",
                          "MWI",
                          "MYS",
                          "MYT",
                          "NAM",
                          "NCL",
                          "NER",
                          "NFK",
                          "NGA",
                          "NIC",
                          "NIU",
                          "NLD",
                          "NOR",
                          "NPL",
                          "NRU",
                          "NZL",
                          "OMN",
                          "PAK",
                          "PAN",
                          "PCN",
                          "PER",
                          "PHL",
                          "PLW",
                          "PNG",
                          "POL",
                          "PRI",
                          "PRK",
                          "PRT",
                          "PRY",
                          "PSE",
                          "PYF",
                          "QAT",
                          "REU",
                          "ROU",
                          "RUS",
                          "RWA",
                          "SAU",
                          "SDN",
                          "SEN",
                          "SGP",
                          "SGS",
                          "SHN",
                          "SJM",
                          "SLB",
                          "SLE",
                          "SLV",
                          "SMR",
                          "SOM",
                          "SPM",
                          "SRB",
                          "SSD",
                          "STP",
                          "SUR",
                          "SVK",
                          "SVN",
                          "SWE",
                          "SWZ",
                          "SXM",
                          "SYC",
                          "SYR",
                          "TCA",
                          "TCD",
                          "TGO",
                          "THA",
                          "TJK",
                          "TKL",
                          "TKM",
                          "TLS",
                          "TON",
                          "TTO",
                          "TUN",
                          "TUR",
                          "TUV",
                          "TWN",
                          "TZA",
                          "UGA",
                          "UKR",
                          "UMI",
                          "URY",
                          "USA",
                          "UZB",
                          "VAT",
                          "VCT",
                          "VEN",
                          "VGB",
                          "VIR",
                          "VNM",
                          "VUT",
                          "WLF",
                          "WSM",
                          "YEM",
                          "ZAF",
                          "ZMB",
                          "ZWE"
                        ]
                      },
                      "administrative_area": {
                        "type": "string",
                        "description": "State / Province / Region"
                      },
                      "sub_administrative_area": {
                        "type": "string",
                        "description": "County / District"
                      },
                      "locality": {
                        "type": "string",
                        "description": "City / Town"
                      },
                      "postal_code": {
                        "type": "string",
                        "description": "Postal Code / Zip Code"
                      },
                      "thoroughfare": {
                        "type": "string",
                        "description": "Street Address"
                      },
                      "premise": {
                        "type": "string",
                        "description": "Apartment / Suite / Box number etc"
                      },
                      "sub_premise": {
                        "type": "string",
                        "description": "Floor # / Room # / Building label etc"
                      }
                    }
                  }
                }
              },
              "resource": {
                "type": "object",
                "description": "The parent resource if this is a child resource",
                "properties": {
                  "resource_id": {
                    "type": "string",
                    "description": "The identifier for the resource",
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_id": {
                    "x-no-api-doc": true,
                    "type": "string",
                    "description": "Customer identifier",
                    "readOnly": true,
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_type": {
                    "x-no-api-doc": true,
                    "enum": [
                      "RES"
                    ]
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
                  "resource_type": {
                    "type": "string",
                    "description": "Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased",
                    "pattern": "^[a-z][0-9a-zA-Z-]+$"
                  },
                  "meta": {
                    "type": "object",
                    "description": "Data for the resource as a key value pair",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "propertyNames": {
                      "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
                    }
                  },
                  "location": {
                    "type": "object",
                    "description": "Defines the properties for a part unit",
                    "additionalProperties": false,
                    "required": [
                      "label",
                      "entity_id",
                      "entity_type",
                      "created",
                      "updated",
                      "location_type",
                      "address"
                    ],
                    "properties": {
                      "location_id": {
                        "description": "The identifier for the location",
                        "type": "string",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_id": {
                        "x-no-api-doc": true,
                        "type": "string",
                        "description": "Customer identifier",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_type": {
                        "x-no-api-doc": true,
                        "enum": [
                          "LOC"
                        ]
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
                      "location_type": {
                        "type": "string",
                        "description": "The type of location",
                        "enum": [
                          "warehouse",
                          "facility",
                          "other"
                        ]
                      },
                      "formatted_address": {
                        "type": "string",
                        "readOnly": true,
                        "description": "Address formatted for the where region the location exists in"
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
                            "enum": [
                              "ABW",
                              "AFG",
                              "AGO",
                              "AIA",
                              "ALA",
                              "ALB",
                              "AND",
                              "ARE",
                              "ARG",
                              "ARM",
                              "ASM",
                              "ATA",
                              "ATF",
                              "ATG",
                              "AUS",
                              "AUT",
                              "AZE",
                              "BDI",
                              "BEL",
                              "BEN",
                              "BES",
                              "BFA",
                              "BGD",
                              "BGR",
                              "BHR",
                              "BHS",
                              "BIH",
                              "BLM",
                              "BLR",
                              "BLZ",
                              "BMU",
                              "BOL",
                              "BRA",
                              "BRB",
                              "BRN",
                              "BTN",
                              "BVT",
                              "BWA",
                              "CAF",
                              "CAN",
                              "CCK",
                              "CHE",
                              "CHL",
                              "CHN",
                              "CIV",
                              "CMR",
                              "COD",
                              "COG",
                              "COK",
                              "COL",
                              "COM",
                              "CPV",
                              "CRI",
                              "CUB",
                              "CUW",
                              "CXR",
                              "CYM",
                              "CYP",
                              "CZE",
                              "DEU",
                              "DJI",
                              "DMA",
                              "DNK",
                              "DOM",
                              "DZA",
                              "ECU",
                              "EGY",
                              "ERI",
                              "ESH",
                              "ESP",
                              "EST",
                              "ETH",
                              "FIN",
                              "FJI",
                              "FLK",
                              "FRA",
                              "FRO",
                              "FSM",
                              "GAB",
                              "GBR",
                              "GEO",
                              "GGY",
                              "GHA",
                              "GIB",
                              "GIN",
                              "GLP",
                              "GMB",
                              "GNB",
                              "GNQ",
                              "GRC",
                              "GRD",
                              "GRL",
                              "GTM",
                              "GUF",
                              "GUM",
                              "GUY",
                              "HKG",
                              "HMD",
                              "HND",
                              "HRV",
                              "HTI",
                              "HUN",
                              "IDN",
                              "IMN",
                              "IND",
                              "IOT",
                              "IRL",
                              "IRN",
                              "IRQ",
                              "ISL",
                              "ISR",
                              "ITA",
                              "JAM",
                              "JEY",
                              "JOR",
                              "JPN",
                              "KAZ",
                              "KEN",
                              "KGZ",
                              "KHM",
                              "KIR",
                              "KNA",
                              "KOR",
                              "KWT",
                              "LAO",
                              "LBN",
                              "LBR",
                              "LBY",
                              "LCA",
                              "LIE",
                              "LKA",
                              "LSO",
                              "LTU",
                              "LUX",
                              "LVA",
                              "MAC",
                              "MAF",
                              "MAR",
                              "MCO",
                              "MDA",
                              "MDG",
                              "MDV",
                              "MEX",
                              "MHL",
                              "MKD",
                              "MLI",
                              "MLT",
                              "MMR",
                              "MNE",
                              "MNG",
                              "MNP",
                              "MOZ",
                              "MRT",
                              "MSR",
                              "MTQ",
                              "MUS",
                              "MWI",
                              "MYS",
                              "MYT",
                              "NAM",
                              "NCL",
                              "NER",
                              "NFK",
                              "NGA",
                              "NIC",
                              "NIU",
                              "NLD",
                              "NOR",
                              "NPL",
                              "NRU",
                              "NZL",
                              "OMN",
                              "PAK",
                              "PAN",
                              "PCN",
                              "PER",
                              "PHL",
                              "PLW",
                              "PNG",
                              "POL",
                              "PRI",
                              "PRK",
                              "PRT",
                              "PRY",
                              "PSE",
                              "PYF",
                              "QAT",
                              "REU",
                              "ROU",
                              "RUS",
                              "RWA",
                              "SAU",
                              "SDN",
                              "SEN",
                              "SGP",
                              "SGS",
                              "SHN",
                              "SJM",
                              "SLB",
                              "SLE",
                              "SLV",
                              "SMR",
                              "SOM",
                              "SPM",
                              "SRB",
                              "SSD",
                              "STP",
                              "SUR",
                              "SVK",
                              "SVN",
                              "SWE",
                              "SWZ",
                              "SXM",
                              "SYC",
                              "SYR",
                              "TCA",
                              "TCD",
                              "TGO",
                              "THA",
                              "TJK",
                              "TKL",
                              "TKM",
                              "TLS",
                              "TON",
                              "TTO",
                              "TUN",
                              "TUR",
                              "TUV",
                              "TWN",
                              "TZA",
                              "UGA",
                              "UKR",
                              "UMI",
                              "URY",
                              "USA",
                              "UZB",
                              "VAT",
                              "VCT",
                              "VEN",
                              "VGB",
                              "VIR",
                              "VNM",
                              "VUT",
                              "WLF",
                              "WSM",
                              "YEM",
                              "ZAF",
                              "ZMB",
                              "ZWE"
                            ]
                          },
                          "administrative_area": {
                            "type": "string",
                            "description": "State / Province / Region"
                          },
                          "sub_administrative_area": {
                            "type": "string",
                            "description": "County / District"
                          },
                          "locality": {
                            "type": "string",
                            "description": "City / Town"
                          },
                          "postal_code": {
                            "type": "string",
                            "description": "Postal Code / Zip Code"
                          },
                          "thoroughfare": {
                            "type": "string",
                            "description": "Street Address"
                          },
                          "premise": {
                            "type": "string",
                            "description": "Apartment / Suite / Box number etc"
                          },
                          "sub_premise": {
                            "type": "string",
                            "description": "Floor # / Room # / Building label etc"
                          }
                        }
                      }
                    }
                  }
                }
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
            "href": "https://api.nterprise.com/resources"
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
            "href": "https://api.nterprise.com/resources?offset=QVBrO2wm13iEyl&limit=100"
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
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» resource_id|string|false|none|The identifier for the resource|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»»»» meta|object|false|none|Data for the resource as a key value pair|
|»»»»» **additionalProperties**|string|false|none|none|
|»»»» location|object|false|none|Defines the properties for a part unit|
|»»»»» location_id|string|false|read-only|The identifier for the location|
|»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»» entity_type|string|true|none|none|
|»»»»» label|string|true|none|Label for the entity|
|»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»» location_type|string|true|none|The type of location|
|»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»» address|object|true|none|xNAL address for the location|
|»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»» locality|string|true|none|City / Town|
|»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»»» resource|object|false|none|The parent resource if this is a child resource|
|»»»»»» resource_id|string|false|none|The identifier for the resource|
|»»»»»» entity_id|string|false|read-only|Customer identifier|
|»»»»»» entity_type|string|false|none|none|
|»»»»»» label|string|false|none|Label for the entity|
|»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»»»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»»»»»» meta|object|false|none|Data for the resource as a key value pair|
|»»»»»»» **additionalProperties**|string|false|none|none|
|»»»»»» location|object|false|none|Defines the properties for a part unit|
|»»»»»»» location_id|string|false|read-only|The identifier for the location|
|»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»» entity_type|string|true|none|none|
|»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»» location_type|string|true|none|The type of location|
|»»»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»»»» address|object|true|none|xNAL address for the location|
|»»»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»»»» locality|string|true|none|City / Town|
|»»»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»»»»» _links|object|false|none|none|
|»»»»»»»» self|object|false|none|none|
|»»»»»»»»» href|string(uri)|false|none|none|
|»»»»»»»» next|object|false|none|none|
|»»»»»»»»» href|string(uri)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|
|entity_type|RES|
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|

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

## fetchAllResourceContexts

<a id="opIdfetchAllResourceContexts"></a>

`GET /resources/{resource_id}/contexts`

*Fetches all the contexts at a resource*

Fetches all the contexts at a resource

<h3 id="fetchallresourcecontexts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_id|path|string|true|Id for the resource|
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
        "nter:contexts": {
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
                      "href": "https://api.nterprise.com/contexts/kk9z7zwvQYH5GKx"
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
              "context_id": {
                "description": "Identifier for the context",
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
              "workflow": {
                "type": "object",
                "description": "Workflow",
                "additionalProperties": false,
                "required": [
                  "label",
                  "entity_id",
                  "entity_type",
                  "created",
                  "updated",
                  "steps",
                  "starts_at",
                  "applies_to",
                  "schema_version"
                ],
                "properties": {
                  "work_flow_id": {
                    "type": "string",
                    "description": "Customer identifier",
                    "readOnly": true,
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_id": {
                    "x-no-api-doc": true,
                    "type": "string",
                    "description": "Customer identifier",
                    "readOnly": true,
                    "pattern": "^[0-9a-zA-Z-_]+$"
                  },
                  "entity_type": {
                    "x-no-api-doc": true,
                    "enum": [
                      "WKF"
                    ]
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
                  "schema_version": {
                    "type": "string",
                    "description": "Version of the workflow schema used",
                    "enum": [
                      "1.0"
                    ]
                  },
                  "workflow_version": {
                    "type": "integer",
                    "description": "Version number for the work flows (the number of times it has been changed",
                    "readOnly": true
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
                    ]
                  },
                  "starts_at": {
                    "type": "string",
                    "description": "Starting step"
                  },
                  "steps": {
                    "type": "object",
                    "description": "Steps for the workflow",
                    "uniqueItems": true,
                    "additionalProperties": true,
                    "x-patternProperties": {
                      "^[A-Za-z][A-Za-z0-9_]*$": {
                        "anyOf": [
                          {
                            "$schema": "http://json-schema.org/draft-07/schema#",
                            "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/function/allocateUnitsToProject.json",
                            "type": "object",
                            "description": "Require the user confirm an action. This is normally used when Niagara cannot automatically detect that a task or action has been performed.",
                            "properties": {
                              "label": {
                                "type": "string",
                                "description": "Label for the entity"
                              },
                              "options": {
                                "type": "object",
                                "required": [
                                  "function",
                                  "payload"
                                ],
                                "properties": {
                                  "function": {
                                    "type": "string",
                                    "enum": [
                                      "allocate-units-to-project"
                                    ]
                                  },
                                  "payload": {
                                    "type": "object",
                                    "required": [
                                      "part_id",
                                      "project_id",
                                      "qty"
                                    ],
                                    "properties": {
                                      "part_id": {
                                        "type": "string",
                                        "description": "Part ID of the to assign"
                                      },
                                      "program_id": {
                                        "type": "string",
                                        "description": "Program ID of the to assign"
                                      },
                                      "qty": {
                                        "type": "number",
                                        "minimum": 1,
                                        "description": "Number of units to assign to the project"
                                      },
                                      "allow_scarcity": {
                                        "type": "boolean",
                                        "description": "Allow the workflow to continue even if there are not enough units"
                                      },
                                      "force": {
                                        "type": "boolean",
                                        "description": "Assign the units even if the project already has units allocated"
                                      },
                                      "status": {
                                        "type": "string",
                                        "description": "Only assign units which are in this status"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          {
                            "$schema": "http://json-schema.org/draft-07/schema#",
                            "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/followPDFInstructions.json",
                            "type": "object",
                            "description": "Display a link or modal to a user which contains instructions from a PDF",
                            "required": [
                              "label",
                              "payload"
                            ],
                            "properties": {
                              "label": {
                                "type": "string",
                                "description": "Label for the step"
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
                                        "format": "uuid"
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "allOf": [
                              {
                                "$schema": "http://json-schema.org/draft-07/schema#",
                                "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepUser.json",
                                "type": "object",
                                "description": "A step which requires a user to complete",
                                "required": [
                                  "type",
                                  "options"
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
                                  "options": {
                                    "type": "object",
                                    "required": [
                                      "component",
                                      "payload"
                                    ],
                                    "properties": {
                                      "component": {
                                        "type": "string",
                                        "description": "Name of the function to invoke"
                                      },
                                      "payload": {
                                        "type": "object"
                                      }
                                    }
                                  }
                                },
                                "allOf": [
                                  {
                                    "$schema": "http://json-schema.org/draft-07/schema#",
                                    "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepCommon.json",
                                    "type": "object",
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
                                        "description": "Label for the step"
                                      },
                                      "goto": {
                                        "type": "string",
                                        "description": "Step to move to",
                                        "pattern": "^[a-z][a-z-]+[a-z]$"
                                      },
                                      "goto-fail": {
                                        "type": "string",
                                        "description": "Step to transition too if this step cannot be completed",
                                        "pattern": "^[a-z][a-z-]+[a-z]$"
                                      },
                                      "onComplete": {
                                        "$schema": "http://json-schema.org/draft-07/schema#",
                                        "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                        "type": "object",
                                        "required": [
                                          "retry",
                                          "finally"
                                        ],
                                        "properties": {
                                          "actions": {
                                            "type": "array",
                                            "description": "Actions to take on failure",
                                            "maxItems": 10,
                                            "items": {
                                              "type": "object"
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
                            "$schema": "http://json-schema.org/draft-07/schema#",
                            "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/manualDataEntry.json",
                            "type": "object",
                            "description": "Ask the user to manually enter (or confirm) data for an entity",
                            "properties": {
                              "label": {
                                "type": "string",
                                "description": "Label for the step"
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
                                              "description": "Label to display for the field"
                                            },
                                            "required": {
                                              "type": "boolean",
                                              "description": "Display the field as required input. Note: this is a helper function. It singles that the user is required to input data at this step. If the field is required on the entity, the user will be presented with a validation message"
                                            },
                                            "entity_field": {
                                              "type": "string",
                                              "description": "JSON Path to the field on the entity. If the path does not start with '$' then the entity on the context is assumed. Otherwise the data will be set on the context path"
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
                                "$schema": "http://json-schema.org/draft-07/schema#",
                                "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepUser.json",
                                "type": "object",
                                "description": "A step which requires a user to complete",
                                "required": [
                                  "type",
                                  "options"
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
                                  "options": {
                                    "type": "object",
                                    "required": [
                                      "component",
                                      "payload"
                                    ],
                                    "properties": {
                                      "component": {
                                        "type": "string",
                                        "description": "Name of the function to invoke"
                                      },
                                      "payload": {
                                        "type": "object"
                                      }
                                    }
                                  }
                                },
                                "allOf": [
                                  {
                                    "$schema": "http://json-schema.org/draft-07/schema#",
                                    "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepCommon.json",
                                    "type": "object",
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
                                        "description": "Label for the step"
                                      },
                                      "goto": {
                                        "type": "string",
                                        "description": "Step to move to",
                                        "pattern": "^[a-z][a-z-]+[a-z]$"
                                      },
                                      "goto-fail": {
                                        "type": "string",
                                        "description": "Step to transition too if this step cannot be completed",
                                        "pattern": "^[a-z][a-z-]+[a-z]$"
                                      },
                                      "onComplete": {
                                        "$schema": "http://json-schema.org/draft-07/schema#",
                                        "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                        "type": "object",
                                        "required": [
                                          "retry",
                                          "finally"
                                        ],
                                        "properties": {
                                          "actions": {
                                            "type": "array",
                                            "description": "Actions to take on failure",
                                            "maxItems": 10,
                                            "items": {
                                              "type": "object"
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
                            "$schema": "http://json-schema.org/draft-07/schema#",
                            "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/taskList.json",
                            "type": "object",
                            "description": "Ask the user to follow a list and check off boxes",
                            "properties": {
                              "label": {
                                "type": "string",
                                "description": "Label for the step"
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
                                            "evaluated",
                                            "na_option"
                                          ],
                                          "properties": {
                                            "label": {
                                              "type": "string",
                                              "description": "Label to display for the field"
                                            },
                                            "slug": {
                                              "type": "string",
                                              "description": "Slug for the item (Auto-generated from the label)",
                                              "readOnly": true,
                                              "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                                            },
                                            "help": {
                                              "type": "string",
                                              "description": "Message describing what is needed to be checked"
                                            },
                                            "evaluated": {
                                              "type": "boolean",
                                              "description": "When set to true, this will fail the step if the value for the item is false or N/A"
                                            },
                                            "na_field": {
                                              "type": "boolean",
                                              "description": "Allow the user to select the N/A option when checking off the list"
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
                                "$schema": "http://json-schema.org/draft-07/schema#",
                                "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepUser.json",
                                "type": "object",
                                "description": "A step which requires a user to complete",
                                "required": [
                                  "type",
                                  "options"
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
                                  "options": {
                                    "type": "object",
                                    "required": [
                                      "component",
                                      "payload"
                                    ],
                                    "properties": {
                                      "component": {
                                        "type": "string",
                                        "description": "Name of the function to invoke"
                                      },
                                      "payload": {
                                        "type": "object"
                                      }
                                    }
                                  }
                                },
                                "allOf": [
                                  {
                                    "$schema": "http://json-schema.org/draft-07/schema#",
                                    "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepCommon.json",
                                    "type": "object",
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
                                        "description": "Label for the step"
                                      },
                                      "goto": {
                                        "type": "string",
                                        "description": "Step to move to",
                                        "pattern": "^[a-z][a-z-]+[a-z]$"
                                      },
                                      "goto-fail": {
                                        "type": "string",
                                        "description": "Step to transition too if this step cannot be completed",
                                        "pattern": "^[a-z][a-z-]+[a-z]$"
                                      },
                                      "onComplete": {
                                        "$schema": "http://json-schema.org/draft-07/schema#",
                                        "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                        "type": "object",
                                        "required": [
                                          "retry",
                                          "finally"
                                        ],
                                        "properties": {
                                          "actions": {
                                            "type": "array",
                                            "description": "Actions to take on failure",
                                            "maxItems": 10,
                                            "items": {
                                              "type": "object"
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
                            "$schema": "http://json-schema.org/draft-07/schema#",
                            "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/machine/aceIos.json",
                            "type": "object",
                            "description": "Run the ACE-IOS application to provision iOS devices or ",
                            "properties": {
                              "type": {
                                "type": "string",
                                "enum": [
                                  "machine"
                                ]
                              },
                              "label": {
                                "type": "string",
                                "description": "Label for the step"
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
                                        "description": "Contents of a *.crt file exported from Apple Configurator or MDM",
                                        "pattern": "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
                                      },
                                      "pairing_key": {
                                        "type": "string",
                                        "description": "Contents of a *.der file exported from Apple Configurator or MDM",
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
                                            "description": "Base URL for HTTP requests"
                                          },
                                          "user": {
                                            "type": "string",
                                            "description": "MDM User name"
                                          },
                                          "password": {
                                            "type": "string",
                                            "description": "MDM password"
                                          },
                                          "tenant_code": {
                                            "type": "string",
                                            "description": "MDM authentication key"
                                          },
                                          "set_asset_tag": {
                                            "type": "string",
                                            "description": "Sets the devices Asset tag based on a field from the unit"
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
                                              "description": "Field to set on the entity"
                                            }
                                          }
                                        }
                                      },
                                      "wait_for_apps": {
                                        "type": "array",
                                        "description": "A list of applications needed to be installed on the device. This will cause the extension to poll the device for installed applications. Once all the applications have been installed, this step can be completed",
                                        "items": {
                                          "type": "string",
                                          "format": "uri"
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
                            }
                          },
                          {
                            "$schema": "http://json-schema.org/draft-07/schema#",
                            "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepChoice.json",
                            "type": "object",
                            "description": "A Step choice",
                            "maxProperties": 2,
                            "minProperties": 2,
                            "required": [
                              "decision"
                            ],
                            "properties": {
                              "decision": {
                                "type": "array",
                                "description": "Context variable to check",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "variable": {
                                      "type": "string",
                                      "description": "Variable or value"
                                    },
                                    "operator": {
                                      "type": "string",
                                      "description": "Operator to perform",
                                      "enum": [
                                        "greater_than_equals",
                                        "less_than_equals",
                                        "greater_than",
                                        "less_than",
                                        "equals",
                                        "not_equals"
                                      ]
                                    },
                                    "operand": {
                                      "type": "string",
                                      "description": "operand to compare with"
                                    }
                                  }
                                }
                              }
                            },
                            "allOf": [
                              {
                                "$schema": "http://json-schema.org/draft-07/schema#",
                                "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepNext.json",
                                "type": "object",
                                "required": [
                                  "type",
                                  "label",
                                  "goto"
                                ],
                                "properties": {
                                  "goto": {
                                    "type": "string",
                                    "description": "Step to move to",
                                    "pattern": "^[a-z][a-z-]+[a-z]$"
                                  },
                                  "goto-fail": {
                                    "type": "string",
                                    "description": "Step to transition too if this step cannot be completed",
                                    "pattern": "^[a-z][a-z-]+[a-z]$"
                                  },
                                  "context": {
                                    "type": "array",
                                    "description": "Values to set on the context",
                                    "items": {
                                      "type": "object",
                                      "required": [
                                        "key",
                                        "value"
                                      ],
                                      "properties": {
                                        "key": {
                                          "type": "string",
                                          "description": "The context key to set"
                                        },
                                        "value": {
                                          "type": "string",
                                          "description": "Value to set"
                                        },
                                        "lock": {
                                          "type": "boolean",
                                          "description": "Prevents other steps from writing this value"
                                        },
                                        "ignore": {
                                          "type": "boolean",
                                          "description": "When trying to set a locked key, do not fail"
                                        }
                                      }
                                    }
                                  },
                                  "onStart": {
                                    "$schema": "http://json-schema.org/draft-07/schema#",
                                    "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                    "type": "object",
                                    "required": [
                                      "retry",
                                      "finally"
                                    ],
                                    "properties": {
                                      "actions": {
                                        "type": "array",
                                        "description": "Actions to take on failure",
                                        "maxItems": 10,
                                        "items": {
                                          "type": "object"
                                        }
                                      }
                                    }
                                  },
                                  "onError": {
                                    "$schema": "http://json-schema.org/draft-07/schema#",
                                    "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepError.json",
                                    "type": "object",
                                    "required": [
                                      "retry",
                                      "finally"
                                    ],
                                    "properties": {
                                      "retry": {
                                        "type": "integer",
                                        "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                        "minimum": 0,
                                        "maximum": 10,
                                        "default": 0
                                      },
                                      "finally": {
                                        "type": "object",
                                        "description": "What to do after all retries",
                                        "properties": {
                                          "actions": {
                                            "$schema": "http://json-schema.org/draft-07/schema#",
                                            "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                            "type": "object",
                                            "required": [
                                              "retry",
                                              "finally"
                                            ],
                                            "properties": {
                                              "actions": {
                                                "type": "array",
                                                "description": "Actions to take on failure",
                                                "maxItems": 10,
                                                "items": {
                                                  "type": "object"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "onTimeout": {
                                    "$schema": "http://json-schema.org/draft-07/schema#",
                                    "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepError.json",
                                    "type": "object",
                                    "required": [
                                      "retry",
                                      "finally"
                                    ],
                                    "properties": {
                                      "retry": {
                                        "type": "integer",
                                        "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                        "minimum": 0,
                                        "maximum": 10,
                                        "default": 0
                                      },
                                      "finally": {
                                        "type": "object",
                                        "description": "What to do after all retries",
                                        "properties": {
                                          "actions": {
                                            "$schema": "http://json-schema.org/draft-07/schema#",
                                            "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                            "type": "object",
                                            "required": [
                                              "retry",
                                              "finally"
                                            ],
                                            "properties": {
                                              "actions": {
                                                "type": "array",
                                                "description": "Actions to take on failure",
                                                "maxItems": 10,
                                                "items": {
                                                  "type": "object"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "$schema": "http://json-schema.org/draft-07/schema#",
                            "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepFail.json",
                            "type": "object",
                            "description": "Finial step which is marked as failed",
                            "properties": {
                              "label": {
                                "type": "string",
                                "description": "Label for the step"
                              },
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
                              "onComplete": {
                                "$schema": "http://json-schema.org/draft-07/schema#",
                                "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                "type": "object",
                                "required": [
                                  "retry",
                                  "finally"
                                ],
                                "properties": {
                                  "actions": {
                                    "type": "array",
                                    "description": "Actions to take on failure",
                                    "maxItems": 10,
                                    "items": {
                                      "type": "object"
                                    }
                                  }
                                }
                              }
                            }
                          },
                          {
                            "$schema": "http://json-schema.org/draft-07/schema#",
                            "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepPass.json",
                            "type": "object",
                            "description": "Allows executing actions with out performing any function",
                            "properties": {
                              "label": {
                                "type": "string",
                                "description": "Label for the entity"
                              },
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
                              }
                            },
                            "allOf": [
                              {
                                "$schema": "http://json-schema.org/draft-07/schema#",
                                "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepCommon.json",
                                "type": "object",
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
                                    "description": "Label for the step"
                                  },
                                  "goto": {
                                    "type": "string",
                                    "description": "Step to move to",
                                    "pattern": "^[a-z][a-z-]+[a-z]$"
                                  },
                                  "goto-fail": {
                                    "type": "string",
                                    "description": "Step to transition too if this step cannot be completed",
                                    "pattern": "^[a-z][a-z-]+[a-z]$"
                                  },
                                  "onComplete": {
                                    "$schema": "http://json-schema.org/draft-07/schema#",
                                    "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                    "type": "object",
                                    "required": [
                                      "retry",
                                      "finally"
                                    ],
                                    "properties": {
                                      "actions": {
                                        "type": "array",
                                        "description": "Actions to take on failure",
                                        "maxItems": 10,
                                        "items": {
                                          "type": "object"
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "$schema": "http://json-schema.org/draft-07/schema#",
                            "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepSuccess.json",
                            "type": "object",
                            "description": "Finial step which is marked as completed successfully",
                            "properties": {
                              "label": {
                                "type": "string",
                                "description": "Label for the step"
                              },
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
                              "onComplete": {
                                "$schema": "http://json-schema.org/draft-07/schema#",
                                "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                "type": "object",
                                "required": [
                                  "retry",
                                  "finally"
                                ],
                                "properties": {
                                  "actions": {
                                    "type": "array",
                                    "description": "Actions to take on failure",
                                    "maxItems": 10,
                                    "items": {
                                      "type": "object"
                                    }
                                  }
                                }
                              }
                            }
                          },
                          {
                            "$schema": "http://json-schema.org/draft-07/schema#",
                            "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepWait.json",
                            "type": "object",
                            "description": "A step which run at certain times",
                            "required": [
                              "stop_at",
                              "time"
                            ],
                            "properties": {
                              "label": {
                                "type": "string",
                                "description": "Label for the step"
                              },
                              "type": {
                                "type": "string",
                                "enum": [
                                  "wait"
                                ]
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
                                          "$schema": "http://json-schema.org/draft-07/schema#",
                                          "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepChoice.json",
                                          "type": "object",
                                          "description": "A Step choice",
                                          "maxProperties": 2,
                                          "minProperties": 2,
                                          "required": [
                                            "decision"
                                          ],
                                          "properties": {
                                            "decision": {
                                              "type": "array",
                                              "description": "Context variable to check",
                                              "items": {
                                                "type": "object",
                                                "properties": {
                                                  "variable": {
                                                    "type": "string",
                                                    "description": "Variable or value"
                                                  },
                                                  "operator": {
                                                    "type": "string",
                                                    "description": "Operator to perform",
                                                    "enum": [
                                                      "greater_than_equals",
                                                      "less_than_equals",
                                                      "greater_than",
                                                      "less_than",
                                                      "equals",
                                                      "not_equals"
                                                    ]
                                                  },
                                                  "operand": {
                                                    "type": "string",
                                                    "description": "operand to compare with"
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "allOf": [
                                            {
                                              "$schema": "http://json-schema.org/draft-07/schema#",
                                              "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepNext.json",
                                              "type": "object",
                                              "required": [
                                                "type",
                                                "label",
                                                "goto"
                                              ],
                                              "properties": {
                                                "goto": {
                                                  "type": "string",
                                                  "description": "Step to move to",
                                                  "pattern": "^[a-z][a-z-]+[a-z]$"
                                                },
                                                "goto-fail": {
                                                  "type": "string",
                                                  "description": "Step to transition too if this step cannot be completed",
                                                  "pattern": "^[a-z][a-z-]+[a-z]$"
                                                },
                                                "context": {
                                                  "type": "array",
                                                  "description": "Values to set on the context",
                                                  "items": {
                                                    "type": "object",
                                                    "required": [
                                                      "key",
                                                      "value"
                                                    ],
                                                    "properties": {
                                                      "key": {
                                                        "type": "string",
                                                        "description": "The context key to set"
                                                      },
                                                      "value": {
                                                        "type": "string",
                                                        "description": "Value to set"
                                                      },
                                                      "lock": {
                                                        "type": "boolean",
                                                        "description": "Prevents other steps from writing this value"
                                                      },
                                                      "ignore": {
                                                        "type": "boolean",
                                                        "description": "When trying to set a locked key, do not fail"
                                                      }
                                                    }
                                                  }
                                                },
                                                "onStart": {
                                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                                  "type": "object",
                                                  "required": [
                                                    "retry",
                                                    "finally"
                                                  ],
                                                  "properties": {
                                                    "actions": {
                                                      "type": "array",
                                                      "description": "Actions to take on failure",
                                                      "maxItems": 10,
                                                      "items": {
                                                        "type": "object"
                                                      }
                                                    }
                                                  }
                                                },
                                                "onError": {
                                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepError.json",
                                                  "type": "object",
                                                  "required": [
                                                    "retry",
                                                    "finally"
                                                  ],
                                                  "properties": {
                                                    "retry": {
                                                      "type": "integer",
                                                      "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                      "minimum": 0,
                                                      "maximum": 10,
                                                      "default": 0
                                                    },
                                                    "finally": {
                                                      "type": "object",
                                                      "description": "What to do after all retries",
                                                      "properties": {
                                                        "actions": {
                                                          "$schema": "http://json-schema.org/draft-07/schema#",
                                                          "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                                          "type": "object",
                                                          "required": [
                                                            "retry",
                                                            "finally"
                                                          ],
                                                          "properties": {
                                                            "actions": {
                                                              "type": "array",
                                                              "description": "Actions to take on failure",
                                                              "maxItems": 10,
                                                              "items": {
                                                                "type": "object"
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "onTimeout": {
                                                  "$schema": "http://json-schema.org/draft-07/schema#",
                                                  "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepError.json",
                                                  "type": "object",
                                                  "required": [
                                                    "retry",
                                                    "finally"
                                                  ],
                                                  "properties": {
                                                    "retry": {
                                                      "type": "integer",
                                                      "description": "Number of times to retry this step. Note: retry will only occur on steps which automatically failed. If the step was transitioned using the 'goto-fail' step, the actions will be fired but the step WILL NOT be re-tried",
                                                      "minimum": 0,
                                                      "maximum": 10,
                                                      "default": 0
                                                    },
                                                    "finally": {
                                                      "type": "object",
                                                      "description": "What to do after all retries",
                                                      "properties": {
                                                        "actions": {
                                                          "$schema": "http://json-schema.org/draft-07/schema#",
                                                          "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                                          "type": "object",
                                                          "required": [
                                                            "retry",
                                                            "finally"
                                                          ],
                                                          "properties": {
                                                            "actions": {
                                                              "type": "array",
                                                              "description": "Actions to take on failure",
                                                              "maxItems": 10,
                                                              "items": {
                                                                "type": "object"
                                                              }
                                                            }
                                                          }
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
                                  }
                                }
                              }
                            },
                            "allOf": [
                              {
                                "$schema": "http://json-schema.org/draft-07/schema#",
                                "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepCommon.json",
                                "type": "object",
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
                                    "description": "Label for the step"
                                  },
                                  "goto": {
                                    "type": "string",
                                    "description": "Step to move to",
                                    "pattern": "^[a-z][a-z-]+[a-z]$"
                                  },
                                  "goto-fail": {
                                    "type": "string",
                                    "description": "Step to transition too if this step cannot be completed",
                                    "pattern": "^[a-z][a-z-]+[a-z]$"
                                  },
                                  "onComplete": {
                                    "$schema": "http://json-schema.org/draft-07/schema#",
                                    "$id": "https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json",
                                    "type": "object",
                                    "required": [
                                      "retry",
                                      "finally"
                                    ],
                                    "properties": {
                                      "actions": {
                                        "type": "array",
                                        "description": "Actions to take on failure",
                                        "maxItems": 10,
                                        "items": {
                                          "type": "object"
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
                    }
                  }
                }
              },
              "current_step": {
                "type": "string",
                "description": "The current step to execute",
                "readOnly": true
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
                      "readOnly": true
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
                      "readOnly": true
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
                "type": "number",
                "description": "The total time it took to run the workflow (with milliseconds)",
                "readOnly": true
              },
              "active": {
                "type": "boolean",
                "description": "Flag set if there are still steps which need to be executed",
                "readOnly": true
              },
              "waiting_for_user": {
                "type": "boolean",
                "description": "Flag for when the user needs to complete the step"
              },
              "data": {
                "type": "object",
                "description": "Data set for the context",
                "additionalProperties": true,
                "readOnly": true
              },
              "entity": {
                "type": "object",
                "additionalProperties": false,
                "readOnly": true,
                "anyOf": [
                  {
                    "type": "object",
                    "description": "Contact Information",
                    "additionalProperties": false,
                    "required": [
                      "label",
                      "entity_id",
                      "entity_type",
                      "created",
                      "updated"
                    ],
                    "properties": {
                      "contact_id": {
                        "description": "Identifier for the contact",
                        "type": "string",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_id": {
                        "x-no-api-doc": true,
                        "type": "string",
                        "description": "Customer identifier",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_type": {
                        "x-no-api-doc": true,
                        "enum": [
                          "CON"
                        ]
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
                      "email": {
                        "type": "string",
                        "format": "email",
                        "description": "Email address"
                      },
                      "name": {
                        "type": "string",
                        "description": "Contact name"
                      },
                      "phone": {
                        "type": "string",
                        "description": "Phone number"
                      }
                    },
                    "allOf": [
                      {
                        "type": "object",
                        "description": "Common Properties to all entities",
                        "required": [
                          "label"
                        ],
                        "properties": {
                          "entity_id": {
                            "type": "string",
                            "description": "Customer identifier",
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
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "object",
                    "description": "Customer",
                    "additionalProperties": false,
                    "required": [
                      "label",
                      "entity_id",
                      "entity_type",
                      "created",
                      "updated",
                      "allowed_statuses"
                    ],
                    "properties": {
                      "customer_id": {
                        "description": "Customer identifier",
                        "type": "string",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_id": {
                        "x-no-api-doc": true,
                        "type": "string",
                        "description": "Customer identifier",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_type": {
                        "x-no-api-doc": true,
                        "enum": [
                          "CUS"
                        ]
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
                      "external_platform": {
                        "type": "object",
                        "description": "External Identifiers for the customer",
                        "deprecated": true,
                        "x-patternProperties": {
                          "^[A-Za-z][A-Za-z0-9_]*$": {
                            "type": "string"
                          }
                        }
                      },
                      "allowed_statuses": {
                        "type": "array",
                        "description": "List of allowed statuses",
                        "uniqueItems": true,
                        "items": {
                          "type": "object",
                          "description": "Defines the properties for a status",
                          "additionalProperties": false,
                          "required": [
                            "status",
                            "category"
                          ],
                          "properties": {
                            "status": {
                              "type": "string",
                              "description": "A Custom label for the status",
                              "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                            },
                            "category": {
                              "type": "string",
                              "description": "The classifier for the statues",
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
                      "total_programs": {
                        "type": "number",
                        "description": "Total programs under the customer"
                      },
                      "total_projects": {
                        "type": "number",
                        "description": "Total projects under the customer"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "description": "Defines the properties for a part",
                    "additionalProperties": false,
                    "required": [
                      "label",
                      "entity_id",
                      "entity_type",
                      "created",
                      "updated",
                      "customer",
                      "manufacturer"
                    ],
                    "properties": {
                      "part_id": {
                        "description": "Unique identifier",
                        "type": "string",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_id": {
                        "x-no-api-doc": true,
                        "type": "string",
                        "description": "Customer identifier",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_type": {
                        "x-no-api-doc": true,
                        "enum": [
                          "PART"
                        ]
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
                      "customer": {
                        "type": "object",
                        "description": "Customer",
                        "additionalProperties": false,
                        "required": [
                          "label",
                          "entity_id",
                          "entity_type",
                          "created",
                          "updated",
                          "allowed_statuses"
                        ],
                        "properties": {
                          "customer_id": {
                            "description": "Customer identifier",
                            "type": "string",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_id": {
                            "x-no-api-doc": true,
                            "type": "string",
                            "description": "Customer identifier",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_type": {
                            "x-no-api-doc": true,
                            "enum": [
                              "CUS"
                            ]
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
                          "external_platform": {
                            "type": "object",
                            "description": "External Identifiers for the customer",
                            "deprecated": true,
                            "x-patternProperties": {
                              "^[A-Za-z][A-Za-z0-9_]*$": {
                                "type": "string"
                              }
                            }
                          },
                          "allowed_statuses": {
                            "type": "array",
                            "description": "List of allowed statuses",
                            "uniqueItems": true,
                            "items": {
                              "type": "object",
                              "description": "Defines the properties for a status",
                              "additionalProperties": false,
                              "required": [
                                "status",
                                "category"
                              ],
                              "properties": {
                                "status": {
                                  "type": "string",
                                  "description": "A Custom label for the status",
                                  "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                                },
                                "category": {
                                  "type": "string",
                                  "description": "The classifier for the statues",
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
                          "total_programs": {
                            "type": "number",
                            "description": "Total programs under the customer"
                          },
                          "total_projects": {
                            "type": "number",
                            "description": "Total projects under the customer"
                          }
                        }
                      },
                      "manufacturer": {
                        "type": "object",
                        "description": "Manufacturer information for the part",
                        "required": [
                          "part_number"
                        ],
                        "properties": {
                          "part_number": {
                            "type": "string",
                            "description": "Manufacturer part number"
                          }
                        },
                        "additionalProperties": false
                      },
                      "serial_prefix": {
                        "type": "string",
                        "description": "A serial number prefix for the part"
                      },
                      "input_filter": {
                        "type": "array",
                        "description": "Input Filters allow custom fields to be defined for entities",
                        "items": {
                          "type": "object",
                          "description": "Input filter specification",
                          "required": [
                            "label",
                            "key",
                            "filters",
                            "validators"
                          ],
                          "properties": {
                            "label": {
                              "type": "string",
                              "description": "Human readable name"
                            },
                            "key": {
                              "type": "string",
                              "description": "Slug used to store the property",
                              "readOnly": true,
                              "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                            },
                            "filters": {
                              "type": "array",
                              "description": "A Collection of filters applied to the field",
                              "maxItems": 100,
                              "items": {
                                "anyOf": [
                                  {
                                    "type": "object",
                                    "description": "This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "allowed_list"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "approved_values"
                                        ],
                                        "properties": {
                                          "approved_values": {
                                            "type": "array",
                                            "minimum": 1,
                                            "maximum": 100,
                                            "description": "The list of approved values",
                                            "items": {
                                              "type": "string"
                                            }
                                          },
                                          "check_case": {
                                            "type": "boolean",
                                            "description": "Perform a case sensitive match. By default will not match case",
                                            "default": false
                                          },
                                          "default": {
                                            "type": "string",
                                            "description": "If this is set and the value is not in the approved_list, set the value to this",
                                            "nullable": true
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Make the value camelCase",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "camel"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "This filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Filter to transform a value into a date",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "date"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "Date filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:\n# The number 0 or 0.0\n# empty string ''\n# A boolean false\n# The word 'false'\n# ",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "empty"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "empty filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Filter to transform a value into a float. Non numeric characters (including comma) will be removed",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "float"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "properties": {
                                          "precision": {
                                            "type": "integer",
                                            "minimum": 1,
                                            "maximum": 8,
                                            "default": 3,
                                            "description": "How many decimal places to preserve"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Make the value kebab-case",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "kebab"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "This filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Make the value lowercase",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "lower"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "This filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "number"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "Number filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "prefix"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "prefix"
                                        ],
                                        "properties": {
                                          "prefix": {
                                            "type": "string",
                                            "description": "The prefix to add"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Make the value snake_case",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "snake"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "This filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Filter to transform a value into a string",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "string"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "String filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "description": "Add a suffix to the start of a string. If the string already start with the suffix, it will not append.",
                                    "type": "object",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "suffix"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "suffix"
                                        ],
                                        "properties": {
                                          "suffix": {
                                            "type": "string",
                                            "description": "The suffix to add"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Filter to trim whitespace from a value",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "trim"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "By default will trim from the start and end",
                                        "properties": {
                                          "start": {
                                            "type": "boolean",
                                            "description": "Remove white space from the start of the string",
                                            "default": true
                                          },
                                          "end": {
                                            "type": "boolean",
                                            "description": "Remove white space from the end of the string",
                                            "default": true
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Make the value UPPERCASE",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "upper"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "This filter has no options"
                                      }
                                    }
                                  }
                                ]
                              }
                            },
                            "validators": {
                              "type": "array",
                              "description": "A set of validators to use for this field",
                              "maxItems": 100,
                              "items": {
                                "anyOf": [
                                  {
                                    "type": "object",
                                    "description": "Validate number is between two values. By default, min and max are included",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "greater_than"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "min",
                                          "max"
                                        ],
                                        "properties": {
                                          "min": {
                                            "type": "number",
                                            "description": "Minimum value to check"
                                          },
                                          "max": {
                                            "type": "number",
                                            "description": "The maximum value to check"
                                          },
                                          "precision": {
                                            "type": "integer",
                                            "description": "When number is a float, this will set the decimal precision",
                                            "minimum": 1,
                                            "maximum": 8,
                                            "default": 3
                                          },
                                          "include": {
                                            "type": "boolean",
                                            "description": "Include the value in the check",
                                            "default": true
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate value does not match a list (black list)",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "white_list"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "list"
                                        ],
                                        "properties": {
                                          "list": {
                                            "type": "array",
                                            "minimum": 1,
                                            "maximum": 100,
                                            "description": "The list of approved values",
                                            "items": {
                                              "type": "string"
                                            }
                                          },
                                          "check_case": {
                                            "type": "boolean",
                                            "description": "Perform a case sensitive match. By default will not match case",
                                            "default": false
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string contains a value",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "contains"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "contains"
                                        ],
                                        "properties": {
                                          "contains": {
                                            "type": "string",
                                            "description": "String must contain with this value"
                                          },
                                          "check_case": {
                                            "type": "boolean",
                                            "description": "Perform a case sensitive match. By default will not match case",
                                            "default": false
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string is a correct email address",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "email_address"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "properties": {
                                          "strict": {
                                            "type": "boolean",
                                            "description": "Enforce strict standards from ARPA. This will enforce the length of the string",
                                            "default": true
                                          },
                                          "lookup": {
                                            "type": "boolean",
                                            "description": "Look up the host name and check if it has a valid MX record",
                                            "default": false
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string ends with a value",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "ends_with"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "ends_with"
                                        ],
                                        "properties": {
                                          "ends_with": {
                                            "type": "string",
                                            "description": "String must end with this value"
                                          },
                                          "check_case": {
                                            "type": "boolean",
                                            "description": "Perform a case sensitive match. By default will not match case",
                                            "default": false
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate number equals a value",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "equals"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "value"
                                        ],
                                        "properties": {
                                          "value": {
                                            "type": "number",
                                            "description": "The value to compare against"
                                          },
                                          "precision": {
                                            "type": "integer",
                                            "description": "When value is a float, this will set the decimal precision",
                                            "minimum": 1,
                                            "maximum": 8,
                                            "default": 3
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate number is greater than a value. By default, this will check if value is greater than or equals to",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "greater_than"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "value"
                                        ],
                                        "properties": {
                                          "value": {
                                            "type": "number",
                                            "description": "The value to compare against"
                                          },
                                          "precision": {
                                            "type": "integer",
                                            "description": "When number is a float, this will set the decimal precision",
                                            "minimum": 1,
                                            "maximum": 8,
                                            "default": 3
                                          },
                                          "include": {
                                            "type": "boolean",
                                            "description": "Include the value in the check",
                                            "default": true
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string has a correct DNS records",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "hostname"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "properties": {
                                          "record_type": {
                                            "type": "string",
                                            "description": "DNS record type to validate",
                                            "default": "A",
                                            "enum": [
                                              "A",
                                              "AAAA",
                                              "AFSDB",
                                              "APL",
                                              "CAA",
                                              "CDNSKEY",
                                              "CDS",
                                              "CERT",
                                              "CNAME",
                                              "CSYNC",
                                              "DHCID",
                                              "DLV",
                                              "DNAME",
                                              "DNSKEY",
                                              "DS",
                                              "HIP",
                                              "IPSECKEY",
                                              "KEY",
                                              "KX",
                                              "LOC",
                                              "MX",
                                              "NAPTR",
                                              "NS",
                                              "NSEC",
                                              "NSEC3",
                                              "NSEC3PARAM",
                                              "OPENPGPKEY",
                                              "PTR",
                                              "RRSIG",
                                              "RP",
                                              "SIG",
                                              "SMIMEA",
                                              "SOA",
                                              "SRV",
                                              "SSHFP",
                                              "TA",
                                              "TKEY",
                                              "TLSA",
                                              "TSIG",
                                              "TXT",
                                              "URI"
                                            ]
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string matches an IP address format. Defaults to matching IPv4",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "ipAddress"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "properties": {
                                          "versions": {
                                            "type": "array",
                                            "description": "IP Version to match against",
                                            "items": {
                                              "type": "string",
                                              "enum": [
                                                "IPv4",
                                                "IPv6"
                                              ]
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string is a certain length",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "length"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "length"
                                        ],
                                        "properties": {
                                          "length": {
                                            "type": "string",
                                            "description": "String must contain with this value"
                                          },
                                          "operator": {
                                            "type": "string",
                                            "description": "Which type of length comparision to make",
                                            "default": "equals",
                                            "enum": [
                                              "equals",
                                              "less_than",
                                              "less_than_equals",
                                              "greater_than",
                                              "greater_than_equals"
                                            ]
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate number is less than a value. By default, this will check if value is less than or equals to",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "lessThan"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "value"
                                        ],
                                        "properties": {
                                          "value": {
                                            "type": "number",
                                            "description": "The value to compare against"
                                          },
                                          "precision": {
                                            "type": "integer",
                                            "description": "When number is a float, this will set the decimal precision",
                                            "minimum": 1,
                                            "maximum": 8,
                                            "default": 3
                                          },
                                          "include": {
                                            "type": "boolean",
                                            "description": "Include the value in the check",
                                            "default": true
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string matches an MAC address format",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "macAddress"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "This validator has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string matches a regular expression",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "mask"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "mask"
                                        ],
                                        "properties": {
                                          "mask": {
                                            "type": "string",
                                            "description": "Mask to validate against"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string starts with a value",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "startsWith"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "starts_with"
                                        ],
                                        "properties": {
                                          "starts_with": {
                                            "type": "string",
                                            "description": "String must start with this value"
                                          },
                                          "check_case": {
                                            "type": "boolean",
                                            "description": "Perform a case sensitive match. By default will not match case",
                                            "default": false
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "step"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "step"
                                        ],
                                        "properties": {
                                          "step": {
                                            "type": "number",
                                            "description": "The step value"
                                          },
                                          "start": {
                                            "type": "integer",
                                            "description": "Start stepping at this value"
                                          },
                                          "end": {
                                            "type": "integer",
                                            "description": "End stepping at this value"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string matches an URI",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "uri"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "properties": {
                                          "schemes": {
                                            "type": "array",
                                            "description": "Schemes to match. By default all are matched",
                                            "items": {
                                              "type": "string",
                                              "enum": [
                                                "http",
                                                "https",
                                                "sip",
                                                "sips",
                                                "ftp",
                                                "ftps",
                                                "ldap",
                                                "ldaps",
                                                "file",
                                                "udp",
                                                "tcp",
                                                "urn"
                                              ]
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate value matches a list (white list)",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "whiteList"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "list"
                                        ],
                                        "properties": {
                                          "list": {
                                            "type": "array",
                                            "minimum": 1,
                                            "maximum": 100,
                                            "description": "The list of approved values",
                                            "items": {
                                              "type": "string"
                                            }
                                          },
                                          "check_case": {
                                            "type": "boolean",
                                            "description": "Perform a case sensitive match. By default will not match case",
                                            "default": false
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
                      }
                    }
                  },
                  {
                    "type": "object",
                    "description": "Defines the properties for a program",
                    "additionalProperties": false,
                    "required": [
                      "entity_id",
                      "entity_type",
                      "created",
                      "updated",
                      "customer",
                      "allowed_statuses"
                    ],
                    "properties": {
                      "program_id": {
                        "description": "Unique identifier",
                        "type": "string",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_id": {
                        "x-no-api-doc": true,
                        "type": "string",
                        "description": "Customer identifier",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_type": {
                        "x-no-api-doc": true,
                        "enum": [
                          "PGM"
                        ]
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
                      "start_date": {
                        "type": "string",
                        "nullable": true,
                        "format": "date-time",
                        "description": "Start date"
                      },
                      "end_date": {
                        "type": "string",
                        "nullable": true,
                        "format": "date-time",
                        "description": "End date"
                      },
                      "customer": {
                        "type": "object",
                        "description": "Customer",
                        "additionalProperties": false,
                        "required": [
                          "label",
                          "entity_id",
                          "entity_type",
                          "created",
                          "updated",
                          "allowed_statuses"
                        ],
                        "properties": {
                          "customer_id": {
                            "description": "Customer identifier",
                            "type": "string",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_id": {
                            "x-no-api-doc": true,
                            "type": "string",
                            "description": "Customer identifier",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_type": {
                            "x-no-api-doc": true,
                            "enum": [
                              "CUS"
                            ]
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
                          "external_platform": {
                            "type": "object",
                            "description": "External Identifiers for the customer",
                            "deprecated": true,
                            "x-patternProperties": {
                              "^[A-Za-z][A-Za-z0-9_]*$": {
                                "type": "string"
                              }
                            }
                          },
                          "allowed_statuses": {
                            "type": "array",
                            "description": "List of allowed statuses",
                            "uniqueItems": true,
                            "items": {
                              "type": "object",
                              "description": "Defines the properties for a status",
                              "additionalProperties": false,
                              "required": [
                                "status",
                                "category"
                              ],
                              "properties": {
                                "status": {
                                  "type": "string",
                                  "description": "A Custom label for the status",
                                  "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                                },
                                "category": {
                                  "type": "string",
                                  "description": "The classifier for the statues",
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
                          "total_programs": {
                            "type": "number",
                            "description": "Total programs under the customer"
                          },
                          "total_projects": {
                            "type": "number",
                            "description": "Total projects under the customer"
                          }
                        }
                      },
                      "allowed_statuses": {
                        "type": "array",
                        "description": "List of allowed statuses",
                        "uniqueItems": true,
                        "items": {
                          "type": "object",
                          "description": "Defines the properties for a status",
                          "additionalProperties": false,
                          "required": [
                            "status",
                            "category"
                          ],
                          "properties": {
                            "status": {
                              "type": "string",
                              "description": "A Custom label for the status",
                              "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                            },
                            "category": {
                              "type": "string",
                              "description": "The classifier for the statues",
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
                    }
                  },
                  {
                    "type": "object",
                    "description": "Defines the properties for a project",
                    "additionalProperties": false,
                    "required": [
                      "label",
                      "entity_id",
                      "entity_type",
                      "created",
                      "updated",
                      "customer",
                      "program",
                      "allowed_statuses"
                    ],
                    "properties": {
                      "project_id": {
                        "type": "string",
                        "description": "Unique identifier",
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_id": {
                        "x-no-api-doc": true,
                        "type": "string",
                        "description": "Customer identifier",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_type": {
                        "x-no-api-doc": true,
                        "enum": [
                          "PRJ"
                        ]
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
                      "customer": {
                        "type": "object",
                        "description": "Customer",
                        "additionalProperties": false,
                        "required": [
                          "label",
                          "entity_id",
                          "entity_type",
                          "created",
                          "updated",
                          "allowed_statuses"
                        ],
                        "properties": {
                          "customer_id": {
                            "description": "Customer identifier",
                            "type": "string",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_id": {
                            "x-no-api-doc": true,
                            "type": "string",
                            "description": "Customer identifier",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_type": {
                            "x-no-api-doc": true,
                            "enum": [
                              "CUS"
                            ]
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
                          "external_platform": {
                            "type": "object",
                            "description": "External Identifiers for the customer",
                            "deprecated": true,
                            "x-patternProperties": {
                              "^[A-Za-z][A-Za-z0-9_]*$": {
                                "type": "string"
                              }
                            }
                          },
                          "allowed_statuses": {
                            "type": "array",
                            "description": "List of allowed statuses",
                            "uniqueItems": true,
                            "items": {
                              "type": "object",
                              "description": "Defines the properties for a status",
                              "additionalProperties": false,
                              "required": [
                                "status",
                                "category"
                              ],
                              "properties": {
                                "status": {
                                  "type": "string",
                                  "description": "A Custom label for the status",
                                  "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                                },
                                "category": {
                                  "type": "string",
                                  "description": "The classifier for the statues",
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
                          "total_programs": {
                            "type": "number",
                            "description": "Total programs under the customer"
                          },
                          "total_projects": {
                            "type": "number",
                            "description": "Total projects under the customer"
                          }
                        }
                      },
                      "program": {
                        "type": "object",
                        "description": "Defines the properties for a program",
                        "additionalProperties": false,
                        "required": [
                          "entity_id",
                          "entity_type",
                          "created",
                          "updated",
                          "customer",
                          "allowed_statuses"
                        ],
                        "properties": {
                          "program_id": {
                            "description": "Unique identifier",
                            "type": "string",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_id": {
                            "x-no-api-doc": true,
                            "type": "string",
                            "description": "Customer identifier",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_type": {
                            "x-no-api-doc": true,
                            "enum": [
                              "PGM"
                            ]
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
                          "start_date": {
                            "type": "string",
                            "nullable": true,
                            "format": "date-time",
                            "description": "Start date"
                          },
                          "end_date": {
                            "type": "string",
                            "nullable": true,
                            "format": "date-time",
                            "description": "End date"
                          },
                          "customer": {
                            "type": "object",
                            "description": "Customer",
                            "additionalProperties": false,
                            "required": [
                              "label",
                              "entity_id",
                              "entity_type",
                              "created",
                              "updated",
                              "allowed_statuses"
                            ],
                            "properties": {
                              "customer_id": {
                                "description": "Customer identifier",
                                "type": "string",
                                "readOnly": true,
                                "pattern": "^[0-9a-zA-Z-_]+$"
                              },
                              "entity_id": {
                                "x-no-api-doc": true,
                                "type": "string",
                                "description": "Customer identifier",
                                "readOnly": true,
                                "pattern": "^[0-9a-zA-Z-_]+$"
                              },
                              "entity_type": {
                                "x-no-api-doc": true,
                                "enum": [
                                  "CUS"
                                ]
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
                              "external_platform": {
                                "type": "object",
                                "description": "External Identifiers for the customer",
                                "deprecated": true,
                                "x-patternProperties": {
                                  "^[A-Za-z][A-Za-z0-9_]*$": {
                                    "type": "string"
                                  }
                                }
                              },
                              "allowed_statuses": {
                                "type": "array",
                                "description": "List of allowed statuses",
                                "uniqueItems": true,
                                "items": {
                                  "type": "object",
                                  "description": "Defines the properties for a status",
                                  "additionalProperties": false,
                                  "required": [
                                    "status",
                                    "category"
                                  ],
                                  "properties": {
                                    "status": {
                                      "type": "string",
                                      "description": "A Custom label for the status",
                                      "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                                    },
                                    "category": {
                                      "type": "string",
                                      "description": "The classifier for the statues",
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
                              "total_programs": {
                                "type": "number",
                                "description": "Total programs under the customer"
                              },
                              "total_projects": {
                                "type": "number",
                                "description": "Total projects under the customer"
                              }
                            }
                          },
                          "allowed_statuses": {
                            "type": "array",
                            "description": "List of allowed statuses",
                            "uniqueItems": true,
                            "items": {
                              "type": "object",
                              "description": "Defines the properties for a status",
                              "additionalProperties": false,
                              "required": [
                                "status",
                                "category"
                              ],
                              "properties": {
                                "status": {
                                  "type": "string",
                                  "description": "A Custom label for the status",
                                  "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                                },
                                "category": {
                                  "type": "string",
                                  "description": "The classifier for the statues",
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
                        }
                      },
                      "allowed_statuses": {
                        "type": "array",
                        "description": "List of allowed statuses",
                        "uniqueItems": true,
                        "items": {
                          "type": "object",
                          "description": "Defines the properties for a status",
                          "additionalProperties": false,
                          "required": [
                            "status",
                            "category"
                          ],
                          "properties": {
                            "status": {
                              "type": "string",
                              "description": "A Custom label for the status",
                              "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                            },
                            "category": {
                              "type": "string",
                              "description": "The classifier for the statues",
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
                        "nullable": true,
                        "format": "date-time",
                        "description": "Start date"
                      },
                      "end_date": {
                        "type": "string",
                        "nullable": true,
                        "format": "date-time",
                        "description": "End date"
                      }
                    },
                    "allOf": [
                      {
                        "type": "object",
                        "description": "Common Properties to all entities",
                        "required": [
                          "label"
                        ],
                        "properties": {
                          "entity_id": {
                            "type": "string",
                            "description": "Customer identifier",
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
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "object",
                    "description": "Defines the properties for a unit",
                    "additionalProperties": false,
                    "required": [
                      "label",
                      "entity_id",
                      "entity_type",
                      "created",
                      "updated",
                      "part"
                    ],
                    "properties": {
                      "unit_id": {
                        "type": "string",
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_id": {
                        "x-no-api-doc": true,
                        "type": "string",
                        "description": "Customer identifier",
                        "readOnly": true,
                        "pattern": "^[0-9a-zA-Z-_]+$"
                      },
                      "entity_type": {
                        "x-no-api-doc": true,
                        "enum": [
                          "UNIT"
                        ]
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
                      "serial_number": {
                        "type": "string",
                        "description": "Serial number of the unit with prefix stripped",
                        "readOnly": true
                      },
                      "raw_serial_number": {
                        "type": "string",
                        "description": "Serial number of the unit"
                      },
                      "tenant_part_number": {
                        "type": "string",
                        "description": "Identifier set by the tenant"
                      },
                      "manufacturer": {
                        "description": "The manufacturer that makes this unit",
                        "type": "object",
                        "properties": {
                          "part_number": {
                            "type": "string",
                            "description": "The part number supplied by the manufacturer"
                          }
                        },
                        "allOf": [
                          {
                            "type": "object",
                            "description": "A Manufacturer of parts",
                            "additionalProperties": false,
                            "required": [
                              "label",
                              "entity_id",
                              "entity_type",
                              "created",
                              "updated"
                            ],
                            "properties": {
                              "manufacturer_id": {
                                "description": "Manufacturer identifier",
                                "type": "string",
                                "readOnly": true,
                                "pattern": "^[0-9a-zA-Z-_]+$"
                              },
                              "entity_id": {
                                "x-no-api-doc": true,
                                "type": "string",
                                "description": "Customer identifier",
                                "readOnly": true,
                                "pattern": "^[0-9a-zA-Z-_]+$"
                              },
                              "entity_type": {
                                "x-no-api-doc": true,
                                "enum": [
                                  "MFR"
                                ]
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
                              }
                            }
                          }
                        ]
                      },
                      "vendor": {
                        "type": "object",
                        "description": "The vendor that sold this unit",
                        "properties": {
                          "part_number": {
                            "type": "string",
                            "description": "The part number supplied by the vendor"
                          }
                        },
                        "additionalProperties": false,
                        "required": [
                          "label",
                          "entity_id",
                          "entity_type",
                          "created",
                          "updated"
                        ]
                      },
                      "part": {
                        "type": "object",
                        "description": "Defines the properties for a part",
                        "additionalProperties": false,
                        "required": [
                          "label",
                          "entity_id",
                          "entity_type",
                          "created",
                          "updated",
                          "customer",
                          "manufacturer"
                        ],
                        "properties": {
                          "part_id": {
                            "description": "Unique identifier",
                            "type": "string",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_id": {
                            "x-no-api-doc": true,
                            "type": "string",
                            "description": "Customer identifier",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_type": {
                            "x-no-api-doc": true,
                            "enum": [
                              "PART"
                            ]
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
                          "customer": {
                            "type": "object",
                            "description": "Customer",
                            "additionalProperties": false,
                            "required": [
                              "label",
                              "entity_id",
                              "entity_type",
                              "created",
                              "updated",
                              "allowed_statuses"
                            ],
                            "properties": {
                              "customer_id": {
                                "description": "Customer identifier",
                                "type": "string",
                                "readOnly": true,
                                "pattern": "^[0-9a-zA-Z-_]+$"
                              },
                              "entity_id": {
                                "x-no-api-doc": true,
                                "type": "string",
                                "description": "Customer identifier",
                                "readOnly": true,
                                "pattern": "^[0-9a-zA-Z-_]+$"
                              },
                              "entity_type": {
                                "x-no-api-doc": true,
                                "enum": [
                                  "CUS"
                                ]
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
                              "external_platform": {
                                "type": "object",
                                "description": "External Identifiers for the customer",
                                "deprecated": true,
                                "x-patternProperties": {
                                  "^[A-Za-z][A-Za-z0-9_]*$": {
                                    "type": "string"
                                  }
                                }
                              },
                              "allowed_statuses": {
                                "type": "array",
                                "description": "List of allowed statuses",
                                "uniqueItems": true,
                                "items": {
                                  "type": "object",
                                  "description": "Defines the properties for a status",
                                  "additionalProperties": false,
                                  "required": [
                                    "status",
                                    "category"
                                  ],
                                  "properties": {
                                    "status": {
                                      "type": "string",
                                      "description": "A Custom label for the status",
                                      "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                                    },
                                    "category": {
                                      "type": "string",
                                      "description": "The classifier for the statues",
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
                              "total_programs": {
                                "type": "number",
                                "description": "Total programs under the customer"
                              },
                              "total_projects": {
                                "type": "number",
                                "description": "Total projects under the customer"
                              }
                            }
                          },
                          "manufacturer": {
                            "type": "object",
                            "description": "Manufacturer information for the part",
                            "required": [
                              "part_number"
                            ],
                            "properties": {
                              "part_number": {
                                "type": "string",
                                "description": "Manufacturer part number"
                              }
                            },
                            "additionalProperties": false
                          },
                          "serial_prefix": {
                            "type": "string",
                            "description": "A serial number prefix for the part"
                          },
                          "input_filter": {
                            "type": "array",
                            "description": "Input Filters allow custom fields to be defined for entities",
                            "items": {
                              "type": "object",
                              "description": "Input filter specification",
                              "required": [
                                "label",
                                "key",
                                "filters",
                                "validators"
                              ],
                              "properties": {
                                "label": {
                                  "type": "string",
                                  "description": "Human readable name"
                                },
                                "key": {
                                  "type": "string",
                                  "description": "Slug used to store the property",
                                  "readOnly": true,
                                  "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                                },
                                "filters": {
                                  "type": "array",
                                  "description": "A Collection of filters applied to the field",
                                  "maxItems": 100,
                                  "items": {
                                    "anyOf": [
                                      {
                                        "type": "object",
                                        "description": "This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "allowed_list"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "approved_values"
                                            ],
                                            "properties": {
                                              "approved_values": {
                                                "type": "array",
                                                "minimum": 1,
                                                "maximum": 100,
                                                "description": "The list of approved values",
                                                "items": {
                                                  "type": "string"
                                                }
                                              },
                                              "check_case": {
                                                "type": "boolean",
                                                "description": "Perform a case sensitive match. By default will not match case",
                                                "default": false
                                              },
                                              "default": {
                                                "type": "string",
                                                "description": "If this is set and the value is not in the approved_list, set the value to this",
                                                "nullable": true
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Make the value camelCase",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "camel"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "description": "This filter has no options"
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Filter to transform a value into a date",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "date"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "description": "Date filter has no options"
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:\n# The number 0 or 0.0\n# empty string ''\n# A boolean false\n# The word 'false'\n# ",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "empty"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "description": "empty filter has no options"
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Filter to transform a value into a float. Non numeric characters (including comma) will be removed",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "float"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "properties": {
                                              "precision": {
                                                "type": "integer",
                                                "minimum": 1,
                                                "maximum": 8,
                                                "default": 3,
                                                "description": "How many decimal places to preserve"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Make the value kebab-case",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "kebab"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "description": "This filter has no options"
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Make the value lowercase",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "lower"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "description": "This filter has no options"
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "number"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "description": "Number filter has no options"
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "prefix"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "prefix"
                                            ],
                                            "properties": {
                                              "prefix": {
                                                "type": "string",
                                                "description": "The prefix to add"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Make the value snake_case",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "snake"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "description": "This filter has no options"
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Filter to transform a value into a string",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "string"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "description": "String filter has no options"
                                          }
                                        }
                                      },
                                      {
                                        "description": "Add a suffix to the start of a string. If the string already start with the suffix, it will not append.",
                                        "type": "object",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "suffix"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "suffix"
                                            ],
                                            "properties": {
                                              "suffix": {
                                                "type": "string",
                                                "description": "The suffix to add"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Filter to trim whitespace from a value",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "trim"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "description": "By default will trim from the start and end",
                                            "properties": {
                                              "start": {
                                                "type": "boolean",
                                                "description": "Remove white space from the start of the string",
                                                "default": true
                                              },
                                              "end": {
                                                "type": "boolean",
                                                "description": "Remove white space from the end of the string",
                                                "default": true
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Make the value UPPERCASE",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "upper"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "description": "This filter has no options"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                "validators": {
                                  "type": "array",
                                  "description": "A set of validators to use for this field",
                                  "maxItems": 100,
                                  "items": {
                                    "anyOf": [
                                      {
                                        "type": "object",
                                        "description": "Validate number is between two values. By default, min and max are included",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "greater_than"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "min",
                                              "max"
                                            ],
                                            "properties": {
                                              "min": {
                                                "type": "number",
                                                "description": "Minimum value to check"
                                              },
                                              "max": {
                                                "type": "number",
                                                "description": "The maximum value to check"
                                              },
                                              "precision": {
                                                "type": "integer",
                                                "description": "When number is a float, this will set the decimal precision",
                                                "minimum": 1,
                                                "maximum": 8,
                                                "default": 3
                                              },
                                              "include": {
                                                "type": "boolean",
                                                "description": "Include the value in the check",
                                                "default": true
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate value does not match a list (black list)",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "white_list"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "list"
                                            ],
                                            "properties": {
                                              "list": {
                                                "type": "array",
                                                "minimum": 1,
                                                "maximum": 100,
                                                "description": "The list of approved values",
                                                "items": {
                                                  "type": "string"
                                                }
                                              },
                                              "check_case": {
                                                "type": "boolean",
                                                "description": "Perform a case sensitive match. By default will not match case",
                                                "default": false
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate string contains a value",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "contains"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "contains"
                                            ],
                                            "properties": {
                                              "contains": {
                                                "type": "string",
                                                "description": "String must contain with this value"
                                              },
                                              "check_case": {
                                                "type": "boolean",
                                                "description": "Perform a case sensitive match. By default will not match case",
                                                "default": false
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate string is a correct email address",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "email_address"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "properties": {
                                              "strict": {
                                                "type": "boolean",
                                                "description": "Enforce strict standards from ARPA. This will enforce the length of the string",
                                                "default": true
                                              },
                                              "lookup": {
                                                "type": "boolean",
                                                "description": "Look up the host name and check if it has a valid MX record",
                                                "default": false
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate string ends with a value",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "ends_with"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "ends_with"
                                            ],
                                            "properties": {
                                              "ends_with": {
                                                "type": "string",
                                                "description": "String must end with this value"
                                              },
                                              "check_case": {
                                                "type": "boolean",
                                                "description": "Perform a case sensitive match. By default will not match case",
                                                "default": false
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate number equals a value",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "equals"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "value"
                                            ],
                                            "properties": {
                                              "value": {
                                                "type": "number",
                                                "description": "The value to compare against"
                                              },
                                              "precision": {
                                                "type": "integer",
                                                "description": "When value is a float, this will set the decimal precision",
                                                "minimum": 1,
                                                "maximum": 8,
                                                "default": 3
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate number is greater than a value. By default, this will check if value is greater than or equals to",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "greater_than"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "value"
                                            ],
                                            "properties": {
                                              "value": {
                                                "type": "number",
                                                "description": "The value to compare against"
                                              },
                                              "precision": {
                                                "type": "integer",
                                                "description": "When number is a float, this will set the decimal precision",
                                                "minimum": 1,
                                                "maximum": 8,
                                                "default": 3
                                              },
                                              "include": {
                                                "type": "boolean",
                                                "description": "Include the value in the check",
                                                "default": true
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate string has a correct DNS records",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "hostname"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "properties": {
                                              "record_type": {
                                                "type": "string",
                                                "description": "DNS record type to validate",
                                                "default": "A",
                                                "enum": [
                                                  "A",
                                                  "AAAA",
                                                  "AFSDB",
                                                  "APL",
                                                  "CAA",
                                                  "CDNSKEY",
                                                  "CDS",
                                                  "CERT",
                                                  "CNAME",
                                                  "CSYNC",
                                                  "DHCID",
                                                  "DLV",
                                                  "DNAME",
                                                  "DNSKEY",
                                                  "DS",
                                                  "HIP",
                                                  "IPSECKEY",
                                                  "KEY",
                                                  "KX",
                                                  "LOC",
                                                  "MX",
                                                  "NAPTR",
                                                  "NS",
                                                  "NSEC",
                                                  "NSEC3",
                                                  "NSEC3PARAM",
                                                  "OPENPGPKEY",
                                                  "PTR",
                                                  "RRSIG",
                                                  "RP",
                                                  "SIG",
                                                  "SMIMEA",
                                                  "SOA",
                                                  "SRV",
                                                  "SSHFP",
                                                  "TA",
                                                  "TKEY",
                                                  "TLSA",
                                                  "TSIG",
                                                  "TXT",
                                                  "URI"
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate string matches an IP address format. Defaults to matching IPv4",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "ipAddress"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "properties": {
                                              "versions": {
                                                "type": "array",
                                                "description": "IP Version to match against",
                                                "items": {
                                                  "type": "string",
                                                  "enum": [
                                                    "IPv4",
                                                    "IPv6"
                                                  ]
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate string is a certain length",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "length"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "length"
                                            ],
                                            "properties": {
                                              "length": {
                                                "type": "string",
                                                "description": "String must contain with this value"
                                              },
                                              "operator": {
                                                "type": "string",
                                                "description": "Which type of length comparision to make",
                                                "default": "equals",
                                                "enum": [
                                                  "equals",
                                                  "less_than",
                                                  "less_than_equals",
                                                  "greater_than",
                                                  "greater_than_equals"
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate number is less than a value. By default, this will check if value is less than or equals to",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "lessThan"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "value"
                                            ],
                                            "properties": {
                                              "value": {
                                                "type": "number",
                                                "description": "The value to compare against"
                                              },
                                              "precision": {
                                                "type": "integer",
                                                "description": "When number is a float, this will set the decimal precision",
                                                "minimum": 1,
                                                "maximum": 8,
                                                "default": 3
                                              },
                                              "include": {
                                                "type": "boolean",
                                                "description": "Include the value in the check",
                                                "default": true
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate string matches an MAC address format",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "macAddress"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "description": "This validator has no options"
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate string matches a regular expression",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "mask"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "mask"
                                            ],
                                            "properties": {
                                              "mask": {
                                                "type": "string",
                                                "description": "Mask to validate against"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate string starts with a value",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "startsWith"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "starts_with"
                                            ],
                                            "properties": {
                                              "starts_with": {
                                                "type": "string",
                                                "description": "String must start with this value"
                                              },
                                              "check_case": {
                                                "type": "boolean",
                                                "description": "Perform a case sensitive match. By default will not match case",
                                                "default": false
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "step"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "step"
                                            ],
                                            "properties": {
                                              "step": {
                                                "type": "number",
                                                "description": "The step value"
                                              },
                                              "start": {
                                                "type": "integer",
                                                "description": "Start stepping at this value"
                                              },
                                              "end": {
                                                "type": "integer",
                                                "description": "End stepping at this value"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate string matches an URI",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "uri"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "properties": {
                                              "schemes": {
                                                "type": "array",
                                                "description": "Schemes to match. By default all are matched",
                                                "items": {
                                                  "type": "string",
                                                  "enum": [
                                                    "http",
                                                    "https",
                                                    "sip",
                                                    "sips",
                                                    "ftp",
                                                    "ftps",
                                                    "ldap",
                                                    "ldaps",
                                                    "file",
                                                    "udp",
                                                    "tcp",
                                                    "urn"
                                                  ]
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "description": "Validate value matches a list (white list)",
                                        "required": [
                                          "type",
                                          "options"
                                        ],
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "enum": [
                                              "whiteList"
                                            ]
                                          },
                                          "options": {
                                            "type": "object",
                                            "required": [
                                              "list"
                                            ],
                                            "properties": {
                                              "list": {
                                                "type": "array",
                                                "minimum": 1,
                                                "maximum": 100,
                                                "description": "The list of approved values",
                                                "items": {
                                                  "type": "string"
                                                }
                                              },
                                              "check_case": {
                                                "type": "boolean",
                                                "description": "Perform a case sensitive match. By default will not match case",
                                                "default": false
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
                          }
                        }
                      },
                      "customer": {
                        "type": "object",
                        "description": "Customer",
                        "additionalProperties": false,
                        "required": [
                          "label",
                          "entity_id",
                          "entity_type",
                          "created",
                          "updated",
                          "allowed_statuses"
                        ],
                        "properties": {
                          "customer_id": {
                            "description": "Customer identifier",
                            "type": "string",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_id": {
                            "x-no-api-doc": true,
                            "type": "string",
                            "description": "Customer identifier",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_type": {
                            "x-no-api-doc": true,
                            "enum": [
                              "CUS"
                            ]
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
                          "external_platform": {
                            "type": "object",
                            "description": "External Identifiers for the customer",
                            "deprecated": true,
                            "x-patternProperties": {
                              "^[A-Za-z][A-Za-z0-9_]*$": {
                                "type": "string"
                              }
                            }
                          },
                          "allowed_statuses": {
                            "type": "array",
                            "description": "List of allowed statuses",
                            "uniqueItems": true,
                            "items": {
                              "type": "object",
                              "description": "Defines the properties for a status",
                              "additionalProperties": false,
                              "required": [
                                "status",
                                "category"
                              ],
                              "properties": {
                                "status": {
                                  "type": "string",
                                  "description": "A Custom label for the status",
                                  "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                                },
                                "category": {
                                  "type": "string",
                                  "description": "The classifier for the statues",
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
                          "total_programs": {
                            "type": "number",
                            "description": "Total programs under the customer"
                          },
                          "total_projects": {
                            "type": "number",
                            "description": "Total projects under the customer"
                          }
                        }
                      },
                      "current_location": {
                        "deprecated": true,
                        "type": "object",
                        "description": "Defines the properties for a part unit",
                        "additionalProperties": false,
                        "required": [
                          "label",
                          "entity_id",
                          "entity_type",
                          "created",
                          "updated",
                          "location_type",
                          "address"
                        ],
                        "properties": {
                          "location_id": {
                            "description": "The identifier for the location",
                            "type": "string",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_id": {
                            "x-no-api-doc": true,
                            "type": "string",
                            "description": "Customer identifier",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_type": {
                            "x-no-api-doc": true,
                            "enum": [
                              "LOC"
                            ]
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
                          "location_type": {
                            "type": "string",
                            "description": "The type of location",
                            "enum": [
                              "warehouse",
                              "facility",
                              "other"
                            ]
                          },
                          "formatted_address": {
                            "type": "string",
                            "readOnly": true,
                            "description": "Address formatted for the where region the location exists in"
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
                                "enum": [
                                  "ABW",
                                  "AFG",
                                  "AGO",
                                  "AIA",
                                  "ALA",
                                  "ALB",
                                  "AND",
                                  "ARE",
                                  "ARG",
                                  "ARM",
                                  "ASM",
                                  "ATA",
                                  "ATF",
                                  "ATG",
                                  "AUS",
                                  "AUT",
                                  "AZE",
                                  "BDI",
                                  "BEL",
                                  "BEN",
                                  "BES",
                                  "BFA",
                                  "BGD",
                                  "BGR",
                                  "BHR",
                                  "BHS",
                                  "BIH",
                                  "BLM",
                                  "BLR",
                                  "BLZ",
                                  "BMU",
                                  "BOL",
                                  "BRA",
                                  "BRB",
                                  "BRN",
                                  "BTN",
                                  "BVT",
                                  "BWA",
                                  "CAF",
                                  "CAN",
                                  "CCK",
                                  "CHE",
                                  "CHL",
                                  "CHN",
                                  "CIV",
                                  "CMR",
                                  "COD",
                                  "COG",
                                  "COK",
                                  "COL",
                                  "COM",
                                  "CPV",
                                  "CRI",
                                  "CUB",
                                  "CUW",
                                  "CXR",
                                  "CYM",
                                  "CYP",
                                  "CZE",
                                  "DEU",
                                  "DJI",
                                  "DMA",
                                  "DNK",
                                  "DOM",
                                  "DZA",
                                  "ECU",
                                  "EGY",
                                  "ERI",
                                  "ESH",
                                  "ESP",
                                  "EST",
                                  "ETH",
                                  "FIN",
                                  "FJI",
                                  "FLK",
                                  "FRA",
                                  "FRO",
                                  "FSM",
                                  "GAB",
                                  "GBR",
                                  "GEO",
                                  "GGY",
                                  "GHA",
                                  "GIB",
                                  "GIN",
                                  "GLP",
                                  "GMB",
                                  "GNB",
                                  "GNQ",
                                  "GRC",
                                  "GRD",
                                  "GRL",
                                  "GTM",
                                  "GUF",
                                  "GUM",
                                  "GUY",
                                  "HKG",
                                  "HMD",
                                  "HND",
                                  "HRV",
                                  "HTI",
                                  "HUN",
                                  "IDN",
                                  "IMN",
                                  "IND",
                                  "IOT",
                                  "IRL",
                                  "IRN",
                                  "IRQ",
                                  "ISL",
                                  "ISR",
                                  "ITA",
                                  "JAM",
                                  "JEY",
                                  "JOR",
                                  "JPN",
                                  "KAZ",
                                  "KEN",
                                  "KGZ",
                                  "KHM",
                                  "KIR",
                                  "KNA",
                                  "KOR",
                                  "KWT",
                                  "LAO",
                                  "LBN",
                                  "LBR",
                                  "LBY",
                                  "LCA",
                                  "LIE",
                                  "LKA",
                                  "LSO",
                                  "LTU",
                                  "LUX",
                                  "LVA",
                                  "MAC",
                                  "MAF",
                                  "MAR",
                                  "MCO",
                                  "MDA",
                                  "MDG",
                                  "MDV",
                                  "MEX",
                                  "MHL",
                                  "MKD",
                                  "MLI",
                                  "MLT",
                                  "MMR",
                                  "MNE",
                                  "MNG",
                                  "MNP",
                                  "MOZ",
                                  "MRT",
                                  "MSR",
                                  "MTQ",
                                  "MUS",
                                  "MWI",
                                  "MYS",
                                  "MYT",
                                  "NAM",
                                  "NCL",
                                  "NER",
                                  "NFK",
                                  "NGA",
                                  "NIC",
                                  "NIU",
                                  "NLD",
                                  "NOR",
                                  "NPL",
                                  "NRU",
                                  "NZL",
                                  "OMN",
                                  "PAK",
                                  "PAN",
                                  "PCN",
                                  "PER",
                                  "PHL",
                                  "PLW",
                                  "PNG",
                                  "POL",
                                  "PRI",
                                  "PRK",
                                  "PRT",
                                  "PRY",
                                  "PSE",
                                  "PYF",
                                  "QAT",
                                  "REU",
                                  "ROU",
                                  "RUS",
                                  "RWA",
                                  "SAU",
                                  "SDN",
                                  "SEN",
                                  "SGP",
                                  "SGS",
                                  "SHN",
                                  "SJM",
                                  "SLB",
                                  "SLE",
                                  "SLV",
                                  "SMR",
                                  "SOM",
                                  "SPM",
                                  "SRB",
                                  "SSD",
                                  "STP",
                                  "SUR",
                                  "SVK",
                                  "SVN",
                                  "SWE",
                                  "SWZ",
                                  "SXM",
                                  "SYC",
                                  "SYR",
                                  "TCA",
                                  "TCD",
                                  "TGO",
                                  "THA",
                                  "TJK",
                                  "TKL",
                                  "TKM",
                                  "TLS",
                                  "TON",
                                  "TTO",
                                  "TUN",
                                  "TUR",
                                  "TUV",
                                  "TWN",
                                  "TZA",
                                  "UGA",
                                  "UKR",
                                  "UMI",
                                  "URY",
                                  "USA",
                                  "UZB",
                                  "VAT",
                                  "VCT",
                                  "VEN",
                                  "VGB",
                                  "VIR",
                                  "VNM",
                                  "VUT",
                                  "WLF",
                                  "WSM",
                                  "YEM",
                                  "ZAF",
                                  "ZMB",
                                  "ZWE"
                                ]
                              },
                              "administrative_area": {
                                "type": "string",
                                "description": "State / Province / Region"
                              },
                              "sub_administrative_area": {
                                "type": "string",
                                "description": "County / District"
                              },
                              "locality": {
                                "type": "string",
                                "description": "City / Town"
                              },
                              "postal_code": {
                                "type": "string",
                                "description": "Postal Code / Zip Code"
                              },
                              "thoroughfare": {
                                "type": "string",
                                "description": "Street Address"
                              },
                              "premise": {
                                "type": "string",
                                "description": "Apartment / Suite / Box number etc"
                              },
                              "sub_premise": {
                                "type": "string",
                                "description": "Floor # / Room # / Building label etc"
                              }
                            }
                          }
                        }
                      },
                      "location": {
                        "type": "object",
                        "description": "Defines the properties for a part unit",
                        "additionalProperties": false,
                        "required": [
                          "label",
                          "entity_id",
                          "entity_type",
                          "created",
                          "updated",
                          "location_type",
                          "address"
                        ],
                        "properties": {
                          "location_id": {
                            "description": "The identifier for the location",
                            "type": "string",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_id": {
                            "x-no-api-doc": true,
                            "type": "string",
                            "description": "Customer identifier",
                            "readOnly": true,
                            "pattern": "^[0-9a-zA-Z-_]+$"
                          },
                          "entity_type": {
                            "x-no-api-doc": true,
                            "enum": [
                              "LOC"
                            ]
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
                          "location_type": {
                            "type": "string",
                            "description": "The type of location",
                            "enum": [
                              "warehouse",
                              "facility",
                              "other"
                            ]
                          },
                          "formatted_address": {
                            "type": "string",
                            "readOnly": true,
                            "description": "Address formatted for the where region the location exists in"
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
                                "enum": [
                                  "ABW",
                                  "AFG",
                                  "AGO",
                                  "AIA",
                                  "ALA",
                                  "ALB",
                                  "AND",
                                  "ARE",
                                  "ARG",
                                  "ARM",
                                  "ASM",
                                  "ATA",
                                  "ATF",
                                  "ATG",
                                  "AUS",
                                  "AUT",
                                  "AZE",
                                  "BDI",
                                  "BEL",
                                  "BEN",
                                  "BES",
                                  "BFA",
                                  "BGD",
                                  "BGR",
                                  "BHR",
                                  "BHS",
                                  "BIH",
                                  "BLM",
                                  "BLR",
                                  "BLZ",
                                  "BMU",
                                  "BOL",
                                  "BRA",
                                  "BRB",
                                  "BRN",
                                  "BTN",
                                  "BVT",
                                  "BWA",
                                  "CAF",
                                  "CAN",
                                  "CCK",
                                  "CHE",
                                  "CHL",
                                  "CHN",
                                  "CIV",
                                  "CMR",
                                  "COD",
                                  "COG",
                                  "COK",
                                  "COL",
                                  "COM",
                                  "CPV",
                                  "CRI",
                                  "CUB",
                                  "CUW",
                                  "CXR",
                                  "CYM",
                                  "CYP",
                                  "CZE",
                                  "DEU",
                                  "DJI",
                                  "DMA",
                                  "DNK",
                                  "DOM",
                                  "DZA",
                                  "ECU",
                                  "EGY",
                                  "ERI",
                                  "ESH",
                                  "ESP",
                                  "EST",
                                  "ETH",
                                  "FIN",
                                  "FJI",
                                  "FLK",
                                  "FRA",
                                  "FRO",
                                  "FSM",
                                  "GAB",
                                  "GBR",
                                  "GEO",
                                  "GGY",
                                  "GHA",
                                  "GIB",
                                  "GIN",
                                  "GLP",
                                  "GMB",
                                  "GNB",
                                  "GNQ",
                                  "GRC",
                                  "GRD",
                                  "GRL",
                                  "GTM",
                                  "GUF",
                                  "GUM",
                                  "GUY",
                                  "HKG",
                                  "HMD",
                                  "HND",
                                  "HRV",
                                  "HTI",
                                  "HUN",
                                  "IDN",
                                  "IMN",
                                  "IND",
                                  "IOT",
                                  "IRL",
                                  "IRN",
                                  "IRQ",
                                  "ISL",
                                  "ISR",
                                  "ITA",
                                  "JAM",
                                  "JEY",
                                  "JOR",
                                  "JPN",
                                  "KAZ",
                                  "KEN",
                                  "KGZ",
                                  "KHM",
                                  "KIR",
                                  "KNA",
                                  "KOR",
                                  "KWT",
                                  "LAO",
                                  "LBN",
                                  "LBR",
                                  "LBY",
                                  "LCA",
                                  "LIE",
                                  "LKA",
                                  "LSO",
                                  "LTU",
                                  "LUX",
                                  "LVA",
                                  "MAC",
                                  "MAF",
                                  "MAR",
                                  "MCO",
                                  "MDA",
                                  "MDG",
                                  "MDV",
                                  "MEX",
                                  "MHL",
                                  "MKD",
                                  "MLI",
                                  "MLT",
                                  "MMR",
                                  "MNE",
                                  "MNG",
                                  "MNP",
                                  "MOZ",
                                  "MRT",
                                  "MSR",
                                  "MTQ",
                                  "MUS",
                                  "MWI",
                                  "MYS",
                                  "MYT",
                                  "NAM",
                                  "NCL",
                                  "NER",
                                  "NFK",
                                  "NGA",
                                  "NIC",
                                  "NIU",
                                  "NLD",
                                  "NOR",
                                  "NPL",
                                  "NRU",
                                  "NZL",
                                  "OMN",
                                  "PAK",
                                  "PAN",
                                  "PCN",
                                  "PER",
                                  "PHL",
                                  "PLW",
                                  "PNG",
                                  "POL",
                                  "PRI",
                                  "PRK",
                                  "PRT",
                                  "PRY",
                                  "PSE",
                                  "PYF",
                                  "QAT",
                                  "REU",
                                  "ROU",
                                  "RUS",
                                  "RWA",
                                  "SAU",
                                  "SDN",
                                  "SEN",
                                  "SGP",
                                  "SGS",
                                  "SHN",
                                  "SJM",
                                  "SLB",
                                  "SLE",
                                  "SLV",
                                  "SMR",
                                  "SOM",
                                  "SPM",
                                  "SRB",
                                  "SSD",
                                  "STP",
                                  "SUR",
                                  "SVK",
                                  "SVN",
                                  "SWE",
                                  "SWZ",
                                  "SXM",
                                  "SYC",
                                  "SYR",
                                  "TCA",
                                  "TCD",
                                  "TGO",
                                  "THA",
                                  "TJK",
                                  "TKL",
                                  "TKM",
                                  "TLS",
                                  "TON",
                                  "TTO",
                                  "TUN",
                                  "TUR",
                                  "TUV",
                                  "TWN",
                                  "TZA",
                                  "UGA",
                                  "UKR",
                                  "UMI",
                                  "URY",
                                  "USA",
                                  "UZB",
                                  "VAT",
                                  "VCT",
                                  "VEN",
                                  "VGB",
                                  "VIR",
                                  "VNM",
                                  "VUT",
                                  "WLF",
                                  "WSM",
                                  "YEM",
                                  "ZAF",
                                  "ZMB",
                                  "ZWE"
                                ]
                              },
                              "administrative_area": {
                                "type": "string",
                                "description": "State / Province / Region"
                              },
                              "sub_administrative_area": {
                                "type": "string",
                                "description": "County / District"
                              },
                              "locality": {
                                "type": "string",
                                "description": "City / Town"
                              },
                              "postal_code": {
                                "type": "string",
                                "description": "Postal Code / Zip Code"
                              },
                              "thoroughfare": {
                                "type": "string",
                                "description": "Street Address"
                              },
                              "premise": {
                                "type": "string",
                                "description": "Apartment / Suite / Box number etc"
                              },
                              "sub_premise": {
                                "type": "string",
                                "description": "Floor # / Room # / Building label etc"
                              }
                            }
                          }
                        }
                      },
                      "input_filter": {
                        "type": "array",
                        "description": "Input Filters allow custom fields to be defined for entities",
                        "items": {
                          "type": "object",
                          "description": "Input filter specification",
                          "required": [
                            "label",
                            "key",
                            "filters",
                            "validators"
                          ],
                          "properties": {
                            "label": {
                              "type": "string",
                              "description": "Human readable name"
                            },
                            "key": {
                              "type": "string",
                              "description": "Slug used to store the property",
                              "readOnly": true,
                              "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                            },
                            "filters": {
                              "type": "array",
                              "description": "A Collection of filters applied to the field",
                              "maxItems": 100,
                              "items": {
                                "anyOf": [
                                  {
                                    "type": "object",
                                    "description": "This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "allowed_list"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "approved_values"
                                        ],
                                        "properties": {
                                          "approved_values": {
                                            "type": "array",
                                            "minimum": 1,
                                            "maximum": 100,
                                            "description": "The list of approved values",
                                            "items": {
                                              "type": "string"
                                            }
                                          },
                                          "check_case": {
                                            "type": "boolean",
                                            "description": "Perform a case sensitive match. By default will not match case",
                                            "default": false
                                          },
                                          "default": {
                                            "type": "string",
                                            "description": "If this is set and the value is not in the approved_list, set the value to this",
                                            "nullable": true
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Make the value camelCase",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "camel"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "This filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Filter to transform a value into a date",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "date"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "Date filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:\n# The number 0 or 0.0\n# empty string ''\n# A boolean false\n# The word 'false'\n# ",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "empty"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "empty filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Filter to transform a value into a float. Non numeric characters (including comma) will be removed",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "float"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "properties": {
                                          "precision": {
                                            "type": "integer",
                                            "minimum": 1,
                                            "maximum": 8,
                                            "default": 3,
                                            "description": "How many decimal places to preserve"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Make the value kebab-case",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "kebab"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "This filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Make the value lowercase",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "lower"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "This filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "number"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "Number filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "prefix"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "prefix"
                                        ],
                                        "properties": {
                                          "prefix": {
                                            "type": "string",
                                            "description": "The prefix to add"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Make the value snake_case",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "snake"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "This filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Filter to transform a value into a string",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "string"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "String filter has no options"
                                      }
                                    }
                                  },
                                  {
                                    "description": "Add a suffix to the start of a string. If the string already start with the suffix, it will not append.",
                                    "type": "object",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "suffix"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "suffix"
                                        ],
                                        "properties": {
                                          "suffix": {
                                            "type": "string",
                                            "description": "The suffix to add"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Filter to trim whitespace from a value",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "trim"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "By default will trim from the start and end",
                                        "properties": {
                                          "start": {
                                            "type": "boolean",
                                            "description": "Remove white space from the start of the string",
                                            "default": true
                                          },
                                          "end": {
                                            "type": "boolean",
                                            "description": "Remove white space from the end of the string",
                                            "default": true
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Make the value UPPERCASE",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "upper"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "This filter has no options"
                                      }
                                    }
                                  }
                                ]
                              }
                            },
                            "validators": {
                              "type": "array",
                              "description": "A set of validators to use for this field",
                              "maxItems": 100,
                              "items": {
                                "anyOf": [
                                  {
                                    "type": "object",
                                    "description": "Validate number is between two values. By default, min and max are included",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "greater_than"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "min",
                                          "max"
                                        ],
                                        "properties": {
                                          "min": {
                                            "type": "number",
                                            "description": "Minimum value to check"
                                          },
                                          "max": {
                                            "type": "number",
                                            "description": "The maximum value to check"
                                          },
                                          "precision": {
                                            "type": "integer",
                                            "description": "When number is a float, this will set the decimal precision",
                                            "minimum": 1,
                                            "maximum": 8,
                                            "default": 3
                                          },
                                          "include": {
                                            "type": "boolean",
                                            "description": "Include the value in the check",
                                            "default": true
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate value does not match a list (black list)",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "white_list"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "list"
                                        ],
                                        "properties": {
                                          "list": {
                                            "type": "array",
                                            "minimum": 1,
                                            "maximum": 100,
                                            "description": "The list of approved values",
                                            "items": {
                                              "type": "string"
                                            }
                                          },
                                          "check_case": {
                                            "type": "boolean",
                                            "description": "Perform a case sensitive match. By default will not match case",
                                            "default": false
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string contains a value",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "contains"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "contains"
                                        ],
                                        "properties": {
                                          "contains": {
                                            "type": "string",
                                            "description": "String must contain with this value"
                                          },
                                          "check_case": {
                                            "type": "boolean",
                                            "description": "Perform a case sensitive match. By default will not match case",
                                            "default": false
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string is a correct email address",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "email_address"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "properties": {
                                          "strict": {
                                            "type": "boolean",
                                            "description": "Enforce strict standards from ARPA. This will enforce the length of the string",
                                            "default": true
                                          },
                                          "lookup": {
                                            "type": "boolean",
                                            "description": "Look up the host name and check if it has a valid MX record",
                                            "default": false
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string ends with a value",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "ends_with"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "ends_with"
                                        ],
                                        "properties": {
                                          "ends_with": {
                                            "type": "string",
                                            "description": "String must end with this value"
                                          },
                                          "check_case": {
                                            "type": "boolean",
                                            "description": "Perform a case sensitive match. By default will not match case",
                                            "default": false
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate number equals a value",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "equals"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "value"
                                        ],
                                        "properties": {
                                          "value": {
                                            "type": "number",
                                            "description": "The value to compare against"
                                          },
                                          "precision": {
                                            "type": "integer",
                                            "description": "When value is a float, this will set the decimal precision",
                                            "minimum": 1,
                                            "maximum": 8,
                                            "default": 3
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate number is greater than a value. By default, this will check if value is greater than or equals to",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "greater_than"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "value"
                                        ],
                                        "properties": {
                                          "value": {
                                            "type": "number",
                                            "description": "The value to compare against"
                                          },
                                          "precision": {
                                            "type": "integer",
                                            "description": "When number is a float, this will set the decimal precision",
                                            "minimum": 1,
                                            "maximum": 8,
                                            "default": 3
                                          },
                                          "include": {
                                            "type": "boolean",
                                            "description": "Include the value in the check",
                                            "default": true
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string has a correct DNS records",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "hostname"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "properties": {
                                          "record_type": {
                                            "type": "string",
                                            "description": "DNS record type to validate",
                                            "default": "A",
                                            "enum": [
                                              "A",
                                              "AAAA",
                                              "AFSDB",
                                              "APL",
                                              "CAA",
                                              "CDNSKEY",
                                              "CDS",
                                              "CERT",
                                              "CNAME",
                                              "CSYNC",
                                              "DHCID",
                                              "DLV",
                                              "DNAME",
                                              "DNSKEY",
                                              "DS",
                                              "HIP",
                                              "IPSECKEY",
                                              "KEY",
                                              "KX",
                                              "LOC",
                                              "MX",
                                              "NAPTR",
                                              "NS",
                                              "NSEC",
                                              "NSEC3",
                                              "NSEC3PARAM",
                                              "OPENPGPKEY",
                                              "PTR",
                                              "RRSIG",
                                              "RP",
                                              "SIG",
                                              "SMIMEA",
                                              "SOA",
                                              "SRV",
                                              "SSHFP",
                                              "TA",
                                              "TKEY",
                                              "TLSA",
                                              "TSIG",
                                              "TXT",
                                              "URI"
                                            ]
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string matches an IP address format. Defaults to matching IPv4",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "ipAddress"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "properties": {
                                          "versions": {
                                            "type": "array",
                                            "description": "IP Version to match against",
                                            "items": {
                                              "type": "string",
                                              "enum": [
                                                "IPv4",
                                                "IPv6"
                                              ]
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string is a certain length",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "length"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "length"
                                        ],
                                        "properties": {
                                          "length": {
                                            "type": "string",
                                            "description": "String must contain with this value"
                                          },
                                          "operator": {
                                            "type": "string",
                                            "description": "Which type of length comparision to make",
                                            "default": "equals",
                                            "enum": [
                                              "equals",
                                              "less_than",
                                              "less_than_equals",
                                              "greater_than",
                                              "greater_than_equals"
                                            ]
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate number is less than a value. By default, this will check if value is less than or equals to",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "lessThan"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "value"
                                        ],
                                        "properties": {
                                          "value": {
                                            "type": "number",
                                            "description": "The value to compare against"
                                          },
                                          "precision": {
                                            "type": "integer",
                                            "description": "When number is a float, this will set the decimal precision",
                                            "minimum": 1,
                                            "maximum": 8,
                                            "default": 3
                                          },
                                          "include": {
                                            "type": "boolean",
                                            "description": "Include the value in the check",
                                            "default": true
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string matches an MAC address format",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "macAddress"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "description": "This validator has no options"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string matches a regular expression",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "mask"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "mask"
                                        ],
                                        "properties": {
                                          "mask": {
                                            "type": "string",
                                            "description": "Mask to validate against"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string starts with a value",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "startsWith"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "starts_with"
                                        ],
                                        "properties": {
                                          "starts_with": {
                                            "type": "string",
                                            "description": "String must start with this value"
                                          },
                                          "check_case": {
                                            "type": "boolean",
                                            "description": "Perform a case sensitive match. By default will not match case",
                                            "default": false
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "step"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "step"
                                        ],
                                        "properties": {
                                          "step": {
                                            "type": "number",
                                            "description": "The step value"
                                          },
                                          "start": {
                                            "type": "integer",
                                            "description": "Start stepping at this value"
                                          },
                                          "end": {
                                            "type": "integer",
                                            "description": "End stepping at this value"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate string matches an URI",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "uri"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "properties": {
                                          "schemes": {
                                            "type": "array",
                                            "description": "Schemes to match. By default all are matched",
                                            "items": {
                                              "type": "string",
                                              "enum": [
                                                "http",
                                                "https",
                                                "sip",
                                                "sips",
                                                "ftp",
                                                "ftps",
                                                "ldap",
                                                "ldaps",
                                                "file",
                                                "udp",
                                                "tcp",
                                                "urn"
                                              ]
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "description": "Validate value matches a list (white list)",
                                    "required": [
                                      "type",
                                      "options"
                                    ],
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "enum": [
                                          "whiteList"
                                        ]
                                      },
                                      "options": {
                                        "type": "object",
                                        "required": [
                                          "list"
                                        ],
                                        "properties": {
                                          "list": {
                                            "type": "array",
                                            "minimum": 1,
                                            "maximum": 100,
                                            "description": "The list of approved values",
                                            "items": {
                                              "type": "string"
                                            }
                                          },
                                          "check_case": {
                                            "type": "boolean",
                                            "description": "Perform a case sensitive match. By default will not match case",
                                            "default": false
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
                      "current_status": {
                        "type": "object",
                        "description": "Defines the properties for a status",
                        "additionalProperties": false,
                        "required": [
                          "status",
                          "category"
                        ],
                        "properties": {
                          "status": {
                            "type": "string",
                            "description": "A Custom label for the status",
                            "pattern": "^[A-Za-z][0-9a-zA-Z-_ ]+$"
                          },
                          "category": {
                            "type": "string",
                            "description": "The classifier for the statues",
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
                  }
                ]
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
            "href": "https://api.nterprise.com/contexts"
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
            "href": "https://api.nterprise.com/contexts?offset=QVBrO2wm13iEyl&limit=100"
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
|»» nter:contexts|[object]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» context_id|string|false|read-only|Identifier for the context|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» workflow|object|false|none|Workflow|
|»»»»» work_flow_id|string|false|read-only|Customer identifier|
|»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»» entity_type|string|true|none|none|
|»»»»» label|string|true|none|Label for the entity|
|»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»» schema_version|string|true|none|Version of the workflow schema used|
|»»»»» workflow_version|integer|false|read-only|Version number for the work flows (the number of times it has been changed|
|»»»»» applies_to|string|true|none|The entity type this work flow applies too|
|»»»»» starts_at|string|true|none|Starting step|
|»»»»» steps|object|true|none|Steps for the workflow|
|»»»» current_step|string|false|read-only|The current step to execute|
|»»»» last_steps|[object]|false|read-only|Ordered list of the executed steps|
|»»»»» step_name|string|false|read-only|Name for the step|
|»»»»» started_at|string(date-time)|false|read-only|The date time the step started|
|»»»»» ended_at|string(date-time)|false|read-only|The date time the step ended|
|»»»»» time_to_run|string|false|read-only|The total time it took to run the step (with milliseconds)|
|»»»»» did_error|boolean|false|read-only|Flag to test if the step errored|
|»»»»» did_timeout|boolean|false|read-only|Flag if the step timed-out|
|»»»» started_at|string(date-time)|false|read-only|The date time the context started|
|»»»» ended_at|string(date-time)\|null|false|read-only|The date time the context ended|
|»»»» time_to_run|number|false|read-only|The total time it took to run the workflow (with milliseconds)|
|»»»» active|boolean|false|read-only|Flag set if there are still steps which need to be executed|
|»»»» waiting_for_user|boolean|false|none|Flag for when the user needs to complete the step|
|»»»» data|object|false|read-only|Data set for the context|
|»»»» entity|object|false|read-only|none|

*anyOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»» *anonymous*|object|false|none|Contact Information|
|»»»»»» contact_id|string|false|read-only|Identifier for the contact|
|»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»» entity_type|string|true|none|none|
|»»»»»» label|string|true|none|Label for the entity|
|»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»» email|string(email)|false|none|Email address|
|»»»»»» name|string|false|none|Contact name|
|»»»»»» phone|string|false|none|Phone number|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»» *anonymous*|object|false|none|Customer|
|»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»» entity_type|string|true|none|none|
|»»»»»» label|string|true|none|Label for the entity|
|»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»» total_projects|number|false|none|Total projects under the customer|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»» *anonymous*|object|false|none|Defines the properties for a part|
|»»»»»» part_id|string|false|read-only|Unique identifier|
|»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»» entity_type|string|true|none|none|
|»»»»»» label|string|true|none|Label for the entity|
|»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»» customer|object|true|none|Customer|
|»»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»» entity_type|string|true|none|none|
|»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»» manufacturer|object|true|none|Manufacturer information for the part|
|»»»»»»» part_number|string|true|none|Manufacturer part number|
|»»»»»» serial_prefix|string|false|none|A serial number prefix for the part|
|»»»»»» input_filter|[object]|false|none|Input Filters allow custom fields to be defined for entities|
|»»»»»»» label|string|true|none|Human readable name|
|»»»»»»» key|string|true|read-only|Slug used to store the property|
|»»»»»»» filters|[anyOf]|true|none|A Collection of filters applied to the field|

*anyOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»» *anonymous*|object|false|none|This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set|
|»»»»»»»»» type|string|true|none|none|
|»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»» approved_values|[string]|true|none|The list of approved values|
|»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|
|»»»»»»»»»» default|string\|null|false|none|If this is set and the value is not in the approved_list, set the value to this|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»» *anonymous*|object|false|none|Make the value camelCase|
|»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a date|
|»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»» options|object|true|none|Date filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»» *anonymous*|object|false|none|Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty: # The number 0 or 0.0 # empty string '' # A boolean false # The word 'false' #|
|»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»» options|object|true|none|empty filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a float. Non numeric characters (including comma) will be removed|
|»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»» precision|integer|false|none|How many decimal places to preserve|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»» *anonymous*|object|false|none|Make the value kebab-case|
|»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»» *anonymous*|object|false|none|Make the value lowercase|
|»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed|
|»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»» options|object|true|none|Number filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»» *anonymous*|object|false|none|Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.|
|»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»» prefix|string|true|none|The prefix to add|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»» *anonymous*|object|false|none|Make the value snake_case|
|»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a string|
|»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»» options|object|true|none|String filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»» *anonymous*|object|false|none|Add a suffix to the start of a string. If the string already start with the suffix, it will not append.|
|»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»» suffix|string|true|none|The suffix to add|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»» *anonymous*|object|false|none|Filter to trim whitespace from a value|
|»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»» options|object|true|none|By default will trim from the start and end|
|»»»»»»»»»»»»»» start|boolean|false|none|Remove white space from the start of the string|
|»»»»»»»»»»»»»» end|boolean|false|none|Remove white space from the end of the string|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»» *anonymous*|object|false|none|Make the value UPPERCASE|
|»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»» options|object|true|none|This filter has no options|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»» validators|[anyOf]|true|none|A set of validators to use for this field|

*anyOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is between two values. By default, min and max are included|
|»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»» min|number|true|none|Minimum value to check|
|»»»»»»»»»»»»»»»» max|number|true|none|The maximum value to check|
|»»»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate value does not match a list (black list)|
|»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»» list|[string]|true|none|The list of approved values|
|»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string contains a value|
|»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»» contains|string|true|none|String must contain with this value|
|»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string is a correct email address|
|»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»» strict|boolean|false|none|Enforce strict standards from ARPA. This will enforce the length of the string|
|»»»»»»»»»»»»»»»»»»» lookup|boolean|false|none|Look up the host name and check if it has a valid MX record|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string ends with a value|
|»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»» ends_with|string|true|none|String must end with this value|
|»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number equals a value|
|»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When value is a float, this will set the decimal precision|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is greater than a value. By default, this will check if value is greater than or equals to|
|»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string has a correct DNS records|
|»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»» record_type|string|false|none|DNS record type to validate|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an IP address format. Defaults to matching IPv4|
|»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»» versions|[string]|false|none|IP Version to match against|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string is a certain length|
|»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»» length|string|true|none|String must contain with this value|
|»»»»»»»»»»»»»»»»»»»»»»»»» operator|string|false|none|Which type of length comparision to make|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is less than a value. By default, this will check if value is less than or equals to|
|»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an MAC address format|
|»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This validator has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches a regular expression|
|»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»» mask|string|true|none|Mask to validate against|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string starts with a value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»» starts_with|string|true|none|String must start with this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»» step|number|true|none|The step value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»» start|integer|false|none|Start stepping at this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»» end|integer|false|none|End stepping at this value|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an URI|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» schemes|[string]|false|none|Schemes to match. By default all are matched|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate value matches a list (white list)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» list|[string]|true|none|The list of approved values|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Defines the properties for a program|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» program_id|string|false|read-only|Unique identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|false|none|Label for the entity|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» customer|object|true|none|Customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» category|string|true|none|The classifier for the statues|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Defines the properties for a project|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» project_id|string|false|none|Unique identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» customer|object|true|none|Customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» program|object|true|none|Defines the properties for a program|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» program_id|string|false|read-only|Unique identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|false|none|Label for the entity|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» customer|object|true|none|Customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» end_date|string(date-time)\|null|false|none|End date|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Defines the properties for a unit|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» unit_id|string|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» serial_number|string|false|read-only|Serial number of the unit with prefix stripped|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» raw_serial_number|string|false|none|Serial number of the unit|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» tenant_part_number|string|false|none|Identifier set by the tenant|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» manufacturer|object|false|none|The manufacturer that makes this unit|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» part_number|string|false|none|The part number supplied by the manufacturer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» vendor|object|false|none|The vendor that sold this unit|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» part_number|string|false|none|The part number supplied by the vendor|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» part|object|true|none|Defines the properties for a part|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» part_id|string|false|read-only|Unique identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» customer|object|true|none|Customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» manufacturer|object|true|none|Manufacturer information for the part|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» part_number|string|true|none|Manufacturer part number|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» serial_prefix|string|false|none|A serial number prefix for the part|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» input_filter|[object]|false|none|Input Filters allow custom fields to be defined for entities|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|true|none|Human readable name|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» key|string|true|read-only|Slug used to store the property|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» filters|[anyOf]|true|none|A Collection of filters applied to the field|

*anyOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» approved_values|[string]|true|none|The list of approved values|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» default|string\|null|false|none|If this is set and the value is not in the approved_list, set the value to this|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Make the value camelCase|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a date|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|Date filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty: # The number 0 or 0.0 # empty string '' # A boolean false # The word 'false' #|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|empty filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a float. Non numeric characters (including comma) will be removed|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|How many decimal places to preserve|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Make the value kebab-case|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Make the value lowercase|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|Number filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» prefix|string|true|none|The prefix to add|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Make the value snake_case|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a string|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|String filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Add a suffix to the start of a string. If the string already start with the suffix, it will not append.|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» suffix|string|true|none|The suffix to add|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Filter to trim whitespace from a value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|By default will trim from the start and end|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» start|boolean|false|none|Remove white space from the start of the string|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» end|boolean|false|none|Remove white space from the end of the string|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Make the value UPPERCASE|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This filter has no options|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» validators|[anyOf]|true|none|A set of validators to use for this field|

*anyOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is between two values. By default, min and max are included|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» min|number|true|none|Minimum value to check|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» max|number|true|none|The maximum value to check|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate value does not match a list (black list)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» list|[string]|true|none|The list of approved values|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string contains a value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» contains|string|true|none|String must contain with this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string is a correct email address|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» strict|boolean|false|none|Enforce strict standards from ARPA. This will enforce the length of the string|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» lookup|boolean|false|none|Look up the host name and check if it has a valid MX record|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string ends with a value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» ends_with|string|true|none|String must end with this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number equals a value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When value is a float, this will set the decimal precision|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is greater than a value. By default, this will check if value is greater than or equals to|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string has a correct DNS records|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» record_type|string|false|none|DNS record type to validate|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an IP address format. Defaults to matching IPv4|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» versions|[string]|false|none|IP Version to match against|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string is a certain length|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» length|string|true|none|String must contain with this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» operator|string|false|none|Which type of length comparision to make|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is less than a value. By default, this will check if value is less than or equals to|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an MAC address format|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This validator has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches a regular expression|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» mask|string|true|none|Mask to validate against|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string starts with a value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» starts_with|string|true|none|String must start with this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» step|number|true|none|The step value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» start|integer|false|none|Start stepping at this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» end|integer|false|none|End stepping at this value|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an URI|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» schemes|[string]|false|none|Schemes to match. By default all are matched|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate value matches a list (white list)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» list|[string]|true|none|The list of approved values|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» customer|object|false|none|Customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» current_location|object|false|none|Defines the properties for a part unit|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» location_id|string|false|read-only|The identifier for the location|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» location_type|string|true|none|The type of location|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» address|object|true|none|xNAL address for the location|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» locality|string|true|none|City / Town|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» location|object|false|none|Defines the properties for a part unit|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» location_id|string|false|read-only|The identifier for the location|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» location_type|string|true|none|The type of location|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» address|object|true|none|xNAL address for the location|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» locality|string|true|none|City / Town|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» input_filter|[object]|false|none|Input Filters allow custom fields to be defined for entities|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|true|none|Human readable name|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» key|string|true|read-only|Slug used to store the property|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» filters|[anyOf]|true|none|A Collection of filters applied to the field|

*anyOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» approved_values|[string]|true|none|The list of approved values|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» default|string\|null|false|none|If this is set and the value is not in the approved_list, set the value to this|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Make the value camelCase|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a date|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|Date filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty: # The number 0 or 0.0 # empty string '' # A boolean false # The word 'false' #|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|empty filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a float. Non numeric characters (including comma) will be removed|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|How many decimal places to preserve|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Make the value kebab-case|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Make the value lowercase|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|Number filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» prefix|string|true|none|The prefix to add|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Make the value snake_case|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Filter to transform a value into a string|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|String filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Add a suffix to the start of a string. If the string already start with the suffix, it will not append.|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» suffix|string|true|none|The suffix to add|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Filter to trim whitespace from a value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|By default will trim from the start and end|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» start|boolean|false|none|Remove white space from the start of the string|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» end|boolean|false|none|Remove white space from the end of the string|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Make the value UPPERCASE|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This filter has no options|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» validators|[anyOf]|true|none|A set of validators to use for this field|

*anyOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is between two values. By default, min and max are included|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» min|number|true|none|Minimum value to check|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» max|number|true|none|The maximum value to check|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate value does not match a list (black list)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» list|[string]|true|none|The list of approved values|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string contains a value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» contains|string|true|none|String must contain with this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string is a correct email address|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» strict|boolean|false|none|Enforce strict standards from ARPA. This will enforce the length of the string|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» lookup|boolean|false|none|Look up the host name and check if it has a valid MX record|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string ends with a value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» ends_with|string|true|none|String must end with this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number equals a value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When value is a float, this will set the decimal precision|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is greater than a value. By default, this will check if value is greater than or equals to|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string has a correct DNS records|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» record_type|string|false|none|DNS record type to validate|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an IP address format. Defaults to matching IPv4|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» versions|[string]|false|none|IP Version to match against|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string is a certain length|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» length|string|true|none|String must contain with this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» operator|string|false|none|Which type of length comparision to make|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is less than a value. By default, this will check if value is less than or equals to|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an MAC address format|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This validator has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches a regular expression|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» mask|string|true|none|Mask to validate against|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string starts with a value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» starts_with|string|true|none|String must start with this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» step|number|true|none|The step value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» start|integer|false|none|Start stepping at this value|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» end|integer|false|none|End stepping at this value|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an URI|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» schemes|[string]|false|none|Schemes to match. By default all are matched|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate value matches a list (white list)|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» list|[string]|true|none|The list of approved values|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» current_status|object|false|none|Defines the properties for a status|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» _links|object|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» self|object|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» href|string(uri)|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» next|object|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» href|string(uri)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|WKF|
|schema_version|1.0|
|applies_to|unit|
|applies_to|part|
|applies_to|program|
|applies_to|project|
|applies_to|customer|
|applies_to|contact|
|entity_type|CON|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|PART|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|type|allowed_list|
|type|camel|
|type|date|
|type|empty|
|type|float|
|type|kebab|
|type|lower|
|type|number|
|type|prefix|
|type|snake|
|type|string|
|type|suffix|
|type|trim|
|type|upper|
|type|greater_than|
|type|white_list|
|type|contains|
|type|email_address|
|type|ends_with|
|type|equals|
|type|greater_than|
|type|hostname|
|record_type|A|
|record_type|AAAA|
|record_type|AFSDB|
|record_type|APL|
|record_type|CAA|
|record_type|CDNSKEY|
|record_type|CDS|
|record_type|CERT|
|record_type|CNAME|
|record_type|CSYNC|
|record_type|DHCID|
|record_type|DLV|
|record_type|DNAME|
|record_type|DNSKEY|
|record_type|DS|
|record_type|HIP|
|record_type|IPSECKEY|
|record_type|KEY|
|record_type|KX|
|record_type|LOC|
|record_type|MX|
|record_type|NAPTR|
|record_type|NS|
|record_type|NSEC|
|record_type|NSEC3|
|record_type|NSEC3PARAM|
|record_type|OPENPGPKEY|
|record_type|PTR|
|record_type|RRSIG|
|record_type|RP|
|record_type|SIG|
|record_type|SMIMEA|
|record_type|SOA|
|record_type|SRV|
|record_type|SSHFP|
|record_type|TA|
|record_type|TKEY|
|record_type|TLSA|
|record_type|TSIG|
|record_type|TXT|
|record_type|URI|
|type|ipAddress|
|type|length|
|operator|equals|
|operator|less_than|
|operator|less_than_equals|
|operator|greater_than|
|operator|greater_than_equals|
|type|lessThan|
|type|macAddress|
|type|mask|
|type|startsWith|
|type|step|
|type|uri|
|type|whiteList|
|entity_type|PGM|
|entity_type|CUS|
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
|entity_type|PRJ|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|PGM|
|entity_type|CUS|
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
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|UNIT|
|entity_type|PART|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|type|allowed_list|
|type|camel|
|type|date|
|type|empty|
|type|float|
|type|kebab|
|type|lower|
|type|number|
|type|prefix|
|type|snake|
|type|string|
|type|suffix|
|type|trim|
|type|upper|
|type|greater_than|
|type|white_list|
|type|contains|
|type|email_address|
|type|ends_with|
|type|equals|
|type|greater_than|
|type|hostname|
|record_type|A|
|record_type|AAAA|
|record_type|AFSDB|
|record_type|APL|
|record_type|CAA|
|record_type|CDNSKEY|
|record_type|CDS|
|record_type|CERT|
|record_type|CNAME|
|record_type|CSYNC|
|record_type|DHCID|
|record_type|DLV|
|record_type|DNAME|
|record_type|DNSKEY|
|record_type|DS|
|record_type|HIP|
|record_type|IPSECKEY|
|record_type|KEY|
|record_type|KX|
|record_type|LOC|
|record_type|MX|
|record_type|NAPTR|
|record_type|NS|
|record_type|NSEC|
|record_type|NSEC3|
|record_type|NSEC3PARAM|
|record_type|OPENPGPKEY|
|record_type|PTR|
|record_type|RRSIG|
|record_type|RP|
|record_type|SIG|
|record_type|SMIMEA|
|record_type|SOA|
|record_type|SRV|
|record_type|SSHFP|
|record_type|TA|
|record_type|TKEY|
|record_type|TLSA|
|record_type|TSIG|
|record_type|TXT|
|record_type|URI|
|type|ipAddress|
|type|length|
|operator|equals|
|operator|less_than|
|operator|less_than_equals|
|operator|greater_than|
|operator|greater_than_equals|
|type|lessThan|
|type|macAddress|
|type|mask|
|type|startsWith|
|type|step|
|type|uri|
|type|whiteList|
|entity_type|CUS|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|
|type|allowed_list|
|type|camel|
|type|date|
|type|empty|
|type|float|
|type|kebab|
|type|lower|
|type|number|
|type|prefix|
|type|snake|
|type|string|
|type|suffix|
|type|trim|
|type|upper|
|type|greater_than|
|type|white_list|
|type|contains|
|type|email_address|
|type|ends_with|
|type|equals|
|type|greater_than|
|type|hostname|
|record_type|A|
|record_type|AAAA|
|record_type|AFSDB|
|record_type|APL|
|record_type|CAA|
|record_type|CDNSKEY|
|record_type|CDS|
|record_type|CERT|
|record_type|CNAME|
|record_type|CSYNC|
|record_type|DHCID|
|record_type|DLV|
|record_type|DNAME|
|record_type|DNSKEY|
|record_type|DS|
|record_type|HIP|
|record_type|IPSECKEY|
|record_type|KEY|
|record_type|KX|
|record_type|LOC|
|record_type|MX|
|record_type|NAPTR|
|record_type|NS|
|record_type|NSEC|
|record_type|NSEC3|
|record_type|NSEC3PARAM|
|record_type|OPENPGPKEY|
|record_type|PTR|
|record_type|RRSIG|
|record_type|RP|
|record_type|SIG|
|record_type|SMIMEA|
|record_type|SOA|
|record_type|SRV|
|record_type|SSHFP|
|record_type|TA|
|record_type|TKEY|
|record_type|TLSA|
|record_type|TSIG|
|record_type|TXT|
|record_type|URI|
|type|ipAddress|
|type|length|
|operator|equals|
|operator|less_than|
|operator|less_than_equals|
|operator|greater_than|
|operator|greater_than_equals|
|type|lessThan|
|type|macAddress|
|type|mask|
|type|startsWith|
|type|step|
|type|uri|
|type|whiteList|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|

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

# Schemas

<h2 id="tocSresource">Resource</h2>

<a id="schemaresource"></a>

```yaml
type: object
description: Defines the properties for a resource
additionalProperties: false
required:
  - label
  - entity_id
  - entity_type
  - created
  - updated
  - resource_type
  - location
properties:
  resource_id:
    type: string
    description: The identifier for the resource
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
  resource_type:
    type: string
    description: >-
      Used to group resources together. Extensions or reports can then use the
      type for their needs. MUST be kebab-cased
    pattern: '^[a-z][0-9a-zA-Z-]+$'
  meta:
    type: object
    description: Data for the resource as a key value pair
    additionalProperties:
      type: string
    propertyNames:
      pattern: '^[A-Za-z][A-Za-z0-9_]*$'
  location:
    type: object
    description: Defines the properties for a part unit
    additionalProperties: false
    required:
      - label
      - entity_id
      - entity_type
      - created
      - updated
      - location_type
      - address
    properties:
      location_id:
        description: The identifier for the location
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
          - LOC
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
      location_type:
        type: string
        description: The type of location
        enum:
          - warehouse
          - facility
          - other
      formatted_address:
        type: string
        readOnly: true
        description: Address formatted for the where region the location exists in
      address:
        type: object
        required:
          - country
          - administrative_area
          - locality
          - postal_code
          - thoroughfare
        description: 'xNAL address for the location '
        properties:
          country:
            type: string
            description: Three Letter ISO country code
            enum:
              - ABW
              - AFG
              - AGO
              - AIA
              - ALA
              - ALB
              - AND
              - ARE
              - ARG
              - ARM
              - ASM
              - ATA
              - ATF
              - ATG
              - AUS
              - AUT
              - AZE
              - BDI
              - BEL
              - BEN
              - BES
              - BFA
              - BGD
              - BGR
              - BHR
              - BHS
              - BIH
              - BLM
              - BLR
              - BLZ
              - BMU
              - BOL
              - BRA
              - BRB
              - BRN
              - BTN
              - BVT
              - BWA
              - CAF
              - CAN
              - CCK
              - CHE
              - CHL
              - CHN
              - CIV
              - CMR
              - COD
              - COG
              - COK
              - COL
              - COM
              - CPV
              - CRI
              - CUB
              - CUW
              - CXR
              - CYM
              - CYP
              - CZE
              - DEU
              - DJI
              - DMA
              - DNK
              - DOM
              - DZA
              - ECU
              - EGY
              - ERI
              - ESH
              - ESP
              - EST
              - ETH
              - FIN
              - FJI
              - FLK
              - FRA
              - FRO
              - FSM
              - GAB
              - GBR
              - GEO
              - GGY
              - GHA
              - GIB
              - GIN
              - GLP
              - GMB
              - GNB
              - GNQ
              - GRC
              - GRD
              - GRL
              - GTM
              - GUF
              - GUM
              - GUY
              - HKG
              - HMD
              - HND
              - HRV
              - HTI
              - HUN
              - IDN
              - IMN
              - IND
              - IOT
              - IRL
              - IRN
              - IRQ
              - ISL
              - ISR
              - ITA
              - JAM
              - JEY
              - JOR
              - JPN
              - KAZ
              - KEN
              - KGZ
              - KHM
              - KIR
              - KNA
              - KOR
              - KWT
              - LAO
              - LBN
              - LBR
              - LBY
              - LCA
              - LIE
              - LKA
              - LSO
              - LTU
              - LUX
              - LVA
              - MAC
              - MAF
              - MAR
              - MCO
              - MDA
              - MDG
              - MDV
              - MEX
              - MHL
              - MKD
              - MLI
              - MLT
              - MMR
              - MNE
              - MNG
              - MNP
              - MOZ
              - MRT
              - MSR
              - MTQ
              - MUS
              - MWI
              - MYS
              - MYT
              - NAM
              - NCL
              - NER
              - NFK
              - NGA
              - NIC
              - NIU
              - NLD
              - NOR
              - NPL
              - NRU
              - NZL
              - OMN
              - PAK
              - PAN
              - PCN
              - PER
              - PHL
              - PLW
              - PNG
              - POL
              - PRI
              - PRK
              - PRT
              - PRY
              - PSE
              - PYF
              - QAT
              - REU
              - ROU
              - RUS
              - RWA
              - SAU
              - SDN
              - SEN
              - SGP
              - SGS
              - SHN
              - SJM
              - SLB
              - SLE
              - SLV
              - SMR
              - SOM
              - SPM
              - SRB
              - SSD
              - STP
              - SUR
              - SVK
              - SVN
              - SWE
              - SWZ
              - SXM
              - SYC
              - SYR
              - TCA
              - TCD
              - TGO
              - THA
              - TJK
              - TKL
              - TKM
              - TLS
              - TON
              - TTO
              - TUN
              - TUR
              - TUV
              - TWN
              - TZA
              - UGA
              - UKR
              - UMI
              - URY
              - USA
              - UZB
              - VAT
              - VCT
              - VEN
              - VGB
              - VIR
              - VNM
              - VUT
              - WLF
              - WSM
              - YEM
              - ZAF
              - ZMB
              - ZWE
          administrative_area:
            type: string
            description: State / Province / Region
          sub_administrative_area:
            type: string
            description: County / District
          locality:
            type: string
            description: City / Town
          postal_code:
            type: string
            description: Postal Code / Zip Code
          thoroughfare:
            type: string
            description: Street Address
          premise:
            type: string
            description: Apartment / Suite / Box number etc
          sub_premise:
            type: string
            description: 'Floor # / Room # / Building label etc'
  resource:
    type: object
    description: The parent resource if this is a child resource
    properties:
      resource_id:
        type: string
        description: The identifier for the resource
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
          - RES
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
      resource_type:
        type: string
        description: >-
          Used to group resources together. Extensions or reports can then use
          the type for their needs. MUST be kebab-cased
        pattern: '^[a-z][0-9a-zA-Z-]+$'
      meta:
        type: object
        description: Data for the resource as a key value pair
        additionalProperties:
          type: string
        propertyNames:
          pattern: '^[A-Za-z][A-Za-z0-9_]*$'
      location:
        type: object
        description: Defines the properties for a part unit
        additionalProperties: false
        required:
          - label
          - entity_id
          - entity_type
          - created
          - updated
          - location_type
          - address
        properties:
          location_id:
            description: The identifier for the location
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
              - LOC
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
          location_type:
            type: string
            description: The type of location
            enum:
              - warehouse
              - facility
              - other
          formatted_address:
            type: string
            readOnly: true
            description: Address formatted for the where region the location exists in
          address:
            type: object
            required:
              - country
              - administrative_area
              - locality
              - postal_code
              - thoroughfare
            description: 'xNAL address for the location '
            properties:
              country:
                type: string
                description: Three Letter ISO country code
                enum:
                  - ABW
                  - AFG
                  - AGO
                  - AIA
                  - ALA
                  - ALB
                  - AND
                  - ARE
                  - ARG
                  - ARM
                  - ASM
                  - ATA
                  - ATF
                  - ATG
                  - AUS
                  - AUT
                  - AZE
                  - BDI
                  - BEL
                  - BEN
                  - BES
                  - BFA
                  - BGD
                  - BGR
                  - BHR
                  - BHS
                  - BIH
                  - BLM
                  - BLR
                  - BLZ
                  - BMU
                  - BOL
                  - BRA
                  - BRB
                  - BRN
                  - BTN
                  - BVT
                  - BWA
                  - CAF
                  - CAN
                  - CCK
                  - CHE
                  - CHL
                  - CHN
                  - CIV
                  - CMR
                  - COD
                  - COG
                  - COK
                  - COL
                  - COM
                  - CPV
                  - CRI
                  - CUB
                  - CUW
                  - CXR
                  - CYM
                  - CYP
                  - CZE
                  - DEU
                  - DJI
                  - DMA
                  - DNK
                  - DOM
                  - DZA
                  - ECU
                  - EGY
                  - ERI
                  - ESH
                  - ESP
                  - EST
                  - ETH
                  - FIN
                  - FJI
                  - FLK
                  - FRA
                  - FRO
                  - FSM
                  - GAB
                  - GBR
                  - GEO
                  - GGY
                  - GHA
                  - GIB
                  - GIN
                  - GLP
                  - GMB
                  - GNB
                  - GNQ
                  - GRC
                  - GRD
                  - GRL
                  - GTM
                  - GUF
                  - GUM
                  - GUY
                  - HKG
                  - HMD
                  - HND
                  - HRV
                  - HTI
                  - HUN
                  - IDN
                  - IMN
                  - IND
                  - IOT
                  - IRL
                  - IRN
                  - IRQ
                  - ISL
                  - ISR
                  - ITA
                  - JAM
                  - JEY
                  - JOR
                  - JPN
                  - KAZ
                  - KEN
                  - KGZ
                  - KHM
                  - KIR
                  - KNA
                  - KOR
                  - KWT
                  - LAO
                  - LBN
                  - LBR
                  - LBY
                  - LCA
                  - LIE
                  - LKA
                  - LSO
                  - LTU
                  - LUX
                  - LVA
                  - MAC
                  - MAF
                  - MAR
                  - MCO
                  - MDA
                  - MDG
                  - MDV
                  - MEX
                  - MHL
                  - MKD
                  - MLI
                  - MLT
                  - MMR
                  - MNE
                  - MNG
                  - MNP
                  - MOZ
                  - MRT
                  - MSR
                  - MTQ
                  - MUS
                  - MWI
                  - MYS
                  - MYT
                  - NAM
                  - NCL
                  - NER
                  - NFK
                  - NGA
                  - NIC
                  - NIU
                  - NLD
                  - NOR
                  - NPL
                  - NRU
                  - NZL
                  - OMN
                  - PAK
                  - PAN
                  - PCN
                  - PER
                  - PHL
                  - PLW
                  - PNG
                  - POL
                  - PRI
                  - PRK
                  - PRT
                  - PRY
                  - PSE
                  - PYF
                  - QAT
                  - REU
                  - ROU
                  - RUS
                  - RWA
                  - SAU
                  - SDN
                  - SEN
                  - SGP
                  - SGS
                  - SHN
                  - SJM
                  - SLB
                  - SLE
                  - SLV
                  - SMR
                  - SOM
                  - SPM
                  - SRB
                  - SSD
                  - STP
                  - SUR
                  - SVK
                  - SVN
                  - SWE
                  - SWZ
                  - SXM
                  - SYC
                  - SYR
                  - TCA
                  - TCD
                  - TGO
                  - THA
                  - TJK
                  - TKL
                  - TKM
                  - TLS
                  - TON
                  - TTO
                  - TUN
                  - TUR
                  - TUV
                  - TWN
                  - TZA
                  - UGA
                  - UKR
                  - UMI
                  - URY
                  - USA
                  - UZB
                  - VAT
                  - VCT
                  - VEN
                  - VGB
                  - VIR
                  - VNM
                  - VUT
                  - WLF
                  - WSM
                  - YEM
                  - ZAF
                  - ZMB
                  - ZWE
              administrative_area:
                type: string
                description: State / Province / Region
              sub_administrative_area:
                type: string
                description: County / District
              locality:
                type: string
                description: City / Town
              postal_code:
                type: string
                description: Postal Code / Zip Code
              thoroughfare:
                type: string
                description: Street Address
              premise:
                type: string
                description: Apartment / Suite / Box number etc
              sub_premise:
                type: string
                description: 'Floor # / Room # / Building label etc'

```

*Defines the properties for a resource*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource_id|string|false|none|The identifier for the resource|
|label|string|true|none|Label for the entity|
|slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|resource_type|string|true|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|meta|object|false|none|Data for the resource as a key value pair|
|» **additionalProperties**|string|false|none|none|
|location|object|true|none|Defines the properties for a part unit|
|» location_id|string|false|read-only|The identifier for the location|
|» entity_id|string|true|read-only|Customer identifier|
|» entity_type|string|true|none|none|
|» label|string|true|none|Label for the entity|
|» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|» created|string(date-time)|true|read-only|Date the entity was created|
|» updated|string(date-time)|true|read-only|Last date the entity was updated|
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
|»» entity_id|string|false|read-only|Customer identifier|
|»» entity_type|string|false|none|none|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» resource_type|string|false|none|Used to group resources together. Extensions or reports can then use the type for their needs. MUST be kebab-cased|
|»» meta|object|false|none|Data for the resource as a key value pair|
|»»» **additionalProperties**|string|false|none|none|
|»» location|object|false|none|Defines the properties for a part unit|
|»»» location_id|string|false|read-only|The identifier for the location|
|»»» entity_id|string|true|read-only|Customer identifier|
|»»» entity_type|string|true|none|none|
|»»» label|string|true|none|Label for the entity|
|»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
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
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|
|entity_type|RES|
|entity_type|LOC|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|country|ABW|
|country|AFG|
|country|AGO|
|country|AIA|
|country|ALA|
|country|ALB|
|country|AND|
|country|ARE|
|country|ARG|
|country|ARM|
|country|ASM|
|country|ATA|
|country|ATF|
|country|ATG|
|country|AUS|
|country|AUT|
|country|AZE|
|country|BDI|
|country|BEL|
|country|BEN|
|country|BES|
|country|BFA|
|country|BGD|
|country|BGR|
|country|BHR|
|country|BHS|
|country|BIH|
|country|BLM|
|country|BLR|
|country|BLZ|
|country|BMU|
|country|BOL|
|country|BRA|
|country|BRB|
|country|BRN|
|country|BTN|
|country|BVT|
|country|BWA|
|country|CAF|
|country|CAN|
|country|CCK|
|country|CHE|
|country|CHL|
|country|CHN|
|country|CIV|
|country|CMR|
|country|COD|
|country|COG|
|country|COK|
|country|COL|
|country|COM|
|country|CPV|
|country|CRI|
|country|CUB|
|country|CUW|
|country|CXR|
|country|CYM|
|country|CYP|
|country|CZE|
|country|DEU|
|country|DJI|
|country|DMA|
|country|DNK|
|country|DOM|
|country|DZA|
|country|ECU|
|country|EGY|
|country|ERI|
|country|ESH|
|country|ESP|
|country|EST|
|country|ETH|
|country|FIN|
|country|FJI|
|country|FLK|
|country|FRA|
|country|FRO|
|country|FSM|
|country|GAB|
|country|GBR|
|country|GEO|
|country|GGY|
|country|GHA|
|country|GIB|
|country|GIN|
|country|GLP|
|country|GMB|
|country|GNB|
|country|GNQ|
|country|GRC|
|country|GRD|
|country|GRL|
|country|GTM|
|country|GUF|
|country|GUM|
|country|GUY|
|country|HKG|
|country|HMD|
|country|HND|
|country|HRV|
|country|HTI|
|country|HUN|
|country|IDN|
|country|IMN|
|country|IND|
|country|IOT|
|country|IRL|
|country|IRN|
|country|IRQ|
|country|ISL|
|country|ISR|
|country|ITA|
|country|JAM|
|country|JEY|
|country|JOR|
|country|JPN|
|country|KAZ|
|country|KEN|
|country|KGZ|
|country|KHM|
|country|KIR|
|country|KNA|
|country|KOR|
|country|KWT|
|country|LAO|
|country|LBN|
|country|LBR|
|country|LBY|
|country|LCA|
|country|LIE|
|country|LKA|
|country|LSO|
|country|LTU|
|country|LUX|
|country|LVA|
|country|MAC|
|country|MAF|
|country|MAR|
|country|MCO|
|country|MDA|
|country|MDG|
|country|MDV|
|country|MEX|
|country|MHL|
|country|MKD|
|country|MLI|
|country|MLT|
|country|MMR|
|country|MNE|
|country|MNG|
|country|MNP|
|country|MOZ|
|country|MRT|
|country|MSR|
|country|MTQ|
|country|MUS|
|country|MWI|
|country|MYS|
|country|MYT|
|country|NAM|
|country|NCL|
|country|NER|
|country|NFK|
|country|NGA|
|country|NIC|
|country|NIU|
|country|NLD|
|country|NOR|
|country|NPL|
|country|NRU|
|country|NZL|
|country|OMN|
|country|PAK|
|country|PAN|
|country|PCN|
|country|PER|
|country|PHL|
|country|PLW|
|country|PNG|
|country|POL|
|country|PRI|
|country|PRK|
|country|PRT|
|country|PRY|
|country|PSE|
|country|PYF|
|country|QAT|
|country|REU|
|country|ROU|
|country|RUS|
|country|RWA|
|country|SAU|
|country|SDN|
|country|SEN|
|country|SGP|
|country|SGS|
|country|SHN|
|country|SJM|
|country|SLB|
|country|SLE|
|country|SLV|
|country|SMR|
|country|SOM|
|country|SPM|
|country|SRB|
|country|SSD|
|country|STP|
|country|SUR|
|country|SVK|
|country|SVN|
|country|SWE|
|country|SWZ|
|country|SXM|
|country|SYC|
|country|SYR|
|country|TCA|
|country|TCD|
|country|TGO|
|country|THA|
|country|TJK|
|country|TKL|
|country|TKM|
|country|TLS|
|country|TON|
|country|TTO|
|country|TUN|
|country|TUR|
|country|TUV|
|country|TWN|
|country|TZA|
|country|UGA|
|country|UKR|
|country|UMI|
|country|URY|
|country|USA|
|country|UZB|
|country|VAT|
|country|VCT|
|country|VEN|
|country|VGB|
|country|VIR|
|country|VNM|
|country|VUT|
|country|WLF|
|country|WSM|
|country|YEM|
|country|ZAF|
|country|ZMB|
|country|ZWE|

