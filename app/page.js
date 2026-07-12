'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // ---- Product data + detail modal ----
    (function () {
      var WA = '919837493926';
      var PRODUCTS = {
        oil: {
          name: 'Hiqmat Shifa Oil',
          ur: 'حکمت شفا آئل',
          role: 'Bahari Sukoon · Topical Oil',
          img: '/hikmat-shifa-oil-solo.png',
          size: '30 ml',
          form: 'Bahar lagayein',
          price: '₹699',
          was: '₹899',
          desc: 'Ek Unani herbal tel jo sirf bahari istemaal ke liye taiyar kiya gaya hai. Cold-pressed aur 100% qudrati — mutasira hisse ko foran thandak, sukoon aur aaram deta hai. Na koi chemical, na steroid.',
          ing: ['Roghan Kunjad — Til ka tel', 'Post Anjeer — Anjeer chhaal', 'Zafran — Kesar', 'Babuna — Chamomile', 'Roghan-e-Gul — Gulab ka tel', 'Mom-e-Khaam — Beeswax base'],
          use: 'Subah aur raat, saaf haath se mutasira bahari hisse par halke se lagayein. Behtareen natije ke liye rozana istemaal karein.',
        },
        churan: {
          name: 'Rahat-e-Khaas',
          ur: 'راحتِ خاص',
          role: 'Andar se Ilaj · Ayurvedic Churan',
          img: '/rahat-e-khas-solo.png',
          size: '300 g',
          form: 'Dahi ke saath',
          price: '₹999',
          was: '₹1499',
          desc: 'Hamara flagship Unani churan jo bawaseer (piles) mein andar se kaam karta hai — hazma, khoon ki gardish aur pait ki safai ko behtar banata hai. Na steroid, na jalan, na operation ka darr.',
          ing: ['Nagkesar — Khoon & jalan rokne mein', 'Haritaki (Hadd) — Pait saaf, behtar hazma', 'Neem — Qudrati antiseptic', 'Rasaut — Masse simatne mein madad'],
          use: 'Din mein 2 baar — subah aur shaam — 1 chammach churan 100 mg (thoda) dahi ke saath. Kam se kam 1 maheena lagatar istemaal karein.',
        },
        majoon: {
          name: 'Hiqmat Nura Majoon',
          ur: 'حکمت نورہ معجون',
          role: 'Taqat & Tawazun · Herbal Majoon',
          img: '/hikmat-nura-majoon-solo.png',
          size: '150 g',
          form: 'Raat ko',
          price: '₹649',
          was: '₹851',
          desc: 'Ek Unani herbal paste (majoon) jo andaruni taqat, hazma aur jism ke tawazun ko sahara deta hai — energy, stamina aur vitality ke liye. Combo routine ko mukammal karta hai.',
          ing: ['Anjeer — Hazme ko aasaani', 'Filfil Siyah — Kaali mirch', 'Zeera Siyah — Kaala zeera', 'Habb-ul-Aas — Myrtle, gardish ka sahara', 'Mundi — Andaruni tawazun', 'Shahad — Qudrati shahad base'],
          use: 'Raat ko sone se pehle ½ chammach (taqreeban 5–10 g) doodh ya paani ke saath. Rozana istemaal karein.',
        },
      };
      var modal = document.getElementById('pmodal');
      if (!modal) return;
      var lastFocus = null;
      function fill(p) {
        document.getElementById('pmImg').src = p.img;
        document.getElementById('pmImg').alt = p.name;
        document.getElementById('pmRole').textContent = p.role;
        document.getElementById('pmTitle').textContent = p.name;
        document.getElementById('pmUr').textContent = p.ur;
        document.getElementById('pmDesc').textContent = p.desc;
        document.getElementById('pmSize').textContent = p.size;
        document.getElementById('pmForm').textContent = p.form;
        document.getElementById('pmUse').textContent = p.use;
        document.getElementById('pmPrice').textContent = p.price;
        document.getElementById('pmWas').textContent = p.was || '';
        var ing = document.getElementById('pmIng');
        ing.innerHTML = '';
        p.ing.forEach(function (item) {
          var parts = item.split(' — ');
          var li = document.createElement('li');
          li.innerHTML = '<b>' + parts[0] + '</b>' + (parts[1] ? ' — ' + parts[1] : '');
          ing.appendChild(li);
        });
        var msg = 'Assalam-o-alaikum! Mujhe ' + p.name + ' (' + p.price + ', COD) order karna hai. Baraye meherbani tafseel bhejein.';
        document.getElementById('pmOrder').href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
      }
      function open(key) {
        var p = PRODUCTS[key];
        if (!p) return;
        lastFocus = document.activeElement;
        fill(p);
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        document.getElementById('pmodalClose').focus();
      }
      function close() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        if (lastFocus) lastFocus.focus();
      }
      document.querySelectorAll('.prod-card').forEach(function (card) {
        card.addEventListener('click', function () {
          open(card.dataset.product);
        });
        card.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open(card.dataset.product);
          }
        });
      });
      document.getElementById('pmodalClose').addEventListener('click', close);
      document.getElementById('pmodalBg').addEventListener('click', close);
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) close();
      });
    })();

    // ---- Brand logo flip: Hinglish <-> Urdu ----
    (function () {
      var faces = document.querySelectorAll('#brandFlip .brand-face');
      if (faces.length < 2) return;
      var i = 0;
      setInterval(function () {
        faces[i].classList.add('out');
        i = (i + 1) % faces.length;
        faces[i].classList.remove('out');
      }, 2600);
    })();

    // ---- Sticky header shadow ----
    var header = document.getElementById('header');
    var totop = document.getElementById('totop');
    window.addEventListener(
      'scroll',
      function () {
        var y = window.scrollY;
        header.classList.toggle('scrolled', y > 10);
        totop.classList.toggle('show', y > 600);
      },
      { passive: true }
    );
    totop.addEventListener('click', function () {
      scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---- Mobile drawer ----
    var burger = document.getElementById('burger'),
      drawer = document.getElementById('drawer'),
      overlay = document.getElementById('overlay'),
      dclose = document.getElementById('drawerClose');
    function toggleDrawer(open) {
      drawer.classList.toggle('open', open);
      overlay.classList.toggle('open', open);
      burger.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }
    burger.addEventListener('click', function () {
      toggleDrawer(!drawer.classList.contains('open'));
    });
    overlay.addEventListener('click', function () {
      toggleDrawer(false);
    });
    dclose.addEventListener('click', function () {
      toggleDrawer(false);
    });
    drawer.querySelectorAll('a,button').forEach(function (el) {
      el.addEventListener('click', function () {
        toggleDrawer(false);
      });
    });

    // ---- Scroll reveal ----
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(function (el) {
      io.observe(el);
    });

    // ---- Duplicate marquee for seamless loop ----
    (function () {
      var m = document.getElementById('marquee');
      m.innerHTML += m.innerHTML;
    })();

    // ---- FAQ accordion ----
    document.querySelectorAll('.faq-q').forEach(function (q) {
      q.addEventListener('click', function () {
        var item = q.parentElement;
        var a = item.querySelector('.faq-a');
        var open = item.classList.toggle('open');
        a.style.maxHeight = open ? a.scrollHeight + 'px' : 0;
      });
    });

    // ---- Mobile app tab bar: navigation + scroll-spy ----
    (function () {
      var tabs = Array.prototype.slice.call(document.querySelectorAll('.app-tabbar .tab'));
      if (!tabs.length) return;
      tabs.forEach(function (t) {
        t.addEventListener('click', function () {
          var el = document.getElementById(t.dataset.target);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
      // highlight the tab whose section is currently in view
      var map = {};
      tabs.forEach(function (t) {
        var el = document.getElementById(t.dataset.target);
        if (el) map[t.dataset.target] = t;
      });
      var spy = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              tabs.forEach(function (t) {
                t.classList.remove('active');
              });
              var active = map[e.target.id];
              if (active) active.classList.add('active');
            }
          });
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
      );
      Object.keys(map).forEach(function (id) {
        var el = document.getElementById(id);
        if (el) spy.observe(el);
      });
    })();

    // ---- Carousel pagination dots (mobile) ----
    function initDots() {
      if (window.innerWidth > 640) return;
      var carousels = document.querySelectorAll('.cards,.steps,.herb-grid,.stats,.badges,.prod-grid');
      carousels.forEach(function (car) {
        var items = car.children;
        if (items.length < 2) return;
        // stride = distance between two adjacent items (item width + gap)
        var stride = items[1].offsetLeft - items[0].offsetLeft;
        if (stride <= 0) return;
        var perView = Math.max(1, Math.round(car.clientWidth / stride));
        var pages = Math.ceil(items.length / perView);
        if (pages < 2) return;
        var span = stride * perView; // scroll distance per page
        // remove the plain text swipe hint once we have dots
        var hint = car.parentNode.querySelector('.swipe-hint');
        if (hint) hint.remove();
        var nav = document.createElement('div');
        nav.className = 'dots';
        for (var i = 0; i < pages; i++) {
          var d = document.createElement('button');
          d.className = 'dot-pg' + (i === 0 ? ' active' : '');
          d.setAttribute('aria-label', 'Slide ' + (i + 1) + ' of ' + pages);
          (function (idx) {
            d.addEventListener('click', function () {
              car.scrollTo({ left: idx * span, behavior: 'smooth' });
            });
          })(i);
          nav.appendChild(d);
        }
        car.parentNode.insertBefore(nav, car.nextSibling);
        var dots = nav.children;
        var ticking = false;
        car.addEventListener(
          'scroll',
          function () {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(function () {
              var idx = Math.min(pages - 1, Math.max(0, Math.round(car.scrollLeft / span)));
              for (var i = 0; i < dots.length; i++) dots[i].classList.toggle('active', i === idx);
              ticking = false;
            });
          },
          { passive: true }
        );
      });
    }
    if (document.readyState === 'complete') initDots();
    else window.addEventListener('load', initDots);

    // ---- Count-up stats ----
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.querySelectorAll('[data-count]').forEach(function (el) {
              var end = parseFloat(el.dataset.count),
                dec = parseInt(el.dataset.dec || 0),
                pre = el.dataset.prefix || '',
                suf = el.dataset.suffix || '',
                start = 0,
                dur = 1400,
                t0 = null;
              function step(ts) {
                if (!t0) t0 = ts;
                var p = Math.min((ts - t0) / dur, 1);
                var val = (start + (end - start) * (1 - Math.pow(1 - p, 3))).toFixed(dec);
                el.textContent = pre + Number(val).toLocaleString('en-IN') + suf;
                if (p < 1) requestAnimationFrame(step);
              }
              requestAnimationFrame(step);
            });
            statObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll('.stat').forEach(function (s) {
      statObserver.observe(s);
    });
  }, []);

  return (
    <>
      {/* ===== NAV ===== */}
      <header id="header">
        <div className="wrap">
          <nav>
            <div className="logo" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="logo-mark">
                <svg viewBox="0 0 26 26" fill="none">
                  <path d="M13 24C13 24 4 18 4 11C4 7 7 4.5 10.5 5.5C12 5.9 13 7 13 7C13 7 14 5.9 15.5 5.5C19 4.5 22 7 22 11C22 18 13 24 13 24Z" fill="#E4C066" />
                  <path d="M13 7V21" stroke="#0E3B2E" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M13 13C13 13 10 11 8.5 13M13 16C13 16 16 14 17.5 16" stroke="#0E3B2E" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>
              <div className="brand-flip" id="brandFlip">
                <div className="brand-face" data-face="en">
                  <div className="b-en">
                    Hiqmat <i>Dawakhana</i>
                  </div>
                  <div className="b-sub">Unani · Herbal Ilaj</div>
                </div>
                <div className="brand-face out" data-face="ur">
                  <div className="b-ur urdu">حکمت دواخانہ</div>
                </div>
              </div>
            </div>
            <div className="nav-links">
              <a href="#formula">The Formula</a>
              <a href="#products">Products</a>
              <a href="#combo">Combo</a>
              <a href="#how">How It Works</a>
              <a href="#reviews">Reviews</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="nav-cta">
              <button className="btn" onClick={() => document.getElementById('order').scrollIntoView({ behavior: 'smooth' })}>
                Order Now — ₹999
              </button>
              <button className="burger" id="burger" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className="overlay" id="overlay"></div>
      <aside className="drawer" id="drawer">
        <button className="drawer-close" id="drawerClose" aria-label="Close">
          ×
        </button>
        <a href="#formula">The Formula</a>
        <a href="#products">Products</a>
        <a href="#combo">Combo Pack</a>
        <a href="#how">How It Works</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQ</a>
        <a href="#order">Order</a>
        <button className="btn btn-gold" onClick={() => document.getElementById('order').scrollIntoView({ behavior: 'smooth' })}>
          Order Now — ₹999
        </button>
      </aside>

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow reveal">حکمت کومبو · 3-in-1 Combo</span>
            <h1 className="reveal d1">
              Bawaseer se <em>rahat</em>, ab <span className="grad">3-in-1 combo</span> ke saath.
            </h1>
            <p className="sub reveal d2">
              Hiqmat Dawakhana ka mukammal Unani routine — <b>Shifa Oil</b> bahar se sukoon, <b>Rahat-e-Khaas</b> churan andar se ilaj, aur <b>Nura Majoon</b> taqat ke liye. Teeno saath — tez aur mukammal rahat, bina steroid, bina operation.
            </p>
            <div className="hero-cta reveal d3">
              <button className="btn" onClick={() => document.getElementById('combo').scrollIntoView({ behavior: 'smooth' })}>
                Combo Dekhein — ₹1849
              </button>
              <button className="btn btn-outline" onClick={() => document.getElementById('formula').scrollIntoView({ behavior: 'smooth' })}>
                Ajza Dekhein ↓
              </button>
            </div>
            <div className="trust-row reveal d4">
              <span>
                <span className="dot"></span>
                <b>100%</b> Herbal
              </span>
              <span>
                <span className="dot"></span>No Steroids
              </span>
              <span>
                <span className="dot"></span>
                <b>Cash on</b> Delivery
              </span>
              <span>
                <span className="dot"></span>Discreet Packing
              </span>
            </div>
          </div>

          <div className="product-stage reveal d2">
            <div className="halo"></div>
            <div className="ring"></div>
            <div className="ring r2"></div>

            {/* floating leaves */}
            <svg className="leaf l1" width="52" height="52" viewBox="0 0 52 52">
              <path d="M26 4C26 4 8 16 8 34C10 30 20 26 26 26C22 32 18 40 26 48C34 40 30 32 26 26C32 26 42 30 44 34C44 16 26 4 26 4Z" fill="#8AA07C" opacity=".85" />
            </svg>
            <svg className="leaf l2" width="44" height="44" viewBox="0 0 52 52">
              <path d="M26 4C26 4 8 16 8 34C10 30 20 26 26 26C22 32 18 40 26 48C34 40 30 32 26 26C32 26 42 30 44 34C44 16 26 4 26 4Z" fill="#C9932E" opacity=".65" />
            </svg>
            <svg className="leaf l3" width="34" height="34" viewBox="0 0 52 52">
              <path d="M26 4C26 4 8 16 8 34C10 30 20 26 26 26C22 32 18 40 26 48C34 40 30 32 26 26C32 26 42 30 44 34C44 16 26 4 26 4Z" fill="#7A2F3E" opacity=".5" />
            </svg>

            {/* combo: three products together */}
            <div className="hero-trio">
              <img className="ht ht-side ht-l" src="/hikmat-shifa-oil.png" alt="Hikmat Shifa Oil — Unani herbal tel" loading="eager" />
              <img className="ht ht-main" src="/rahat-e-khas.png" alt="Rahat-e-Khaas — Unani herbal churan for bawaseer" loading="eager" />
              <img className="ht ht-side ht-r" src="/hikmat-nura-majoon.png" alt="Hikmat Nura Majoon — Unani herbal tonic" loading="eager" />
            </div>

            <div className="badge-float bf1">
              <span className="b-ico">✓</span>
              <div>
                3-in-1 Combo<small>OIL · CHURAN · MAJOON</small>
              </div>
            </div>
            <div className="badge-float bf2">
              <span className="b-ico">★</span>
              <div>
                4.8 / 5 Rating<small>12,000+ FAMILIES</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="marquee">
        <div className="marquee-track" id="marquee">
          <div className="marquee-item">
            <span className="g">۞</span> BINA OPERATION
          </div>
          <div className="marquee-item">
            <span className="g">۞</span> NO STEROIDS
          </div>
          <div className="marquee-item">
            <span className="g">۞</span> KHANDANI NUSKHA
          </div>
          <div className="marquee-item">
            <span className="g">۞</span> CASH ON DELIVERY
          </div>
          <div className="marquee-item">
            <span className="g">۞</span> DISCREET PACKING
          </div>
          <div className="marquee-item">
            <span className="g">۞</span> 100% HERBAL
          </div>
          <div className="marquee-item">
            <span className="g">۞</span> ALL INDIA DELIVERY
          </div>
        </div>
      </div>

      {/* ===== PROBLEM ===== */}
      <div className="strip section">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>
              Masla Kya Hai?
            </span>
            <h2>Creams sirf araam dete hain. Operation dara deta hai. Jad tak koi nahi jaata.</h2>
            <p style={{ marginTop: '16px' }}>
              Rahat-e-Khaas andar se kaam karta hai — hazma, khoon ki gardish aur pait ki safai — teen buniyaadi wajahon par, jinki taraf Unani hamesha ishaara karti aayi hai.
            </p>
          </div>
          <div className="myth-list reveal d2">
            <div className="myth">
              <span className="x">✕</span>
              <div>
                <b>Sirf cream lagana</b>
                <br />
                <small>Chand ghante ka araam, masla waisa ka waisa.</small>
              </div>
            </div>
            <div className="myth">
              <span className="x">✕</span>
              <div>
                <b>Operation ki taraf bhaagna</b>
                <br />
                <small>Mehnga, takleef-deh aur dobara hone ka darr.</small>
              </div>
            </div>
            <div className="myth">
              <span className="x">✕</span>
              <div>
                <b>Steroid waali dawaayein</b>
                <br />
                <small>Waqti faayda, lambe arse mein nuqsaan.</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== INGREDIENTS ===== */}
      <div className="wrap section" id="formula">
        <div className="section-head center reveal">
          <span className="eyebrow">Ajza · The Formula</span>
          <h2>Chaar qudrati jadi-bootiyan, ek asardar nuskha.</h2>
          <p>Sadiyon purani Unani hikmat se chunni gayi jadi-bootiyan — har ek apni khaas khoobi ke saath.</p>
        </div>
        <div className="herb-grid">
          <div className="herb-card reveal d1">
            <div className="herb-ico">
              <svg viewBox="0 0 52 52">
                <path d="M26 4C26 4 8 16 8 34C10 30 20 26 26 26C22 32 18 40 26 48C34 40 30 32 26 26C32 26 42 30 44 34C44 16 26 4 26 4Z" fill="none" stroke="#8AA07C" strokeWidth="1.6" />
                <path d="M26 26V48" stroke="#8AA07C" strokeWidth="1" />
              </svg>
            </div>
            <div className="herb-name">Nagkesar</div>
            <div className="herb-ur urdu">ناگ کیسر</div>
            <div className="herb-note">Khoon behne aur jalan ko rokne mein madadgaar.</div>
          </div>
          <div className="herb-card reveal d2">
            <div className="herb-ico">
              <svg viewBox="0 0 52 52">
                <circle cx="26" cy="24" r="14" fill="none" stroke="#C9932E" strokeWidth="1.6" />
                <path d="M26 38V48M18 43H34" stroke="#C9932E" strokeWidth="1.4" />
              </svg>
            </div>
            <div className="herb-name">Haritaki</div>
            <div className="herb-ur urdu">ہڑ</div>
            <div className="herb-note">Pait saaf rakhe, hazme ko behtar banaye.</div>
          </div>
          <div className="herb-card reveal d3">
            <div className="herb-ico">
              <svg viewBox="0 0 52 52">
                <path d="M26 6L34 30H18L26 6Z" fill="none" stroke="#7A2F3E" strokeWidth="1.6" />
                <path d="M26 30V46" stroke="#7A2F3E" strokeWidth="1" />
              </svg>
            </div>
            <div className="herb-name">Neem</div>
            <div className="herb-ur urdu">نیم</div>
            <div className="herb-note">Qudrati antiseptic — sujan aur infection se hifazat.</div>
          </div>
          <div className="herb-card reveal d4">
            <div className="herb-ico">
              <svg viewBox="0 0 52 52">
                <path d="M14 34Q26 8 38 34" fill="none" stroke="#8AA07C" strokeWidth="1.6" />
                <circle cx="26" cy="38" r="5" fill="#8AA07C" />
              </svg>
            </div>
            <div className="herb-name">Rasaut</div>
            <div className="herb-ur urdu">رسوت</div>
            <div className="herb-note">Masse simatne aur sujan ghatane mein maddad.</div>
          </div>
        </div>
        <p className="swipe-hint">← swipe →</p>
      </div>

      {/* ===== OUR PRODUCTS ===== */}
      <div className="wrap section" id="products" style={{ paddingTop: 0 }}>
        <div className="section-head center reveal">
          <span className="eyebrow">Hamare Products · Our Range</span>
          <h2>Teen Unani nuskhe — har ek par tap karke poori tafseel dekhein.</h2>
          <p>Har product ki mukammal maloomat: ajza, istemaal ka tarika aur qeemat.</p>
        </div>
        <div className="prod-grid">
          <div className="prod-card reveal d1" data-product="oil" role="button" tabIndex={0} aria-label="Hikmat Shifa Oil ki tafseel dekhein">
            <div className="prod-media">
              <img src="/hikmat-shifa-oil-solo.png" alt="Hikmat Shifa Oil — Unani herbal tel" loading="lazy" />
            </div>
            <div className="prod-role">Bahari Sukoon · Oil</div>
            <div className="prod-name">Hiqmat Shifa Oil</div>
            <div className="prod-ur urdu">حکمت شفا آئل</div>
            <div className="prod-view">
              Tafseel dekhein{' '}
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="prod-card reveal d2" data-product="churan" role="button" tabIndex={0} aria-label="Rahat-e-Khaas ki tafseel dekhein">
            <div className="prod-media">
              <img src="/rahat-e-khas-solo.png" alt="Rahat-e-Khaas — Unani herbal churan for piles" loading="lazy" />
            </div>
            <div className="prod-role">Andar se Ilaj · Churan</div>
            <div className="prod-name">Rahat-e-Khaas</div>
            <div className="prod-ur urdu">راحتِ خاص</div>
            <div className="prod-view">
              Tafseel dekhein{' '}
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="prod-card reveal d3" data-product="majoon" role="button" tabIndex={0} aria-label="Hikmat Nura Majoon ki tafseel dekhein">
            <div className="prod-media">
              <img src="/hikmat-nura-majoon-solo.png" alt="Hikmat Nura Majoon — Unani herbal tonic" loading="lazy" />
            </div>
            <div className="prod-role">Taqat &amp; Tawazun · Majoon</div>
            <div className="prod-name">Hiqmat Nura Majoon</div>
            <div className="prod-ur urdu">حکمت نورہ معجون</div>
            <div className="prod-view">
              Tafseel dekhein{' '}
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="swipe-hint">← swipe · tap to view →</p>
      </div>

      {/* ===== COMBO PACK ===== */}
      <div className="combo section" id="combo">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="combo-tag">
              <span className="pulse"></span>Teen ka Combo · Tez Natija
            </span>
            <h2 style={{ marginTop: '16px' }}>Teen tarkeeb, ek routine — tez aur mukammal rahat.</h2>
            <p>Bahar se sukoon, andar se ilaj aur qudrati taqat — teeno saath milkar jald asar dikhaate hain, akele se kahin behtar.</p>
          </div>

          {/* combo shown as one professional group shot */}
          <div className="combo-stage reveal d1">
            <img className="combo-group" src="/group.png" alt="Hiqmat 3-in-1 Combo — Shifa Oil, Rahat-e-Khaas churan aur Nura Majoon ek saath" />
            <div className="combo-labels">
              <span>
                Shifa Oil<small>Bahari Sukoon</small>
              </span>
              <span>
                Nura Majoon<small>Taqat &amp; Tawazun</small>
              </span>
              <span>
                Rahat-e-Khaas<small>Andar se Ilaj</small>
              </span>
            </div>
          </div>

          {/* combo offer */}
          <div className="combo-offer reveal d2">
            <div className="co-text">
              <div className="co-price">
                <span className="co-now">₹1849</span>
                <span className="co-was">₹3249</span>
                <span className="co-off">43% OFF</span>
              </div>
              <small>Poora combo · Oil + Churan + Majoon · 1 maheene ka course</small>
            </div>
            <a
              className="btn btn-gold"
              href="https://wa.me/919837493926?text=Assalam-o-alaikum%21%20Mujhe%20Hiqmat%203-in-1%20Combo%20Pack%20order%20karna%20hai%20-%20Shifa%20Oil%20%2B%20Rahat-e-Khaas%20%2B%20Nura%20Majoon%20%28Rs%201849%2C%20COD%29.%20Baraye%20meherbani%20tafseel%20bhejein."
              target="_blank"
              rel="noopener"
            >
              Combo Order Karein (WhatsApp)
            </a>
          </div>
        </div>
      </div>

      {/* ===== HOW IT WORKS ===== */}
      <div className="wrap section" id="how" style={{ paddingTop: 0 }}>
        <div className="section-head center reveal">
          <span className="eyebrow">Combo Routine · How It Works</span>
          <h2>Teen product, ek rozana routine — subah se raat tak.</h2>
        </div>
        <div className="steps">
          <div className="step reveal d1">
            <div className="num">1</div>
            <div className="tag">Subah · Shifa Oil</div>
            <h3>Bahar Shifa Oil lagayein</h3>
            <p>Subah nahaane ke baad Hikmat Shifa Oil halke haath se bahari hisse par lagayein — foran thandak aur sukoon, upar se araam.</p>
            <div className="step-line">→</div>
          </div>
          <div className="step reveal d2">
            <div className="num">2</div>
            <div className="tag">Subah &amp; Shaam · Churan</div>
            <h3>1 chammach churan dahi ke saath</h3>
            <p>Din mein 2 baar, 1 chammach Rahat-e-Khaas churan 100 mg dahi ke saath — andar se hazme, khoon ki gardish aur pait ki safai ko sahara.</p>
            <div className="step-line">→</div>
          </div>
          <div className="step reveal d3">
            <div className="num">3</div>
            <div className="tag">Raat · Nura Majoon</div>
            <h3>Sone se pehle ½ chammach Majoon</h3>
            <p>Raat ko Hikmat Nura Majoon — qudrati taqat aur andaruni tawazun ke liye. Teeno milkar tez aur mukammal natija dete hain.</p>
          </div>
        </div>
        <p className="swipe-hint">← swipe →</p>
      </div>

      {/* ===== STATS ===== */}
      <div className="wrap section" style={{ paddingTop: 0 }}>
        <div className="stats">
          <div className="stat reveal d1">
            <div className="n" data-count="12000" data-suffix="+">
              0
            </div>
            <div className="l">Khush Families</div>
          </div>
          <div className="stat reveal d2">
            <div className="n" data-count="4.8" data-suffix="/5" data-dec="1">
              0
            </div>
            <div className="l">Average Rating</div>
          </div>
          <div className="stat reveal d3">
            <div className="n" data-count="100" data-suffix="%">
              0
            </div>
            <div className="l">Herbal & Qudrati</div>
          </div>
          <div className="stat reveal d4">
            <div className="n" data-count="0" data-prefix="₹">
              0
            </div>
            <div className="l">Advance / COD Only</div>
          </div>
        </div>
        <p className="swipe-hint">← swipe →</p>
      </div>

      {/* ===== TESTIMONIALS ===== */}
      <div className="testi section" id="reviews">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">Logon ki Zubaani · Reviews</span>
            <h2>Course se chand baatein.</h2>
          </div>
          <div className="cards">
            <div className="postcard reveal d1">
              <div className="stars">★★★★★</div>
              <p>"Saalon se creams laga raha tha, koi faayda nahi. Rahat-e-Khaas ne pehli baar rozana ki zindagi badal di."</p>
              <div className="who">
                <div className="av">R</div>
                <div>
                  <b>Rizwan Ahmed</b>
                  <small>Lucknow, UP</small>
                </div>
              </div>
            </div>
            <div className="postcard reveal d2">
              <div className="stars">★★★★★</div>
              <p>"Na jalan, na side effect. Bas subah-shaam ek chammach churan dahi ke saath. Aasaani se chalta rehta hai."</p>
              <div className="who">
                <div className="av">S</div>
                <div>
                  <b>Salma Khatoon</b>
                  <small>Bhopal, MP</small>
                </div>
              </div>
            </div>
            <div className="postcard reveal d3">
              <div className="stars">★★★★★</div>
              <p>"Teen hafte lage, lekin ab tak farq barqaraar hai. Operation se bach gaya, shukr hai."</p>
              <div className="who">
                <div className="av">M</div>
                <div>
                  <b>Mohammed Iqbal</b>
                  <small>Hyderabad, TS</small>
                </div>
              </div>
            </div>
          </div>
          <p className="swipe-hint">← swipe →</p>
        </div>
      </div>

      {/* ===== TRUST BADGES ===== */}
      <div className="wrap section" style={{ paddingBottom: 0 }}>
        <div className="badges">
          <div className="tbadge reveal d1">
            <div className="mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2l8 3v6c0 5-3.5 8-8 11-4.5-3-8-6-8-11V5l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              GMP Certified
            </div>
            <div className="sub">Standardized manufacturing</div>
          </div>
          <div className="tbadge reveal d2">
            <div className="mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 3C7 3 4 7 4 12s3 9 8 9 8-4 8-9-3-9-8-9z" />
                <path d="M8 12c2-4 6-4 8 0" />
              </svg>
              100% Herbal
            </div>
            <div className="sub">No steroids or fillers</div>
          </div>
          <div className="tbadge reveal d3">
            <div className="mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="7" width="18" height="12" rx="2" />
                <path d="M3 11h18M7 15h4" />
              </svg>
              Cash on Delivery
            </div>
            <div className="sub">Pay when you receive</div>
          </div>
          <div className="tbadge reveal d4">
            <div className="mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 4v6l3-2 3 2V4" />
              </svg>
              Discreet Packing
            </div>
            <div className="sub">Plain, private delivery</div>
          </div>
        </div>
        <p className="swipe-hint">← swipe →</p>
      </div>

      {/* ===== FAQ ===== */}
      <div className="wrap section" id="faq">
        <div className="section-head center reveal">
          <span className="eyebrow">Aksar Poochhe Jaane Waale Sawal · FAQ</span>
          <h2>Order se pehle.</h2>
        </div>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="faq-item reveal">
            <button className="faq-q">
              Yeh cream hai ya churan? <span className="pm">+</span>
            </button>
            <div className="faq-a">
              <p>
                Rahat-e-Khaas ek herbal <b>churan (powder)</b> hai — din mein 2 baar, 1 chammach churan 100 mg dahi ke saath li jaati hai. Yeh andar se kaam karti hai, upar lagaane waali cream nahi.
              </p>
            </div>
          </div>
          <div className="faq-item reveal">
            <button className="faq-q">
              Farq mehsoos hone mein kitna waqt lagta hai? <span className="pm">+</span>
            </button>
            <div className="faq-a">
              <p>Zyadatar log doosre hafte mein aaraam mehsoos karte hain, aur chauthe hafte tak poori rahat. Har shakhs ka natija alag ho sakta hai.</p>
            </div>
          </div>
          <div className="faq-item reveal">
            <button className="faq-q">
              Kya ise rozana lena mehfooz hai? <span className="pm">+</span>
            </button>
            <div className="faq-a">
              <p>Jee haan — yeh poori tarah jadi-bootiyon se bana hai aur rozana istemal ke liye hai. Hamila, doodh pilaane waali maaein ya kisi aur dawa par ho to hakeem/doctor se mashwara zaroor karein.</p>
            </div>
          </div>
          <div className="faq-item reveal">
            <button className="faq-q">
              Kya mera order discreet hoga? <span className="pm">+</span>
            </button>
            <div className="faq-a">
              <p>Bilkul — saare order saade, be-naam packing mein bheje jaate hain. Bahar se product ka naam nazar nahi aata.</p>
            </div>
          </div>
          <div className="faq-item reveal">
            <button className="faq-q">
              Payment kaise karein? <span className="pm">+</span>
            </button>
            <div className="faq-a">
              <p>Cash on Delivery (COD) available hai — aap product haath mein aane par payment kar sakte hain. Online payment ka option bhi maujood hai.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="cta-final section" id="order">
        <div className="wrap cta-grid">
          <div className="cta-media reveal d1">
            <img className="cta-product" src="/rahat-e-khas-solo.png" alt="Rahat-e-Khaas — Unani herbal churan for bawaseer" loading="lazy" />
          </div>
          <div className="cta-copy">
            <span className="eyebrow reveal" style={{ color: 'var(--gold-soft)' }}>
              Aaj hi Shuru Karein
            </span>
            <h2 className="reveal d1">Rahat mushkil nahi honi chahiye.</h2>
            <p className="reveal d2">Rahat-e-Khaas ka ek maheene ka course order karein — bina operation, bina steroid, qudrati rahat.</p>
            <div className="price reveal d2">
              <span className="now">₹999</span>
              <span className="was">₹1499</span>
              <span className="off">33% OFF</span>
            </div>
            <div className="cta-actions reveal d3">
              <button className="btn btn-gold">Order Now (COD Available)</button>
              <a className="btn btn-outline" style={{ borderColor: 'var(--gold-soft)', color: 'var(--gold-soft)' }} href="https://wa.me/919837493926" target="_blank" rel="noopener">
                WhatsApp par Poochein
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="b-en">Hiqmat Dawakhana</div>
              <div className="b-ur urdu">حکمت دواخانہ</div>
              <p>Sadiyon purani Unani hikmat ko aaj ke gharon tak pahunchaana — qudrati, mehfooz aur bharose-mand jadi-booti ke nuskhon ke saath.</p>
            </div>
            <div className="foot-col">
              <h4>Product</h4>
              <a href="#formula">Rahat-e-Khaas</a>
              <a href="#combo">Combo Pack (3-in-1)</a>
              <a href="#formula">Ajza / Ingredients</a>
              <a href="#how">Istemal ka Tarika</a>
              <a href="#reviews">Reviews</a>
            </div>
            <div className="foot-col">
              <h4>Raabta / Contact</h4>
              <a href="tel:+919837493926">+91 98374 93926</a>
              <a href="https://wa.me/919837493926" target="_blank" rel="noopener">
                WhatsApp
              </a>
              <a href="mailto:care@hiqmatdawakhana.com">care@hiqmatdawakhana.com</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div className="foot-bottom">
            <div>© 2026 Hiqmat Dawakhana. Tamaam haqooq mehfooz.</div>
            <div className="disc">Yeh product kisi bimari ke ilaj ke liye taibaat-shuda nahi hai. Nataij mukhtalif ho sakte hain. Kisi bhi tibbi masle ke liye hakeem/doctor se mashwara karein.</div>
          </div>
        </div>
      </footer>

      {/* ===== MOBILE APP TAB BAR ===== */}
      <nav className="app-tabbar" id="tabbar" aria-label="App navigation">
        <button className="tab" data-target="hero" aria-label="Home">
          <svg viewBox="0 0 24 24">
            <path d="M3 11l9-8 9 8" />
            <path d="M5 10v10h5v-6h4v6h5V10" />
          </svg>
          Home
        </button>
        <button className="tab" data-target="formula" aria-label="Formula">
          <svg viewBox="0 0 24 24">
            <path d="M9 3h6M10 3v5l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
            <path d="M7.5 14h9" />
          </svg>
          Ajza
        </button>
        <button className="tab tab-order" data-target="order" aria-label="Order now">
          <span className="fab">
            <svg viewBox="0 0 24 24">
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6L5 3H2" />
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
            </svg>
          </span>
          Order
        </button>
        <button className="tab" data-target="reviews" aria-label="Reviews">
          <svg viewBox="0 0 24 24">
            <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" />
          </svg>
          Reviews
        </button>
        <button className="tab" data-target="faq" aria-label="FAQ">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .8-1 1.7" />
            <path d="M12 16.5h.01" />
          </svg>
          FAQ
        </button>
      </nav>

      {/* ===== PRODUCT DETAIL MODAL ===== */}
      <div className="pmodal" id="pmodal" role="dialog" aria-modal="true" aria-labelledby="pmTitle">
        <div className="pmodal-bg" id="pmodalBg"></div>
        <div className="pmodal-box">
          <button className="pmodal-close" id="pmodalClose" aria-label="Band karein">
            ×
          </button>
          <div className="pmodal-grid">
            <div className="pmodal-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img id="pmImg" alt="" />
            </div>
            <div className="pmodal-body">
              <div className="pm-role" id="pmRole"></div>
              <h3 id="pmTitle"></h3>
              <div className="pm-ur urdu" id="pmUr"></div>
              <p className="pm-desc" id="pmDesc"></p>
              <div className="pm-meta">
                <div>
                  Net Wt.<b id="pmSize"></b>
                </div>
                <div>
                  Istemaal<b id="pmForm"></b>
                </div>
              </div>
              <div className="pm-sec">Ajza · Ingredients</div>
              <ul className="pm-ing" id="pmIng"></ul>
              <div className="pm-sec">Istemaal ka Tarika · How to Use</div>
              <div className="pm-use" id="pmUse"></div>
              <div className="pmodal-cta">
                <span className="pm-price" id="pmPrice"></span>
                <span className="pm-was" id="pmWas"></span>
                <a className="btn btn-gold" id="pmOrder" href="#" target="_blank" rel="noopener">
                  WhatsApp par Order Karein
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="totop" id="totop" aria-label="Top">
        ↑
      </button>
    </>
  );
}
