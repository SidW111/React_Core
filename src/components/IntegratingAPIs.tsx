import BackToHome from "./ReUsable/BackToHome";
import Code from "./ReUsable/Code";
import Wrapper from "./ReUsable/Wrapper";

export default function IntegratingAPI() {
  return (
    <Wrapper title="Integrating APIs (REST, GraphQL)">
      <p className="font-bold text-xl">REST API</p>
      <p>Standard HTTP methods: GET, POST, PUT, DELETE.</p>
      <p>Fetching example using Axios:</p>
      <Code>
        {`import axios from "axios"
    const fetchUsers = async() => {
        const response = await axios.get("https://wp.com");
        console.log(response.data);
    };`}
      </Code>
      <p className="font-bold text-xl">GraphQL</p>
      <p>Single endpoint, flexible queries.</p>
      <p>Advantages: fetch exactly what you need.</p>
      <Code>
        {`query {
  user(id: "1") {
    name
    email
  }
}
`}
      </Code>
      <BackToHome />
    </Wrapper>
  );
}
