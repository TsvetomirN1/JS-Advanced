function solve() {
    const $addForm = document.querySelector('#add');
    const $nameInput = $addForm.querySelectorAll('div').item(1);
    const $ageInput =  $addForm.querySelectorAll('div').item(2);
    const $kindInput =  $addForm.querySelectorAll('div').item(3);
    const $ownerInput =  $addForm.querySelectorAll('div').item(4);

    const $adoptionList = document.querySelector('#adoption ul');
    const $adoptedList = document.querySelector('#adopted ul');

    // Add for adoption
    $addForm.addEventListener('submit', event => {
        event.preventDefault();

        if (hasEmptyInput($nameInput, $ageInput, $kindInput, $ownerInput)) {
            return;
        }

        addToAdoptionList({
            id: Date.now(),
            name: $nameInput.value,
            age: $ageInput.value,
            kind: $kindInput.value,
            owner: $ownerInput.value
        });
        resetInput($nameInput, $ageInput, $kindInput, $ownerInput);
    });

    // Animals for adoption
    function generateAdoptionInfo(id, name, age, kind, owner) {
        const $contactButton = elementFactory('button', 'Contact with owner');
        const $owner = elementFactory('span', `Owner: ${owner}`);
        const $name = elementFactory('strong', name);
        const $age = elementFactory('strong', age);
        const $kind = elementFactory('strong', kind);

        const $paragraph = elementFactory('p', [
            $name,
            ' is a ',
            $age,
            ' year old ',
            $kind
        ]);

        $contactButton.addEventListener('click', contactWithOwner.bind(null, $contactButton, id));

        return elementFactory('li', [
            $paragraph,
            $owner,
            $contactButton
        ], [
            {
                name: 'data-id',
                value: id
            }
        ]);
    }

    // Contact with owner
    function contactWithOwner($button, id) {
        const $adoptionForm = generateAdoptionForm(id);
        $button.replaceWith($adoptionForm);
    }

    function generateAdoptionForm(id) {
        const $newOwnerInput = elementFactory('input', [], [
            { name: 'placeholder', value: 'Enter your names' }
        ]);

        const $adoptButton = elementFactory('button', 'Yes! I take it!');

        $adoptButton.addEventListener('click', () => {
            adopt(id, $newOwnerInput.value);
        });

        return elementFactory('div', [
            $newOwnerInput,
            $adoptButton
        ]);
    }

    // Adopt animal
    function adopt(id, newOwner) {
        const $animal = document.querySelector(`[data-id="${id}"]`);
        $animal.querySelector('span').innerText = `New Owner: ${newOwner}`;
        $animal.querySelector('div').replaceWith(elementFactory('button', 'Checked'));

        $animal.remove();
        $adoptedList.append($animal);

    }

    // Render Functions
    function addToAdoptionList({ id, name, age, kind, owner }) {
        const $listItem = generateAdoptionInfo(id, name, age, kind, owner);
        $adoptionList.appendChild($listItem);
    }

    // Helpers
    function elementFactory(name, content = [], attributes = []) {
        var element = document.createElement(name);

        // Add attributes
        attributes.forEach(({ name, value }) => element.setAttribute(name, value))

        // Add string content
        if (typeof content === 'string') {
            element.innerText = content;
        }
        // Append nodes
        else if (content.length > 0) {
            element.append(...content);
        }

        return element;
    }

    function hasEmptyInput(...inputs) {
        return inputs.some(input => input.value === '');
    }

    function resetInput(...inputs) {
        inputs.forEach(input => input.value = '');
    }
}