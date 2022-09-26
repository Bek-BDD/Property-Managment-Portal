insert into image (id, url) values ('4', 'http://dummyimage.com/142x100.png/cc0000/ffffff');
insert into image (id, url) values ('5', 'http://dummyimage.com/249x100.png/5fa2dd/ffffff');
insert into image (id, url) values ('6', 'http://dummyimage.com/123x100.png/ff4444/ffffff');
insert into image (id, url) values ('7', 'http://dummyimage.com/112x100.png/dddddd/000000');
insert into image (id, url) values ('8', 'http://dummyimage.com/217x100.png/dddddd/000000');
insert into image (id, url) values ('9', 'http://dummyimage.com/115x100.png/dddddd/000000');
insert into image (id, url) values ('10', 'http://dummyimage.com/237x100.png/cc0000/ffffff');


insert into role (id,role) values (1,'owner');
insert into role(id,role) values (2,'customer');
insert into role (id,role) values (3,'admin');


insert into users(id,deleted,email,firstname,imageurl,lastname,password,resetpasswordtoken,active) values
            (10,false,'hiwot.alemayehu@miu.edu','a','a','a','$2a$10$Sq3je4VID3xAQvL7z9.aw.oxsi0qpFiHJMhOM1CZMjZmhjy8BIug2','',true);