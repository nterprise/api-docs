
### Action

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="action:create">action:create</span>|Allows creating a action|<a href="#action:delete">action:delete</a><br><a href="#action:read">action:read</a><br><a href="#action:update">action:update</a>|||
|<span id="action:create-global">action:create-global</span>|Allows creating an action anywhere|<a href="#action:delete">action:delete</a><br><a href="#action:update">action:update</a>|<a href="#action:read">action:read</a>||
|<span id="action:delete">action:delete</span>|Allows deleting a action|<a href="#action:read">action:read</a>|||
|<span id="action:read">action:read</span>|Allows reading a action||||
|<span id="action:read-all">action:read-all</span>|Allows reading all actions|<a href="#action:read">action:read</a>|||
|<span id="action:update">action:update</span>|Allows updating a action|<a href="#action:read">action:read</a>|||

### Batch

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="batch:attach">batch:attach</span>|Allows creating relations for a batch|<a href="#batch:detach">batch:detach</a><br><a href="#batch:relations-read-all">batch:relations-read-all</a>|<a href="#batch:read">batch:read</a><br><a href="#location:read">location:read</a><br><a href="#project:read">project:read</a>||
|<span id="batch:attach-tech">batch:attach-tech</span>|Allows assigning a tech for a batch|<a href="#batch:detach-tech">batch:detach-tech</a><br><a href="#batch:relations-read-tech">batch:relations-read-tech</a>|<a href="#batch:read">batch:read</a><br><a href="#location:read">location:read</a><br><a href="#project:read">project:read</a>||
|<span id="batch:create">batch:create</span>|Allows creating a batch|<a href="#batch:attach">batch:attach</a><br><a href="#batch:delete">batch:delete</a><br><a href="#batch:read">batch:read</a><br><a href="#batch:update">batch:update</a><br><a href="#location:read">location:read</a><br><a href="#project:read">project:read</a>|<a href="#program:read">program:read</a><br><a href="#queue:read">queue:read</a><br><a href="#work-order:read">work-order:read</a>||
|<span id="batch:delete">batch:delete</span>|Allows deleting a batch||<a href="#batch:read">batch:read</a><br><a href="#location:read">location:read</a><br><a href="#project:read">project:read</a>||
|<span id="batch:detach">batch:detach</span>|Allows deleting a relation to a batch||<a href="#batch:read">batch:read</a><br><a href="#batch:relations-read-all">batch:relations-read-all</a><br><a href="#location:read">location:read</a><br><a href="#project:read">project:read</a>||
|<span id="batch:detach-tech">batch:detach-tech</span>|Allows deleting a tech from a batch||<a href="#batch:read">batch:read</a><br><a href="#batch:relations-read-tech">batch:relations-read-tech</a><br><a href="#location:read">location:read</a><br><a href="#project:read">project:read</a>||
|<span id="batch:read">batch:read</span>|Allows reading a batch|<a href="#batch:relations-read-user">batch:relations-read-user</a>|<a href="#program:read">program:read</a><br><a href="#queue:read">queue:read</a><br><a href="#work-order:read">work-order:read</a>||
|<span id="batch:read-all">batch:read-all</span>|Allows reading all batches|<a href="#batch:read">batch:read</a><br><a href="#location:read">location:read</a><br><a href="#project:read">project:read</a>|<a href="#queue:read-all">queue:read-all</a>||
|<span id="batch:relations-read-all">batch:relations-read-all</span>|Allows reading all relations for a batch||<a href="#batch:read">batch:read</a><br><a href="#location:read">location:read</a><br><a href="#project:read">project:read</a>||
|<span id="batch:relations-read-tech">batch:relations-read-tech</span>|Allows reading techs related to a batch||<a href="#batch:read">batch:read</a><br><a href="#location:read">location:read</a><br><a href="#project:read">project:read</a>||
|<span id="batch:relations-read-user">batch:relations-read-user</span>|Allows reading users related to a batch||<a href="#batch:read">batch:read</a><br><a href="#location:read">location:read</a><br><a href="#project:read">project:read</a>||
|<span id="batch:update">batch:update</span>|Allows updating a batch||<a href="#batch:read">batch:read</a><br><a href="#location:read">location:read</a><br><a href="#project:read">project:read</a>||

