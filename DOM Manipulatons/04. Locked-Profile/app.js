function lockedProfile() {
    const buttons = document.getElementsByTagName('button');

    for (const button of Array.from(buttons)) {
        button.addEventListener('click', showHide)
    }

    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;

        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}