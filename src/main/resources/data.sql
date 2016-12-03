insert into user (name, login, password, email) values ('User', 'user', 'user', 'user@user.com');
insert into user (name, login, password, email) values ('Admin', 'admin', 'admin', 'admin@admin.com');
insert into user (name, login, password, email) values ('Audit', 'audit', 'audit', 'audit@audit.com');


insert into user (name, login, password, email) values ('Steve Jobs', 'steve', 'steve', 'steve.jobs@apple.com');
insert into user (name, login, password, email) values ('Bill Gates', 'bill', 'bill', 'bill.gates@microsoft.com');
insert into user (name, login, password, email) values ('Mark Zuckerberg', 'mark', 'zuckerberg', 'mark.zuckerberg@facebook.com');
insert into user (name, login, password, email) values ('Tim Cook', 'tim', 'cook', 'tim.cook@apple.com');
insert into user (name, login, password, email) values ('Larry Page', 'larry', 'page', 'larry.page@gmail.com');
insert into user (name, login, password, email) values ('Sergey Brin', 'sergey', 'brin', 'sergey.brin@gmail.com');
insert into user (name, login, password, email) values ('Larry Ellison', 'larry2', 'ellison', 'larry.ellison@oracle.com');
insert into user (name, login, password, email) values ('Jeff Bezos', 'jeff', 'bezos', 'jeff.bezos@amazon.com');
insert into user (name, login, password, email) values ('Paul Allen', 'paul', 'allen', 'paul.allen@microsoft.com');
insert into user (name, login, password, email) values ('Steve Balmer', 'steve2', 'ballmer', 'steve.ballmer@microsoft.com');
insert into user (name, login, password, email) values ('Jack Dorsey', 'jack', 'dorsey', 'jack.dorsey@twitter.com');
insert into user (name, login, password, email) values ('Matt Mullenweg', 'matt', 'mullenweg', 'matt.mullenweg@wordpress.com');


insert into authority (name) values ('ADMIN');
insert into authority (name) values ('TECHNICAL_USER');
insert into authority (name) values ('USER');
insert into authority (name) values ('READER');
insert into authority (name) values ('WRITER');
insert into authority (name) values ('SECURITY');
insert into authority (name) values ('SECURITY_WRITER');
insert into user_authority (id_user, id_authority) values (1, 3);
insert into user_authority (id_user, id_authority) values (2, 1);
insert into user_authority (id_user, id_authority) values (2, 3);
insert into user_authority (id_user, id_authority) values (2, 4);
insert into user_authority (id_user, id_authority) values (2, 5);
insert into user_authority (id_user, id_authority) values (2, 6);
insert into user_authority (id_user, id_authority) values (2, 7);
insert into user_authority (id_user, id_authority) values (3, 1);
insert into user_authority (id_user, id_authority) values (3, 3);
insert into user_authority (id_user, id_authority) values (3, 4);
insert into user_authority (id_user, id_authority) values (3, 6);
insert into user_authority (id_user, id_authority) values (4, 1);
insert into user_authority (id_user, id_authority) values (4, 2);
insert into user_authority (id_user, id_authority) values (4, 3);
insert into user_authority (id_user, id_authority) values (5, 3);
insert into user_authority (id_user, id_authority) values (6, 3);	