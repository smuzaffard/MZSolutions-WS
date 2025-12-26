// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

/* 1) Load Lottie animation into #heroLottie
   Replace the 'path' below with your chosen Lottie JSON URL
   - Option A: CDN URL from LottieFiles (easiest)
   - Option B: local JSON at assets/lottie/custom.json (change path accordingly)
*/
document.addEventListener('DOMContentLoaded', () => {
  // CHANGE THIS to the Lottie JSON you want:
  const LOTTIE_JSON = "https://assets7.lottiefiles.com/packages/lf20_touohxv0.json";
  const container = document.getElementById('heroLottie');
  if (container && typeof lottie !== 'undefined') {
    lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: LOTTIE_JSON
    });
  }

  // small GSAP entrance
  if (typeof gsap !== 'undefined') {
    gsap.from('.hero-text h1', { y: 20, opacity: 0, duration: 0.9 });
    gsap.from('.service-card', { y: 10, opacity: 0, duration: 0.9, stagger: 0.08 });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});

// Contact form demo handler (replace with real endpoint or form service)
function handleContact(e){
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    message: form.message.value.trim()
  };
  // Basic validation
  if(!data.name || !data.email || !data.message){
    alert('Please fill required fields.');
    return false;
  }
  // DEMO: show success
  alert('Thanks ' + data.name + '! We received your message (demo).');
  form.reset();

  // TODO: Replace this section with a real POST fetch to your backend or a form service
  /*
  fetch('https://your-backend.example/api/contact', {
    method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)
  }).then(r=>r.json()).then(resp=>{
     // handle success
  }).catch(err=> { alert('Could not send.'); });
  */

  return false;
}
