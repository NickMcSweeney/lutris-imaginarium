import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import About from "@/components/About";
import Contents from "@/components/Contents";
import Blog from "@/components/Blog";
import Portfolio from "@/components/Portfolio";
import Photos from "@/components/Photos";
import BuddhaMode from "@/components/BuddhaMode";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "portfolio/contents/:id/",
      name: "Contents",
      component: Contents
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio
    },
    {
      path: "/portfolio/photos",
      name: "Photos",
      component: Photos
    },
    {
      path: "/buddha-mode",
      name: "BuddhaMode",
      component: BuddhaMode
    }
  ]
});
