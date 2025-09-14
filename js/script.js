// small JS for year and small interactions
document.addEventListener('DOMContentLoaded', ()=>{
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;
});