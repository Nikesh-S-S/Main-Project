document.addEventListener('DOMContentLoaded', () => {
    // Select all the sections
    const sections = document.querySelectorAll('.First-Section, .Second-Section, .Third-Section,.Fourth-Section');

    // Add hover event listeners
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            section.style.transform = 'scale(1.1)';
            section.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });

        section.addEventListener('mouseleave', () => {
            section.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            section.style.transform = 'scale(1)';
            section.style.boxShadow = 'none';
        });
    });
});
