CREATE TABLE IF NOT EXISTS config (
    name VARCHAR(50),
    value VARCHAR(255)
)
CREATE TABLE user(
    email: VARCHAR(50),
    pasword: text,
    salt: VARCHAR(200),
    cycles: int
)
