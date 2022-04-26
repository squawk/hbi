import type { LoaderFunction } from "remix";
import AboutMe from "~/components/AboutMe";
import MainContent from "~/components/MainContent";
import TopMenu from "~/components/TopMenu";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";

const navigation = [
  { name: "myDashboard", href: "/dashboard", current: true },
  { name: "myPerformance", href: "/performance/values", current: false },
  { name: "myLearning", href: "/learning", current: false },
  { name: "Admin", href: "#", current: false },
];

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  return userId;
};

export default () => {
  const user = useUser();
  // console.log(user);

  return (
    <>
      <TopMenu navigation={navigation} />
      <MainContent>
        <h1 className="py-3 text-3xl">myDashboard</h1>
        <AboutMe />
        <h2 className="py-3 text-2xl">myReview</h2>
        <ul className="list-disc pl-8">
          <li>No action necessary at this time</li>
          <li>Pending - status? date?</li>
          <li className="text-red-500">Goal Management</li>
        </ul>
        <h2 className="py-3 text-2xl">myLearning</h2>
        <ul className="list-disc pl-8">
          <li>date - Learning Event A (Soonest to latest)</li>
          <li>date - Learning Event B (Soonest to latest)</li>
          <li className="text-red-500">LMS Link</li>
        </ul>
        <hr />
        <h2 className="py-3 text-2xl">myTeam Reviews</h2>
        <ul className="list-disc pl-8">
          <li>
            Employee 1 - Review type- due date - Self Review Status (if overdue
            RED)
          </li>
          <li>
            Employee 2 - Review type- due date - Self Review Status (if overdue
            RED)
          </li>
          <li className="text-red-500">
            Full list of employees? (see past data and goals)
          </li>
        </ul>
        <h2 className="py-3 text-2xl">myTeam Learnings</h2>
        <ul className="list-disc pl-8">
          <li>Employee 1 - Learning Event A - date</li>
          <li>Employee 2 - Learning Event B - date</li>
        </ul>
      </MainContent>
    </>
  );
};
