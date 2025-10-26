/* menu.js - wrapped in DOMContentLoaded to avoid null errors */
document.addEventListener("DOMContentLoaded", () => {
  /*************** DATA ***************/
  const DATA = {
    banner: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900",
    bizName: "كافيه الأصالة",
    bizAddr: "فرع : وسط البلد - القاهرة",
    phone: "+201009105861",
    categories: [
      { id: "hot-coffee", title: "قهوة ساخنة" },
      { id: "cold-coffee", title: "قهوة مثلجة" },
      { id: "tea", title: "شاي ومشروبات ساخنة" },
      { id: "juice", title: "عصائر طبيعية" },
      { id: "dessert", title: "حلويات" },
    ],
    items: [
      // قهوة ساخنة
      {
        id: 1001,
        cat: "hot-coffee",
        title: "إسبريسو",
        desc: "قهوة إيطالية مركزة",
        price: 25,
        img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400",
      },
      {
        id: 1002,
        cat: "hot-coffee",
        title: "أمريكانو",
        desc: "إسبريسو مع ماء ساخن",
        price: 30,
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400",
      },
      {
        id: 1003,
        cat: "hot-coffee",
        title: "كابتشينو",
        desc: "إسبريسو مع حليب مبخر ورغوة",
        price: 35,
        img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400",
      },
      {
        id: 1004,
        cat: "hot-coffee",
        title: "لاتيه",
        desc: "إسبريسو مع حليب ساخن",
        price: 35,
        img: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400",
      },
      {
        id: 1005,
        cat: "hot-coffee",
        title: "موكا",
        desc: "لاتيه مع شوكولاتة",
        price: 40,
        img: "https://tse3.mm.bing.net/th/id/OIP.qxQezJLNRAKTvikOqCoScgHaF1?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: 1006,
        cat: "hot-coffee",
        title: "قهوة تركية",
        desc: "قهوة تركية أصلية",
        price: 20,
        img: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400",
      },

      // قهوة مثلجة
      {
        id: 2001,
        cat: "cold-coffee",
        title: "آيس لاتيه",
        desc: "لاتيه مثلج مع ثلج",
        price: 40,
        img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400",
      },
      {
        id: 2002,
        cat: "cold-coffee",
        title: "آيس أمريكانو",
        desc: "أمريكانو مثلج",
        price: 35,
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400",
      },
      {
        id: 2003,
        cat: "cold-coffee",
        title: "فرابتشينو",
        desc: "قهوة مخفوقة مع ثلج",
        price: 45,
        img: "https://images.unsplash.com/photo-1662047102608-a6f2e492411f?w=400",
      },
      {
        id: 2004,
        cat: "cold-coffee",
        title: "كولد برو",
        desc: "قهوة باردة مخمرة",
        price: 40,
        img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400",
      },
      {
        id: 2005,
        cat: "cold-coffee",
        title: "آيس موكا",
        desc: "موكا مثلج بالشوكولاتة",
        price: 45,
        img: "https://images.unsplash.com/photo-1642647391072-6a2416f048e5?w=400",
      },

      // شاي ومشروبات ساخنة
      {
        id: 3001,
        cat: "tea",
        title: "شاي أسود",
        desc: "شاي سيلاني فاخر",
        price: 15,
        img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400",
      },
      {
        id: 3002,
        cat: "tea",
        title: "شاي أخضر",
        desc: "شاي أخضر صحي",
        price: 18,
        img: "https://tse3.mm.bing.net/th/id/OIP.fYVgzgPsRmSoQKaT43nY7AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: 3003,
        cat: "tea",
        title: "شاي بالنعناع",
        desc: "شاي مغربي بالنعناع",
        price: 20,
        img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
      },
      {
        id: 3004,
        cat: "tea",
        title: "هوت شوكليت",
        desc: "شوكولاتة ساخنة كريمية",
        price: 35,
        img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400",
      },
      {
        id: 3005,
        cat: "tea",
        title: "سحلب",
        desc: "سحلب بالمكسرات",
        price: 30,
        img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
      },

      // عصائر طبيعية
      {
        id: 4001,
        cat: "juice",
        title: "عصير برتقال",
        desc: "عصير برتقال طازج",
        price: 30,
        img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
      },
      {
        id: 4002,
        cat: "juice",
        title: "عصير مانجو",
        desc: "عصير مانجو طبيعي",
        price: 35,
        img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400",
      },
      {
        id: 4003,
        cat: "juice",
        title: "عصير فراولة",
        desc: "عصير فراولة طازج",
        price: 35,
        img: "https://tse3.mm.bing.net/th/id/OIP.FOZnNuL-eQXsfedXV5mAdwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: 4004,
        cat: "juice",
        title: "موهيتو",
        desc: "موهيتو بالنعناع والليمون",
        price: 40,
        img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400",
      },
      {
        id: 4005,
        cat: "juice",
        title: "سموذي",
        desc: "سموذي فواكه مشكلة",
        price: 45,
        img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400",
      },

      // حلويات
      {
        id: 5001,
        cat: "dessert",
        title: "تشيز كيك",
        desc: "تشيز كيك بالتوت",
        price: 50,
        img: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400",
      },
      {
        id: 5002,
        cat: "dessert",
        title: "براونيز",
        desc: "براونيز بالشوكولاتة",
        price: 40,
        img: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400",
      },
      {
        id: 5003,
        cat: "dessert",
        title: "تيراميسو",
        desc: "تيراميسو إيطالي",
        price: 55,
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
      },
      {
        id: 5004,
        cat: "dessert",
        title: "كوكيز",
        desc: "كوكيز بالشوكولاتة",
        price: 25,
        img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
      },
    ],
    hours: [
      { day: "السبت", state: "مغلق", times: "" },
      { day: "الأحد", state: "مفتوح", times: "من 11 ص الى 11 م" },
      { day: "الإثنين", state: "مفتوح", times: "من 11 ص الى 11 م" },
      { day: "الثلاثاء", state: "مفتوح", times: "من 11 ص الى 11 م" },
      { day: "الأربعاء", state: "مفتوح", times: "من 11 ص الى 11 م" },
      { day: "الخميس", state: "مفتوح", times: "مفتوح طول اليوم" },
      { day: "الجمعة", state: "مغلق", times: "" },
    ],
  };

  /*************** DOM refs (safe queries) ***************/
  const banner = document.getElementById("banner");
  const bizTitle = document.getElementById("bizTitle");
  const bizName = document.getElementById("bizName");
  const bizAddr = document.getElementById("bizAddr");
  const bizPhone = document.getElementById("bizPhone");
  const catbar = document.getElementById("catbar");
  const menuContent = document.getElementById("menuContent");
  const searchInput = document.getElementById("searchInput");

  // cart & UI
  const openCartBtn = document.getElementById("openCartBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const closeCart = document.getElementById("closeCart");
  const cartList = document.getElementById("cartList");
  const cartTotalEl = document.getElementById("cartTotal");
  const cartCountEl = document.getElementById("cartCount");

  // hours modal + small overlay modal
  const modalBack = document.getElementById("modalBack");
  const hoursList = document.getElementById("hoursList");
  const btnHours = document.getElementById("btnHours");

  // small status modal triggered by button in biz
  const btnStatus = document.getElementById("status-btn");
  const overlay = document.getElementById("overlay");
  const scheduleModal = document.getElementById("schedule-modal");
  const closeBtn = document.getElementById("close-btn");
  const todayStatus = document.getElementById("today-status");

  // contact modal
  const contactBack = document.getElementById("contactBack");
  const btnContact = document.getElementById("btnContact");
  const closeContact = document.getElementById("closeContact");
  const sendContact = document.getElementById("sendContact");

  // ensure essential elements exist
  if (!catbar || !menuContent) {
    console.error("Missing essential DOM elements (#catbar or #menuContent).");
    return;
  }

  /*************** set basic info ***************/
  if (bizTitle) bizTitle.textContent = DATA.bizName;
  if (bizName) bizName.textContent = DATA.bizName;
  if (bizAddr) bizAddr.textContent = DATA.bizAddr;
  if (bizPhone) bizPhone.textContent = DATA.phone;

  /*************** build category buttons ***************/
  catbar.innerHTML = "";
  DATA.categories.forEach((c, i) => {
    const b = document.createElement("button");
    b.className = "catbtn";
    b.dataset.cat = c.id;
    b.textContent = c.title;
    b.type = "button";
    b.addEventListener("click", () => {
      document.querySelectorAll(".catbtn").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      const sec = document.querySelector(`[data-section="${c.id}"]`);
      if (sec) window.scrollTo({ top: sec.offsetTop - 90, behavior: "smooth" });
    });
    catbar.appendChild(b);
    if (i === 0) b.classList.add("active");
  });

  /*************** render sections ***************/
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  }

  function renderSections() {
    menuContent.innerHTML = "";
    DATA.categories.forEach((cat) => {
      const sec = document.createElement("section");
      sec.className = "section";
      sec.dataset.section = cat.id;

      const t = document.createElement("div");
      t.className = "sec-title";
      t.textContent = cat.title;
      sec.appendChild(t);

      const list = DATA.items.filter((it) => it.cat === cat.id);
      list.forEach((it) => {
        const el = document.createElement("div");
        el.className = "item";
        el.innerHTML = `
          <div class="thumb"><img src="${it.img}" alt="${escapeHtml(it.title)}"></div>
          <div class="info">
            <h4>${escapeHtml(it.title)}</h4>
            <p>${escapeHtml(it.desc)}</p>
            <button class="addbtn" data-id="${it.id}">أضف إلى السلة</button>
          </div>
          <div class="price-col">
            <div class="price">${it.price} ج.م</div>
          </div>
        `;
        sec.appendChild(el);
      });

      menuContent.appendChild(sec);
    });
  }
  renderSections();

  /*************** ScrollSpy ***************/
  let sectionEls = Array.from(document.querySelectorAll(".section"));
  const catButtons = Array.from(document.querySelectorAll(".catbtn"));

  function onScrollSpy() {
    const offset = window.scrollY + 120;
    let current = sectionEls[0] || null;
    for (const s of sectionEls) {
      if (s.offsetTop <= offset) current = s;
      else break;
    }
    const id = current?.dataset?.section;
    catButtons.forEach((b) => b.classList.toggle("active", b.dataset.cat === id));
  }
  window.addEventListener("scroll", throttle(onScrollSpy, 120));
  window.addEventListener("resize", () => {
    sectionEls = Array.from(document.querySelectorAll(".section"));
  });

  onScrollSpy();

  /*************** Search overlay ***************/
  const openSearch = document.getElementById("openSearch");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearch = document.getElementById("closeSearch");
  const searchResults = document.getElementById("searchResults");

  if (openSearch && searchOverlay && closeSearch && searchInput && searchResults) {
    // Open search overlay
    openSearch.addEventListener("click", (e) => {
      e.stopPropagation();
      searchOverlay.classList.remove("hidden");
      searchInput.focus();
      renderAllItems();
    });

    // Close search overlay
    closeSearch.addEventListener("click", () => {
      searchOverlay.classList.add("hidden");
      searchInput.value = "";
      searchResults.innerHTML = "";
    });

    // Search functionality
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (q === "") {
        renderAllItems();
      } else {
        filterItems(q);
      }
    });

    // Render all items initially
    function renderAllItems() {
      searchResults.innerHTML = "";
      DATA.categories.forEach((cat) => {
        const items = DATA.items.filter((it) => it.cat === cat.id);
        if (items.length > 0) {
          const catSection = document.createElement("div");
          catSection.className = "search-category";
          catSection.innerHTML = `<h3>${cat.title}</h3>`;

          items.forEach((item) => {
            catSection.appendChild(createSearchItem(item));
          });

          searchResults.appendChild(catSection);
        }
      });
    }

    // Filter items based on search query
    function filterItems(query) {
      searchResults.innerHTML = "";
      const filtered = DATA.items.filter((item) => {
        const title = item.title.toLowerCase();
        const desc = item.desc.toLowerCase();
        return title.includes(query) || desc.includes(query);
      });

      if (filtered.length === 0) {
        searchResults.innerHTML = '<div class="no-results">لا توجد نتائج</div>';
      } else {
        filtered.forEach((item) => {
          searchResults.appendChild(createSearchItem(item));
        });
      }
    }

    // Create search item element
    function createSearchItem(item) {
      const el = document.createElement("div");
      el.className = "search-item";
      el.innerHTML = `
        <img src="${item.img}" alt="${escapeHtml(item.title)}">
        <div class="search-item-info">
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.desc)}</p>
          <div class="search-item-footer">
            <span class="search-item-price">${item.price} ج.م</span>
            <button class="search-add-btn" data-id="${item.id}">أضف</button>
          </div>
        </div>
      `;

      // Add to cart functionality
      el.querySelector(".search-add-btn").addEventListener("click", () => {
        addToCartById(item.id);
      });

      return el;
    }
  }

  /*************** CART (localStorage) ***************/
  let CART = JSON.parse(localStorage.getItem("branch_cart_v2") || "[]");
  function saveCart() {
    localStorage.setItem("branch_cart_v2", JSON.stringify(CART));
    updateCartUI();
  }
  function addToCartById(id) {
    const item = DATA.items.find((x) => x.id === id);
    if (!item) return;
    const found = CART.find((i) => i.id === id);
    if (found) found.qty++;
    else CART.push({ ...item, qty: 1 });
    saveCart();
    showToast("تمت الإضافة للسلة");
  }
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".addbtn");
    if (btn) {
      const id = Number(btn.dataset.id);
      addToCartById(id);
    }
  });

  function updateCartUI() {
    if (!cartList || !cartTotalEl || !cartCountEl) return;
    cartList.innerHTML = "";
    if (CART.length === 0) {
      cartList.innerHTML = '<div style="color:var(--muted);padding:12px">السلة فارغة</div>';
    } else {
      CART.forEach((ci) => {
        const div = document.createElement("div");
        div.className = "cart-item";

        // Build extras text
        const extrasText = ci.extras && ci.extras.length > 0 ? `<div style="color:var(--muted);font-size:12px">+ ${ci.extras.join(", ")}</div>` : "";
        const sizeText = ci.size
          ? `<span style="background:#f5f5f5;padding:2px 6px;border-radius:4px;font-size:11px;margin-left:4px">${ci.size}</span>`
          : "";

        div.innerHTML = `
          <img src="${ci.img}" alt="${escapeHtml(ci.title)}">
          <div style="flex:1">
            <div style="font-weight:700">${escapeHtml(ci.title)} ${sizeText}</div>
            ${extrasText}
            <div style="color:var(--muted);font-size:13px">${ci.qty} × ${ci.price} ج.م</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
            <div class="qty">
              <button data-action="minus" data-id="${ci.id}">-</button>
              <div style="padding:6px 8px;background:#fff;border-radius:6px">${ci.qty}</div>
              <button data-action="plus" data-id="${ci.id}">+</button>
            </div>
            <div style="font-weight:800">${(ci.qty * ci.price).toFixed(0)} ج.م</div>
          </div>
        `;
        cartList.appendChild(div);
      });

      cartList.querySelectorAll("button[data-action]").forEach((b) => {
        b.addEventListener("click", () => {
          const id = b.dataset.id;
          const action = b.dataset.action;
          const idx = CART.findIndex((x) => String(x.id) === String(id));
          if (idx === -1) return;
          if (action === "plus") CART[idx].qty++;
          else CART[idx].qty--;
          if (CART[idx].qty <= 0) CART.splice(idx, 1);
          saveCart();
        });
      });
    }
    const total = CART.reduce((s, i) => s + i.price * i.qty, 0);
    cartTotalEl.textContent = total.toFixed(0) + " ج.م";
    cartCountEl.textContent = CART.reduce((s, i) => s + i.qty, 0);
  }
  updateCartUI();

  // Listen for cart updates from modal
  window.addEventListener("cartUpdated", () => {
    CART = JSON.parse(localStorage.getItem("branch_cart_v2") || "[]");
    updateCartUI();
  });

  // cart open/close
  if (openCartBtn && cartDrawer) {
    openCartBtn.addEventListener("click", () => {
      cartDrawer.classList.toggle("open");
      cartDrawer.setAttribute("aria-hidden", !cartDrawer.classList.contains("open"));
    });
  }
  if (closeCart && cartDrawer) {
    closeCart.addEventListener("click", () => {
      cartDrawer.classList.remove("open");
      cartDrawer.setAttribute("aria-hidden", "true");
    });
  }
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (CART.length === 0) {
        Swal.fire({
          icon: "warning",
          title: "السلة فارغة",
          text: "من فضلك أضف منتجات للسلة أولاً",
          confirmButtonText: "حسناً",
          confirmButtonColor: "#e74c3c",
        });
        return;
      }

      const summary = CART.map((i) => `${i.qty}× ${i.title}`).join(" | ");
      const total = cartTotalEl.textContent;

      Swal.fire({
        title: "تأكيد الطلب",
        html: `
          <div style="text-align: right; direction: rtl;">
            <p style="font-size: 16px; margin-bottom: 10px;">هل تريد إتمام الطلب؟</p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
              <p style="font-weight: bold; color: #e74c3c; margin-bottom: 10px;">ملخص الطلب:</p>
              ${CART.map(
          (item) => `
                <div style="display: flex; justify-content: space-between; margin: 8px 0; padding: 8px; background: white; border-radius: 6px;">
                  <span>${item.qty}× ${item.title}</span>
                  <span style="color: #e74c3c; font-weight: bold;">${(item.qty * item.price).toFixed(0)} ج.م</span>
                </div>
              `
        ).join("")}
              <hr style="margin: 10px 0;">
              <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold;">
                <span>الإجمالي:</span>
                <span style="color: #16a34a;">${total}</span>
              </div>
            </div>
          </div>
        `,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: '<i class="fab fa-whatsapp"></i> إرسال عبر واتساب',
        cancelButtonText: "إلغاء",
        confirmButtonColor: "#25d366",
        cancelButtonColor: "#6b7280",
        reverseButtons: true,
        customClass: {
          popup: "rtl-popup",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `https://wa.me/201040026539?text=${encodeURIComponent("طلب: " + summary + " - الإجمالي: " + total)}`;

          window.open(url, "_blank");

          Swal.fire({
            icon: "success",
            title: "تم إرسال الطلب!",
            text: "شكراً لك، سيتم التواصل معك قريباً",
            confirmButtonText: "حسناً",
            confirmButtonColor: "#16a34a",
            timer: 3000,
          });

          CART = [];
          saveCart();
          if (cartDrawer) cartDrawer.classList.remove("open");
        }
      });
    });
  }

  /*************** Hours modal (big one) ***************/
  if (btnHours && modalBack && hoursList) {
    btnHours.addEventListener("click", () => {
      renderHours();
      modalBack.classList.add("open");
      modalBack.setAttribute("aria-hidden", "false");
    });
  }
  const closeModalBtn = document.getElementById("closeModal");
  if (closeModalBtn && modalBack) {
    closeModalBtn.addEventListener("click", () => {
      modalBack.classList.remove("open");
      modalBack.setAttribute("aria-hidden", "true");
    });
  }
  if (modalBack) {
    modalBack.addEventListener("click", (e) => {
      if (e.target === modalBack) {
        modalBack.classList.remove("open");
        modalBack.setAttribute("aria-hidden", "true");
      }
    });
  }
  function renderHours() {
    if (!hoursList) return;
    hoursList.innerHTML = "";
    DATA.hours.forEach((h) => {
      const div = document.createElement("div");
      div.className = "hours-item " + (h.state === "مغلق" ? "closed" : h.times.includes("مفتوح") ? "openall" : "");
      div.innerHTML = `<div>${h.day}</div><div style="text-align:left">${h.state === "مغلق" ? '<strong style="color:var(--accent-2)">مغلق</strong>' : h.times
        }</div>`;
      hoursList.appendChild(div);
    });
  }

  /*************** Small status modal (center overlay) ***************/
  // بيانات مواعيد العمل
  const workingHours = [
    { day: "الأحد", open: "12:00 م", close: "12:00 ص" },
    { day: "الاثنين", open: "12:00 م", close: "12:00 ص" },
    { day: "الثلاثاء", open: "12:00 م", close: "12:00 ص" },
    { day: "الأربعاء", open: "12:00 م", close: "12:00 ص" },
    { day: "الخميس", open: "12:00 م", close: "1:00 ص" },
    { day: "الجمعة", open: "1:00 م", close: "1:00 ص" },
    { day: "السبت", open: "12:00 م", close: "12:00 ص" },
  ];

  // عناصر الزر والمودال
  const statusBtn = document.getElementById("status-btn");
  const statusBack = document.getElementById("statusBack");
  const closeStatus = document.getElementById("closeStatus");
  const statusList = document.getElementById("statusList");

  // الحصول على اليوم الحالي
  const todayIndex = new Date().getDay(); // الأحد=0

  // فتح المودال
  if (statusBtn) {
    statusBtn.addEventListener("click", () => {
      statusBack.style.display = "flex";
      setTimeout(() => statusBack.classList.add("show"), 10);
      renderStatus();
    });
  }

  // إغلاق المودال
  if (closeStatus) {
    closeStatus.addEventListener("click", () => {
      statusBack.classList.remove("show");
      setTimeout(() => (statusBack.style.display = "none"), 300);
    });
  }

  // الضغط على الخلفية يقفل المودال
  statusBack.addEventListener("click", (e) => {
    if (e.target === statusBack) {
      statusBack.classList.remove("show");
      setTimeout(() => (statusBack.style.display = "none"), 300);
    }
  });

  // عرض الأيام
  function renderStatus() {
    statusList.innerHTML = "";
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    workingHours.forEach((day, index) => {
      const li = document.createElement("div");
      li.className = "hours-item";

      // تحديد اليوم الحالي
      if (index === todayIndex) li.classList.add("today");

      li.innerHTML = `
      <span>${day.day}</span>
      <span>${day.open} - ${day.close}</span>
    `;

      statusList.appendChild(li);
    });

    // حساب حالة اليوم الحالي
    const today = workingHours[todayIndex];
    const [openH, openM] = today.open.replace("م", "").replace("ص", "").split(":").map(Number);
    const [closeH, closeM] = today.close.replace("م", "").replace("ص", "").split(":").map(Number);

    // تحويل إلى 24 ساعة
    let open24 = openH + (today.open.includes("م") && openH !== 12 ? 12 : 0);
    let close24 = closeH + (today.close.includes("م") && closeH !== 12 ? 12 : 0);
    if (close24 <= open24) close24 += 24; // لو بعد منتصف الليل

    const now24 = currentHour + currentMinute / 60;
    const isOpen = now24 >= open24 && now24 < close24;

    statusBtn.textContent = isOpen ? "مفتوح" : "مغلق";
    statusBtn.style.background = isOpen ? "#e8fff1" : "#fff5f5";
    statusBtn.style.color = isOpen ? "#0a9e4f" : "#e53935";
    statusBtn.style.fontWeight = "600";
  }

  // set today status text in the small modal
  const daysNames = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  if (todayStatus) todayStatus.textContent = `اليوم ${daysNames[jsDay]}: ${openNow ? "المطعم مفتوح ✅" : "المطعم مغلق ❌"}`;

  /*************** Contact modal handlers ***************/
  if (btnContact && contactBack) {
    btnContact.addEventListener("click", () => {
      contactBack.style.display = "flex";
      contactBack.setAttribute("aria-hidden", "false");
    });
  }
  if (closeContact && contactBack) {
    closeContact.addEventListener("click", () => {
      contactBack.style.display = "none";
      contactBack.setAttribute("aria-hidden", "true");
    });
  }
  if (sendContact) {
    sendContact.addEventListener("click", () => {
      const name = document.getElementById("cName")?.value.trim();
      const phone = document.getElementById("cPhone")?.value.trim();
      const msg = document.getElementById("cMsg")?.value.trim();
      if (!name || !phone) {
        alert("من فضلك اكتب الاسم و رقم الهاتف");
        return;
      }
      const wa = `https://wa.me/${DATA.phone.replace(/\D/g, "")}?text=${encodeURIComponent("رسالة من: " + name + "\n" + phone + "\n\n" + msg)}`;
      window.open(wa, "_blank");
      document.getElementById("cName").value = "";
      document.getElementById("cPhone").value = "";
      document.getElementById("cMsg").value = "";
      contactBack.style.display = "none";
    });
  }

  /*************** small helpers ***************/
  function showToast(msg) {
    const t = document.createElement("div");
    t.textContent = msg;
    t.style.position = "fixed";
    t.style.left = "50%";
    t.style.bottom = "90px";
    t.style.transform = "translateX(-50%)";
    t.style.background = "rgba(15,23,42,0.9)";
    t.style.color = "#fff";
    t.style.padding = "8px 14px";
    t.style.borderRadius = "10px";
    t.style.zIndex = 120;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1400);
  }

  function throttle(fn, wait) {
    let last = 0;
    return function (...a) {
      const now = Date.now();
      if (now - last > wait) {
        last = now;
        fn.apply(this, a);
      }
    };
  }

  // expose sectionEls and DATA for debugging and modal access
  window.sectionEls = sectionEls;
  window.DATA = DATA;
  // ensure scrollspy recalculation after images load
  window.addEventListener("load", () => {
    sectionEls = Array.from(document.querySelectorAll(".section"));
    onScrollSpy();
  });
});
// swipper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 4,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed: 800,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
//
const menuBtn = document.getElementById("menuToggle");
const dropdown = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

