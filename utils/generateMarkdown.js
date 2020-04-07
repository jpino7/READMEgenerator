function generateMarkdown(response, user) {
  return `
# ${response.project}

## Description
${response.description}

## Badges
![badge](https://img.shields.io/github/languages/top/jpino7/READMEgenerator)

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

## Credits
${response.credits}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Site
${response.site}

## Questions
For any questions please contact the Project Owner: \n
![Profile Image](${user.avatar_url})\n
- **Name:** ${user.name}
- **Github Username:** ${response.username}
- **Email:** ${response.email}
`;
}

module.exports = generateMarkdown;
