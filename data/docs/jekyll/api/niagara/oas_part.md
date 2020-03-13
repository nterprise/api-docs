---
layout: page
parent: Niagara API
nav_order: 9
title: Parts
language_tabs: ''
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="parts">Parts v2.0.0</h1>

> Scroll down for example requests and responses.

API for the nterprise application

<h1 id="parts-part">Part</h1>

## fetchAllParts

<a id="opIdfetchAllParts"></a>

`GET /parts`

*Fetches A Page of parts*

Fetch Part

<h3 id="fetchallparts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|sort|query|string|false|Sort by field|
|filter[label]|query|string|false|Filter where the label contains this value|
|filter[manufacturer_id]|query|string|false|Filter where the manufacturer id is this valuer|
|filter[customer_id]|query|string|false|Filter where the customer id is this value|

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
        "nter:parts": {
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
                        "example": "https://api.nterprise.com/parts/7c0ac918-7a68-4044-8e36-7373460053d5"
                      }
                    }
                  }
                }
              }
            },
            "allOf": [
              {
                "x-id": "#part",
                "x-nter-relation": "parts",
                "x-nter-model": "Part",
                "x-nter-callable": true,
                "description": "Defines the properties for a part",
                "required": [
                  "label",
                  "part_id",
                  "customer",
                  "manufacturer"
                ],
                "properties": {
                  "part_id": {
                    "type": "string",
                    "description": "Unique identifier",
                    "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                    "x-examples": [
                      "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
                    ],
                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                  },
                  "label": {
                    "type": "string",
                    "example": "10\" iPad",
                    "x-examples": [
                      "10\" iPad"
                    ],
                    "description": "Label for the part"
                  },
                  "slug": {
                    "type": "string",
                    "example": "10-ipad",
                    "x-examples": [
                      "10-ipad"
                    ],
                    "description": "Auto-generated slug for the part"
                  },
                  "customer": {
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
                        "description": "Manufacturer part number",
                        "example": "602-3075-01",
                        "x-examples": [
                          "602-3075-01"
                        ]
                      }
                    },
                    "allOf": [
                      {
                        "x-id": "#manufacturer",
                        "x-nter-relation": "manufacturers",
                        "x-nter-model": "Manufacturer",
                        "x-nter-callable": true,
                        "description": "A Manufacturer of parts",
                        "required": [
                          "label",
                          "manufacturer_id"
                        ],
                        "properties": {
                          "manufacturer_id": {
                            "type": "string",
                            "description": "unique id",
                            "example": "99ec26f2-fa31-4768-b357-268c708fcda5",
                            "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                          },
                          "label": {
                            "type": "string",
                            "example": "Apple Inc",
                            "x-examples": [
                              "Apple Inc"
                            ],
                            "description": "Label for the manufacturer"
                          },
                          "slug": {
                            "type": "string",
                            "example": "apple-inc",
                            "x-examples": [
                              "apple-inc"
                            ],
                            "description": "Auto-generated slug for the manufacturer"
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
                          "label": "Apple Inc",
                          "manufacturer_id": "003DffD7-Dff3-3E2A-Ae76-26E6C7aE5F7B",
                          "slug": "apple-inc",
                          "created": "1978-03-10T02:20:23.811Z",
                          "updated": "1940-10-01T09:10:03.934Z"
                        }
                      }
                    ]
                  },
                  "serial_prefix": {
                    "type": "string",
                    "example": "S",
                    "x-examples": [
                      "S"
                    ],
                    "description": "A serial number prefix for the part"
                  },
                  "input_filter": {
                    "description": "Input Filters allow custom fields to be defined for entities",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "description": "Input filter specification",
                      "properties": {
                        "label": {
                          "type": "string",
                          "description": "Human readable name",
                          "example": "Serial Number",
                          "x-examples": [
                            "Serial Number",
                            "Asset tag",
                            "WiFi MAC address",
                            "Bluetooh MAC address"
                          ]
                        },
                        "key": {
                          "type": "string",
                          "description": "Slug used to store the property",
                          "example": "serial-number",
                          "x-examples": [
                            "serial-number",
                            "asset-tag",
                            "wifi-mac-address",
                            "bluetooh-mac-address"
                          ],
                          "readOnly": true,
                          "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                        },
                        "filters": {
                          "type": "array",
                          "description": "A Collection of filters applied to the field",
                          "items": {
                            "anyOf": [
                              {
                                "description": "This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set",
                                "type": "object",
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
                                        },
                                        "example": [
                                          "foo",
                                          "bar",
                                          "fizz",
                                          "buzz"
                                        ],
                                        "x-examples": [
                                          [
                                            "foo",
                                            "bar",
                                            "fizz",
                                            "buzz"
                                          ]
                                        ]
                                      },
                                      "check_case": {
                                        "type": "boolean",
                                        "description": "Perform a case sensitive match. By default will not match case",
                                        "default": false
                                      },
                                      "default": {
                                        "type": "string",
                                        "description": "If this is set and the value is not in the approved_list, set the value to this",
                                        "nullable": true,
                                        "example": "fizz",
                                        "x-examples": [
                                          "fizz"
                                        ]
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "description": "Make the value camelCase",
                                "type": "object",
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
                                "description": "Filter to transform a value into a date",
                                "type": "object",
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
                                    "description": "Date filter has no options",
                                    "example": {},
                                    "x-examples": [
                                      {}
                                    ]
                                  }
                                }
                              },
                              {
                                "description": "Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:\n# The number 0 or 0.0\n# empty string ''\n# A boolean false\n# The word 'false'\n# ",
                                "type": "object",
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
                                    "description": "empty filter has no options",
                                    "example": {},
                                    "x-examples": [
                                      {}
                                    ]
                                  }
                                }
                              },
                              {
                                "description": "Filter to transform a value into a float. Non numeric characters (including comma) will be removed",
                                "type": "object",
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
                                "description": "Make the value kebab-case",
                                "type": "object",
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
                                "description": "Make the value lowercase",
                                "type": "object",
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
                                "description": "Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed",
                                "type": "object",
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
                                    "description": "Number filter has no options",
                                    "example": {},
                                    "x-examples": [
                                      {}
                                    ]
                                  }
                                }
                              },
                              {
                                "description": "Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.",
                                "type": "object",
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
                                        "description": "The prefix to add",
                                        "example": "MAN-",
                                        "x-examples": [
                                          "MAN-"
                                        ]
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "description": "Make the value snake_case",
                                "type": "object",
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
                                "description": "Filter to transform a value into a string",
                                "type": "object",
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
                                    "description": "String filter has no options",
                                    "example": {},
                                    "x-examples": [
                                      {}
                                    ]
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
                                        "description": "The suffix to add",
                                        "example": "-MAN",
                                        "x-examples": [
                                          "MAN"
                                        ]
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "description": "Filter to trim whitespace from a value",
                                "type": "object",
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
                                "description": "Make the value UPPERCASE",
                                "type": "object",
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
                          "items": {
                            "anyOf": [
                              {
                                "description": "Validate number is between two values. By default, min and max are included",
                                "type": "object",
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
                                        "description": "Minimum value to check",
                                        "example": 42,
                                        "x-examples": [
                                          42
                                        ]
                                      },
                                      "max": {
                                        "type": "number",
                                        "description": "The maximum value to check",
                                        "example": 42,
                                        "x-examples": [
                                          42
                                        ]
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
                                "description": "Validate value does not match a list (black list)",
                                "type": "object",
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
                                        },
                                        "example": [
                                          "foo",
                                          "bar",
                                          "fizz",
                                          "buzz"
                                        ],
                                        "x-examples": [
                                          [
                                            "foo",
                                            "bar",
                                            "fizz",
                                            "buzz"
                                          ]
                                        ]
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
                                "description": "Validate string contains a value",
                                "type": "object",
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
                                        "description": "String must contain with this value",
                                        "example": "foo",
                                        "x-examples": [
                                          "foo"
                                        ]
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
                                "description": "Validate string is a correct email address",
                                "type": "object",
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
                                "description": "Validate string ends with a value",
                                "type": "object",
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
                                        "description": "String must end with this value",
                                        "example": "foo",
                                        "x-examples": [
                                          "foo"
                                        ]
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
                                "description": "Validate number equals a value",
                                "type": "object",
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
                                        "description": "The value to compare against",
                                        "example": 42,
                                        "x-examples": [
                                          42
                                        ]
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
                                "description": "Validate number is greater than a value. By default, this will check if value is greater than or equals to",
                                "type": "object",
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
                                        "description": "The value to compare against",
                                        "example": 42,
                                        "x-examples": [
                                          42
                                        ]
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
                                "description": "Validate string has a correct DNS records",
                                "type": "object",
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
                                "description": "Validate string matches an IP address format. Defaults to matching IPv4",
                                "type": "object",
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
                                        "example": [
                                          "IPv4"
                                        ],
                                        "x-examples": [
                                          [
                                            "IPv4"
                                          ]
                                        ],
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
                                "description": "Validate string is a certain length",
                                "type": "object",
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
                                        "description": "String must contain with this value",
                                        "example": "foo",
                                        "x-examples": [
                                          "foo"
                                        ]
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
                                "description": "Validate number is less than a value. By default, this will check if value is less than or equals to",
                                "type": "object",
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
                                        "description": "The value to compare against",
                                        "example": 42,
                                        "x-examples": [
                                          42
                                        ]
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
                                "description": "Validate string matches an MAC address format",
                                "type": "object",
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
                                "description": "Validate string matches a regular expression",
                                "type": "object",
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
                                        "description": "Mask to validate against",
                                        "example": "^[a-z]$",
                                        "x-examples": [
                                          "^[a-z]$"
                                        ]
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "description": "Validate string starts with a value",
                                "type": "object",
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
                                        "description": "String must start with this value",
                                        "example": "foo",
                                        "x-examples": [
                                          "foo"
                                        ]
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
                                "description": "Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.",
                                "type": "object",
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
                                        "description": "The step value",
                                        "example": 4,
                                        "x-examples": [
                                          4
                                        ]
                                      },
                                      "start": {
                                        "type": "integer",
                                        "description": "Start stepping at this value",
                                        "example": 0,
                                        "x-examples": [
                                          0
                                        ]
                                      },
                                      "end": {
                                        "type": "integer",
                                        "description": "End stepping at this value",
                                        "example": 16,
                                        "x-examples": [
                                          16
                                        ]
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "description": "Validate string matches an URI",
                                "type": "object",
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
                                        "example": [
                                          "http"
                                        ],
                                        "x-examples": [
                                          [
                                            "http"
                                          ]
                                        ],
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
                                "description": "Validate value matches a list (white list)",
                                "type": "object",
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
                                        },
                                        "example": [
                                          "foo",
                                          "bar",
                                          "fizz",
                                          "buzz"
                                        ],
                                        "x-examples": [
                                          [
                                            "foo",
                                            "bar",
                                            "fizz",
                                            "buzz"
                                          ]
                                        ]
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
                    },
                    "example": [
                      {
                        "label": "Serial Number",
                        "key": "bluetooh-mac-address",
                        "filters": [
                          {
                            "type": "empty",
                            "options": {}
                          },
                          {
                            "type": "camel",
                            "options": {}
                          },
                          {
                            "type": "camel",
                            "options": {}
                          },
                          {
                            "type": "trim",
                            "options": {
                              "start": false,
                              "end": false
                            }
                          },
                          {
                            "type": "suffix",
                            "options": {
                              "suffix": "MAN"
                            }
                          }
                        ],
                        "validators": [
                          {
                            "type": "uri",
                            "options": {
                              "schemes": [
                                "http"
                              ]
                            }
                          }
                        ]
                      },
                      {
                        "label": "Asset tag",
                        "key": "wifi-mac-address",
                        "filters": [
                          {
                            "type": "trim",
                            "options": {
                              "start": true,
                              "end": false
                            }
                          },
                          {
                            "type": "prefix",
                            "options": {
                              "prefix": "MAN-"
                            }
                          }
                        ],
                        "validators": [
                          {
                            "type": "lessThan",
                            "options": {
                              "value": 42,
                              "precision": 4,
                              "include": true
                            }
                          },
                          {
                            "type": "hostname",
                            "options": {
                              "record_type": "HIP"
                            }
                          },
                          {
                            "type": "ends_with",
                            "options": {
                              "ends_with": "foo",
                              "check_case": false
                            }
                          }
                        ]
                      }
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
                  "label": "10\" iPad",
                  "part_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                  "customer": {
                    "label": "Zones Inc",
                    "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                    "slug": "zones-inc",
                    "external_platform": {
                      "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                    },
                    "allowed_statuses": [
                      {
                        "status": "Reticulating Splines",
                        "category": "IN_PROGRESS"
                      }
                    ],
                    "created": "1992-08-12T08:06:10.993Z",
                    "updated": "2002-08-23T06:46:31.317Z"
                  },
                  "manufacturer": {
                    "part_number": "602-3075-01",
                    "label": "Apple Inc",
                    "manufacturer_id": "0cF15DfC-586c-bd1b-ADeb-95Ce468beee7",
                    "slug": "apple-inc",
                    "created": "2016-07-11T22:09:20.498Z",
                    "updated": "1942-12-06T05:12:04.745Z"
                  },
                  "slug": "10-ipad",
                  "serial_prefix": "S",
                  "input_filter": [
                    {
                      "label": "Bluetooh MAC address",
                      "key": "asset-tag",
                      "filters": [
                        {
                          "type": "date",
                          "options": {}
                        },
                        {
                          "type": "date",
                          "options": {}
                        },
                        {
                          "type": "allowed_list",
                          "options": {
                            "approved_values": [
                              "foo",
                              "bar",
                              "fizz",
                              "buzz"
                            ],
                            "check_case": false,
                            "default": "fizz"
                          }
                        },
                        {
                          "type": "number",
                          "options": {}
                        }
                      ],
                      "validators": [
                        {
                          "type": "lessThan",
                          "options": {
                            "value": 42,
                            "precision": 3,
                            "include": true
                          }
                        },
                        {
                          "type": "whiteList",
                          "options": {
                            "list": [
                              "foo",
                              "bar",
                              "fizz",
                              "buzz"
                            ],
                            "check_case": true
                          }
                        },
                        {
                          "type": "macAddress",
                          "options": {}
                        },
                        {
                          "type": "macAddress",
                          "options": {}
                        },
                        {
                          "type": "contains",
                          "options": {
                            "contains": "foo",
                            "check_case": true
                          }
                        }
                      ]
                    }
                  ],
                  "created": "1999-04-30T19:19:03.277Z",
                  "updated": "1971-01-10T16:33:44.126Z"
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

<h3 id="fetchallparts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for parts|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallparts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:parts|[allOf]|false|none|none|
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

## createPart

<a id="opIdcreatePart"></a>

`POST /parts`

*Creates a part *

Creates a new part  following the part  schema

> Body parameter

```json
{
  "type": "object",
  "required": [
    "label",
    "customer",
    "manufacturer",
    "input_filter"
  ],
  "properties": {
    "label": {
      "type": "string",
      "example": "10\" iPad",
      "x-examples": [
        "10\" iPad"
      ],
      "description": "Label for the part"
    },
    "customer": {
      "type": "object",
      "required": [
        "customer_id"
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
        }
      }
    },
    "manufacturer": {
      "type": "object",
      "required": [
        "manufacturer_id",
        "part_number"
      ],
      "properties": {
        "manufacturer_id": {
          "type": "string",
          "description": "unique id",
          "example": "99ec26f2-fa31-4768-b357-268c708fcda5",
          "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
        },
        "part_number": {
          "type": "string",
          "description": "Manufacturer part number",
          "example": "602-3075-01",
          "x-examples": [
            "602-3075-01"
          ]
        }
      }
    },
    "serial_prefix": {
      "type": "string",
      "example": "S",
      "x-examples": [
        "S"
      ],
      "description": "A serial number prefix for the part"
    },
    "input_filter": {
      "type": "array",
      "items": {
        "description": "Input Filters allow custom fields to be defined for entities",
        "type": "array",
        "items": {
          "type": "object",
          "description": "Input filter specification",
          "properties": {
            "label": {
              "type": "string",
              "description": "Human readable name",
              "example": "Serial Number",
              "x-examples": [
                "Serial Number",
                "Asset tag",
                "WiFi MAC address",
                "Bluetooh MAC address"
              ]
            },
            "key": {
              "type": "string",
              "description": "Slug used to store the property",
              "example": "serial-number",
              "x-examples": [
                "serial-number",
                "asset-tag",
                "wifi-mac-address",
                "bluetooh-mac-address"
              ],
              "readOnly": true,
              "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
            },
            "filters": {
              "type": "array",
              "description": "A Collection of filters applied to the field",
              "items": {
                "anyOf": [
                  {
                    "description": "This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set",
                    "type": "object",
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
                            },
                            "example": [
                              "foo",
                              "bar",
                              "fizz",
                              "buzz"
                            ],
                            "x-examples": [
                              [
                                "foo",
                                "bar",
                                "fizz",
                                "buzz"
                              ]
                            ]
                          },
                          "check_case": {
                            "type": "boolean",
                            "description": "Perform a case sensitive match. By default will not match case",
                            "default": false
                          },
                          "default": {
                            "type": "string",
                            "description": "If this is set and the value is not in the approved_list, set the value to this",
                            "nullable": true,
                            "example": "fizz",
                            "x-examples": [
                              "fizz"
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "description": "Make the value camelCase",
                    "type": "object",
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
                    "description": "Filter to transform a value into a date",
                    "type": "object",
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
                        "description": "Date filter has no options",
                        "example": {},
                        "x-examples": [
                          {}
                        ]
                      }
                    }
                  },
                  {
                    "description": "Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:\n# The number 0 or 0.0\n# empty string ''\n# A boolean false\n# The word 'false'\n# ",
                    "type": "object",
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
                        "description": "empty filter has no options",
                        "example": {},
                        "x-examples": [
                          {}
                        ]
                      }
                    }
                  },
                  {
                    "description": "Filter to transform a value into a float. Non numeric characters (including comma) will be removed",
                    "type": "object",
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
                    "description": "Make the value kebab-case",
                    "type": "object",
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
                    "description": "Make the value lowercase",
                    "type": "object",
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
                    "description": "Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed",
                    "type": "object",
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
                        "description": "Number filter has no options",
                        "example": {},
                        "x-examples": [
                          {}
                        ]
                      }
                    }
                  },
                  {
                    "description": "Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.",
                    "type": "object",
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
                            "description": "The prefix to add",
                            "example": "MAN-",
                            "x-examples": [
                              "MAN-"
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "description": "Make the value snake_case",
                    "type": "object",
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
                    "description": "Filter to transform a value into a string",
                    "type": "object",
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
                        "description": "String filter has no options",
                        "example": {},
                        "x-examples": [
                          {}
                        ]
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
                            "description": "The suffix to add",
                            "example": "-MAN",
                            "x-examples": [
                              "MAN"
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "description": "Filter to trim whitespace from a value",
                    "type": "object",
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
                    "description": "Make the value UPPERCASE",
                    "type": "object",
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
              "items": {
                "anyOf": [
                  {
                    "description": "Validate number is between two values. By default, min and max are included",
                    "type": "object",
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
                            "description": "Minimum value to check",
                            "example": 42,
                            "x-examples": [
                              42
                            ]
                          },
                          "max": {
                            "type": "number",
                            "description": "The maximum value to check",
                            "example": 42,
                            "x-examples": [
                              42
                            ]
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
                    "description": "Validate value does not match a list (black list)",
                    "type": "object",
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
                            },
                            "example": [
                              "foo",
                              "bar",
                              "fizz",
                              "buzz"
                            ],
                            "x-examples": [
                              [
                                "foo",
                                "bar",
                                "fizz",
                                "buzz"
                              ]
                            ]
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
                    "description": "Validate string contains a value",
                    "type": "object",
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
                            "description": "String must contain with this value",
                            "example": "foo",
                            "x-examples": [
                              "foo"
                            ]
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
                    "description": "Validate string is a correct email address",
                    "type": "object",
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
                    "description": "Validate string ends with a value",
                    "type": "object",
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
                            "description": "String must end with this value",
                            "example": "foo",
                            "x-examples": [
                              "foo"
                            ]
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
                    "description": "Validate number equals a value",
                    "type": "object",
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
                            "description": "The value to compare against",
                            "example": 42,
                            "x-examples": [
                              42
                            ]
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
                    "description": "Validate number is greater than a value. By default, this will check if value is greater than or equals to",
                    "type": "object",
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
                            "description": "The value to compare against",
                            "example": 42,
                            "x-examples": [
                              42
                            ]
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
                    "description": "Validate string has a correct DNS records",
                    "type": "object",
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
                    "description": "Validate string matches an IP address format. Defaults to matching IPv4",
                    "type": "object",
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
                            "example": [
                              "IPv4"
                            ],
                            "x-examples": [
                              [
                                "IPv4"
                              ]
                            ],
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
                    "description": "Validate string is a certain length",
                    "type": "object",
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
                            "description": "String must contain with this value",
                            "example": "foo",
                            "x-examples": [
                              "foo"
                            ]
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
                    "description": "Validate number is less than a value. By default, this will check if value is less than or equals to",
                    "type": "object",
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
                            "description": "The value to compare against",
                            "example": 42,
                            "x-examples": [
                              42
                            ]
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
                    "description": "Validate string matches an MAC address format",
                    "type": "object",
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
                    "description": "Validate string matches a regular expression",
                    "type": "object",
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
                            "description": "Mask to validate against",
                            "example": "^[a-z]$",
                            "x-examples": [
                              "^[a-z]$"
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "description": "Validate string starts with a value",
                    "type": "object",
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
                            "description": "String must start with this value",
                            "example": "foo",
                            "x-examples": [
                              "foo"
                            ]
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
                    "description": "Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.",
                    "type": "object",
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
                            "description": "The step value",
                            "example": 4,
                            "x-examples": [
                              4
                            ]
                          },
                          "start": {
                            "type": "integer",
                            "description": "Start stepping at this value",
                            "example": 0,
                            "x-examples": [
                              0
                            ]
                          },
                          "end": {
                            "type": "integer",
                            "description": "End stepping at this value",
                            "example": 16,
                            "x-examples": [
                              16
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "description": "Validate string matches an URI",
                    "type": "object",
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
                            "example": [
                              "http"
                            ],
                            "x-examples": [
                              [
                                "http"
                              ]
                            ],
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
                    "description": "Validate value matches a list (white list)",
                    "type": "object",
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
                            },
                            "example": [
                              "foo",
                              "bar",
                              "fizz",
                              "buzz"
                            ],
                            "x-examples": [
                              [
                                "foo",
                                "bar",
                                "fizz",
                                "buzz"
                              ]
                            ]
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
        },
        "example": [
          {
            "label": "Serial Number",
            "key": "bluetooh-mac-address",
            "filters": [
              {
                "type": "empty",
                "options": {}
              },
              {
                "type": "camel",
                "options": {}
              },
              {
                "type": "camel",
                "options": {}
              },
              {
                "type": "trim",
                "options": {
                  "start": false,
                  "end": false
                }
              },
              {
                "type": "suffix",
                "options": {
                  "suffix": "MAN"
                }
              }
            ],
            "validators": [
              {
                "type": "uri",
                "options": {
                  "schemes": [
                    "http"
                  ]
                }
              }
            ]
          },
          {
            "label": "Asset tag",
            "key": "wifi-mac-address",
            "filters": [
              {
                "type": "trim",
                "options": {
                  "start": true,
                  "end": false
                }
              },
              {
                "type": "prefix",
                "options": {
                  "prefix": "MAN-"
                }
              }
            ],
            "validators": [
              {
                "type": "lessThan",
                "options": {
                  "value": 42,
                  "precision": 4,
                  "include": true
                }
              },
              {
                "type": "hostname",
                "options": {
                  "record_type": "HIP"
                }
              },
              {
                "type": "ends_with",
                "options": {
                  "ends_with": "foo",
                  "check_case": false
                }
              }
            ]
          }
        ]
      }
    }
  }
}
```

<h3 id="createpart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Label for the part|
|customer|body|object|true|none|
|» customer_id|body|string|true|Customer identifier|
|manufacturer|body|object|true|none|
|» manufacturer_id|body|string|true|unique id|
|» part_number|body|string|true|Manufacturer part number|
|serial_prefix|body|string|false|A serial number prefix for the part|
|input_filter|body|[array]|true|none|
|» label|body|string|false|Human readable name|
|» key|body|string|false|Slug used to store the property|
|» filters|body|[anyOf]|false|A Collection of filters applied to the field|
|»» *anonymous*|body|object|false|This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set|
|»»» type|body|string|true|none|
|»»» options|body|object|true|none|
|»»»» approved_values|body|[string]|true|The list of approved values|
|»»»» check_case|body|boolean|false|Perform a case sensitive match. By default will not match case|
|»»»» default|body|string\|null|false|If this is set and the value is not in the approved_list, set the value to this|
|»»» *anonymous*|body|object|false|Make the value camelCase|
|»»»» type|body|string|true|none|
|»»»» options|body|object|true|This filter has no options|
|»»» *anonymous*|body|object|false|Filter to transform a value into a date|
|»»»» type|body|string|true|none|
|»»»» options|body|object|true|Date filter has no options|
|»»» *anonymous*|body|object|false|Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:|
|»»»» type|body|string|true|none|
|»»»» options|body|object|true|empty filter has no options|
|»»» *anonymous*|body|object|false|Filter to transform a value into a float. Non numeric characters (including comma) will be removed|
|»»»» type|body|string|true|none|
|»»»» options|body|object|true|none|
|»»»»» precision|body|integer|false|How many decimal places to preserve|
|»»»» *anonymous*|body|object|false|Make the value kebab-case|
|»»»»» type|body|string|true|none|
|»»»»» options|body|object|true|This filter has no options|
|»»»» *anonymous*|body|object|false|Make the value lowercase|
|»»»»» type|body|string|true|none|
|»»»»» options|body|object|true|This filter has no options|
|»»»» *anonymous*|body|object|false|Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed|
|»»»»» type|body|string|true|none|
|»»»»» options|body|object|true|Number filter has no options|
|»»»» *anonymous*|body|object|false|Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.|
|»»»»» type|body|string|true|none|
|»»»»» options|body|object|true|none|
|»»»»»» prefix|body|string|true|The prefix to add|
|»»»»» *anonymous*|body|object|false|Make the value snake_case|
|»»»»»» type|body|string|true|none|
|»»»»»» options|body|object|true|This filter has no options|
|»»»»» *anonymous*|body|object|false|Filter to transform a value into a string|
|»»»»»» type|body|string|true|none|
|»»»»»» options|body|object|true|String filter has no options|
|»»»»» *anonymous*|body|object|false|Add a suffix to the start of a string. If the string already start with the suffix, it will not append.|
|»»»»»» type|body|string|true|none|
|»»»»»» options|body|object|true|none|
|»»»»»»» suffix|body|string|true|The suffix to add|
|»»»»»» *anonymous*|body|object|false|Filter to trim whitespace from a value|
|»»»»»»» type|body|string|true|none|
|»»»»»»» options|body|object|true|By default will trim from the start and end|
|»»»»»»»» start|body|boolean|false|Remove white space from the start of the string|
|»»»»»»»» end|body|boolean|false|Remove white space from the end of the string|
|»»»»»»» *anonymous*|body|object|false|Make the value UPPERCASE|
|»»»»»»»» type|body|string|true|none|
|»»»»»»»» options|body|object|true|This filter has no options|
|»»»»»»» validators|body|[anyOf]|false|A set of validators to use for this field|
|»»»»»»»» *anonymous*|body|object|false|Validate number is between two values. By default, min and max are included|
|»»»»»»»»» type|body|string|true|none|
|»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»» min|body|number|true|Minimum value to check|
|»»»»»»»»»» max|body|number|true|The maximum value to check|
|»»»»»»»»»» precision|body|integer|false|When number is a float, this will set the decimal precision|
|»»»»»»»»»» include|body|boolean|false|Include the value in the check|
|»»»»»»»»» *anonymous*|body|object|false|Validate value does not match a list (black list)|
|»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»» list|body|[string]|true|The list of approved values|
|»»»»»»»»»»» check_case|body|boolean|false|Perform a case sensitive match. By default will not match case|
|»»»»»»»»»» *anonymous*|body|object|false|Validate string contains a value|
|»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»» contains|body|string|true|String must contain with this value|
|»»»»»»»»»»»» check_case|body|boolean|false|Perform a case sensitive match. By default will not match case|
|»»»»»»»»»»» *anonymous*|body|object|false|Validate string is a correct email address|
|»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»» strict|body|boolean|false|Enforce strict standards from ARPA. This will enforce the length of the string|
|»»»»»»»»»»»»» lookup|body|boolean|false|Look up the host name and check if it has a valid MX record|
|»»»»»»»»»»»» *anonymous*|body|object|false|Validate string ends with a value|
|»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»» ends_with|body|string|true|String must end with this value|
|»»»»»»»»»»»»»» check_case|body|boolean|false|Perform a case sensitive match. By default will not match case|
|»»»»»»»»»»»»» *anonymous*|body|object|false|Validate number equals a value|
|»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»» value|body|number|true|The value to compare against|
|»»»»»»»»»»»»»»» precision|body|integer|false|When value is a float, this will set the decimal precision|
|»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate number is greater than a value. By default, this will check if value is greater than or equals to|
|»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»» value|body|number|true|The value to compare against|
|»»»»»»»»»»»»»»»» precision|body|integer|false|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»» include|body|boolean|false|Include the value in the check|
|»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string has a correct DNS records|
|»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»» record_type|body|string|false|DNS record type to validate|
|»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string matches an IP address format. Defaults to matching IPv4|
|»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»» versions|body|[string]|false|IP Version to match against|
|»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string is a certain length|
|»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»» length|body|string|true|String must contain with this value|
|»»»»»»»»»»»»»»»»»»» operator|body|string|false|Which type of length comparision to make|
|»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate number is less than a value. By default, this will check if value is less than or equals to|
|»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»»» value|body|number|true|The value to compare against|
|»»»»»»»»»»»»»»»»»»»» precision|body|integer|false|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»»»»» include|body|boolean|false|Include the value in the check|
|»»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string matches an MAC address format|
|»»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»»» options|body|object|true|This validator has no options|
|»»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string matches a regular expression|
|»»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»»»» mask|body|string|true|Mask to validate against|
|»»»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string starts with a value|
|»»»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»»»»» starts_with|body|string|true|String must start with this value|
|»»»»»»»»»»»»»»»»»»»»»» check_case|body|boolean|false|Perform a case sensitive match. By default will not match case|
|»»»»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.|
|»»»»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»»»»»» step|body|number|true|The step value|
|»»»»»»»»»»»»»»»»»»»»»»» start|body|integer|false|Start stepping at this value|
|»»»»»»»»»»»»»»»»»»»»»»» end|body|integer|false|End stepping at this value|
|»»»»»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string matches an URI|
|»»»»»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|body|[string]|false|Schemes to match. By default all are matched|
|»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate value matches a list (white list)|
|»»»»»»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»»»»»»»» list|body|[string]|true|The list of approved values|
|»»»»»»»»»»»»»»»»»»»»»»»»» check_case|body|boolean|false|Perform a case sensitive match. By default will not match case|

#### Detailed descriptions

**»»» *anonymous***: Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:
# The number 0 or 0.0
# empty string ''
# A boolean false
# The word 'false'
#

#### Enumerated Values

|Parameter|Value|
|---|---|
|»»» type|allowed_list|
|»»»» type|camel|
|»»»» type|date|
|»»»» type|empty|
|»»»» type|float|
|»»»»» type|kebab|
|»»»»» type|lower|
|»»»»» type|number|
|»»»»» type|prefix|
|»»»»»» type|snake|
|»»»»»» type|string|
|»»»»»» type|suffix|
|»»»»»»» type|trim|
|»»»»»»»» type|upper|
|»»»»»»»»» type|greater_than|
|»»»»»»»»»» type|white_list|
|»»»»»»»»»»» type|contains|
|»»»»»»»»»»»» type|email_address|
|»»»»»»»»»»»»» type|ends_with|
|»»»»»»»»»»»»»» type|equals|
|»»»»»»»»»»»»»»» type|greater_than|
|»»»»»»»»»»»»»»»» type|hostname|
|»»»»»»»»»»»»»»»»» record_type|A|
|»»»»»»»»»»»»»»»»» record_type|AAAA|
|»»»»»»»»»»»»»»»»» record_type|AFSDB|
|»»»»»»»»»»»»»»»»» record_type|APL|
|»»»»»»»»»»»»»»»»» record_type|CAA|
|»»»»»»»»»»»»»»»»» record_type|CDNSKEY|
|»»»»»»»»»»»»»»»»» record_type|CDS|
|»»»»»»»»»»»»»»»»» record_type|CERT|
|»»»»»»»»»»»»»»»»» record_type|CNAME|
|»»»»»»»»»»»»»»»»» record_type|CSYNC|
|»»»»»»»»»»»»»»»»» record_type|DHCID|
|»»»»»»»»»»»»»»»»» record_type|DLV|
|»»»»»»»»»»»»»»»»» record_type|DNAME|
|»»»»»»»»»»»»»»»»» record_type|DNSKEY|
|»»»»»»»»»»»»»»»»» record_type|DS|
|»»»»»»»»»»»»»»»»» record_type|HIP|
|»»»»»»»»»»»»»»»»» record_type|IPSECKEY|
|»»»»»»»»»»»»»»»»» record_type|KEY|
|»»»»»»»»»»»»»»»»» record_type|KX|
|»»»»»»»»»»»»»»»»» record_type|LOC|
|»»»»»»»»»»»»»»»»» record_type|MX|
|»»»»»»»»»»»»»»»»» record_type|NAPTR|
|»»»»»»»»»»»»»»»»» record_type|NS|
|»»»»»»»»»»»»»»»»» record_type|NSEC|
|»»»»»»»»»»»»»»»»» record_type|NSEC3|
|»»»»»»»»»»»»»»»»» record_type|NSEC3PARAM|
|»»»»»»»»»»»»»»»»» record_type|OPENPGPKEY|
|»»»»»»»»»»»»»»»»» record_type|PTR|
|»»»»»»»»»»»»»»»»» record_type|RRSIG|
|»»»»»»»»»»»»»»»»» record_type|RP|
|»»»»»»»»»»»»»»»»» record_type|SIG|
|»»»»»»»»»»»»»»»»» record_type|SMIMEA|
|»»»»»»»»»»»»»»»»» record_type|SOA|
|»»»»»»»»»»»»»»»»» record_type|SRV|
|»»»»»»»»»»»»»»»»» record_type|SSHFP|
|»»»»»»»»»»»»»»»»» record_type|TA|
|»»»»»»»»»»»»»»»»» record_type|TKEY|
|»»»»»»»»»»»»»»»»» record_type|TLSA|
|»»»»»»»»»»»»»»»»» record_type|TSIG|
|»»»»»»»»»»»»»»»»» record_type|TXT|
|»»»»»»»»»»»»»»»»» record_type|URI|
|»»»»»»»»»»»»»»»»» type|ipAddress|
|»»»»»»»»»»»»»»»»»» versions|IPv4|
|»»»»»»»»»»»»»»»»»» versions|IPv6|
|»»»»»»»»»»»»»»»»»» type|length|
|»»»»»»»»»»»»»»»»»»» operator|equals|
|»»»»»»»»»»»»»»»»»»» operator|less_than|
|»»»»»»»»»»»»»»»»»»» operator|less_than_equals|
|»»»»»»»»»»»»»»»»»»» operator|greater_than|
|»»»»»»»»»»»»»»»»»»» operator|greater_than_equals|
|»»»»»»»»»»»»»»»»»»» type|lessThan|
|»»»»»»»»»»»»»»»»»»»» type|macAddress|
|»»»»»»»»»»»»»»»»»»»» type|mask|
|»»»»»»»»»»»»»»»»»»»»» type|startsWith|
|»»»»»»»»»»»»»»»»»»»»»» type|step|
|»»»»»»»»»»»»»»»»»»»»»»» type|uri|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|http|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|https|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|sip|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|sips|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|ftp|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|ftps|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|ldap|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|ldaps|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|file|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|udp|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|tcp|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|urn|
|»»»»»»»»»»»»»»»»»»»»»»»» type|whiteList|

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
                  "example": "https://api.nterprise.com/parts/7c0ac918-7a68-4044-8e36-7373460053d5"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#part",
          "x-nter-relation": "parts",
          "x-nter-model": "Part",
          "x-nter-callable": true,
          "description": "Defines the properties for a part",
          "required": [
            "label",
            "part_id",
            "customer",
            "manufacturer"
          ],
          "properties": {
            "part_id": {
              "type": "string",
              "description": "Unique identifier",
              "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
              "x-examples": [
                "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "label": {
              "type": "string",
              "example": "10\" iPad",
              "x-examples": [
                "10\" iPad"
              ],
              "description": "Label for the part"
            },
            "slug": {
              "type": "string",
              "example": "10-ipad",
              "x-examples": [
                "10-ipad"
              ],
              "description": "Auto-generated slug for the part"
            },
            "customer": {
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
                  "description": "Manufacturer part number",
                  "example": "602-3075-01",
                  "x-examples": [
                    "602-3075-01"
                  ]
                }
              },
              "allOf": [
                {
                  "x-id": "#manufacturer",
                  "x-nter-relation": "manufacturers",
                  "x-nter-model": "Manufacturer",
                  "x-nter-callable": true,
                  "description": "A Manufacturer of parts",
                  "required": [
                    "label",
                    "manufacturer_id"
                  ],
                  "properties": {
                    "manufacturer_id": {
                      "type": "string",
                      "description": "unique id",
                      "example": "99ec26f2-fa31-4768-b357-268c708fcda5",
                      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                    },
                    "label": {
                      "type": "string",
                      "example": "Apple Inc",
                      "x-examples": [
                        "Apple Inc"
                      ],
                      "description": "Label for the manufacturer"
                    },
                    "slug": {
                      "type": "string",
                      "example": "apple-inc",
                      "x-examples": [
                        "apple-inc"
                      ],
                      "description": "Auto-generated slug for the manufacturer"
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
                    "label": "Apple Inc",
                    "manufacturer_id": "003DffD7-Dff3-3E2A-Ae76-26E6C7aE5F7B",
                    "slug": "apple-inc",
                    "created": "1978-03-10T02:20:23.811Z",
                    "updated": "1940-10-01T09:10:03.934Z"
                  }
                }
              ]
            },
            "serial_prefix": {
              "type": "string",
              "example": "S",
              "x-examples": [
                "S"
              ],
              "description": "A serial number prefix for the part"
            },
            "input_filter": {
              "description": "Input Filters allow custom fields to be defined for entities",
              "type": "array",
              "items": {
                "type": "object",
                "description": "Input filter specification",
                "properties": {
                  "label": {
                    "type": "string",
                    "description": "Human readable name",
                    "example": "Serial Number",
                    "x-examples": [
                      "Serial Number",
                      "Asset tag",
                      "WiFi MAC address",
                      "Bluetooh MAC address"
                    ]
                  },
                  "key": {
                    "type": "string",
                    "description": "Slug used to store the property",
                    "example": "serial-number",
                    "x-examples": [
                      "serial-number",
                      "asset-tag",
                      "wifi-mac-address",
                      "bluetooh-mac-address"
                    ],
                    "readOnly": true,
                    "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                  },
                  "filters": {
                    "type": "array",
                    "description": "A Collection of filters applied to the field",
                    "items": {
                      "anyOf": [
                        {
                          "description": "This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set",
                          "type": "object",
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
                                  },
                                  "example": [
                                    "foo",
                                    "bar",
                                    "fizz",
                                    "buzz"
                                  ],
                                  "x-examples": [
                                    [
                                      "foo",
                                      "bar",
                                      "fizz",
                                      "buzz"
                                    ]
                                  ]
                                },
                                "check_case": {
                                  "type": "boolean",
                                  "description": "Perform a case sensitive match. By default will not match case",
                                  "default": false
                                },
                                "default": {
                                  "type": "string",
                                  "description": "If this is set and the value is not in the approved_list, set the value to this",
                                  "nullable": true,
                                  "example": "fizz",
                                  "x-examples": [
                                    "fizz"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Make the value camelCase",
                          "type": "object",
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
                          "description": "Filter to transform a value into a date",
                          "type": "object",
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
                              "description": "Date filter has no options",
                              "example": {},
                              "x-examples": [
                                {}
                              ]
                            }
                          }
                        },
                        {
                          "description": "Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:\n# The number 0 or 0.0\n# empty string ''\n# A boolean false\n# The word 'false'\n# ",
                          "type": "object",
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
                              "description": "empty filter has no options",
                              "example": {},
                              "x-examples": [
                                {}
                              ]
                            }
                          }
                        },
                        {
                          "description": "Filter to transform a value into a float. Non numeric characters (including comma) will be removed",
                          "type": "object",
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
                          "description": "Make the value kebab-case",
                          "type": "object",
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
                          "description": "Make the value lowercase",
                          "type": "object",
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
                          "description": "Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed",
                          "type": "object",
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
                              "description": "Number filter has no options",
                              "example": {},
                              "x-examples": [
                                {}
                              ]
                            }
                          }
                        },
                        {
                          "description": "Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.",
                          "type": "object",
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
                                  "description": "The prefix to add",
                                  "example": "MAN-",
                                  "x-examples": [
                                    "MAN-"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Make the value snake_case",
                          "type": "object",
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
                          "description": "Filter to transform a value into a string",
                          "type": "object",
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
                              "description": "String filter has no options",
                              "example": {},
                              "x-examples": [
                                {}
                              ]
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
                                  "description": "The suffix to add",
                                  "example": "-MAN",
                                  "x-examples": [
                                    "MAN"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Filter to trim whitespace from a value",
                          "type": "object",
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
                          "description": "Make the value UPPERCASE",
                          "type": "object",
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
                    "items": {
                      "anyOf": [
                        {
                          "description": "Validate number is between two values. By default, min and max are included",
                          "type": "object",
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
                                  "description": "Minimum value to check",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
                                },
                                "max": {
                                  "type": "number",
                                  "description": "The maximum value to check",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
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
                          "description": "Validate value does not match a list (black list)",
                          "type": "object",
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
                                  },
                                  "example": [
                                    "foo",
                                    "bar",
                                    "fizz",
                                    "buzz"
                                  ],
                                  "x-examples": [
                                    [
                                      "foo",
                                      "bar",
                                      "fizz",
                                      "buzz"
                                    ]
                                  ]
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
                          "description": "Validate string contains a value",
                          "type": "object",
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
                                  "description": "String must contain with this value",
                                  "example": "foo",
                                  "x-examples": [
                                    "foo"
                                  ]
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
                          "description": "Validate string is a correct email address",
                          "type": "object",
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
                          "description": "Validate string ends with a value",
                          "type": "object",
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
                                  "description": "String must end with this value",
                                  "example": "foo",
                                  "x-examples": [
                                    "foo"
                                  ]
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
                          "description": "Validate number equals a value",
                          "type": "object",
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
                                  "description": "The value to compare against",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
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
                          "description": "Validate number is greater than a value. By default, this will check if value is greater than or equals to",
                          "type": "object",
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
                                  "description": "The value to compare against",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
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
                          "description": "Validate string has a correct DNS records",
                          "type": "object",
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
                          "description": "Validate string matches an IP address format. Defaults to matching IPv4",
                          "type": "object",
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
                                  "example": [
                                    "IPv4"
                                  ],
                                  "x-examples": [
                                    [
                                      "IPv4"
                                    ]
                                  ],
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
                          "description": "Validate string is a certain length",
                          "type": "object",
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
                                  "description": "String must contain with this value",
                                  "example": "foo",
                                  "x-examples": [
                                    "foo"
                                  ]
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
                          "description": "Validate number is less than a value. By default, this will check if value is less than or equals to",
                          "type": "object",
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
                                  "description": "The value to compare against",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
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
                          "description": "Validate string matches an MAC address format",
                          "type": "object",
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
                          "description": "Validate string matches a regular expression",
                          "type": "object",
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
                                  "description": "Mask to validate against",
                                  "example": "^[a-z]$",
                                  "x-examples": [
                                    "^[a-z]$"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Validate string starts with a value",
                          "type": "object",
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
                                  "description": "String must start with this value",
                                  "example": "foo",
                                  "x-examples": [
                                    "foo"
                                  ]
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
                          "description": "Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.",
                          "type": "object",
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
                                  "description": "The step value",
                                  "example": 4,
                                  "x-examples": [
                                    4
                                  ]
                                },
                                "start": {
                                  "type": "integer",
                                  "description": "Start stepping at this value",
                                  "example": 0,
                                  "x-examples": [
                                    0
                                  ]
                                },
                                "end": {
                                  "type": "integer",
                                  "description": "End stepping at this value",
                                  "example": 16,
                                  "x-examples": [
                                    16
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Validate string matches an URI",
                          "type": "object",
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
                                  "example": [
                                    "http"
                                  ],
                                  "x-examples": [
                                    [
                                      "http"
                                    ]
                                  ],
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
                          "description": "Validate value matches a list (white list)",
                          "type": "object",
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
                                  },
                                  "example": [
                                    "foo",
                                    "bar",
                                    "fizz",
                                    "buzz"
                                  ],
                                  "x-examples": [
                                    [
                                      "foo",
                                      "bar",
                                      "fizz",
                                      "buzz"
                                    ]
                                  ]
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
              },
              "example": [
                {
                  "label": "Serial Number",
                  "key": "bluetooh-mac-address",
                  "filters": [
                    {
                      "type": "empty",
                      "options": {}
                    },
                    {
                      "type": "camel",
                      "options": {}
                    },
                    {
                      "type": "camel",
                      "options": {}
                    },
                    {
                      "type": "trim",
                      "options": {
                        "start": false,
                        "end": false
                      }
                    },
                    {
                      "type": "suffix",
                      "options": {
                        "suffix": "MAN"
                      }
                    }
                  ],
                  "validators": [
                    {
                      "type": "uri",
                      "options": {
                        "schemes": [
                          "http"
                        ]
                      }
                    }
                  ]
                },
                {
                  "label": "Asset tag",
                  "key": "wifi-mac-address",
                  "filters": [
                    {
                      "type": "trim",
                      "options": {
                        "start": true,
                        "end": false
                      }
                    },
                    {
                      "type": "prefix",
                      "options": {
                        "prefix": "MAN-"
                      }
                    }
                  ],
                  "validators": [
                    {
                      "type": "lessThan",
                      "options": {
                        "value": 42,
                        "precision": 4,
                        "include": true
                      }
                    },
                    {
                      "type": "hostname",
                      "options": {
                        "record_type": "HIP"
                      }
                    },
                    {
                      "type": "ends_with",
                      "options": {
                        "ends_with": "foo",
                        "check_case": false
                      }
                    }
                  ]
                }
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
            "label": "10\" iPad",
            "part_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
            "customer": {
              "label": "Zones Inc",
              "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
              "slug": "zones-inc",
              "external_platform": {
                "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
              },
              "allowed_statuses": [
                {
                  "status": "Reticulating Splines",
                  "category": "IN_PROGRESS"
                }
              ],
              "created": "1992-08-12T08:06:10.993Z",
              "updated": "2002-08-23T06:46:31.317Z"
            },
            "manufacturer": {
              "part_number": "602-3075-01",
              "label": "Apple Inc",
              "manufacturer_id": "0cF15DfC-586c-bd1b-ADeb-95Ce468beee7",
              "slug": "apple-inc",
              "created": "2016-07-11T22:09:20.498Z",
              "updated": "1942-12-06T05:12:04.745Z"
            },
            "slug": "10-ipad",
            "serial_prefix": "S",
            "input_filter": [
              {
                "label": "Bluetooh MAC address",
                "key": "asset-tag",
                "filters": [
                  {
                    "type": "date",
                    "options": {}
                  },
                  {
                    "type": "date",
                    "options": {}
                  },
                  {
                    "type": "allowed_list",
                    "options": {
                      "approved_values": [
                        "foo",
                        "bar",
                        "fizz",
                        "buzz"
                      ],
                      "check_case": false,
                      "default": "fizz"
                    }
                  },
                  {
                    "type": "number",
                    "options": {}
                  }
                ],
                "validators": [
                  {
                    "type": "lessThan",
                    "options": {
                      "value": 42,
                      "precision": 3,
                      "include": true
                    }
                  },
                  {
                    "type": "whiteList",
                    "options": {
                      "list": [
                        "foo",
                        "bar",
                        "fizz",
                        "buzz"
                      ],
                      "check_case": true
                    }
                  },
                  {
                    "type": "macAddress",
                    "options": {}
                  },
                  {
                    "type": "macAddress",
                    "options": {}
                  },
                  {
                    "type": "contains",
                    "options": {
                      "contains": "foo",
                      "check_case": true
                    }
                  }
                ]
              }
            ],
            "created": "1999-04-30T19:19:03.277Z",
            "updated": "1971-01-10T16:33:44.126Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="createpart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A part response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|

<h3 id="createpart-responseschema">Response Schema</h3>

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

## fetchPartById

<a id="opIdfetchPartById"></a>

`GET /parts/:part_id`

*Fetches a part  by Id*

Fetch Part 

<h3 id="fetchpartbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part_id|path|string|true|Id for the part|

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
                  "example": "https://api.nterprise.com/parts/7c0ac918-7a68-4044-8e36-7373460053d5"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#part",
          "x-nter-relation": "parts",
          "x-nter-model": "Part",
          "x-nter-callable": true,
          "description": "Defines the properties for a part",
          "required": [
            "label",
            "part_id",
            "customer",
            "manufacturer"
          ],
          "properties": {
            "part_id": {
              "type": "string",
              "description": "Unique identifier",
              "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
              "x-examples": [
                "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "label": {
              "type": "string",
              "example": "10\" iPad",
              "x-examples": [
                "10\" iPad"
              ],
              "description": "Label for the part"
            },
            "slug": {
              "type": "string",
              "example": "10-ipad",
              "x-examples": [
                "10-ipad"
              ],
              "description": "Auto-generated slug for the part"
            },
            "customer": {
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
                  "description": "Manufacturer part number",
                  "example": "602-3075-01",
                  "x-examples": [
                    "602-3075-01"
                  ]
                }
              },
              "allOf": [
                {
                  "x-id": "#manufacturer",
                  "x-nter-relation": "manufacturers",
                  "x-nter-model": "Manufacturer",
                  "x-nter-callable": true,
                  "description": "A Manufacturer of parts",
                  "required": [
                    "label",
                    "manufacturer_id"
                  ],
                  "properties": {
                    "manufacturer_id": {
                      "type": "string",
                      "description": "unique id",
                      "example": "99ec26f2-fa31-4768-b357-268c708fcda5",
                      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                    },
                    "label": {
                      "type": "string",
                      "example": "Apple Inc",
                      "x-examples": [
                        "Apple Inc"
                      ],
                      "description": "Label for the manufacturer"
                    },
                    "slug": {
                      "type": "string",
                      "example": "apple-inc",
                      "x-examples": [
                        "apple-inc"
                      ],
                      "description": "Auto-generated slug for the manufacturer"
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
                    "label": "Apple Inc",
                    "manufacturer_id": "003DffD7-Dff3-3E2A-Ae76-26E6C7aE5F7B",
                    "slug": "apple-inc",
                    "created": "1978-03-10T02:20:23.811Z",
                    "updated": "1940-10-01T09:10:03.934Z"
                  }
                }
              ]
            },
            "serial_prefix": {
              "type": "string",
              "example": "S",
              "x-examples": [
                "S"
              ],
              "description": "A serial number prefix for the part"
            },
            "input_filter": {
              "description": "Input Filters allow custom fields to be defined for entities",
              "type": "array",
              "items": {
                "type": "object",
                "description": "Input filter specification",
                "properties": {
                  "label": {
                    "type": "string",
                    "description": "Human readable name",
                    "example": "Serial Number",
                    "x-examples": [
                      "Serial Number",
                      "Asset tag",
                      "WiFi MAC address",
                      "Bluetooh MAC address"
                    ]
                  },
                  "key": {
                    "type": "string",
                    "description": "Slug used to store the property",
                    "example": "serial-number",
                    "x-examples": [
                      "serial-number",
                      "asset-tag",
                      "wifi-mac-address",
                      "bluetooh-mac-address"
                    ],
                    "readOnly": true,
                    "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                  },
                  "filters": {
                    "type": "array",
                    "description": "A Collection of filters applied to the field",
                    "items": {
                      "anyOf": [
                        {
                          "description": "This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set",
                          "type": "object",
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
                                  },
                                  "example": [
                                    "foo",
                                    "bar",
                                    "fizz",
                                    "buzz"
                                  ],
                                  "x-examples": [
                                    [
                                      "foo",
                                      "bar",
                                      "fizz",
                                      "buzz"
                                    ]
                                  ]
                                },
                                "check_case": {
                                  "type": "boolean",
                                  "description": "Perform a case sensitive match. By default will not match case",
                                  "default": false
                                },
                                "default": {
                                  "type": "string",
                                  "description": "If this is set and the value is not in the approved_list, set the value to this",
                                  "nullable": true,
                                  "example": "fizz",
                                  "x-examples": [
                                    "fizz"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Make the value camelCase",
                          "type": "object",
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
                          "description": "Filter to transform a value into a date",
                          "type": "object",
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
                              "description": "Date filter has no options",
                              "example": {},
                              "x-examples": [
                                {}
                              ]
                            }
                          }
                        },
                        {
                          "description": "Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:\n# The number 0 or 0.0\n# empty string ''\n# A boolean false\n# The word 'false'\n# ",
                          "type": "object",
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
                              "description": "empty filter has no options",
                              "example": {},
                              "x-examples": [
                                {}
                              ]
                            }
                          }
                        },
                        {
                          "description": "Filter to transform a value into a float. Non numeric characters (including comma) will be removed",
                          "type": "object",
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
                          "description": "Make the value kebab-case",
                          "type": "object",
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
                          "description": "Make the value lowercase",
                          "type": "object",
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
                          "description": "Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed",
                          "type": "object",
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
                              "description": "Number filter has no options",
                              "example": {},
                              "x-examples": [
                                {}
                              ]
                            }
                          }
                        },
                        {
                          "description": "Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.",
                          "type": "object",
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
                                  "description": "The prefix to add",
                                  "example": "MAN-",
                                  "x-examples": [
                                    "MAN-"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Make the value snake_case",
                          "type": "object",
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
                          "description": "Filter to transform a value into a string",
                          "type": "object",
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
                              "description": "String filter has no options",
                              "example": {},
                              "x-examples": [
                                {}
                              ]
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
                                  "description": "The suffix to add",
                                  "example": "-MAN",
                                  "x-examples": [
                                    "MAN"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Filter to trim whitespace from a value",
                          "type": "object",
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
                          "description": "Make the value UPPERCASE",
                          "type": "object",
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
                    "items": {
                      "anyOf": [
                        {
                          "description": "Validate number is between two values. By default, min and max are included",
                          "type": "object",
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
                                  "description": "Minimum value to check",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
                                },
                                "max": {
                                  "type": "number",
                                  "description": "The maximum value to check",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
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
                          "description": "Validate value does not match a list (black list)",
                          "type": "object",
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
                                  },
                                  "example": [
                                    "foo",
                                    "bar",
                                    "fizz",
                                    "buzz"
                                  ],
                                  "x-examples": [
                                    [
                                      "foo",
                                      "bar",
                                      "fizz",
                                      "buzz"
                                    ]
                                  ]
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
                          "description": "Validate string contains a value",
                          "type": "object",
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
                                  "description": "String must contain with this value",
                                  "example": "foo",
                                  "x-examples": [
                                    "foo"
                                  ]
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
                          "description": "Validate string is a correct email address",
                          "type": "object",
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
                          "description": "Validate string ends with a value",
                          "type": "object",
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
                                  "description": "String must end with this value",
                                  "example": "foo",
                                  "x-examples": [
                                    "foo"
                                  ]
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
                          "description": "Validate number equals a value",
                          "type": "object",
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
                                  "description": "The value to compare against",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
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
                          "description": "Validate number is greater than a value. By default, this will check if value is greater than or equals to",
                          "type": "object",
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
                                  "description": "The value to compare against",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
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
                          "description": "Validate string has a correct DNS records",
                          "type": "object",
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
                          "description": "Validate string matches an IP address format. Defaults to matching IPv4",
                          "type": "object",
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
                                  "example": [
                                    "IPv4"
                                  ],
                                  "x-examples": [
                                    [
                                      "IPv4"
                                    ]
                                  ],
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
                          "description": "Validate string is a certain length",
                          "type": "object",
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
                                  "description": "String must contain with this value",
                                  "example": "foo",
                                  "x-examples": [
                                    "foo"
                                  ]
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
                          "description": "Validate number is less than a value. By default, this will check if value is less than or equals to",
                          "type": "object",
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
                                  "description": "The value to compare against",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
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
                          "description": "Validate string matches an MAC address format",
                          "type": "object",
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
                          "description": "Validate string matches a regular expression",
                          "type": "object",
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
                                  "description": "Mask to validate against",
                                  "example": "^[a-z]$",
                                  "x-examples": [
                                    "^[a-z]$"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Validate string starts with a value",
                          "type": "object",
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
                                  "description": "String must start with this value",
                                  "example": "foo",
                                  "x-examples": [
                                    "foo"
                                  ]
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
                          "description": "Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.",
                          "type": "object",
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
                                  "description": "The step value",
                                  "example": 4,
                                  "x-examples": [
                                    4
                                  ]
                                },
                                "start": {
                                  "type": "integer",
                                  "description": "Start stepping at this value",
                                  "example": 0,
                                  "x-examples": [
                                    0
                                  ]
                                },
                                "end": {
                                  "type": "integer",
                                  "description": "End stepping at this value",
                                  "example": 16,
                                  "x-examples": [
                                    16
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Validate string matches an URI",
                          "type": "object",
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
                                  "example": [
                                    "http"
                                  ],
                                  "x-examples": [
                                    [
                                      "http"
                                    ]
                                  ],
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
                          "description": "Validate value matches a list (white list)",
                          "type": "object",
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
                                  },
                                  "example": [
                                    "foo",
                                    "bar",
                                    "fizz",
                                    "buzz"
                                  ],
                                  "x-examples": [
                                    [
                                      "foo",
                                      "bar",
                                      "fizz",
                                      "buzz"
                                    ]
                                  ]
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
              },
              "example": [
                {
                  "label": "Serial Number",
                  "key": "bluetooh-mac-address",
                  "filters": [
                    {
                      "type": "empty",
                      "options": {}
                    },
                    {
                      "type": "camel",
                      "options": {}
                    },
                    {
                      "type": "camel",
                      "options": {}
                    },
                    {
                      "type": "trim",
                      "options": {
                        "start": false,
                        "end": false
                      }
                    },
                    {
                      "type": "suffix",
                      "options": {
                        "suffix": "MAN"
                      }
                    }
                  ],
                  "validators": [
                    {
                      "type": "uri",
                      "options": {
                        "schemes": [
                          "http"
                        ]
                      }
                    }
                  ]
                },
                {
                  "label": "Asset tag",
                  "key": "wifi-mac-address",
                  "filters": [
                    {
                      "type": "trim",
                      "options": {
                        "start": true,
                        "end": false
                      }
                    },
                    {
                      "type": "prefix",
                      "options": {
                        "prefix": "MAN-"
                      }
                    }
                  ],
                  "validators": [
                    {
                      "type": "lessThan",
                      "options": {
                        "value": 42,
                        "precision": 4,
                        "include": true
                      }
                    },
                    {
                      "type": "hostname",
                      "options": {
                        "record_type": "HIP"
                      }
                    },
                    {
                      "type": "ends_with",
                      "options": {
                        "ends_with": "foo",
                        "check_case": false
                      }
                    }
                  ]
                }
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
            "label": "10\" iPad",
            "part_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
            "customer": {
              "label": "Zones Inc",
              "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
              "slug": "zones-inc",
              "external_platform": {
                "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
              },
              "allowed_statuses": [
                {
                  "status": "Reticulating Splines",
                  "category": "IN_PROGRESS"
                }
              ],
              "created": "1992-08-12T08:06:10.993Z",
              "updated": "2002-08-23T06:46:31.317Z"
            },
            "manufacturer": {
              "part_number": "602-3075-01",
              "label": "Apple Inc",
              "manufacturer_id": "0cF15DfC-586c-bd1b-ADeb-95Ce468beee7",
              "slug": "apple-inc",
              "created": "2016-07-11T22:09:20.498Z",
              "updated": "1942-12-06T05:12:04.745Z"
            },
            "slug": "10-ipad",
            "serial_prefix": "S",
            "input_filter": [
              {
                "label": "Bluetooh MAC address",
                "key": "asset-tag",
                "filters": [
                  {
                    "type": "date",
                    "options": {}
                  },
                  {
                    "type": "date",
                    "options": {}
                  },
                  {
                    "type": "allowed_list",
                    "options": {
                      "approved_values": [
                        "foo",
                        "bar",
                        "fizz",
                        "buzz"
                      ],
                      "check_case": false,
                      "default": "fizz"
                    }
                  },
                  {
                    "type": "number",
                    "options": {}
                  }
                ],
                "validators": [
                  {
                    "type": "lessThan",
                    "options": {
                      "value": 42,
                      "precision": 3,
                      "include": true
                    }
                  },
                  {
                    "type": "whiteList",
                    "options": {
                      "list": [
                        "foo",
                        "bar",
                        "fizz",
                        "buzz"
                      ],
                      "check_case": true
                    }
                  },
                  {
                    "type": "macAddress",
                    "options": {}
                  },
                  {
                    "type": "macAddress",
                    "options": {}
                  },
                  {
                    "type": "contains",
                    "options": {
                      "contains": "foo",
                      "check_case": true
                    }
                  }
                ]
              }
            ],
            "created": "1999-04-30T19:19:03.277Z",
            "updated": "1971-01-10T16:33:44.126Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="fetchpartbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A part response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchpartbyid-responseschema">Response Schema</h3>

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

## updatePart

<a id="opIdupdatePart"></a>

`PUT /parts/:part_id`

*Updates a part *

Updates a part 

> Body parameter

```json
{
  "type": "object",
  "required": [
    "label",
    "customer",
    "manufacturer",
    "input_filter"
  ],
  "properties": {
    "label": {
      "type": "string",
      "example": "10\" iPad",
      "x-examples": [
        "10\" iPad"
      ],
      "description": "Label for the part"
    },
    "customer": {
      "type": "object",
      "required": [
        "customer_id"
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
        }
      }
    },
    "manufacturer": {
      "type": "object",
      "required": [
        "manufacturer_id",
        "part_number"
      ],
      "properties": {
        "manufacturer_id": {
          "type": "string",
          "description": "unique id",
          "example": "99ec26f2-fa31-4768-b357-268c708fcda5",
          "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
        },
        "part_number": {
          "type": "string",
          "description": "Manufacturer part number",
          "example": "602-3075-01",
          "x-examples": [
            "602-3075-01"
          ]
        }
      }
    },
    "serial_prefix": {
      "type": "string",
      "example": "S",
      "x-examples": [
        "S"
      ],
      "description": "A serial number prefix for the part"
    },
    "input_filter": {
      "type": "array",
      "items": {
        "description": "Input Filters allow custom fields to be defined for entities",
        "type": "array",
        "items": {
          "type": "object",
          "description": "Input filter specification",
          "properties": {
            "label": {
              "type": "string",
              "description": "Human readable name",
              "example": "Serial Number",
              "x-examples": [
                "Serial Number",
                "Asset tag",
                "WiFi MAC address",
                "Bluetooh MAC address"
              ]
            },
            "key": {
              "type": "string",
              "description": "Slug used to store the property",
              "example": "serial-number",
              "x-examples": [
                "serial-number",
                "asset-tag",
                "wifi-mac-address",
                "bluetooh-mac-address"
              ],
              "readOnly": true,
              "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
            },
            "filters": {
              "type": "array",
              "description": "A Collection of filters applied to the field",
              "items": {
                "anyOf": [
                  {
                    "description": "This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set",
                    "type": "object",
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
                            },
                            "example": [
                              "foo",
                              "bar",
                              "fizz",
                              "buzz"
                            ],
                            "x-examples": [
                              [
                                "foo",
                                "bar",
                                "fizz",
                                "buzz"
                              ]
                            ]
                          },
                          "check_case": {
                            "type": "boolean",
                            "description": "Perform a case sensitive match. By default will not match case",
                            "default": false
                          },
                          "default": {
                            "type": "string",
                            "description": "If this is set and the value is not in the approved_list, set the value to this",
                            "nullable": true,
                            "example": "fizz",
                            "x-examples": [
                              "fizz"
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "description": "Make the value camelCase",
                    "type": "object",
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
                    "description": "Filter to transform a value into a date",
                    "type": "object",
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
                        "description": "Date filter has no options",
                        "example": {},
                        "x-examples": [
                          {}
                        ]
                      }
                    }
                  },
                  {
                    "description": "Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:\n# The number 0 or 0.0\n# empty string ''\n# A boolean false\n# The word 'false'\n# ",
                    "type": "object",
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
                        "description": "empty filter has no options",
                        "example": {},
                        "x-examples": [
                          {}
                        ]
                      }
                    }
                  },
                  {
                    "description": "Filter to transform a value into a float. Non numeric characters (including comma) will be removed",
                    "type": "object",
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
                    "description": "Make the value kebab-case",
                    "type": "object",
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
                    "description": "Make the value lowercase",
                    "type": "object",
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
                    "description": "Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed",
                    "type": "object",
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
                        "description": "Number filter has no options",
                        "example": {},
                        "x-examples": [
                          {}
                        ]
                      }
                    }
                  },
                  {
                    "description": "Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.",
                    "type": "object",
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
                            "description": "The prefix to add",
                            "example": "MAN-",
                            "x-examples": [
                              "MAN-"
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "description": "Make the value snake_case",
                    "type": "object",
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
                    "description": "Filter to transform a value into a string",
                    "type": "object",
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
                        "description": "String filter has no options",
                        "example": {},
                        "x-examples": [
                          {}
                        ]
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
                            "description": "The suffix to add",
                            "example": "-MAN",
                            "x-examples": [
                              "MAN"
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "description": "Filter to trim whitespace from a value",
                    "type": "object",
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
                    "description": "Make the value UPPERCASE",
                    "type": "object",
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
              "items": {
                "anyOf": [
                  {
                    "description": "Validate number is between two values. By default, min and max are included",
                    "type": "object",
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
                            "description": "Minimum value to check",
                            "example": 42,
                            "x-examples": [
                              42
                            ]
                          },
                          "max": {
                            "type": "number",
                            "description": "The maximum value to check",
                            "example": 42,
                            "x-examples": [
                              42
                            ]
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
                    "description": "Validate value does not match a list (black list)",
                    "type": "object",
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
                            },
                            "example": [
                              "foo",
                              "bar",
                              "fizz",
                              "buzz"
                            ],
                            "x-examples": [
                              [
                                "foo",
                                "bar",
                                "fizz",
                                "buzz"
                              ]
                            ]
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
                    "description": "Validate string contains a value",
                    "type": "object",
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
                            "description": "String must contain with this value",
                            "example": "foo",
                            "x-examples": [
                              "foo"
                            ]
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
                    "description": "Validate string is a correct email address",
                    "type": "object",
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
                    "description": "Validate string ends with a value",
                    "type": "object",
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
                            "description": "String must end with this value",
                            "example": "foo",
                            "x-examples": [
                              "foo"
                            ]
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
                    "description": "Validate number equals a value",
                    "type": "object",
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
                            "description": "The value to compare against",
                            "example": 42,
                            "x-examples": [
                              42
                            ]
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
                    "description": "Validate number is greater than a value. By default, this will check if value is greater than or equals to",
                    "type": "object",
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
                            "description": "The value to compare against",
                            "example": 42,
                            "x-examples": [
                              42
                            ]
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
                    "description": "Validate string has a correct DNS records",
                    "type": "object",
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
                    "description": "Validate string matches an IP address format. Defaults to matching IPv4",
                    "type": "object",
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
                            "example": [
                              "IPv4"
                            ],
                            "x-examples": [
                              [
                                "IPv4"
                              ]
                            ],
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
                    "description": "Validate string is a certain length",
                    "type": "object",
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
                            "description": "String must contain with this value",
                            "example": "foo",
                            "x-examples": [
                              "foo"
                            ]
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
                    "description": "Validate number is less than a value. By default, this will check if value is less than or equals to",
                    "type": "object",
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
                            "description": "The value to compare against",
                            "example": 42,
                            "x-examples": [
                              42
                            ]
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
                    "description": "Validate string matches an MAC address format",
                    "type": "object",
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
                    "description": "Validate string matches a regular expression",
                    "type": "object",
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
                            "description": "Mask to validate against",
                            "example": "^[a-z]$",
                            "x-examples": [
                              "^[a-z]$"
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "description": "Validate string starts with a value",
                    "type": "object",
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
                            "description": "String must start with this value",
                            "example": "foo",
                            "x-examples": [
                              "foo"
                            ]
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
                    "description": "Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.",
                    "type": "object",
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
                            "description": "The step value",
                            "example": 4,
                            "x-examples": [
                              4
                            ]
                          },
                          "start": {
                            "type": "integer",
                            "description": "Start stepping at this value",
                            "example": 0,
                            "x-examples": [
                              0
                            ]
                          },
                          "end": {
                            "type": "integer",
                            "description": "End stepping at this value",
                            "example": 16,
                            "x-examples": [
                              16
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "description": "Validate string matches an URI",
                    "type": "object",
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
                            "example": [
                              "http"
                            ],
                            "x-examples": [
                              [
                                "http"
                              ]
                            ],
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
                    "description": "Validate value matches a list (white list)",
                    "type": "object",
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
                            },
                            "example": [
                              "foo",
                              "bar",
                              "fizz",
                              "buzz"
                            ],
                            "x-examples": [
                              [
                                "foo",
                                "bar",
                                "fizz",
                                "buzz"
                              ]
                            ]
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
        },
        "example": [
          {
            "label": "Serial Number",
            "key": "bluetooh-mac-address",
            "filters": [
              {
                "type": "empty",
                "options": {}
              },
              {
                "type": "camel",
                "options": {}
              },
              {
                "type": "camel",
                "options": {}
              },
              {
                "type": "trim",
                "options": {
                  "start": false,
                  "end": false
                }
              },
              {
                "type": "suffix",
                "options": {
                  "suffix": "MAN"
                }
              }
            ],
            "validators": [
              {
                "type": "uri",
                "options": {
                  "schemes": [
                    "http"
                  ]
                }
              }
            ]
          },
          {
            "label": "Asset tag",
            "key": "wifi-mac-address",
            "filters": [
              {
                "type": "trim",
                "options": {
                  "start": true,
                  "end": false
                }
              },
              {
                "type": "prefix",
                "options": {
                  "prefix": "MAN-"
                }
              }
            ],
            "validators": [
              {
                "type": "lessThan",
                "options": {
                  "value": 42,
                  "precision": 4,
                  "include": true
                }
              },
              {
                "type": "hostname",
                "options": {
                  "record_type": "HIP"
                }
              },
              {
                "type": "ends_with",
                "options": {
                  "ends_with": "foo",
                  "check_case": false
                }
              }
            ]
          }
        ]
      }
    }
  }
}
```

<h3 id="updatepart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part_id|path|string|true|Id for the part|
|label|body|string|true|Label for the part|
|customer|body|object|true|none|
|» customer_id|body|string|true|Customer identifier|
|manufacturer|body|object|true|none|
|» manufacturer_id|body|string|true|unique id|
|» part_number|body|string|true|Manufacturer part number|
|serial_prefix|body|string|false|A serial number prefix for the part|
|input_filter|body|[array]|true|none|
|» label|body|string|false|Human readable name|
|» key|body|string|false|Slug used to store the property|
|» filters|body|[anyOf]|false|A Collection of filters applied to the field|
|»» *anonymous*|body|object|false|This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set|
|»»» type|body|string|true|none|
|»»» options|body|object|true|none|
|»»»» approved_values|body|[string]|true|The list of approved values|
|»»»» check_case|body|boolean|false|Perform a case sensitive match. By default will not match case|
|»»»» default|body|string\|null|false|If this is set and the value is not in the approved_list, set the value to this|
|»»» *anonymous*|body|object|false|Make the value camelCase|
|»»»» type|body|string|true|none|
|»»»» options|body|object|true|This filter has no options|
|»»» *anonymous*|body|object|false|Filter to transform a value into a date|
|»»»» type|body|string|true|none|
|»»»» options|body|object|true|Date filter has no options|
|»»» *anonymous*|body|object|false|Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:|
|»»»» type|body|string|true|none|
|»»»» options|body|object|true|empty filter has no options|
|»»» *anonymous*|body|object|false|Filter to transform a value into a float. Non numeric characters (including comma) will be removed|
|»»»» type|body|string|true|none|
|»»»» options|body|object|true|none|
|»»»»» precision|body|integer|false|How many decimal places to preserve|
|»»»» *anonymous*|body|object|false|Make the value kebab-case|
|»»»»» type|body|string|true|none|
|»»»»» options|body|object|true|This filter has no options|
|»»»» *anonymous*|body|object|false|Make the value lowercase|
|»»»»» type|body|string|true|none|
|»»»»» options|body|object|true|This filter has no options|
|»»»» *anonymous*|body|object|false|Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed|
|»»»»» type|body|string|true|none|
|»»»»» options|body|object|true|Number filter has no options|
|»»»» *anonymous*|body|object|false|Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.|
|»»»»» type|body|string|true|none|
|»»»»» options|body|object|true|none|
|»»»»»» prefix|body|string|true|The prefix to add|
|»»»»» *anonymous*|body|object|false|Make the value snake_case|
|»»»»»» type|body|string|true|none|
|»»»»»» options|body|object|true|This filter has no options|
|»»»»» *anonymous*|body|object|false|Filter to transform a value into a string|
|»»»»»» type|body|string|true|none|
|»»»»»» options|body|object|true|String filter has no options|
|»»»»» *anonymous*|body|object|false|Add a suffix to the start of a string. If the string already start with the suffix, it will not append.|
|»»»»»» type|body|string|true|none|
|»»»»»» options|body|object|true|none|
|»»»»»»» suffix|body|string|true|The suffix to add|
|»»»»»» *anonymous*|body|object|false|Filter to trim whitespace from a value|
|»»»»»»» type|body|string|true|none|
|»»»»»»» options|body|object|true|By default will trim from the start and end|
|»»»»»»»» start|body|boolean|false|Remove white space from the start of the string|
|»»»»»»»» end|body|boolean|false|Remove white space from the end of the string|
|»»»»»»» *anonymous*|body|object|false|Make the value UPPERCASE|
|»»»»»»»» type|body|string|true|none|
|»»»»»»»» options|body|object|true|This filter has no options|
|»»»»»»» validators|body|[anyOf]|false|A set of validators to use for this field|
|»»»»»»»» *anonymous*|body|object|false|Validate number is between two values. By default, min and max are included|
|»»»»»»»»» type|body|string|true|none|
|»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»» min|body|number|true|Minimum value to check|
|»»»»»»»»»» max|body|number|true|The maximum value to check|
|»»»»»»»»»» precision|body|integer|false|When number is a float, this will set the decimal precision|
|»»»»»»»»»» include|body|boolean|false|Include the value in the check|
|»»»»»»»»» *anonymous*|body|object|false|Validate value does not match a list (black list)|
|»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»» list|body|[string]|true|The list of approved values|
|»»»»»»»»»»» check_case|body|boolean|false|Perform a case sensitive match. By default will not match case|
|»»»»»»»»»» *anonymous*|body|object|false|Validate string contains a value|
|»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»» contains|body|string|true|String must contain with this value|
|»»»»»»»»»»»» check_case|body|boolean|false|Perform a case sensitive match. By default will not match case|
|»»»»»»»»»»» *anonymous*|body|object|false|Validate string is a correct email address|
|»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»» strict|body|boolean|false|Enforce strict standards from ARPA. This will enforce the length of the string|
|»»»»»»»»»»»»» lookup|body|boolean|false|Look up the host name and check if it has a valid MX record|
|»»»»»»»»»»»» *anonymous*|body|object|false|Validate string ends with a value|
|»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»» ends_with|body|string|true|String must end with this value|
|»»»»»»»»»»»»»» check_case|body|boolean|false|Perform a case sensitive match. By default will not match case|
|»»»»»»»»»»»»» *anonymous*|body|object|false|Validate number equals a value|
|»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»» value|body|number|true|The value to compare against|
|»»»»»»»»»»»»»»» precision|body|integer|false|When value is a float, this will set the decimal precision|
|»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate number is greater than a value. By default, this will check if value is greater than or equals to|
|»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»» value|body|number|true|The value to compare against|
|»»»»»»»»»»»»»»»» precision|body|integer|false|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»» include|body|boolean|false|Include the value in the check|
|»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string has a correct DNS records|
|»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»» record_type|body|string|false|DNS record type to validate|
|»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string matches an IP address format. Defaults to matching IPv4|
|»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»» versions|body|[string]|false|IP Version to match against|
|»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string is a certain length|
|»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»» length|body|string|true|String must contain with this value|
|»»»»»»»»»»»»»»»»»»» operator|body|string|false|Which type of length comparision to make|
|»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate number is less than a value. By default, this will check if value is less than or equals to|
|»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»»» value|body|number|true|The value to compare against|
|»»»»»»»»»»»»»»»»»»»» precision|body|integer|false|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»»»»» include|body|boolean|false|Include the value in the check|
|»»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string matches an MAC address format|
|»»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»»» options|body|object|true|This validator has no options|
|»»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string matches a regular expression|
|»»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»»»» mask|body|string|true|Mask to validate against|
|»»»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string starts with a value|
|»»»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»»»»» starts_with|body|string|true|String must start with this value|
|»»»»»»»»»»»»»»»»»»»»»» check_case|body|boolean|false|Perform a case sensitive match. By default will not match case|
|»»»»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.|
|»»»»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»»»»»» step|body|number|true|The step value|
|»»»»»»»»»»»»»»»»»»»»»»» start|body|integer|false|Start stepping at this value|
|»»»»»»»»»»»»»»»»»»»»»»» end|body|integer|false|End stepping at this value|
|»»»»»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate string matches an URI|
|»»»»»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|body|[string]|false|Schemes to match. By default all are matched|
|»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|body|object|false|Validate value matches a list (white list)|
|»»»»»»»»»»»»»»»»»»»»»»»» type|body|string|true|none|
|»»»»»»»»»»»»»»»»»»»»»»»» options|body|object|true|none|
|»»»»»»»»»»»»»»»»»»»»»»»»» list|body|[string]|true|The list of approved values|
|»»»»»»»»»»»»»»»»»»»»»»»»» check_case|body|boolean|false|Perform a case sensitive match. By default will not match case|

#### Detailed descriptions

**»»» *anonymous***: Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:
# The number 0 or 0.0
# empty string ''
# A boolean false
# The word 'false'
#

#### Enumerated Values

|Parameter|Value|
|---|---|
|»»» type|allowed_list|
|»»»» type|camel|
|»»»» type|date|
|»»»» type|empty|
|»»»» type|float|
|»»»»» type|kebab|
|»»»»» type|lower|
|»»»»» type|number|
|»»»»» type|prefix|
|»»»»»» type|snake|
|»»»»»» type|string|
|»»»»»» type|suffix|
|»»»»»»» type|trim|
|»»»»»»»» type|upper|
|»»»»»»»»» type|greater_than|
|»»»»»»»»»» type|white_list|
|»»»»»»»»»»» type|contains|
|»»»»»»»»»»»» type|email_address|
|»»»»»»»»»»»»» type|ends_with|
|»»»»»»»»»»»»»» type|equals|
|»»»»»»»»»»»»»»» type|greater_than|
|»»»»»»»»»»»»»»»» type|hostname|
|»»»»»»»»»»»»»»»»» record_type|A|
|»»»»»»»»»»»»»»»»» record_type|AAAA|
|»»»»»»»»»»»»»»»»» record_type|AFSDB|
|»»»»»»»»»»»»»»»»» record_type|APL|
|»»»»»»»»»»»»»»»»» record_type|CAA|
|»»»»»»»»»»»»»»»»» record_type|CDNSKEY|
|»»»»»»»»»»»»»»»»» record_type|CDS|
|»»»»»»»»»»»»»»»»» record_type|CERT|
|»»»»»»»»»»»»»»»»» record_type|CNAME|
|»»»»»»»»»»»»»»»»» record_type|CSYNC|
|»»»»»»»»»»»»»»»»» record_type|DHCID|
|»»»»»»»»»»»»»»»»» record_type|DLV|
|»»»»»»»»»»»»»»»»» record_type|DNAME|
|»»»»»»»»»»»»»»»»» record_type|DNSKEY|
|»»»»»»»»»»»»»»»»» record_type|DS|
|»»»»»»»»»»»»»»»»» record_type|HIP|
|»»»»»»»»»»»»»»»»» record_type|IPSECKEY|
|»»»»»»»»»»»»»»»»» record_type|KEY|
|»»»»»»»»»»»»»»»»» record_type|KX|
|»»»»»»»»»»»»»»»»» record_type|LOC|
|»»»»»»»»»»»»»»»»» record_type|MX|
|»»»»»»»»»»»»»»»»» record_type|NAPTR|
|»»»»»»»»»»»»»»»»» record_type|NS|
|»»»»»»»»»»»»»»»»» record_type|NSEC|
|»»»»»»»»»»»»»»»»» record_type|NSEC3|
|»»»»»»»»»»»»»»»»» record_type|NSEC3PARAM|
|»»»»»»»»»»»»»»»»» record_type|OPENPGPKEY|
|»»»»»»»»»»»»»»»»» record_type|PTR|
|»»»»»»»»»»»»»»»»» record_type|RRSIG|
|»»»»»»»»»»»»»»»»» record_type|RP|
|»»»»»»»»»»»»»»»»» record_type|SIG|
|»»»»»»»»»»»»»»»»» record_type|SMIMEA|
|»»»»»»»»»»»»»»»»» record_type|SOA|
|»»»»»»»»»»»»»»»»» record_type|SRV|
|»»»»»»»»»»»»»»»»» record_type|SSHFP|
|»»»»»»»»»»»»»»»»» record_type|TA|
|»»»»»»»»»»»»»»»»» record_type|TKEY|
|»»»»»»»»»»»»»»»»» record_type|TLSA|
|»»»»»»»»»»»»»»»»» record_type|TSIG|
|»»»»»»»»»»»»»»»»» record_type|TXT|
|»»»»»»»»»»»»»»»»» record_type|URI|
|»»»»»»»»»»»»»»»»» type|ipAddress|
|»»»»»»»»»»»»»»»»»» versions|IPv4|
|»»»»»»»»»»»»»»»»»» versions|IPv6|
|»»»»»»»»»»»»»»»»»» type|length|
|»»»»»»»»»»»»»»»»»»» operator|equals|
|»»»»»»»»»»»»»»»»»»» operator|less_than|
|»»»»»»»»»»»»»»»»»»» operator|less_than_equals|
|»»»»»»»»»»»»»»»»»»» operator|greater_than|
|»»»»»»»»»»»»»»»»»»» operator|greater_than_equals|
|»»»»»»»»»»»»»»»»»»» type|lessThan|
|»»»»»»»»»»»»»»»»»»»» type|macAddress|
|»»»»»»»»»»»»»»»»»»»» type|mask|
|»»»»»»»»»»»»»»»»»»»»» type|startsWith|
|»»»»»»»»»»»»»»»»»»»»»» type|step|
|»»»»»»»»»»»»»»»»»»»»»»» type|uri|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|http|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|https|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|sip|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|sips|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|ftp|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|ftps|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|ldap|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|ldaps|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|file|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|udp|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|tcp|
|»»»»»»»»»»»»»»»»»»»»»»»» schemes|urn|
|»»»»»»»»»»»»»»»»»»»»»»»» type|whiteList|

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
                  "example": "https://api.nterprise.com/parts/7c0ac918-7a68-4044-8e36-7373460053d5"
                }
              }
            }
          }
        }
      },
      "allOf": [
        {
          "x-id": "#part",
          "x-nter-relation": "parts",
          "x-nter-model": "Part",
          "x-nter-callable": true,
          "description": "Defines the properties for a part",
          "required": [
            "label",
            "part_id",
            "customer",
            "manufacturer"
          ],
          "properties": {
            "part_id": {
              "type": "string",
              "description": "Unique identifier",
              "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
              "x-examples": [
                "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
              ],
              "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            },
            "label": {
              "type": "string",
              "example": "10\" iPad",
              "x-examples": [
                "10\" iPad"
              ],
              "description": "Label for the part"
            },
            "slug": {
              "type": "string",
              "example": "10-ipad",
              "x-examples": [
                "10-ipad"
              ],
              "description": "Auto-generated slug for the part"
            },
            "customer": {
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
                  "description": "Manufacturer part number",
                  "example": "602-3075-01",
                  "x-examples": [
                    "602-3075-01"
                  ]
                }
              },
              "allOf": [
                {
                  "x-id": "#manufacturer",
                  "x-nter-relation": "manufacturers",
                  "x-nter-model": "Manufacturer",
                  "x-nter-callable": true,
                  "description": "A Manufacturer of parts",
                  "required": [
                    "label",
                    "manufacturer_id"
                  ],
                  "properties": {
                    "manufacturer_id": {
                      "type": "string",
                      "description": "unique id",
                      "example": "99ec26f2-fa31-4768-b357-268c708fcda5",
                      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                    },
                    "label": {
                      "type": "string",
                      "example": "Apple Inc",
                      "x-examples": [
                        "Apple Inc"
                      ],
                      "description": "Label for the manufacturer"
                    },
                    "slug": {
                      "type": "string",
                      "example": "apple-inc",
                      "x-examples": [
                        "apple-inc"
                      ],
                      "description": "Auto-generated slug for the manufacturer"
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
                    "label": "Apple Inc",
                    "manufacturer_id": "003DffD7-Dff3-3E2A-Ae76-26E6C7aE5F7B",
                    "slug": "apple-inc",
                    "created": "1978-03-10T02:20:23.811Z",
                    "updated": "1940-10-01T09:10:03.934Z"
                  }
                }
              ]
            },
            "serial_prefix": {
              "type": "string",
              "example": "S",
              "x-examples": [
                "S"
              ],
              "description": "A serial number prefix for the part"
            },
            "input_filter": {
              "description": "Input Filters allow custom fields to be defined for entities",
              "type": "array",
              "items": {
                "type": "object",
                "description": "Input filter specification",
                "properties": {
                  "label": {
                    "type": "string",
                    "description": "Human readable name",
                    "example": "Serial Number",
                    "x-examples": [
                      "Serial Number",
                      "Asset tag",
                      "WiFi MAC address",
                      "Bluetooh MAC address"
                    ]
                  },
                  "key": {
                    "type": "string",
                    "description": "Slug used to store the property",
                    "example": "serial-number",
                    "x-examples": [
                      "serial-number",
                      "asset-tag",
                      "wifi-mac-address",
                      "bluetooh-mac-address"
                    ],
                    "readOnly": true,
                    "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                  },
                  "filters": {
                    "type": "array",
                    "description": "A Collection of filters applied to the field",
                    "items": {
                      "anyOf": [
                        {
                          "description": "This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set",
                          "type": "object",
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
                                  },
                                  "example": [
                                    "foo",
                                    "bar",
                                    "fizz",
                                    "buzz"
                                  ],
                                  "x-examples": [
                                    [
                                      "foo",
                                      "bar",
                                      "fizz",
                                      "buzz"
                                    ]
                                  ]
                                },
                                "check_case": {
                                  "type": "boolean",
                                  "description": "Perform a case sensitive match. By default will not match case",
                                  "default": false
                                },
                                "default": {
                                  "type": "string",
                                  "description": "If this is set and the value is not in the approved_list, set the value to this",
                                  "nullable": true,
                                  "example": "fizz",
                                  "x-examples": [
                                    "fizz"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Make the value camelCase",
                          "type": "object",
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
                          "description": "Filter to transform a value into a date",
                          "type": "object",
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
                              "description": "Date filter has no options",
                              "example": {},
                              "x-examples": [
                                {}
                              ]
                            }
                          }
                        },
                        {
                          "description": "Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:\n# The number 0 or 0.0\n# empty string ''\n# A boolean false\n# The word 'false'\n# ",
                          "type": "object",
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
                              "description": "empty filter has no options",
                              "example": {},
                              "x-examples": [
                                {}
                              ]
                            }
                          }
                        },
                        {
                          "description": "Filter to transform a value into a float. Non numeric characters (including comma) will be removed",
                          "type": "object",
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
                          "description": "Make the value kebab-case",
                          "type": "object",
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
                          "description": "Make the value lowercase",
                          "type": "object",
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
                          "description": "Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed",
                          "type": "object",
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
                              "description": "Number filter has no options",
                              "example": {},
                              "x-examples": [
                                {}
                              ]
                            }
                          }
                        },
                        {
                          "description": "Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.",
                          "type": "object",
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
                                  "description": "The prefix to add",
                                  "example": "MAN-",
                                  "x-examples": [
                                    "MAN-"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Make the value snake_case",
                          "type": "object",
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
                          "description": "Filter to transform a value into a string",
                          "type": "object",
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
                              "description": "String filter has no options",
                              "example": {},
                              "x-examples": [
                                {}
                              ]
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
                                  "description": "The suffix to add",
                                  "example": "-MAN",
                                  "x-examples": [
                                    "MAN"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Filter to trim whitespace from a value",
                          "type": "object",
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
                          "description": "Make the value UPPERCASE",
                          "type": "object",
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
                    "items": {
                      "anyOf": [
                        {
                          "description": "Validate number is between two values. By default, min and max are included",
                          "type": "object",
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
                                  "description": "Minimum value to check",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
                                },
                                "max": {
                                  "type": "number",
                                  "description": "The maximum value to check",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
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
                          "description": "Validate value does not match a list (black list)",
                          "type": "object",
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
                                  },
                                  "example": [
                                    "foo",
                                    "bar",
                                    "fizz",
                                    "buzz"
                                  ],
                                  "x-examples": [
                                    [
                                      "foo",
                                      "bar",
                                      "fizz",
                                      "buzz"
                                    ]
                                  ]
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
                          "description": "Validate string contains a value",
                          "type": "object",
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
                                  "description": "String must contain with this value",
                                  "example": "foo",
                                  "x-examples": [
                                    "foo"
                                  ]
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
                          "description": "Validate string is a correct email address",
                          "type": "object",
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
                          "description": "Validate string ends with a value",
                          "type": "object",
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
                                  "description": "String must end with this value",
                                  "example": "foo",
                                  "x-examples": [
                                    "foo"
                                  ]
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
                          "description": "Validate number equals a value",
                          "type": "object",
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
                                  "description": "The value to compare against",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
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
                          "description": "Validate number is greater than a value. By default, this will check if value is greater than or equals to",
                          "type": "object",
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
                                  "description": "The value to compare against",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
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
                          "description": "Validate string has a correct DNS records",
                          "type": "object",
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
                          "description": "Validate string matches an IP address format. Defaults to matching IPv4",
                          "type": "object",
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
                                  "example": [
                                    "IPv4"
                                  ],
                                  "x-examples": [
                                    [
                                      "IPv4"
                                    ]
                                  ],
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
                          "description": "Validate string is a certain length",
                          "type": "object",
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
                                  "description": "String must contain with this value",
                                  "example": "foo",
                                  "x-examples": [
                                    "foo"
                                  ]
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
                          "description": "Validate number is less than a value. By default, this will check if value is less than or equals to",
                          "type": "object",
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
                                  "description": "The value to compare against",
                                  "example": 42,
                                  "x-examples": [
                                    42
                                  ]
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
                          "description": "Validate string matches an MAC address format",
                          "type": "object",
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
                          "description": "Validate string matches a regular expression",
                          "type": "object",
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
                                  "description": "Mask to validate against",
                                  "example": "^[a-z]$",
                                  "x-examples": [
                                    "^[a-z]$"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Validate string starts with a value",
                          "type": "object",
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
                                  "description": "String must start with this value",
                                  "example": "foo",
                                  "x-examples": [
                                    "foo"
                                  ]
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
                          "description": "Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.",
                          "type": "object",
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
                                  "description": "The step value",
                                  "example": 4,
                                  "x-examples": [
                                    4
                                  ]
                                },
                                "start": {
                                  "type": "integer",
                                  "description": "Start stepping at this value",
                                  "example": 0,
                                  "x-examples": [
                                    0
                                  ]
                                },
                                "end": {
                                  "type": "integer",
                                  "description": "End stepping at this value",
                                  "example": 16,
                                  "x-examples": [
                                    16
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "description": "Validate string matches an URI",
                          "type": "object",
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
                                  "example": [
                                    "http"
                                  ],
                                  "x-examples": [
                                    [
                                      "http"
                                    ]
                                  ],
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
                          "description": "Validate value matches a list (white list)",
                          "type": "object",
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
                                  },
                                  "example": [
                                    "foo",
                                    "bar",
                                    "fizz",
                                    "buzz"
                                  ],
                                  "x-examples": [
                                    [
                                      "foo",
                                      "bar",
                                      "fizz",
                                      "buzz"
                                    ]
                                  ]
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
              },
              "example": [
                {
                  "label": "Serial Number",
                  "key": "bluetooh-mac-address",
                  "filters": [
                    {
                      "type": "empty",
                      "options": {}
                    },
                    {
                      "type": "camel",
                      "options": {}
                    },
                    {
                      "type": "camel",
                      "options": {}
                    },
                    {
                      "type": "trim",
                      "options": {
                        "start": false,
                        "end": false
                      }
                    },
                    {
                      "type": "suffix",
                      "options": {
                        "suffix": "MAN"
                      }
                    }
                  ],
                  "validators": [
                    {
                      "type": "uri",
                      "options": {
                        "schemes": [
                          "http"
                        ]
                      }
                    }
                  ]
                },
                {
                  "label": "Asset tag",
                  "key": "wifi-mac-address",
                  "filters": [
                    {
                      "type": "trim",
                      "options": {
                        "start": true,
                        "end": false
                      }
                    },
                    {
                      "type": "prefix",
                      "options": {
                        "prefix": "MAN-"
                      }
                    }
                  ],
                  "validators": [
                    {
                      "type": "lessThan",
                      "options": {
                        "value": 42,
                        "precision": 4,
                        "include": true
                      }
                    },
                    {
                      "type": "hostname",
                      "options": {
                        "record_type": "HIP"
                      }
                    },
                    {
                      "type": "ends_with",
                      "options": {
                        "ends_with": "foo",
                        "check_case": false
                      }
                    }
                  ]
                }
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
            "label": "10\" iPad",
            "part_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
            "customer": {
              "label": "Zones Inc",
              "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
              "slug": "zones-inc",
              "external_platform": {
                "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
              },
              "allowed_statuses": [
                {
                  "status": "Reticulating Splines",
                  "category": "IN_PROGRESS"
                }
              ],
              "created": "1992-08-12T08:06:10.993Z",
              "updated": "2002-08-23T06:46:31.317Z"
            },
            "manufacturer": {
              "part_number": "602-3075-01",
              "label": "Apple Inc",
              "manufacturer_id": "0cF15DfC-586c-bd1b-ADeb-95Ce468beee7",
              "slug": "apple-inc",
              "created": "2016-07-11T22:09:20.498Z",
              "updated": "1942-12-06T05:12:04.745Z"
            },
            "slug": "10-ipad",
            "serial_prefix": "S",
            "input_filter": [
              {
                "label": "Bluetooh MAC address",
                "key": "asset-tag",
                "filters": [
                  {
                    "type": "date",
                    "options": {}
                  },
                  {
                    "type": "date",
                    "options": {}
                  },
                  {
                    "type": "allowed_list",
                    "options": {
                      "approved_values": [
                        "foo",
                        "bar",
                        "fizz",
                        "buzz"
                      ],
                      "check_case": false,
                      "default": "fizz"
                    }
                  },
                  {
                    "type": "number",
                    "options": {}
                  }
                ],
                "validators": [
                  {
                    "type": "lessThan",
                    "options": {
                      "value": 42,
                      "precision": 3,
                      "include": true
                    }
                  },
                  {
                    "type": "whiteList",
                    "options": {
                      "list": [
                        "foo",
                        "bar",
                        "fizz",
                        "buzz"
                      ],
                      "check_case": true
                    }
                  },
                  {
                    "type": "macAddress",
                    "options": {}
                  },
                  {
                    "type": "macAddress",
                    "options": {}
                  },
                  {
                    "type": "contains",
                    "options": {
                      "contains": "foo",
                      "check_case": true
                    }
                  }
                ]
              }
            ],
            "created": "1999-04-30T19:19:03.277Z",
            "updated": "1971-01-10T16:33:44.126Z"
          }
        }
      ],
      "example": "undefined"
    }
  ]
}
```

<h3 id="updatepart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A part response|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="updatepart-responseschema">Response Schema</h3>

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

## deletePart

<a id="opIddeletePart"></a>

`DELETE /parts/:part_id`

*Deletes a part *

This will remove the part  from the system

<h3 id="deletepart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part_id|path|string|true|Id for the part|

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

<h3 id="deletepart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|[Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)|Part  deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Forbidden|Inline|

<h3 id="deletepart-responseschema">Response Schema</h3>

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

## fetchAllPartLocations

<a id="opIdfetchAllPartLocations"></a>

`GET /parts/:part_id/locations`

*Fetch locations which contain this part*

Locations which contain units for this part

<h3 id="fetchallpartlocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part_id|path|string|true|Id for the part|
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
        "nter:part-locations": {
          "type": "array",
          "items": {
            "type": "object",
            "allOf": [
              {
                "x-id": "#part",
                "description": "Defines the properties for a part",
                "required": [
                  "part_id",
                  "customer",
                  "manufacturer"
                ],
                "properties": {
                  "part": {
                    "description": "The part",
                    "allOf": [
                      {
                        "x-id": "#part",
                        "x-nter-relation": "parts",
                        "x-nter-model": "Part",
                        "x-nter-callable": true,
                        "description": "Defines the properties for a part",
                        "required": [
                          "label",
                          "part_id",
                          "customer",
                          "manufacturer"
                        ],
                        "properties": {
                          "part_id": {
                            "type": "string",
                            "description": "Unique identifier",
                            "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                            "x-examples": [
                              "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
                            ],
                            "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                          },
                          "label": {
                            "type": "string",
                            "example": "10\" iPad",
                            "x-examples": [
                              "10\" iPad"
                            ],
                            "description": "Label for the part"
                          },
                          "slug": {
                            "type": "string",
                            "example": "10-ipad",
                            "x-examples": [
                              "10-ipad"
                            ],
                            "description": "Auto-generated slug for the part"
                          },
                          "customer": {
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
                                "description": "Manufacturer part number",
                                "example": "602-3075-01",
                                "x-examples": [
                                  "602-3075-01"
                                ]
                              }
                            },
                            "allOf": [
                              {
                                "x-id": "#manufacturer",
                                "x-nter-relation": "manufacturers",
                                "x-nter-model": "Manufacturer",
                                "x-nter-callable": true,
                                "description": "A Manufacturer of parts",
                                "required": [
                                  "label",
                                  "manufacturer_id"
                                ],
                                "properties": {
                                  "manufacturer_id": {
                                    "type": "string",
                                    "description": "unique id",
                                    "example": "99ec26f2-fa31-4768-b357-268c708fcda5",
                                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                                  },
                                  "label": {
                                    "type": "string",
                                    "example": "Apple Inc",
                                    "x-examples": [
                                      "Apple Inc"
                                    ],
                                    "description": "Label for the manufacturer"
                                  },
                                  "slug": {
                                    "type": "string",
                                    "example": "apple-inc",
                                    "x-examples": [
                                      "apple-inc"
                                    ],
                                    "description": "Auto-generated slug for the manufacturer"
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
                                  "label": "Apple Inc",
                                  "manufacturer_id": "003DffD7-Dff3-3E2A-Ae76-26E6C7aE5F7B",
                                  "slug": "apple-inc",
                                  "created": "1978-03-10T02:20:23.811Z",
                                  "updated": "1940-10-01T09:10:03.934Z"
                                }
                              }
                            ]
                          },
                          "serial_prefix": {
                            "type": "string",
                            "example": "S",
                            "x-examples": [
                              "S"
                            ],
                            "description": "A serial number prefix for the part"
                          },
                          "input_filter": {
                            "description": "Input Filters allow custom fields to be defined for entities",
                            "type": "array",
                            "items": {
                              "type": "object",
                              "description": "Input filter specification",
                              "properties": {
                                "label": {
                                  "type": "string",
                                  "description": "Human readable name",
                                  "example": "Serial Number",
                                  "x-examples": [
                                    "Serial Number",
                                    "Asset tag",
                                    "WiFi MAC address",
                                    "Bluetooh MAC address"
                                  ]
                                },
                                "key": {
                                  "type": "string",
                                  "description": "Slug used to store the property",
                                  "example": "serial-number",
                                  "x-examples": [
                                    "serial-number",
                                    "asset-tag",
                                    "wifi-mac-address",
                                    "bluetooh-mac-address"
                                  ],
                                  "readOnly": true,
                                  "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                                },
                                "filters": {
                                  "type": "array",
                                  "description": "A Collection of filters applied to the field",
                                  "items": {
                                    "anyOf": [
                                      {
                                        "description": "This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set",
                                        "type": "object",
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
                                                },
                                                "example": [
                                                  "foo",
                                                  "bar",
                                                  "fizz",
                                                  "buzz"
                                                ],
                                                "x-examples": [
                                                  [
                                                    "foo",
                                                    "bar",
                                                    "fizz",
                                                    "buzz"
                                                  ]
                                                ]
                                              },
                                              "check_case": {
                                                "type": "boolean",
                                                "description": "Perform a case sensitive match. By default will not match case",
                                                "default": false
                                              },
                                              "default": {
                                                "type": "string",
                                                "description": "If this is set and the value is not in the approved_list, set the value to this",
                                                "nullable": true,
                                                "example": "fizz",
                                                "x-examples": [
                                                  "fizz"
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "description": "Make the value camelCase",
                                        "type": "object",
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
                                        "description": "Filter to transform a value into a date",
                                        "type": "object",
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
                                            "description": "Date filter has no options",
                                            "example": {},
                                            "x-examples": [
                                              {}
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "description": "Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:\n# The number 0 or 0.0\n# empty string ''\n# A boolean false\n# The word 'false'\n# ",
                                        "type": "object",
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
                                            "description": "empty filter has no options",
                                            "example": {},
                                            "x-examples": [
                                              {}
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "description": "Filter to transform a value into a float. Non numeric characters (including comma) will be removed",
                                        "type": "object",
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
                                        "description": "Make the value kebab-case",
                                        "type": "object",
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
                                        "description": "Make the value lowercase",
                                        "type": "object",
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
                                        "description": "Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed",
                                        "type": "object",
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
                                            "description": "Number filter has no options",
                                            "example": {},
                                            "x-examples": [
                                              {}
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "description": "Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.",
                                        "type": "object",
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
                                                "description": "The prefix to add",
                                                "example": "MAN-",
                                                "x-examples": [
                                                  "MAN-"
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "description": "Make the value snake_case",
                                        "type": "object",
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
                                        "description": "Filter to transform a value into a string",
                                        "type": "object",
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
                                            "description": "String filter has no options",
                                            "example": {},
                                            "x-examples": [
                                              {}
                                            ]
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
                                                "description": "The suffix to add",
                                                "example": "-MAN",
                                                "x-examples": [
                                                  "MAN"
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "description": "Filter to trim whitespace from a value",
                                        "type": "object",
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
                                        "description": "Make the value UPPERCASE",
                                        "type": "object",
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
                                  "items": {
                                    "anyOf": [
                                      {
                                        "description": "Validate number is between two values. By default, min and max are included",
                                        "type": "object",
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
                                                "description": "Minimum value to check",
                                                "example": 42,
                                                "x-examples": [
                                                  42
                                                ]
                                              },
                                              "max": {
                                                "type": "number",
                                                "description": "The maximum value to check",
                                                "example": 42,
                                                "x-examples": [
                                                  42
                                                ]
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
                                        "description": "Validate value does not match a list (black list)",
                                        "type": "object",
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
                                                },
                                                "example": [
                                                  "foo",
                                                  "bar",
                                                  "fizz",
                                                  "buzz"
                                                ],
                                                "x-examples": [
                                                  [
                                                    "foo",
                                                    "bar",
                                                    "fizz",
                                                    "buzz"
                                                  ]
                                                ]
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
                                        "description": "Validate string contains a value",
                                        "type": "object",
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
                                                "description": "String must contain with this value",
                                                "example": "foo",
                                                "x-examples": [
                                                  "foo"
                                                ]
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
                                        "description": "Validate string is a correct email address",
                                        "type": "object",
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
                                        "description": "Validate string ends with a value",
                                        "type": "object",
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
                                                "description": "String must end with this value",
                                                "example": "foo",
                                                "x-examples": [
                                                  "foo"
                                                ]
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
                                        "description": "Validate number equals a value",
                                        "type": "object",
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
                                                "description": "The value to compare against",
                                                "example": 42,
                                                "x-examples": [
                                                  42
                                                ]
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
                                        "description": "Validate number is greater than a value. By default, this will check if value is greater than or equals to",
                                        "type": "object",
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
                                                "description": "The value to compare against",
                                                "example": 42,
                                                "x-examples": [
                                                  42
                                                ]
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
                                        "description": "Validate string has a correct DNS records",
                                        "type": "object",
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
                                        "description": "Validate string matches an IP address format. Defaults to matching IPv4",
                                        "type": "object",
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
                                                "example": [
                                                  "IPv4"
                                                ],
                                                "x-examples": [
                                                  [
                                                    "IPv4"
                                                  ]
                                                ],
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
                                        "description": "Validate string is a certain length",
                                        "type": "object",
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
                                                "description": "String must contain with this value",
                                                "example": "foo",
                                                "x-examples": [
                                                  "foo"
                                                ]
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
                                        "description": "Validate number is less than a value. By default, this will check if value is less than or equals to",
                                        "type": "object",
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
                                                "description": "The value to compare against",
                                                "example": 42,
                                                "x-examples": [
                                                  42
                                                ]
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
                                        "description": "Validate string matches an MAC address format",
                                        "type": "object",
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
                                        "description": "Validate string matches a regular expression",
                                        "type": "object",
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
                                                "description": "Mask to validate against",
                                                "example": "^[a-z]$",
                                                "x-examples": [
                                                  "^[a-z]$"
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "description": "Validate string starts with a value",
                                        "type": "object",
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
                                                "description": "String must start with this value",
                                                "example": "foo",
                                                "x-examples": [
                                                  "foo"
                                                ]
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
                                        "description": "Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.",
                                        "type": "object",
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
                                                "description": "The step value",
                                                "example": 4,
                                                "x-examples": [
                                                  4
                                                ]
                                              },
                                              "start": {
                                                "type": "integer",
                                                "description": "Start stepping at this value",
                                                "example": 0,
                                                "x-examples": [
                                                  0
                                                ]
                                              },
                                              "end": {
                                                "type": "integer",
                                                "description": "End stepping at this value",
                                                "example": 16,
                                                "x-examples": [
                                                  16
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "description": "Validate string matches an URI",
                                        "type": "object",
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
                                                "example": [
                                                  "http"
                                                ],
                                                "x-examples": [
                                                  [
                                                    "http"
                                                  ]
                                                ],
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
                                        "description": "Validate value matches a list (white list)",
                                        "type": "object",
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
                                                },
                                                "example": [
                                                  "foo",
                                                  "bar",
                                                  "fizz",
                                                  "buzz"
                                                ],
                                                "x-examples": [
                                                  [
                                                    "foo",
                                                    "bar",
                                                    "fizz",
                                                    "buzz"
                                                  ]
                                                ]
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
                            },
                            "example": [
                              {
                                "label": "Serial Number",
                                "key": "bluetooh-mac-address",
                                "filters": [
                                  {
                                    "type": "empty",
                                    "options": {}
                                  },
                                  {
                                    "type": "camel",
                                    "options": {}
                                  },
                                  {
                                    "type": "camel",
                                    "options": {}
                                  },
                                  {
                                    "type": "trim",
                                    "options": {
                                      "start": false,
                                      "end": false
                                    }
                                  },
                                  {
                                    "type": "suffix",
                                    "options": {
                                      "suffix": "MAN"
                                    }
                                  }
                                ],
                                "validators": [
                                  {
                                    "type": "uri",
                                    "options": {
                                      "schemes": [
                                        "http"
                                      ]
                                    }
                                  }
                                ]
                              },
                              {
                                "label": "Asset tag",
                                "key": "wifi-mac-address",
                                "filters": [
                                  {
                                    "type": "trim",
                                    "options": {
                                      "start": true,
                                      "end": false
                                    }
                                  },
                                  {
                                    "type": "prefix",
                                    "options": {
                                      "prefix": "MAN-"
                                    }
                                  }
                                ],
                                "validators": [
                                  {
                                    "type": "lessThan",
                                    "options": {
                                      "value": 42,
                                      "precision": 4,
                                      "include": true
                                    }
                                  },
                                  {
                                    "type": "hostname",
                                    "options": {
                                      "record_type": "HIP"
                                    }
                                  },
                                  {
                                    "type": "ends_with",
                                    "options": {
                                      "ends_with": "foo",
                                      "check_case": false
                                    }
                                  }
                                ]
                              }
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
                          "label": "10\" iPad",
                          "part_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                          "customer": {
                            "label": "Zones Inc",
                            "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                            "slug": "zones-inc",
                            "external_platform": {
                              "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                            },
                            "allowed_statuses": [
                              {
                                "status": "Reticulating Splines",
                                "category": "IN_PROGRESS"
                              }
                            ],
                            "created": "1992-08-12T08:06:10.993Z",
                            "updated": "2002-08-23T06:46:31.317Z"
                          },
                          "manufacturer": {
                            "part_number": "602-3075-01",
                            "label": "Apple Inc",
                            "manufacturer_id": "0cF15DfC-586c-bd1b-ADeb-95Ce468beee7",
                            "slug": "apple-inc",
                            "created": "2016-07-11T22:09:20.498Z",
                            "updated": "1942-12-06T05:12:04.745Z"
                          },
                          "slug": "10-ipad",
                          "serial_prefix": "S",
                          "input_filter": [
                            {
                              "label": "Bluetooh MAC address",
                              "key": "asset-tag",
                              "filters": [
                                {
                                  "type": "date",
                                  "options": {}
                                },
                                {
                                  "type": "date",
                                  "options": {}
                                },
                                {
                                  "type": "allowed_list",
                                  "options": {
                                    "approved_values": [
                                      "foo",
                                      "bar",
                                      "fizz",
                                      "buzz"
                                    ],
                                    "check_case": false,
                                    "default": "fizz"
                                  }
                                },
                                {
                                  "type": "number",
                                  "options": {}
                                }
                              ],
                              "validators": [
                                {
                                  "type": "lessThan",
                                  "options": {
                                    "value": 42,
                                    "precision": 3,
                                    "include": true
                                  }
                                },
                                {
                                  "type": "whiteList",
                                  "options": {
                                    "list": [
                                      "foo",
                                      "bar",
                                      "fizz",
                                      "buzz"
                                    ],
                                    "check_case": true
                                  }
                                },
                                {
                                  "type": "macAddress",
                                  "options": {}
                                },
                                {
                                  "type": "macAddress",
                                  "options": {}
                                },
                                {
                                  "type": "contains",
                                  "options": {
                                    "contains": "foo",
                                    "check_case": true
                                  }
                                }
                              ]
                            }
                          ],
                          "created": "1999-04-30T19:19:03.277Z",
                          "updated": "1971-01-10T16:33:44.126Z"
                        }
                      }
                    ]
                  },
                  "location": {
                    "description": "Location of the part",
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
                  "units_available": {
                    "type": "object",
                    "description": "Break down of units",
                    "properties": {
                      "allocated": {
                        "description": "Number of units allocated to a project",
                        "type": "integer",
                        "format": "int32",
                        "minimum": 0,
                        "example": 42,
                        "x-examples": [
                          42
                        ]
                      },
                      "un_allocated": {
                        "description": "Number of units not allocated to a project",
                        "type": "integer",
                        "format": "int32",
                        "minimum": 0,
                        "example": 24,
                        "x-examples": [
                          24
                        ]
                      },
                      "by_status": {
                        "type": "array",
                        "description": "Break down of units by status",
                        "items": {
                          "type": "object",
                          "properties": {
                            "qty": {
                              "description": "Number of units in this status",
                              "type": "integer",
                              "format": "int32",
                              "minimum": 0,
                              "example": 6,
                              "x-examples": [
                                6
                              ]
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
                    }
                  }
                },
                "example": {
                  "part": {
                    "label": "10\" iPad",
                    "part_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                    "customer": {
                      "label": "Zones Inc",
                      "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                      "slug": "zones-inc",
                      "external_platform": {
                        "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                      },
                      "allowed_statuses": [
                        {
                          "status": "Reticulating Splines",
                          "category": "CANCELLED"
                        },
                        {
                          "status": "Complete",
                          "category": "VERIFYING"
                        }
                      ],
                      "created": "1995-11-20T09:52:49.296Z",
                      "updated": "1947-08-11T07:47:02.71Z"
                    },
                    "manufacturer": {
                      "part_number": "602-3075-01",
                      "label": "Apple Inc",
                      "manufacturer_id": "d6C24Ce9-9F6A-7356-2c2E-007eBFf602d6",
                      "slug": "apple-inc",
                      "created": "1948-01-08T01:47:37.609Z",
                      "updated": "2018-06-02T12:52:38.895Z"
                    },
                    "slug": "10-ipad",
                    "serial_prefix": "S",
                    "input_filter": [
                      {
                        "label": "WiFi MAC address",
                        "key": "wifi-mac-address",
                        "filters": [
                          {
                            "type": "empty",
                            "options": {}
                          },
                          {
                            "type": "suffix",
                            "options": {
                              "suffix": "MAN"
                            }
                          },
                          {
                            "type": "date",
                            "options": {}
                          }
                        ],
                        "validators": [
                          {
                            "type": "contains",
                            "options": {
                              "contains": "foo",
                              "check_case": true
                            }
                          },
                          {
                            "type": "step",
                            "options": {
                              "step": 4,
                              "start": 0,
                              "end": 16
                            }
                          }
                        ]
                      },
                      {
                        "label": "Serial Number",
                        "key": "asset-tag",
                        "filters": [
                          {
                            "type": "date",
                            "options": {}
                          },
                          {
                            "type": "string",
                            "options": {}
                          },
                          {
                            "type": "snake",
                            "options": {}
                          }
                        ],
                        "validators": [
                          {
                            "type": "ends_with",
                            "options": {
                              "ends_with": "foo",
                              "check_case": false
                            }
                          },
                          {
                            "type": "ipAddress",
                            "options": {
                              "versions": [
                                "IPv4"
                              ]
                            }
                          }
                        ]
                      },
                      {
                        "label": "Bluetooh MAC address",
                        "key": "bluetooh-mac-address",
                        "filters": [
                          {
                            "type": "camel",
                            "options": {}
                          },
                          {
                            "type": "snake",
                            "options": {}
                          },
                          {
                            "type": "camel",
                            "options": {}
                          }
                        ],
                        "validators": [
                          {
                            "type": "ipAddress",
                            "options": {
                              "versions": [
                                "IPv4"
                              ]
                            }
                          },
                          {
                            "type": "ends_with",
                            "options": {
                              "ends_with": "foo",
                              "check_case": false
                            }
                          }
                        ]
                      }
                    ],
                    "created": "1947-10-12T04:19:31.774Z",
                    "updated": "1998-10-16T18:41:45.246Z"
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
                    "created": "1986-01-26T08:29:17.947Z",
                    "updated": "1979-02-16T19:18:26.877Z"
                  },
                  "units_available": {
                    "allocated": 42,
                    "un_allocated": 24,
                    "by_status": [
                      {
                        "status": "Complete",
                        "qty": 6,
                        "category": "COMPLETE"
                      }
                    ]
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
    },
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
    }
  ]
}
```

<h3 id="fetchallpartlocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Part Location response|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|Inline|

<h3 id="fetchallpartlocations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:part-locations|[allOf]|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|object|false|none|Defines the properties for a part|
|»»»» part|object|false|none|The part|
|»»»»» part_id|string|true|none|Unique identifier|
|»»»»» label|string|true|none|Label for the part|
|»»»»» slug|string|false|none|Auto-generated slug for the part|
|»»»»» customer|object|true|none|Customer|
|»»»»»» customer_id|string|true|none|Customer identifier|
|»»»»»» label|string|true|none|Label for the customer|
|»»»»»» slug|string|false|none|Auto generated slug|
|»»»»»» external_platform|object\|null|false|none|External Identifiers for the customer|
|»»»»»»» **additionalProperties**|string|false|none|none|
|»»»»»» allowed_statuses|[object]|false|none|List of allowed statuses|
|»»»»»»» status|string|true|none|A Custom label for the status|
|»»»»»»» category|string|false|none|The classifier for the statues|
|»»»»»» manufacturer|object|true|none|Manufacturer information for the part|
|»»»»»»» part_number|string|true|none|Manufacturer part number|
|»»»»»» serial_prefix|string|false|none|A serial number prefix for the part|
|»»»»»» input_filter|[object]|false|none|Input Filters allow custom fields to be defined for entities|
|»»»»»»» label|string|false|none|Human readable name|
|»»»»»»» key|string|false|read-only|Slug used to store the property|
|»»»»»»» filters|[anyOf]|false|none|A Collection of filters applied to the field|

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
|»»»»»»»»»»»»» validators|[anyOf]|false|none|A set of validators to use for this field|

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

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» location|object|false|none|Location of the part|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» label|string|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» slug|string|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» location_id|string|false|none|The identifier for the location|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» location_type|string|true|none|The type of location|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» formatted_address|string|false|read-only|Address formatted for the where region the location exists in|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» address|object|true|none|xNAL address for the location|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» country|string|true|none|Three Letter ISO country code|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» administrative_area|string|true|none|State / Province / Region|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» sub_administrative_area|string|false|none|County / District|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» locality|string|true|none|City / Town|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» postal_code|string|true|none|Postal Code / Zip Code|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» thoroughfare|string|true|none|Street Address|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» premise|string|false|none|Apartment / Suite / Box number etc|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» sub_premise|string|false|none|Floor # / Room # / Building label etc|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» units_available|object|false|none|Break down of units|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» allocated|integer(int32)|false|none|Number of units allocated to a project|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» un_allocated|integer(int32)|false|none|Number of units not allocated to a project|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» by_status|[allOf]|false|none|Break down of units by status|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» qty|integer(int32)|false|none|Number of units in this status|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» _links|object|false|read-only|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» self|object|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» href|string(uri)|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» total_count|integer(int32)|false|read-only|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» limit|integer(int32)|false|read-only|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» offset|string|false|read-only|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» _links|object|false|read-only|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» next|object|false|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» href|string(uri)|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
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

<h1 id="parts-unit">Unit</h1>

## fetchAllUnits

<a id="opIdfetchAllUnits"></a>

`GET /parts/:part_id/units`

*Fetches A Page of units*

Fetch Unit

<h3 id="fetchallunits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part_id|path|string|true|Id for the part|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|
|sort|query|string|false|Sort by field|
|filter[label]|query|string|false|Filter where the label contains this value|
|filter[manufacturer_id]|query|string|false|Filter where the manufacturer id is this valuer|
|filter[vendor_id]|query|string|false|Filter where the vendor id is this value|
|filter[customer_id]|query|string|false|Filter where the customer id is this value|

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
        "nter:units": {
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
                        "example": "https://api.nterprise.com/units/db7e54fa-5868-429f-84fb-b602b0d3ae2a"
                      }
                    }
                  }
                }
              }
            },
            "allOf": [
              {
                "x-id": "#unit",
                "x-nter-relation": "units",
                "x-nter-model": "Unit",
                "x-nter-callable": true,
                "description": "Defines the properties for a unit",
                "required": [
                  "label",
                  "part",
                  "unit_id"
                ],
                "properties": {
                  "unit_id": {
                    "type": "string",
                    "description": "The identifier for the unit",
                    "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                    "x-examples": [
                      "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
                    ],
                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                  },
                  "label": {
                    "type": "string",
                    "example": "10\" iPad for Hugo",
                    "x-examples": [
                      "10\" iPad for Hugo"
                    ],
                    "description": "Name of the unit"
                  },
                  "slug": {
                    "type": "string",
                    "example": "10-ipad-for-hugo",
                    "x-examples": [
                      "10-ipad-for-hugo"
                    ],
                    "description": "Auto-generated slug for the unit"
                  },
                  "serial_number": {
                    "type": "string",
                    "example": "4EAVPS67GNL8",
                    "x-examples": [
                      "4EAVPS67GNL8"
                    ],
                    "description": "Serial number of the unit with prefix stripped"
                  },
                  "raw_serial_number": {
                    "type": "string",
                    "example": "S4EAVPS67GNL8",
                    "x-examples": [
                      "S4EAVPS67GNL8"
                    ],
                    "description": "Serial number of the unit"
                  },
                  "tenant_part_number": {
                    "type": "string",
                    "description": "Identifier set by the tenant",
                    "example": "AX-44333",
                    "x-examples": [
                      "AX-44333"
                    ]
                  },
                  "manufacturer": {
                    "description": "The manufacturer that makes this unit",
                    "type": "object",
                    "required": [
                      "part_number"
                    ],
                    "properties": {
                      "part_number": {
                        "type": "string",
                        "description": "The part number supplied by the manufacturer",
                        "example": "AX-44333",
                        "x-examples": [
                          "AX-44333"
                        ]
                      }
                    },
                    "allOf": [
                      {
                        "x-id": "#manufacturer",
                        "x-nter-relation": "manufacturers",
                        "x-nter-model": "Manufacturer",
                        "x-nter-callable": true,
                        "description": "A Manufacturer of parts",
                        "required": [
                          "label",
                          "manufacturer_id"
                        ],
                        "properties": {
                          "manufacturer_id": {
                            "type": "string",
                            "description": "unique id",
                            "example": "99ec26f2-fa31-4768-b357-268c708fcda5",
                            "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                          },
                          "label": {
                            "type": "string",
                            "example": "Apple Inc",
                            "x-examples": [
                              "Apple Inc"
                            ],
                            "description": "Label for the manufacturer"
                          },
                          "slug": {
                            "type": "string",
                            "example": "apple-inc",
                            "x-examples": [
                              "apple-inc"
                            ],
                            "description": "Auto-generated slug for the manufacturer"
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
                          "label": "Apple Inc",
                          "manufacturer_id": "003DffD7-Dff3-3E2A-Ae76-26E6C7aE5F7B",
                          "slug": "apple-inc",
                          "created": "1978-03-10T02:20:23.811Z",
                          "updated": "1940-10-01T09:10:03.934Z"
                        }
                      }
                    ]
                  },
                  "vendor": {
                    "x-ref": "#vendor",
                    "type": "object",
                    "description": "The vendor that sold this unit",
                    "properties": {
                      "part_number": {
                        "type": "string",
                        "description": "The part number supplied by the vendor",
                        "example": "AX-44333",
                        "x-examples": [
                          "AX-44333"
                        ]
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
                    ]
                  },
                  "part": {
                    "x-ref": "#part",
                    "description": "The part associated with this unit",
                    "allOf": [
                      {
                        "x-id": "#part",
                        "x-nter-relation": "parts",
                        "x-nter-model": "Part",
                        "x-nter-callable": true,
                        "description": "Defines the properties for a part",
                        "required": [
                          "label",
                          "part_id",
                          "customer",
                          "manufacturer"
                        ],
                        "properties": {
                          "part_id": {
                            "type": "string",
                            "description": "Unique identifier",
                            "example": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                            "x-examples": [
                              "ec5db56d-32e6-4e5d-9bef-1016f3e13670"
                            ],
                            "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                          },
                          "label": {
                            "type": "string",
                            "example": "10\" iPad",
                            "x-examples": [
                              "10\" iPad"
                            ],
                            "description": "Label for the part"
                          },
                          "slug": {
                            "type": "string",
                            "example": "10-ipad",
                            "x-examples": [
                              "10-ipad"
                            ],
                            "description": "Auto-generated slug for the part"
                          },
                          "customer": {
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
                                "description": "Manufacturer part number",
                                "example": "602-3075-01",
                                "x-examples": [
                                  "602-3075-01"
                                ]
                              }
                            },
                            "allOf": [
                              {
                                "x-id": "#manufacturer",
                                "x-nter-relation": "manufacturers",
                                "x-nter-model": "Manufacturer",
                                "x-nter-callable": true,
                                "description": "A Manufacturer of parts",
                                "required": [
                                  "label",
                                  "manufacturer_id"
                                ],
                                "properties": {
                                  "manufacturer_id": {
                                    "type": "string",
                                    "description": "unique id",
                                    "example": "99ec26f2-fa31-4768-b357-268c708fcda5",
                                    "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
                                  },
                                  "label": {
                                    "type": "string",
                                    "example": "Apple Inc",
                                    "x-examples": [
                                      "Apple Inc"
                                    ],
                                    "description": "Label for the manufacturer"
                                  },
                                  "slug": {
                                    "type": "string",
                                    "example": "apple-inc",
                                    "x-examples": [
                                      "apple-inc"
                                    ],
                                    "description": "Auto-generated slug for the manufacturer"
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
                                  "label": "Apple Inc",
                                  "manufacturer_id": "003DffD7-Dff3-3E2A-Ae76-26E6C7aE5F7B",
                                  "slug": "apple-inc",
                                  "created": "1978-03-10T02:20:23.811Z",
                                  "updated": "1940-10-01T09:10:03.934Z"
                                }
                              }
                            ]
                          },
                          "serial_prefix": {
                            "type": "string",
                            "example": "S",
                            "x-examples": [
                              "S"
                            ],
                            "description": "A serial number prefix for the part"
                          },
                          "input_filter": {
                            "description": "Input Filters allow custom fields to be defined for entities",
                            "type": "array",
                            "items": {
                              "type": "object",
                              "description": "Input filter specification",
                              "properties": {
                                "label": {
                                  "type": "string",
                                  "description": "Human readable name",
                                  "example": "Serial Number",
                                  "x-examples": [
                                    "Serial Number",
                                    "Asset tag",
                                    "WiFi MAC address",
                                    "Bluetooh MAC address"
                                  ]
                                },
                                "key": {
                                  "type": "string",
                                  "description": "Slug used to store the property",
                                  "example": "serial-number",
                                  "x-examples": [
                                    "serial-number",
                                    "asset-tag",
                                    "wifi-mac-address",
                                    "bluetooh-mac-address"
                                  ],
                                  "readOnly": true,
                                  "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                                },
                                "filters": {
                                  "type": "array",
                                  "description": "A Collection of filters applied to the field",
                                  "items": {
                                    "anyOf": [
                                      {
                                        "description": "This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set",
                                        "type": "object",
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
                                                },
                                                "example": [
                                                  "foo",
                                                  "bar",
                                                  "fizz",
                                                  "buzz"
                                                ],
                                                "x-examples": [
                                                  [
                                                    "foo",
                                                    "bar",
                                                    "fizz",
                                                    "buzz"
                                                  ]
                                                ]
                                              },
                                              "check_case": {
                                                "type": "boolean",
                                                "description": "Perform a case sensitive match. By default will not match case",
                                                "default": false
                                              },
                                              "default": {
                                                "type": "string",
                                                "description": "If this is set and the value is not in the approved_list, set the value to this",
                                                "nullable": true,
                                                "example": "fizz",
                                                "x-examples": [
                                                  "fizz"
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "description": "Make the value camelCase",
                                        "type": "object",
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
                                        "description": "Filter to transform a value into a date",
                                        "type": "object",
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
                                            "description": "Date filter has no options",
                                            "example": {},
                                            "x-examples": [
                                              {}
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "description": "Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:\n# The number 0 or 0.0\n# empty string ''\n# A boolean false\n# The word 'false'\n# ",
                                        "type": "object",
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
                                            "description": "empty filter has no options",
                                            "example": {},
                                            "x-examples": [
                                              {}
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "description": "Filter to transform a value into a float. Non numeric characters (including comma) will be removed",
                                        "type": "object",
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
                                        "description": "Make the value kebab-case",
                                        "type": "object",
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
                                        "description": "Make the value lowercase",
                                        "type": "object",
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
                                        "description": "Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed",
                                        "type": "object",
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
                                            "description": "Number filter has no options",
                                            "example": {},
                                            "x-examples": [
                                              {}
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "description": "Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.",
                                        "type": "object",
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
                                                "description": "The prefix to add",
                                                "example": "MAN-",
                                                "x-examples": [
                                                  "MAN-"
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "description": "Make the value snake_case",
                                        "type": "object",
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
                                        "description": "Filter to transform a value into a string",
                                        "type": "object",
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
                                            "description": "String filter has no options",
                                            "example": {},
                                            "x-examples": [
                                              {}
                                            ]
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
                                                "description": "The suffix to add",
                                                "example": "-MAN",
                                                "x-examples": [
                                                  "MAN"
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "description": "Filter to trim whitespace from a value",
                                        "type": "object",
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
                                        "description": "Make the value UPPERCASE",
                                        "type": "object",
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
                                  "items": {
                                    "anyOf": [
                                      {
                                        "description": "Validate number is between two values. By default, min and max are included",
                                        "type": "object",
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
                                                "description": "Minimum value to check",
                                                "example": 42,
                                                "x-examples": [
                                                  42
                                                ]
                                              },
                                              "max": {
                                                "type": "number",
                                                "description": "The maximum value to check",
                                                "example": 42,
                                                "x-examples": [
                                                  42
                                                ]
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
                                        "description": "Validate value does not match a list (black list)",
                                        "type": "object",
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
                                                },
                                                "example": [
                                                  "foo",
                                                  "bar",
                                                  "fizz",
                                                  "buzz"
                                                ],
                                                "x-examples": [
                                                  [
                                                    "foo",
                                                    "bar",
                                                    "fizz",
                                                    "buzz"
                                                  ]
                                                ]
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
                                        "description": "Validate string contains a value",
                                        "type": "object",
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
                                                "description": "String must contain with this value",
                                                "example": "foo",
                                                "x-examples": [
                                                  "foo"
                                                ]
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
                                        "description": "Validate string is a correct email address",
                                        "type": "object",
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
                                        "description": "Validate string ends with a value",
                                        "type": "object",
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
                                                "description": "String must end with this value",
                                                "example": "foo",
                                                "x-examples": [
                                                  "foo"
                                                ]
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
                                        "description": "Validate number equals a value",
                                        "type": "object",
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
                                                "description": "The value to compare against",
                                                "example": 42,
                                                "x-examples": [
                                                  42
                                                ]
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
                                        "description": "Validate number is greater than a value. By default, this will check if value is greater than or equals to",
                                        "type": "object",
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
                                                "description": "The value to compare against",
                                                "example": 42,
                                                "x-examples": [
                                                  42
                                                ]
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
                                        "description": "Validate string has a correct DNS records",
                                        "type": "object",
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
                                        "description": "Validate string matches an IP address format. Defaults to matching IPv4",
                                        "type": "object",
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
                                                "example": [
                                                  "IPv4"
                                                ],
                                                "x-examples": [
                                                  [
                                                    "IPv4"
                                                  ]
                                                ],
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
                                        "description": "Validate string is a certain length",
                                        "type": "object",
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
                                                "description": "String must contain with this value",
                                                "example": "foo",
                                                "x-examples": [
                                                  "foo"
                                                ]
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
                                        "description": "Validate number is less than a value. By default, this will check if value is less than or equals to",
                                        "type": "object",
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
                                                "description": "The value to compare against",
                                                "example": 42,
                                                "x-examples": [
                                                  42
                                                ]
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
                                        "description": "Validate string matches an MAC address format",
                                        "type": "object",
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
                                        "description": "Validate string matches a regular expression",
                                        "type": "object",
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
                                                "description": "Mask to validate against",
                                                "example": "^[a-z]$",
                                                "x-examples": [
                                                  "^[a-z]$"
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "description": "Validate string starts with a value",
                                        "type": "object",
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
                                                "description": "String must start with this value",
                                                "example": "foo",
                                                "x-examples": [
                                                  "foo"
                                                ]
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
                                        "description": "Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.",
                                        "type": "object",
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
                                                "description": "The step value",
                                                "example": 4,
                                                "x-examples": [
                                                  4
                                                ]
                                              },
                                              "start": {
                                                "type": "integer",
                                                "description": "Start stepping at this value",
                                                "example": 0,
                                                "x-examples": [
                                                  0
                                                ]
                                              },
                                              "end": {
                                                "type": "integer",
                                                "description": "End stepping at this value",
                                                "example": 16,
                                                "x-examples": [
                                                  16
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "description": "Validate string matches an URI",
                                        "type": "object",
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
                                                "example": [
                                                  "http"
                                                ],
                                                "x-examples": [
                                                  [
                                                    "http"
                                                  ]
                                                ],
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
                                        "description": "Validate value matches a list (white list)",
                                        "type": "object",
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
                                                },
                                                "example": [
                                                  "foo",
                                                  "bar",
                                                  "fizz",
                                                  "buzz"
                                                ],
                                                "x-examples": [
                                                  [
                                                    "foo",
                                                    "bar",
                                                    "fizz",
                                                    "buzz"
                                                  ]
                                                ]
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
                            },
                            "example": [
                              {
                                "label": "Serial Number",
                                "key": "bluetooh-mac-address",
                                "filters": [
                                  {
                                    "type": "empty",
                                    "options": {}
                                  },
                                  {
                                    "type": "camel",
                                    "options": {}
                                  },
                                  {
                                    "type": "camel",
                                    "options": {}
                                  },
                                  {
                                    "type": "trim",
                                    "options": {
                                      "start": false,
                                      "end": false
                                    }
                                  },
                                  {
                                    "type": "suffix",
                                    "options": {
                                      "suffix": "MAN"
                                    }
                                  }
                                ],
                                "validators": [
                                  {
                                    "type": "uri",
                                    "options": {
                                      "schemes": [
                                        "http"
                                      ]
                                    }
                                  }
                                ]
                              },
                              {
                                "label": "Asset tag",
                                "key": "wifi-mac-address",
                                "filters": [
                                  {
                                    "type": "trim",
                                    "options": {
                                      "start": true,
                                      "end": false
                                    }
                                  },
                                  {
                                    "type": "prefix",
                                    "options": {
                                      "prefix": "MAN-"
                                    }
                                  }
                                ],
                                "validators": [
                                  {
                                    "type": "lessThan",
                                    "options": {
                                      "value": 42,
                                      "precision": 4,
                                      "include": true
                                    }
                                  },
                                  {
                                    "type": "hostname",
                                    "options": {
                                      "record_type": "HIP"
                                    }
                                  },
                                  {
                                    "type": "ends_with",
                                    "options": {
                                      "ends_with": "foo",
                                      "check_case": false
                                    }
                                  }
                                ]
                              }
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
                          "label": "10\" iPad",
                          "part_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                          "customer": {
                            "label": "Zones Inc",
                            "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                            "slug": "zones-inc",
                            "external_platform": {
                              "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                            },
                            "allowed_statuses": [
                              {
                                "status": "Reticulating Splines",
                                "category": "IN_PROGRESS"
                              }
                            ],
                            "created": "1992-08-12T08:06:10.993Z",
                            "updated": "2002-08-23T06:46:31.317Z"
                          },
                          "manufacturer": {
                            "part_number": "602-3075-01",
                            "label": "Apple Inc",
                            "manufacturer_id": "0cF15DfC-586c-bd1b-ADeb-95Ce468beee7",
                            "slug": "apple-inc",
                            "created": "2016-07-11T22:09:20.498Z",
                            "updated": "1942-12-06T05:12:04.745Z"
                          },
                          "slug": "10-ipad",
                          "serial_prefix": "S",
                          "input_filter": [
                            {
                              "label": "Bluetooh MAC address",
                              "key": "asset-tag",
                              "filters": [
                                {
                                  "type": "date",
                                  "options": {}
                                },
                                {
                                  "type": "date",
                                  "options": {}
                                },
                                {
                                  "type": "allowed_list",
                                  "options": {
                                    "approved_values": [
                                      "foo",
                                      "bar",
                                      "fizz",
                                      "buzz"
                                    ],
                                    "check_case": false,
                                    "default": "fizz"
                                  }
                                },
                                {
                                  "type": "number",
                                  "options": {}
                                }
                              ],
                              "validators": [
                                {
                                  "type": "lessThan",
                                  "options": {
                                    "value": 42,
                                    "precision": 3,
                                    "include": true
                                  }
                                },
                                {
                                  "type": "whiteList",
                                  "options": {
                                    "list": [
                                      "foo",
                                      "bar",
                                      "fizz",
                                      "buzz"
                                    ],
                                    "check_case": true
                                  }
                                },
                                {
                                  "type": "macAddress",
                                  "options": {}
                                },
                                {
                                  "type": "macAddress",
                                  "options": {}
                                },
                                {
                                  "type": "contains",
                                  "options": {
                                    "contains": "foo",
                                    "check_case": true
                                  }
                                }
                              ]
                            }
                          ],
                          "created": "1999-04-30T19:19:03.277Z",
                          "updated": "1971-01-10T16:33:44.126Z"
                        }
                      }
                    ]
                  },
                  "customer": {
                    "x-ref": "#customer",
                    "description": "The customer who manages this unit",
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
                  "current_location": {
                    "x-reg": "#location",
                    "description": "The current location for the unit",
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
                  "input_filter": {
                    "description": "Input Filters allow custom fields to be defined for entities",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "description": "Input filter specification",
                      "properties": {
                        "label": {
                          "type": "string",
                          "description": "Human readable name",
                          "example": "Serial Number",
                          "x-examples": [
                            "Serial Number",
                            "Asset tag",
                            "WiFi MAC address",
                            "Bluetooh MAC address"
                          ]
                        },
                        "key": {
                          "type": "string",
                          "description": "Slug used to store the property",
                          "example": "serial-number",
                          "x-examples": [
                            "serial-number",
                            "asset-tag",
                            "wifi-mac-address",
                            "bluetooh-mac-address"
                          ],
                          "readOnly": true,
                          "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
                        },
                        "filters": {
                          "type": "array",
                          "description": "A Collection of filters applied to the field",
                          "items": {
                            "anyOf": [
                              {
                                "description": "This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set",
                                "type": "object",
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
                                        },
                                        "example": [
                                          "foo",
                                          "bar",
                                          "fizz",
                                          "buzz"
                                        ],
                                        "x-examples": [
                                          [
                                            "foo",
                                            "bar",
                                            "fizz",
                                            "buzz"
                                          ]
                                        ]
                                      },
                                      "check_case": {
                                        "type": "boolean",
                                        "description": "Perform a case sensitive match. By default will not match case",
                                        "default": false
                                      },
                                      "default": {
                                        "type": "string",
                                        "description": "If this is set and the value is not in the approved_list, set the value to this",
                                        "nullable": true,
                                        "example": "fizz",
                                        "x-examples": [
                                          "fizz"
                                        ]
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "description": "Make the value camelCase",
                                "type": "object",
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
                                "description": "Filter to transform a value into a date",
                                "type": "object",
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
                                    "description": "Date filter has no options",
                                    "example": {},
                                    "x-examples": [
                                      {}
                                    ]
                                  }
                                }
                              },
                              {
                                "description": "Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty:\n# The number 0 or 0.0\n# empty string ''\n# A boolean false\n# The word 'false'\n# ",
                                "type": "object",
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
                                    "description": "empty filter has no options",
                                    "example": {},
                                    "x-examples": [
                                      {}
                                    ]
                                  }
                                }
                              },
                              {
                                "description": "Filter to transform a value into a float. Non numeric characters (including comma) will be removed",
                                "type": "object",
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
                                "description": "Make the value kebab-case",
                                "type": "object",
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
                                "description": "Make the value lowercase",
                                "type": "object",
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
                                "description": "Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed",
                                "type": "object",
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
                                    "description": "Number filter has no options",
                                    "example": {},
                                    "x-examples": [
                                      {}
                                    ]
                                  }
                                }
                              },
                              {
                                "description": "Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.",
                                "type": "object",
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
                                        "description": "The prefix to add",
                                        "example": "MAN-",
                                        "x-examples": [
                                          "MAN-"
                                        ]
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "description": "Make the value snake_case",
                                "type": "object",
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
                                "description": "Filter to transform a value into a string",
                                "type": "object",
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
                                    "description": "String filter has no options",
                                    "example": {},
                                    "x-examples": [
                                      {}
                                    ]
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
                                        "description": "The suffix to add",
                                        "example": "-MAN",
                                        "x-examples": [
                                          "MAN"
                                        ]
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "description": "Filter to trim whitespace from a value",
                                "type": "object",
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
                                "description": "Make the value UPPERCASE",
                                "type": "object",
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
                          "items": {
                            "anyOf": [
                              {
                                "description": "Validate number is between two values. By default, min and max are included",
                                "type": "object",
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
                                        "description": "Minimum value to check",
                                        "example": 42,
                                        "x-examples": [
                                          42
                                        ]
                                      },
                                      "max": {
                                        "type": "number",
                                        "description": "The maximum value to check",
                                        "example": 42,
                                        "x-examples": [
                                          42
                                        ]
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
                                "description": "Validate value does not match a list (black list)",
                                "type": "object",
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
                                        },
                                        "example": [
                                          "foo",
                                          "bar",
                                          "fizz",
                                          "buzz"
                                        ],
                                        "x-examples": [
                                          [
                                            "foo",
                                            "bar",
                                            "fizz",
                                            "buzz"
                                          ]
                                        ]
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
                                "description": "Validate string contains a value",
                                "type": "object",
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
                                        "description": "String must contain with this value",
                                        "example": "foo",
                                        "x-examples": [
                                          "foo"
                                        ]
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
                                "description": "Validate string is a correct email address",
                                "type": "object",
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
                                "description": "Validate string ends with a value",
                                "type": "object",
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
                                        "description": "String must end with this value",
                                        "example": "foo",
                                        "x-examples": [
                                          "foo"
                                        ]
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
                                "description": "Validate number equals a value",
                                "type": "object",
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
                                        "description": "The value to compare against",
                                        "example": 42,
                                        "x-examples": [
                                          42
                                        ]
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
                                "description": "Validate number is greater than a value. By default, this will check if value is greater than or equals to",
                                "type": "object",
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
                                        "description": "The value to compare against",
                                        "example": 42,
                                        "x-examples": [
                                          42
                                        ]
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
                                "description": "Validate string has a correct DNS records",
                                "type": "object",
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
                                "description": "Validate string matches an IP address format. Defaults to matching IPv4",
                                "type": "object",
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
                                        "example": [
                                          "IPv4"
                                        ],
                                        "x-examples": [
                                          [
                                            "IPv4"
                                          ]
                                        ],
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
                                "description": "Validate string is a certain length",
                                "type": "object",
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
                                        "description": "String must contain with this value",
                                        "example": "foo",
                                        "x-examples": [
                                          "foo"
                                        ]
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
                                "description": "Validate number is less than a value. By default, this will check if value is less than or equals to",
                                "type": "object",
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
                                        "description": "The value to compare against",
                                        "example": 42,
                                        "x-examples": [
                                          42
                                        ]
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
                                "description": "Validate string matches an MAC address format",
                                "type": "object",
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
                                "description": "Validate string matches a regular expression",
                                "type": "object",
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
                                        "description": "Mask to validate against",
                                        "example": "^[a-z]$",
                                        "x-examples": [
                                          "^[a-z]$"
                                        ]
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "description": "Validate string starts with a value",
                                "type": "object",
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
                                        "description": "String must start with this value",
                                        "example": "foo",
                                        "x-examples": [
                                          "foo"
                                        ]
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
                                "description": "Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.",
                                "type": "object",
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
                                        "description": "The step value",
                                        "example": 4,
                                        "x-examples": [
                                          4
                                        ]
                                      },
                                      "start": {
                                        "type": "integer",
                                        "description": "Start stepping at this value",
                                        "example": 0,
                                        "x-examples": [
                                          0
                                        ]
                                      },
                                      "end": {
                                        "type": "integer",
                                        "description": "End stepping at this value",
                                        "example": 16,
                                        "x-examples": [
                                          16
                                        ]
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "description": "Validate string matches an URI",
                                "type": "object",
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
                                        "example": [
                                          "http"
                                        ],
                                        "x-examples": [
                                          [
                                            "http"
                                          ]
                                        ],
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
                                "description": "Validate value matches a list (white list)",
                                "type": "object",
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
                                        },
                                        "example": [
                                          "foo",
                                          "bar",
                                          "fizz",
                                          "buzz"
                                        ],
                                        "x-examples": [
                                          [
                                            "foo",
                                            "bar",
                                            "fizz",
                                            "buzz"
                                          ]
                                        ]
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
                    },
                    "example": [
                      {
                        "label": "Serial Number",
                        "key": "bluetooh-mac-address",
                        "filters": [
                          {
                            "type": "empty",
                            "options": {}
                          },
                          {
                            "type": "camel",
                            "options": {}
                          },
                          {
                            "type": "camel",
                            "options": {}
                          },
                          {
                            "type": "trim",
                            "options": {
                              "start": false,
                              "end": false
                            }
                          },
                          {
                            "type": "suffix",
                            "options": {
                              "suffix": "MAN"
                            }
                          }
                        ],
                        "validators": [
                          {
                            "type": "uri",
                            "options": {
                              "schemes": [
                                "http"
                              ]
                            }
                          }
                        ]
                      },
                      {
                        "label": "Asset tag",
                        "key": "wifi-mac-address",
                        "filters": [
                          {
                            "type": "trim",
                            "options": {
                              "start": true,
                              "end": false
                            }
                          },
                          {
                            "type": "prefix",
                            "options": {
                              "prefix": "MAN-"
                            }
                          }
                        ],
                        "validators": [
                          {
                            "type": "lessThan",
                            "options": {
                              "value": 42,
                              "precision": 4,
                              "include": true
                            }
                          },
                          {
                            "type": "hostname",
                            "options": {
                              "record_type": "HIP"
                            }
                          },
                          {
                            "type": "ends_with",
                            "options": {
                              "ends_with": "foo",
                              "check_case": false
                            }
                          }
                        ]
                      }
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
                  "label": "10\" iPad for Hugo",
                  "part": {
                    "label": "10\" iPad",
                    "part_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                    "customer": {
                      "label": "Zones Inc",
                      "customer_id": "e530652e-28e8-4f64-84af-e1cf0ff7c805",
                      "slug": "zones-inc",
                      "external_platform": {
                        "ax_customer_id": "eff3ada3-0966-42be-a5e8-78efd3c52d39"
                      },
                      "allowed_statuses": [
                        {
                          "status": "Blocked",
                          "category": "PENDING"
                        },
                        {
                          "status": "Pending",
                          "category": "VERIFYING"
                        },
                        {
                          "status": "Pending",
                          "category": "BLOCKED"
                        },
                        {
                          "status": "In Progress",
                          "category": "CANCELLED"
                        },
                        {
                          "status": "Pending",
                          "category": "IN_PROGRESS"
                        }
                      ],
                      "created": "1970-09-18T06:05:53.512Z",
                      "updated": "1977-05-13T16:52:07.745Z"
                    },
                    "manufacturer": {
                      "part_number": "602-3075-01",
                      "label": "Apple Inc",
                      "manufacturer_id": "8AEe6c4A-Bddb-1C45-59D3-287eFdA57dfF",
                      "slug": "apple-inc",
                      "created": "1942-08-26T00:06:15.888Z",
                      "updated": "1962-06-03T13:45:26.845Z"
                    },
                    "slug": "10-ipad",
                    "serial_prefix": "S",
                    "input_filter": [
                      {
                        "label": "Bluetooh MAC address",
                        "key": "wifi-mac-address",
                        "filters": [
                          {
                            "type": "prefix",
                            "options": {
                              "prefix": "MAN-"
                            }
                          }
                        ],
                        "validators": [
                          {
                            "type": "contains",
                            "options": {
                              "contains": "foo",
                              "check_case": true
                            }
                          },
                          {
                            "type": "uri",
                            "options": {
                              "schemes": [
                                "http"
                              ]
                            }
                          }
                        ]
                      },
                      {
                        "label": "WiFi MAC address",
                        "key": "wifi-mac-address",
                        "filters": [
                          {
                            "type": "prefix",
                            "options": {
                              "prefix": "MAN-"
                            }
                          }
                        ],
                        "validators": [
                          {
                            "type": "uri",
                            "options": {
                              "schemes": [
                                "http"
                              ]
                            }
                          },
                          {
                            "type": "length",
                            "options": {
                              "length": "foo",
                              "operator": "greater_than"
                            }
                          }
                        ]
                      }
                    ],
                    "created": "1979-06-11T19:42:41.842Z",
                    "updated": "2016-07-03T03:37:48.29Z"
                  },
                  "unit_id": "ec5db56d-32e6-4e5d-9bef-1016f3e13670",
                  "slug": "10-ipad-for-hugo",
                  "serial_number": "4EAVPS67GNL8",
                  "raw_serial_number": "S4EAVPS67GNL8",
                  "tenant_part_number": "AX-44333",
                  "manufacturer": {
                    "part_number": "AX-44333",
                    "label": "Apple Inc",
                    "manufacturer_id": "F104b9Ee-986D-1B47-DFaf-d2D1A50621ad",
                    "slug": "apple-inc",
                    "created": "1960-02-08T01:12:18.873Z",
                    "updated": "1957-07-26T13:40:47.653Z"
                  },
                  "vendor": {
                    "vendor_id": "3beea89a-3367-4beb-aa43-2aadc0873785",
                    "label": "Micro Center",
                    "part_number": "AX-44333",
                    "slug": "micro-center",
                    "created": "1984-10-25T22:42:40.826Z",
                    "updated": "2007-06-10T15:11:26.755Z"
                  },
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
                        "category": "CANCELLED"
                      }
                    ],
                    "created": "2017-05-31T00:57:09.365Z",
                    "updated": "1976-03-27T22:35:37.501Z"
                  },
                  "current_location": {
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
                    "created": "1998-05-25T06:51:56.605Z",
                    "updated": "1965-08-21T14:35:44.248Z"
                  },
                  "input_filter": [
                    {
                      "label": "Asset tag",
                      "key": "bluetooh-mac-address",
                      "filters": [
                        {
                          "type": "float",
                          "options": {
                            "precision": 4
                          }
                        }
                      ],
                      "validators": [
                        {
                          "type": "lessThan",
                          "options": {
                            "value": 42,
                            "precision": 2,
                            "include": false
                          }
                        },
                        {
                          "type": "equals",
                          "options": {
                            "value": 42,
                            "precision": 6
                          }
                        },
                        {
                          "type": "greater_than",
                          "options": {
                            "value": 42,
                            "precision": 3,
                            "include": true
                          }
                        },
                        {
                          "type": "white_list",
                          "options": {
                            "list": [
                              "foo",
                              "bar",
                              "fizz",
                              "buzz"
                            ],
                            "check_case": true
                          }
                        },
                        {
                          "type": "lessThan",
                          "options": {
                            "value": 42,
                            "precision": 2,
                            "include": false
                          }
                        }
                      ]
                    },
                    {
                      "label": "Bluetooh MAC address",
                      "key": "asset-tag",
                      "filters": [
                        {
                          "type": "upper",
                          "options": {}
                        },
                        {
                          "type": "suffix",
                          "options": {
                            "suffix": "MAN"
                          }
                        }
                      ],
                      "validators": [
                        {
                          "type": "email_address",
                          "options": {
                            "strict": false,
                            "lookup": false
                          }
                        }
                      ]
                    }
                  ],
                  "current_status": {
                    "status": "Pending",
                    "category": "IN_PROGRESS"
                  },
                  "status_history": [
                    {
                      "status": "In Progress",
                      "created": "1962-06-05T02:42:38.102Z",
                      "category": "IN_PROGRESS"
                    },
                    {
                      "status": "Cancelled",
                      "created": "1958-10-03T02:08:15.992Z",
                      "category": "PENDING"
                    }
                  ],
                  "created": "1957-05-16T16:17:44.402Z",
                  "updated": "1976-11-28T17:11:46.615Z"
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

<h3 id="fetchallunits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged response for units|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="fetchallunits-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» _embedded|object|false|none|none|
|»» nter:units|[allOf]|false|none|none|
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

<h2 id="tocSpart">Part</h2>

<a id="schemapart"></a>

```yaml
label: 10" iPad
part_id: ec5db56d-32e6-4e5d-9bef-1016f3e13670
customer:
  label: Zones Inc
  customer_id: e530652e-28e8-4f64-84af-e1cf0ff7c805
  slug: zones-inc
  external_platform:
    ax_customer_id: eff3ada3-0966-42be-a5e8-78efd3c52d39
  allowed_statuses:
    - status: Reticulating Splines
      category: IN_PROGRESS
  created: '1992-08-12T08:06:10.993Z'
  updated: '2002-08-23T06:46:31.317Z'
manufacturer:
  part_number: 602-3075-01
  label: Apple Inc
  manufacturer_id: 0cF15DfC-586c-bd1b-ADeb-95Ce468beee7
  slug: apple-inc
  created: '2016-07-11T22:09:20.498Z'
  updated: '1942-12-06T05:12:04.745Z'
slug: 10-ipad
serial_prefix: S
input_filter:
  - label: Bluetooh MAC address
    key: asset-tag
    filters:
      - type: date
        options: {}
      - type: date
        options: {}
      - type: allowed_list
        options:
          approved_values:
            - foo
            - bar
            - fizz
            - buzz
          check_case: false
          default: fizz
      - type: number
        options: {}
    validators:
      - type: lessThan
        options:
          value: 42
          precision: 3
          include: true
      - type: whiteList
        options:
          list:
            - foo
            - bar
            - fizz
            - buzz
          check_case: true
      - type: macAddress
        options: {}
      - type: macAddress
        options: {}
      - type: contains
        options:
          contains: foo
          check_case: true
created: '1999-04-30T19:19:03.277Z'
updated: '1971-01-10T16:33:44.126Z'

```

*Defines the properties for a part*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|part_id|string|true|none|Unique identifier|
|label|string|true|none|Label for the part|
|slug|string|false|none|Auto-generated slug for the part|
|customer|object|true|none|Customer|
|» customer_id|string|true|none|Customer identifier|
|» label|string|true|none|Label for the customer|
|» slug|string|false|none|Auto generated slug|
|» external_platform|object\|null|false|none|External Identifiers for the customer|
|»» **additionalProperties**|string|false|none|none|
|» allowed_statuses|[object]|false|none|List of allowed statuses|
|»» status|string|true|none|A Custom label for the status|
|»» category|string|false|none|The classifier for the statues|
|» manufacturer|object|true|none|Manufacturer information for the part|
|»» part_number|string|true|none|Manufacturer part number|
|» serial_prefix|string|false|none|A serial number prefix for the part|
|» input_filter|[object]|false|none|Input Filters allow custom fields to be defined for entities|
|»» label|string|false|none|Human readable name|
|»» key|string|false|read-only|Slug used to store the property|
|»» filters|[anyOf]|false|none|A Collection of filters applied to the field|

*anyOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|object|false|none|This filter will set the value based on a list of approved values. If the value is not in the list, it will then be set to empty unless the default option is set|
|»»»» type|string|true|none|none|
|»»»» options|object|true|none|none|
|»»»»» approved_values|[string]|true|none|The list of approved values|
|»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|
|»»»»» default|string\|null|false|none|If this is set and the value is not in the approved_list, set the value to this|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»» *anonymous*|object|false|none|Make the value camelCase|
|»»»»» type|string|true|none|none|
|»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»» *anonymous*|object|false|none|Filter to transform a value into a date|
|»»»»» type|string|true|none|none|
|»»»»» options|object|true|none|Date filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»» *anonymous*|object|false|none|Filter to transform values into null. This is helpful when trying to make a value required. The following are considered empty: # The number 0 or 0.0 # empty string '' # A boolean false # The word 'false' #|
|»»»»» type|string|true|none|none|
|»»»»» options|object|true|none|empty filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»» *anonymous*|object|false|none|Filter to transform a value into a float. Non numeric characters (including comma) will be removed|
|»»»»» type|string|true|none|none|
|»»»»» options|object|true|none|none|
|»»»»»» precision|integer|false|none|How many decimal places to preserve|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»» *anonymous*|object|false|none|Make the value kebab-case|
|»»»»»» type|string|true|none|none|
|»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»» *anonymous*|object|false|none|Make the value lowercase|
|»»»»»» type|string|true|none|none|
|»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»» *anonymous*|object|false|none|Filter to transform a value into a number. Non numeric characters (including comma and decimal points) will be removed|
|»»»»»» type|string|true|none|none|
|»»»»»» options|object|true|none|Number filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»» *anonymous*|object|false|none|Add a prefix to the start of a string. If the string already start with the prefix, it will not prepend.|
|»»»»»» type|string|true|none|none|
|»»»»»» options|object|true|none|none|
|»»»»»»» prefix|string|true|none|The prefix to add|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»» *anonymous*|object|false|none|Make the value snake_case|
|»»»»»»» type|string|true|none|none|
|»»»»»»» options|object|true|none|This filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»» *anonymous*|object|false|none|Filter to transform a value into a string|
|»»»»»»» type|string|true|none|none|
|»»»»»»» options|object|true|none|String filter has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»» *anonymous*|object|false|none|Add a suffix to the start of a string. If the string already start with the suffix, it will not append.|
|»»»»»»» type|string|true|none|none|
|»»»»»»» options|object|true|none|none|
|»»»»»»»» suffix|string|true|none|The suffix to add|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»» *anonymous*|object|false|none|Filter to trim whitespace from a value|
|»»»»»»»» type|string|true|none|none|
|»»»»»»»» options|object|true|none|By default will trim from the start and end|
|»»»»»»»»» start|boolean|false|none|Remove white space from the start of the string|
|»»»»»»»»» end|boolean|false|none|Remove white space from the end of the string|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»» *anonymous*|object|false|none|Make the value UPPERCASE|
|»»»»»»»»» type|string|true|none|none|
|»»»»»»»»» options|object|true|none|This filter has no options|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»» validators|[anyOf]|false|none|A set of validators to use for this field|

*anyOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»» *anonymous*|object|false|none|Validate number is between two values. By default, min and max are included|
|»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»» min|number|true|none|Minimum value to check|
|»»»»»»»»»»» max|number|true|none|The maximum value to check|
|»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»» *anonymous*|object|false|none|Validate value does not match a list (black list)|
|»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»» list|[string]|true|none|The list of approved values|
|»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»» *anonymous*|object|false|none|Validate string contains a value|
|»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»» contains|string|true|none|String must contain with this value|
|»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»» *anonymous*|object|false|none|Validate string is a correct email address|
|»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»» strict|boolean|false|none|Enforce strict standards from ARPA. This will enforce the length of the string|
|»»»»»»»»»»»»»» lookup|boolean|false|none|Look up the host name and check if it has a valid MX record|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string ends with a value|
|»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»» ends_with|string|true|none|String must end with this value|
|»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number equals a value|
|»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»» precision|integer|false|none|When value is a float, this will set the decimal precision|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is greater than a value. By default, this will check if value is greater than or equals to|
|»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string has a correct DNS records|
|»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»» record_type|string|false|none|DNS record type to validate|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an IP address format. Defaults to matching IPv4|
|»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»» versions|[string]|false|none|IP Version to match against|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string is a certain length|
|»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»» length|string|true|none|String must contain with this value|
|»»»»»»»»»»»»»»»»»»»» operator|string|false|none|Which type of length comparision to make|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate number is less than a value. By default, this will check if value is less than or equals to|
|»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»» value|number|true|none|The value to compare against|
|»»»»»»»»»»»»»»»»»»»»» precision|integer|false|none|When number is a float, this will set the decimal precision|
|»»»»»»»»»»»»»»»»»»»»» include|boolean|false|none|Include the value in the check|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an MAC address format|
|»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»» options|object|true|none|This validator has no options|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches a regular expression|
|»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»» mask|string|true|none|Mask to validate against|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string starts with a value|
|»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»» starts_with|string|true|none|String must start with this value|
|»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validates that a value follows a step. Both start and end options do not have to sync with the step. If they do not sync then find the nearest step.|
|»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»» step|number|true|none|The step value|
|»»»»»»»»»»»»»»»»»»»»»»»» start|integer|false|none|Start stepping at this value|
|»»»»»»»»»»»»»»»»»»»»»»»» end|integer|false|none|End stepping at this value|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate string matches an URI|
|»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»» schemes|[string]|false|none|Schemes to match. By default all are matched|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»»»»»»»»»»»»»»»»»»»»» *anonymous*|object|false|none|Validate value matches a list (white list)|
|»»»»»»»»»»»»»»»»»»»»»»»»» type|string|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»» options|object|true|none|none|
|»»»»»»»»»»»»»»»»»»»»»»»»»» list|[string]|true|none|The list of approved values|
|»»»»»»»»»»»»»»»»»»»»»»»»»» check_case|boolean|false|none|Perform a case sensitive match. By default will not match case|

#### Enumerated Values

|Property|Value|
|---|---|
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