// يغلق القائمة لما تضغط في أي مكان خارجها
document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

// hours
// 🔹 Collapsed menu toggle
const menuToggle = document.getElementById("menuToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

menuToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

// 🔹 Working hours modal
const hoursData = [
  { day: "السبت", open: null, close: null },
  { day: "الأحد", open: "11 ص", close: "11 م" },
  { day: "الإثنين", open: "11 ص", close: "11 م" },
  { day: "الثلاثاء", open: "11 ص", close: "11 م" },
  { day: "الأربعاء", open: "11 ص", close: "11 م" },
  { day: "الخميس", open: "11 ص", close: "11 م" },
  { day: "الجمعة", open: null, close: null },
];

const btnHours = document.getElementById("btnHours");
const hoursModal = document.getElementById("hoursModal");
const closeHours = document.getElementById("closeHours");
const hoursList = document.getElementById("hoursList");

btnHours.addEventListener("click", () => {
  dropdownMenu.classList.remove("show"); // يغلق القائمة أولاً
  hoursList.innerHTML = "";
  const today = new Date().getDay(); // الأحد = 0

  hoursData.forEach((h, i) => {
    const li = document.createElement("li");
    li.classList.add("hours-item");

    const d = document.createElement("span");
    d.textContent = h.day;
    const t = document.createElement("span");

    if (!h.open) {
      t.textContent = "مغلق";
      li.classList.add("closed");
    } else {
      t.textContent = `من ${h.open} إلى ${h.close}`;
    }

    if (i === today) {
      li.classList.add("today");
    }

    li.appendChild(d);
    li.appendChild(t);
    hoursList.appendChild(li);
  });

  hoursModal.classList.add("show");
});

closeHours.addEventListener("click", () => hoursModal.classList.remove("show"));
hoursModal.addEventListener("click", (e) => {
  if (e.target === hoursModal) hoursModal.classList.remove("show");
});
// scroll contact
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Share Modal functionality
const openShare = document.getElementById("openShare");
const shareOverlay = document.getElementById("shareOverlay");
const closeShare = document.getElementById("closeShare");
const copyLink = document.getElementById("copyLink");
const shareLink = document.getElementById("shareLink");

if (openShare && shareOverlay && closeShare) {
  // Open share modal
  openShare.addEventListener("click", () => {
    shareOverlay.classList.remove("hidden");
  });

  // Close share modal
  closeShare.addEventListener("click", () => {
    shareOverlay.classList.add("hidden");
  });

  // Close when clicking outside
  shareOverlay.addEventListener("click", (e) => {
    if (e.target === shareOverlay) {
      shareOverlay.classList.add("hidden");
    }
  });

  // Copy link functionality
  if (copyLink && shareLink) {
    copyLink.addEventListener("click", () => {
      const link = shareLink.textContent;
      navigator.clipboard.writeText(link).then(() => {
        const originalIcon = copyLink.innerHTML;
        copyLink.innerHTML = '<i class="fa fa-check"></i>';
        copyLink.style.background = "#16a34a";

        setTimeout(() => {
          copyLink.innerHTML = originalIcon;
          copyLink.style.background = "";
        }, 2000);
      });
    });
  }
}

// Share via different platforms
function shareVia(platform) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Check out this menu!");

  const shareUrls = {
    whatsapp: `https://wa.me/?text=${text}%20${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    telegram: `https://t.me/share/url?url=${url}&text=${text}`,
    email: `mailto:?subject=${text}&body=${url}`,
    copy: null,
  };

  if (platform === "copy") {
    const link = document.getElementById("shareLink").textContent;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "تم النسخ!",
          text: "تم نسخ الرابط إلى الحافظة",
          confirmButtonText: "حسناً",
          confirmButtonColor: "#16a34a",
          timer: 2000,
          timerProgressBar: true,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "فشل نسخ الرابط",
          confirmButtonText: "حسناً",
          confirmButtonColor: "#e74c3c",
        });
      });
  } else if (shareUrls[platform]) {
    window.open(shareUrls[platform], "_blank");
  }
}

