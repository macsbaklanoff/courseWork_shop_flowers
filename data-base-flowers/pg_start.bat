@ECHO OFF
if [%1]==[] sc query postgresql-x64-16 &EXIT /B 0
if %1==1 net start postgresql-x64-16 &EXIT /B 0
if %1==0 net stop postgresql-x64-16 &EXIT /B 0