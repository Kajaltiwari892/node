when we write code suppose
var a = 10
   |
Parsing [AST(Abstract Syntax Tree)]
   |                 optimization
Ignition interpreter ----> Turbofan compiler 
   |           deoptimisation     |
ByteCode          <----------   optimize machine code
   |                              |
Executes         <<---------------|

--------------------------------------------------------------------------------------------------------------------

🧩 TurboFan kya hota hai?

TurboFan ek JIT (Just-In-Time) optimizing compiler hai
jo Google ke V8 JavaScript engine ke andar hota hai.

👉 V8 wohi engine hai jo Chrome browser aur Node.js ko chalata hai.

Simple words mein:

TurboFan ka kaam hai JavaScript ko fast banana —
wo tumhara JS code ko machine code (CPU language) mein convert karta hai runtime pe. ⚡

⚙️ Kaise kaam karta hai (step by step):
1. Parsing

Sabse pehle, jab JS code run hota hai,
V8 usko parse karta hai — yaani code ko padh kar ek AST (Abstract Syntax Tree) banata hai,
taaki engine samajh sake code kya kar raha hai.

2. Interpreter (Ignition)

Phir V8 ka ek part — Ignition — code ko line by line execute karta hai.
Ignition code ko bytecode mein badalta hai (yeh thoda fast format hota hai).

Aur saath hi data collect karta hai, jaise:

Function kitni baar run hua

Variables ka type kya hai (number, string, etc.)

3. Optimization (TurboFan)

Ab aata hai TurboFan 🔥

Wo Ignition se milte data ko dekhta hai aur sochta hai —
"Yeh function baar baar run ho raha hai, chalo isko optimize kar dete hain!"

Phir TurboFan us code ko machine code mein badal deta hai —
jo direct CPU pe run hota hai, bina interpreter ke.
👉 Isse code bohot fast chalne lagta hai 🚀

4. De-optimization

Agar baad mein function alag tareeke se behave kare
(jaise pehle numbers mil rahe the, ab string mil gaya),
to TurboFan apna optimized version hata deta hai aur slow version pe wapas aa jata hai,
taaki code galat result na de.

🧠 Short Summary:
Part	Kaam
Ignition	Code ko bytecode mein badal kar run karta hai
TurboFan	Repeated code ko optimize karke fast machine code banata hai
Deoptimizer	Agar kuch alag mila to optimization cancel kar deta hai