/**
 * BẢO MẬT BẢN QUYỀN & CHỐNG SAO CHÉP MÃ NGUỒN
 * CÔNG TY TNHH DV VẬN TẢI THÀNH HƯNG VN - MST: 0318673769
 */

(function () {
  'use strict';

  // 1. Chặn chuột phải (Context Menu)
  document.addEventListener('contextmenu', function (e) {
    // Không chặn trên các ô nhập liệu để khách hàng vẫn paste được số điện thoại
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return true;
    }
    e.preventDefault();
    showWarningNotice('Nội dung và mã nguồn thuộc bản quyền CÔNG TY TNHH DV VẬN TẢI THÀNH HƯNG VN (MST: 0318673769). Nghiêm cấm sao chép dưới mọi hình thức!');
    return false;
  });

  // 2. Chặn các tổ hợp phím tắt xem mã nguồn & F12 Inspect
  document.addEventListener('keydown', function (e) {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }

    // Ctrl + U (Xem mã nguồn trang)
    if (e.ctrlKey && (e.keyCode === 85 || e.key === 'u' || e.key === 'U')) {
      e.preventDefault();
      return false;
    }

    // Ctrl + Shift + I hoặc Ctrl + Shift + J hoặc Ctrl + Shift + C (Inspect DevTools)
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67 || e.key === 'I' || e.key === 'J' || e.key === 'C')) {
      e.preventDefault();
      return false;
    }

    // Ctrl + S (Lưu trang về máy)
    if (e.ctrlKey && (e.keyCode === 83 || e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      return false;
    }

    // Ctrl + C (Chặn copy văn bản ngoài trừ ô nhập liệu)
    if (e.ctrlKey && (e.keyCode === 67 || e.key === 'c' || e.key === 'C')) {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        return false;
      }
    }
  });

  // 3. Chặn kéo thả hình ảnh để tải về máy
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });

  // 4. Bẫy vô hiệu hóa DevTools Console (Debugger Trap)
  setInterval(function () {
    const startTime = performance.now();
    debugger;
    const endTime = performance.now();
    if (endTime - startTime > 100) {
      // Người dùng đang bật chế độ Debugger DevTools
      document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;font-family:sans-serif;background:#0f172a;color:#fff;text-align:center;padding:20px;"><h2>CANH BAO BAO MAT!</h2><p>Phat hien hanh vi can thiep trai phep vao ma nguon website Cong Ty TNHH DV Van Tai Thanh Hung VN.</p><p>Vui long dong cong cu kiem tra de tiep tuc su dung.</p></div>';
    }
  }, 1000);

  // Hiển thị thông báo bản quyền trang nhã
  function showWarningNotice(msg) {
    let oldNotice = document.getElementById('securityNotice');
    if (oldNotice) oldNotice.remove();

    let notice = document.createElement('div');
    notice.id = 'securityNotice';
    notice.style.position = 'fixed';
    notice.style.bottom = '30px';
    notice.style.left = '50%';
    notice.style.transform = 'translateX(-50%)';
    notice.style.background = '#d32f2f';
    notice.style.color = '#ffffff';
    notice.style.padding = '12px 24px';
    notice.style.borderRadius = '8px';
    notice.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
    notice.style.zIndex = '999999';
    notice.style.fontSize = '14px';
    notice.style.fontWeight = 'bold';
    notice.style.textAlign = 'center';
    notice.style.maxWidth = '90%';
    notice.innerText = msg;

    document.body.appendChild(notice);

    setTimeout(function () {
      if (notice) notice.remove();
    }, 3500);
  }
})();
