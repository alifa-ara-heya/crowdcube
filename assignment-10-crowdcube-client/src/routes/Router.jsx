import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import AllCampaigns from "../Pages/AllCampaigns";
import AddNewCampaign from "../Pages/AddNewCampaign";
import MyCampaign from "../Pages/MyCampaign";
import MyDonation from "../Pages/MyDonation";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import PrivateRoute from "./PrivateRoute";
import CampaignDetails from "../Pages/CampaignDetails";
import UpdateCampaign from "../Pages/UpdateCampaign";


const Router = createBrowserRouter(

    [
        {
            path: '/',
            element: <MainLayout />,
            errorElement: <Error />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    loader: () => fetch('https://assignment-10-crowdcube-server.vercel.app/campaigns')
                },
                {
                    path: 'all-campaigns',
                    element: <AllCampaigns />,
                    loader: () => fetch('https://assignment-10-crowdcube-server.vercel.app/campaigns')
                },
                {
                    path: 'details/:id',
                    element: <PrivateRoute>
                        <CampaignDetails />
                    </PrivateRoute>,
                    loader: async ({ params }) => {
                        const res = await fetch('https://assignment-10-crowdcube-server.vercel.app/campaigns')
                        const data = await res.json()
                        // console.log(data);
                        // console.log(params);
                        const singleData = data.find(d => d._id === params.id)
                        return singleData;
                    }
                },
                {
                    path: 'add-new-campaign',
                    element: <PrivateRoute>
                        <AddNewCampaign />
                    </PrivateRoute>
                },
                {
                    path: 'my-campaign',
                    element: <PrivateRoute>
                        <MyCampaign />
                    </PrivateRoute>,
                },
                {
                    path: 'my-donations',
                    element: <PrivateRoute>
                        <MyDonation />
                    </PrivateRoute>
                },
                {
                    path: 'register',
                    element: <Register />
                },
                {
                    path: 'sign-in',
                    element: <SignIn />
                },
                {
                    path: 'update-campaign/:id',
                    element: <PrivateRoute>
                        <UpdateCampaign />
                    </PrivateRoute>,
                    loader: ({ params }) => fetch(`https://assignment-10-crowdcube-server.vercel.app/campaigns/${params.id}`)
                }
            ]
        }
    ]
)

export default Router;