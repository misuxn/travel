// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize accordion functionality
    initAccordion();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize modal functionality
    initModal();
});

// Accordion Functionality
function initAccordion() {
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = this.nextElementSibling;
            const isOpen = accordionItem.classList.contains('active');
            
            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = '0';
                item.querySelector('.fa-plus').style.transform = 'rotate(0deg)';
            });
            
            // Open current if it was closed
            if (!isOpen) {
                accordionItem.classList.add('active');
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                this.querySelector('i').style.transform = 'rotate(45deg)';
            }
        });
    });
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real app, you would send the form data to a server here
            // For demonstration, we'll just show the success modal
            showModal();
            
            // Reset form
            this.reset();
        });
    }
}

// Modal Functionality
function initModal() {
    const modal = document.getElementById('confirmationModal');
    const closeBtns = document.querySelectorAll('.close-modal, .close-btn');
    
    if (modal) {
        // Close modal when clicking X or Close button
        closeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                hideModal();
            });
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideModal();
            }
        });
    }
}

function showModal() {
    const modal = document.getElementById('confirmationModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function hideModal() {
    const modal = document.getElementById('confirmationModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});