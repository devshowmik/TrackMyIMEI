document.addEventListener('DOMContentLoaded', function () {
    const searchContainer = document.querySelector('.search-container');
    const resultContainer = document.querySelector('.result-container');
    const searchForm = document.getElementById('searchForm');
    const imeiInput = document.getElementById('imeiInput');

    // Handle search form submission
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        performSearch();
    });

    function performSearch() {
        // Add 'searched' class to body to trigger layout changes
        document.body.classList.add('searched');

        // Remove centered class from search container
        searchContainer.classList.remove('centered');

        // Show results container
        resultContainer.classList.add('visible');

        // Simulate search results (replace with actual API call)
        const sampleResults = `
            <div class="phone-card">
                <h2>iPhone 15 Pro Max</h2>
                <p><strong>IMEI:</strong> ${imeiInput.value}</p>
                <p><strong>Color:</strong> Titanium Black</p>
                <p><strong>Last Location:</strong> Central District</p>
                <p><strong>Reported:</strong> 2 hours ago</p>
            </div>
        `;

        resultContainer.innerHTML = sampleResults;

        // Scroll to top of results
        window.scrollTo(0, 0);
    }

});