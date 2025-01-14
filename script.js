async function updateVisitCount() {
    try {
        const response = await fetch('https://z6nnh4lcqwrnkldde4jzwr762u0xwquv.lambda-url.us-east-1.on.aws/'); 
        const data = await response.json();
        console.log("Visit Count:", data.views);

        document.getElementById("visit-count").innerText = `Visit Count: ${data.views}`;
    } catch (error) {
        console.error("Error fetching visit count:", error);
    }
}

// Call the function when the page loads
window.onload = updateVisitCount;
