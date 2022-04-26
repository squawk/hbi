/* eslint-disable react/display-name */
import { NavLink } from "@remix-run/react";

export default ({ title, page }) => {
  return (
    <li>
      <NavLink
        prefetch="intent"
        className={({ isActive }) =>
          isActive
            ? "inline-block border bg-slate-300 py-3 px-5 hover:bg-slate-200"
            : "inline-block border py-3 px-5 hover:bg-slate-200"
        }
        to={`/performance/${page}`}
      >
        {title}
      </NavLink>
    </li>
  );
};
