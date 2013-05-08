##Route Finder Web Information Service
**Curt Arledge**
**[INLS 490-186]**

**[Schema.org](http://www.schema.org "Schema.org") Microdata Type Values**

* `http://schema.org/Place/HikingTrail`
An extension of `http://schema.org/Place` specific to this application. Applied to a LI or SECTION tag. Describes a hiking trail, in this application called a "route."

* `http://schema.org/Person`
Applied to a LI, SECTION, or A tag. In this application, describes a hiker.

**[Schema.org](http://www.schema.org "Schema.org") Microdata Property Values**

* `name`
Applied to an H2 tag. Describes the name of a route or hiker.

* `url`
Applied to an A tag. Describes the URL of a particular route or hiker in this application.

* `Place/HikingTrail/hikedBy`
A property of `http://schema.org/Place/HikingTrail`. Applied to an A tag where `itemtype="http://schema.org/Place/HikingTrail"`. Describes a "hiker," or the person who has hiked on or submitted the route to this application.

* `description`
Applied to a SPAN tag. Describes a route or hiker.

* `geo`
Applied to a SPAN tag where `itemtype="http://schema.org/Place/HikingTrail"`. The list of coordinates representing a route.

* `Place/HikingTrail/trailType`
A property of `http://schema.org/Place/HikingTrail`. Applied to a SPAN tag where `itemtype="http://schema.org/Place/HikingTrail"`. Describes the type/condition of a route.

* `Place/HikingTrail/trailDifficulty`
A property of `http://schema.org/Place/HikingTrail`. Applied to a SPAN tag where `itemtype="http://schema.org/Place/HikingTrail"`. Describes the difficulty of a route.

* `Person/hiked`
A property of `http://schema.org/Person`. Applied to a LI tag where `itemtype="http://schema.org/Person"`. Describes a route hiked or submitted to this application by this person.

**ID attribute values**

* `content`
Applied to a SECTION tag. All (non-header) content on the page.
* `routes`
Applied to a SECTION tag. A list of routes.
* `hikers`
Applied to a SECTION tag. A list of hikers.


**Class attribute values**

* `options`
Applied to an ASIDE tag. Contains link(s) to navigate and manipulate informationn.
* `search`
Applied to a FORM tag. A templated query link to search for routes matching specified criterea. The element must be set to FORM.method="get".
* `new-route`
Applied to a FORM tag. A non-idempotent update link that posts a new route with the specified metadata. The element must be set to FORM.method="post".
* `new-hiker`
Applied to a FORM tag. An idempotent update link that posts a new hiker with the specified metadata. The element must be set to FORM.method="post" with added Javascript to PUT.
* `update-route`
Applied to a FORM tag. An idempotent update link that updates an existing route with the specified metadata. The element must be set to FORM.method="post" with added Javascript to PUT.
* `update-hiker`
Applied to a FORM tag. An idempotent update link that updates an existing hiker with the specified metadata. The element must be set to FORM.method="post" with added Javascript to PUT.
* `route`
When applied to a LI tag, a representation of a listed route. Must contain only one SPAN.class="route-name" descendent element.
When applied to a SECTION tag, a representation of a route. Must contain H2.class="route-name" AND SPAN.class="hiker" and may contain SPAN.class="description", SPAN.class="trail-type", SPAN.class="trail-difficulty", and SPAN.class="coordinates" descendent elements.
* `hiker`
When applied to a LI tag, a representation of a listed route. Must contain only one SPAN.class="hiker-name" descendent.
When applied to a SECTION tag, a representation of a hiker. Must contain H2.class="hiker-name" element and may contain SPAN.class="description" element.
* `route-name`
Applied to a SPAN tag or H2 tag. Contains the name of a route.
* `hiker-name`
Applied to a SPAN tag or H3 tag. Contains the name of a hiker.
* `description`
Applied to a SPAN tag. Contains a text description of a route or hiker.
* `trail-difficulty`
Applied to a SPAN tag. Contains the difficulty of a route.
* `trail-type`
Applied to a SPAN tag. Contains the trail type of a route.
* `coordinates`
Applied to a SPAN tag. Contains the coordinates of a route.

**Name attribute values**

* `match-text`
Applied to an INPUT[text] element. The user wants to see only routes that contain this text.
* `trail-difficulty`
When applied to an INPUT[radio] element and contained within a FORM.class="new-route" element, the difficulty of the new route.
* `trail-type`
When contained within a FORM.class="new-route" element, the trail type of the route.
* `route-name`
Applied to an INPUT[text] element. The name of the route.
* `route-description`
Applied to a TEXTAREA element. The description of the route.
* `coordinates`
Applied to a TEXTAREA element. The coordinates of the route.

**Rel attribute values**

* `index`
Applied to an A tag. A reference to the starting URI for the application.
* `route`
Applied to an A tag. A reference to a particular route representation.
* `hiker`
Applied to an A tag. A reference to a particular hiker representation.
* `routes`
Applied to an A tag. A reference to a representation of a list of routes.
* `hikers`
Applied to an A tag. A reference to a representation of a list of hikers.