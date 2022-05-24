const saved = localStorage.getItem('@annotate')
const annotate = document.getElementById('annotate')
if(saved) annotate.value = saved

annotate.addEventListener('input', function(event) {
  localStorage.removeItem('@annotate')
  localStorage.setItem('@annotate', event.target.value)
});
