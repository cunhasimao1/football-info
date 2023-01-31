const axios = require("axios");

module.exports = {

  getAllTeams: async (req, res) => {
    let { data } = await axios(`${BASE_URL}/teams`, {
      headers: {
        'X-Auth-Token': API_TOKEN
      }
    })
    
    res.json(data);
  },

  getTeam: async (req, res) => {
    let id = req.params.id;
    let { data } = await axios(`${BASE_URL}/teams/${id}`, {
      headers: {
        'X-Auth-Token': API_TOKEN
      }
    })

    res.json(data)
  },

};
