// generate markdown

function generateMarkdown(data) {
  return `
# Project Title
${data.Title}

# Description
${data.Description}

# Table of Contents 
* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-Installation)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Contact Information](#-Contact-Information)
  
# Installation
${data.Installation}

# Usage
${data.Usage}

# License 
${data.License} 

# Contributing 
${data.Contributing}

# Tests
${data.Tests}

# Contact Information 
* Contact the address below with any questions.
* GitHub Username: ${data.UserName}
* Contact Email: ${data.Email}

`;
}

// export the generateMarkdown function 

module.exports = generateMarkdown;