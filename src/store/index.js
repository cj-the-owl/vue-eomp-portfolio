import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
    testimonials: null,
    educations: null,
    expriences: null,
  },
  
  mutations: {
    setEducations: (state, value) => {
      state.educations = value
    },
    setExperiences: (state, value) => {
      state.experiences = value
    },
    setProjects: (state, value) => {
      state.projects = value
    },
    setTestimonials: (state, value) => {
      state.testimonials = value
    }
  },
  actions: {
       async fetchEducations(context) {
      try{
        let {educations} = await (await fetch("https://cj-the-owl.github.io/eomp-data/eomp-db.json")).json()
        if (educations) {
          context.commit ("setEducations", educations)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(error)
      }
  },
       async fetchExperiences(context) {
      try{
        let {experiences} = await (await fetch("https://cj-the-owl.github.io/eomp-data/eomp-db.json")).json()
        if (experiences) {
          context.commit ("setExperiences", experiences)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(error)
      }
  },
       async fetchProjects(context) {
      try{
        let {projects} = await (await fetch("https://cj-the-owl.github.io/eomp-data/eomp-db.json")).json()
        if (projects) {
          context.commit ("setProjects", projects)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(error)
      }
  },
       async fetchTestimonials(context) {
      try{
        let {testimonials} = await (await fetch("https://cj-the-owl.github.io/eomp-data/eomp-db.json")).json()
        if (testimonials) {
          context.commit ("setTestimonials", testimonials)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(error)
      }
  },
}
});
