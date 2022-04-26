import PerformanceNav from "~/components/PerformanceNav";

export default () => {
  return (
    <>
      <PerformanceNav />
      <div className="p-3">
        <h2 className="my-2 text-2xl">Core Responsibilities</h2>
        <ul className="mb-4 list-disc pl-8">
          <li>List of core Responsibilities</li>
          <li>Est irure ex nostrud anim.</li>
          <li>Est irure ex nostrud anim.</li>
        </ul>

        <div className="mt-4">
          <label>
            [EMPNAME] demostrates a high level of competency in the following
            areas. (Include successes from the review period)
          </label>
          <textarea
            className="w-full rounded border border-slate-400 p-2"
            rows={3}
            name="competency"
          ></textarea>
        </div>

        <div className="mt-4">
          <label>
            [EMPNAME] has an opportunity to improve in the following areas.
            (Include opportunities from the review period)
          </label>
          <textarea
            className="w-full rounded border border-slate-400 p-2"
            rows={3}
            name="competency"
          ></textarea>
        </div>

        <div className="mt-4">
          <label>
            Do you do well as a leader and what do you need to work on? (This
            only shows if they are a manager)
          </label>
          <textarea
            className="w-full rounded border border-slate-400 p-2"
            rows={3}
            name="competency"
          ></textarea>
        </div>

        <p className="mt-4">
          <button
            type="submit"
            className="rounded bg-amber-300 py-2 px-4 font-bold leading-normal hover:bg-amber-400"
            name="save"
          >
            Save
          </button>
        </p>
      </div>
    </>
  );
};
