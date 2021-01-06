import Vue from 'vue'
import Router from 'vue-router'
import First from "../components/First";
import Second from "../components/Second";
import Third from "../components/Third";
import Add from "../components/Add";


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/first",component:First},
    {path:"/second/:id",component:Second},
    {path:"/third/:id",component:Third},
    {path:"/add/:id",component:Add},

  ]
})
