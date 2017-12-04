import Vue from "vue";
import Vuex from "vuex";

// vue needs loaded and vuex prior to this script included
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    jwt: null,
    auth: false,

    blogList: [],

    currentStory: {
      title: "Arch Linux MongoDB Koa Nginx Node Vue = ???",
      subtitle: "Learning how servers work, and mean lamps, and stuff",
      /*
      bodyText: "This is the story of how a very old disintegrating laptop is now humming along in a box running this website...

Once upon a time a laptop was going to be thrown away because it was old, It's screen was falling off, it kept forgetting who he was and falling asleep. But a young man saw an unseen potential for this old laptop and gave him a new life.

Chapter 1 Linux: This may have actually been the most straightforward Arch Linux install that I have ever done. Just a simple 2 part partition and no GUI to speak of (on the todo list is to actually write out my current hoop-jumping that I do for a non-server arch install).

Chapter 2 Node or Apache: I went with the node side because I already work with JavaScript so it should be more applicable and require less learning on my end. However, I do have plans to set up the back-end to take Python (if I ever get this site to a point it actually does anything). Having modularity and customization is going to be one of the main themes of this project, just a heads up.

Chapter 3 Making node do something...really anything: So like I just said, modularity and customizability are what drew me to Koa as middleware for building the server. That and being different and difficult. Building out a basic server file turns out to be super simple -- figuring out how to deploy in a production environment, huge secret. I did end up figuring out though and am using PM2 and Arch's Systemd to run the server as a local host. which is where Nginx comes in.

Chapter 4 How Nginx got invited to the party: Everything I've read so far recommends doing some kind of proxing for your server and hand in hand with that is Nginx. And sure there is an add-on for Koa that does proxying, but I really like making my life harder for some reason. And it was a great opportunity to take a peek at one of the most popular pieces of server software. So I got everything set up to have Nginx proxy a local server out to the machines IP, which was pretty easy. Just had to use proxy_pass.

Chapter 5 Firewalls: I did spend about 2 days trying to figure out why nobody could see the website until I found this great article (https://ncona.com/2013/02/making-your-local-server-accessible-from-anywhere/) about firewall configuration. And that's how I got the server setup outside the firewall (silly me).

But now there's some content on the site, and there is a happy old nearly overheating laptop that can share my ramblings with the world.

And he lived happily ever after for the remainder of his days,

The End.",
*/
      imgUrl: "../assets/the_cloud.png",
    },
    blogs: {},
  },
  mutations: {
    setCurrentStory(state, value) {
      state.currentStory = value;
    },
    setJWT(state, value) {
      state.jwt = value;
    },
    setAuth(state, value) {
      state.auth = value;
    },
    setBlogList(state, value) {
      state.blogList = value;
    },
  },
  getters: {
    getCurrentStory(state) {
      return state.currentStory;
    },
    getBlogList(state) {
      return state.blogList;
    },
    isAuth(state) {
      return state.auth;
    },
  },
  actions: {
    setCurrentStory(context, payload) {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      let body = new Object();
      body.content = payload;
      body = JSON.stringify(body);

      const init = {
        method: "POST",
        headers,
        body,
        mode: "cors",
        cache: "default",
      };

      fetch("http://127.0.0.1:3003/blog/getItem/", init)
        .then(res => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw "Endpoint Failure";
          }
        })
        .then(body => {
          console.log("store: ", body);
          context.commit("setCurrentStory", body.story);
        })
        .catch(e => {
          console.error(e);
        });
    },
    blogList(context, payload) {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      const init = {
        method: "GET",
        headers,
        mode: "cors",
        cache: "default",
      };

      fetch("http://127.0.0.1:3003/blog/listItems", init)
        .then(res => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw "Endpoint Failure";
          }
        })
        .then(body => {
          console.log("store: ", body);
          context.commit("setBlogList", body.list);
        })
        .catch(e => {
          console.error(e);
        });
    },
    saveBlogEntry(context, payload) {
      let body = new Object();
      body.jwt = payload.userJwt;
      body.entry = payload.content;
      body = JSON.stringify(body);

      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      const init = {
        method: "POST",
        headers,
        body,
        mode: "cors",
        cache: "default",
      };

      fetch("http://127.0.0.1:3003/blog/addItem", init)
        .then(res => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw "Endpoint Failure";
          }
        })
        .then(body => {
          console.log("store: ", body);
          return true;
        })
        .catch(e => {
          console.error(e);
          return e;
        });
    },
    loginBuddhaMode(context, payload) {
      let body = new Object();
      body.username = payload.username;
      body.password = payload.password;
      body = JSON.stringify(body);

      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      const init = {
        method: "POST",
        headers,
        body,
        mode: "cors",
        cache: "default",
      };

      fetch("http://127.0.0.1:3003/login/", init)
        .then(res => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw "Endpoint Failure";
          }
        })
        .then(body => {
          console.log("store: ", body);
          if (body.sucess) {
            context.commit("setJWT", body.jwt);
            context.commit("setAuth", body.sucess);
            localStorage.setItem("user-jwt", body.jwt);
          } else {
            throw "Invalid Login";
          }
        })
        .catch(e => {
          context.commit("setJWT", null);
          context.commit("setAuth", false);
          console.error(e);
        });
    },
  },
});
