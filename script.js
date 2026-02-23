/* ===== FORTUNES ARRAY ===== */
const fortunes = [
    "Will die in mansion alone no regreat just reminding of the good times.",
    "You will become the first person to die in mars.",
    "You will fail to achieve your dreams and die with imnse regreats.",
    "You will die in F1 car crash.",
    "You will die in bmw3 gtr at 270 km/h.",
    "You will lose your stock market investments and die in poverty.",
    "You will live a midiocre life at its best.",
    "You will win csgo major.",
    "Your nehlism will lead you to a slow cognitive decline and you will die in a mental hospital." ,
    "You will become an ubermensch and will lead humanity to a new era of prosperity.",
];

/* Selects a random fortune from the fortunes array */
function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

/* ===== STYLE PRESETS ===== */
/* Each preset contains a complete set of styling attributes */
const stylePresets = {
    preset1: {
        name: 'blue-white-blue',
        fontSize: '20px',
        fontFamily: '"Trebuchet MS"',
        textColor: '#102a43',
        backgroundColor: '#fefcf7',
        borderColor: '#4a90e2'
    },
    preset2: {
        name: 'white-blue-yellow',
        fontSize: '24px',
        fontFamily: 'Georgia',
        textColor: '#f8f1e7',
        backgroundColor: '#1f2a44',
        borderColor: '#ffb347'
    },
    preset3: {
        name: 'gray-lightgreen-green',
        fontSize: '18px',
        fontFamily: 'Verdana',
        textColor: '#1b1b1b',
        backgroundColor: '#e6ffb3',
        borderColor: '#2b8a3e'
    },
    preset4: {
        name: 'brown-beige-red',
        fontSize: '28px',
        fontFamily: "'Times New Roman'",
        textColor: '#2b1506',
        backgroundColor: '#f2d7a7',
        borderColor: '#8b0000'
    }
};

/* Apply style preset to fortune box */
function applyPreset(presetKey) {
    const preset = stylePresets[presetKey];
    const boxElement = document.getElementById('fortuneBox');
    
    boxElement.style.fontSize = preset.fontSize;
    boxElement.style.fontFamily = preset.fontFamily;
    boxElement.style.color = preset.textColor;
    boxElement.style.backgroundColor = preset.backgroundColor;
    boxElement.style.borderColor = preset.borderColor;
    
    // Save to localStorage
    localStorage.setItem('currentPreset', presetKey);
}

/* ===== EVENT DRIVEN - when the page loads ===== */
/* Executes when the DOM is fully loaded */
document.addEventListener('DOMContentLoaded', function() {
    // Get the fortune box element
    const boxElement = document.getElementById('fortuneBox');
    // Display a random fortune on page load
    boxElement.textContent = getRandomFortune();
    
    // Apply default preset (preset1)
    applyPreset('preset1');
    
    /* ===== PRESET BOX CLICK HANDLERS ===== */
    /* Add click listeners to all preset boxes */
    document.getElementById('preset1').addEventListener('click', function() {
        applyPreset('preset1');
    });
    
    document.getElementById('preset2').addEventListener('click', function() {
        applyPreset('preset2');
    });
    
    document.getElementById('preset3').addEventListener('click', function() {
        applyPreset('preset3');
    });
    
    document.getElementById('preset4').addEventListener('click', function() {
        applyPreset('preset4');
    });
    
    // Restore last preset if it exists
    const savedPreset = localStorage.getItem('currentPreset');
    if (savedPreset && stylePresets[savedPreset]) {
        applyPreset(savedPreset);
    }
});

