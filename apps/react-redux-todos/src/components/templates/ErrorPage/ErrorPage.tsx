import { Heading } from "../../atoms/Heading";
import { Link } from "../../atoms/Link";

export function ErrorPage() {
  return (
    <div>
      <Heading as="h1">Page not found</Heading>
      <Link to="/">Back to your ToDos list</Link>
    </div>
  );
}
