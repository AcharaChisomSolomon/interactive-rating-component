const ratingsDisplay = document.getElementById('ratings');
const submitBtn = document.getElementById('submit-btn');
const thanksDisplay = document.getElementById('thanks-display');
const ratingValueDisplay = document.getElementById('rating-value-display');

submitBtn.addEventListener('click', () => { 
    const checkedRating = document.querySelector('input[name="rating"]:checked');
    if (checkedRating) {
        const ratingValue = checkedRating.value;
        ratingValueDisplay.textContent = ratingValue;
        thanksDisplay.style.display = 'block';
        ratingsDisplay.style.display = 'none';
    }
});