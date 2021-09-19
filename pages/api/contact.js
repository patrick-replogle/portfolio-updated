import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'patrickr1138@gmail.com',
      from: 'nightsurgeonpdx@gmail.com',
      subject: `[Lead from website] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
      </head>
      
      <body>
        <div style="display: flex; justify-content: center; align-items: center; border-radius: 5px; overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div style="margin-left: 20px; margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.email}</h3>
              <h4>Subject: ${req.body.subject}</h4>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              </div>
      </body>
      </html>`
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ status: 'ok' });
}

export default sendEmail;
