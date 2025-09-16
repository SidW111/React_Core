import BackToHome from "./ReUsable/BackToHome";
import Code from "./ReUsable/Code";
import Wrapper from "./ReUsable/Wrapper";

export default function BuildingDeploying() {
  return (
    <Wrapper title="Building and Deploying">
      <p className="font-bold text-xl">Build</p>
      <Code>{`npm run build`}</Code>
      <p>Creates production-ready static files (build/ folder).</p>
      <p className="font-bold text-xl">Deploy Options</p>
      <div>
        <ul className="list-decimal">
          <li>Vercel / Netlify → fast, simple CI/CD</li>
          <li>AWS S3 + CloudFront → scalable</li>
          <li>Docker → containerized apps</li>
        </ul>
      </div>
      <p className="font-bold text-xl">Tips</p>
      <div>
        <ul className="list-disc">
          <li>Use .env files for API keys.</li>
          <li>Optimize images and bundles for speed.</li>
        </ul>
      </div>
      <BackToHome />
    </Wrapper>
  );
}
