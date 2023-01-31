const axios = require("axios");

module.exports = {

  getPerson: async (req, res) => {
    let id = req.params.id;
    
    let { data } = await axios(`${BASE_URL}/persons/${id}`, {
      headers: {
        'X-Auth-Token': API_TOKEN
      }
    })

    res.json(data)
  },

};
