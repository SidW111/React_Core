import Wrapper from "./ReUsable/Wrapper";

export default function Authentication() {
  return (
    <Wrapper title="Authentication(JWT, OAuth)">
      <p className="text-lg font-bold">JWT (JSON Web Token)</p>
      <div>
        <p>1. Login flow</p>
        <ul className="list-disc">
          <li>
            User Submits credentials → backend validates → returns JWT token.
          </li>
          <li>
            Frontend stores token in HttpOnly cookie (safer) or localStorage.
          </li>
        </ul>
      </div>
      <div>
        <p>2. Using JWT</p>
        <ul className="list-disc">
          <li>Send token in Authorization header with API requests.</li>
          <li>Backend validates token for protected routes.</li>
        </ul>
      </div>
      <div>
        <p>3. Logout</p>
        <ul className="list-disc">
          <li>Remove token from storage.</li>
          <li>Redirect to login.</li>
        </ul>
      </div>
      <p className="text-lg font-bold">OAuth</p>
      <p>1. Third party login (Google, Github, Facebook)</p>
      <div>
        <p>2. Flow:</p>
        <ul className="list-disc">
          <li>Redirect user to provider login.</li>
          <li>Provider returns access token.</li>
          <li>Fetch user info → store session on frontend/backend.</li>
        </ul>
      </div>
    </Wrapper>
  );
}
