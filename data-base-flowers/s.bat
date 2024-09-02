@ECHO OFF
chcp 1251
SET PATH=C:\Windows\System32;C:\Program Files\PostgreSQL\16\bin
psql.exe -q -c "\pset null ’<null>’" -c "\pset pager off" -f %1 -d postgresql://postgres:181318@localhost:5432/postgres