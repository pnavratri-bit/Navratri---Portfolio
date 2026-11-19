/**
 * NAVRATRI PRIYADARSHINI - PORTFOLIO INTERACTION LOGIC
 * Architecture: Standalone JavaScript module (Separated from HTML & CSS)
 */

// ==========================================================================
// 1. Case Study Data Store
// ==========================================================================
const caseStudyData = {
  rapido: {
    label: "01 / INDEPENDENT PRODUCT CONCEPT · 2026",
    title: "Rapido - No-Network Booking",
    desc: "A product-thinking case study about continuity when mobile connectivity fails.",
    html: `
      <h3>Problem framing</h3>
      <p>The starting point was a real-world constraint: a user may need a ride at the exact moment their internet connection is weak or unavailable.</p>
      
      <h3>Research goal</h3>
      <p>To understand what happens to the Rapido booking experience when mobile data is weak or unavailable, and where users get stuck.</p>

      <h3>Context</h3>
      <p>I have lived in Madhya Pradesh, where network drops are common during the rainy season, foggy winters and in forest areas. In these conditions the app does not update, the OTP does not arrive, and the user gets no rider updates. They are left unsure whether the booking went through.</p>

      <h3>Method</h3>
      <p>Informal conversations with 2-3 people who face unreliable connectivity, along with my own experience of weak networks in MP.</p>

      <h3>Participants</h3>
      <p>A mix of everyday users, such as a student, a woman commuter and an office girl.</p>

      <h3>Findings</h3>
      <ul>
        <li><strong>Network bars do not mean working data.</strong> In many places the phone shows network, but mobile data does not work, so booking is not possible.</li>
        <li><strong>No network means no booking.</strong> The app offers no alternative, so the journey stops.</li>
        <li><strong>No balance creates the same barrier.</strong> When users have no balance or data left, booking through Rapido becomes difficult.</li>
      </ul>

      <h3>Insight</h3>
      <p>The barrier is not only weak network. It is any situation where mobile data is unavailable: weak signal, network bars with no working data, or no balance. The app assumes data works, so the user has no way to book.</p>

      <h3>Limitation</h3>
      <p>This is a small, early-stage sample. It guided problem framing, and I plan to validate it with more users.</p>

      <h3>Product opportunity</h3>
      <p>Instead of treating no network as a dead end, the product could offer a fallback path using SMS while keeping the user informed about system status.</p>

      <h3>Concept: offline booking through SMS</h3>
      <p>When mobile data is unavailable, the user can still book a ride through text messages.</p>
      <ul>
        <li>The booking confirmation and OTP arrive by SMS.</li>
        <li>Rider updates (accepted, on the way, arrived) also arrive by SMS.</li>
        <li>The user shares the OTP with the rider to start the ride.</li>
      </ul>

      <h3>Edge cases explored</h3>
      <ul>
        <li>No cellular signal at all</li>
        <li>Delayed SMS</li>
        <li>No balance, where receiving SMS may work but sending may not</li>
        <li>Rider verification without the app, through rider name and vehicle number in the SMS</li>
      </ul>

      <h3>What the interface communicates</h3>
      <p>Simple actions, clear status and minimal interaction are prioritized because the user is already operating under a constrained condition.</p>
    `
  },
  basket: {
    label: "02 / TUTEDUDE · FIRST ASSIGNMENT · 2026",
    title: "Clean Basket",
    desc: "A service-product case study for a laundry experience.",
    html: `
      <h3>Project goal</h3>
      <p>The goal of this project was to design a simple and user-friendly laundry pickup and delivery app that helps users easily book laundry services, schedule pickups, compare nearby providers, and track their orders with a smooth and an efficient experience.</p>

      <h3>Project statement</h3>
      <p>Laundry service apps often fail users in small but critical ways. Booking flows are inconsistent, pricing is unclear until after service completion, and authentication methods can lock users out entirely if their assumed access method (like OTP) isn't available. During competitor analysis of UClean, this became evident: the app supports only phone number + OTP login, with no alternative - creating a real accessibility barrier for users facing network issues or an unrecharged number.</p>

      <h3>Objective</h3>
      <ul>
        <li>Reduce login drop-off by offering multiple authentication methods (phone/email + password, alongside OTP)</li>
        <li>Provide upfront, transparent pricing before a booking is confirmed</li>
        <li>Simplify pickup scheduling to fit users' existing routines rather than rigid time slots</li>
        <li>Build trust through clear order tracking at every stage</li>
        <li>Maintain a consistent, predictable visual system across the entire booking journey</li>
      </ul>

      <h3>Primary user</h3>
      <ul>
        <li>Working professionals</li>
        <li>Students, and busy families who need a fast, dependable way to outsource laundry without adding friction to their day.</li>
      </ul>

      <h3>Research &amp; discovery</h3>
      <h3>Primary research (informal interviews)</h3>
      <p>I spoke informally with 4-5 people who regularly use laundry services. Recurring pain points included:</p>
      <ul>
        <li><strong>Scheduling friction</strong> - pickup slots didn't match users' actual work hours</li>
        <li><strong>Trust deficit</strong> - fear of clothes being damaged or lost, with no visible accountability</li>
        <li><strong>Pricing opacity</strong> - final costs weren't clear until after the service was booked</li>
      </ul>

      <h3>Competitor analysis - UClean</h3>
      <p>I explored UClean as a direct competitor. A key usability gap surfaced: the app's login screen supports only phone number + OTP, with no fallback option. If a user's number has no balance or network access is poor, they cannot log in at all - a significant accessibility failure for a service targeting budget-conscious, busy users.</p>

      <h3>Design decision</h3>
      <p>To address this, I designed the login screen with both Phone/Email and Password fields, along with Signup and Forgot Password flows - giving users a reliable path into the app regardless of OTP availability.</p>

      <h3>Persona: Roshini Patil</h3>
      <p>Student, exam preparation. Preparing for an important exam, most of her time goes into studying. Everyday tasks like laundry are hard to fit in.</p>
      <p>26 years old &middot; M.A degree &middot; Delhi &middot; Joyful, Sensitive, Lazy</p>

      <h3>Goals</h3>
      <ul>
        <li>Quick, low effort laundry</li>
        <li>Reliable, no follow up needed</li>
        <li>Fast booking process</li>
        <li>Trustworthy</li>
        <li>Nearest provider</li>
        <li>Provider contact number</li>
      </ul>

      <h3>Frustrations</h3>
      <ul>
        <li>Rigid pickup slots</li>
        <li>Unclear order tracking</li>
        <li>Pricing not shown up front</li>
        <li>Burnt and faded clothes</li>
        <li>Too much time consuming</li>
        <li>No details about providers</li>
      </ul>

      <h3>Wants &amp; needs</h3>
      <ul>
        <li>Flexible scheduling around her free time</li>
        <li>Clear tracking without repeated follow up</li>
        <li>Transparent pricing before booking</li>
        <li>Rating necessary</li>
        <li>Talk to provider before order</li>
      </ul>

      <h3>Journey thinking</h3>
      <p>I worked through the service journey from choosing a service to provider details, booking, order tracking and payment states.</p>
    `
  },
  world: {
    label: "03 / INDEPENDENT UX RESEARCH · IN PROGRESS",
    title: "World Watch",
    desc: "A research-led information product for complex global crises.",
    html: `
      <h3>Problem space</h3>
      <p>Information about wars and natural disasters can be distributed across many updates, locations and sources. The concept explores how to make that information easier to discover and understand.</p>
      
      <h3>Research questions</h3>
      <p>How might users discover an ongoing crisis? What information helps them understand severity and affected regions? How can the product connect understanding with responsible support?</p>
      
      <h3>Product structure</h3>
      <p>The work explores information architecture around crisis updates, affected regions, casualties, critical needs, location-based discovery and relief opportunities.</p>
      
      <h3>Status</h3>
      <p>This is an independent project and is still in progress.</p>
    `
  },
  paytm: {
    label: "04 / PAYTM DESIGN COMPETITION · 2026",
    title: "Speak. Confirm. Sent.",
    desc: "Reimagining Paytm UPI P2P with voice.",
    html: `
      <div style="margin-bottom: 22px;">
        <img src="paytm-logo.svg" alt="Paytm" style="height: 28px; width: auto;">
      </div>
      <h3>Problem</h3>
      <p>Sending money can involve finding the recipient, entering the amount and navigating several steps. A user conversation in the presentation described this friction in a time-sensitive situation.</p>
      
      <h3>Research insight</h3>
      <p>“People don’t think in UPI IDs. They think in people.” The concept lets users express the payment naturally while the product handles the typing and prepares the transaction.</p>
      
      <h3>Product concept</h3>
      <p>Two entry points were explored: an in-app microphone inside Pay Anyone and OS-level voice through Google Assistant.</p>
      
      <h3>Trust and safety</h3>
      <p>Voice does not directly send money. Recipient and amount are shown for review, with an edit option, followed by fingerprint authentication or PIN fallback.</p>
      
      <h3>Outcome</h3>
      <div class="flow">
        <span>Speak</span>
        <span>Detect</span>
        <span>Review</span>
        <span>Authenticate</span>
        <span>Sent</span>
      </div>
      <p>The presentation describes the goal as making P2P payments faster while retaining user control and secure confirmation.</p>
    `
  }
};

