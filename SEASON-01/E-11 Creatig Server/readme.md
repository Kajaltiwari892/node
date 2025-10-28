🌐 Server kya hota hai (simple words me):

👉 Server ek computer hota hai jo doosre logon ko data ya service deta hai.

Jab tum internet par kuch search karti ho —
to tum request bhejti ho,
aur server tumhe response bhejta hai (jaise webpage, photo, ya data).

⚙️ 1. IP (Internet Protocol) – “Address batata hai”

Socho tum kisi ko letter bhejna chah rahi ho ✉️

Tumhe receiver ka address chahiye hota hai (ghar ka number, city, etc).

Internet me bhi har computer ka ek unique address hota hai — jise IP address kehte hain.

📌 Example:

142.250.183.78  → Google ka ek IP address
192.168.1.1     → Home router ka IP address


🟢 Simple words me:

IP ka kaam hai — “data kahan jaana hai” ye batana.


📦 2. TCP (Transmission Control Protocol) – “Data sahi se pahuchata hai”

Ab socho tumne ek letter bheja — par wo raste me gum bhi ho sakta hai 😅
Isliye koi system chahiye jo ensure kare ki:

Letter (data) poora pahucha,

Sahi order me aaya,

Aur agar kuch miss hua to dobara bhej diya jaye.

Yahi kaam karta hai TCP.

TCP data ko chhote packets me todta hai, bhejta hai, aur phir receiver side pe dobara jodta hai.

🟢 Simple words me:

TCP ka kaam hai — “data safe aur proper order me pahuchaye”.


🌐 1. Socket kya hota hai?

👉 Socket ek connection point hota hai —
jiske through client aur server apas me baat karte hain.

Example:

Socho tum phone call kar rahi ho 📞

Tumhara phone = client

Dusre ka phone = server

Dono ke beech line (connection) = socket

Jab tak socket open hai, dono side data send/receive kar sakte hain.

📦 2. Chunks kya hote hain?

Server ya network poora data ek saath nahi bhejta,
wo thoda-thoda tukdo me bhejta hai — un tukdo ko chunks kehte hain.


💾 3. Buffer kya hota hai?

Jab ye chunks arrive hote hain,
computer unhe temporarily store karta hai —
ye storage space buffer hota hai.

💾 3. Buffer kya hota hai?

Jab ye chunks arrive hote hain,
computer unhe temporarily store karta hai —
ye storage space buffer hota hai.

🌐 1. DNS ka full form kya hai?

DNS = Domain Name System

💭 2. Problem kya thi?

Internet par har computer ya website ka ek IP address hota hai —
jaise:

142.250.183.78 → Google ka IP address


Lekin ye numbers yaad rakhna mushkil hai 😅
isliye hum name system use karte hain:

www.google.com


Ab problem:
Browser ko ye “google.com” samajh nahi aata — usse to IP address chahiye.

⚙️ 3. DNS ka kaam kya hai?

👉 DNS ka kaam hai domain name ko IP address me badalna.

Jab tum likhti ho:

https://www.google.com


to Chrome karta hai:

“google.com” → DNS server ko bhejta hai

DNS server reply karta hai:

142.250.183.78


Ab Chrome us IP address par request bhejta hai (Google ke server ko)

🟢 Simple words me:

DNS server ek phonebook jaisa hota hai,
jahan “name → number” (domain → IP) ka mapping hoti hai.


Term	Meaning
Server (hardware)	Ek powerful computer jisme programs run hote hain
HTTP Server (software)	Ek program jo web requests handle karta hai


Domain Name = IP + PORT 
API = IP + PORT + PATH