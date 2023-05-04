const express = require('express')
const qs = require('qs')

const app = express();
const PORT = process.env.PORT || 3000

const parseQueryString = (data, context) => {
    const queryString = qs.parse(data)
    return queryString
}

app.use(parseQueryString)

app.listen(PORT)

// exports.parseQueryString = functions.https.onCall((data, context) => {
//     functions.logger.info("Hello logs!", {structuredData: true});
  
//     const queryString = qs.parse(data)
  
//     return queryString
//   });