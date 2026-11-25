// Main Presentation & Interactive Engine for Thanh Hung VN
// CÔNG TY TNHH DV VẬN TẢI THÀNH HƯNG VN

document.addEventListener('DOMContentLoaded', () => {
  // 0. SHARED GLOBAL FOOTER COMPONENT (TỰ ĐỘNG NẠP VÀ ĐỒNG BỘ CHO MỌI TRANG)
  const sharedFooterHTML = `
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

  const footerPlaceholder = document.getElementById('site-footer');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = sharedFooterHTML;

    // Tự động kiểm tra cập nhật mới nhất từ file footer.html nếu chạy qua web server
    fetch('footer.html')
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then(html => {
        const curFooter = document.querySelector('footer.modern-footer');
        if (curFooter && html.trim().length > 100) {
          curFooter.outerHTML = html;
        }
      })
      .catch(() => {});
  }

  // 1. Mobile Navigation Toggle
  const toggleBtn = document.querySelector('.mobile-nav-toggle') || document.querySelector('.mobile-toggle');
  const navbar = document.querySelector('.nav-pill-wrapper') || document.querySelector('.navbar');

  if (toggleBtn && navbar) {
    toggleBtn.addEventListener('click', () => {
      navbar.classList.toggle('mobile-open');
      navbar.classList.toggle('open');
    });
  }

  // 2. Scroll Reveal Animations (IntersectionObserver for Keynote Presentation feel)
  const revealElements = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // 3. Hero Presentation Switcher (Chuyển Nhà / Văn Phòng / Phòng Trọ)
  const heroTabs = document.querySelectorAll('.hero-pres-tab-btn');
  const heroShowcaseCard = document.getElementById('heroShowcaseCard');

  const heroShowcaseData = {
    'chuyen-nha': {
      img: 'assets/img/xe-chuyen-van-phong-trang.jpg',
      badge: '<i class="fa-solid fa-house-chimney"></i> Chuyển Nhà Trọn Gói',
      badgeBg: 'linear-gradient(135deg, #c5161d 0%, #b91c1c 100%)',
      title: 'Chuyển Nhà Trọn Gói Nhà Phố &amp; Chung Cư',
      desc: 'Bọc lót màng PE 5 lớp, tháo lắp tủ quần áo, giường, máy lạnh. Cam kết bảo hiểm 100% tài sản.',
      highlight: '<i class="fa-solid fa-bolt"></i> Khảo Sát Miễn Phí',
      link: 'dich-vu-chuyen-nha.html'
    },
    'chuyen-van-phong': {
      img: 'assets/img/chuyen-van-phong-toa-nha.jpg',
      badge: '<i class="fa-solid fa-building"></i> Doanh Nghiệp &amp; Tòa Nhà',
      badgeBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
      title: 'Di Dời Văn Phòng, Server &amp; Hồ Sơ Bảo Mật',
      desc: 'Thi công ban đêm và cuối tuần không gián đoạn kinh doanh. Đầy đủ hợp đồng kinh tế và xuất hóa đơn VAT.',
      highlight: '<i class="fa-solid fa-file-shield"></i> Hợp Đồng &amp; VAT',
      link: 'dich-vu-chuyen-van-phong.html'
    },
    'phong-tro': {
      img: 'assets/img/xe-van-chuyen-tro.jpg',
      badge: '<i class="fa-solid fa-boxes-packing"></i> Chuyển Phòng Trọ',
      badgeBg: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      title: 'Chuyển Phòng Trọ Sinh Viên &amp; Công Nhân Viên',
      desc: 'Xe tải nhỏ luồn lách hẻm sâu TP.HCM. Bác tài nhiệt tình hỗ trợ khuân vác chu đáo, không lo mưa nắng.',
      highlight: '<i class="fa-solid fa-shield-check"></i> Tiết Kiệm &amp; Nhanh',
      link: 'dich-vu-chuyen-phong-tro.html'
    }
  };

  if (heroTabs.length > 0 && heroShowcaseCard) {
    heroTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        heroTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const key = tab.getAttribute('data-target');
        const data = heroShowcaseData[key];
        if (data) {
          heroShowcaseCard.style.opacity = '0';
          heroShowcaseCard.style.transform = 'translateY(10px)';

          setTimeout(() => {
            heroShowcaseCard.innerHTML = `
              <div class="hero-image-stage">
                <img src="${data.img}" alt="${data.title}" class="hero-main-photo">
                <div class="hero-card-tag lucky-tag" style="background: ${data.badgeBg};">
                  ${data.badge}
                </div>
              </div>
              <div class="hero-card-content">
                <div class="hero-card-title">${data.title}</div>
                <p class="hero-card-desc">${data.desc}</p>
                <div class="hero-card-footer">
                  <a href="${data.link}" class="hero-card-link">
                    <span>Xem Chi Tiết Quy Trình</span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                  <span class="hero-card-highlight">
                    ${data.highlight}
                  </span>
                </div>
              </div>
            `;
            heroShowcaseCard.style.opacity = '1';
            heroShowcaseCard.style.transform = 'translateY(0)';
          }, 200);
        }
      });
    });
  }

  // 4. Fleet Presentation Switcher (Technical Specs, No Rigid Prices)
  const fleetBtns = document.querySelectorAll('.fleet-btn');
  const fleetDisplay = document.getElementById('fleetShowcaseDisplay');

  const fleetData = {
    '500kg': {
      title: 'Xe Tải 500Kg (Thùng Kín & Bạt)',
      img: 'assets/img/xe-van-chuyen-tro.jpg',
      dimension: '2.0m x 1.3m x 1.3m',
      payload: '500 kg',
      equip: 'Thùng kín chống nước, bọc lót chống trầy xước',
      tracking: 'Định vị GPS toàn trình 24/7, giám sát hành trình',
      suitable: 'Phòng trọ 1 người, sinh viên, chở tủ lạnh mini, máy giặt, 5-7 thùng đồ',
      street: 'Vào tận hẻm nhỏ sâu, di chuyển nhanh trong nội đô giờ cao điểm',
      policy: 'Báo giá linh hoạt theo lộ trình & khối lượng thực tế'
    },
    '1ton': {
      title: 'Xe Tải 1 Tấn (Đa Dụng Phổ Biến Nhất)',
      img: 'assets/img/xe-chuyen-van-phong-trang.jpg',
      dimension: '3.0m x 1.6m x 1.6m',
      payload: '1.000 kg',
      equip: 'Thùng bạt thông thoáng hoặc thùng kín inox sạch sẽ',
      tracking: 'Định vị GPS kết nối trực tiếp chuyên viên điều phối',
      suitable: 'Căn hộ chung cư 1 phòng ngủ, đồ đạc gia đình vừa phải, bàn làm việc',
      street: 'Lưu thông nội ô thuận tiện, đậu vừa hầm chung cư chiều cao 1.9m - 2.2m',
      policy: 'Báo giá trọn gói cạnh tranh, hỗ trợ khảo sát tận nơi'
    },
    '1.5ton': {
      title: 'Xe Tải 1.5 Tấn (Rộng Rãi Chống Trầy)',
      img: 'assets/img/chuyen-do-ra-xe-tai.jpg',
      dimension: '3.4m x 1.7m x 1.7m',
      payload: '1.500 kg',
      equip: 'Sàn xe chống trượt, trang bị mền lót & dây đai chằng neo',
      tracking: 'Giám sát hành trình liên tục, cập nhật vị trí xe cho khách hàng',
      suitable: 'Nhà 2 phòng ngủ, bộ sofa lớn, tủ lạnh side-by-side, giường nệm 1m8',
      street: 'Chở được nhiều đồ cồng kềnh, chuyển liên tỉnh TP.HCM - Bình Dương - Đồng Nai',
      policy: 'Tối ưu chi phí theo từng tuyến đường, cam kết không phụ phí'
    },
    '2ton': {
      title: 'Xe Tải 2 Tấn (Thùng Dài 4.3m & 6.0m)',
      img: 'assets/img/xe-chuyen-nha-biet-thu.jpg',
      dimension: '4.3m x 1.8m x 1.8m',
      payload: '2.000 kg',
      equip: 'Trang bị bửng nâng thủy lực tiện dụng, nâng hạ đồ nặng an toàn',
      tracking: 'Định vị hành trình GPS vệ tinh, lưu thông thuận tiện các trục chính',
      suitable: 'Nhà phố 2-3 lầu, biệt thự, văn phòng công ty 10 - 20 nhân sự',
      street: 'Chở trọn vẹn khối lượng đồ lớn trong một chuyến đi duy nhất',
      policy: 'Báo giá nhanh qua Hotline 1800 9033 hoặc Zalo'
    },
    '5ton': {
      title: 'Xe Tải 5 Tấn (Vận Chuyển Khối Lượng Lớn)',
      img: 'assets/img/chuyen-van-phong-toa-nha.jpg',
      dimension: '6.0m x 2.1m x 2.2m',
      payload: '5.000 kg',
      equip: 'Thùng xe siêu dài, chịu tải cao, bửng nâng tải trọng lớn',
      tracking: 'Hệ thống GPS cao cấp, giám sát hành trình đường dài Bắc - Nam',
      suitable: 'Chuyển văn phòng lớn, kho xưởng, máy móc công nghiệp, chuyển liên tỉnh',
      street: 'Chạy đường vành đai, cao tốc liên tỉnh với giấy phép vận tải chuẩn mực',
      policy: 'Hợp đồng kinh tế doanh nghiệp, đầy đủ hóa đơn VAT điện tử'
    }
  };

  if (fleetBtns.length > 0 && fleetDisplay) {
    fleetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        fleetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const key = btn.getAttribute('data-truck');
        const data = fleetData[key];
        if (data) {
          fleetDisplay.style.opacity = '0';
          setTimeout(() => {
            fleetDisplay.innerHTML = `
              <div class="fleet-photo-box">
                <img src="${data.img}" alt="${data.title}">
                <div style="position: absolute; bottom: 12px; left: 12px; background: rgba(15,23,42,0.85); backdrop-filter: blur(8px); color: #fff; padding: 6px 14px; border-radius: var(--radius-pill); font-size: 13px; font-weight: 800;">
                  <i class="fa-solid fa-truck"></i> ${data.title}
                </div>
              </div>
              <div class="fleet-info-box">
                <div class="fleet-title">${data.title}</div>
                <div class="fleet-spec-list">
                  <div class="fleet-spec-item">
                    <strong>Kích thước thùng (DxRxC):</strong>
                    <span>${data.dimension}</span>
                  </div>
                  <div class="fleet-spec-item">
                    <strong>Tải trọng cho phép:</strong>
                    <span>${data.payload}</span>
                  </div>
                  <div class="fleet-spec-item">
                    <strong>Trang bị an toàn:</strong>
                    <span style="color: #0284c7;">${data.equip}</span>
                  </div>
                  <div class="fleet-spec-item">
                    <strong>Định vị giám sát:</strong>
                    <span style="color: #15803d;">${data.tracking}</span>
                  </div>
                </div>
                <div style="font-size: 13.5px; line-height: 1.6; color: #334155;">
                  <p style="margin-bottom: 6px;"><strong>Phù hợp:</strong> ${data.suitable}</p>
                  <p style="margin-bottom: 6px;"><strong>Lộ trình:</strong> ${data.street}</p>
                  <p><strong style="color: #c5161d;">Chính sách cước:</strong> ${data.policy}</p>
                </div>
                <div style="display: flex; gap: 12px; margin-top: 8px;">
                  <a href="tel:18009033" class="btn-primary-call" style="background: #c5161d; text-decoration: none; padding: 10px 22px; border-radius: 8px;">
                    <i class="fa-solid fa-phone"></i> Gọi Nhận Báo Giá: 1800 9033
                  </a>
                  <a href="https://zalo.me/0565606560" target="_blank" class="btn-outline-learn" style="text-decoration: none; padding: 10px 20px; border-radius: 8px; border-color: #0284c7; color: #0284c7;">
                    <i class="fa-solid fa-comments"></i> Báo Giá Qua Zalo
                  </a>
                </div>
              </div>
            `;
            fleetDisplay.style.opacity = '1';
          }, 180);
        }
      });
    });
  }

  // 5. Interactive Fast Quotation Form Handler (Gửi thẳng về email Taxitaithanhhungvn.vn@gmail.com)
  const quoteForms = document.querySelectorAll('#quickQuoteForm');
  quoteForms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Kiểm tra số điện thoại bắt buộc
      const phoneInput = form.querySelector('#quotePhone') || form.querySelector('input[name="phone"]') || form.querySelector('input[name="Số điện thoại"]') || form.querySelector('input[name="Số Điện Thoại Khách"]');
      const phone = phoneInput ? phoneInput.value.trim() : '';

      if (!phone) {
        alert('Vui lòng nhập số điện thoại để chuyên viên gọi tư vấn báo giá!');
        if (phoneInput) phoneInput.focus();
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang gửi yêu cầu...';
      }

      const formData = new FormData(form);

      // Gửi dữ liệu về email qua endpoint FormSubmit
      fetch('https://formsubmit.co/ajax/Taxitaithanhhungvn.vn@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        let resultBox = form.querySelector('#quoteResultBox') || document.getElementById('quoteResultBox');
        if (!resultBox) {
          resultBox = document.createElement('div');
          resultBox.id = 'quoteResultBox';
          form.appendChild(resultBox);
        }

        resultBox.innerHTML = `
          <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border: 2px solid #22c55e; padding: 22px 18px; border-radius: 14px; margin-top: 18px; text-align: center; box-shadow: 0 8px 24px rgba(34, 197, 94, 0.22); animation: fadeIn 0.3s ease;">
            <div style="font-size: 32px; color: #16a34a; margin-bottom: 8px;"><i class="fa-solid fa-circle-check"></i></div>
            <h4 style="font-size: 17.5px; color: #15803d; font-weight: 800; margin-bottom: 8px;">ĐÃ GỬI YÊU CẦU BÁO GIÁ THÀNH CÔNG!</h4>
            <p style="font-size: 13.5px; color: #334155; line-height: 1.6; margin-bottom: 14px;">
              Thông tin đặt xe của Quý khách (SĐT: <strong>${phone}</strong>) đã được chuyển thẳng tới email tiếp nhận <strong>Taxitaithanhhungvn.vn@gmail.com</strong>. Chuyên viên sẽ gọi lại ngay để gửi báo giá chi tiết.
            </p>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
              <a href="tel:18009033" style="display: inline-flex; align-items: center; gap: 8px; background: #c5161d; color: #fff; padding: 10px 22px; border-radius: 9999px; font-weight: 800; font-size: 13.5px; text-decoration: none;">
                <i class="fa-solid fa-phone-volume"></i> Gọi Ngay: 1800 9033 (Miễn Cước)
              </a>
              <a href="https://zalo.me/0565606560" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: #0284c7; color: #fff; padding: 10px 22px; border-radius: 9999px; font-weight: 800; font-size: 13.5px; text-decoration: none;">
                <i class="fa-solid fa-comments"></i> Chat Zalo: 05 6560 6560
              </a>
            </div>
          </div>
        `;

        form.reset();
      })
      .catch(err => {
        // Fallback gửi form truyền thống nếu fetch bị chặn
        form.submit();
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;
        }
      });
    });
  });

  // 6. FAQ Accordion Interaction
  const faqButtons = document.querySelectorAll('.faq-btn');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentItem = btn.parentElement;
      const isActive = parentItem.classList.contains('active');

      // Close other accordions
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        parentItem.classList.add('active');
      }
    });
  });

  // 7. KPI Counter Animation
  const counterElements = document.querySelectorAll('.stat-number');
  if ('IntersectionObserver' in window && counterElements.length > 0) {
    let countersStarted = false;
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          counterElements.forEach(el => {
            el.style.transition = 'transform 0.4s ease, color 0.4s ease';
            el.style.transform = 'scale(1.08)';
            setTimeout(() => el.style.transform = 'scale(1)', 400);
          });
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(el => counterObserver.observe(el));
  }
});
