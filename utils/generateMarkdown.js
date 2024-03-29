// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg"> \n`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `## [License](#license) \n`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# License
  This project is licensed under ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of Contents
  ## [Description](#description)
  ## [Installation](#installation)
  ## [Usage](#usage)
  ${renderLicenseLink(data.license)}
  ## [Contributing](#contributing)
  ## [Tests](#tests)

  # Description
  ${data.description}
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Contributing
  ${data.contribution}
  # Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  # Questions
  Click here to view my [Github](https://github.com/${data.title}) 
  
  To reach me with further questions please email me at ${data.email}
`;
}

module.exports = generateMarkdown;
