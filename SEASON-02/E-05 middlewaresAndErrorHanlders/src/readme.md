# Middleware
- a function that sits between the incoming request (from client) and the final response (sent by server).

# how express handles behind the scene?

- 📥 Client sends request → Express receives it
 ↓
1️⃣ Express stores all middlewares & routes in a list (array)
 ↓
2️⃣ Express starts looping through them in order
 ↓
3️⃣ For each middleware:
     - It runs the function (req, res, next)
     - If you call next(), Express moves to the next one
     - If you send a response (res.send), it stops
 ↓
4️⃣ Finally, when no more middleware remains → Response sent to client
