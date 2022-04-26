import { LoaderFunction, Outlet } from "remix";
import AboutMe from "~/components/AboutMe";
import MainContent from "~/components/MainContent";
import TopMenu from "~/components/TopMenu";
import { requireUserId } from "~/session.server";

const navigation = [
  { name: "myDashboard", href: "/dashboard", current: false },
  { name: "myPerformance", href: "/performance/values", current: true },
  { name: "myLearning", href: "/learning", current: false },
  { name: "Admin", href: "#", current: false },
];

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  return userId;
};

export default () => {
  return (
    <>
      <TopMenu navigation={navigation} />
      <MainContent>
        <h1 className="py-3 text-3xl">myPerformance</h1>
        <AboutMe />
        <Outlet />
      </MainContent>
    </>
  );
};
