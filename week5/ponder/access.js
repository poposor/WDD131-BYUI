let allRatings = document.querySelectorAll('article.movie p span');
allRatings.forEach(element => {
    element.setAttribute('aria-label', `${element.innerText.length} out of 5 stars`);
});