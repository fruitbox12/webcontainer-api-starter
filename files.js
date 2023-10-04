/** @satisfies {import('@webcontainer/api').FileSystemTree} */

export const files = {
    'index.js': {
      file: {
        contents: `
import express from 'express';
import cors from 'cors'; // Import the cors middleware

const app = express();
const port = 3111;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to a WebContainers app! 🥳');
});

app.listen(port, () => {
    console.log(`App is live at http://localhost:${port}`);
});

});`,
      },
    },
    'package.json': {
      file: {
        contents: `
          {
            "name": "example-app",
            "type": "module",
            "dependencies": {
              "express": "latest",
                                "cors": "latest",

              "nodemon": "latest"
            },
            "scripts": {
              "start": "nodemon index.js"
            }
          }`,
      },
    },
  };
