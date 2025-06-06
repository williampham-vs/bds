import App from "./App";
import { pathnames } from "./lib/pathname";
import { PublicLayout } from "./pages/public";
import { Homepage, RentPropety, SoldPropety, News } from "./pages/public";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: pathnames.public.layout,
        element: <PublicLayout />,
        children: [
          {
            path: pathnames.public.homepage,
            element: <Homepage />,
          },
          {
            path: pathnames.public.rentPropety,
            element: <RentPropety />,
          },
          {
            path: pathnames.public.soldPropety,
            element: <SoldPropety />,
          },
          {
            path: pathnames.public.news,
            element: <News />,
          },
        ],
      },
    ],
  },
];

export default routes;
