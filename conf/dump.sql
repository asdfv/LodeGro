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

INSERT INTO users (id, username, password, enabled) VALUES (1, 'adm', 'a', '1');
INSERT INTO users (id, username, password, enabled) VALUES (2, 'red', 'a', '1');
INSERT INTO users (id, username, password, enabled) VALUES (3, 'auth', 'a', '1');

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
    text text NOT NULL,
    is_approved boolean DEFAULT false
    );

INSERT INTO news (title, text) VALUES ('Скидки в филиалах «ЛОДЭ» в Гродно. (not approved)', 'С 14 по 31 марта в филиалах в Гродно скидка 80% на постановку диагностических кожных скарификационных тестов.');
INSERT INTO news (title, text) VALUES ('Итоги прямой линии с гинекологом-эндокринологом, репродуктологом! (not approved)', 'Подведены итоги прямой линии по лечению бесплодия и ЭКО!');
INSERT INTO news (title, text) VALUES ('Временные затруднения при обращении к online-администратору с мобильных устройств. (not approved)', 'Альтернативные способы обращения в call-центр.');
INSERT INTO news (title, text) VALUES ('С 8 марта, милые женщины! (not approved)', 'Центр «ЛОДЭ» поздравляет прекрасную половину человечества с женским днем!');
INSERT INTO news (title, text, is_approved) VALUES ('Готовим ножки к лету! (approved)', 'Ранняя весна, как отмечают хирурги медицинского центра «ЛОДЭ», – это лучшее время для выполнения склеротерапии и лазерной коагуляции вен.', TRUE);
