---
layout: page
parent: Niagara API
nav_order: 0
title: Permissions
---

# Permissions

* Do not remove this line (it will not be displayed)
{:toc}

Every role will be granted a set of permissions.

Users who have a relationship with an entity will automatically be granted read access to that entity. Any other action
the user wishes to perform on that entity will be checked against the role. Permissions are granted explicitly with the
role or implicitly through a parent or sibling.

For example, granting the `customer:create` permission automatically grants the `customer:update` permission on the same
entity along with `program:create` permission for all programs under that customer. Since `program:create` also grants
`project:create` for all projects under the program, the permission chains down the tree.

### Required permissions

Some permissions require being explicitly granted other permissions. For example: to create a work-order, the user
must have been granted `customer:read` for the customer which the work order is regarding.

## Permission table

{% include_relative /permissions_table.md %}
