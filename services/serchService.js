const articles = require('../models/articles');

const searchArticles = (keyword, sortBy) => {
    // Case-insensitive keyword search in title and content
    const keywordLower = keyword.toLowerCase();
    const matchedArticles = articles.filter(article =>
        article.title.toLowerCase().includes(keywordLower) ||
        article.content.toLowerCase().includes(keywordLower)
    );

    // Relevance: Sort by keyword frequency
    if (sortBy === "relevance") {
        matchedArticles.sort((a, b) => {
            const freqA = (a.title.match(new RegExp(keyword, "gi")) || []).length +
                          (a.content.match(new RegExp(keyword, "gi")) || []).length;
            const freqB = (b.title.match(new RegExp(keyword, "gi")) || []).length +
                          (b.content.match(new RegExp(keyword, "gi")) || []).length;
            return freqB - freqA;
        });
    }

    // Sort by date
    if (sortBy === "date") {
        matchedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return matchedArticles;
};

module.exports = { searchArticles };
