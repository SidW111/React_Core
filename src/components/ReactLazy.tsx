import Code from "./ReUsable/Code";
import Highlight from "./ReUsable/HighLight";
import Wrapper from "./ReUsable/Wrapper";

export default function ReactLazy() {
  return (
    <Wrapper title="React.lazy- Lazy Loading Components">
      
      <p>
        Normally, React loads all components at once (big bundle → slower load).
      </p>
      <p>
        <Highlight>React.lazy </Highlight> lets you load a component only when
        it is rendered,
      </p>
      <p>It helps to reduce the initial bundle size.</p>
      <p>This is especially useful for routes or rarely used components.</p>
      <Code>
        <pre>
          {`// Lazy-load the About component
const About = React.lazy(() => import("./About"));

function App() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Suspense handles the loading state */}
      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
    </div>
  );
}
`}
        </pre>
      </Code>

      <p>React.lazy() takes a function that returns a dynamic import.</p>
      <p>The component is not loaded until it is rendered.</p>
      <p>
        Suspense is required to show a fallback UI (like a loader) while the
        component loads.
      </p>
    </Wrapper>
  );
}
