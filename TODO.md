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

- Look into why i can't run any queries
- Get a response for my query returning
- Get app to build with every change