### Contact

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="contact:create">contact:create</span>|Allows creating a contact|<a href="#contact:read">contact:read</a>|||
|<span id="contact:delete">contact:delete</span>|Allows deleting a contact|<a href="#contact:read">contact:read</a>|||
|<span id="contact:read">contact:read</span>|Allows reading a contact||||
|<span id="contact:read-all">contact:read-all</span>|Allows reading all contacts|<a href="#contact:read">contact:read</a>|||
|<span id="contact:update">contact:update</span>|Allows updating a contact|<a href="#contact:read">contact:read</a>|||

### Context

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="context:read">context:read</span>|Allows access to a context||||
|<span id="context:step">context:step</span>|Allows completing a context step|<a href="#context:read">context:read</a>|||

### Customer

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="customer:attach">customer:attach</span>|Allows creating relations to the customer|<a href="#customer:detach">customer:detach</a><br><a href="#customer:relations-read-all">customer:relations-read-all</a>|<a href="#customer:read">customer:read</a>||
|<span id="customer:create">customer:create</span>|Allows creating a customer|<a href="#customer:attach">customer:attach</a><br><a href="#customer:delete">customer:delete</a><br><a href="#customer:update">customer:update</a>||<a href="#part:create">part:create</a><br><a href="#program:create">program:create</a><br><a href="#work-order:create">work-order:create</a>|
|<span id="customer:delete">customer:delete</span>|Allows deleting a customer||<a href="#customer:read">customer:read</a>||
|<span id="customer:detach">customer:detach</span>|Allows removing relations from a customer||<a href="#customer:read">customer:read</a><br><a href="#customer:relations-read">customer:relations-read</a>||
|<span id="customer:read">customer:read</span>|Allows reading a customer|<a href="#customer:relations-read-user">customer:relations-read-user</a>|||
|<span id="customer:read-all">customer:read-all</span>|Allows reading all customers|<a href="#customer:read">customer:read</a>|||
|<span id="customer:relations-read">customer:relations-read</span>|Allows reading a customer relation||<a href="#customer:read">customer:read</a>||
|<span id="customer:relations-read-all">customer:relations-read-all</span>|Allows reading all customer relations||<a href="#customer:read">customer:read</a>||
|<span id="customer:relations-read-user">customer:relations-read-user</span>|Allows reading all users related to a customer||<a href="#customer:read">customer:read</a>||
|<span id="customer:update">customer:update</span>|Allows updating a customer||<a href="#customer:read">customer:read</a>||

### File

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="file:attach">file:attach</span>|Allows creating a relation to a file|<a href="#file:delete">file:delete</a>|||
|<span id="file:create">file:create</span>|Allows uploading files|<a href="#file:attach">file:attach</a><br><a href="#file:read">file:read</a>|||
|<span id="file:delete">file:delete</span>|Allows deleting a file||<a href="#file:read">file:read</a>||
|<span id="file:detach">file:detach</span>|Allows deleting a relation to a file||<a href="#file:read">file:read</a><br><a href="#file:relations-read-all">file:relations-read-all</a><br><a href="#file:relations-read-user">file:relations-read-user</a>||
|<span id="file:read">file:read</span>|Allows the reading and downloading of a file|<a href="#file:relations-read-user">file:relations-read-user</a>|||
|<span id="file:read-all">file:read-all</span>|Allows reading all files|<a href="#file:read">file:read</a>|||
|<span id="file:relations-read-all">file:relations-read-all</span>|Allows reading user related to a file||<a href="#file:read">file:read</a>||
|<span id="file:relations-read-user">file:relations-read-user</span>|Allows reading user related to a file||<a href="#file:read">file:read</a>||

