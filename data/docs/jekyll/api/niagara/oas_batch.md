---
layout: page
parent: Niagara API
nav_order: 1
title: Batches
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="batches">Batches v2.0.0</h1>

* Do not remove this line (it will not be displayed)
{:toc}

> Scroll down for example requests and responses.

When a Work Order is created to configure Units, the production manager will break down the Work Order into one or more Batches.  For example, if a Work Order requested 500 iPads to be provisioned, and those devices are typically completed in boxes of ten, they may choose to create 50 Batches of 10.

Batches contain all of the information from the Work Order, including the Workflow, Begin and Due Dates, but also the assigned technician(s).

Each Batch is then placed into a Production Queue, where the assigned technician will access as part of their assignments.

Cycles in a batch can be modified after the Batch is created; however, in-flight cycles will continue to process until completion or failure.

Batches create a relationship between the `work order` and the `queue` allowing queues to be filtered by the work order

## Security Restrictions

Batches descend from a `queue.` A User must be granted the `create.batch` permission and have access to queue before a batch can be created. 

Base URLs:

* <a href="https://{environment}.nterprise.com">https://{environment}.nterprise.com</a>

    * **environment** -  Default: api

        * api

        * api.dev

<h1 id="batches-batch">Batch</h1>

## fetchAllBatches

<a id="opIdfetchAllBatches"></a>

`GET /batches`

*Fetches A Page of batches*

Fetch Batches

