const locations = [
  {
    name: "Ayasofya",
    lat: 41.0086,
    lng: 28.9802,
    cost: "700 TL (skip-the-line)",
    reviews: "Ziyaretçiler mimarisine hayran kalıyor.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Hagia_Sophia_2020.jpg"
  },
  {
    name: "Topkapı Sarayı",
    lat: 41.0115,
    lng: 28.9833,
    cost: "1200 TL (harem dahil)",
    reviews: "Çok büyük, detaylı, rehberli gezmenizi öneririm.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Topkap%C4%B1_Palace_entrance_gate.jpg"
  },
  {
    name: "Galata Kulesi",
    lat: 41.0256,
    lng: 28.9744,
    cost: "700 TL",
    reviews: "Manzara müthiş, özellikle gün batımında.",
    image: "https://cdn.britannica.com/12/151212-050-1B63E7D0/Galata-Tower-Istanbul-Turkey.jpg"
  },
  {
    name: "Dolmabahçe Sarayı",
    lat: 41.0390,
    lng: 29.0005,
    cost: "850 TL",
    reviews: "Boğaz manzarasıyla birlikte saray çok etkileyici.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Dolmabah%C3%A7e_Palace_Bosphorus.jpg"
  },
  {
    name: "Hilton Bomonti Otel",
    lat: 41.0661,
    lng: 28.9795,
    cost: "-",
    reviews: "Kongre, toplantı ve konaklama için ideal.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/257124031.jpg"
  },
  {
    name: "Süleymaniye Camii",
    lat: 41.0165,
    lng: 28.9632,
    cost: "Ücretsiz",
    reviews: "Sessiz, geniş avlulu ve muhteşem manzaralı.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/S%C3%BCleymaniye_Mosque_Istanbul_Turkey.jpg"
  },
  {
    name: "Yerebatan Sarnıcı",
    lat: 41.0083,
    lng: 28.9779,
    cost: "620 TL",
    reviews: "Atmosfer çok etkileyici, sesli rehber önerilir.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Yerebatan_Cistern_Istanbul_2022.jpg"
  },
  {
    name: "İstiklal Caddesi",
    lat: 41.0369,
    lng: 28.9850,
    cost: "Ücretsiz",
    reviews: "Canlı, eğlenceli, yürüyüş ve alışveriş için harika.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Istiklal_Caddesi_2023.jpg"
  },
  {
    name: "Mısır Çarşısı",
    lat: 41.0164,
    lng: 28.9706,
    cost: "Ücretsiz",
    reviews: "Baharatlar ve hediyelikler için ideal. Kalabalık olabilir.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Misircarsisi_Istanbul_inside.jpg"
  }
];

const map = L.map('map').setView([41.01, 28.98], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

locations.forEach(loc => {
  const marker = L.marker([loc.lat, loc.lng]).addTo(map);
  const content = `
    <div class="info-box">
      <img src="${loc.image}" alt="${loc.name}" />
      <h3>${loc.name}</h3>
      <p><strong>Maliyet:</strong> ${loc.cost}</p>
      <p><strong>Yorum:</strong> ${loc.reviews}</p>
    </div>
  `;
  marker.bindPopup(content);
});
