# Telephone Number Validator

This is a simple JavaScript-based telephone number validation project that checks if a given phone number is a valid US number. It is part of FreeCodeCamp's certification requirements.

## Description

This project validates a string to determine if it represents a valid US phone number. The validation is based on specific formats that are commonly accepted in the United States, including formats with or without country code, with spaces, hyphens, or parentheses.

## How It Works

1. **Input Validation:** The system checks if the user has provided a phone number. If not, it prompts the user to enter one.
2. **Regular Expression Matching:** The phone number is validated against a regular expression that matches various valid US phone number formats.
3. **Output Result:**
   - **Valid US Number:** If the input matches the regular expression, it is recognized as a valid US phone number.
   - **Invalid US Number:** If the input does not match the regular expression, it is recognized as an invalid US phone number.

## Usage

- Enter a phone number in the input field.
- Click the "Check" button to validate the phone number.
- The result will display whether the phone number is valid or not.
- Use the "Clear" button to reset the result display.
