document.addEventListener("DOMContentLoaded", () => {
    let imgs = document.querySelectorAll(".img"); 

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.0) {
                let target = entry.target;
                target.src = target.dataset.src; 
                observer.unobserve(target); 
            }
        });
    }, { threshold: 0.0 }); 
    imgs.forEach(img => observer.observe(img)); 
});
