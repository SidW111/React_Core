import Code from "./ReUsable/Code";
import Highlight from "./ReUsable/HighLight";
import Wrapper from "./ReUsable/Wrapper";

export default function ListnKeys() {
  return (
    <Wrapper title="List and Keys">
      <div>
        <p className="font-bold mb-1">what are lists?</p>
        <p>A list in react means showing multiple items on the screen.</p>

        <div>
          <ul className="list-disc pl-5">
            <li>A shopping app showing a list of products</li>
            <li>A chat app showing a list of messages</li>
            <li>A music app showing a list of songs</li>
          </ul>
        </div>

        <p className="font-bold mt-1 mb-1">what are Keys?</p>
        <p>A key is like a unique identity tag for each list item.</p>
        <p>
          It helps react to keep track of which item is which when the list
          changes
        </p>
        <p>eg :- adding/removing/reordering.</p>
        <p className="border-b  border-gray-500 mt-2 mb-1"></p>
        <div className="">
          <p>Whenever we need to render multiple things in react,</p>
          <p>like a list of posts, tasks, or products.</p>
          <p>
            We use <Highlight>.map()</Highlight> method to loop over data render
            it
          </p>
          <p>Without key, React wouldn’t know which item got added/removed</p>
          <p>it would re-render everything unnecessarily.</p>
        </div>
        <Code>
          <p>function TodoList() {"{"}</p>
          <p>const todos = [ "Learn React", "Build a project", "Get a job"];</p>
          <p>return(</p>
          <p>&lt;ul&gt;</p>
          <p>
            {"{"}todos.map((todo,index) =&gt; ( &lt;li&gt; key={"{"}index{"}"}
            {"{"}todo{"}"}&lt;/li&gt;))
          </p>
          <p>)</p>
          <p>{"}"}</p>
        </Code>
      </div>
    </Wrapper>
  );
}
