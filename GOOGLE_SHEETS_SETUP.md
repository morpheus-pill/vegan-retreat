# Google Sheets Integration Setup Guide

## Overview
This guide will help you connect the registration form to a Google Sheet so all submissions are automatically saved.

## Step-by-Step Instructions

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it: "Vegan Retreat 2026 - Registrations"
4. The sheet will automatically create columns when the first submission arrives

### 2. Set Up Google Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any existing code in the editor
3. Open the file `google-apps-script.js` from this project
4. Copy ALL the code from that file
5. Paste it into the Apps Script editor
6. Click the **Save** icon or press `Ctrl+S` / `Cmd+S`
7. Name your project: "Vegan Retreat Form Handler"

### 3. Deploy the Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Vegan Retreat Registration Handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. You'll be asked to authorize the app:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** (if you see a warning)
   - Click **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. Copy the **Web App URL** that appears (it looks like: `https://script.google.com/macros/s/...`)

### 4. Update Your Next.js Project

1. Open the file: `app/register/page.tsx`
2. Find this line (around line 47):
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual Web App URL
4. Save the file

### 5. Test the Integration

1. Rebuild your Next.js project:
   ```bash
   npm run build
   ```
2. Deploy to Netlify (or test locally with `npm run dev`)
3. Fill out the registration form with test data
4. Check your Google Sheet - you should see the submission appear!

## What Gets Saved

Each registration will create a new row with these columns:

- Timestamp
- Name
- Email
- Mobile
- Vegan Status
- Number of People
- Has Pets
- Pet Details
- Expectations
- Activities to Lead
- Agree to Guidelines

## Optional: Email Confirmations

The script includes commented-out code to send confirmation emails. To enable:

1. In the Apps Script editor, find the commented section (lines 76-98)
2. Remove the `/*` and `*/` to uncomment
3. Customize the email template if desired
4. Save and redeploy

## Troubleshooting

### Form submissions not appearing in sheet?

1. Check that you copied the correct Web App URL
2. Make sure you deployed the script (not just saved it)
3. Check if you set "Who has access" to "Anyone"
4. Look at Apps Script execution logs: **Executions** tab in Apps Script editor

### Permission errors?

1. Make sure you authorized the script during deployment
2. Try redeploying the script
3. Check that "Execute as" is set to "Me"

### Testing the script directly

1. In Apps Script editor, select the `testScript` function from dropdown
2. Click **Run**
3. Check your sheet for a test row
4. Check **Executions** tab for any errors

## Security Notes

- The Web App URL is public but doesn't expose your sheet
- Only the Apps Script can write to your sheet
- Consider setting up additional validation if needed
- You can always redeploy with a new URL if the old one is compromised

## Making Changes

If you need to modify what data is collected:

1. Update the form in `app/register/page.tsx`
2. Update the Apps Script to match the new fields
3. **Important**: Create a new deployment version:
   - Click **Deploy** > **Manage deployments**
   - Click the pencil icon to edit
   - Change "Version" to **New version**
   - Click **Deploy**
4. The sheet will automatically add new columns

## Support

If you run into issues:
- Check the Apps Script logs (View > Logs or Ctrl+Enter)
- Test with the `testScript` function
- Verify your Web App URL is correct
- Make sure the script is deployed, not just saved
