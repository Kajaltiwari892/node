🧩 What is Event Loop?

- JavaScript is single-threaded — meaning it can do one thing at a time.
- But we can still do async tasks (like setTimeout, fetch, I/O) without blocking the main thread.

The Event Loop is what manages all the tasks and decides what runs and when.

Think of it like a manager in a restaurant:

There’s a queue of tasks

The manager picks the next task from the queue and executes it

⚙️ How it Works

JS has a Call Stack — where normal synchronous code runs.

It has a Task Queue / Callback Queue — where asynchronous callbacks wait.

Event Loop continuously checks:

If the Call Stack is empty → pick the next task from the queue → push it to the stack → execute.

🧠 Phases of Event Loop (Browser)

JavaScript Event Loop has these main phases:

Microtask Queue (Promises, process.nextTick in Node.js)

Runs before the next macrotask

Example: Promise.resolve().then(...)

Macrotask Queue / Task Queue (setTimeout, setInterval, I/O callbacks)

Runs after all microtasks are done

Rendering / Painting

Browser repaints UI if needed

Check next task

Event loop goes back to see if Call Stack is empty → repeat

💡 Key Points

Microtasks > Macrotasks — microtasks always run before the next macrotask

Call Stack must be empty before the event loop picks a task

This is why Promises often run before setTimeout, even with 0ms delay



# in event loop if the timer check and close phase is done , but still the loop will wait for the poll phase.
- there are four phasese: timer , poll , check ,close