// Image Lightbox for Logos
(function () {
  const imageLightbox = document.getElementById("imageLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeLightbox = document.getElementById("closeLightbox");

  // Add click event to all clickable logos
  document.querySelectorAll(".logo-clickable").forEach((logo) => {
    logo.addEventListener("click", function () {
      const img = this.querySelector("img") || this;
      const imgSrc = img.src || img.getAttribute("src");

      if (imgSrc && lightboxImage && imageLightbox) {
        lightboxImage.src = imgSrc;
        imageLightbox.classList.remove("hidden");
        document.body.style.overflow = "hidden"; // Prevent scrolling
      }
    });
  });

  // Close lightbox
  if (closeLightbox && imageLightbox) {
    closeLightbox.addEventListener("click", () => {
      imageLightbox.classList.add("hidden");
      document.body.style.overflow = ""; // Restore scrolling
    });

    // Close on background click
    imageLightbox.addEventListener("click", (e) => {
      if (e.target === imageLightbox) {
        imageLightbox.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });

    // Close on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !imageLightbox.classList.contains("hidden")) {
        imageLightbox.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });
  }
})();

// Hide catbar when reaching footer section
(function () {
  const catbarWrap = document.querySelector(".catbar-wrap");
  const contactSection = document.querySelector(".contact-section");

  if (!catbarWrap || !contactSection) return;

  function checkCatbarVisibility() {
    const contactRect = contactSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Hide catbar when contact section is visible in viewport
    if (contactRect.top < windowHeight && contactRect.bottom > 0) {
      catbarWrap.style.opacity = "0";
      catbarWrap.style.pointerEvents = "none";
      catbarWrap.style.transform = "translateY(-20px)";
    } else {
      catbarWrap.style.opacity = "1";
      catbarWrap.style.pointerEvents = "auto";
      catbarWrap.style.transform = "translateY(0)";
    }
  }

  // Add transition to catbar-wrap
  catbarWrap.style.transition = "opacity 0.3s ease, transform 0.3s ease";

  // Check on scroll
  window.addEventListener("scroll", checkCatbarVisibility);

  // Check on load
  checkCatbarVisibility();
})();

