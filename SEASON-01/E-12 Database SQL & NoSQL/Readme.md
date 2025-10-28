# A database is an organized collection of data that is stored and managed electronically so that it can be easily accessed, managed, and updated.

# DBMS (Dabatse managemnt system) - A DBMS is a software system that is used to create, store, organize, and manage a database efficiently.

- ⚙️ What DBMS Does:

Stores data in a structured way (like tables).

Allows access to data (read/write/update/delete).

Maintains data security and prevents unauthorized access.

Manages concurrency (many users can access the database safely at once).

Ensures backup and recovery (data is safe even if a crash happens).

# Diff bt Db and DBMS 
- ✅ Database → a place (or container) where data is stored.
- ✅ DBMS (Database Management System) → a software that helps you store, organize, access, and manage that data.

# Example : 
Example                                                                                   |	Explanation
Database: student_records (a file or collection of tables where students’ info is stored)	|  Contains data like student name, roll number, marks
DBMS: MySQL, PostgreSQL, MongoDB, Oracle, SQLite                                          |	These are softwares that let you create, read, update, and delete data from the student_records database

# Types of Database

- Relational DB - My SQL , PostgreSQL
- NO SQL DB - MongoDB
- In memory DB- redis
- Distibuted SQL db - Cockroach DB
- Time series DB - Influx DB
- O O Db - db40
- Graph db - Neo4j
- Hierarchial Db - IBM IMS
- Netwrok Db - IDMs
- CLoud db - Amazon RDS

# RDBMS ( MySQL, PostgreSQL)
- A Relational Database = a database that stores data in tables that are related to each other.

# NoSQL (MongoDB)
- many types of nosql are there like :
   - Document db (mongodb)
   - Key value db
   - Graph db
   - Wide column db
   - multi model  db

   # RDBMS(mySQL)                             |                      NO SQL (mongo)
   - Table , Rows , Columns                   |                   - collection.document,fileds
   - Structured Data                          |                   - unstrcutred data
   - Fixed Schema                             |                   -  flexible schema
   - SQL                                      |                   - mongo , neo4j
   - TOugh horizontal scaling                 |                   - Easy to scale horizontally vertically
   - Relationships- foreign keys + joins      |                   - nested relationships
   - read-heavy apps , transction workloads   |                   - real time , big data , distributed computing
   - ex banking apps                          |                   - real time data analytics , social media

   # Schema means the structure or blueprint of a database — it defines how data is organized, how tables are connected, and what each table contains. In short: Schema = design or layout of the database. jaise ki user id hoga , kya kya fields honge.

   