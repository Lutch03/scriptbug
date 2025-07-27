let akun = JSON.parse(localStorage.getItem("akunList")) || [];

function buatAkun() {
  let u = document.getElementById("newUser").value;
  let p = document.getElementById("newPass").value;

  if (u === "" || p === "") {
    alert("Username dan Password wajib diisi!");
    return;
  }

  akun.push({ username: u, password: p });
  localStorage.setItem("akunList", JSON.stringify(akun));
  alert("Akun berhasil dibuat!");
  document.getElementById("newUser").value = "";
  document.getElementById("newPass").value = "";
  toggleForm('login');
}

function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  let cari = akun.find(item => item.username === u && item.password === p);

  if (cari) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("tools-page").style.display = "block";
    document.getElementById("userWelcome").textContent = Selamat Datang ${cari.username}!;
  } else {
    alert("Username atau Password salah!");
  }
}

function toggleForm(mode) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (mode === 'register') {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  } else {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  }
}

function delayFunction(type, successMsg) {
  const q = document.getElementById("targetNumber").value.trim();
  const caption = document.getElementById("caption");
  const banner = document.getElementById("banner");

  if (!q.startsWith("62") || q.length < 10) {
    alert("Masukkan nomor yang valid!");
    return;
  }

  banner.style.display = "block";
  caption.style.display = "block";

  let i = 0;
  const interval = setInterval(() => {
    i += 10;
    if (i >= 100) {
      clearInterval(interval);
      caption.textContent = `
•━━━━━━━━━━━━━━━━━━━━•
〣 Target 
• ☇ ${q}
〣 Developer 
• ☇ @ShyKayla
〣 Progress
• ☇ ${successMsg}
•━━━━━━━━━━━━━━━━━━━━•`;

      const apiList = [https://localhost:3000/api/bug?type=${type}];
      apiList.forEach(url => {
        fetch(url)
          .then(res => res.text())
          .then(data => console.log("✅ API sukses:", url))
          .catch(err => console.error("❌ API gagal:", url));
      });

    } else {
      caption.textContent = `
•━━━━━━━━━━━━━━━━━━━━•
〣 Target 
• ☇ ${q}
〣 Developer 
• ☇ @ShyKayla
〣 Progress
• ☇ Proses ${i}%
•━━━━━━━━━━━━━━━━━━━━•`;
    }
  }, 600);
}

function startFc() {
  delayFunction("ghost", "Sukses kirim Ghost Delay");
}

function iphone() {
  delayFunction("iphone", "Sukses kirim Delay Iphone");
}

function ppk() {
  delayFunction("ppk", "Sukses kirim Forclose");
}