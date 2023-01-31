const axios = require("axios");

module.exports = {

  getAllMatches: async (req, res) => {
    let { data } = await axios(`${BASE_URL}/matches`, {
      headers: {
        'X-Auth-Token': API_TOKEN
      }
    })
    
    res.json(data);
  },

  getMatch: async (req, res) => {
    let id = req.params.id;
    let { data } = await axios(`${BASE_URL}/matches/${id}`, {
      headers: {
        'X-Auth-Token': API_TOKEN
      }
    })

    res.json(data)
  },

};
