// jQuery
var $ = require('jquery');
global.jQuery = $;

// Foundation
require('../node_modules/foundation-sites/dist/foundation.js');

export default Foundation;

import scss from './app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './components/App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Quote from './components/Quote.vue'
import DisplayForm from './components/DisplayForm.vue'
import PoliticalRidings from './components/PoliticalRidings.vue'

// Install plugins
Vue.use(Router)
Vue.use(Resource)

Vue.transition('fade', {
  enter: function () {},
  leave: function () {}
})
var fadeTransition = Vue.transition('fade')

// Set up a new router
var router = new Router()

// Route config
router.map({
  '/home':{
    name: 'home',
    component: Home
  },
  '/about':{
    name: 'about',
    component: About
  },
  '/quote':{
    name: 'quote',
    component: Quote
  },
  '/displayform':{
    name: 'displayform',
    component: DisplayForm
  },
  '/political-ridings':{
    name: 'politicalridings',
    component: PoliticalRidings
  }
})

// For every new route scroll to the top of the page
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

// If no route is matched redirect home
router.redirect({
  '*': '/home'
})

// Start up our app
router.start(App, '#app')
