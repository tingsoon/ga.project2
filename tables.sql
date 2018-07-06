
-- create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username varchar(255),
  password varchar(255)
);


-- create hawkerCentres table
CREATE TABLE IF NOT EXISTS hawkerCentres (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  address varchar(255),
  cookedFoodStalls INTEGER,
  lat numeric,
  lng numeric,
  description TEXT,
  img varchar(255),
  region varchar(255)
);

-- create review table
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  username varchar(255),
  title TEXT,
  description TEXT,
  rating numeric
);
