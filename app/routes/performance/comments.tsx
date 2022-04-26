import PerformanceNav from "~/components/PerformanceNav";

export default () => {
  return (
    <>
      <PerformanceNav />
      <div className="p-3">
        <h2 className="my-2 text-2xl">Comments</h2>

        <div className="mt-4">
          <label>Additional Comments</label>
          <textarea
            className="w-full rounded border border-slate-400 p-2"
            rows={3}
            name="commments"
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
