const axios = require("axios");

module.exports = {

  getAllCompetitions: async (req, res) => {
    let { data } = await axios(`${BASE_URL}/competitions`, {
      headers: {
        'X-Auth-Token': API_TOKEN
      }
    })
    
    res.json(data);
  },

  getCompetition: async (req, res) => {
    let id = req.params.id;
    let { data } = await axios(`${BASE_URL}/competitions/${id}`, {
      headers: {
        'X-Auth-Token': API_TOKEN
      }
    })

    res.json(data)
  },

  getStandings: async (req, res) => {
    let id = req.params.id;
    let { data } = await axios(`${BASE_URL}/competitions/${id}/standings`, {
      headers: {
        'X-Auth-Token': API_TOKEN
      }
    })

    res.json(data)
  },

};
