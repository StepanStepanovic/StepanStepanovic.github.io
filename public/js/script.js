// Placeholder for any interactivity or functionality in the future
console.log("Welcome to my personal webpage!");

document.addEventListener("DOMContentLoaded", () => {
    const publications = document.querySelectorAll(".publication");
    const keywords = document.querySelectorAll(".keyword");
    const yearFilterInput = document.getElementById("yearFilter");

    // Filter by keyword
    keywords.forEach(keyword => {
        keyword.addEventListener("click", () => {
            const keywordValue = keyword.dataset.keyword; // Keep the case as is
            publications.forEach(pub => {
                const pubKeywords = pub.dataset.keywords; // Keep the case as is
                if (pubKeywords.includes(keywordValue)) { // Case-sensitive comparison
                    pub.style.display = "block";
                } else {
                    pub.style.display = "none";
                }
            });
        });
    });

    // Filter by year range
    yearFilterInput.addEventListener("input", () => {
        const yearRange = yearFilterInput.value.trim();
        if (!yearRange) {
            publications.forEach(pub => pub.style.display = "block");
            return;
        }

        publications.forEach(pub => {
            const pubYear = parseInt(pub.dataset.year);
            let show = false;

            if (yearRange.includes("-")) {
                const [start, end] = yearRange.split("-").map(y => parseInt(y) || null);
                if ((start === null || pubYear >= start) && (end === null || pubYear <= end)) {
                    show = true;
                }
            } else {
                const year = parseInt(yearRange);
                if (pubYear === year) {
                    show = true;
                }
            }

            pub.style.display = show ? "block" : "none";
        });
    });
});
