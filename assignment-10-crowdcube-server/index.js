require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId, deserialize } = require('mongodb');

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kvlax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const campaignCollection = client.db('campaignDB').collection('campaign');

        const userCollection = client.db('campaignDB').collection('users');

        const donationCollection = client.db('campaignDB').collection('donations');


        //read/get all the data for campaigns
        app.get('/campaigns', async (req, res) => {
            const cursor = campaignCollection.find();
            const result = await cursor.toArray();
            res.send(result); //check localhost 'http://localhost:5000/campaigns'
        })

        // post a campaign
        app.post('/campaigns', async (req, res) => {
            const newCampaign = req.body;
            // console.log(newCampaign);
            const result = await campaignCollection.insertOne(newCampaign);
            res.send(result);
        })

        // delete a campaign
        app.delete('/campaigns/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await campaignCollection.deleteOne(query);
            res.send(result);
        })

        // update a campaign
        app.get('/campaigns/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await campaignCollection.findOne(query);
            res.send(result);
        })

        // this also includes update
        app.put('/campaigns/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };

            const updatedCampaign = req.body;
            const campaign = {
                $set: {
                    title: updatedCampaign.title,
                    photo: updatedCampaign.photo,
                    type: updatedCampaign.type,
                    minimum: updatedCampaign.minimum,
                    deadline: updatedCampaign.deadline,
                    goal: updatedCampaign.goal,
                    description: updatedCampaign.description
                }
            }

            const result = await campaignCollection.updateOne(filter, campaign, options);
            res.send(result);
        })

        // users related apis
        // second operation, get a user
        app.get('/users', async (req, res) => {
            const cursor = userCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // first operation, post a user
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            // console.log('creating new user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        })

        // post a donation
        app.post('/donations', async (req, res) => {
            const newDonation = req.body;
            // console.log(newDonation);
            const result = await donationCollection.insertOne(newDonation);
            res.send(result);
        })

        // get my donations
        app.get('/myDonations', async (req, res) => {
            const userEmail = req.query.email;
            try {
                const donations = await donationCollection.find({ email: userEmail }).toArray();
                res.send(donations);
            } catch (error) {
                res.send({ error: 'Failed to fetch campaigns' });
            }
        })


        // get my campaigns
        app.get('/myCampaigns', async (req, res) => {
            const userEmail = req.query.email;
            // console.log('user email is,', userEmail); Assuming email is passed as a query parameter
            // if (!userEmail) {
            //     return res.status(400).send({ error: 'User email is required' });
            // }
            try {
                const campaigns = await campaignCollection.find({ email: userEmail }).toArray();
                res.send(campaigns);
            } catch (error) {
                res.send({ error: 'Failed to fetch campaigns' });
            }
        });


        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('crowd cube server is running.')
})

app.listen(port, () => {
    console.log(`crowd cube server is running on port ${port}`);
})