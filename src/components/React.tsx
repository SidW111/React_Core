export default function ReactMain() {
  return (
    <div className="w-screen h-screen mx-auto flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold p-2">React</h1>
      <div>
        <div className="p-2">
          <p className=" font-bold mb-2">What is React?</p>
          <p className="font-semibold tracking-tight">
            React is a JavaScript library for building user interfaces (UI).
          </p>
          <p className="font-semibold tracking-tight">
            Instead of refreshing the whole page when something changes,
            <br />
            React updates the only part of the page that needs to be changed
          </p>
        </div>
        <div className="p-2 ">
          <p className="font-bold mb-2">How React works?</p>
          <p className="font-semibold">
            It usually does the changes using the{" "}
            <span className="font-bold">Virtual Dom</span>
          </p>
          <p className="font-semibold">
            Normally, browser uses the real DOM(Document Object Model),Updating
            is slow.
          </p>
          <p className="font-semibold">
            React creates a virtual copy of the DOM in memory.
          </p>
          <p className="font-semibold">
            React compares the old virtual DOM with new one (a process called
            diffing)
            <br />
            and then updates only whats necessary in the real DOM
          </p>
        </div>
        <div className="p-2 flex flex-col ">
          <p className="font-bold mb-2">Benefits Of React</p>
          <p className="font-semibold">
            <span className="font-bold"> Reuseable Components &rarr; </span>
            Build small UI blocks(like Lego pieces)
            <br />
            and then reuse them everywhere.
          </p>
          <p className="font-semibold">
            <span className="font-bold">
              Fast Updates with virtual DOM &rarr;
            </span>
            Only updates whats needed.
          </p>
          <p className="font-semibold">
            <span className="font-bold">Huge Ecosystem &rarr; </span>
            Tons of libraries, community, and tools.
          </p>
          <p className="font-semibold">
            <span className="font-bold">Declarative &rarr; </span>
            You describe what the UI should look like,
            <br />
            React figures out how to update it.
          </p>
        </div>
      </div>
    </div>
  );
}
