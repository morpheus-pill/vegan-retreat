/**
 * Google Apps Script for Vegan Retreat Registration Form
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Create a new Google Sheet for storing registrations
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Click "Deploy" > "New deployment"
 * 5. Select type: "Web app"
 * 6. Configure:
 *    - Description: "Vegan Retreat Registration Handler"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 7. Click "Deploy"
 * 8. Copy the Web App URL
 * 9. Paste the URL in your Next.js form (app/register/page.tsx)
 *    Replace: YOUR_GOOGLE_APPS_SCRIPT_URL_HERE
 * 10. Authorize the script when prompted
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Check if header row exists, if not create it
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Mobile',
        'Vegan Status',
        'Number of People',
        'Has Pets',
        'Pet Details',
        'Expectations',
        'Activities to Lead',
        'Community Connections',
        'Referral',
        'Dietary/Medical Info',
        'Accessibility Requirements',
        'Agree: Vegan Throughout',
        'Agree: Self-Organized',
        'Agree: Guidelines',
        'Agree: Refund Policy',
        'Agree: Decisions Final',
        'Stay Connected'
      ];
      sheet.appendRow(headers);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#000000');
      headerRange.setFontColor('#ffffff');
    }
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.mobile || '',
      data.veganStatus || '',
      data.numberOfPeople || '',
      data.hasPets || '',
      data.petDetails || '',
      data.expectations || '',
      data.activities || '',
      data.communityConnections || '',
      data.referral || '',
      data.dietaryInfo || '',
      data.accessibilityRequirements || '',
      data.agreeVegan ? 'Yes' : 'No',
      data.agreeSelfOrganized ? 'Yes' : 'No',
      data.agreeGuidelines ? 'Yes' : 'No',
      data.agreeRefundPolicy ? 'Yes' : 'No',
      data.agreeDecisions ? 'Yes' : 'No',
      data.stayConnected ? 'Yes' : 'No'
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, rowData.length);
    
    // Send confirmation email (optional - uncomment if you want to use this)
    /*
    if (data.email) {
      MailApp.sendEmail({
        to: data.email,
        subject: 'Vegan Retreat 2026 - Registration Confirmed',
        body: `Dear ${data.name},

Thank you for registering for the Vegan Retreat 2026!

We've received your registration and will be in touch soon with more details about:
- Venue location
- Payment information
- What to bring
- Schedule

In the meantime, if you have any questions, feel free to reach out to us on Instagram @indic.pilgrim

Looking forward to connecting with you!

Warm regards,
Indic Pilgrim & The Curious Monk`
      });
    }
    */
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error and return error response
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testScript() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: 'Test User',
        email: 'test@example.com',
        mobile: '+91 9876543210',
        veganStatus: 'vegan',
        numberOfPeople: '2',
        hasPets: 'no',
        petDetails: '',
        expectations: 'Looking forward to connecting with fellow vegans',
        activities: 'Would love to lead a meditation session',
        communityConnections: 'Bangalore Vegans WhatsApp group',
        referral: '',
        dietaryInfo: 'No allergies',
        accessibilityRequirements: '',
        agreeVegan: true,
        agreeSelfOrganized: true,
        agreeGuidelines: true,
        agreeRefundPolicy: true,
        agreeDecisions: true,
        stayConnected: true
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
