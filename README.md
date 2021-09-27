# jobIBGE
job that returns cities and states in Brazil


### 
Job to search for cities and states in Brazil directly from the IBGE API


###
1 - create an IBGE table with the fields { ID: int, STATE: string, CITY: string }, the bank option was sqlite.

to raise the service:

-- yarn dev


--- Api will save all cities and their respective states in Brazil, a .json file will also be created
in the path src/data/**.json with a file with the city and state information.
Use the most viable return.