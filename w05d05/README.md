# W05D05 - Mid-term Project Kickoff

### The Why?
* exp building a real-world app with a timeline
* learn how to work on a team
* combine everything we've learned
* prepare for the final project

### Pick a project

### User Stories
* describes how a user will interact with our app
* describes what a user can/cannot do

As a ______, I can ______, because ________

As a logged-in user, I can see a list of available maps, because I am interested in things in my area

As a logged-in user, I can favourite a map, because I'd like to review it later

As a non logged-in user, I cannot add a pin to a map, because I don't own it

planning/user-stories.md

### Nouns === entity
* every entity needs a table
* ERD
* draw.io, pen and paper

planning/erd-v1.png
planning/erd-stretch.png

### Routes
* BREAD/CRUD operations on each resource
* REST - REpresentational State Transfer
* naming convention for routes
* resource endpoints are plural `/users`, `/cats`
* action endpoints are singular `/login`, `/logout`

B GET   /dinocats
R GET   /dinocats/:id
E POST  /dinocats/:id/edit
A POST  /dinocats
D POST  /dinocats/:id/delete

B GET         /dinocats
R GET         /dinocats/:id
E PUT/PATCH   /dinocats/:id
A POST        /dinocats
D DELETE      /dinocats/:id

planning/routes.md

### MVP
* Minimum Viable Product
* what is the minimum feature set that a user would find valuable/useful
* @KV Minimum Viable Demo (MVD)
* what is the minimum feature set that we can demo in 5 mins
* If you're not going to demo it, don't build it

### User Login/Registration
* Don't do it

```js
// GET /login/2
app.get('/login/:user_id', (req, res) => {
  // set encrypted cookie
  req.session.user_id = req.params.user_id;

  // set plain-text cookie
  res.cookie('user_id', req.params.user_id);

  // send the user somewhere
  res.redirect('/');
});
```

### Mockups/Wireframes
* lowest fidelity possible
* pen and paper, figma, balsamiq, moqups

planning/menu.png
planning/cart.png

### Tech Choices
* Front End: HTML, CSS, JS, jQuery, Bootstrap, flexbox, css grid, SASS
* Back End: Node, Express, Postgres


SCSS superset of CSS
Browser doesn't under SCSS
SCSS => sass-preprocessor => CSS

node-sass
sass

### SPA vs Multi-page App?
* not mutually exclusive

* React SPA
* Rails MPA

### Splitting up the Work
* vertical - each member is working on a diff layer of the stack
* horizontal - each member is working on the same layer
* pair programming

### Merge Conflicts
