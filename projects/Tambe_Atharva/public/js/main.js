// Animate headings
anime({
    targets: 'h1, h3',
    translateY: [-30, 0],
    opacity: [0, 1],
    duration: 1200,
    delay: anime.stagger(200),
    easing: 'easeOutExpo'
});

// Animate subreddit list items
anime({
    targets: '.list-group-item',
    opacity: [0, 1],
    translateX: [-50, 0],
    delay: anime.stagger(100, {start: 800}),
    duration: 800,
    easing: 'easeOutExpo'
});

// Animate navbar
anime({
    targets: '.navbar',
    opacity: [0, 1],
    translateY: [-20, 0],
    duration: 1000,
    easing: 'easeOutExpo'
});

// Animate footer
anime({
    targets: 'footer',
    opacity: [0, 1],
    duration: 1200,
    delay: 1000,
    easing: 'easeOutExpo'
});