### Location

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="location:attach">location:attach</span>|Allows creating a relation to a location|<a href="#location:detach">location:detach</a><br><a href="#location:relations-read-all">location:relations-read-all</a>|<a href="#location:read">location:read</a>||
|<span id="location:create">location:create</span>|Allows creating a location|<a href="#location:attach">location:attach</a><br><a href="#location:delete">location:delete</a><br><a href="#location:read">location:read</a><br><a href="#location:relations-read-all">location:relations-read-all</a><br><a href="#location:update">location:update</a>||<a href="#resource:create">resource:create</a>|
|<span id="location:delete">location:delete</span>|Allows deleting a location||<a href="#location:read">location:read</a>||
|<span id="location:detach">location:detach</span>|Allows deleting a location||<a href="#location:read">location:read</a><br><a href="#location:relations-read-all">location:relations-read-all</a>||
|<span id="location:read">location:read</span>|Allows reading a location|<a href="#location:relations-read-user">location:relations-read-user</a>|||
|<span id="location:read-all">location:read-all</span>|Allows reading all files|<a href="#location:read">location:read</a>|||
|<span id="location:relations-read-all">location:relations-read-all</span>|Allows reading all relations related to a location||<a href="#location:read">location:read</a>||
|<span id="location:relations-read-user">location:relations-read-user</span>|Allows reading all users related to a location||<a href="#location:read">location:read</a>||
|<span id="location:update">location:update</span>|Allows updating a location||<a href="#location:read">location:read</a>||

### Manufacturer

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="manufacturer:attach">manufacturer:attach</span>|Allows creating a relation for a manufacturer|<a href="#manufacturer:detach">manufacturer:detach</a>|<a href="#manufacturer:read">manufacturer:read</a>||
|<span id="manufacturer:create">manufacturer:create</span>|Allows creating a manufacturer|<a href="#manufacturer:attach">manufacturer:attach</a><br><a href="#manufacturer:delete">manufacturer:delete</a><br><a href="#manufacturer:read">manufacturer:read</a><br><a href="#manufacturer:update">manufacturer:update</a>|||
|<span id="manufacturer:delete">manufacturer:delete</span>|Allows deleting a manufacturer||<a href="#manufacturer:read">manufacturer:read</a>||
|<span id="manufacturer:detach">manufacturer:detach</span>|Allows deleting a relation for a manufacturer||<a href="#manufacturer:read">manufacturer:read</a><br><a href="#manufacturer:relations-read-all">manufacturer:relations-read-all</a>||
|<span id="manufacturer:read">manufacturer:read</span>|Allows reading a manufacturer|<a href="#manufacturer:relations-read-user">manufacturer:relations-read-user</a>|||
|<span id="manufacturer:read-all">manufacturer:read-all</span>|Allows reading all man|<a href="#manufacturer:read">manufacturer:read</a>|||
|<span id="manufacturer:relations-read-all">manufacturer:relations-read-all</span>|Allows reading all relations related to a manufacturer||<a href="#manufacturer:read">manufacturer:read</a>||
|<span id="manufacturer:relations-read-user">manufacturer:relations-read-user</span>|Allows reading all users related to a manufacturer||<a href="#manufacturer:read">manufacturer:read</a>||
|<span id="manufacturer:update">manufacturer:update</span>|Allows updating a manufacturer||<a href="#manufacturer:read">manufacturer:read</a>||

### Me

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="me:profile">me:profile</span>|Allows the user to access their profile||||

