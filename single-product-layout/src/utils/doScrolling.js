const getElementY = query => window.pageYOffset + document.querySelector(query).getBoundingClientRect().top;

const doScrolling = (element, duration) => {
    let startingY = window.pageYOffset,
        elementY = getElementY(element),
        targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY,
        diff = targetY - startingY,
        easing = t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        start;
    if (!diff) return;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        let time = timestamp - start,
            percent = Math.min(time / duration, 1);

        percent = easing(percent);
        window.scrollTo(0, startingY + diff * percent);
        if (time < duration) {
            window.requestAnimationFrame(step)
        }
    })
};

export const anchorClick = (e) => {
    e.preventDefault();
    let dataHref = e.target.getAttribute('data-href');
    if (document.querySelector(dataHref)) {
        doScrolling(dataHref, 1500);
    }
};