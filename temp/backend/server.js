const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
const PORT = 4000;

// Get local IP address
const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (let iface in interfaces) {
    for (let i = 0; i < interfaces[iface].length; i++) {
      const { family, address, internal } = interfaces[iface][i];
      if (family === "IPv4" && !internal) {
        return address;
      }
    }
  }
  return "localhost";
};

// Middleware
app.use(cors());
app.use(express.json());

// Express example
app.post("/payment-success", (req, res) => {
  // You can verify the transaction here if needed
  res.redirect("https://ajitmeesala.github.io/Ajit_Meesala/temp/success.html"); // or a universal link / deep link
});

// Express example
app.post("/payment-failure", (req, res) => {
  // You can verify the transaction here if needed
  res.redirect("https://ajitmeesala.github.io/Ajit_Meesala/temp/failure.html"); // or a universal link / deep link
});

// Express example
app.get("/payment-success", (req, res) => {
  // You can verify the transaction here if needed
  res.redirect("https://ajitmeesala.github.io/Ajit_Meesala/temp/success.html"); // or a universal link / deep link
});

// Express example
app.get("/payment-failure", (req, res) => {
  // You can verify the transaction here if needed
  res.redirect("https://ajitmeesala.github.io/Ajit_Meesala/temp/failure.html"); // or a universal link / deep link
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on https://${getLocalIP()}:${PORT}`);
});