### Part

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="part:attach">part:attach</span>|Allows adding relations to a part|<a href="#part:detach">part:detach</a>|<a href="#part:read">part:read</a>||
|<span id="part:create">part:create</span>|Allows creating a part|<a href="#part:attach">part:attach</a><br><a href="#part:delete">part:delete</a><br><a href="#part:read">part:read</a><br><a href="#part:relations-read-all">part:relations-read-all</a><br><a href="#part:update">part:update</a>|<a href="#customer:read">customer:read</a><br><a href="#manufacturer:read">manufacturer:read</a>|<a href="#unit:create">unit:create</a>|
|<span id="part:delete">part:delete</span>|Allows deleting a part||<a href="#part:read">part:read</a>||
|<span id="part:detach">part:detach</span>|Allows removing relations from a part||<a href="#part:read">part:read</a>||
|<span id="part:read">part:read</span>|Allows reading a part|<a href="#part:read">part:read</a><br><a href="#part:relations-read-user">part:relations-read-user</a>|<a href="#customer:read">customer:read</a><br><a href="#manufacturer:read">manufacturer:read</a>||
|<span id="part:read-all">part:read-all</span>|Allows reading all parts||<a href="#customer:read-all">customer:read-all</a><br><a href="#manufacturer:read-all">manufacturer:read-all</a>||
|<span id="part:relations-read-all">part:relations-read-all</span>|Allows reading all relations related to a part||<a href="#part:read">part:read</a>||
|<span id="part:relations-read-part">part:relations-read-part</span>|Allows reading parts related to a part||<a href="#part:read">part:read</a>||
|<span id="part:relations-read-user">part:relations-read-user</span>|Allows reading users related to a part||<a href="#part:read">part:read</a>||
|<span id="part:update">part:update</span>|Allows updating a part||<a href="#part:read">part:read</a>||

### Program

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="program:attach">program:attach</span>|Allows creating relations for a program|<a href="#program:detach">program:detach</a>|<a href="#program:read">program:read</a>||
|<span id="program:create">program:create</span>|Allows creating a new program|<a href="#program:attach">program:attach</a><br><a href="#program:delete">program:delete</a><br><a href="#program:read">program:read</a><br><a href="#program:relations-read-all">program:relations-read-all</a><br><a href="#program:update">program:update</a>|<a href="#customer:read">customer:read</a>|<a href="#project:create">project:create</a>|
|<span id="program:delete">program:delete</span>|Allows deleting a program||<a href="#program:read">program:read</a>||
|<span id="program:detach">program:detach</span>|Allows removing relations from a program||<a href="#program:read">program:read</a><br><a href="#program:relations-read-all">program:relations-read-all</a>||
|<span id="program:read">program:read</span>|Allows reading a program||<a href="#customer:read">customer:read</a>||
|<span id="program:read-all">program:read-all</span>|Read all programs (regardless of customer)|<a href="#program:read">program:read</a>|<a href="#customer:read-all">customer:read-all</a>||
|<span id="program:relations-read-all">program:relations-read-all</span>|Allows reading users related to a batch program||<a href="#program:read">program:read</a>||
|<span id="program:relations-read-user">program:relations-read-user</span>|Allows reading users related to a batch program||<a href="#program:read">program:read</a>||
|<span id="program:update">program:update</span>|Allows updating a program||<a href="#program:read">program:read</a>||

### Project

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="project:attach">project:attach</span>|Allows adding relations to a project|<a href="#project:detach">project:detach</a>|<a href="#customer:read">customer:read</a><br><a href="#program:read">program:read</a><br><a href="#project:read">project:read</a><br><a href="#project:relations-read-all">project:relations-read-all</a>||
|<span id="project:create">project:create</span>|Allows creating a project|<a href="#customer:read">customer:read</a><br><a href="#program:read">program:read</a><br><a href="#project:attach">project:attach</a><br><a href="#project:delete">project:delete</a><br><a href="#project:read">project:read</a><br><a href="#project:relations-read-all">project:relations-read-all</a><br><a href="#project:update">project:update</a>|<a href="#program:read">program:read</a>|<a href="#work-order:create">work-order:create</a>|
|<span id="project:delete">project:delete</span>|Allows deleting a project||<a href="#customer:read">customer:read</a><br><a href="#project:read">project:read</a>||
|<span id="project:detach">project:detach</span>|Allows removing relations from a project||<a href="#customer:read">customer:read</a><br><a href="#program:read">program:read</a><br><a href="#project:read">project:read</a><br><a href="#project:relations-read-all">project:relations-read-all</a>||
|<span id="project:read">project:read</span>|Allows reading a project|<a href="#project:relations-read-user">project:relations-read-user</a>|<a href="#program:read">program:read</a>||
|<span id="project:read-all">project:read-all</span>|Allows reading all projects|<a href="#customer:read">customer:read</a><br><a href="#project:read">project:read</a>|<a href="#program:read-all">program:read-all</a>||
|<span id="project:relations-read-all">project:relations-read-all</span>|Allows reading all relations for a project||<a href="#customer:read">customer:read</a><br><a href="#project:read">project:read</a>||
|<span id="project:relations-read-user">project:relations-read-user</span>|Allows reading users related to a batch project||<a href="#customer:read">customer:read</a><br><a href="#project:read">project:read</a>||
|<span id="project:update">project:update</span>|Allows updating a project||<a href="#customer:read">customer:read</a><br><a href="#project:read">project:read</a>||

