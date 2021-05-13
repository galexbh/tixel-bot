/* @see https://www.npmjs.com/package/rss-parser
*/
const Parser = require("rss-parser");
const parser = new Parser();

/**
 * @param {string} url
 *
 */
const getFeed = async (url) => {
  try {
    const {items} = await parser.parseURL(url);
    const [{title, link}] = items;
    const lastArticule = `${title}\n${link}`;
    return lastArticule;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {getFeed}
