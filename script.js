let noClickCount = 0;
const noMessages = [
    "Are you sure..?",
    "ARE YOU REALLY SURE?",
    "NO WAY..",
    "Click yes pls",
    "But babygirl WHYYY",
    "You better click yes rn 😪",
    "SO YOU DO HATE ME?? 😔😔",
    "Fine, I guess 😔😔😔",
    "OKAY, FINE, DON'T BE MY VALENTINE 😔😔",
    "WOWWWW YOU WILL REGRET THIS"
];

function handleNoClick() {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    if (noClickCount < noMessages.length - 1) {
        noBtn.innerText = noMessages[noClickCount];
        noClickCount++;

        // Reset the font size of the 'Yes' button
        yesBtn.style.fontSize = ''; // This sets it back to the default size
    } else {
        // Redirect to no.html after the 10th click
        window.location.href = "no.html";
    }
}

function redirectToYes() {
    // Redirect to yes.html when the user clicks "Yes"
    window.location.href = "yes.html";
}

function handleTabClick(tab) {
    // Remove 'active-tab' class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
        tab.classList.remove('active-tab');
    });

    // Add 'active-tab' class to the clicked tab
    tab.classList.add('active-tab');

    // Prevent navigating away for the "Main" tab
    if (!tab.classList.contains('main-tab')) {
        // Manually redirect to the tab's href after a small delay
        setTimeout(() => {
            window.location.href = tab.getAttribute('href');
        }, 100);
    }
}
