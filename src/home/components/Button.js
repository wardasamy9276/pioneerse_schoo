import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// export default function Button() {
//   return (
//     <div className="flex justify-between">
//       <a href={"/londing"}>
//         <button>تواص معنا</button>
//       </a>
//       <span>المميزات</span>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
export default function Buttons() {
    return (_jsxs("div", { className: "flex justify-between items-center gap-4", children: [_jsx(Link, { to: "/dashboard", children: _jsx("button", { className: "px-5 py-2 bg-cyan-600 text-white rounded-xl\r\n          hover:bg-cyan-700 transition", children: "\u0644\u0648\u062D\u0647 \u0627\u0644\u062A\u062D\u0643\u0645" }) }), _jsx(Link, { to: "/features", children: _jsx("button", { className: "px-5 py-2 border border-cyan-600 text-cyan-600 rounded-xl\r\n          hover:bg-cyan-50 transition", children: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627" }) })] }));
}
