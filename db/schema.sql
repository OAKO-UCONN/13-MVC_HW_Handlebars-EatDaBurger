CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burger_db;

-- Create the burgers table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

/*
### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
*/