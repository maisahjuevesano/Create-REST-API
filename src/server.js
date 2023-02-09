const express = require("express")
const app = express()

const beachRoute = require("./routes/beachRoute")
const reviewRoute = require("./routes/reviewRoute")
const userRoute = require("./routes/userRoute")




app.use(express.json())

app.use('/api/v1/beaches', beachRoute)
app.use('/api/v1/reviews', reviewRoute)
app.use('/api/v1/users', userRoute)

const port = 5000
async function run() {
	try {
		
		
		app.listen(port, () => {
			console.log(`Server running on http://localhost:${port}`)
		})
	} catch (error) {
		console.error(error)
	}
}

run()
