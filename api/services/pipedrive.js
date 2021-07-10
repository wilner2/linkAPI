const axios = require('axios');
require('dotenv').config({ path: '../.env' })
const link = 'https://api.pipedrive.com/api/v1/deals/';

const getNegocios = async () => {
    try {
        
        const result = await  axios.get(link, {
            params: {
                api_token: process.env.PIPE_DRIVE_TOKEN,
                status: 'won',
            },
        });
        return result.data
    } catch (error) {
        return error
        
    }


}

  module.exports = getNegocios