function generateMarkdown(response, user) {
  return `
# ${response.project}

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Credit
${response.credit}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Site
${response.site}

## Questions
For any questions please contact the Project Owner: \n
![Profile Image](${user.avatar_url})\n
Github Username: ${user.username}\n
Email: ${response.email}\n
`;
}

module.exports = generateMarkdown;
