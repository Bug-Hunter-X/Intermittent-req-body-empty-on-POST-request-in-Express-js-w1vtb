# Intermittent req.body empty on POST request in Express.js

This repository demonstrates a bug where an Express.js application intermittently fails to receive POST request data in `req.body`. The issue is not consistent; sometimes it works correctly, and other times `req.body` is empty.  The code includes both the buggy implementation and a solution.

## Bug Description
The Express.js application uses `express.json()` middleware to parse JSON request bodies. However, under certain conditions, `req.body` remains empty despite a valid JSON payload being sent in the POST request.  This inconsistency makes debugging difficult.

## Solution
The solution ensures that the `express.json()` middleware is properly configured and positioned to reliably parse JSON requests.