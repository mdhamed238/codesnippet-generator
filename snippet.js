const generateCodeSnippetImage = async (text, language) => {
	// Set up HTML and CSS for code snippet image
	const html = `
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Code Snippet</title>
          <style>
            body {
              background-color: #1e1e1e;
              font-family: monospace;
              color: #d4d4d4;
            }
            .dots {
              position: absolute;
              top: 10px;
              left: 10px;
              font-size: 24px;
              color: #a0a0a0;
            }
            pre {
              white-space: pre-wrap;
              overflow: auto;
              margin: 0;
            }
            code {
              display: block;
              padding: 16px;
              border-radius: 4px;
              background-color: #282a36;
              box-shadow: inset 0 0 0 1px #44475a;
            }
          </style>
        </head>
        <body>
          <div class="dots">...</div>
          <pre><code>${text}</code></pre>
        </body>
      </html>
    `;

	// Set up Puppeteer to take a screenshot of the HTML
	const puppeteer = require('puppeteer');
	const width = 600;
	const height = 400;
	const deviceScaleFactor = 2;
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({ width, height, deviceScaleFactor });
	await page.setContent(html);
	const screenshot = await page.screenshot({ type: 'png' });
	await browser.close();

	// Convert screenshot to base64-encoded string
	const base64 = screenshot.toString('base64');

	return `data:image/png;base64,${base64}`;
};

module.exports = generateCodeSnippetImage;
