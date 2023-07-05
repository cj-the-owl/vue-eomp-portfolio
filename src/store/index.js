import { createStore } from 'vuex'

const dataURL = ''
export default createStore({
  state: {
    projects: null,
  },
  
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    }
  },
  actions: {
    getProjects: async (context) => {
      fetch("https://cj-the-owl.github.io/eomp-data/projects.json")
      .then((res) => res.json())
      .then((projects)=> context.commit("setProjects", projects));
    }
  },
  
})
