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
  return (
    <div className="flex justify-between items-center gap-4">
      <Link to="/dashboard">
        <button
          className="px-5 py-2 bg-cyan-600 text-white rounded-xl
          hover:bg-cyan-700 transition"
        >
          لوحه التحكم
        </button>
      </Link>

      <Link to="/features">
        <button
          className="px-5 py-2 border border-cyan-600 text-cyan-600 rounded-xl
          hover:bg-cyan-50 transition"
        >
          تواصل معنا
        </button>
      </Link>
    </div>
  );
}
