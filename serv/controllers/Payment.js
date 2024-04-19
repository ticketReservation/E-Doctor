const express = require('express');
const axios = require('axios');
const app = express(); 
app.use(express.json());

module.exports={
Add: async (req, res) => {
  const url = "https://developers.flouci.com/api/generate_payment";
  const payload = {
    "app_token": "6e289555-acfc-4625-9e3f-950f8c6c7b30",
    "app_secret": "de187964-dfd7-495f-90da-64c0e9646430",
    "amount": req.body.amount,
    "accept_card": "true",
    "session_timeout_secs": 1200,
    "success_link": "http://localhost:4000/success",
    "fail_link": "http://localhost:4000/fail",
    "developer_tracking_id": "2c603621-8dc0-4961-b21f-df2f91fddcfb"
  };
  try {
    const result = await axios.post(url, payload);
    res.status(201).send(result.data);
  } catch (error) {
    console.log(error)
  }
}};


// app.get('/api/verify/:id', async (req, res) => {
//   try {
//     const result = await axios.get(`https://developers.flouci.com/api/verify_payment/${req.params.id}`,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'apppublic': '3ae91c05-02b2-4f92-9de8-bfcd08847afb',
//           'appsecret': '6a2f00e1-f15d-451c-82ba-149a5c5b4afb'
//         }
//       });
//     res.send(result.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });


// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// module.exports={
//   Add: async (req,res) =>{
//     res.send("ok")
//   }
// }