<h3 id="fetchallbatches-parameters">Parameters</h3>

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
        "nter:batchs": {
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
                      "href": "https://api.nterprise.com/batchs/JwlLkLBBm2IVWG"
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
              "batch_id": {
                "description": "The identifier for the batch",
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
              "queue": {
                "type": "object",
                "description": "Defines the properties for a location queue",
                "additionalProperties": false,
                "required": [
                  "label",
                  "entity_id",
                  "entity_type",
                  "created",
                  "updated",
                  "location",
                  "is_active",
                  "active_batches",
                  "active_cycles"
                ],
                "properties": {
                  "queue_id": {
                    "type": "string",
                    "description": "The identifier for the queue",
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
                      "QUE"
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
                  "priority": {
                    "type": "integer",
                    "description": "Priority level for queue",
                    "minimum": 0
                  },
                  "total_work_orders": {
                    "type": "object",
                    "readOnly": true,
                    "additionalProperties": false,
                    "properties": {
                      "pending": {
                        "type": "integer",
                        "description": "The number of cycles pending",
                        "readOnly": true
                      },
                      "in_progress": {
                        "type": "integer",
                        "description": "The number of cycles in progress",
                        "readOnly": true
                      },
                      "verifying": {
                        "type": "integer",
                        "description": "The number of cycles verifying",
                        "readOnly": true
                      },
                      "complete": {
                        "type": "integer",
                        "description": "The number of cycles complete",
                        "readOnly": true
                      },
                      "blocked": {
                        "type": "integer",
                        "description": "The number of cycles blocked",
                        "readOnly": true
                      },
                      "cancelled": {
                        "type": "integer",
                        "description": "The number of cycles cancelled",
                        "readOnly": true
                      }
                    }
                  },
                  "active_work_orders": {
                    "type": "number",
                    "description": "Total of work orders in an active status",
                    "readOnly": true
                  },
                  "total_batches": {
                    "type": "integer",
                    "description": "Number of batches assigned to the queue",
                    "readOnly": true
                  },
                  "is_active": {
                    "type": "boolean",
                    "description": "Toggle if the batch has active cycles or batches",
                    "readOnly": true
                  },
                  "active_batches": {
                    "type": "number",
                    "description": "Total of batches in the queue with active cycles",
                    "readOnly": true
                  },
                  "active_cycles": {
                    "type": "number",
                    "description": "Total of all active cycles across all batches",
                    "readOnly": true
                  }
                }
              },
              "order": {
                "type": "integer",
                "description": "Order to process the batch",
                "minimum": 0
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
                  },
                  "description": {
                    "type": "string",
                    "nullable": true,
                    "description": "A description for the status"
                  },
                  "order": {
                    "type": "number",
                    "description": "Order status appears when listing"
                  }
                }
              },
              "number_cycles": {
                "type": "integer",
                "description": "The number of cycles for this batch",
                "minimum": 1
              },
              "cycles": {
                "type": "object",
                "readOnly": true,
                "additionalProperties": false,
                "properties": {
                  "pending": {
                    "type": "integer",
                    "description": "The number of cycles pending",
                    "readOnly": true
                  },
                  "in_progress": {
                    "type": "integer",
                    "description": "The number of cycles in progress",
                    "readOnly": true
                  },
                  "verifying": {
                    "type": "integer",
                    "description": "The number of cycles verifying",
                    "readOnly": true
                  },
                  "complete": {
                    "type": "integer",
                    "description": "The number of cycles complete",
                    "readOnly": true
                  },
                  "blocked": {
                    "type": "integer",
                    "description": "The number of cycles blocked",
                    "readOnly": true
                  },
                  "cancelled": {
                    "type": "integer",
                    "description": "The number of cycles cancelled",
                    "readOnly": true
                  }
                }
              },
              "work_order": {
                "type": "object",
                "description": "Defines the properties for a unit",
                "additionalProperties": false,
                "required": [
                  "label",
                  "entity_id",
                  "entity_type",
                  "created",
                  "updated",
                  "work_order_type",
                  "location",
                  "cycles"
                ],
                "properties": {
                  "work_order_id": {
                    "type": "string",
                    "description": "The identifier for the unit",
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
                      "WOR"
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
                  "description": {
                    "type": "string",
                    "nullable": true,
                    "description": "Detailed description for the work order"
                  },
                  "work_order_type": {
                    "type": "string",
                    "description": "Type of work order",
                    "enum": [
                      "device"
                    ]
                  },
                  "due_date": {
                    "type": "string",
                    "format": "date-time",
                    "description": "End date"
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
                      },
                      "description": {
                        "type": "string",
                        "nullable": true,
                        "description": "A description for the status"
                      },
                      "order": {
                        "type": "number",
                        "description": "Order status appears when listing"
                      }
                    }
                  },
                  "project": {
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
                      "description": {
                        "type": "string",
                        "nullable": true,
                        "description": "Project description"
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
                                "type": [
                                  "string",
                                  "null"
                                ]
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
                                },
                                "description": {
                                  "type": "string",
                                  "nullable": true,
                                  "description": "A description for the status"
                                },
                                "order": {
                                  "type": "number",
                                  "description": "Order status appears when listing"
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
                                    "type": [
                                      "string",
                                      "null"
                                    ]
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
                                    },
                                    "description": {
                                      "type": "string",
                                      "nullable": true,
                                      "description": "A description for the status"
                                    },
                                    "order": {
                                      "type": "number",
                                      "description": "Order status appears when listing"
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
                                },
                                "description": {
                                  "type": "string",
                                  "nullable": true,
                                  "description": "A description for the status"
                                },
                                "order": {
                                  "type": "number",
                                  "description": "Order status appears when listing"
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
                            },
                            "description": {
                              "type": "string",
                              "nullable": true,
                              "description": "A description for the status"
                            },
                            "order": {
                              "type": "number",
                              "description": "Order status appears when listing"
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
                  "cycles": {
                    "type": "array",
                    "minimum": 1,
                    "items": {
                      "type": "object",
                      "additionalProperties": false,
                      "required": [
                        "needed",
                        "pending",
                        "in_progress",
                        "verifying",
                        "complete",
                        "blocked",
                        "cancelled",
                        "work_flow"
                      ],
                      "properties": {
                        "needed": {
                          "type": "integer",
                          "description": "The number of cycles needed",
                          "minimum": 1
                        },
                        "pending": {
                          "type": "integer",
                          "description": "The number of cycles pending",
                          "readOnly": true
                        },
                        "in_progress": {
                          "type": "integer",
                          "description": "The number of cycles pending",
                          "readOnly": true
                        },
                        "verifying": {
                          "type": "integer",
                          "description": "The number of cycles pending",
                          "readOnly": true
                        },
                        "complete": {
                          "type": "integer",
                          "description": "The number of cycles pending",
                          "readOnly": true
                        },
                        "blocked": {
                          "type": "integer",
                          "description": "The number of cycles pending",
                          "readOnly": true
                        },
                        "cancelled": {
                          "type": "integer",
                          "description": "The number of cycles pending",
                          "readOnly": true
                        },
                        "work_flow": {
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
                                "UNIT",
                                "PART",
                                "PGM",
                                "PRJ",
                                "CUS",
                                "CON"
                              ]
                            },
                            "triggered_by": {
                              "type": "array",
                              "items": {
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
                            },
                            "metadata": {
                              "type": "object",
                              "description": "Data for the resource as a key value pair",
                              "additionalProperties": {
                                "type": "string"
                              },
                              "propertyNames": {
                                "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
                              }
                            }
                          }
                        }
                      }
                    }
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
            "href": "https://api.nterprise.com/batchs"
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
            "href": "https://api.nterprise.com/batchs?offset=QVBrO2wm13iEyl&limit=100"
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

<h3 id="fetchallbatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for batchs|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallbatches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:batchs|[object]|false|none|none|
|»»» _links|object|false|none|none|
|»»»» self|object|false|none|none|
|»»»»» href|string(uri)|false|none|none|
|»»»» batch_id|string|false|read-only|The identifier for the batch|
|»»»» label|string|false|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|false|read-only|Date the entity was created|
|»»»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»»»» queue|object|false|none|Defines the properties for a location queue|
|»»»»» queue_id|string|false|none|The identifier for the queue|
|»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»» entity_type|string|true|none|none|
|»»»»» label|string|true|none|Label for the entity|
|»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»» location|object|true|none|Defines the properties for a part unit|
|»»»»»» location_id|string|false|read-only|The identifier for the location|
|»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»» entity_type|string|true|none|none|
|»»»»»» label|string|true|none|Label for the entity|
|»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»» location_type|string|true|none|The type of location|
|»»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»»» address|object|true|none|xNAL address for the location|
|»»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»»» locality|string|true|none|City / Town|
|»»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»»»» priority|integer|false|none|Priority level for queue|
|»»»»»» total_work_orders|object|false|read-only|none|
|»»»»»»» pending|integer|false|read-only|The number of cycles pending|
|»»»»»»» in_progress|integer|false|read-only|The number of cycles in progress|
|»»»»»»» verifying|integer|false|read-only|The number of cycles verifying|
|»»»»»»» complete|integer|false|read-only|The number of cycles complete|
|»»»»»»» blocked|integer|false|read-only|The number of cycles blocked|
|»»»»»»» cancelled|integer|false|read-only|The number of cycles cancelled|
|»»»»»» active_work_orders|number|false|read-only|Total of work orders in an active status|
|»»»»»» total_batches|integer|false|read-only|Number of batches assigned to the queue|
|»»»»»» is_active|boolean|true|read-only|Toggle if the batch has active cycles or batches|
|»»»»»» active_batches|number|true|read-only|Total of batches in the queue with active cycles|
|»»»»»» active_cycles|number|true|read-only|Total of all active cycles across all batches|
|»»»»» order|integer|false|none|Order to process the batch|
|»»»»» current_status|object|false|none|Defines the properties for a status|
|»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»» order|number|false|none|Order status appears when listing|
|»»»»» number_cycles|integer|false|none|The number of cycles for this batch|
|»»»»» cycles|object|false|read-only|none|
|»»»»»» pending|integer|false|read-only|The number of cycles pending|
|»»»»»» in_progress|integer|false|read-only|The number of cycles in progress|
|»»»»»» verifying|integer|false|read-only|The number of cycles verifying|
|»»»»»» complete|integer|false|read-only|The number of cycles complete|
|»»»»»» blocked|integer|false|read-only|The number of cycles blocked|
|»»»»»» cancelled|integer|false|read-only|The number of cycles cancelled|
|»»»»» work_order|object|false|none|Defines the properties for a unit|
|»»»»»» work_order_id|string|false|none|The identifier for the unit|
|»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»» entity_type|string|true|none|none|
|»»»»»» label|string|true|none|Label for the entity|
|»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»»»» current_location|object|false|none|Defines the properties for a part unit|
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
|»»»»»»» location|object|true|none|Defines the properties for a part unit|
|»»»»»»»» location_id|string|false|read-only|The identifier for the location|
|»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»» location_type|string|true|none|The type of location|
|»»»»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»»»»» address|object|true|none|xNAL address for the location|
|»»»»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»»»»» locality|string|true|none|City / Town|
|»»»»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»»»»»» description|string\|null|false|none|Detailed description for the work order|
|»»»»»»»» work_order_type|string|true|none|Type of work order|
|»»»»»»»» due_date|string(date-time)|false|none|End date|
|»»»»»»»» current_status|object|false|none|Defines the properties for a status|
|»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»»» project|object|false|none|Defines the properties for a project|
|»»»»»»»»» project_id|string|false|none|Unique identifier|
|»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»» description|string\|null|false|none|Project description|
|»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»» customer|object|true|none|Customer|
|»»»»»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»»»»» program|object|true|none|Defines the properties for a program|
|»»»»»»»»»» program_id|string|false|read-only|Unique identifier|
|»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»» label|string|false|none|Label for the entity|
|»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»»»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»»»»»»»» customer|object|true|none|Customer|
|»»»»»»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»»»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»»»»»»» cycles|[object]|true|none|none|
|»»»»»»»»»» needed|integer|true|none|The number of cycles needed|
|»»»»»»»»»» pending|integer|true|read-only|The number of cycles pending|
|»»»»»»»»»» in_progress|integer|true|read-only|The number of cycles pending|
|»»»»»»»»»» verifying|integer|true|read-only|The number of cycles pending|
|»»»»»»»»»» complete|integer|true|read-only|The number of cycles pending|
|»»»»»»»»»» blocked|integer|true|read-only|The number of cycles pending|
|»»»»»»»»»» cancelled|integer|true|read-only|The number of cycles pending|
|»»»»»»»»»» work_flow|object|true|none|Workflow|
|»»»»»»»»»»» work_flow_id|string|false|read-only|Customer identifier|
|»»»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»»»» schema_version|string|true|none|Version of the workflow schema used|
|»»»»»»»»»»» workflow_version|integer|false|read-only|Version number for the work flows (the number of times it has been changed|
|»»»»»»»»»»» applies_to|string|true|none|The entity type this work flow applies too|
|»»»»»»»»»»» triggered_by|[string]|false|none|none|
|»»»»»»»»»»» starts_at|string|true|none|Starting step|
|»»»»»»»»»»» steps|object|true|none|Steps for the workflow|
|»»»»»»»»»»» metadata|object|false|none|Data for the resource as a key value pair|
|»»»»»»»»»»»» **additionalProperties**|string|false|none|none|
|»»»»»»»»»»» meta|object|false|none|Data for the resource as a key value pair|
|»»»»»»»»»»»» **additionalProperties**|string|false|none|none|
|»»»»»»»»»»» _links|object|false|none|none|
|»»»»»»»»»»»» self|object|false|none|none|
|»»»»»»»»»»»»» href|string(uri)|false|none|none|
|»»»»»»»»»»»» next|object|false|none|none|
|»»»»»»»»»»»»» href|string(uri)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|QUE|
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
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|WOR|
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
|work_order_type|device|
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
|entity_type|WKF|
|schema_version|1.0|
|applies_to|UNIT|
|applies_to|PART|
|applies_to|PGM|
|applies_to|PRJ|
|applies_to|CUS|
|applies_to|CON|

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

## createBatch

<a id="opIdcreateBatch"></a>

`POST /batches`

*Create a batch*

Creates a new batch for a queue

> Body parameter

```json
{
  "type": "object",
  "required": [
    "queue",
    "work_order",
    "number_cycles"
  ],
  "properties": {
    "order": {
      "type": "integer",
      "description": "Order to process the batch",
      "minimum": 0
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
        },
        "description": {
          "type": "string",
          "nullable": true,
          "description": "A description for the status"
        },
        "order": {
          "type": "number",
          "description": "Order status appears when listing"
        }
      }
    },
    "work_order": {
      "type": "object",
      "required": [
        "work_order_id"
      ],
      "properties": {
        "work_order_id": {
          "type": "string",
          "description": "The identifier for the unit",
          "pattern": "^[0-9a-zA-Z-_]+$"
        }
      }
    },
    "queue": {
      "type": "object",
      "required": [
        "queue_id"
      ],
      "properties": {
        "queue_id": {
          "type": "string",
          "description": "The identifier for the queue",
          "pattern": "^[0-9a-zA-Z-_]+$"
        }
      }
    },
    "number_cycles": {
      "type": "integer",
      "description": "The number of cycles for this batch",
      "minimum": 1
    }
  }
}
```

<h3 id="createbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|body|integer|false|Order to process the batch|
|current_status|body|object|false|Defines the properties for a status|
|» status|body|string|true|A Custom label for the status|
|» category|body|string|true|The classifier for the statues|
|» description|body|string\|null|false|A description for the status|
|» order|body|number|false|Order status appears when listing|
|work_order|body|object|true|none|
|» work_order_id|body|string|true|The identifier for the unit|
|queue|body|object|true|none|
|» queue_id|body|string|true|The identifier for the queue|
|number_cycles|body|integer|true|The number of cycles for this batch|

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
  "properties": {
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "x-example": {
            "href": "https://api.nterprise.com/batchs/JwlLkLBBm2IVWG"
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
    "batch_id": {
      "description": "The identifier for the batch",
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
    "queue": {
      "type": "object",
      "description": "Defines the properties for a location queue",
      "additionalProperties": false,
      "required": [
        "label",
        "entity_id",
        "entity_type",
        "created",
        "updated",
        "location",
        "is_active",
        "active_batches",
        "active_cycles"
      ],
      "properties": {
        "queue_id": {
          "type": "string",
          "description": "The identifier for the queue",
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
            "QUE"
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
        "priority": {
          "type": "integer",
          "description": "Priority level for queue",
          "minimum": 0
        },
        "total_work_orders": {
          "type": "object",
          "readOnly": true,
          "additionalProperties": false,
          "properties": {
            "pending": {
              "type": "integer",
              "description": "The number of cycles pending",
              "readOnly": true
            },
            "in_progress": {
              "type": "integer",
              "description": "The number of cycles in progress",
              "readOnly": true
            },
            "verifying": {
              "type": "integer",
              "description": "The number of cycles verifying",
              "readOnly": true
            },
            "complete": {
              "type": "integer",
              "description": "The number of cycles complete",
              "readOnly": true
            },
            "blocked": {
              "type": "integer",
              "description": "The number of cycles blocked",
              "readOnly": true
            },
            "cancelled": {
              "type": "integer",
              "description": "The number of cycles cancelled",
              "readOnly": true
            }
          }
        },
        "active_work_orders": {
          "type": "number",
          "description": "Total of work orders in an active status",
          "readOnly": true
        },
        "total_batches": {
          "type": "integer",
          "description": "Number of batches assigned to the queue",
          "readOnly": true
        },
        "is_active": {
          "type": "boolean",
          "description": "Toggle if the batch has active cycles or batches",
          "readOnly": true
        },
        "active_batches": {
          "type": "number",
          "description": "Total of batches in the queue with active cycles",
          "readOnly": true
        },
        "active_cycles": {
          "type": "number",
          "description": "Total of all active cycles across all batches",
          "readOnly": true
        }
      }
    },
    "order": {
      "type": "integer",
      "description": "Order to process the batch",
      "minimum": 0
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
        },
        "description": {
          "type": "string",
          "nullable": true,
          "description": "A description for the status"
        },
        "order": {
          "type": "number",
          "description": "Order status appears when listing"
        }
      }
    },
    "number_cycles": {
      "type": "integer",
      "description": "The number of cycles for this batch",
      "minimum": 1
    },
    "cycles": {
      "type": "object",
      "readOnly": true,
      "additionalProperties": false,
      "properties": {
        "pending": {
          "type": "integer",
          "description": "The number of cycles pending",
          "readOnly": true
        },
        "in_progress": {
          "type": "integer",
          "description": "The number of cycles in progress",
          "readOnly": true
        },
        "verifying": {
          "type": "integer",
          "description": "The number of cycles verifying",
          "readOnly": true
        },
        "complete": {
          "type": "integer",
          "description": "The number of cycles complete",
          "readOnly": true
        },
        "blocked": {
          "type": "integer",
          "description": "The number of cycles blocked",
          "readOnly": true
        },
        "cancelled": {
          "type": "integer",
          "description": "The number of cycles cancelled",
          "readOnly": true
        }
      }
    },
    "work_order": {
      "type": "object",
      "description": "Defines the properties for a unit",
      "additionalProperties": false,
      "required": [
        "label",
        "entity_id",
        "entity_type",
        "created",
        "updated",
        "work_order_type",
        "location",
        "cycles"
      ],
      "properties": {
        "work_order_id": {
          "type": "string",
          "description": "The identifier for the unit",
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
            "WOR"
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
        "description": {
          "type": "string",
          "nullable": true,
          "description": "Detailed description for the work order"
        },
        "work_order_type": {
          "type": "string",
          "description": "Type of work order",
          "enum": [
            "device"
          ]
        },
        "due_date": {
          "type": "string",
          "format": "date-time",
          "description": "End date"
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
            },
            "description": {
              "type": "string",
              "nullable": true,
              "description": "A description for the status"
            },
            "order": {
              "type": "number",
              "description": "Order status appears when listing"
            }
          }
        },
        "project": {
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
            "description": {
              "type": "string",
              "nullable": true,
              "description": "Project description"
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
                      "type": [
                        "string",
                        "null"
                      ]
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
                      },
                      "description": {
                        "type": "string",
                        "nullable": true,
                        "description": "A description for the status"
                      },
                      "order": {
                        "type": "number",
                        "description": "Order status appears when listing"
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
                          "type": [
                            "string",
                            "null"
                          ]
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
                          },
                          "description": {
                            "type": "string",
                            "nullable": true,
                            "description": "A description for the status"
                          },
                          "order": {
                            "type": "number",
                            "description": "Order status appears when listing"
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
                      },
                      "description": {
                        "type": "string",
                        "nullable": true,
                        "description": "A description for the status"
                      },
                      "order": {
                        "type": "number",
                        "description": "Order status appears when listing"
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
                  },
                  "description": {
                    "type": "string",
                    "nullable": true,
                    "description": "A description for the status"
                  },
                  "order": {
                    "type": "number",
                    "description": "Order status appears when listing"
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
        "cycles": {
          "type": "array",
          "minimum": 1,
          "items": {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "needed",
              "pending",
              "in_progress",
              "verifying",
              "complete",
              "blocked",
              "cancelled",
              "work_flow"
            ],
            "properties": {
              "needed": {
                "type": "integer",
                "description": "The number of cycles needed",
                "minimum": 1
              },
              "pending": {
                "type": "integer",
                "description": "The number of cycles pending",
                "readOnly": true
              },
              "in_progress": {
                "type": "integer",
                "description": "The number of cycles pending",
                "readOnly": true
              },
              "verifying": {
                "type": "integer",
                "description": "The number of cycles pending",
                "readOnly": true
              },
              "complete": {
                "type": "integer",
                "description": "The number of cycles pending",
                "readOnly": true
              },
              "blocked": {
                "type": "integer",
                "description": "The number of cycles pending",
                "readOnly": true
              },
              "cancelled": {
                "type": "integer",
                "description": "The number of cycles pending",
                "readOnly": true
              },
              "work_flow": {
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
                      "UNIT",
                      "PART",
                      "PGM",
                      "PRJ",
                      "CUS",
                      "CON"
                    ]
                  },
                  "triggered_by": {
                    "type": "array",
                    "items": {
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
                  },
                  "metadata": {
                    "type": "object",
                    "description": "Data for the resource as a key value pair",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "propertyNames": {
                      "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
                    }
                  }
                }
              }
            }
          }
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
        }
      }
    }
  }
}
```

<h3 id="createbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A batch response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="createbatch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» batch_id|string|false|read-only|The identifier for the batch|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» queue|object|false|none|Defines the properties for a location queue|
|»»» queue_id|string|false|none|The identifier for the queue|
|»»» entity_id|string|true|read-only|Customer identifier|
|»»» entity_type|string|true|none|none|
|»»» label|string|true|none|Label for the entity|
|»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»» location|object|true|none|Defines the properties for a part unit|
|»»»» location_id|string|false|read-only|The identifier for the location|
|»»»» entity_id|string|true|read-only|Customer identifier|
|»»»» entity_type|string|true|none|none|
|»»»» label|string|true|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
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
|»»»» priority|integer|false|none|Priority level for queue|
|»»»» total_work_orders|object|false|read-only|none|
|»»»»» pending|integer|false|read-only|The number of cycles pending|
|»»»»» in_progress|integer|false|read-only|The number of cycles in progress|
|»»»»» verifying|integer|false|read-only|The number of cycles verifying|
|»»»»» complete|integer|false|read-only|The number of cycles complete|
|»»»»» blocked|integer|false|read-only|The number of cycles blocked|
|»»»»» cancelled|integer|false|read-only|The number of cycles cancelled|
|»»»» active_work_orders|number|false|read-only|Total of work orders in an active status|
|»»»» total_batches|integer|false|read-only|Number of batches assigned to the queue|
|»»»» is_active|boolean|true|read-only|Toggle if the batch has active cycles or batches|
|»»»» active_batches|number|true|read-only|Total of batches in the queue with active cycles|
|»»»» active_cycles|number|true|read-only|Total of all active cycles across all batches|
|»»» order|integer|false|none|Order to process the batch|
|»»» current_status|object|false|none|Defines the properties for a status|
|»»»» status|string|true|none|A Custom label for the status|
|»»»» category|string|true|none|The classifier for the statues|
|»»»» description|string\|null|false|none|A description for the status|
|»»»» order|number|false|none|Order status appears when listing|
|»»» number_cycles|integer|false|none|The number of cycles for this batch|
|»»» cycles|object|false|read-only|none|
|»»»» pending|integer|false|read-only|The number of cycles pending|
|»»»» in_progress|integer|false|read-only|The number of cycles in progress|
|»»»» verifying|integer|false|read-only|The number of cycles verifying|
|»»»» complete|integer|false|read-only|The number of cycles complete|
|»»»» blocked|integer|false|read-only|The number of cycles blocked|
|»»»» cancelled|integer|false|read-only|The number of cycles cancelled|
|»»» work_order|object|false|none|Defines the properties for a unit|
|»»»» work_order_id|string|false|none|The identifier for the unit|
|»»»» entity_id|string|true|read-only|Customer identifier|
|»»»» entity_type|string|true|none|none|
|»»»» label|string|true|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»» current_location|object|false|none|Defines the properties for a part unit|
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
|»»»»» location|object|true|none|Defines the properties for a part unit|
|»»»»»» location_id|string|false|read-only|The identifier for the location|
|»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»» entity_type|string|true|none|none|
|»»»»»» label|string|true|none|Label for the entity|
|»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»» location_type|string|true|none|The type of location|
|»»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»»» address|object|true|none|xNAL address for the location|
|»»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»»» locality|string|true|none|City / Town|
|»»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»»»» description|string\|null|false|none|Detailed description for the work order|
|»»»»»» work_order_type|string|true|none|Type of work order|
|»»»»»» due_date|string(date-time)|false|none|End date|
|»»»»»» current_status|object|false|none|Defines the properties for a status|
|»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»» project|object|false|none|Defines the properties for a project|
|»»»»»»» project_id|string|false|none|Unique identifier|
|»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»» entity_type|string|true|none|none|
|»»»»»»» description|string\|null|false|none|Project description|
|»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»» customer|object|true|none|Customer|
|»»»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»»» program|object|true|none|Defines the properties for a program|
|»»»»»»»» program_id|string|false|read-only|Unique identifier|
|»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»» label|string|false|none|Label for the entity|
|»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»»»»»» customer|object|true|none|Customer|
|»»»»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»»»»» cycles|[object]|true|none|none|
|»»»»»»»» needed|integer|true|none|The number of cycles needed|
|»»»»»»»» pending|integer|true|read-only|The number of cycles pending|
|»»»»»»»» in_progress|integer|true|read-only|The number of cycles pending|
|»»»»»»»» verifying|integer|true|read-only|The number of cycles pending|
|»»»»»»»» complete|integer|true|read-only|The number of cycles pending|
|»»»»»»»» blocked|integer|true|read-only|The number of cycles pending|
|»»»»»»»» cancelled|integer|true|read-only|The number of cycles pending|
|»»»»»»»» work_flow|object|true|none|Workflow|
|»»»»»»»»» work_flow_id|string|false|read-only|Customer identifier|
|»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»» schema_version|string|true|none|Version of the workflow schema used|
|»»»»»»»»» workflow_version|integer|false|read-only|Version number for the work flows (the number of times it has been changed|
|»»»»»»»»» applies_to|string|true|none|The entity type this work flow applies too|
|»»»»»»»»» triggered_by|[string]|false|none|none|
|»»»»»»»»» starts_at|string|true|none|Starting step|
|»»»»»»»»» steps|object|true|none|Steps for the workflow|
|»»»»»»»»» metadata|object|false|none|Data for the resource as a key value pair|
|»»»»»»»»»» **additionalProperties**|string|false|none|none|
|»»»»»»»»» meta|object|false|none|Data for the resource as a key value pair|
|»»»»»»»»»» **additionalProperties**|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|QUE|
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
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|WOR|
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
|work_order_type|device|
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
|entity_type|WKF|
|schema_version|1.0|
|applies_to|UNIT|
|applies_to|PART|
|applies_to|PGM|
|applies_to|PRJ|
|applies_to|CUS|
|applies_to|CON|

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

## fetchBatchById

<a id="opIdfetchBatchById"></a>

`GET /batches/{batch_id}`

*Fetches a batch by Id*

Fetch Batch

<h3 id="fetchbatchbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|string|true|Id of the batch|

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
            "href": "https://api.nterprise.com/batchs/JwlLkLBBm2IVWG"
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
    "batch_id": {
      "description": "The identifier for the batch",
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
    "queue": {
      "type": "object",
      "description": "Defines the properties for a location queue",
      "additionalProperties": false,
      "required": [
        "label",
        "entity_id",
        "entity_type",
        "created",
        "updated",
        "location",
        "is_active",
        "active_batches",
        "active_cycles"
      ],
      "properties": {
        "queue_id": {
          "type": "string",
          "description": "The identifier for the queue",
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
            "QUE"
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
        "priority": {
          "type": "integer",
          "description": "Priority level for queue",
          "minimum": 0
        },
        "total_work_orders": {
          "type": "object",
          "readOnly": true,
          "additionalProperties": false,
          "properties": {
            "pending": {
              "type": "integer",
              "description": "The number of cycles pending",
              "readOnly": true
            },
            "in_progress": {
              "type": "integer",
              "description": "The number of cycles in progress",
              "readOnly": true
            },
            "verifying": {
              "type": "integer",
              "description": "The number of cycles verifying",
              "readOnly": true
            },
            "complete": {
              "type": "integer",
              "description": "The number of cycles complete",
              "readOnly": true
            },
            "blocked": {
              "type": "integer",
              "description": "The number of cycles blocked",
              "readOnly": true
            },
            "cancelled": {
              "type": "integer",
              "description": "The number of cycles cancelled",
              "readOnly": true
            }
          }
        },
        "active_work_orders": {
          "type": "number",
          "description": "Total of work orders in an active status",
          "readOnly": true
        },
        "total_batches": {
          "type": "integer",
          "description": "Number of batches assigned to the queue",
          "readOnly": true
        },
        "is_active": {
          "type": "boolean",
          "description": "Toggle if the batch has active cycles or batches",
          "readOnly": true
        },
        "active_batches": {
          "type": "number",
          "description": "Total of batches in the queue with active cycles",
          "readOnly": true
        },
        "active_cycles": {
          "type": "number",
          "description": "Total of all active cycles across all batches",
          "readOnly": true
        }
      }
    },
    "order": {
      "type": "integer",
      "description": "Order to process the batch",
      "minimum": 0
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
        },
        "description": {
          "type": "string",
          "nullable": true,
          "description": "A description for the status"
        },
        "order": {
          "type": "number",
          "description": "Order status appears when listing"
        }
      }
    },
    "number_cycles": {
      "type": "integer",
      "description": "The number of cycles for this batch",
      "minimum": 1
    },
    "cycles": {
      "type": "object",
      "readOnly": true,
      "additionalProperties": false,
      "properties": {
        "pending": {
          "type": "integer",
          "description": "The number of cycles pending",
          "readOnly": true
        },
        "in_progress": {
          "type": "integer",
          "description": "The number of cycles in progress",
          "readOnly": true
        },
        "verifying": {
          "type": "integer",
          "description": "The number of cycles verifying",
          "readOnly": true
        },
        "complete": {
          "type": "integer",
          "description": "The number of cycles complete",
          "readOnly": true
        },
        "blocked": {
          "type": "integer",
          "description": "The number of cycles blocked",
          "readOnly": true
        },
        "cancelled": {
          "type": "integer",
          "description": "The number of cycles cancelled",
          "readOnly": true
        }
      }
    },
    "work_order": {
      "type": "object",
      "description": "Defines the properties for a unit",
      "additionalProperties": false,
      "required": [
        "label",
        "entity_id",
        "entity_type",
        "created",
        "updated",
        "work_order_type",
        "location",
        "cycles"
      ],
      "properties": {
        "work_order_id": {
          "type": "string",
          "description": "The identifier for the unit",
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
            "WOR"
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
        "description": {
          "type": "string",
          "nullable": true,
          "description": "Detailed description for the work order"
        },
        "work_order_type": {
          "type": "string",
          "description": "Type of work order",
          "enum": [
            "device"
          ]
        },
        "due_date": {
          "type": "string",
          "format": "date-time",
          "description": "End date"
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
            },
            "description": {
              "type": "string",
              "nullable": true,
              "description": "A description for the status"
            },
            "order": {
              "type": "number",
              "description": "Order status appears when listing"
            }
          }
        },
        "project": {
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
            "description": {
              "type": "string",
              "nullable": true,
              "description": "Project description"
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
                      "type": [
                        "string",
                        "null"
                      ]
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
                      },
                      "description": {
                        "type": "string",
                        "nullable": true,
                        "description": "A description for the status"
                      },
                      "order": {
                        "type": "number",
                        "description": "Order status appears when listing"
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
                          "type": [
                            "string",
                            "null"
                          ]
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
                          },
                          "description": {
                            "type": "string",
                            "nullable": true,
                            "description": "A description for the status"
                          },
                          "order": {
                            "type": "number",
                            "description": "Order status appears when listing"
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
                      },
                      "description": {
                        "type": "string",
                        "nullable": true,
                        "description": "A description for the status"
                      },
                      "order": {
                        "type": "number",
                        "description": "Order status appears when listing"
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
                  },
                  "description": {
                    "type": "string",
                    "nullable": true,
                    "description": "A description for the status"
                  },
                  "order": {
                    "type": "number",
                    "description": "Order status appears when listing"
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
        "cycles": {
          "type": "array",
          "minimum": 1,
          "items": {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "needed",
              "pending",
              "in_progress",
              "verifying",
              "complete",
              "blocked",
              "cancelled",
              "work_flow"
            ],
            "properties": {
              "needed": {
                "type": "integer",
                "description": "The number of cycles needed",
                "minimum": 1
              },
              "pending": {
                "type": "integer",
                "description": "The number of cycles pending",
                "readOnly": true
              },
              "in_progress": {
                "type": "integer",
                "description": "The number of cycles pending",
                "readOnly": true
              },
              "verifying": {
                "type": "integer",
                "description": "The number of cycles pending",
                "readOnly": true
              },
              "complete": {
                "type": "integer",
                "description": "The number of cycles pending",
                "readOnly": true
              },
              "blocked": {
                "type": "integer",
                "description": "The number of cycles pending",
                "readOnly": true
              },
              "cancelled": {
                "type": "integer",
                "description": "The number of cycles pending",
                "readOnly": true
              },
              "work_flow": {
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
                      "UNIT",
                      "PART",
                      "PGM",
                      "PRJ",
                      "CUS",
                      "CON"
                    ]
                  },
                  "triggered_by": {
                    "type": "array",
                    "items": {
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
                  },
                  "metadata": {
                    "type": "object",
                    "description": "Data for the resource as a key value pair",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "propertyNames": {
                      "pattern": "^[A-Za-z][A-Za-z0-9_]*$"
                    }
                  }
                }
              }
            }
          }
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
        }
      }
    }
  }
}
```

<h3 id="fetchbatchbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A batch response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchbatchbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _links|object|false|none|none|
|»» self|object|false|none|none|
|»»» href|string(uri)|false|none|none|
|»» batch_id|string|false|read-only|The identifier for the batch|
|»» label|string|false|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|false|read-only|Date the entity was created|
|»» updated|string(date-time)|false|read-only|Last date the entity was updated|
|»» queue|object|false|none|Defines the properties for a location queue|
|»»» queue_id|string|false|none|The identifier for the queue|
|»»» entity_id|string|true|read-only|Customer identifier|
|»»» entity_type|string|true|none|none|
|»»» label|string|true|none|Label for the entity|
|»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»» location|object|true|none|Defines the properties for a part unit|
|»»»» location_id|string|false|read-only|The identifier for the location|
|»»»» entity_id|string|true|read-only|Customer identifier|
|»»»» entity_type|string|true|none|none|
|»»»» label|string|true|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
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
|»»»» priority|integer|false|none|Priority level for queue|
|»»»» total_work_orders|object|false|read-only|none|
|»»»»» pending|integer|false|read-only|The number of cycles pending|
|»»»»» in_progress|integer|false|read-only|The number of cycles in progress|
|»»»»» verifying|integer|false|read-only|The number of cycles verifying|
|»»»»» complete|integer|false|read-only|The number of cycles complete|
|»»»»» blocked|integer|false|read-only|The number of cycles blocked|
|»»»»» cancelled|integer|false|read-only|The number of cycles cancelled|
|»»»» active_work_orders|number|false|read-only|Total of work orders in an active status|
|»»»» total_batches|integer|false|read-only|Number of batches assigned to the queue|
|»»»» is_active|boolean|true|read-only|Toggle if the batch has active cycles or batches|
|»»»» active_batches|number|true|read-only|Total of batches in the queue with active cycles|
|»»»» active_cycles|number|true|read-only|Total of all active cycles across all batches|
|»»» order|integer|false|none|Order to process the batch|
|»»» current_status|object|false|none|Defines the properties for a status|
|»»»» status|string|true|none|A Custom label for the status|
|»»»» category|string|true|none|The classifier for the statues|
|»»»» description|string\|null|false|none|A description for the status|
|»»»» order|number|false|none|Order status appears when listing|
|»»» number_cycles|integer|false|none|The number of cycles for this batch|
|»»» cycles|object|false|read-only|none|
|»»»» pending|integer|false|read-only|The number of cycles pending|
|»»»» in_progress|integer|false|read-only|The number of cycles in progress|
|»»»» verifying|integer|false|read-only|The number of cycles verifying|
|»»»» complete|integer|false|read-only|The number of cycles complete|
|»»»» blocked|integer|false|read-only|The number of cycles blocked|
|»»»» cancelled|integer|false|read-only|The number of cycles cancelled|
|»»» work_order|object|false|none|Defines the properties for a unit|
|»»»» work_order_id|string|false|none|The identifier for the unit|
|»»»» entity_id|string|true|read-only|Customer identifier|
|»»»» entity_type|string|true|none|none|
|»»»» label|string|true|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»» current_location|object|false|none|Defines the properties for a part unit|
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
|»»»»» location|object|true|none|Defines the properties for a part unit|
|»»»»»» location_id|string|false|read-only|The identifier for the location|
|»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»» entity_type|string|true|none|none|
|»»»»»» label|string|true|none|Label for the entity|
|»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»» location_type|string|true|none|The type of location|
|»»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»»» address|object|true|none|xNAL address for the location|
|»»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»»» locality|string|true|none|City / Town|
|»»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»»»» description|string\|null|false|none|Detailed description for the work order|
|»»»»»» work_order_type|string|true|none|Type of work order|
|»»»»»» due_date|string(date-time)|false|none|End date|
|»»»»»» current_status|object|false|none|Defines the properties for a status|
|»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»» project|object|false|none|Defines the properties for a project|
|»»»»»»» project_id|string|false|none|Unique identifier|
|»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»» entity_type|string|true|none|none|
|»»»»»»» description|string\|null|false|none|Project description|
|»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»» customer|object|true|none|Customer|
|»»»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»»» program|object|true|none|Defines the properties for a program|
|»»»»»»»» program_id|string|false|read-only|Unique identifier|
|»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»» label|string|false|none|Label for the entity|
|»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»»»»»» customer|object|true|none|Customer|
|»»»»»»»»» customer_id|string|false|read-only|Customer identifier|
|»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»» external_platform|object|false|none|External Identifiers for the customer|
|»»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»»»»» cycles|[object]|true|none|none|
|»»»»»»»» needed|integer|true|none|The number of cycles needed|
|»»»»»»»» pending|integer|true|read-only|The number of cycles pending|
|»»»»»»»» in_progress|integer|true|read-only|The number of cycles pending|
|»»»»»»»» verifying|integer|true|read-only|The number of cycles pending|
|»»»»»»»» complete|integer|true|read-only|The number of cycles pending|
|»»»»»»»» blocked|integer|true|read-only|The number of cycles pending|
|»»»»»»»» cancelled|integer|true|read-only|The number of cycles pending|
|»»»»»»»» work_flow|object|true|none|Workflow|
|»»»»»»»»» work_flow_id|string|false|read-only|Customer identifier|
|»»»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»»»» entity_type|string|true|none|none|
|»»»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»»»» schema_version|string|true|none|Version of the workflow schema used|
|»»»»»»»»» workflow_version|integer|false|read-only|Version number for the work flows (the number of times it has been changed|
|»»»»»»»»» applies_to|string|true|none|The entity type this work flow applies too|
|»»»»»»»»» triggered_by|[string]|false|none|none|
|»»»»»»»»» starts_at|string|true|none|Starting step|
|»»»»»»»»» steps|object|true|none|Steps for the workflow|
|»»»»»»»»» metadata|object|false|none|Data for the resource as a key value pair|
|»»»»»»»»»» **additionalProperties**|string|false|none|none|
|»»»»»»»»» meta|object|false|none|Data for the resource as a key value pair|
|»»»»»»»»»» **additionalProperties**|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|QUE|
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
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|WOR|
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
|work_order_type|device|
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
|entity_type|WKF|
|schema_version|1.0|
|applies_to|UNIT|
|applies_to|PART|
|applies_to|PGM|
|applies_to|PRJ|
|applies_to|CUS|
|applies_to|CON|

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

## deleteBatch

<a id="opIddeleteBatch"></a>

`DELETE /batches/{batch_id}`

*Deletes a batch*

This will delete the batch

<h3 id="deletebatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|string|true|Id of the batch|

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

<h3 id="deletebatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Batch deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="deletebatch-responseschema">Response Schema</h3>

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

# Schemas

<h2 id="tocSbatch">Batch</h2>

<a id="schemabatch"></a>

```yaml
type: object
description: Defines the properties for a work order batch
additionalProperties: false
required:
  - queue
  - entity_id
  - entity_type
  - created
  - updated
  - number_cycles
  - cycles
  - work_order
properties:
  batch_id:
    description: The identifier for the batch
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
      - BAT
  label:
    type: string
    description: Label for the entity
  slug:
    type: string
    description: Slug for the entity (Auto-generated from the label)
    readOnly: true
    deprecated: true
    pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$'
  current_status:
    type: object
    description: Defines the properties for a status
    additionalProperties: false
    required:
      - status
      - category
    properties:
      status:
        type: string
        description: A Custom label for the status
        pattern: '^[A-Za-z][0-9a-zA-Z-_ ]+$'
      category:
        type: string
        description: The classifier for the statues
        enum:
          - PENDING
          - IN_PROGRESS
          - VERIFYING
          - COMPLETE
          - CANCELLED
          - BLOCKED
      description:
        type: string
        nullable: true
        description: A description for the status
      order:
        type: number
        description: Order status appears when listing
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
  queue:
    type: object
    description: Defines the properties for a location queue
    additionalProperties: false
    required:
      - label
      - entity_id
      - entity_type
      - created
      - updated
      - location
      - is_active
      - active_batches
      - active_cycles
    properties:
      queue_id:
        type: string
        description: The identifier for the queue
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
          - QUE
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
      priority:
        type: integer
        description: Priority level for queue
        minimum: 0
      total_work_orders:
        type: object
        readOnly: true
        additionalProperties: false
        properties:
          pending:
            type: integer
            description: The number of cycles pending
            readOnly: true
          in_progress:
            type: integer
            description: The number of cycles in progress
            readOnly: true
          verifying:
            type: integer
            description: The number of cycles verifying
            readOnly: true
          complete:
            type: integer
            description: The number of cycles complete
            readOnly: true
          blocked:
            type: integer
            description: The number of cycles blocked
            readOnly: true
          cancelled:
            type: integer
            description: The number of cycles cancelled
            readOnly: true
      active_work_orders:
        type: number
        description: Total of work orders in an active status
        readOnly: true
      total_batches:
        type: integer
        description: Number of batches assigned to the queue
        readOnly: true
      is_active:
        type: boolean
        description: Toggle if the batch has active cycles or batches
        readOnly: true
      active_batches:
        type: number
        description: Total of batches in the queue with active cycles
        readOnly: true
      active_cycles:
        type: number
        description: Total of all active cycles across all batches
        readOnly: true
  order:
    type: integer
    description: Order to process the batch
    minimum: 0
  number_cycles:
    type: integer
    description: The number of cycles for this batch
    minimum: 1
  cycles:
    type: object
    readOnly: true
    additionalProperties: false
    properties:
      pending:
        type: integer
        description: The number of cycles pending
        readOnly: true
      in_progress:
        type: integer
        description: The number of cycles in progress
        readOnly: true
      verifying:
        type: integer
        description: The number of cycles verifying
        readOnly: true
      complete:
        type: integer
        description: The number of cycles complete
        readOnly: true
      blocked:
        type: integer
        description: The number of cycles blocked
        readOnly: true
      cancelled:
        type: integer
        description: The number of cycles cancelled
        readOnly: true
  work_order:
    type: object
    description: Defines the properties for a unit
    additionalProperties: false
    required:
      - label
      - entity_id
      - entity_type
      - created
      - updated
      - work_order_type
      - location
      - cycles
    properties:
      work_order_id:
        type: string
        description: The identifier for the unit
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
          - WOR
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
      start_date:
        type: string
        nullable: true
        format: date-time
        description: Start date
      end_date:
        type: string
        nullable: true
        format: date-time
        description: End date
      current_location:
        deprecated: true
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
      description:
        type: string
        nullable: true
        description: Detailed description for the work order
      work_order_type:
        type: string
        description: Type of work order
        enum:
          - device
      due_date:
        type: string
        format: date-time
        description: End date
      current_status:
        type: object
        description: Defines the properties for a status
        additionalProperties: false
        required:
          - status
          - category
        properties:
          status:
            type: string
            description: A Custom label for the status
            pattern: '^[A-Za-z][0-9a-zA-Z-_ ]+$'
          category:
            type: string
            description: The classifier for the statues
            enum:
              - PENDING
              - IN_PROGRESS
              - VERIFYING
              - COMPLETE
              - CANCELLED
              - BLOCKED
          description:
            type: string
            nullable: true
            description: A description for the status
          order:
            type: number
            description: Order status appears when listing
      project:
        type: object
        description: Defines the properties for a project
        additionalProperties: false
        required:
          - label
          - entity_id
          - entity_type
          - created
          - updated
          - customer
          - program
          - allowed_statuses
        properties:
          project_id:
            type: string
            description: Unique identifier
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
              - PRJ
          description:
            type: string
            nullable: true
            description: Project description
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
          customer:
            type: object
            description: Customer
            additionalProperties: false
            required:
              - label
              - entity_id
              - entity_type
              - created
              - updated
              - allowed_statuses
            properties:
              customer_id:
                description: Customer identifier
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
                  - CUS
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
              external_platform:
                type: object
                description: External Identifiers for the customer
                deprecated: true
                x-patternProperties: &ref_0
                  '^[A-Za-z][A-Za-z0-9_]*$':
                    type:
                      - string
                      - 'null'
              allowed_statuses:
                type: array
                description: List of allowed statuses
                uniqueItems: true
                items:
                  type: object
                  description: Defines the properties for a status
                  additionalProperties: false
                  required:
                    - status
                    - category
                  properties:
                    status:
                      type: string
                      description: A Custom label for the status
                      pattern: '^[A-Za-z][0-9a-zA-Z-_ ]+$'
                    category:
                      type: string
                      description: The classifier for the statues
                      enum:
                        - PENDING
                        - IN_PROGRESS
                        - VERIFYING
                        - COMPLETE
                        - CANCELLED
                        - BLOCKED
                    description:
                      type: string
                      nullable: true
                      description: A description for the status
                    order:
                      type: number
                      description: Order status appears when listing
              total_programs:
                type: number
                description: Total programs under the customer
              total_projects:
                type: number
                description: Total projects under the customer
          program:
            type: object
            description: Defines the properties for a program
            additionalProperties: false
            required:
              - entity_id
              - entity_type
              - created
              - updated
              - customer
              - allowed_statuses
            properties:
              program_id:
                description: Unique identifier
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
                  - PGM
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
              start_date:
                type: string
                nullable: true
                format: date-time
                description: Start date
              end_date:
                type: string
                nullable: true
                format: date-time
                description: End date
              customer:
                type: object
                description: Customer
                additionalProperties: false
                required:
                  - label
                  - entity_id
                  - entity_type
                  - created
                  - updated
                  - allowed_statuses
                properties:
                  customer_id:
                    description: Customer identifier
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
                      - CUS
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
                  external_platform:
                    type: object
                    description: External Identifiers for the customer
                    deprecated: true
                    x-patternProperties: *ref_0
                  allowed_statuses:
                    type: array
                    description: List of allowed statuses
                    uniqueItems: true
                    items:
                      type: object
                      description: Defines the properties for a status
                      additionalProperties: false
                      required:
                        - status
                        - category
                      properties:
                        status:
                          type: string
                          description: A Custom label for the status
                          pattern: '^[A-Za-z][0-9a-zA-Z-_ ]+$'
                        category:
                          type: string
                          description: The classifier for the statues
                          enum:
                            - PENDING
                            - IN_PROGRESS
                            - VERIFYING
                            - COMPLETE
                            - CANCELLED
                            - BLOCKED
                        description:
                          type: string
                          nullable: true
                          description: A description for the status
                        order:
                          type: number
                          description: Order status appears when listing
                  total_programs:
                    type: number
                    description: Total programs under the customer
                  total_projects:
                    type: number
                    description: Total projects under the customer
              allowed_statuses:
                type: array
                description: List of allowed statuses
                uniqueItems: true
                items:
                  type: object
                  description: Defines the properties for a status
                  additionalProperties: false
                  required:
                    - status
                    - category
                  properties:
                    status:
                      type: string
                      description: A Custom label for the status
                      pattern: '^[A-Za-z][0-9a-zA-Z-_ ]+$'
                    category:
                      type: string
                      description: The classifier for the statues
                      enum:
                        - PENDING
                        - IN_PROGRESS
                        - VERIFYING
                        - COMPLETE
                        - CANCELLED
                        - BLOCKED
                    description:
                      type: string
                      nullable: true
                      description: A description for the status
                    order:
                      type: number
                      description: Order status appears when listing
          allowed_statuses:
            type: array
            description: List of allowed statuses
            uniqueItems: true
            items:
              type: object
              description: Defines the properties for a status
              additionalProperties: false
              required:
                - status
                - category
              properties:
                status:
                  type: string
                  description: A Custom label for the status
                  pattern: '^[A-Za-z][0-9a-zA-Z-_ ]+$'
                category:
                  type: string
                  description: The classifier for the statues
                  enum:
                    - PENDING
                    - IN_PROGRESS
                    - VERIFYING
                    - COMPLETE
                    - CANCELLED
                    - BLOCKED
                description:
                  type: string
                  nullable: true
                  description: A description for the status
                order:
                  type: number
                  description: Order status appears when listing
          start_date:
            type: string
            nullable: true
            format: date-time
            description: Start date
          end_date:
            type: string
            nullable: true
            format: date-time
            description: End date
        allOf:
          - type: object
            description: Common Properties to all entities
            required:
              - label
            properties:
              entity_id:
                type: string
                description: Customer identifier
                readOnly: true
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
      cycles:
        type: array
        minimum: 1
        items:
          type: object
          additionalProperties: false
          required:
            - needed
            - pending
            - in_progress
            - verifying
            - complete
            - blocked
            - cancelled
            - work_flow
          properties:
            needed:
              type: integer
              description: The number of cycles needed
              minimum: 1
            pending:
              type: integer
              description: The number of cycles pending
              readOnly: true
            in_progress:
              type: integer
              description: The number of cycles pending
              readOnly: true
            verifying:
              type: integer
              description: The number of cycles pending
              readOnly: true
            complete:
              type: integer
              description: The number of cycles pending
              readOnly: true
            blocked:
              type: integer
              description: The number of cycles pending
              readOnly: true
            cancelled:
              type: integer
              description: The number of cycles pending
              readOnly: true
            work_flow:
              type: object
              description: Workflow
              additionalProperties: false
              required:
                - label
                - entity_id
                - entity_type
                - created
                - updated
                - steps
                - starts_at
                - applies_to
                - schema_version
              properties:
                work_flow_id:
                  type: string
                  description: Customer identifier
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
                    - WKF
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
                schema_version:
                  type: string
                  description: Version of the workflow schema used
                  enum:
                    - '1.0'
                workflow_version:
                  type: integer
                  description: >-
                    Version number for the work flows (the number of times it
                    has been changed
                  readOnly: true
                applies_to:
                  type: string
                  description: The entity type this work flow applies too
                  enum:
                    - UNIT
                    - PART
                    - PGM
                    - PRJ
                    - CUS
                    - CON
                triggered_by:
                  type: array
                  items:
                    type: string
                    description: Possible entity events
                    enum:
                      - CON.attached
                      - CON.created
                      - CON.deleted
                      - CON.detached
                      - CON.removed
                      - CON.updated
                      - CUS.attached
                      - CUS.created
                      - CUS.deleted
                      - CUS.detached
                      - CUS.removed
                      - CUS.updated
                      - LOC.attached
                      - LOC.created
                      - LOC.deleted
                      - LOC.detached
                      - LOC.removed
                      - LOC.updated
                      - NOTE.attached
                      - NOTE.created
                      - NOTE.deleted
                      - NOTE.detached
                      - NOTE.removed
                      - NOTE.updated
                      - PART.attached
                      - PART.created
                      - PART.deleted
                      - PART.detached
                      - PART.removed
                      - PART.updated
                      - PGM.attached
                      - PGM.created
                      - PGM.deleted
                      - PGM.detached
                      - PGM.removed
                      - PGM.updated
                      - PRO.attached
                      - PRO.created
                      - PRO.deleted
                      - PRO.detached
                      - PRO.removed
                      - PRO.updated
                      - RES.attached
                      - RES.created
                      - RES.deleted
                      - RES.detached
                      - RES.removed
                      - RES.updated
                      - UNIT.attached
                      - UNIT.created
                      - UNIT.deleted
                      - UNIT.detached
                      - UNIT.removed
                      - UNIT.updated
                      - USER.attached
                      - USER.created
                      - USER.deleted
                      - USER.detached
                      - USER.removed
                      - USER.updated
                      - WKF.attached
                      - WKF.created
                      - WKF.deleted
                      - WKF.detached
                      - WKF.removed
                      - WKF.updated
                      - WOR.attached
                      - WOR.created
                      - WOR.deleted
                      - WOR.detached
                      - WOR.removed
                      - WOR.updated
                starts_at:
                  type: string
                  description: Starting step
                steps:
                  type: object
                  description: Steps for the workflow
                  uniqueItems: true
                  additionalProperties: true
                  x-patternProperties:
                    '^[A-Za-z][A-Za-z0-9_]*$':
                      anyOf:
                        - $schema: 'http://json-schema.org/draft-07/schema#'
                          $id: >-
                            https://docs.nterprise.com/schemas/niagara/workFlow/steps/function/allocateUnitsToProject.json
                          type: object
                          description: >-
                            Require the user confirm an action. This is normally
                            used when Niagara cannot automatically detect that a
                            task or action has been performed.
                          properties:
                            label: &ref_6
                              type: string
                              description: Label for the entity
                            options:
                              type: object
                              required:
                                - function
                                - payload
                              properties:
                                function:
                                  type: string
                                  enum:
                                    - allocate-units-to-project
                                payload:
                                  type: object
                                  required:
                                    - part_id
                                    - project_id
                                    - qty
                                  properties:
                                    part_id:
                                      type: string
                                      description: Part ID of the to assign
                                    program_id:
                                      type: string
                                      description: Program ID of the to assign
                                    qty:
                                      type: number
                                      minimum: 1
                                      description: Number of units to assign to the project
                                    allow_scarcity:
                                      type: boolean
                                      description: >-
                                        Allow the workflow to continue even if
                                        there are not enough units
                                    force:
                                      type: boolean
                                      description: >-
                                        Assign the units even if the project
                                        already has units allocated
                                    status:
                                      type: string
                                      description: >-
                                        Only assign units which are in this
                                        status
                        - $schema: 'http://json-schema.org/draft-07/schema#'
                          $id: >-
                            https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/followPDFInstructions.json
                          type: object
                          description: >-
                            Display a link or modal to a user which contains
                            instructions from a PDF
                          required:
                            - label
                            - payload
                          properties:
                            label: &ref_2
                              type: string
                              description: Label for the step
                            options:
                              type: object
                              required:
                                - component
                                - payload
                              properties:
                                component:
                                  enum:
                                    - follow-pds-instructions
                                payload:
                                  type: object
                                  required:
                                    - attachment_id
                                  properties:
                                    attachment_id:
                                      type: string
                                      description: UUID for the attachment
                                      format: uuid
                          allOf:
                            - &ref_3
                              $schema: 'http://json-schema.org/draft-07/schema#'
                              $id: >-
                                https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepUser.json
                              type: object
                              description: A step which requires a user to complete
                              required:
                                - type
                                - options
                              properties:
                                type: &ref_1
                                  type: string
                                  description: Type of workflow step
                                  enum:
                                    - load
                                    - choice
                                    - function
                                    - machine
                                    - pass
                                    - fail
                                    - success
                                    - user
                                    - wait
                                options:
                                  type: object
                                  required:
                                    - component
                                    - payload
                                  properties:
                                    component:
                                      type: string
                                      description: Name of the function to invoke
                                    payload:
                                      type: object
                              allOf:
                                - &ref_7
                                  $schema: 'http://json-schema.org/draft-07/schema#'
                                  $id: >-
                                    https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepCommon.json
                                  type: object
                                  required:
                                    - type
                                    - label
                                    - goto
                                  properties:
                                    type: *ref_1
                                    label: *ref_2
                                    goto:
                                      type: string
                                      description: Step to move to
                                      pattern: '^[a-z][a-z-]+[a-z]$'
                                    goto-fail:
                                      type: string
                                      description: >-
                                        Step to transition too if this step
                                        cannot be completed
                                      pattern: '^[a-z][a-z-]+[a-z]$'
                                    onComplete: &ref_4
                                      $schema: 'http://json-schema.org/draft-07/schema#'
                                      $id: >-
                                        https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepActions.json
                                      type: object
                                      required:
                                        - retry
                                        - finally
                                      properties:
                                        actions:
                                          type: array
                                          description: Actions to take on failure
                                          maxItems: 10
                                          items:
                                            type: object
                        - $schema: 'http://json-schema.org/draft-07/schema#'
                          $id: >-
                            https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/manualDataEntry.json
                          type: object
                          description: >-
                            Ask the user to manually enter (or confirm) data for
                            an entity
                          properties:
                            label: *ref_2
                            options:
                              type: object
                              required:
                                - component
                                - payload
                              properties:
                                component:
                                  enum:
                                    - manual-data-entry
                                payload:
                                  type: object
                                  required:
                                    - fields
                                  properties:
                                    fields:
                                      type: array
                                      description: Configuration for each field
                                      items:
                                        type: object
                                        required:
                                          - input_type
                                          - label
                                          - required
                                          - entity_field
                                        properties:
                                          input_type:
                                            type: string
                                            description: The type of input field to display
                                            enum:
                                              - textbox
                                              - input
                                          label:
                                            type: string
                                            description: Label to display for the field
                                          required:
                                            type: boolean
                                            description: >-
                                              Display the field as required input.
                                              Note: this is a helper function. It
                                              singles that the user is required to
                                              input data at this step. If the field is
                                              required on the entity, the user will be
                                              presented with a validation message
                                          entity_field:
                                            type: string
                                            description: >-
                                              JSON Path to the field on the entity. If
                                              the path does not start with '$' then
                                              the entity on the context is assumed.
                                              Otherwise the data will be set on the
                                              context path
                          allOf:
                            - *ref_3
                        - $schema: 'http://json-schema.org/draft-07/schema#'
                          $id: >-
                            https://docs.nterprise.com/schemas/niagara/workFlow/steps/user/taskList.json
                          type: object
                          description: Ask the user to follow a list and check off boxes
                          properties:
                            label: *ref_2
                            options:
                              type: object
                              required:
                                - component
                                - payload
                              properties:
                                component:
                                  enum:
                                    - task-list
                                payload:
                                  type: object
                                  required:
                                    - items
                                  properties:
                                    is_qc:
                                      type: boolean
                                      description: >-
                                        Flags this list as a QC task list. This
                                        means that a different user can close
                                        the task to one previously on the
                                        context
                                    items:
                                      type: array
                                      description: Configuration for each task list item
                                      items:
                                        type: object
                                        required:
                                          - label
                                          - evaluated
                                          - na_option
                                        properties:
                                          label:
                                            type: string
                                            description: Label to display for the field
                                          slug:
                                            type: string
                                            description: >-
                                              Slug for the item (Auto-generated from
                                              the label)
                                            readOnly: true
                                            pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$'
                                          help:
                                            type: string
                                            description: >-
                                              Message describing what is needed to be
                                              checked
                                          evaluated:
                                            type: boolean
                                            description: >-
                                              When set to true, this will fail the
                                              step if the value for the item is false
                                              or N/A
                                          na_field:
                                            type: boolean
                                            description: >-
                                              Allow the user to select the N/A option
                                              when checking off the list
                          allOf:
                            - *ref_3
                        - $schema: 'http://json-schema.org/draft-07/schema#'
                          $id: >-
                            https://docs.nterprise.com/schemas/niagara/workFlow/steps/machine/aceIos.json
                          type: object
                          description: >-
                            Run the ACE-IOS application to provision iOS devices
                            or 
                          properties:
                            type:
                              type: string
                              enum:
                                - machine
                            label: *ref_2
                            options:
                              type: object
                              required:
                                - application
                                - configuration
                              properties:
                                configuration:
                                  type: object
                                  description: ACE Configuration options
                                  properties:
                                    pairing_cert:
                                      type: string
                                      description: >-
                                        Contents of a *.crt file exported from
                                        Apple Configurator or MDM
                                      pattern: >-
                                        ^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$
                                    pairing_key:
                                      type: string
                                      description: >-
                                        Contents of a *.der file exported from
                                        Apple Configurator or MDM
                                      pattern: >-
                                        ^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$
                                    restore_device:
                                      type: boolean
                                      description: Restore device to factory defaults
                                    automated_enrollment:
                                      type: boolean
                                      description: Automatically enroll the device to MDM
                                    mdm:
                                      type: object
                                      description: The settings for the Customers MDM
                                      properties:
                                        vendor:
                                          type: string
                                          description: >-
                                            MDM vendor. Currently, supported values
                                            are AirWatch, JAMF, and Meraki.
                                          enum:
                                            - AirWatch
                                            - JAMF
                                            - Meraki
                                        console_url:
                                          type: string
                                          format: uri
                                          description: Base URL for HTTP requests
                                        user:
                                          type: string
                                          description: MDM User name
                                        password:
                                          type: string
                                          description: MDM password
                                        tenant_code:
                                          type: string
                                          description: MDM authentication key
                                        set_asset_tag:
                                          type: string
                                          description: >-
                                            Sets the devices Asset tag based on a
                                            field from the unit
                                    field_mappings:
                                      type: array
                                      description: List of fields to map to the device
                                      items:
                                        type: object
                                        properties:
                                          from:
                                            type: string
                                            description: The field reported from ACE
                                            enum:
                                              - serial_number
                                              - name
                                              - ecid
                                              - udid
                                              - configurator_serial
                                              - ios
                                              - model
                                              - storage
                                              - wifi_mac
                                              - bt_mac
                                              - ethernet_mac
                                              - thundersync_serial
                                              - iccid
                                              - iccid2
                                              - imei
                                              - imei2
                                              - missed_profiles
                                              - missed_apps
                                              - icon_list_regex
                                              - icon_layout
                                              - bat_capacity
                                          to:
                                            type: string
                                            description: Field to set on the entity
                                    wait_for_apps:
                                      type: array
                                      description: >-
                                        A list of applications needed to be
                                        installed on the device. This will cause
                                        the extension to poll the device for
                                        installed applications. Once all the
                                        applications have been installed, this
                                        step can be completed
                                      items:
                                        type: string
                                        format: uri
                                    wait_for_battery_charge:
                                      type: integer
                                      description: >-
                                        The required battery percentage needed
                                        before this step can move on
                                      minimum: 0
                                      maximum: 100
                        - &ref_8
                          $schema: 'http://json-schema.org/draft-07/schema#'
                          $id: >-
                            https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepChoice.json
                          type: object
                          description: A Step choice
                          maxProperties: 2
                          minProperties: 2
                          required:
                            - decision
                          properties:
                            decision:
                              type: array
                              description: Context variable to check
                              items:
                                type: object
                                properties:
                                  variable:
                                    type: string
                                    description: Variable or value
                                  operator:
                                    type: string
                                    description: Operator to perform
                                    enum:
                                      - greater_than_equals
                                      - less_than_equals
                                      - greater_than
                                      - less_than
                                      - equals
                                      - not_equals
                                  operand:
                                    type: string
                                    description: operand to compare with
                          allOf:
                            - $schema: 'http://json-schema.org/draft-07/schema#'
                              $id: >-
                                https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepNext.json
                              type: object
                              required:
                                - type
                                - label
                                - goto
                              properties:
                                goto:
                                  type: string
                                  description: Step to move to
                                  pattern: '^[a-z][a-z-]+[a-z]$'
                                goto-fail:
                                  type: string
                                  description: >-
                                    Step to transition too if this step cannot
                                    be completed
                                  pattern: '^[a-z][a-z-]+[a-z]$'
                                context:
                                  type: array
                                  description: Values to set on the context
                                  items:
                                    type: object
                                    required:
                                      - key
                                      - value
                                    properties:
                                      key:
                                        type: string
                                        description: The context key to set
                                      value:
                                        type: string
                                        description: Value to set
                                      lock:
                                        type: boolean
                                        description: >-
                                          Prevents other steps from writing this
                                          value
                                      ignore:
                                        type: boolean
                                        description: >-
                                          When trying to set a locked key, do not
                                          fail
                                onStart: *ref_4
                                onError: &ref_5
                                  $schema: 'http://json-schema.org/draft-07/schema#'
                                  $id: >-
                                    https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepError.json
                                  type: object
                                  required:
                                    - retry
                                    - finally
                                  properties:
                                    retry:
                                      type: integer
                                      description: >-
                                        Number of times to retry this step.
                                        Note: retry will only occur on steps
                                        which automatically failed. If the step
                                        was transitioned using the 'goto-fail'
                                        step, the actions will be fired but the
                                        step WILL NOT be re-tried
                                      minimum: 0
                                      maximum: 10
                                      default: 0
                                    finally:
                                      type: object
                                      description: What to do after all retries
                                      properties:
                                        actions: *ref_4
                                onTimeout: *ref_5
                        - $schema: 'http://json-schema.org/draft-07/schema#'
                          $id: >-
                            https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepFail.json
                          type: object
                          description: Finial step which is marked as failed
                          properties:
                            label: *ref_2
                            type: *ref_1
                            onComplete: *ref_4
                        - $schema: 'http://json-schema.org/draft-07/schema#'
                          $id: >-
                            https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepPass.json
                          type: object
                          description: >-
                            Allows executing actions with out performing any
                            function
                          properties:
                            label: *ref_6
                            type: *ref_1
                          allOf:
                            - *ref_7
                        - $schema: 'http://json-schema.org/draft-07/schema#'
                          $id: >-
                            https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepSuccess.json
                          type: object
                          description: >-
                            Finial step which is marked as completed
                            successfully
                          properties:
                            label: *ref_2
                            type: *ref_1
                            onComplete: *ref_4
                        - $schema: 'http://json-schema.org/draft-07/schema#'
                          $id: >-
                            https://docs.nterprise.com/schemas/niagara/workFlow/steps/stepWait.json
                          type: object
                          description: A step which run at certain times
                          required:
                            - stop_at
                            - time
                          properties:
                            label: *ref_2
                            type:
                              type: string
                              enum:
                                - wait
                            stop_at:
                              type: integer
                              description: Time in seconds to stop this task
                              maximum: 900
                              minimum: 1
                            time:
                              type: integer
                              description: Time to wait before checking this step
                              maximum: 900
                              minimum: 1
                            listen_for:
                              type: array
                              description: >-
                                List of events and conditions to listen for to
                                trigger
                              items:
                                type: object
                                required:
                                  - event
                                properties:
                                  event:
                                    type: string
                                    description: Name of the event to listen for
                                    allOf:
                                      - type: string
                                        description: Possible entity events
                                        enum:
                                          - CON.attached
                                          - CON.created
                                          - CON.deleted
                                          - CON.detached
                                          - CON.removed
                                          - CON.updated
                                          - CUS.attached
                                          - CUS.created
                                          - CUS.deleted
                                          - CUS.detached
                                          - CUS.removed
                                          - CUS.updated
                                          - LOC.attached
                                          - LOC.created
                                          - LOC.deleted
                                          - LOC.detached
                                          - LOC.removed
                                          - LOC.updated
                                          - NOTE.attached
                                          - NOTE.created
                                          - NOTE.deleted
                                          - NOTE.detached
                                          - NOTE.removed
                                          - NOTE.updated
                                          - PART.attached
                                          - PART.created
                                          - PART.deleted
                                          - PART.detached
                                          - PART.removed
                                          - PART.updated
                                          - PGM.attached
                                          - PGM.created
                                          - PGM.deleted
                                          - PGM.detached
                                          - PGM.removed
                                          - PGM.updated
                                          - PRO.attached
                                          - PRO.created
                                          - PRO.deleted
                                          - PRO.detached
                                          - PRO.removed
                                          - PRO.updated
                                          - RES.attached
                                          - RES.created
                                          - RES.deleted
                                          - RES.detached
                                          - RES.removed
                                          - RES.updated
                                          - UNIT.attached
                                          - UNIT.created
                                          - UNIT.deleted
                                          - UNIT.detached
                                          - UNIT.removed
                                          - UNIT.updated
                                          - USER.attached
                                          - USER.created
                                          - USER.deleted
                                          - USER.detached
                                          - USER.removed
                                          - USER.updated
                                          - WKF.attached
                                          - WKF.created
                                          - WKF.deleted
                                          - WKF.detached
                                          - WKF.removed
                                          - WKF.updated
                                          - WOR.attached
                                          - WOR.created
                                          - WOR.deleted
                                          - WOR.detached
                                          - WOR.removed
                                          - WOR.updated
                                  event_value:
                                    type: object
                                    description: The event conditions that have to be met
                                    allOf:
                                      - *ref_8
                          allOf:
                            - *ref_7
                metadata:
                  type: object
                  description: Data for the resource as a key value pair
                  additionalProperties:
                    type: string
                  propertyNames:
                    pattern: '^[A-Za-z][A-Za-z0-9_]*$'
      meta:
        type: object
        description: Data for the resource as a key value pair
        additionalProperties:
          type: string
        propertyNames:
          pattern: '^[A-Za-z][A-Za-z0-9_]*$'

```

*Defines the properties for a work order batch*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch_id|string|false|read-only|The identifier for the batch|
|entity_id|string|true|read-only|Customer identifier|
|entity_type|string|true|none|none|
|label|string|false|none|Label for the entity|
|slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|current_status|object|false|none|Defines the properties for a status|
|» status|string|true|none|A Custom label for the status|
|» category|string|true|none|The classifier for the statues|
|» description|string\|null|false|none|A description for the status|
|» order|number|false|none|Order status appears when listing|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|queue|object|true|none|Defines the properties for a location queue|
|» queue_id|string|false|none|The identifier for the queue|
|» entity_id|string|true|read-only|Customer identifier|
|» entity_type|string|true|none|none|
|» label|string|true|none|Label for the entity|
|» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|» created|string(date-time)|true|read-only|Date the entity was created|
|» updated|string(date-time)|true|read-only|Last date the entity was updated|
|» location|object|true|none|Defines the properties for a part unit|
|»» location_id|string|false|read-only|The identifier for the location|
|»» entity_id|string|true|read-only|Customer identifier|
|»» entity_type|string|true|none|none|
|»» label|string|true|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|true|read-only|Date the entity was created|
|»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»» location_type|string|true|none|The type of location|
|»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»» address|object|true|none|xNAL address for the location|
|»»» country|string|true|none|Three Letter ISO country code|
|»»» administrative_area|string|true|none|State / Province / Region|
|»»» sub_administrative_area|string|false|none|County / District|
|»»» locality|string|true|none|City / Town|
|»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»» thoroughfare|string|true|none|Street Address|
|»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»» priority|integer|false|none|Priority level for queue|
|»» total_work_orders|object|false|read-only|none|
|»»» pending|integer|false|read-only|The number of cycles pending|
|»»» in_progress|integer|false|read-only|The number of cycles in progress|
|»»» verifying|integer|false|read-only|The number of cycles verifying|
|»»» complete|integer|false|read-only|The number of cycles complete|
|»»» blocked|integer|false|read-only|The number of cycles blocked|
|»»» cancelled|integer|false|read-only|The number of cycles cancelled|
|»» active_work_orders|number|false|read-only|Total of work orders in an active status|
|»» total_batches|integer|false|read-only|Number of batches assigned to the queue|
|»» is_active|boolean|true|read-only|Toggle if the batch has active cycles or batches|
|»» active_batches|number|true|read-only|Total of batches in the queue with active cycles|
|»» active_cycles|number|true|read-only|Total of all active cycles across all batches|
|» order|integer|false|none|Order to process the batch|
|» number_cycles|integer|true|none|The number of cycles for this batch|
|» cycles|object|true|read-only|none|
|»» pending|integer|false|read-only|The number of cycles pending|
|»» in_progress|integer|false|read-only|The number of cycles in progress|
|»» verifying|integer|false|read-only|The number of cycles verifying|
|»» complete|integer|false|read-only|The number of cycles complete|
|»» blocked|integer|false|read-only|The number of cycles blocked|
|»» cancelled|integer|false|read-only|The number of cycles cancelled|
|» work_order|object|true|none|Defines the properties for a unit|
|»» work_order_id|string|false|none|The identifier for the unit|
|»» entity_id|string|true|read-only|Customer identifier|
|»» entity_type|string|true|none|none|
|»» label|string|true|none|Label for the entity|
|»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»» created|string(date-time)|true|read-only|Date the entity was created|
|»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»» start_date|string(date-time)\|null|false|none|Start date|
|»» end_date|string(date-time)\|null|false|none|End date|
|»» current_location|object|false|none|Defines the properties for a part unit|
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
|»»» location|object|true|none|Defines the properties for a part unit|
|»»»» location_id|string|false|read-only|The identifier for the location|
|»»»» entity_id|string|true|read-only|Customer identifier|
|»»»» entity_type|string|true|none|none|
|»»»» label|string|true|none|Label for the entity|
|»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
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
|»»»» description|string\|null|false|none|Detailed description for the work order|
|»»»» work_order_type|string|true|none|Type of work order|
|»»»» due_date|string(date-time)|false|none|End date|
|»»»» current_status|object|false|none|Defines the properties for a status|
|»»»»» status|string|true|none|A Custom label for the status|
|»»»»» category|string|true|none|The classifier for the statues|
|»»»»» description|string\|null|false|none|A description for the status|
|»»»»» order|number|false|none|Order status appears when listing|
|»»»» project|object|false|none|Defines the properties for a project|
|»»»»» project_id|string|false|none|Unique identifier|
|»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»» entity_type|string|true|none|none|
|»»»»» description|string\|null|false|none|Project description|
|»»»»» label|string|true|none|Label for the entity|
|»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»» customer|object|true|none|Customer|
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
|»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»» program|object|true|none|Defines the properties for a program|
|»»»»»» program_id|string|false|read-only|Unique identifier|
|»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»» entity_type|string|true|none|none|
|»»»»»» label|string|false|none|Label for the entity|
|»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»» end_date|string(date-time)\|null|false|none|End date|
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
|»»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»»» total_programs|number|false|none|Total programs under the customer|
|»»»»»»» total_projects|number|false|none|Total projects under the customer|
|»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»» allowed_statuses|[object]|true|none|List of allowed statuses|
|»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»» category|string|true|none|The classifier for the statues|
|»»»»»»» description|string\|null|false|none|A description for the status|
|»»»»»»» order|number|false|none|Order status appears when listing|
|»»»»»» start_date|string(date-time)\|null|false|none|Start date|
|»»»»»» end_date|string(date-time)\|null|false|none|End date|
|»»»»» cycles|[object]|true|none|none|
|»»»»»» needed|integer|true|none|The number of cycles needed|
|»»»»»» pending|integer|true|read-only|The number of cycles pending|
|»»»»»» in_progress|integer|true|read-only|The number of cycles pending|
|»»»»»» verifying|integer|true|read-only|The number of cycles pending|
|»»»»»» complete|integer|true|read-only|The number of cycles pending|
|»»»»»» blocked|integer|true|read-only|The number of cycles pending|
|»»»»»» cancelled|integer|true|read-only|The number of cycles pending|
|»»»»»» work_flow|object|true|none|Workflow|
|»»»»»»» work_flow_id|string|false|read-only|Customer identifier|
|»»»»»»» entity_id|string|true|read-only|Customer identifier|
|»»»»»»» entity_type|string|true|none|none|
|»»»»»»» label|string|true|none|Label for the entity|
|»»»»»»» slug|string|false|read-only|Slug for the entity (Auto-generated from the label)|
|»»»»»»» created|string(date-time)|true|read-only|Date the entity was created|
|»»»»»»» updated|string(date-time)|true|read-only|Last date the entity was updated|
|»»»»»»» schema_version|string|true|none|Version of the workflow schema used|
|»»»»»»» workflow_version|integer|false|read-only|Version number for the work flows (the number of times it has been changed|
|»»»»»»» applies_to|string|true|none|The entity type this work flow applies too|
|»»»»»»» triggered_by|[string]|false|none|none|
|»»»»»»» starts_at|string|true|none|Starting step|
|»»»»»»» steps|object|true|none|Steps for the workflow|
|»»»»»»» metadata|object|false|none|Data for the resource as a key value pair|
|»»»»»»»» **additionalProperties**|string|false|none|none|
|»»»»»»» meta|object|false|none|Data for the resource as a key value pair|
|»»»»»»»» **additionalProperties**|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|BAT|
|category|PENDING|
|category|IN_PROGRESS|
|category|VERIFYING|
|category|COMPLETE|
|category|CANCELLED|
|category|BLOCKED|
|entity_type|QUE|
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
|entity_type|WOR|
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
|work_order_type|device|
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
|entity_type|WKF|
|schema_version|1.0|
|applies_to|UNIT|
|applies_to|PART|
|applies_to|PGM|
|applies_to|PRJ|
|applies_to|CUS|
|applies_to|CON|

