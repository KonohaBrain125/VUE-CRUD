<p align="center">
  <img width="300" height="auto" src="https://user-images.githubusercontent.com/18534115/49319435-29ccf000-f4fd-11e8-9fc6-8678864132bd.png">
</p>
<h1 align="center">Vue CRUD</h1>
<div align="center">
  <a><img alt="price" src="https://img.shields.io/badge/price-FREE-blue.svg"></a>
  <a><img alt="license" src="https://img.shields.io/badge/license-MIT-brightgreen.svg"></a>
  <a><img alt="version" src="https://img.shields.io/badge/version-v0.9.3-yellow.svg"></a>
  <a><img alt="PRs" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
</div>

<h4 align="center">Vue.js based REST-ful CRUD system.</h4>

* Vue CRUD allows to create both a mechanism for managing a single table, as well as a CMS or extended CRM with a login system and modules
* Application built with Vue CRUD is SPA (Single Page Application) so it works much faster than apps based on Wordpress, Joomla, etc.
* Vue CRUD uses the vue along with its ecosystem (Vuex, Vuetify, etc). Enjoy the benefits of the most popular JS framework in the world.
* The application architecture is adapted to work with REST API

![vue-crud](https://user-images.githubusercontent.com/18534115/50497274-5b6ea380-0a36-11e9-8dd6-2a7bc6875fe6.gif)

## Functions
Vue CRUD provides a set of utitlities, from which you can compose your own application. Features included in the system can communicate with each other thanks to the use of the Vuex library. Vue CRUD includes the following elements:

- **CRUD** | <a href="http://vue-crud-demo.id-a.pl/#/crud" target="_blank">DEMO / SANDBOX</a>:
  - operations on records:
    - Store,
    - Update,
    - Suspend/Restore,
    - Delete,
    - Multiple update,
    - Multiple Suspend/Restore,
    - Multiple Delete
  - filtering:
    - Show active/inactive records,
    - Search phrase in whole table,
    - Search phrase in selected column (exact, like and list mode)
  - versions:
    - client side (small tables < 2000 records)
    - cerver side (> 2000 records)
  - another functions and features:
    - datatable mechanism allows selection of the number of records per page, page transition and sorting,
    - management of a child table from the parent table module,
    - export to excel (xlsx),
    - table refreshing,
- **Authentication system** | <a href="http://vue-crud-demo.id-a.pl/#/login" target="_blank">DEMO / SANDBOX</a>:
  - login form (built-in communitation with API, validation),
  - optional locale selection,
  - redirecting to the app,
- **App layuout components** | <a href="http://vue-crud-demo.id-a.pl/#/app" target="_blank">DEMO / SANDBOX</a>:
  - Toolbar (with optional elements):
    - title,
    - logo,
    - user profile,
    - locale selection,
    - logout,
    - slots for developer
  - Sidebar:
    - List of routes,
    - Slot for title or user avatar,
    - Slot for developer,
    - Customizable sidebar behaviour
  - Alerts system,
  - Footer,
  - ... and others

The record creation / editing form supports the following types of fields:

* Input,
* Number,
* Decimal
* Textarea,
* Rich Text Box,
* Select (list from related table),
* Datepicker,
* Timepicker,
* Checkbox,
* Files

## Demo versions

#### <a href="http://vue-crud-demo.id-a.pl" target="_blank">DEMO / SANDBOX</a>

#### <a href="http://vue-crud-crm.id-a.pl" target="_blank">CRM DEMO</a>
Credentials with limited privileges (readonly):\
Login:  guest@vue.crud\
Pass:   ajSGenC0\
To get full user account, contact me on my <a href="http://id-a.pl" target="_blank">company site</a>.

## Quick start

Do you want to test the application quickly, and you do not have a ready API? No problem, you can use the ready-made example in the **examples** folder. The API for this example is available on the internet, so you can connect to it by entering its address in the configuration file.

### Steps

- Clone Vue CRUD:
``` console
git clone git@github.com:szczepanmasny/vue-crud.git
```
- Select template from **examples** folder you want to use, e.g. **examples/simple-crud**. Then:
- Copy **examples/simple-crud/public** folder to the root directory,
- Copy the rest of files and folders (**config**, **locales**, **routes**, **main.js**, **router.js**) from **examples/simple-crud** folder to the **src** directory,
- If you have your own API prepared, modify **src/config/api.js** file,
- Type following commands:

``` console
yarn
:: or
npm install
```
and then:
``` console
yarn serve
:: or
npm run serve
```
... and your app is already running (probably at http://localhost:8080).

### Usage

The simplest possible code that supports CRUD operations for one table will look something like this:
```vue
<template>
  <div>
    <crud :prefix="prefix" :path="path" :pageTitle="pageTitle" :fieldsInfo="fieldsInfo" :detailsTitle="$t('detailsTitle')">
    </crud>
    <alert-box></alert-box>
  </div>
</template>

<script>
  import Crud from '@/utils/crud/components/Crud.vue'
  import AlertBox from "@/utils/app/components/AlertBox.vue";
  export default {
    data() {
      return {
        prefix: 'demo',
        path: 'tasks',
        pageTitle: 'demo.tasks',
      }
    },
    computed: {
      fieldsInfo() {
        return [{
            text: this.$t('fields.id'),
            name: 'id',
            details: false,
          },
          {
            type: 'input',
            column: 'name',
            text: this.$t('fields.name'),
            name: 'name',
            multiedit: false
          },
          {
            type: 'input',
            column: 'description',
            text: this.$t('fields.description'),
            name: 'description',
            required: false
          },
        ]
      },
    },
    components: {
      Crud,
      AlertBox,
    },
    i18n: {
      messages: {
        en: {
          detailsTitle: 'Task',
          fields: {
            id: 'Id',
            name: 'Name',
            description: 'Description'
          }
        }
      }
    },
  }
</script>
```

## API
The application requires a connection with the appropriate API. API can be created in any technology - the condition is its compliance with the Vue CRUD communication specification. If you need to create your API and do not know how to get started, and you don't mind PHP and Laravel, download or clone the <a href="https://github.com/szczepanmasny/vue-crud-laravel-api" target="_blank">Vue CRUD Laravel API project</a>.

## Documentation
To check out docs, visit :
#### <a href="https://vue-crud.github.io/" target="_blank">vue-crud.github.io</a>.

## Contributing
If you have an idea about improving Vue CRUD, do not hesitate.

Developers interested in contributing should read the [Code of Conduct](./CODE_OF_CONDUCT.md).

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2018-present, Szczepan Masny