// ==========================================================================
// 2. Modal Controller
// ==========================================================================
const modal = document.getElementById("modal");
const modalLabel = document.getElementById("ml");
const modalTitle = document.getElementById("mt");
const modalDesc = document.getElementById("md");
const modalContent = document.getElementById("mc");
const modalCloseBtn = document.querySelector(".close");

function openModal(caseId) {
  const data = caseStudyData[caseId];
  if (!data) return;

  modalLabel.textContent = data.label;
  modalTitle.textContent = data.title;
  modalDesc.textContent = data.desc;
  modalContent.innerHTML = data.html;

  modal.classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = ""; // Restore background scroll
}

// Bind modal trigger buttons
document.querySelectorAll(".case-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const caseId = button.dataset.id;
    openModal(caseId);
  });
});

// Close modal handlers
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && modal.classList.contains("open")) {
    closeModal();
  }
});

// ==========================================================================
// 3. Mobile Navigation Menu Controller
// ==========================================================================
const menuButton = document.querySelector(".menu");
const navContainer = document.querySelector(".nav nav");

if (menuButton && navContainer) {
  menuButton.addEventListener("click", () => {
    navContainer.classList.toggle("is-active");
    const isExpanded = navContainer.classList.contains("is-active");
    menuButton.setAttribute("aria-expanded", isExpanded);
  });

  // Close mobile navigation when a nav link is clicked
  navContainer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navContainer.classList.remove("is-active");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  // Close mobile navigation when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav") && navContainer.classList.contains("is-active")) {
      navContainer.classList.remove("is-active");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}