### Queue

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="queue:attach">queue:attach</span>|Allows adding relations to a queue|<a href="#queue:detach">queue:detach</a><br><a href="#queue:relations-read-all">queue:relations-read-all</a>|<a href="#queue:read">queue:read</a>||
|<span id="queue:create">queue:create</span>|Allows creating a queue|<a href="#queue:attach">queue:attach</a><br><a href="#queue:delete">queue:delete</a><br><a href="#queue:read">queue:read</a><br><a href="#queue:relations-read-all">queue:relations-read-all</a><br><a href="#queue:update">queue:update</a>|<a href="#location:read">location:read</a>||
|<span id="queue:delete">queue:delete</span>|Allows deleting a queue||<a href="#queue:read">queue:read</a>||
|<span id="queue:detach">queue:detach</span>|Allows removing relations from a queue||<a href="#queue:read">queue:read</a><br><a href="#queue:relations-read-all">queue:relations-read-all</a>||
|<span id="queue:read">queue:read</span>|Allows reading a queue|<a href="#batch:read-all">batch:read-all</a><br><a href="#queue:read">queue:read</a><br><a href="#work-order:read">work-order:read</a>|<a href="#location:read">location:read</a>||
|<span id="queue:read-all">queue:read-all</span>|Allows reading all queues|<a href="#queue:read">queue:read</a>|<a href="#location:read-all">location:read-all</a>||
|<span id="queue:relations-read-all">queue:relations-read-all</span>|Allows reading all relations related to a queue||<a href="#queue:read">queue:read</a>||
|<span id="queue:relations-read-user">queue:relations-read-user</span>|Allows reading users related to a queue||<a href="#queue:read">queue:read</a>||
|<span id="queue:update">queue:update</span>|Allows updating a queue||<a href="#queue:read">queue:read</a>||

### Resource

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="resource:attach">resource:attach</span>|Allows adding relations to a resource|<a href="#resource:detach">resource:detach</a>|<a href="#resource:read">resource:read</a>||
|<span id="resource:create">resource:create</span>|Allows creating a resource|<a href="#resource:attach">resource:attach</a><br><a href="#resource:create">resource:create</a><br><a href="#resource:delete">resource:delete</a><br><a href="#resource:read">resource:read</a><br><a href="#resource:relations-read-all">resource:relations-read-all</a><br><a href="#resource:update">resource:update</a><br><a href="#sub-resource:attach">sub-resource:attach</a><br><a href="#sub-resource:create">sub-resource:create</a><br><a href="#sub-resource:delete">sub-resource:delete</a><br><a href="#sub-resource:detach">sub-resource:detach</a><br><a href="#sub-resource:read">sub-resource:read</a><br><a href="#sub-resource:relations-read-all">sub-resource:relations-read-all</a><br><a href="#sub-resource:relations-read-user">sub-resource:relations-read-user</a><br><a href="#sub-resource:update">sub-resource:update</a>|<a href="#location:read">location:read</a>||
|<span id="resource:delete">resource:delete</span>|Allows deleting a resource||<a href="#resource:read">resource:read</a>||
|<span id="resource:detach">resource:detach</span>|Allows removing relations from a resource||<a href="#resource:read">resource:read</a><br><a href="#resource:relations-read-all">resource:relations-read-all</a>||
|<span id="resource:read">resource:read</span>|Allows reading a resource|<a href="#resource:relations-read-user">resource:relations-read-user</a>|<a href="#location:read">location:read</a>||
|<span id="resource:read-all">resource:read-all</span>|Allows reading all resources|<a href="#resource:read">resource:read</a>|<a href="#location:read-all">location:read-all</a>||
|<span id="resource:relations-read-all">resource:relations-read-all</span>|Allows reading all relations related to a resource||<a href="#resource:read">resource:read</a>||
|<span id="resource:relations-read-user">resource:relations-read-user</span>|Allows reading users related to a resource||<a href="#resource:read">resource:read</a>||
|<span id="resource:update">resource:update</span>|Allows updating a resource||<a href="#resource:read">resource:read</a>||

