const sections = document.querySelectorAll('section');
for (const section of sections){
    section.style.border = '2px , solid , red';
    section.style.marginBottom = '24px';
    section.style.borderRadius = '50px';
    section.style.backgroundColor = 'lightgray';
    section.style.paddingLeft = '30px';
}

const placesContainer = document.getElementById('places-container');

placesContainer.style.backgroundColor = 'yellow'

        const placesContainers = document.getElementById('places-container');
placesContainers.classList.add('red-bg');