let progress = 0;
let count = document.querySelectorAll('ytd-channel-renderer:not(.ytd-item-section-renderer)').length;

const unsubscribe = () => {
  if (count === 0) {
    return;
  }

  const subscriptionButton = document.querySelector('ytd-subscribe-button-renderer button');
  subscriptionButton.click();

  setTimeout(() => {
    document.querySelector("[aria-label='Unsubscribe']").click();

    progress++;
    count--;

    console.log(`${progress} done, ${count} to go`);

    setTimeout(() => {
      subscriptionButton = document.querySelector('ytd-channel-renderer');
      subscriptionButton.parentNode.removeChild(subscriptionButton);

      unsubscribe();
    }, 333);
  }, 500);
};

unsubscribe();