// Loading Screen
(function () {
  const loadingScreen = document.getElementById("loadingScreen");

  if (!loadingScreen) return;

  // Hide loading screen when page is fully loaded
  window.addEventListener("load", () => {
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
    }, 500); // Small delay for smooth transition
  });

  // Fallback: Hide after 3 seconds even if load event doesn't fire
  setTimeout(() => {
    if (!loadingScreen.classList.contains("hidden")) {
      loadingScreen.classList.add("hidden");
    }
  }, 3000);
});

// Smooth Category Scroll Spy
(function () {
  const catButtons = document.querySelectorAll('.catbtn');
  const sections = document.querySelectorAll('[data-section]');

  if (!catButtons.length || !sections.length) return;

  let isScrolling = false;
  let scrollTimeout;

  // Update active category based on scroll position
  function updateActiveCategory() {
    if (isScrolling) return; // Don't update during manual scroll

    const scrollPos = window.scrollY + 150; // Offset for sticky header

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.dataset.section;

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        catButtons.forEach(btn => {
          if (btn.dataset.cat === sectionId) {
            if (!btn.classList.contains('active')) {
              catButtons.forEach(b => b.classList.remove('active'));
              btn.classList.add('active');

              // Smooth scroll the category button into view
              btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
          }
        });
      }
    });
  }

  // Handle manual category clicks
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      isScrolling = true;
      clearTimeout(scrollTimeout);

      // Reset after scroll completes
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 1000);
    });
  });

  // Throttle scroll events for performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveCategory();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial check
  updateActiveCategory();
})();

// Fade Up Animation on Scroll for Categories
(function () {
  // Wait for sections to be rendered
  setTimeout(() => {
    const sections = document.querySelectorAll('.section[data-section]');

    if (!sections.length) {
      console.log('No sections found for fade animation');
      return;
    }

    console.log(`Found ${sections.length} sections for fade animation`);

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          console.log('Section faded in:', entry.target.dataset.section);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  }, 1000);
})();
