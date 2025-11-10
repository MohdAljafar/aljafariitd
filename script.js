<script>
  const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
  const form = document.forms['submit-to-google-sheet'];
  const responseMsg = document.getElementById('form-response');

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        responseMsg.innerHTML = "✅ Message submitted successfully!";
        form.reset();
      })
      .catch(error => {
        responseMsg.innerHTML = "❌ Error! Try again later.";
        console.error('Error!', error.message);
      });
  });
</script>
