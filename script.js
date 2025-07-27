let akun = JSON.parse(localStorage.getItem("akunList")) || [];
let lastAttackTime = 0;
const cooldown = 5 * 60 * 1000; // 5 menit dalam milidetik

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const cari = akun.find(a => a.username === u && a.password === p);
  if (cari) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("tools-page").style.display = "block";
  } else {
    alert("Username atau Password salah!");
  }
}

function buatAkun() {
  const u = document.getElementById("newUser").value;
  const p = document.getElementById("newPass").value;
  if (u === "" || p === "") return alert("Isi semua form!");
  akun.push({ username: u, password: p });
  localStorage.setItem("akunList", JSON.stringify(akun));
  alert("Akun berhasil dibuat!");
  document.getElementById("newUser").value = "";
  document.getElementById("newPass").value = "";
  showLogin();
}

function showRegister() {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("register-form").style.display = "block";
}

function showLogin() {
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-page").style.display = "block";
}

function startFc() {
  runAttack("Ghost Delay", "Sucses send Ghost Delay");
}

function iphone() {
  runAttack("Delay Iphone", "Sucses send Delay Iphone");
}

function ppk() {
  runAttack("Forclose", "Sucses send Forclose");
}

function runAttack(label, successText) {
  const now = Date.now();
  if (now - lastAttackTime < cooldown) {
    const remaining = Math.ceil((cooldown - (now - lastAttackTime)) / 1000);
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    alert(Tunggu ${minutes}m ${seconds}s untuk melakukan bug kembali.);
    return;
  }

  lastAttackTime = now; // Set waktu serangan terakhir
  const q = document.getElementById("targetNumber").value.trim();
  const caption = document.getElementById("caption");
  const banner = document.getElementById("banner");

  if (!q.startsWith("62") || q.length < 10) return alert("Masukkan nomor yang valid!");
  banner.style.display = "block";
  caption.style.display = "block";

  let i = 0;
  const interval = setInterval(() => {
    i += 10;
    if (i >= 100) {
      clearInterval(interval);
      caption.textContent = `•━━━━━━━━━━━━━━━━━━━━•
〣 Target   
• ☇ ${q}
〣 Developer   
• ☇ @ShyKayla
〣 Progress  
• ☇ ${successText}
•━━━━━━━━━━━━━━━━━━━━•`;

      const apiList = ["api", "api"];
      apiList.forEach(url => {
        fetch(url)
          .then(res => res.text())
          .then(() => console.log("✅ API sukses:", url))
          .catch(() => console.error("❌ API gagal:", url));
      });
    } else {
      caption.textContent = `•━━━━━━━━━━━━━━━━━━━━•
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
