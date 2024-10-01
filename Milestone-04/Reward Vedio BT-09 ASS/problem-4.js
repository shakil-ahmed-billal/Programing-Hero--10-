function sendNotification(email) {
    // Check if the email contains '@'
    const atIndex = email.indexOf('@');
    if (atIndex === -1) {
      return "Invalid Email";
    }
  
    // Extract username and domain
    const username = email.substring(0, atIndex);
    const domain = email.substring(atIndex + 1);
  
    // Construct and return the notification message
    return `${username} sent you an email from ${domain}`;
  }
  const email = sendNotification('shakilahmed@yahoo.com')
  console.log(email);