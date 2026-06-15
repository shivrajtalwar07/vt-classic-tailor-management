const express = require("express");
const bcryptjs = require("bcryptjs");
const app = express();

const dotenv = require("dotenv");

const hashPassword = require("./utils/hashPassword");
const userSchema = require("./model/userModel");
dotenv.config();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});


app.use(express.json());


app.post("/api/auth/register", async (req, res) => {
  const { name, email, password, phone, address } = req.body;

  const hashedPassword = await hashPassword(password);
  userSchema.create({ name, email, password: hashedPassword, phone, address }).then((user) => {
    res.status(201).json(user);
  }).catch((err) => {
    res.status(500).json(err);
  })
})
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists
    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 2. Compare password
    const isPasswordMatched = await bcryptjs.compare(password, user.password);

    if (!isPasswordMatched) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 3. Send safe response (NO password)
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

const contactSchema = require("./model/contactModel");
const orderSchema = require("./model/orderModel");


app.post("/api/contact", async (req, res) => {
  try {
    const { fname, lname, email, phone, message } = req.body;
    
    const newContact = await contactSchema.create({
      fname,
      lname,
      email,
      phone,
      message,
    });
    
    res.status(201).json({ message: "Message saved successfully", data: newContact });
  } catch (error) {
    console.log("Error saving contact message:", error);
    res.status(500).json({ message: "Server error, failed to save message" });
  }
});

app.post("/api/orders", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: "Database connection is not ready. Please wait a moment or check your MongoDB URI." });
    }
    
    console.log("Received order data:", req.body);
    const { shirtId, shirtName, shirtIcon, shopName, imageNumber, customerEmail, price, deliveryDate, deliveryTime } = req.body;
    
    const newOrder = await orderSchema.create({
      shirtId,
      shirtName,
      shirtIcon,
      shopName,
      imageNumber,
      customerEmail,
      price,
      deliveryDate,
      deliveryTime,
    });
    
    console.log("Order saved successfully:", newOrder._id);
    res.status(201).json({ message: "Order placed successfully", data: newOrder });
  } catch (error) {
    console.error("CRITICAL ERROR SAVING ORDER:", error);
    res.status(500).json({ message: "Server error, failed to place order", error: error.message });
  }
});

app.get("/api/orders", async (req, res) => {
  try {
    const orders = await orderSchema.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.log("Error fetching orders:", error);
    res.status(500).json({ message: "Server error, failed to fetch orders" });
  }
});

app.delete("/api/orders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await orderSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ message: "Server error, failed to delete order" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});