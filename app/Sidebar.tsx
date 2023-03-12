import Link from "next/link";
import Category from "./Category";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <Link
        href="/"
        className="text-gray-100 hover:bg-gray-800 px-2 py-1 rounded text-base m-0"
      >
        Home
      </Link>
      <Link
        href="/person/54"
        className="text-gray-100 hover:bg-gray-800 px-2 py-1 rounded text-base m-0"
      >
        My Wishes
      </Link>
      <div className="mt-8">
        <Category name={"Friends & Family"} />
      </div>
      <div>+ Add category</div>
    </div>
  );
}
