function main() {
  const textArea = document.querySelector('textarea');
  const submitButton = document.querySelector('.absolute.p-1.rounded-md');

  const locationSearch = new URLSearchParams(location.search);
  const search = locationSearch.get('prompt');

  setTimeout(() => {
    if (textArea) {
      textArea.value = search;
    }

    if (submitButton) {
      submitButton.click();
    }
  }, 1000);
}

main();
