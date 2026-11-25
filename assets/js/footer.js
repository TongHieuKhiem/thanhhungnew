// =========================================================================
// THÀNH HƯNG VN - SHARED FOOTER COMPONENT
// Chỉnh sửa nội dung chân trang trong footer.html hoặc tại ĐÂY
// sẽ tự động đồng bộ tức thì trên TOÀN BỘ website!
// =========================================================================

(function () {
  const fallbackFooterHTML = `
  <!-- 12. MODERN LUXURY FOOTER (MAY MẮN & THỊNH VƯỢNG) -->
  <footer class="modern-footer">
    <div class="container">
      <div class="footer-four-columns">
        <!-- CỘT 1: THÔNG TIN PHÁP NHÂN DOANH NGHIỆP -->
        <div>
          <h4 class="footer-col-header">VẬN TẢI THÀNH HƯNG VN</h4>
          <p style="font-size: 12.5px; line-height: 1.65; margin-bottom: 14px; color: #ffe4e6;">
            <strong style="color: #fbbf24;">Disclaimer:</strong> Gần đây có nhiều công ty quảng cáo với tên THÀNH HƯNG trên thị trường, chúng tôi xin thông báo rõ, tên doanh nghiệp chúng tôi là <strong>CÔNG TY TNHH DV VẬN TẢI THÀNH HƯNG VN</strong> với Mã số thuế: <strong>0318673769</strong>, không liên quan đến công ty khác có tên THÀNH HƯNG và không chịu trách nhiệm với những tên công ty THÀNH HƯNG nào khác trên thị trường.
          </p>
          <p style="font-size: 13px; color: #ffe4e6; margin-bottom: 8px;">
            <i class="fa-solid fa-stamp" style="color: #f59e0b;"></i> GPKD Vận Tải: <strong>792623036/GPKDVT</strong>
          </p>
          <p style="font-size: 13px; color: #ffe4e6;">
            <i class="fa-solid fa-id-badge" style="color: #f59e0b;"></i> Mã Số Thuế: <strong>0318673769</strong>
          </p>
        </div>

        <!-- CỘT 2: 3 DỊCH VỤ CỐT LÕI -->
        <div>
          <h4 class="footer-col-header">3 DỊCH VỤ CỐT LÕI</h4>
          <ul class="footer-link-list">
            <li><a href="dich-vu-chuyen-nha.html"><i class="fa-solid fa-angle-right"></i> Dịch Vụ Chuyển Nhà</a></li>
            <li><a href="dich-vu-chuyen-van-phong.html"><i class="fa-solid fa-angle-right"></i> Dịch Vụ Chuyển Văn Phòng</a></li>
            <li><a href="dich-vu-chuyen-phong-tro.html"><i class="fa-solid fa-angle-right"></i> Dịch Vụ Chuyển Phòng Trọ</a></li>
            <li><a href="bang-gia.html"><i class="fa-solid fa-angle-right"></i> Cho Thuê Taxi Tải Chở Hàng</a></li>
            <li><a href="bang-gia.html"><i class="fa-solid fa-angle-right"></i> Tháo Lắp & Bốc Xếp Trọn Gói</a></li>
          </ul>
        </div>

        <!-- CỘT 3: CHÍNH SÁCH BẮT BUỘC -->
        <div>
          <h4 class="footer-col-header">CHÍNH SÁCH BẮT BUỘC</h4>
          <ul class="footer-link-list">
            <li><a href="gioi-thieu.html"><i class="fa-solid fa-angle-right"></i> Hồ Sơ Doanh Nghiệp</a></li>
            <li><a href="bang-gia.html"><i class="fa-solid fa-angle-right"></i> Bảng Giá Dịch Vụ</a></li>
            <li><a href="chinh-sach-bao-mat.html"><i class="fa-solid fa-angle-right"></i> Chính Sách Bảo Mật</a></li>
            <li><a href="dieu-khoan-boi-thuong.html"><i class="fa-solid fa-angle-right"></i> Cam Kết Đền Bù 100%</a></li>
            <li><a href="lien-he.html"><i class="fa-solid fa-angle-right"></i> Thông Tin Liên Hệ</a></li>
          </ul>
        </div>

        <!-- CỘT 4: KÊNH HỖ TRỢ 24/7 -->
        <div>
          <h4 class="footer-col-header">KÊNH HỖ TRỢ 24/7</h4>
          <ul class="footer-contact-items">
            <li><i class="fa-solid fa-location-dot" style="color: var(--primary); margin-top: 4px;"></i>
              <div>Trụ sở: Số 17, đường 4A ấp 5, KDC Intresco 13E, Xã Bình Hưng, Huyện Bình Chánh, TP.HCM</div>
            </li>
            <li><i class="fa-solid fa-phone-volume" style="color: var(--primary); margin-top: 4px;"></i>
              <div>Tổng đài miễn cước: <a href="tel:18009033" style="color: #fbbf24; font-weight: 800;">1800 9033</a></div>
            </li>
            <li><i class="fa-solid fa-mobile-screen" style="color: var(--primary); margin-top: 4px;"></i>
              <div>Hotline & Zalo: <a href="tel:0565606560" style="color: #fbbf24; font-weight: 800;">05 6560 6560</a></div>
            </li>
            <li><i class="fa-solid fa-envelope" style="color: var(--primary); margin-top: 4px;"></i>
              <div>Email: Taxitaithanhhungvn.vn@gmail.com</div>
            </li>
          </ul>
        </div>
      </div>

      <!-- THANH BẢN QUYỀN (CĂN GIỮA TRANG TRỌNG, ĐÃ LƯỢC BỎ CHỮ THỪA) -->
      <div class="footer-copyright-bar" style="justify-content: center; text-align: center;">
        <div>
          &copy; 2026 Bản quyền thuộc về <strong>CÔNG TY TNHH DV VẬN TẢI THÀNH HƯNG VN</strong>. Đã cấp GPKD Vận tải số 792623036/GPKDVT.
        </div>
      </div>
    </div>
  </footer>
  `;

  function injectFooter(html) {
    const placeholder = document.getElementById('site-footer') || document.querySelector('footer.modern-footer');
    if (placeholder) {
      placeholder.outerHTML = html;
    }
  }

  function loadFooter() {
    // 1. Thử fetch từ footer.html (nếu chạy qua web server / domain)
    fetch('footer.html')
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then(html => {
        injectFooter(html);
      })
      .catch(() => {
        // 2. Tự động dùng mẫu fallback tức thì (kể cả khi mở trực tiếp file://)
        injectFooter(fallbackFooterHTML);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
  } else {
    loadFooter();
  }
})();
