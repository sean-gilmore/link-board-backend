1. Install Hapi.js
2. Install a model/db connector
3. Start creating app

## 2019/04/27

Useful example project: https://github.com/robmclarty/knex-express-project-sample

The project follows a fairly standard MVC layout.
Model files perform the same basic role as they would in rails, they define:

- Accessible properties
- Helper methods for formatting / returning data
But also, they define:
- How to query the data directly from the database ( though this logic is faily generic and it seems to be contained in another file )

We also have the ability to create migration files that help us keep our database up to date
- Use these to define associations, update_updated, date_created

## 2019/04/28

- ~~Look into why i can't run any queries~~
  - turns out I was able to run queries, but I wasn't correctly waiting for their result
- ~~Get a response for my query returning~~
  - solved - just need to async wait for response
- ~~Get app to build with every change~~
  - solved - just needed to use a different node server package (babel-watch: which can run babel code out of the box)
- Figure out how to get async functions working, as currently they are throwing the following error: `ReferenceError: regeneratorRuntime is not defined`