### Sub Resource

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="sub-resource:attach">sub-resource:attach</span>|Allows adding relations to a sub-resource|<a href="#sub-resource:detach">sub-resource:detach</a>|<a href="#sub-resource:read">sub-resource:read</a>||
|<span id="sub-resource:create">sub-resource:create</span>|Allows creating a sub-resource|<a href="#sub-resource:attach">sub-resource:attach</a><br><a href="#sub-resource:create">sub-resource:create</a><br><a href="#sub-resource:delete">sub-resource:delete</a><br><a href="#sub-resource:detach">sub-resource:detach</a><br><a href="#sub-resource:read">sub-resource:read</a><br><a href="#sub-resource:relations-read-all">sub-resource:relations-read-all</a><br><a href="#sub-resource:relations-read-user">sub-resource:relations-read-user</a><br><a href="#sub-resource:update">sub-resource:update</a>|<a href="#resource:read">resource:read</a>||
|<span id="sub-resource:delete">sub-resource:delete</span>|Allows deleting a sub-resource||<a href="#sub-resource:read">sub-resource:read</a>||
|<span id="sub-resource:detach">sub-resource:detach</span>|Allows removing relations from a sub-resource||<a href="#sub-resource:read">sub-resource:read</a><br><a href="#sub-resource:relations-read-all">sub-resource:relations-read-all</a>||
|<span id="sub-resource:read">sub-resource:read</span>|Allows reading a sub-resource|<a href="#sub-resource:relations-read-user">sub-resource:relations-read-user</a>|<a href="#resource:read">resource:read</a>||
|<span id="sub-resource:read-all">sub-resource:read-all</span>|Allows reading all sub-resources|<a href="#sub-resource:read">sub-resource:read</a>|<a href="#resource:read-all">resource:read-all</a>||
|<span id="sub-resource:relations-read-all">sub-resource:relations-read-all</span>|Allows reading all relations related to a sub-resource||<a href="#sub-resource:read">sub-resource:read</a>||
|<span id="sub-resource:relations-read-user">sub-resource:relations-read-user</span>|Allows reading users related to a sub-resource||<a href="#sub-resource:read">sub-resource:read</a>||
|<span id="sub-resource:update">sub-resource:update</span>|Allows updating a sub-resource||<a href="#sub-resource:read">sub-resource:read</a>||

### Tenant

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="tenant:read">tenant:read</span>|Allows reading a tenant|<a href="#tenant:relations-read-user">tenant:relations-read-user</a>|||
|<span id="tenant:relations-read-user">tenant:relations-read-user</span>|Allows reading users related to a batch tenant|<a href="#tenant:read">tenant:read</a>|||
|<span id="tenant:search">tenant:search</span>|Allows searching across the tenant data||||
|<span id="tenant:settings">tenant:settings</span>|Allows updating settings for a tenant|<a href="#tenant:read">tenant:read</a>|||

