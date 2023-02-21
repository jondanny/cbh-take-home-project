# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

The ticket can be broken down into the following sub-tickets:

1. Modify the Agent table schema to include a field for custom Facility ids

- Acceptance Criteria:
  - A new column is added to the Agent table with a suitable datatype to store custom Facility ids.
  - The migration script to apply the change is successfully tested on a development environment.
  - The database schema change is successfully deployed to production.
- Time/Effort Estimate: 2-3 hours

2. Update the UI for Facilities to add/edit custom ids for Agents they work with

- Acceptance Criteria:
  - A new page is added to the Facilities UI to allow Facilities to add/edit custom ids for Agents.
  - The functionality is successfully tested on a development environment.
  - The page is successfully deployed to production.
- Time/Effort Estimate: 4-6 hours

3. Modify the getShiftsByFacility function to include custom Agent ids in the Shift metadata

- Acceptance Criteria:
  - A new field is added to the Shifts metadata to store the custom Facility id for the Agent assigned to the Shift.
  - The function is successfully tested on a development environment.
  - The modified function is successfully deployed to production.
- Time/Effort Estimate: 2-3 hours

4. Modify the generateReport function to use custom Agent ids instead of internal database ids

- Acceptance Criteria:
  - The function is modified to retrieve custom Agent ids from the Shifts metadata instead of internal database ids.
  - The function is successfully tested on a development environment.
  - The modified function is successfully deployed to production.
- Time/Effort Estimate: 2-3 hours

5. Update the PDF report format to include custom Agent ids

- Acceptance Criteria:
  - The PDF report format is modified to include custom Agent ids instead of internal database ids.
  - The report format is successfully tested on a development environment.
  - The modified report format is successfully deployed to production.
- Time/Effort Estimate: 4-6 hours

Implementation details:

- For sub-tasks 1-2, the database schema changes can be applied using a migration script. The UI can be implemented using a suitable web framework and database queries can be used to update the custom id field in the Agent table.
- For sub-tasks 3-4, the getShiftsByFacility and generateReport functions can be modified to use the custom id field in the Agent table instead of the internal database id field. This can be done using SQL queries or ORM methods.
- For sub-task 5, the PDF report generation code can be updated to retrieve custom Agent ids from the Shifts metadata and use them in the report format instead of internal database ids. This can be done using a suitable PDF generation library.
