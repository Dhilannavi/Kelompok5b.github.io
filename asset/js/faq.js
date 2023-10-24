document.addEventListener("DOMContentLoaded", function() {
    const faqItems = [
        {
            id: "faq1",
        },
        {
            id: "faq2",
         },
        {
            id: "faq3",
        }
    ];

    const faqLinks = document.querySelectorAll(".faq-link");

    faqLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const faqId = link.getAttribute("data-faq");
            const selectedFaq = faqItems.find((faq) => faq.id === faqId);

            if (selectedFaq) {
                const answerElement = document.querySelector(`#${faqId}-answer`);
                if (answerElement) {
                    if (answerElement.style.display === "none" || answerElement.style.display === "") {
                        answerElement.style.display = "block";
                    } else {
                        answerElement.style.display = "none";
                    }
                }
            }
        });
    });
});
