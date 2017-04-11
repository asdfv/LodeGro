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
    username varchar(64) NOT NULL UNIQUE,
    password varchar(64) NOT NULL,
    enabled boolean NOT NULL
);

INSERT INTO users (username, password, enabled) VALUES ('adm', 'a', '1');
INSERT INTO users (username, password, enabled) VALUES ('red', 'a', '1');
INSERT INTO users (username, password, enabled) VALUES ('auth', 'a', '1');

-- user_authority

CREATE TABLE users_authority (
    user_id integer NOT NULL,
    authority_id integer NOT NULL
);

ALTER TABLE users_authority
    ADD CONSTRAINT fk_users_authority_authority FOREIGN KEY (authority_id) REFERENCES authority(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE users_authority
    ADD CONSTRAINT fk_users_authority_users FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;

INSERT INTO users_authority (user_id, authority_id) VALUES (1, 1);
INSERT INTO users_authority (user_id, authority_id) VALUES (1, 2);
INSERT INTO users_authority (user_id, authority_id) VALUES (2, 2);
INSERT INTO users_authority (user_id, authority_id) VALUES (3, 3);

-- news

CREATE TABLE news (
    id serial PRIMARY KEY,
    title varchar(256) NOT NULL,
    description text NOT NULL,
    text text NOT NULL,
    is_approved boolean DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_DATE,
    created_by VARCHAR(64),
    start_date date DEFAULT CURRENT_DATE,
    last_edit TIMESTAMP
    );

-- INSERT INTO news (created_by, title, description, text) VALUES ('author' ,'Скидки в филиалах «ЛОДЭ» в Гродно. ', 'Описание новости на несколько строчек', 'С 14 по 31 марта в филиалах в Гродно скидка 80% на постановку диагностических кожных скарификационных тестов.');
-- INSERT INTO news (created_by, title, description, text) VALUES ('author' ,'Итоги прямой линии с гинекологом-эндокринологом, репродуктологом! ', 'Описание новости на несколько строчек', 'Подведены итоги прямой линии по лечению бесплодия и ЭКО!');
-- INSERT INTO news (created_by, title, description, text) VALUES ('author' ,'Временные затруднения при обращении к online-администратору с мобильных устройств.', 'Описание новости на несколько строчек', 'Альтернативные способы обращения в call-центр.');
-- INSERT INTO news (created_by, title, description, text) VALUES ('author' ,'С 8 марта, милые женщины! ', 'Описание новости на несколько строчек', 'Центр «ЛОДЭ» поздравляет прекрасную половину человечества с женским днем!');
-- INSERT INTO news (created_by, title, description, text, is_approved) VALUES ('author' ,'Готовим ножки к лету! ', 'Описание новости на несколько строчек', 'Ранняя весна, как отмечают хирурги медицинского центра «ЛОДЭ», – это лучшее время для выполнения склеротерапии и лазерной коагуляции вен.', TRUE);
