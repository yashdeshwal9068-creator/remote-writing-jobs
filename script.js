// Sample job data (you can replace with your own)
const jobs = [
    {
        id: 1,
        title: "Content Writer - Tech Blog",
        company: "TechPulse",
        category: "content",
        location: "Remote",
        salary: "$50k - $70k",
        description: "Write engaging tech articles, tutorials, and news for a growing tech blog. 2+ years experience required.",
        postedDate: "2 days ago",
        applyUrl: "https://example.com/apply1"
    },
    {
        id: 2,
        title: "Copywriter for SaaS Company",
        company: "CloudScale",
        category: "copywriting",
        location: "Remote",
        salary: "$60k - $85k",
        description: "Create compelling copy for landing pages, emails, and marketing campaigns. Experience with B2B SaaS preferred.",
        postedDate: "1 day ago",
        applyUrl: "https://example.com/apply2"
    },
    {
        id: 3,
        title: "Technical Writer - API Documentation",
        company: "DevTools Inc",
        category: "technical",
        location: "Remote",
        salary: "$70k - $90k",
        description: "Write clear documentation for developer tools and APIs. Experience with Markdown and Git required.",
        postedDate: "5 days ago",
        applyUrl: "https://example.com/apply3"
    },
    {
        id: 4,
        title: "Lifestyle Blogger",
        company: "Digital Media Co",
        category: "blogging",
        location: "Remote",
        salary: "$40k - $55k",
        description: "Create engaging lifestyle content, manage social media, and collaborate with brands.",
        postedDate: "3 days ago",
        applyUrl: "https://example.com/apply4"
    },
    {
        id: 5,
        title: "SEO Content Writer",
        company: "GrowthMarketing",
        category: "content",
        location: "Remote",
        salary: "$45k - $65k",
        description: "Write SEO-optimized blog posts and articles. Knowledge of keyword research and content strategy required.",
        postedDate: "Just now",
        applyUrl: "https://example.com/apply5"
    }
];

// Display jobs
function displayJobs(jobsArray) {
    const container = document.getElementById('jobListings');
    
    if (jobsArray.length === 0) {
        container.innerHTML = '<div class="no-jobs">No jobs found matching your criteria.</div>';
        return;
    }
    
    container.innerHTML = jobsArray.map(job => `
        <div class="job-card" data-category="${job.category}">
            <div class="job-header">
                <h3 class="job-title">${job.title}</h3>
                <span class="job-category">${job.category.charAt(0).toUpperCase() + job.category.slice(1)}</span>
            </div>
            <div class="job-company">
                <i class="fas fa-building"></i>
                ${job.company}
            </div>
            <div class="job-details">
                <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span><i class="fas fa-money-bill-alt"></i> ${job.salary}</span>
            </div>
            <p class="job-description">${job.description}</p>
            <div class="job-footer">
                <span class="job-date"><i class="far fa-clock"></i> Posted ${job.postedDate}</span>
                <a href="${job.applyUrl}" target="_blank" class="apply-btn">Apply Now <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

// Filter jobs
function filterJobs(category) {
    if (category === 'all') {
        displayJobs(jobs);
    } else {
        const filtered = jobs.filter(job => job.category === category);
        displayJobs(filtered);
    }
}

// Search jobs
function searchJobs(query) {
    query = query.toLowerCase();
    const filtered = jobs.filter(job => 
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query)
    );
    displayJobs(filtered);
}

// Modal functionality
const modal = document.getElementById('postJobModal');
const postBtn = document.getElementById('postJobBtn');
const closeBtn = document.querySelector('.close');

postBtn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterJobs(btn.dataset.filter);
    });
});

// Search functionality
const searchInput = document.getElementById('searchInput');
let searchTimeout;

searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchJobs(e.target.value);
    }, 300);
});

// Initialize with all jobs
displayJobs(jobs);

// Form submission handling
document.getElementById('jobPostForm').addEventListener('submit', function(e) {
    // Don't actually submit for demo
    // e.preventDefault();
    
    // Show success message
    alert('Thank you! After PayPal payment, your job will be reviewed and posted within 24 hours.');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});
