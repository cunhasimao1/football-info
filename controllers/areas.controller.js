const axios = require("axios");

module.exports = {

  getAllAreas: async (req, res) => {
    let { data } = await axios(`${BASE_URL}/areas`, {
      headers: {
        'X-Auth-Token': API_TOKEN
      }
    })
    
    res.json(data);
  },

  getArea: async (req, res) => {
    let id = req.params.id;
    let { data } = await axios(`${BASE_URL}/areas/${id}`, {
      headers: {
        'X-Auth-Token': API_TOKEN
      }
    })

    res.json(data)
  },

};
