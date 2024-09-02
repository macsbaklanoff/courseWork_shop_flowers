@ECHO OFF
chcp 1251
SET PATH=C:\Windows\System32;C:\Program Files\PostgreSQL\16\bin
psql.exe -q -c "\pset pager off" -d postgresql://postgres:181318@localhost:5432/"Flowers" -f %1