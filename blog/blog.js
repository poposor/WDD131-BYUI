let allRatings = document.querySelectorAll('article.book p span');
allRatings.forEach(element => {
    element.setAttribute('aria-label', `${element.innerText.length} out of 5 stars`);
});