### Unit

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="unit:attach">unit:attach</span>|Allows adding relations to a unit|<a href="#unit:detach">unit:detach</a><br><a href="#unit:relations-read-all">unit:relations-read-all</a>|<a href="#customer:read">customer:read</a><br><a href="#manufacturer:read">manufacturer:read</a><br><a href="#sub-resource:relations-read-user">sub-resource:relations-read-user</a><br><a href="#unit:read">unit:read</a>||
|<span id="unit:create">unit:create</span>|Allows creating a unit|<a href="#customer:read">customer:read</a><br><a href="#manufacturer:read">manufacturer:read</a><br><a href="#sub-resource:relations-read-user">sub-resource:relations-read-user</a><br><a href="#unit:attach">unit:attach</a><br><a href="#unit:delete">unit:delete</a><br><a href="#unit:read">unit:read</a><br><a href="#unit:update">unit:update</a>|<a href="#location:read">location:read</a><br><a href="#part:read">part:read</a><br><a href="#sub-resource:read">sub-resource:read</a><br><a href="#vendor:read">vendor:read</a>||
|<span id="unit:delete">unit:delete</span>|Allows deleting a unit||<a href="#customer:read">customer:read</a><br><a href="#manufacturer:read">manufacturer:read</a><br><a href="#sub-resource:relations-read-user">sub-resource:relations-read-user</a><br><a href="#unit:read">unit:read</a>||
|<span id="unit:detach">unit:detach</span>|Allows removing relations from a unit||<a href="#customer:read">customer:read</a><br><a href="#manufacturer:read">manufacturer:read</a><br><a href="#sub-resource:relations-read-user">sub-resource:relations-read-user</a><br><a href="#unit:read">unit:read</a><br><a href="#unit:relations-read-all">unit:relations-read-all</a>||
|<span id="unit:read">unit:read</span>|Allows reading a unit||<a href="#location:read">location:read</a><br><a href="#part:read">part:read</a><br><a href="#sub-resource:read">sub-resource:read</a><br><a href="#vendor:read">vendor:read</a>||
|<span id="unit:relations-read-all">unit:relations-read-all</span>|Allows reading all relations related to a batch unit||<a href="#customer:read">customer:read</a><br><a href="#manufacturer:read">manufacturer:read</a><br><a href="#sub-resource:relations-read-user">sub-resource:relations-read-user</a><br><a href="#unit:read">unit:read</a>||
|<span id="unit:relations-read-user">unit:relations-read-user</span>|Allows reading users related to a batch unit||<a href="#customer:read">customer:read</a><br><a href="#manufacturer:read">manufacturer:read</a><br><a href="#sub-resource:relations-read-user">sub-resource:relations-read-user</a><br><a href="#unit:read">unit:read</a>||
|<span id="unit:update">unit:update</span>|Allows updating a unit||<a href="#customer:read">customer:read</a><br><a href="#location:read">location:read</a><br><a href="#manufacturer:read">manufacturer:read</a><br><a href="#part:read">part:read</a><br><a href="#sub-resource:read">sub-resource:read</a><br><a href="#sub-resource:relations-read-user">sub-resource:relations-read-user</a><br><a href="#unit:read">unit:read</a>||

### Vendor

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="vendor:attach">vendor:attach</span>|Allows creating relations for a vendor|<a href="#vendor:detach">vendor:detach</a>|||
|<span id="vendor:create">vendor:create</span>|Allows creating a vendor|<a href="#vendor:attach">vendor:attach</a><br><a href="#vendor:delete">vendor:delete</a><br><a href="#vendor:read">vendor:read</a><br><a href="#vendor:relations-read-all">vendor:relations-read-all</a><br><a href="#vendor:update">vendor:update</a>|||
|<span id="vendor:delete">vendor:delete</span>|Allows deleting a vendor||<a href="#vendor:read">vendor:read</a>||
|<span id="vendor:detach">vendor:detach</span>|Allows removing relations for a vendor||<a href="#vendor:read">vendor:read</a><br><a href="#vendor:relations-read-all">vendor:relations-read-all</a>||
|<span id="vendor:read">vendor:read</span>|Allows reading a vendor|<a href="#vendor:relations-read-user">vendor:relations-read-user</a>|||
|<span id="vendor:read-all">vendor:read-all</span>|Allows reading all vendors|<a href="#vendor:read">vendor:read</a>|||
|<span id="vendor:relations-read-all">vendor:relations-read-all</span>|Allows reading all relations related to a batch vendor||<a href="#vendor:read">vendor:read</a>||
|<span id="vendor:relations-read-user">vendor:relations-read-user</span>|Allows reading users related to a batch vendor||<a href="#vendor:read">vendor:read</a>||
|<span id="vendor:update">vendor:update</span>|Allows updating a vendor||<a href="#vendor:read">vendor:read</a>||

