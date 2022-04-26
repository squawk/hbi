export default function AboutMe() {
  return (
    <>
      <table className="bg-white shadow-lg">
        <thead>
          <tr>
            <th className="border bg-slate-100 px-8 py-4 text-left">Name</th>
            <th className="border bg-slate-100 px-8 py-4 text-left">
              Information
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-8 py-4">MN</td>
            <td className="border px-8 py-4">Apple</td>
          </tr>
        </tbody>
      </table>
      <hr className="my-2" />
    </>
  );
}
