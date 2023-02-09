const mongoose = require("mongoose");
const Event = require("../src/models/Event");
const { events } = require("./events");
const connectionString = "mongodb+srv://maisahjuevesano:Sommar11@cluster0.r0fw7qn.mongodb.net/studioSalsa?retryWrites=true&w=majority"

const seedEventsDb = async () => {
  let conn;
  try {
    // Connect to database
    mongoose.set("strictQuery", false); // https://stackoverflow.com/questions/74747476/deprecationwarning-mongoose-the-strictquery-option-will-be-switched-back-to
    conn = await mongoose.connect(connectionString);

    // Clear database from any existing data
    console.log("Clearing database...");
    await Event.deleteMany();

    // Add data to database
    console.log("Adding data...");
   
    await Event.create(events);

    console.log("Database successfully populated with data...");
  } catch (error) {
    // Log eny eventual errors to Terminal
    console.error(error);
  } finally {
    // Disconnect from database
    if (conn) conn.disconnect();
    // End Node process
    process.exit(0);
  }
};

seedEventsDb();
