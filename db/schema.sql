DROP DATABASE IF EXISTS star_log_database;
CREATE DATABASE star_log_database; 

\c star_log_database; 
-- FUTURE LEARING REFERENCE FOR USER AUTH
-- PASSPORT JS USER:: NOTE: IN FRONTEND: THE VALUE OF INPUT FILED SHOULD BE EMAIL FOR USERNAME IF LABEL IS CALLED USERNAME FOR USER FIELD
-- CREATE TABLE users (
--  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--  email CHAR(128),
--  password CHAR(60)
-- );
DROP TABLE stars;
CREATE TABLE stars (
    id SERIAL PRIMARY KEY,
    iau_name TEXT NOT NULL,
    star_catalogue TEXT,
    constellation TEXT,
    type_star TEXT, 
    colorindex DECIMAL NOT NULL, 
    apparentmag DECIMAL NOT NULL,
    absolutemag DECIMAL NOT NULL,  
    distance DECIMAL NOT NULL  

);

-- command to initialize schema file
-- RUN THIS

-- db:init


-- NOTES: ChatGPT generated values for foreign key, and id, and user_id
-- Question asked: Upon creating a scema.sql and a seed.sql file, If I want to use a foreign key in another table called "stars" while using postgreSQL, what should the values be if the foreign key is taken from a table called "users" being that the table created called users has the following data values: CREATE TABLE users (
--  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--  email CHAR(128),
--  password CHAR(60)
-- );

-- ANSWER GIVEN: A foreign key in the "stars" table would reference the "id" column in the "users" table as the primary key. The "stars" table would look something like this:

-- CREATE TABLE stars (
--   id INT GENERATED always AS IDENTITY PRIMARY KEY,
--   star_description TEXT,
--   user_id INT,
--   FOREIGN KEY (user_id) REFERENCES users(id)
-- );

-- This creates a foreign key constraint in the "stars" table that requires the "user_id" column to have a value that exists in the "id" column of the "users" table. In other words, a star can only be associated with a user if the "user_id" in the "stars" table matches the "id" of a row in the "users" table.