// Function to add a skill to the timeline
function addSkillToTimeline(skill) {
    const timelineId = skill.context === 'school' ? 'school-timeline' : 'work-timeline';
    const timeline = document.getElementById(timelineId);
    
    // Get the icon by alt text, which should match the skill name
    const icon = document.querySelector(`img[alt="${skill.name}"]`);
    if (!icon) {
      console.error('Icon not found for skill:', skill.name);
      return; // Skip if the icon isn't found
    }
    
    const position = calculateTimelinePosition(skill.startDate, skill.endDate);
    
    // Calculate the end position for the animation based on the timeline element's position
    const timelineRect = timeline.getBoundingClientRect();
    const endTop = timelineRect.top + (timelineRect.height * position.start / 100) - (icon.height / 2);
    
    // Clone the icon for animation purposes
    const iconClone = icon.cloneNode(true);
    document.body.appendChild(iconClone);
    
    // Position the clone at the exact location of the original icon
    const iconRect = icon.getBoundingClientRect();
    iconClone.style.position = 'absolute';
    iconClone.style.top = `${iconRect.top}px`; // Corrected syntax
    iconClone.style.left = `${iconRect.left}px`; // Corrected syntax
    
    // Animate the clone to the timeline using GSAP
    gsap.to(iconClone, {
      top: window.scrollY + endTop,
      left: 0, // Reset left to 0
      duration: 2,
      ease: 'power1.inOut',
      onComplete: function() {
        // Set the border color or any other style you want to apply
        iconClone.style.borderColor = skill.color;
        // Optionally, remove the clone if it's not needed anymore
        iconClone.remove();
      }
    });
}

  document.addEventListener('DOMContentLoaded', () => {
    const skillsData = [
        [
            {
              "context": "school",
              "skills": [
                {
                  "name": "HTML",
                  "startDate": "2023-10-01",
                  "endDate": null,
                  "color": "#e34c26"
                },
                {
                  "name": "CSS",
                  "startDate": "2023-10-01",
                  "endDate": null,
                  "color": "#2965f1"
                },
                {
                  "name": "JavaScript",
                  "startDate": "2023-10-01",
                  "endDate": null,
                  "color": "#f0db4f"
                },
                {
                  "name": "Python",
                  "startDate": "2023-05-01",
                  "endDate": null,
                  "color": "#3776ab"
                },
                {
                  "name": "Git",
                  "startDate": "2024-01-01",
                  "endDate": null,
                  "color": "#f34f29"
                },
                {
                  "name": "SQL",
                  "startDate": "2023-01-01",
                  "endDate": "2023-05-31",
                  "color": "#4479a1"
                },
                {
                  "name": "Microsoft Excel",
                  "startDate": "2023-08-01",
                  "endDate": "2023-12-31",
                  "color": "#217346"
                },
                {
                  "name": "Stata",
                  "startDate": "2023-01-01",
                  "endDate": "2023-05-31",
                  "color": "#1a5f7a"
                },
                {
                  "name": "C#",
                  "startDate": "2024-01-01",
                  "endDate": null,
                  "color": "#9b4993"
                }
              ]
            },
            {
              "context": "work",
              "skills": [
                {
                  "name": "Microsoft Excel",
                  "startDate": "2020-10-01",
                  "endDate": "2022-01-31",
                  "color": "#217346"
                },
                {
                  "name": "SQL",
                  "startDate": "2020-10-01",
                  "endDate": "2022-01-31",
                  "color": "#4479a1"
                },
                {
                  "name": "Tableau",
                  "startDate": "2020-10-01",
                  "endDate": "2022-01-31",
                  "color": "#e97627"
                },
                {
                  "name": "PowerBI",
                  "startDate": "2020-10-01",
                  "endDate": "2022-01-31",
                  "color": "#f2c811"
                },
                {
                  "name": "Microsoft Office",
                  "startDate": "2020-10-01",
                  "endDate": "2022-01-31",
                  "color": "#d83b01"
                },
                {
                  "name": "Microsoft Excel",
                  "startDate": "2022-01-01",
                  "endDate": "2022-04-30",
                  "color": "#217346"
                },
                {
                  "name": "Microsoft Office",
                  "startDate": "2022-01-01",
                  "endDate": "2022-04-30",
                  "color": "#d83b01"
                },
                {
                  "name": "SAS",
                  "startDate": "2023-05-01",
                  "endDate": "2023-08-31",
                  "color": "#B76E79"
                },
                {
                  "name": "Microsoft Excel",
                  "startDate": "2023-05-01",
                  "endDate": "2023-08-31",
                  "color": "#217346"
                },
                {
                  "name": "SQL",
                  "startDate": "2023-05-01",
                  "endDate": "2023-08-31",
                  "color": "#4479a1"
                },
                {
                  "name": "Tableau",
                  "startDate": "2023-05-01",
                  "endDate": "2023-08-31",
                  "color": "#e97627"
                },
                {
                  "name": "Microsoft Office",
                  "startDate": "2023-05-01",
                  "endDate": "2023-08-31",
                  "color": "#d83b01"
                },
                {
                    "name": "Python",
                    "startDate": "2023-08-01",
                    "endDate": null,
                    "color": "#3776ab"
                  },
                  {
                    "name": "SQL",
                    "startDate": "2023-08-01",
                    "endDate": null,
                    "color": "#4479a1"
                  },
                  {
                    "name": "Git",
                    "startDate": "2023-08-01",
                    "endDate": null,
                    "color": "#f34f29"
                  },
                  {
                    "name": "Microsoft Office",
                    "startDate": "2023-08-01",
                    "endDate": null,
                    "color": "#d83b01"
                  },
                  {
                    "name": "Microsoft Excel",
                    "startDate": "2023-08-01",
                    "endDate": null,
                    "color": "#217346"
                  }
                ]
              }
            ]
    ];
    skillsData.forEach(skill => {
      addSkillToTimeline(skill);
    });
  });
  