---
layout: page
parent: Niagara API
nav_order: 3
redirect_from:
  - /rel/contacts
title: Contacts
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="contacts">Contacts</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Contacts contain email and phone number information for a non-user entity which allows sending notification information without the need to create a user login

## Security Restrictions

Contacts are considered a top-level `entity.` `Users` must be granted the `create` permission on the Contact entity to be able to create contacts. Grant the `create` or `update` permissions to the user for the linked `entity` for the relationship operation to be approved.

# Authentication

- oAuth2 authentication. 

    - Flow: authorizationCode
    - Authorization URL = [https://auth.nterprise.com/oauth/authorize](https://auth.nterprise.com/oauth/authorize)
    - Token URL = [https://auth.nterprise.com/oauth/token](https://auth.nterprise.com/oauth/token)

|Scope|Scope Description|
|---|---|
|contact:create|Allows creating a contact|
|contact:update|Allows editing a contact|
|contact:delete|Allows deleting a contact|
|contact:read|Allows access to a contact|
|contact:all|Allows reading all contacts|

<h1 id="contacts-contact">Contact</h1>

## Operations

### GET /contacts

<a id="opIdfetchAllContacts"></a>

Fetches A Page of contacts

<aside class="warning">
Permissions required:<br>
<ul><li>contact:read-all</li></ul>
</aside>

<h3 id="fetchallcontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|How many items to return at one time (max 100)|
|offset|query|string|false|Continue from last offset|

> Example responses

> 200 Response

```json
{
  "total_count": 21,
  "limit": 42,
  "offset": "next-offset",
  "_embedded": {
    "nter:contacts": [
      {
        "contact_id": "contact",
        "label": "Major",
        "created": "2019-08-19T00:01:02.000Z",
        "updated": "2020-08-19T01:01:02.000Z",
        "name": "Major Samantha Carter",
        "email": "s.carter@sg1.com",
        "phone": "518-867-5309",
        "input_filter": [],
        "_links": {
          "self": {
            "href": "https://api.nterprise.com/contacts/contact"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/contacts?limit=42"
    }
  }
}
```

### POST /contacts

<a id="opIdcreateContact"></a>

Creates a new contact

<aside class="warning">
Permissions required:<br>
<ul><li>contact:create</li></ul>
</aside>

> Body parameter

<h3 id="createcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|body|string|true|Label for the entity|
|name|body|string|true|Contact name|
|email|body|string(email)|true|Email address|
|phone|body|string|false|Phone number|
|<a href="https://docs.nterprise.com/niagara/inputFilter.html">input_filter</a>|body|[object]|false|Input Filters allow custom fields to be defined for entities|

> Example responses

> 200 Response

```json
{
  "contact_id": "contact",
  "label": "Major",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "name": "Major Samantha Carter",
  "email": "s.carter@sg1.com",
  "phone": "518-867-5309",
  "input_filter": [],
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/contacts/contact"
    }
  }
}
```

### GET /contacts/{contact_id}

<a id="opIdfetchContactById"></a>

Fetches a contact by the contact Id

<aside class="warning">
Permissions required:<br>
<ul><li>contact:read</li></ul>
</aside>

<h3 id="fetchcontactbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|Id of the contact|

> Example responses

> 200 Response

```json
{
  "contact_id": "contact",
  "label": "Major",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "name": "Major Samantha Carter",
  "email": "s.carter@sg1.com",
  "phone": "518-867-5309",
  "input_filter": [],
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/contacts/contact"
    }
  }
}
```

### PUT /contacts/{contact_id}

<a id="opIdupdateContact"></a>

Updates a contact

<aside class="warning">
Permissions required:<br>
<ul><li>contact:update</li></ul>
</aside>

> Body parameter

<h3 id="updatecontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|Id of the contact|
|label|body|string|true|Label for the entity|
|name|body|string|true|Contact name|
|email|body|string(email)|true|Email address|
|phone|body|string|false|Phone number|
|<a href="https://docs.nterprise.com/niagara/inputFilter.html">input_filter</a>|body|[object]|false|Input Filters allow custom fields to be defined for entities|

> Example responses

> 200 Response

```json
{
  "contact_id": "contact",
  "label": "Major",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "name": "Major Samantha Carter",
  "email": "s.carter@sg1.com",
  "phone": "518-867-5309",
  "input_filter": [],
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/contacts/contact"
    }
  }
}
```

### DELETE /contacts/{contact_id}

<a id="opIddeleteContact"></a>

This will remove the contact from the system

<aside class="warning">
Permissions required:<br>
<ul><li>contact:delete</li></ul>
</aside>

<h3 id="deletecontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|Id of the contact|

<h1 id="contacts-action">Action</h1>

## Operations

### GET /contacts/{contact_id}/actions

<a id="opIdfetchActionsForContact"></a>

Fetch a page of actions for a contact

<aside class="warning">
Permissions required:<br>
<ul><li>action:read</li></ul>
</aside>

<h3 id="fetchactionsforcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|Id of the contact|

> Example responses

> 200 Response

```json
{
  "total_count": 21,
  "limit": 42,
  "offset": "next-offset",
  "_embedded": {
    "nter:batches": [
      {
        "action_id": "action",
        "label": "Update status when workflow starts",
        "created": "2019-08-19T00:01:02.000Z",
        "updated": "2020-08-19T01:01:02.000Z",
        "event": "WOR.status-changed",
        "entity": {
          "entity_type": "CUS",
          "entity_id": "customer"
        },
        "order": "a",
        "sequence": "after",
        "criteria": [
          {
            "entity": "WOR",
            "property": "current_status",
            "operator": "equals",
            "value": {
              "status": "Completed",
              "category": "COMPLETE"
            }
          }
        ],
        "effect": [
          {
            "effect_type": "notify",
            "contacts": [
              "contact_one",
              "contact_two"
            ],
            "label": "Work order complete",
            "message": "A work order has completed",
            "severity": "normal"
          }
        ],
        "_links": {
          "self": {
            "href": "https://api.nterprise.com/actions/action"
          }
        }
      }
    ]
  },
  "_links": {
    "next": {
      "href": "https://api.nterprise.com/actions?limit=42&offset=next-offset"
    },
    "self": {
      "href": "https://api.nterprise.com/actions?limit=42"
    }
  }
}
```

### POST /contacts/{contact_id}/actions

<a id="opIdcreateActionForContact"></a>

Creates a new action

<aside class="warning">
Permissions required:<br>
<ul><li>action:create</li></ul>
</aside>

> Body parameter

<h3 id="createactionforcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|Id of the contact|
|label|body|string|true|Label for the entity|
|entity|body|object|true|Entity the action is configured for|
|&nbsp;&nbsp; entity_id|body|string|false|Entity identifier|
|&nbsp;&nbsp; entity_type|body|any|false|none|
|sequence|body|string|true|When the action should fire|
|event|body|string|true|Possible entity events|
|criteria|body|[object]|true|none|
|&nbsp;&nbsp; entity|body|any|true|none|
|&nbsp;&nbsp; property|body|string|true|Property on entity|
|&nbsp;&nbsp; operator|body|string|true|Operation to perform|
|&nbsp;&nbsp; value|body|string|false|The value to compare|
|effect|body|[anyOf]|true|Effect to apply|
|&nbsp;&nbsp; *anonymous*|body|object|false|Effect which notifies a user|
|&nbsp;&nbsp;&nbsp;&nbsp; effect_type|body|string|true|Name of the effect type|
|&nbsp;&nbsp;&nbsp;&nbsp; options|body|object|true|Options for the effect|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; contacts|body|[string]|true|List of contacts to notify|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label|body|string|true|Label for the entity|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; message|body|string|true|The message|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; severity|body|string|true|Severity of the notification|
|&nbsp;&nbsp; *anonymous*|body|object|false|Effect which notifies a user|
|&nbsp;&nbsp;&nbsp;&nbsp; effect_type|body|string|true|Name of the effect type|
|&nbsp;&nbsp;&nbsp;&nbsp; options|body|object|true|Options for the effect|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; entity|body|any|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; property|body|string|true|Entity property to update|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; value|body|string|true|Value to set|

> Example responses

> 200 Response

```json
{
  "action_id": "action",
  "label": "Update status when workflow starts",
  "created": "2019-08-19T00:01:02.000Z",
  "updated": "2020-08-19T01:01:02.000Z",
  "event": "WOR.status-changed",
  "entity": {
    "entity_type": "CUS",
    "entity_id": "customer"
  },
  "order": "a",
  "sequence": "after",
  "criteria": [
    {
      "entity": "WOR",
      "property": "current_status",
      "operator": "equals",
      "value": {
        "status": "Completed",
        "category": "COMPLETE"
      }
    }
  ],
  "effect": [
    {
      "effect_type": "notify",
      "contacts": [
        "contact_one",
        "contact_two"
      ],
      "label": "Work order complete",
      "message": "A work order has completed",
      "severity": "normal"
    }
  ],
  "_links": {
    "self": {
      "href": "https://api.nterprise.com/actions/action"
    }
  }
}
```

# Embedded Schemas

## Contact
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact_id|string|true|read-only|Identifier for the contact|
|label|string|true|none|Label for the entity|
|created|string(date-time)|true|read-only|Date the entity was created|
|updated|string(date-time)|true|read-only|Last date the entity was updated|
|name|string|true|none|Contact name|
|email|string(email)|true|none|Email address|
|phone|string|true|none|Phone number|
|input_filter|[object]|true|none|Input Filters allow custom fields to be defined for entities|

#### Specification

```yaml
type: object
required:
  - updated
  - created
  - label
  - input_filter
  - name
  - email
  - contact_id
  - phone
properties:
  contact_id:
    description: Identifier for the contact
    type: string
    readOnly: true
    pattern: ^[0-9a-zA-Z-_]+$
  label:
    type: string
    description: Label for the entity
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
  name:
    type: string
    description: Contact name
  email:
    type: string
    format: email
    description: Email address
  phone:
    type: string
    description: Phone number
  input_filter:
    type: array
    description: Input Filters allow custom fields to be defined for entities
    x-nter-see: https://docs.nterprise.com/niagara/inputFilter.html
    x-nter-no-example: true
    items:
      type: object
      description: Input filter specification
      required:
        - label
        - key
        - filters
        - validators
      additionalProperties: false
      properties:
        label:
          type: string
          description: Human readable name
          x-nter-skip-param: true
        key:
          type: string
          description: Slug used to store the property
          readOnly: true
          pattern: ^[a-z0-9]+(?:_[a-z0-9]+)*$
          x-nter-skip-param: true
        filters:
          type: array
          description: A Collection of filters applied to the field
          maxItems: 100
          x-nter-skip-param: true
          items:
            anyOf:
              - x-nter-skip-param: true
                type: object
                description: This filter will set the value based on a list of approved values.
                  If the value is not in the list, it will then be set to empty
                  unless the default option is set
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - allowed_list
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - approved_values
                    properties:
                      approved_values:
                        type: array
                        minimum: 1
                        maximum: 100
                        description: The list of approved values
                        x-nter-skip-param: true
                      check_case:
                        type: boolean
                        description: Perform a case sensitive match. By default will not match case
                        default: false
                        x-nter-skip-param: true
                      default:
                        type: string
                        nullable: true
                        description: If this is set and the value is not in the approved_list, set the
                          value to this
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: This filter will remove all non numbers from the value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - alpha
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: This filter will make the value true or false
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - boolean
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Make the value camelCase
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - camel
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Filter to transform a value into a date
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - date
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: Date filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: This filter will remove all numbers from the value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - digits
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Filter to transform values into null. This is helpful when trying
                  to make a value required
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - empty
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: empty filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Filter to transform a value into a float. Non numeric characters
                  (including comma) will be removed
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - float
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    properties:
                      precision:
                        type: integer
                        minimum: 1
                        maximum: 8
                        default: 3
                        description: How many decimal places to preserve
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Make the value kebab-case
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - kebab
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Make the value lowercase
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - lower
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Filter to transform a value into a number. Non numeric characters
                  (including comma and decimal points) will be removed
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - number
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: Number filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Add a prefix to the start of a string. If the string already start
                  with the prefix, it will not prepend.
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - prefix
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - prefix
                    properties:
                      prefix:
                        type: string
                        description: The prefix to add
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Make the value snake_case
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - snake
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: This filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Filter to transform a value into a string
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - string
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: String filter has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                description: Add a suffix to the start of a string. If the string already start
                  with the suffix, it will not append.
                type: object
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - suffix
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - suffix
                    properties:
                      suffix:
                        type: string
                        description: The suffix to add
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Filter to trim whitespace from a value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - trim
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: By default will trim from the start and end
                    x-nter-skip-param: true
                    properties:
                      start:
                        type: boolean
                        description: Remove white space from the start of the string
                        default: true
                        x-nter-skip-param: true
                      end:
                        type: boolean
                        description: Remove white space from the end of the string
                        default: true
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Make the value UPPERCASE
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - upper
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: This filter has no options
                    x-nter-skip-param: true
        validators:
          type: array
          description: A set of validators to use for this field
          maxItems: 100
          x-nter-skip-param: true
          items:
            anyOf:
              - x-nter-skip-param: true
                type: object
                description: This is always valid
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - always
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: This validator has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate number is between two values. By default, min and max are
                  included
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - between
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - min
                      - max
                    properties:
                      min:
                        type: number
                        description: Minimum value to check
                        x-nter-skip-param: true
                      max:
                        type: number
                        description: The maximum value to check
                        x-nter-skip-param: true
                      precision:
                        type: integer
                        description: When number is a float, this will set the decimal precision
                        minimum: 1
                        maximum: 8
                        default: 3
                        x-nter-skip-param: true
                      include:
                        type: boolean
                        description: Include the value in the check
                        default: true
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate value does not match a list (black list)
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - black_list
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - list
                    properties:
                      list:
                        type: array
                        minimum: 1
                        maximum: 100
                        description: The list of approved values
                        items:
                          type: string
                        x-nter-skip-param: true
                      check_case:
                        type: boolean
                        description: Perform a case sensitive match. By default will not match case
                        default: false
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate string contains a value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - contains
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - contains
                    properties:
                      contains:
                        type: string
                        description: String must contain with this value
                        x-nter-skip-param: true
                      check_case:
                        type: boolean
                        description: Perform a case sensitive match. By default will not match case
                        default: false
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate string is a correct email address
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - email_address
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    properties:
                      strict:
                        type: boolean
                        description: Enforce strict standards from ARPA. This will enforce the length of
                          the string
                        default: true
                        x-nter-skip-param: true
                      lookup:
                        type: boolean
                        description: Look up the host name and check if it has a valid MX record
                        default: false
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate string ends with a value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - ends_with
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - ends_with
                    properties:
                      ends_with:
                        type: string
                        description: String must end with this value
                        x-nter-skip-param: true
                      check_case:
                        type: boolean
                        description: Perform a case sensitive match. By default will not match case
                        default: false
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate number equals a value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - equals
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - value
                    properties:
                      value:
                        type: number
                        description: The value to compare against
                        x-nter-skip-param: true
                      precision:
                        type: integer
                        description: When value is a float, this will set the decimal precision
                        minimum: 1
                        maximum: 8
                        default: 3
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate number is greater than a value. By default, this will
                  check if value is greater than or equals to
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - greater_than
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - value
                    properties:
                      value:
                        type: number
                        description: The value to compare against
                        x-nter-skip-param: true
                      precision:
                        type: integer
                        description: When number is a float, this will set the decimal precision
                        minimum: 1
                        maximum: 8
                        default: 3
                        x-nter-skip-param: true
                      include:
                        type: boolean
                        description: Include the value in the check
                        default: true
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate string has a correct DNS records
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - hostname
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    properties:
                      record_type:
                        type: string
                        description: DNS record type to validate
                        default: A
                        enum:
                          - A
                          - AAAA
                          - AFSDB
                          - APL
                          - CAA
                          - CDNSKEY
                          - CDS
                          - CERT
                          - CNAME
                          - CSYNC
                          - DHCID
                          - DLV
                          - DNAME
                          - DNSKEY
                          - DS
                          - HIP
                          - IPSECKEY
                          - KEY
                          - KX
                          - LOC
                          - MX
                          - NAPTR
                          - NS
                          - NSEC
                          - NSEC3
                          - NSEC3PARAM
                          - OPENPGPKEY
                          - PTR
                          - RRSIG
                          - RP
                          - SIG
                          - SMIMEA
                          - SOA
                          - SRV
                          - SSHFP
                          - TA
                          - TKEY
                          - TLSA
                          - TSIG
                          - TXT
                          - URI
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate string matches an IP address format. Defaults to matching
                  IPv4
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - ip_address
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    properties:
                      version:
                        type: string
                        description: IP Version to match against
                        enum:
                          - IPv4
                          - IPv6
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate string is a certain length
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - length
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - length
                    properties:
                      length:
                        type: number
                        description: Length to compare with
                        x-nter-skip-param: true
                      operator:
                        type: string
                        description: Which type of length comparision to make
                        default: equals
                        enum:
                          - equals
                          - less_than
                          - less_than_equals
                          - greater_than
                          - greater_than_equals
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate number is less than a value. By default, this will check
                  if value is less than or equals to
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - less_than
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - value
                    properties:
                      value:
                        type: number
                        description: The value to compare against
                        x-nter-skip-param: true
                      precision:
                        type: integer
                        description: When number is a float, this will set the decimal precision
                        minimum: 1
                        maximum: 8
                        default: 3
                        x-nter-skip-param: true
                      include:
                        type: boolean
                        description: Include the value in the check
                        default: true
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate string matches an MAC address format
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - mac_address
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: This validator has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate string matches a regular expression
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - mask
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - mask
                    properties:
                      mask:
                        type: string
                        description: Mask to validate against
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: This is never valid
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - never
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: This validator has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validates that the value is present and not set to 'null', '0' or
                  an empty string
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - required
                    x-nter-skip-param: true
                  options:
                    type: object
                    description: Required validator has no options
                    x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate string starts with a value
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - starts_with
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - starts_with
                    properties:
                      starts_with:
                        type: string
                        description: String must start with this value
                        x-nter-skip-param: true
                      check_case:
                        type: boolean
                        description: Perform a case sensitive match. By default will not match case
                        default: false
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validates that a value follows a step. Both start and end options
                  do not have to sync with the step. If they do not sync then
                  find the nearest step.
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - step
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - step
                    properties:
                      step:
                        type: number
                        description: The step value
                        x-nter-skip-param: true
                      start:
                        type: number
                        nullable: true
                        description: Start stepping at this value
                        x-nter-skip-param: true
                      end:
                        type: number
                        nullable: true
                        description: End stepping at this value
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate string matches an URI
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - uri
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    properties:
                      schemes:
                        type: array
                        description: Schemes to match. By default all are matched
                        items:
                          type: string
                          enum:
                            - "http:"
                            - "https:"
                            - "sip:"
                            - "sips:"
                            - "ftp:"
                            - "ftps:"
                            - "ldap:"
                            - "ldaps:"
                            - "file:"
                            - "udp:"
                            - "tcp:"
                            - "urn:"
                        x-nter-skip-param: true
              - x-nter-skip-param: true
                type: object
                description: Validate value matches a list (white list)
                required:
                  - type
                  - options
                properties:
                  type:
                    type: string
                    enum:
                      - white_list
                    x-nter-skip-param: true
                  options:
                    type: object
                    x-nter-skip-param: true
                    required:
                      - list
                    properties:
                      list:
                        type: array
                        minimum: 1
                        maximum: 100
                        description: The list of approved values
                        items:
                          type: string
                        x-nter-skip-param: true
                      check_case:
                        type: boolean
                        description: Perform a case sensitive match. By default will not match case
                        default: false
                        x-nter-skip-param: true
        locked:
          type: boolean
          description: Defines the field as being locked higher up in the hierarchy. This
            prevents child entities from making changes to the filters or
            validators
          x-nter-skip-param: true
        description:
          type: string
          nullable: true
          description: Provide a description for the field
          x-nter-skip-param: true
        value:
          type: string
          nullable: true
          description: The validated and filtered value. This is always a string so
            consumers MUST extrapolate out type
          x-nter-skip-param: true
        inherited_from:
          x-nter-skip-param: true
          oneOf:
            - type: "null"
              x-nter-skip-param: true
            - x-nter-skip-param: true
              type: string
              description: Entity type
              enum:
                - BAT
                - CON
                - CTX
                - CUS
                - FILE
                - LOC
                - MFR
                - NOTE
                - PART
                - PGM
                - PRJ
                - QUE
                - RES
                - SRES
                - TEN
                - UNIT
                - USER
                - VEN
                - WKF
                - WOR
        apply_to:
          x-nter-skip-param: true
          type: string
          description: Entity type
          enum:
            - BAT
            - CON
            - CTX
            - CUS
            - FILE
            - LOC
            - MFR
            - NOTE
            - PART
            - PGM
            - PRJ
            - QUE
            - RES
            - SRES
            - TEN
            - UNIT
            - USER
            - VEN
            - WKF
            - WOR

```

