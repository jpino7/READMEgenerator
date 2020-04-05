function generateMarkdown(response, user) {
  return `
# ${response.project}\n

## Description \n
${response.description}\n

## Table of Contents \n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [Contributors](#contributors)\n
- [License](#license)\n
- [Tests](#tests)\n
- [Questions](#questions)\n

## Installation \n
${response.installation}\n

## Usage \n
${response.usage}\n

## License \n
${response.license}\n

## Credit \n
${response.credit}\n

## Contributing \n
${response.contributing}\n

## Tests \n
${response.tests}\n

## Site \n
${response.site}\n

## Questions \n
For any questions please contact the Project Owner:


`;
}

module.exports = generateMarkdown;
