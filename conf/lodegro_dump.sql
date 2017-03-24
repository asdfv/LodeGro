-- Database "lodegro"

DROP SCHEMA lodegro CASCADE;
CREATE SCHEMA lodegro;

GRANT ALL ON SCHEMA lodegro TO postgres;

SET SCHEMA 'lodegro';

CREATE TYPE authorities AS ENUM (
    'ROLE_ADMIN',
    'ROLE_REDACTOR',
    'ROLE_AUTHOR'
);

-- Authority table

CREATE TABLE authority (
    id serial PRIMARY KEY,
    name authorities
);

INSERT INTO authority (id, name) VALUES (1, 'ROLE_ADMIN');
INSERT INTO authority (id, name) VALUES (2, 'ROLE_REDACTOR');
INSERT INTO authority (id, name) VALUES (3, 'ROLE_AUTHOR');

-- User table

CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(64) NOT NULL,
    password varchar(64) NOT NULL,
	enabled boolean NOT NULL
);

INSERT INTO users (id, username, password, enabled) VALUES (1, 'adm', 'a', '1');
INSERT INTO users (id, username, password, enabled) VALUES (2, 'red', 'a', '1');

-- user_authority

CREATE TABLE user_authority (
    user_id integer NOT NULL,
    authority_id integer NOT NULL
);

ALTER TABLE user_authority
    ADD CONSTRAINT fk_user_authority_authority FOREIGN KEY (authority_id) REFERENCES authority(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE user_authority
    ADD CONSTRAINT fk_user_authority_user FOREIGN KEY (user_id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE;

INSERT INTO user_authority (user_id, authority_id) VALUES (1, 1);
INSERT INTO user_authority (user_id, authority_id) VALUES (1, 2);
INSERT INTO user_authority (user_id, authority_id) VALUES (2, 2);

-- news

CREATE TABLE news (
    id serial PRIMARY KEY,
    title varchar(256) NOT NULL,
    text text NOT NULL
);

INSERT INTO news (title, text) VALUES ('First news', 'This is a 1 news');
INSERT INTO news (title, text) VALUES ('2 news', 'This is a 2 news');
INSERT INTO news (title, text) VALUES ('3 news', 'This is a 3 news');
INSERT INTO news (title, text) VALUES ('4 news', 'This is a 4 news');
INSERT INTO news (title, text) VALUES ('5 news', 'This is a 5 news');
