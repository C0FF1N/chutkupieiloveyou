let attemptCount = 0;
const correctPassword = "chutkupie";  // Password to access the letter
const maxEscapeAttempts = 4;

// Function to check password
function checkPassword() {
    const password = document.getElementById("password-input").value;
    if (password === correctPassword) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("letter-container").style.display = "block";
        initLetterBehavior();
    } else {
        alert("Incorrect password. Try again!");
    }
}

// Function to handle letter click
function initLetterBehavior() {
    const letter = document.getElementById("flying-letter");
    letter.addEventListener("click", showMessage);
}

// Function to display the new message
function showMessage() {
    const messageElement = document.getElementById("letter-content");
    messageElement.innerHTML = `
        Hi my beautiful babypie,<br><br>
        Today marks one whole year since you said "yes," and honestly, I still can’t believe my luck. I remember the first time I saw you – I started stalking you (not in a creepy way, I swear, just the ‘normal’ stalker things 😜). I knew from that moment I wanted you in my life. I tried everything to win you over, and even though it took time, I never lost hope because deep down, I knew my love for you was real and pure.<br><br>
        When you finally said yes (22nd October 2023, forever etched in my heart), I felt like I’d left behind my old self. You made me the man I am today. You bring out the best in me in ways I never imagined. I honestly can’t put into words the amount of love I have for you because it’s beyond anything I’ve ever known. It’s like you’ve taken over my heart, and now every beat belongs to you.<br><br>
        I’ll be honest... I get jealous. Like, really jealous! 😅 I can’t stand the thought of anyone else getting to experience your smile, your adorable expressions, your kind heart – all of that is MINE, okay? I’m selfish like that when it comes to you because, let’s face it, you’re the best thing that ever happened to me, and I’m not sharing. Ever.<br><br>
        You’re my everything. I want to spend my whole life with you, treating you like the princess you are. Even when I’m a ghost (yep, I’m that committed), I’ll still be there, haunting you with all my love! 👻 But seriously, baby, you’re the reason I wake up with a light heart every day. You make me feel like this world is worth loving because YOU are in it. You’re the one who keeps pushing me to be better. You’re my anchor, my safe place, and the best decision I’ve ever made.<br><br>
        I love how you’re not just my partner, but you’ve become my whole world – my house, my smile, my happiness, my everything. It might sound cheesy (okay, definitely cringey 😅), but I want to be your husband one day. I want you to be my wife, my princess, my cute little patootie, my sanskari baddie, my chutku pie, my everything. I want to spend every single moment of my life with you, because without you, there’s no point in any of this.<br><br>
        I promise, with all my heart, to stand by your side for the rest of my life, making sure you achieve every single one of your dreams because your dreams are mine now. I love you more than anything in this world, meri jaan.<br><br>
        AAP HO TO, MEIN HUN!<br>
        APKE BINA M KUCH BHI NHI, AP HO TO MERA DIL H, APKE BINA TO KUCH BHI NHI, AAP HO TO NEEND H, APKE BINA TO NEEND BHI NHI, AAP HO TO KHUSHIYAN H, APKE BINA TO MUSKURAHAT BHI NHI, AP HO TO MERE JEEVAN ME PYAR H KYUKI APKE BINA PYAR HI NHI, AP HO TO SUKOON H, KYUKI APKE BINA TO RAHAT BHI NHI, APKE DIL ME HMESHA RAHU BS ITNI TAMANNA H! KYUKI APKE DIL K SIWA TO ..... MERA KOI GHAR BHI NHI! 💕<br><br>
        AND Here’s to us making it to 95 years old (though by then we’ll have no teeth, so kisses might get a little tricky 😜). But hey, we’ll figure it out – and if not, let’s meet in the next life and start this all over again! 😂<br><br>
        Come meet soon Brownie Miiseess youuu so much too! hehe! 
        I love you more than words can say, my sweet babypie! You’re my life, my love, and my forever. ❤️<br><br>
        I LOVE YOUUUUUUUU! hAPPPYY aNNIIVERSARYYYYYYYYY!!! AGHHHHHHHHHHHHHHHH!! 
        
    `;
    messageElement.style.display = "block"; // Make the message visible
}

// Initialize the letter behavior
initLetterBehavior();


// Function to handle read confirmation and rose petal animation
function confirmRead() {
    const letter = document.getElementById("flying-letter");
    letter.style.transition = "all 1s ease";
    letter.style.transform = "scale(0)";
    
    setTimeout(() => {
        // Show rose petals animation
        document.body.innerHTML = '<div class="rose-petals">I love you, Chutkupie! ❤️</div>';
    }, 1000);
}
