# Js is  a synchronus single threaded language.

# Single threaded :
 - It can run only one piece of code at a time.
 - So, if one function takes a long time, it can block the others from running until it’s finished.

# javascript is synchronus but node js can perform asynchronus

# memory heap : whatever the number function , etc want to store it stores  in the memory heap

# garbage collector :  anything , variables which are not in the use , is put inside hte garbage collecotr

# js dont knwo how to connect with other things like db , file , timer , it needs superpower to need access with this , node.js gives this superpower to get access with this , this superhero is "LIBUV" .. V8 engine cannot get access access to the OS (file , db , etc) .... LIBUV do all these things

# libuv  get access to these things (db , files , timer , api cll) , then get back to the v8 engine.

# v8 offloads async task to the LIBUV .

# NOW WE WILL SEE ABOUT LIBUV STORY : --
  - Node.js = V8 + LibUv
  - LibUv definition: it is a multi-platform C library that provides support for async I/O based on event loops.

 -  Threadpool , event loop are in the libuv