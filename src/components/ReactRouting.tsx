import BackToHome from "./ReUsable/BackToHome";
import Wrapper from "./ReUsable/Wrapper";

export default function ReactRouting() {
  return (
    <Wrapper title="React Routing">
      <div>
        <ul className="list-disc pl-5">
          <li>In single-page apps (SPA), all content is in one HTML file.</li>
          <li>
            It allows you to navigate between pages without reloading the page.
          </li>
          <li>Provides URL-based navigation and route parameters.</li>
        </ul>
      </div>
      <p className="text-lg font-bold">Key Concepts of React Routing</p>
      <div>
        <p>1. BrowserRouter</p>
        <ul className="list-disc pl-5">
          <li>Wraps your app to enable client-side routing.</li>
          <li>Keeps the UI in sync with the URL.</li>
        </ul>
      </div>
      <div>
        <p>2. Routes and Route</p>
        <ul className="list-disc pl-5">
          <li>Routes defines a container for all routes.</li>
          <li>Route maps a path to the component.</li>
        </ul>
      </div>
      <div>
        <p>3. Link</p>
        <ul className="list-disc pl-5">
          <li>Navigate without reloading the page.</li>
          <li>Replaces 'a' tags in SPA.</li>
        </ul>
      </div>
      <div>
        <p>4. useParams</p>
        <ul className="list-disc pl-5">
          <li>Access dynamic URL parameters.</li>
        </ul>
      </div>
      <div>
        <p>5. Navigate</p>
        <ul className="list-disc pl-5">
          <li>Programmatic navigation or redirect.</li>
        </ul>
      </div>
      <BackToHome />
    </Wrapper>
  );
}
