import { Link } from "react-router";
import { navigatePath } from "../../lib/navigatePath";

export default function NavigatePath({
  path,
  dynamic,
}: {
  path: string;
  dynamic?: string;
}) {
  const navigate = navigatePath(path, dynamic);
  return (
    <nav>
      <ul className="flex items-center">
        <li>
          <Link to="/" className="text-(--mute)">
            홈
          </Link>
        </li>
        {navigate?.map((nav) => (
          <li key={nav.title}>
            <span className="text-(--mute) mx-2.5">/</span>
            <Link to={nav.path} className="text-(--mute)">
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
