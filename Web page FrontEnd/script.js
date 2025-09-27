
      
      window.addEventListener("load", () => {
        AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
      });
      document.getElementById("year").textContent = new Date().getFullYear();

      
      (function initTheme() {
        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialDark = stored ? stored === 'dark' : prefersDark;
        const root = document.documentElement;
        function apply(dark) {
          root.classList.toggle('dark', dark);
          const icon = document.getElementById('themeIcon');
          if (icon) icon.textContent = dark ? '☀️' : '🌙';
        }
        apply(initialDark);
        const btn = document.getElementById('themeToggle');
        if (btn) {
          btn.addEventListener('click', () => {
            const isDark = root.classList.contains('dark');
            const next = !isDark;
            apply(next);
            localStorage.setItem('theme', next ? 'dark' : 'light');
          });
        }
      })();

     


      const bookingModal = document.getElementById("bookingModal");
      const openBookingButtons = [
        document.getElementById("openBookingBtn"),
        document.getElementById("openBookingBtn2"),
        document.getElementById("openBookingBtn3"),
      ].filter(Boolean);
      const closeBooking = document.getElementById("closeBooking");
      const bookingForm = document.getElementById("bookingForm");
      openBookingButtons.forEach((btn) =>
        btn.addEventListener("click", () =>
          bookingModal.classList.remove("hidden")
        )
      );
      closeBooking.addEventListener("click", () =>
        bookingModal.classList.add("hidden")
      );
      bookingModal.addEventListener("click", (e) => {
        if (e.target === bookingModal) bookingModal.classList.add("hidden");
      });

      function saveBooking(data) {
        const key = "mc_bookings";
        const all = JSON.parse(localStorage.getItem(key) || "[]");
        all.push({ ...data, createdAt: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(all));
      }

      bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(bookingForm);
        const payload = Object.fromEntries(formData.entries());
        const anonymous = formData.get("anonymous") === "on";
        if (anonymous) {
          payload.name = "Anonymous";
          payload.email = "";
        }
        saveBooking(payload);
        alert(
          "Booking submitted successfully. We will reach out soon."
        );
        bookingModal.classList.add("hidden");
        bookingForm.reset();
      });

      
      const postForm = document.getElementById("postForm");
      const postText = document.getElementById("postText");
      const posts = document.getElementById("posts");
      const badWords = [/hate/i, /suicide/i, /kill/i, /contact\s*me/i];

      function getAllPosts() {
        return JSON.parse(localStorage.getItem("mc_posts") || "[]");
      }
      function setAllPosts(list) {
        localStorage.setItem("mc_posts", JSON.stringify(list));
      }
      function renderPosts() {
        posts.innerHTML = "";
        getAllPosts()
          .slice()
          .reverse()
          .forEach((p) => {
            const card = document.createElement("div");
            card.className = "p-3 rounded-xl border border-slate-200 bg-white";
            const meta = document.createElement("div");
            meta.className =
              "text-xs text-slate-500 flex items-center justify-between";
            meta.innerHTML = `<span>${p.author}</span><span>${new Date(
              p.createdAt
            ).toLocaleString()}</span>`;
            const body = document.createElement("div");
            body.className = "mt-2 text-sm text-slate-800 whitespace-pre-wrap";
            body.textContent = p.text;
            const actions = document.createElement("div");
            actions.className = "mt-2 flex gap-3 text-xs";
            const report = document.createElement("button");
            report.textContent = "Report";
            report.className =
              "px-2 py-1 rounded bg-slate-100 hover:bg-slate-200";
            report.addEventListener("click", () => {
              alert(
                "Thank you. A moderator will review this."
              );
            });
            actions.appendChild(report);
            card.append(meta, body, actions);
            posts.appendChild(card);
          });
      }
      renderPosts();

      postForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = postText.value.trim();
        if (!text) return;
        if (badWords.some((rx) => rx.test(text))) {
          alert(
            "Your post may be harmful or share restricted content. "
          );
          return;
        }
        const author = document.getElementById("postAnon").checked
          ? "Anonymous"
          : "Student";
        const list = getAllPosts();
        list.push({ text, author, createdAt: new Date().toISOString() });
        setAllPosts(list);
        postText.value = "";
        renderPosts();
      });


      
      const mockMonthly = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        phq9: [7, 8, 9, 10, 9, 8],
        gad7: [6, 7, 8, 9, 8, 7],
      };
      const mockDistribution = {
        labels: ["Minimal", "Mild", "Moderate", "Moderately Severe", "Severe"],
        counts: [35, 28, 22, 10, 5],
      };

      function initCharts() {
        const tctx = document.getElementById("trendChart");
        const dctx = document.getElementById("distChart");
        if (!tctx || !dctx || !window.Chart) return;
        new Chart(tctx, {
          type: "line",
          data: {
            labels: mockMonthly.labels,
            datasets: [
              {
                label: "PHQ‑9",
                data: mockMonthly.phq9,
                borderColor: "#2563eb",
                backgroundColor: "rgba(37,99,235,0.2)",
                tension: 0.35,
                fill: true,
              },
              {
                label: "GAD‑7",
                data: mockMonthly.gad7,
                borderColor: "#10b981",
                backgroundColor: "rgba(16,185,129,0.2)",
                tension: 0.35,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: { legend: { position: "bottom" } },
          },
        });
        new Chart(dctx, {
          type: "doughnut",
          data: {
            labels: mockDistribution.labels,
            datasets: [
              {
                data: mockDistribution.counts,
                backgroundColor: [
                  "#a3e635",
                  "#86efac",
                  "#60a5fa",
                  "#c4b5fd",
                  "#fda4af",
                ],
              },
            ],
          },
          options: {
            responsive: true,
            plugins: { legend: { position: "bottom" } },
          },
        });
      }
      window.addEventListener("load", initCharts);
