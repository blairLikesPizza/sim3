CREATE TABLE IF NOT EXISTS users (
    id serial primary key,
    FirstName varchar(25),
    LastName varchar(25),
    Gender varchar(30),
    HairColor varchar(25),
    EyeColor varchar(25),
    Hobby varchar(25),
    BirthdayDay varchar(2),
    BirthdayMonth varchar(9),
    BirthdayYear varchar(4),
    auth_id text
)