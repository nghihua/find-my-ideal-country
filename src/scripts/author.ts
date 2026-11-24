import { showToast } from './toast';

export function openAuthorModal() {
  const modal = document.getElementById('author-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

export function closeAuthorModal() {
  const modal = document.getElementById('author-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

export function initAuthorModal() {
  const openChipBtn = document.getElementById('open-author-chip-btn');
  const openHeaderBtn = document.getElementById('open-author-header-btn');
  const closeBtn = document.getElementById('close-author-btn');
  const closeFooterBtn = document.getElementById('close-author-modal-footer-btn');
  const modal = document.getElementById('author-modal');
  const copyEmailBtn = document.getElementById('copy-author-email-btn');

  if (openChipBtn) {
    openChipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openAuthorModal();
    });
  }

  if (openHeaderBtn) {
    openHeaderBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openAuthorModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeAuthorModal);
  }

  if (closeFooterBtn) {
    closeFooterBtn.addEventListener('click', closeAuthorModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAuthorModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeAuthorModal();
    }
  });

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = 'huanhatgianghi@gmail.com';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = email;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        showToast('Email address copied to clipboard!');
      } catch (err) {
        showToast(`Email: ${email}`);
      }
    });
  }
}
