import { ErrorPage } from "layout/Error";

export default function NotFound(): JSX.Element {
    return <ErrorPage status="404" message="Oops? This page couldn't be found!" />;
}
