/* eslint-disable react/display-name */
import PerformanceTab from "./PerformanceTab";

export default () => {
  return (
    <nav>
      <ul className="list-reset flex">
        <PerformanceTab title="Values" page="values" />
        <PerformanceTab
          title="Expectations/Responsibilities"
          page="responsibilities"
        />
        <PerformanceTab title="Goals" page="goals" />
        <PerformanceTab title="Comments" page="comments" />
        <PerformanceTab title="Summary" page="summary" />
      </ul>
    </nav>
  );
};
