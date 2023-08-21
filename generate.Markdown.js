function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## License
  This application is covered under the ${data.license} license.
  
  ## Questions
  GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  For additional questions, contact me at ${data.email}.
  `;
  }
  
  module.exports = generateMarkdown;