### Work Flow

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="work-flow:attach">work-flow:attach</span>|Allows adding relations to a work-flow|<a href="#work-flow:detach">work-flow:detach</a>|<a href="#work-flow:read">work-flow:read</a>||
|<span id="work-flow:create">work-flow:create</span>|Allows creating a work-flow|<a href="#work-flow:attach">work-flow:attach</a><br><a href="#work-flow:delete">work-flow:delete</a><br><a href="#work-flow:read">work-flow:read</a><br><a href="#work-flow:update">work-flow:update</a>|||
|<span id="work-flow:delete">work-flow:delete</span>|Allows deleting a work-flow||<a href="#work-flow:read">work-flow:read</a>||
|<span id="work-flow:detach">work-flow:detach</span>|Allows removing relations from a work-flow||<a href="#work-flow:read">work-flow:read</a><br><a href="#work-flow:relations-read-all">work-flow:relations-read-all</a>||
|<span id="work-flow:read">work-flow:read</span>|Allows reading a work-flow||||
|<span id="work-flow:read-all">work-flow:read-all</span>|Allows reading all work-flows|<a href="#work-flow:read">work-flow:read</a>|||
|<span id="work-flow:relations-read-all">work-flow:relations-read-all</span>|Allows reading all relations related to a work-flow||<a href="#work-flow:read">work-flow:read</a>||
|<span id="work-flow:relations-read-user">work-flow:relations-read-user</span>|Allows reading users related to a work-flow||<a href="#work-flow:read">work-flow:read</a>||
|<span id="work-flow:update">work-flow:update</span>|Allows updating a work-flow||<a href="#work-flow:read">work-flow:read</a>||

### Work Order

|Permission|Description|Grants|Required Permission(s)|Grants to Children|
|---|---|
|<span id="work-order:attach">work-order:attach</span>|Allows adding relations to a work-order|<a href="#work-order:detach">work-order:detach</a>|<a href="#program:read">program:read</a><br><a href="#work-order:read">work-order:read</a>||
|<span id="work-order:create">work-order:create</span>|Allows creating a work-order|<a href="#program:read">program:read</a><br><a href="#work-order:attach">work-order:attach</a><br><a href="#work-order:delete">work-order:delete</a><br><a href="#work-order:read">work-order:read</a><br><a href="#work-order:relations-read-all">work-order:relations-read-all</a><br><a href="#work-order:update">work-order:update</a>|<a href="#customer:read">customer:read</a><br><a href="#project:read">project:read</a>||
|<span id="work-order:delete">work-order:delete</span>|Allows deleting a work-order||<a href="#program:read">program:read</a><br><a href="#work-order:read">work-order:read</a>||
|<span id="work-order:detach">work-order:detach</span>|Allows removing relations from a work-order||<a href="#program:read">program:read</a><br><a href="#work-order:read">work-order:read</a><br><a href="#work-order:relations-read-all">work-order:relations-read-all</a>||
|<span id="work-order:read">work-order:read</span>|Allows reading a work-order|<a href="#work-order:relations-read-user">work-order:relations-read-user</a>|<a href="#customer:read">customer:read</a><br><a href="#project:read">project:read</a>||
|<span id="work-order:read-all">work-order:read-all</span>|Allows reading all work-orders|<a href="#program:read">program:read</a><br><a href="#work-order:read">work-order:read</a>|<a href="#customer:read-all">customer:read-all</a><br><a href="#project:read-all">project:read-all</a>||
|<span id="work-order:relations-read-all">work-order:relations-read-all</span>|Allows reading all relations to a work-order||<a href="#program:read">program:read</a><br><a href="#work-order:read">work-order:read</a>||
|<span id="work-order:relations-read-user">work-order:relations-read-user</span>|Allows reading users related to a work-order||<a href="#program:read">program:read</a><br><a href="#work-order:read">work-order:read</a>||
|<span id="work-order:update">work-order:update</span>|Allows updating a work-order||<a href="#program:read">program:read</a><br><a href="#work-order:read">work-order:read</a>||
