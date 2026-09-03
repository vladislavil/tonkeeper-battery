export function setupCarousel() {
    const scrollableElement = document.getElementById('how-use__cards');

    if(scrollableElement === null) {
        return;
    }

    scrollableElement.addEventListener('wheel', function(e) {
        e.preventDefault();
        this.scrollLeft += e.deltaY;
    });
}