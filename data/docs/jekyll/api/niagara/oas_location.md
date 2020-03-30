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

* Do not remove this line (it will not be displayed)
{:toc}

> Scroll down for example requests and responses.

API for the nterprise application

Base URLs:

* <a href="https://{environment}.nterprise.com">https://{environment}.nterprise.com</a>

    * **environment** -  Default: api

        * api

        * api.dev

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

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:locations": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "object",
            "properties": {
              "_links": {
                "type": "object",
                "properties": {
                  "self": {
                    "x-example": {
                      "href": "https://api.nterprise.com/locations/23Y1rNJ6zyiRzqN"
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
              "location_id": {
                "description": "The identifier for the location",
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
    },
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "x-example": {
            "href": "https://api.nterprise.com/locations"
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
          "x-example": {
            "href": "https://api.nterprise.com/locations?offset=QVBrO2wm13iEyl&limit=100"
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
|»» nter:locations|[object]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» location_id|string|false|read-only|The identifier for the location|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» location_type|string|false|none|The type of location|
|»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»» address|object|false|none|xNAL address for the location|
|»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»» locality|string|true|none|City / Town|
|»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»» thoroughfare|string|true|none|Street Address|
|»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»» _links|object|false|none|none|
|»»»»» self|object|false|none|none|
|»»»»»» href|string(uri)|false|none|none|
|»»»»» next|object|false|none|none|
|»»»»»» href|string(uri)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
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

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:locations": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "object",
            "properties": {
              "_links": {
                "type": "object",
                "properties": {
                  "self": {
                    "x-example": {
                      "href": "https://api.nterprise.com/locations/23Y1rNJ6zyiRzqN"
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
              "location_id": {
                "description": "The identifier for the location",
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
    },
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "x-example": {
            "href": "https://api.nterprise.com/locations"
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
          "x-example": {
            "href": "https://api.nterprise.com/locations?offset=QVBrO2wm13iEyl&limit=100"
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
|»» nter:locations|[object]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» location_id|string|false|read-only|The identifier for the location|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» location_type|string|false|none|The type of location|
|»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»» address|object|false|none|xNAL address for the location|
|»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»» locality|string|true|none|City / Town|
|»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»» thoroughfare|string|true|none|Street Address|
|»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»» _links|object|false|none|none|
|»»»»» self|object|false|none|none|
|»»»»»» href|string(uri)|false|none|none|
|»»»»» next|object|false|none|none|
|»»»»»» href|string(uri)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
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
    "label",
    "location_type",
    "address"
  ],
  "properties": {
    "label": {
      "description": "The identifier for the location",
      "type": "string",
      "readOnly": true,
      "pattern": "^[0-9a-zA-Z-_]+$"
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
```

<h3 id="createlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|The identifier for the location|
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

#### Enumerated Values

|Parameter|Value|
|---|---|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|» country|ABW|
|» country|AFG|
|» country|AGO|
|» country|AIA|
|» country|ALA|
|» country|ALB|
|» country|AND|
|» country|ARE|
|» country|ARG|
|» country|ARM|
|» country|ASM|
|» country|ATA|
|» country|ATF|
|» country|ATG|
|» country|AUS|
|» country|AUT|
|» country|AZE|
|» country|BDI|
|» country|BEL|
|» country|BEN|
|» country|BES|
|» country|BFA|
|» country|BGD|
|» country|BGR|
|» country|BHR|
|» country|BHS|
|» country|BIH|
|» country|BLM|
|» country|BLR|
|» country|BLZ|
|» country|BMU|
|» country|BOL|
|» country|BRA|
|» country|BRB|
|» country|BRN|
|» country|BTN|
|» country|BVT|
|» country|BWA|
|» country|CAF|
|» country|CAN|
|» country|CCK|
|» country|CHE|
|» country|CHL|
|» country|CHN|
|» country|CIV|
|» country|CMR|
|» country|COD|
|» country|COG|
|» country|COK|
|» country|COL|
|» country|COM|
|» country|CPV|
|» country|CRI|
|» country|CUB|
|» country|CUW|
|» country|CXR|
|» country|CYM|
|» country|CYP|
|» country|CZE|
|» country|DEU|
|» country|DJI|
|» country|DMA|
|» country|DNK|
|» country|DOM|
|» country|DZA|
|» country|ECU|
|» country|EGY|
|» country|ERI|
|» country|ESH|
|» country|ESP|
|» country|EST|
|» country|ETH|
|» country|FIN|
|» country|FJI|
|» country|FLK|
|» country|FRA|
|» country|FRO|
|» country|FSM|
|» country|GAB|
|» country|GBR|
|» country|GEO|
|» country|GGY|
|» country|GHA|
|» country|GIB|
|» country|GIN|
|» country|GLP|
|» country|GMB|
|» country|GNB|
|» country|GNQ|
|» country|GRC|
|» country|GRD|
|» country|GRL|
|» country|GTM|
|» country|GUF|
|» country|GUM|
|» country|GUY|
|» country|HKG|
|» country|HMD|
|» country|HND|
|» country|HRV|
|» country|HTI|
|» country|HUN|
|» country|IDN|
|» country|IMN|
|» country|IND|
|» country|IOT|
|» country|IRL|
|» country|IRN|
|» country|IRQ|
|» country|ISL|
|» country|ISR|
|» country|ITA|
|» country|JAM|
|» country|JEY|
|» country|JOR|
|» country|JPN|
|» country|KAZ|
|» country|KEN|
|» country|KGZ|
|» country|KHM|
|» country|KIR|
|» country|KNA|
|» country|KOR|
|» country|KWT|
|» country|LAO|
|» country|LBN|
|» country|LBR|
|» country|LBY|
|» country|LCA|
|» country|LIE|
|» country|LKA|
|» country|LSO|
|» country|LTU|
|» country|LUX|
|» country|LVA|
|» country|MAC|
|» country|MAF|
|» country|MAR|
|» country|MCO|
|» country|MDA|
|» country|MDG|
|» country|MDV|
|» country|MEX|
|» country|MHL|
|» country|MKD|
|» country|MLI|
|» country|MLT|
|» country|MMR|
|» country|MNE|
|» country|MNG|
|» country|MNP|
|» country|MOZ|
|» country|MRT|
|» country|MSR|
|» country|MTQ|
|» country|MUS|
|» country|MWI|
|» country|MYS|
|» country|MYT|
|» country|NAM|
|» country|NCL|
|» country|NER|
|» country|NFK|
|» country|NGA|
|» country|NIC|
|» country|NIU|
|» country|NLD|
|» country|NOR|
|» country|NPL|
|» country|NRU|
|» country|NZL|
|» country|OMN|
|» country|PAK|
|» country|PAN|
|» country|PCN|
|» country|PER|
|» country|PHL|
|» country|PLW|
|» country|PNG|
|» country|POL|
|» country|PRI|
|» country|PRK|
|» country|PRT|
|» country|PRY|
|» country|PSE|
|» country|PYF|
|» country|QAT|
|» country|REU|
|» country|ROU|
|» country|RUS|
|» country|RWA|
|» country|SAU|
|» country|SDN|
|» country|SEN|
|» country|SGP|
|» country|SGS|
|» country|SHN|
|» country|SJM|
|» country|SLB|
|» country|SLE|
|» country|SLV|
|» country|SMR|
|» country|SOM|
|» country|SPM|
|» country|SRB|
|» country|SSD|
|» country|STP|
|» country|SUR|
|» country|SVK|
|» country|SVN|
|» country|SWE|
|» country|SWZ|
|» country|SXM|
|» country|SYC|
|» country|SYR|
|» country|TCA|
|» country|TCD|
|» country|TGO|
|» country|THA|
|» country|TJK|
|» country|TKL|
|» country|TKM|
|» country|TLS|
|» country|TON|
|» country|TTO|
|» country|TUN|
|» country|TUR|
|» country|TUV|
|» country|TWN|
|» country|TZA|
|» country|UGA|
|» country|UKR|
|» country|UMI|
|» country|URY|
|» country|USA|
|» country|UZB|
|» country|VAT|
|» country|VCT|
|» country|VEN|
|» country|VGB|
|» country|VIR|
|» country|VNM|
|» country|VUT|
|» country|WLF|
|» country|WSM|
|» country|YEM|
|» country|ZAF|
|» country|ZMB|
|» country|ZWE|

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
          "x-example": {
            "href": "https://api.nterprise.com/locations/23Y1rNJ6zyiRzqN"
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
    "location_id": {
      "description": "The identifier for the location",
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
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» location_id|string|false|read-only|The identifier for the location|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» location_type|string|false|none|The type of location|
|»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»» address|object|false|none|xNAL address for the location|
|»»» country|string|true|none|Three Letter ISO country code|
|»»» administrative_area|string|true|none|State / Province / Region|
|»»» sub_administrative_area|string|false|none|County / District|
|»»» locality|string|true|none|City / Town|
|»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»» thoroughfare|string|true|none|Street Address|
|»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|

#### Enumerated Values

|Property|Value|
|---|---|
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

## fetchLocationById

<a id="opIdfetchLocationById"></a>

`GET /locations/{location_id}`

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
  "properties": {
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "x-example": {
            "href": "https://api.nterprise.com/locations/23Y1rNJ6zyiRzqN"
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
    "location_id": {
      "description": "The identifier for the location",
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
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» location_id|string|false|read-only|The identifier for the location|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» location_type|string|false|none|The type of location|
|»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»» address|object|false|none|xNAL address for the location|
|»»» country|string|true|none|Three Letter ISO country code|
|»»» administrative_area|string|true|none|State / Province / Region|
|»»» sub_administrative_area|string|false|none|County / District|
|»»» locality|string|true|none|City / Town|
|»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»» thoroughfare|string|true|none|Street Address|
|»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|

#### Enumerated Values

|Property|Value|
|---|---|
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

## updateLocation

<a id="opIdupdateLocation"></a>

`PUT /locations/{location_id}`

*Updates a location*

Updates a location

> Body parameter

```json
{
  "type": "object",
  "required": [
    "label",
    "location_type",
    "address"
  ],
  "properties": {
    "label": {
      "description": "The identifier for the location",
      "type": "string",
      "readOnly": true,
      "pattern": "^[0-9a-zA-Z-_]+$"
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
```

<h3 id="updatelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|
|label|body|string|true|The identifier for the location|
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

#### Enumerated Values

|Parameter|Value|
|---|---|
|location_type|warehouse|
|location_type|facility|
|location_type|other|
|» country|ABW|
|» country|AFG|
|» country|AGO|
|» country|AIA|
|» country|ALA|
|» country|ALB|
|» country|AND|
|» country|ARE|
|» country|ARG|
|» country|ARM|
|» country|ASM|
|» country|ATA|
|» country|ATF|
|» country|ATG|
|» country|AUS|
|» country|AUT|
|» country|AZE|
|» country|BDI|
|» country|BEL|
|» country|BEN|
|» country|BES|
|» country|BFA|
|» country|BGD|
|» country|BGR|
|» country|BHR|
|» country|BHS|
|» country|BIH|
|» country|BLM|
|» country|BLR|
|» country|BLZ|
|» country|BMU|
|» country|BOL|
|» country|BRA|
|» country|BRB|
|» country|BRN|
|» country|BTN|
|» country|BVT|
|» country|BWA|
|» country|CAF|
|» country|CAN|
|» country|CCK|
|» country|CHE|
|» country|CHL|
|» country|CHN|
|» country|CIV|
|» country|CMR|
|» country|COD|
|» country|COG|
|» country|COK|
|» country|COL|
|» country|COM|
|» country|CPV|
|» country|CRI|
|» country|CUB|
|» country|CUW|
|» country|CXR|
|» country|CYM|
|» country|CYP|
|» country|CZE|
|» country|DEU|
|» country|DJI|
|» country|DMA|
|» country|DNK|
|» country|DOM|
|» country|DZA|
|» country|ECU|
|» country|EGY|
|» country|ERI|
|» country|ESH|
|» country|ESP|
|» country|EST|
|» country|ETH|
|» country|FIN|
|» country|FJI|
|» country|FLK|
|» country|FRA|
|» country|FRO|
|» country|FSM|
|» country|GAB|
|» country|GBR|
|» country|GEO|
|» country|GGY|
|» country|GHA|
|» country|GIB|
|» country|GIN|
|» country|GLP|
|» country|GMB|
|» country|GNB|
|» country|GNQ|
|» country|GRC|
|» country|GRD|
|» country|GRL|
|» country|GTM|
|» country|GUF|
|» country|GUM|
|» country|GUY|
|» country|HKG|
|» country|HMD|
|» country|HND|
|» country|HRV|
|» country|HTI|
|» country|HUN|
|» country|IDN|
|» country|IMN|
|» country|IND|
|» country|IOT|
|» country|IRL|
|» country|IRN|
|» country|IRQ|
|» country|ISL|
|» country|ISR|
|» country|ITA|
|» country|JAM|
|» country|JEY|
|» country|JOR|
|» country|JPN|
|» country|KAZ|
|» country|KEN|
|» country|KGZ|
|» country|KHM|
|» country|KIR|
|» country|KNA|
|» country|KOR|
|» country|KWT|
|» country|LAO|
|» country|LBN|
|» country|LBR|
|» country|LBY|
|» country|LCA|
|» country|LIE|
|» country|LKA|
|» country|LSO|
|» country|LTU|
|» country|LUX|
|» country|LVA|
|» country|MAC|
|» country|MAF|
|» country|MAR|
|» country|MCO|
|» country|MDA|
|» country|MDG|
|» country|MDV|
|» country|MEX|
|» country|MHL|
|» country|MKD|
|» country|MLI|
|» country|MLT|
|» country|MMR|
|» country|MNE|
|» country|MNG|
|» country|MNP|
|» country|MOZ|
|» country|MRT|
|» country|MSR|
|» country|MTQ|
|» country|MUS|
|» country|MWI|
|» country|MYS|
|» country|MYT|
|» country|NAM|
|» country|NCL|
|» country|NER|
|» country|NFK|
|» country|NGA|
|» country|NIC|
|» country|NIU|
|» country|NLD|
|» country|NOR|
|» country|NPL|
|» country|NRU|
|» country|NZL|
|» country|OMN|
|» country|PAK|
|» country|PAN|
|» country|PCN|
|» country|PER|
|» country|PHL|
|» country|PLW|
|» country|PNG|
|» country|POL|
|» country|PRI|
|» country|PRK|
|» country|PRT|
|» country|PRY|
|» country|PSE|
|» country|PYF|
|» country|QAT|
|» country|REU|
|» country|ROU|
|» country|RUS|
|» country|RWA|
|» country|SAU|
|» country|SDN|
|» country|SEN|
|» country|SGP|
|» country|SGS|
|» country|SHN|
|» country|SJM|
|» country|SLB|
|» country|SLE|
|» country|SLV|
|» country|SMR|
|» country|SOM|
|» country|SPM|
|» country|SRB|
|» country|SSD|
|» country|STP|
|» country|SUR|
|» country|SVK|
|» country|SVN|
|» country|SWE|
|» country|SWZ|
|» country|SXM|
|» country|SYC|
|» country|SYR|
|» country|TCA|
|» country|TCD|
|» country|TGO|
|» country|THA|
|» country|TJK|
|» country|TKL|
|» country|TKM|
|» country|TLS|
|» country|TON|
|» country|TTO|
|» country|TUN|
|» country|TUR|
|» country|TUV|
|» country|TWN|
|» country|TZA|
|» country|UGA|
|» country|UKR|
|» country|UMI|
|» country|URY|
|» country|USA|
|» country|UZB|
|» country|VAT|
|» country|VCT|
|» country|VEN|
|» country|VGB|
|» country|VIR|
|» country|VNM|
|» country|VUT|
|» country|WLF|
|» country|WSM|
|» country|YEM|
|» country|ZAF|
|» country|ZMB|
|» country|ZWE|

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
          "x-example": {
            "href": "https://api.nterprise.com/locations/23Y1rNJ6zyiRzqN"
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
    "location_id": {
      "description": "The identifier for the location",
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
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» location_id|string|false|read-only|The identifier for the location|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» location_type|string|false|none|The type of location|
|»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»» address|object|false|none|xNAL address for the location|
|»»» country|string|true|none|Three Letter ISO country code|
|»»» administrative_area|string|true|none|State / Province / Region|
|»»» sub_administrative_area|string|false|none|County / District|
|»»» locality|string|true|none|City / Town|
|»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»» thoroughfare|string|true|none|Street Address|
|»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|

#### Enumerated Values

|Property|Value|
|---|---|
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

## deleteLocation

<a id="opIddeleteLocation"></a>

`DELETE /locations/{location_id}`

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

## fetchAllResources

<a id="opIdfetchAllResources"></a>

`GET /locations/{location_id}/resources`

*Fetches A Page of resources for the location*

Fetch location resources

<h3 id="fetchallresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location_id|path|string|true|Id for the location|
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
                    "x-example": {
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
          "x-example": {
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
          "x-example": {
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

## fetchResourceById

<a id="opIdfetchResourceById"></a>

`GET /locations/{location_id}/resources/{resource_id}`

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
  "properties": {
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "x-example": {
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

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "_embedded": {
      "type": "object",
      "properties": {
        "nter:locations": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "object",
            "properties": {
              "_links": {
                "type": "object",
                "properties": {
                  "self": {
                    "x-example": {
                      "href": "https://api.nterprise.com/locations/23Y1rNJ6zyiRzqN"
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
              "location_id": {
                "description": "The identifier for the location",
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
    },
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "x-example": {
            "href": "https://api.nterprise.com/locations"
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
          "x-example": {
            "href": "https://api.nterprise.com/locations?offset=QVBrO2wm13iEyl&limit=100"
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
|»» nter:locations|[object]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» location_id|string|false|read-only|The identifier for the location|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» location_type|string|false|none|The type of location|
|»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»» address|object|false|none|xNAL address for the location|
|»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»» locality|string|true|none|City / Town|
|»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»» thoroughfare|string|true|none|Street Address|
|»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»» _links|object|false|none|none|
|»»»»» self|object|false|none|none|
|»»»»»» href|string(uri)|false|none|none|
|»»»»» next|object|false|none|none|
|»»»»»» href|string(uri)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
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

# Schemas

<h2 id="tocSlocation">Location</h2>

<a id="schemalocation"></a>

```yaml
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

*Defines the properties for a part unit*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location_id|string|false|read-only|The identifier for the location|
|entity_id|string|true|read-only|Customer identifier|
|entity_type|string|true|none|none|
|label|string|true|none|Label for the entity|
|slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
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

