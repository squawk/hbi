import PerformanceNav from "~/components/PerformanceNav";

export default () => {
  return (
    <>
      <PerformanceNav />
      <div className="p-3">
        <h2 className="my-2 text-2xl">Old Goals</h2>
        <h3 className="mt-4 text-xl">Goal 1 Category</h3>
        <p>Nostrud cupidatat exercitation non nisi dolore irure ipsum.</p>
        <h3 className="mt-4 text-xl">Goal 2 Category</h3>
        <p>
          Incididunt quis nostrud ut veniam aute ut dolor incididunt laboris ex.
        </p>
        <p className="mt-4">
          <button
            type="submit"
            className="rounded bg-amber-300 py-2 px-4 font-bold leading-normal hover:bg-amber-400"
            name="save"
          >
            Enter Last Year Goal
          </button>
        </p>

        <div className="mt-4">
          <label>
            Goal Progress (Discuss what was accomplished, not accomplished, and
            any changes to the goals)
          </label>
          <textarea
            className="w-full rounded border border-slate-400 p-2"
            rows={3}
            name="progress"
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

        <h2 className="mt-5 mb-2 text-2xl">New Goals</h2>
        <p className="mt-4">
          <button
            type="submit"
            className="rounded bg-amber-300 py-2 px-4 font-bold leading-normal hover:bg-amber-400"
            name="save"
          >
            Enter New Goal
          </button>
        </p>

        <h3 className="mt-4 text-xl">Goal 1 Category</h3>
        <p>Proident elit nisi minim ipsum consectetur officia.</p>
        <h3 className="mt-4 text-xl">Goal 2 Category</h3>
        <p>
          Nisi duis amet in duis laboris excepteur consequat velit pariatur sint
          incididunt deserunt ad.
        </p>
      </div>
    </>
  );
};
