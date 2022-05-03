# W05D02 - Database Design

### To Do
- [x] Primary Keys/Foreign Keys
- [x] Naming Conventions
- [x] Data Types
- [x] Relationship Types
- [x] Design Concepts
- [x] Entity Relationship Diagrams
- [x] Convert 2 Spreadsheets
- [x] Student Suggestion ERD(s)

### Primary Keys/Foreign Keys
* uniquely identify a record (only has to be unique within the table)
* accepts any data type
* only use integers (autoincrementing)
* the FK has to be the same data type

Don't specify the id, the sequence gets used
_seq 1
ALTER SEQUENCE STARTS WITH 10000

### Naming Conventions
* table and field names are snake_case
* table names are pluralized 
* primary keys are simply called `id`
* most foreign keys should be `primary_table_singular_id` `user_id`

### Data Types
* huge issue (used to be)
* VARCHAR
* TEXT
* BOOLEAN
* INTEGERS
* FLOATS
* DECIMAL/CURRENCY

### Relationship Types
* one-to-one: one record in table A is related to only one record in table B
* one-to-many: one record in table A is related to one or more records in table B
* many-to-many: one or more records in table A are related to one or more records in table B through a junction table (2 one-to-many)

### General Design Concepts
* NOT NULL think about the initial state of the record
* intelligent default values

DEFAULT

timestamp DEFAULT NOW() NOT NULL

* don't use calculated fields (a field whose value is derived from one or more other fields)
* try not to delete anything (soft delete ACTIVE = false)

### ERD
* Entity Relationship Diagrams


NoSQL - store what you query for
SQL - agnostic as to how the data will be used



