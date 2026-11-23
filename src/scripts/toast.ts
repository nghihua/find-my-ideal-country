let toastTimer: ReturnType<typeof setTimeout> | null = null;

export function showToast(msg: string) {
  const box = document.getElementById('toast-box')!;
  const text = document.getElementById('toast-message')!;
  text.textContent = msg;
  box.classList.remove('hidden');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    box.classList.add('hidden');
  }, 3200);
}
