const mongoose = require('mongoose');
const Alive = new mongoose.Schema({
  id: { type: String,  unique: true ,required: true, default:"Suhail_Md"},
  text: { type: String, default: `*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ* \n\n_ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт_ \n_Cʀєαtєd вყ : max ni9e_\n_If any query : wa.me/2349031254430_\n\n\n*_Update Alive Message by adding text with Alive_* \n*Eg: _.alive RUNNING MAX NI9E IS AWESOME_*` },
  get:  { type: String, default:"you did'nt set alive message yet, Max ni9e is still awesome" },
  url: { type: String, default:""},  
  image: { type: Boolean, default: false },
  video: { type: Boolean, default: false }
})

const alive =mongoose.model("alive", Alive)
module.exports = { alive }
