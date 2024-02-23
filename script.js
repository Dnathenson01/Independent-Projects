// Function to add a new timeline entry
function addTimelineEntry(timelineId, date) {
    // Create a new timeline marker element
    const newMarker = document.createElement('div');
    newMarker.classList.add('timeline-marker');
    newMarker.setAttribute('data-date', date);

    // Append the new marker to the specified timeline
    const timeline = document.getElementById(timelineId);
    timeline.appendChild(newMarker);
}

// Example usage: add a new entry to the school timeline
addTimelineEntry('school-timeline', 'December 2021');

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.timeline-marker').forEach(marker => {
  gsap.from(marker, {
    scrollTrigger: marker,
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: 'power1.out',
  });
});
