/* Platform flip cards: buttons support mouse, touch, Enter, and Space. */
document.querySelectorAll('.platform-flip-card').forEach(card => {
  card.addEventListener('click', () => {
    const flipped = card.classList.toggle('is-flipped');
    card.setAttribute('aria-pressed', String(flipped));
    const front = card.querySelector('.platform-front');
    const back = card.querySelector('.platform-back');
    front.setAttribute('aria-hidden', String(flipped));
    back.setAttribute('aria-hidden', String(!flipped));
    const title = card.querySelector('.platform-name').textContent;
    card.setAttribute('aria-label', title + (flipped ? ': return to realistic image' : ': show scientific illustration'));
  });
});
