const shipments = [
  { id: 'ER-8041', destination: 'حي العليا', district: 'الرياض', address: 'شارع التحلية، حي العليا', driver: 'سارة الحربي', initials: 'سح', status: 'active', eta: '١٢:٤٠ م', progress: 68, distance: 18.4, duration: 34, cost: 21.8, co2: 1.42, savings: 5.6, x: 515, y: 145, stops: ['مركز التجميع — السلي', 'حي الملز', 'شارع التحلية — العليا'], warning: false },
  { id: 'ER-8038', destination: 'حي الروضة', district: 'جدة', address: 'شارع صاري، حي الروضة', driver: 'عمر القحطاني', initials: 'عق', status: 'active', eta: '١:٠٥ م', progress: 43, distance: 12.7, duration: 29, cost: 18.2, co2: 1.08, savings: 4.2, x: 328, y: 239, stops: ['مستودع جدة', 'حي السلامة', 'شارع صاري — الروضة'], warning: false },
  { id: 'ER-8036', destination: 'حي الشاطئ', district: 'الدمام', address: 'طريق الخليج، حي الشاطئ', driver: 'ريم المطيري', initials: 'رم', status: 'delayed', eta: '١:٢٥ م', progress: 28, distance: 24.1, duration: 51, cost: 30.5, co2: 2.12, savings: 2.8, x: 674, y: 207, stops: ['مركز الدمام', 'حي الفيصلية', 'طريق الخليج — الشاطئ'], warning: true },
  { id: 'ER-8031', destination: 'حي الملقا', district: 'الرياض', address: 'طريق أنس بن مالك، الملقا', driver: 'فيصل السبيعي', initials: 'فس', status: 'active', eta: '١٢:٥٥ م', progress: 81, distance: 16.2, duration: 31, cost: 19.4, co2: 1.27, savings: 6.1, x: 585, y: 82, stops: ['مركز التجميع — السلي', 'حي الياسمين', 'طريق أنس بن مالك — الملقا'], warning: false },
  { id: 'ER-8027', destination: 'حي الورود', district: 'الرياض', address: 'شارع الأمير سلطان، الورود', driver: 'نورة العتيبي', initials: 'نع', status: 'delivered', eta: '١١:٥٨ ص', progress: 100, distance: 9.8, duration: 22, cost: 13.9, co2: .81, savings: 4.9, x: 447, y: 96, stops: ['مركز التجميع — السلي', 'حي النخيل', 'شارع الأمير سلطان — الورود'], warning: false },
  { id: 'ER-8025', destination: 'حي الشرفية', district: 'جدة', address: 'طريق المدينة، الشرفية', driver: 'عبدالله الدوسري', initials: 'عد', status: 'active', eta: '١:١٨ م', progress: 57, distance: 14.5, duration: 36, cost: 22.4, co2: 1.38, savings: 3.9, x: 241, y: 145, stops: ['مستودع جدة', 'حي البوادي', 'طريق المدينة — الشرفية'], warning: false },
  { id: 'ER-8021', destination: 'حي الفيصلية', district: 'الدمام', address: 'شارع عمر بن الخطاب، الفيصلية', driver: 'سلطان الشهري', initials: 'سش', status: 'active', eta: '١:٣٢ م', progress: 34, distance: 21.3, duration: 46, cost: 27.6, co2: 1.95, savings: 5.2, x: 729, y: 119, stops: ['مركز الدمام', 'حي النور', 'شارع عمر بن الخطاب — الفيصلية'], warning: false },
  { id: 'ER-8017', destination: 'حي السليمانية', district: 'الرياض', address: 'شارع الملك عبدالعزيز، السليمانية', driver: 'هند العنزي', initials: 'هع', status: 'delivered', eta: '١١:٤٤ ص', progress: 100, distance: 11.6, duration: 26, cost: 16.3, co2: .96, savings: 3.7, x: 397, y: 183, stops: ['مركز التجميع — السلي', 'حي المربع', 'شارع الملك عبدالعزيز — السليمانية'], warning: false },
  { id: 'ER-8011', destination: 'حي الحمدانية', district: 'جدة', address: 'شارع الحمدانية العام', driver: 'خالد الحربي', initials: 'خح', status: 'delayed', eta: '١:٤٦ م', progress: 19, distance: 28.2, duration: 58, cost: 33.7, co2: 2.41, savings: 2.4, x: 183, y: 223, stops: ['مستودع جدة', 'حي الفلاح', 'شارع الحمدانية العام'], warning: true },
  { id: 'ER-8009', destination: 'حي النخيل', district: 'الرياض', address: 'طريق الأمير تركي، حي النخيل', driver: 'ليان الغامدي', initials: 'لغ', status: 'active', eta: '١:١٠ م', progress: 73, distance: 13.9, duration: 28, cost: 17.1, co2: 1.06, savings: 5.4, x: 536, y: 111, stops: ['مركز التجميع — السلي', 'حي الياسمين', 'طريق الأمير تركي — النخيل'], warning: false },
  { id: 'ER-8005', destination: 'حي الروابي', district: 'الدمام', address: 'شارع الملك فهد، الروابي', driver: 'ماجد السبيعي', initials: 'مس', status: 'delivered', eta: '١١:٣١ ص', progress: 100, distance: 10.4, duration: 24, cost: 14.8, co2: .88, savings: 4.5, x: 703, y: 163, stops: ['مركز الدمام', 'حي الجامعيين', 'شارع الملك فهد — الروابي'], warning: false },
  { id: 'ER-8002', destination: 'حي السلامة', district: 'جدة', address: 'شارع الأمير سلطان، السلامة', driver: 'دانة العمري', initials: 'دع', status: 'active', eta: '١:٢٢ م', progress: 49, distance: 15.8, duration: 37, cost: 23.2, co2: 1.46, savings: 4.1, x: 281, y: 182, stops: ['مستودع جدة', 'حي الزهراء', 'شارع الأمير سلطان — السلامة'], warning: false }
];

const appState = {
  page: 'overview',
  period: 'week',
  region: 'all',
  status: 'all',
  driver: 'all',
  search: '',
  optimized: false,
  mapZoom: 1,
  selectedShipment: null,
  toastTimer: null,
  scenario: 0,
  livePulse: 0,
  fuel: { dailyKm: 120, vehicleCount: 8, daysPerMonth: 26, dieselLitersPer100: 9.5, evKwhPer100: 21, dieselSarPerLitre: 1.79, electricitySarPerKwh: 0.18 },
  currentPage: 1
};

const pageCopy = {
  overview: ['النظرة العامة', 'مسارات أذكى. أثر أخف.', 'صباح الخير، أمل. إليك صورة واضحة لعمليات التوصيل اليوم.'],
  tracking: ['التوصيلات', 'كل توصيل، على مرأى منك.', 'تابعي حركة الشحنات والسائقين، من أول محطة حتى باب العميل.'],
  analytics: ['التحليلات', 'الأثر الذي تصنعه قراراتك.', 'شاهدي كيف تتحول المسارات الأذكى إلى وفورات قابلة للقياس.'],
  optimizer: ['محسّن المسارات', 'الطريق الأقصر يبدأ من هنا.', 'شغّلي سيناريو التحسين ووازني بين الوقت والتكلفة والأثر البيئي.'],
  fuel: ['محاكاة الوقود', 'كلفة أقل لكل كيلومتر.', 'قارني مصروف أسطول الديزل والكهرباء وعدّلي افتراضات مركباتك وتعرفة الطاقة.']
};

const periodFactor = { week: 1, month: 4.25, quarter: 12.7 };
const periodLabels = { week: 'الأسبوع', month: 'الشهر', quarter: 'الربع' };
const regionFactor = { all: 1, riyadh: .48, jeddah: .32, dammam: .2 };
const regionLabels = { all: 'كل المناطق', riyadh: 'الرياض', jeddah: 'جدة', dammam: 'الدمام' };
const statusLabels = { active: 'في الطريق', delivered: 'تم التسليم', delayed: 'متأخر' };
const statusClass = { active: 'status-active', delivered: 'status-delivered', delayed: 'status-delayed' };
const periodArrays = {
  week: [40, 53, 47, 63, 56, 71, 62, 80, 69, 75, 58, 84, 66, 74],
  month: [46, 50, 58, 48, 66, 58, 70, 61, 75, 68, 81, 64, 76, 87],
  quarter: [49, 55, 50, 61, 67, 57, 72, 65, 77, 70, 83, 72, 81, 91]
};

const iconPaths = {
  spark: '<path d="m12 2 1.5 7 7 1.5-7 1.5-1.5 7-1.5-7L4 10.5 10.5 9 12 2Z"/><path d="m19 15 .8 3.2L23 19l-3.2.8L19 23l-.8-3.2L15 19l3.2-.8L19 15Z"/>',
  box: '<path d="m3 7 9-4 9 4-9 4-9-4Z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/>',
  wallet: '<rect x="3" y="6" width="18" height="15" rx="2"/><path d="M3 9h18M16 15h2"/><path d="M6 6V4h13"/>',
  leaf: '<path d="M20 4c-8 0-14 3-14 10 0 3 2 5 5 5 7 0 9-7 9-15Z"/><path d="M5 21c3-6 7-9 12-12"/>',
  route: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h3a3 3 0 0 0 3-3v-2a3 3 0 0 1 3-3h1"/>',
  arrow: '<path d="M7 17 17 7M8 7h9v9"/>',
  pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  time: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
};

function icon(name, size = 15) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.spark}</svg>`;
}

function activeShipments() {
  return shipments.filter((item) => appState.region === 'all' || item.district.toLowerCase() === appState.region);
}

function formatCurrency(value) {
  return `$${Math.round(value).toLocaleString('en-US')}`;
}

function scale(value) {
  return value * periodFactor[appState.period] * regionFactor[appState.region] * (appState.scenario ? 1.045 : 1);
}

function metricCard({ label, value, suffix = '', change, note, iconName, tone = '', trend = '' }) {
  const sparklines = {
    deliveries: 'M2 15 9 11 15 13 21 6 28 10 36 5 43 8 50 3 58 5',
    savings: 'M2 17 9 15 15 10 22 12 29 7 36 10 44 4 51 6 58 2',
    carbon: 'M2 16 8 13 14 15 22 9 30 12 37 7 44 8 51 3 58 5',
    routes: 'M2 14 8 11 14 14 21 7 29 10 36 5 44 8 51 3 58 4'
  };
  const spark = sparklines[trend] || sparklines.routes;
  return `<article class="metric-card">
    <div class="metric-top"><span class="metric-label">${label}</span><span class="metric-icon ${tone}">${icon(iconName, 15)}</span></div>
    <div class="metric-value">${value}<small>${suffix}</small></div>
    <div class="metric-foot"><span class="metric-trend">↗ ${change}</span><span>${note}</span><svg class="metric-spark" viewBox="0 0 60 22" fill="none" aria-hidden="true"><path d="${spark}" stroke="#71A57C" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="${spark} L58 21 L2 21Z" fill="#DCEBDD" opacity=".45"/></svg></div>
  </article>`;
}

function svgChart() {
  const values = periodArrays[appState.period];
  const bars = values.map((height, index) => {
    const label = appState.period === 'week' ? ['٢٨','٢٩','٣٠','١','٢','٣','٤'][index % 7] : `${index + 1}`;
    const current = index === values.length - 1;
    return `<div class="bar-column" data-label="${label}" title="${label} أكتوبر"><span class="bar" style="height:${Math.max(20, height * .72)}%"></span><span class="bar ${current ? 'current' : ''}" style="height:${height}%"></span></div>`;
  }).join('');
  return `<div class="chart-area"><div class="cost-bars" role="img" aria-label="مخطط أعمدة يوضح مقارنة التكلفة الحالية والمعتادة خلال ${periodLabels[appState.period]}">${bars}</div></div>`;
}

function co2Chart(className = '') {
  const values = appState.period === 'week' ? [62, 56, 59, 48, 51, 37, 40, 28, 33, 22, 26, 15] : appState.period === 'month' ? [66, 61, 54, 58, 46, 49, 39, 35, 37, 26, 24, 16] : [69, 63, 60, 52, 55, 44, 40, 36, 30, 28, 19, 13];
  const coords = values.map((value, index) => `${22 + index * 44},${12 + value}`).join(' ');
  const area = `M${coords.replaceAll(' ', ' L')} L506,88 L22,88 Z`;
  return `<svg class="co2-chart ${className}" viewBox="0 0 528 94" preserveAspectRatio="none" role="img" aria-label="اتجاه الانبعاثات المخفّضة"><defs><linearGradient id="co2fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#86b47f" stop-opacity=".25"/><stop offset="1" stop-color="#86b47f" stop-opacity="0"/></linearGradient></defs><path d="${area}" fill="url(#co2fill)"/><polyline points="${coords}" fill="none" stroke="#5c956d" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="506" cy="${12 + values[values.length - 1]}" r="3.7" fill="#fff" stroke="#3d8159" stroke-width="2"/></svg>`;
}

function chartPanel() {
  const total = formatCurrency(scale(2840 + appState.livePulse * 12));
  const co2 = (scale(1.24 + appState.livePulse * .004)).toFixed(2);
  return `<section class="charts-grid">
    <article class="panel chart-panel">
      <div class="panel-header"><div class="panel-title-wrap"><div><h2>وفورات تكلفة الشحن</h2><p class="panel-subtitle">مقارنة تكلفة المسار بعد التحسين بالسابق</p></div></div><div class="chart-header-extra"><div class="chart-legend"><span><i class="chart-dot"></i> محسّن</span><span><i class="chart-dot muted"></i> سابق</span></div><button class="icon-button" data-action="export" aria-label="تصدير بيانات التوفير">↓</button></div></div>
      ${svgChart()}
      <div class="chart-total"><b>${total}</b><span>إجمالي ما وفرناه خلال ${periodLabels[appState.period]}</span></div>
    </article>
    <article class="panel chart-panel">
      <div class="panel-header"><div class="panel-title-wrap"><div><h2>أثر كربوني أخف</h2><p class="panel-subtitle">انبعاثات تم تجنّبها عبر تحسين المسارات</p></div></div><span class="co2-comparison">−18.6%</span></div>
      <div class="co2-summary"><div class="co2-main"><b>${co2}</b><span>طن CO₂ مخفّض</span></div><span class="metric-trend">↗ 12.4%</span></div>
      ${co2Chart()}
      <div class="co2-axis"><span>الأسبوع ١</span><span>الأسبوع ٢</span><span>الأسبوع ٣</span><span>الآن</span></div>
    </article>
  </section>`;
}

function tableMarkup({ compact = false } = {}) {
  const filtered = activeShipments().filter((item) => {
    const search = appState.search.trim().toLowerCase();
    const matchesText = !search || [item.id, item.destination, item.district, item.driver].some((value) => value.toLowerCase().includes(search));
    const matchesStatus = appState.status === 'all' || item.status === appState.status;
    const matchesDriver = appState.driver === 'all' || item.driver === appState.driver;
    return matchesText && matchesStatus && matchesDriver;
  });
  const shown = compact ? filtered.slice(0, 5) : filtered;
  const rows = shown.map((item) => `<tr tabindex="0" role="button" data-action="details" data-id="${item.id}" aria-label="تفاصيل التوصيل ${item.id}">
    <td><span class="order-id">${escapeHtml(item.id)}</span></td>
    <td><span class="destination-cell"><span class="destination-pin">⌖</span><span class="destination-copy"><b>${escapeHtml(item.destination)}</b><small>${escapeHtml(item.district)}، السعودية</small></span></span></td>
    <td><span class="driver-cell"><span class="driver-avatar">${escapeHtml(item.initials)}</span>${escapeHtml(item.driver)}</span></td>
    <td><span class="status-badge ${statusClass[item.status]}">${statusLabels[item.status]}</span></td>
    <td><span class="order-id">${item.eta}</span></td>
    <td>${item.distance} كم</td>
    <td>${item.cost.toFixed(1)}$</td>
    <td><button class="button button-quiet" data-action="details" data-id="${item.id}">التفاصيل ←</button></td>
  </tr>`).join('');
  const driverOptions = [...new Set(shipments.map((item) => item.driver))].map((name) => `<option value="${name}" ${appState.driver === name ? 'selected' : ''}>${name}</option>`).join('');
  return `<article class="panel table-panel ${compact ? '' : 'tracking-table-card'}">
    <div class="panel-header"><div class="panel-title-wrap"><div><h2>${compact ? 'التوصيلات النشطة' : 'جميع التوصيلات'}</h2><p class="panel-subtitle">${compact ? 'آخر تحديث لحركة الطلبات في مناطقك' : 'ابحثي وفلّتري حسب الحالة أو السائق أو المنطقة'}</p></div></div><div class="table-toolbar">
      <label class="search-box"><span aria-hidden="true">⌕</span><input id="shipment-search" type="search" placeholder="بحث برقم الطلب أو الحي..." value="${escapeHtml(appState.search)}" aria-label="بحث في التوصيلات" /></label>
      <select id="status-filter" class="filter-select" aria-label="تصفية حسب الحالة"><option value="all">كل الحالات</option><option value="active" ${appState.status === 'active' ? 'selected' : ''}>في الطريق</option><option value="delivered" ${appState.status === 'delivered' ? 'selected' : ''}>تم التسليم</option><option value="delayed" ${appState.status === 'delayed' ? 'selected' : ''}>متأخر</option></select>
      ${compact ? '' : `<select id="driver-filter" class="filter-select" aria-label="تصفية حسب السائق"><option value="all">كل السائقين</option>${driverOptions}</select>`}
      ${compact ? `<button class="button button-quiet" data-page="tracking">عرض الكل ←</button>` : `<button class="button button-secondary button-small" data-action="new-shipment">＋ إضافة توصيل</button><button class="button button-secondary button-small" data-action="export">تصدير CSV ↓</button>`}
    </div>
    <div class="table-scroll"><table><thead><tr><th>رقم الطلب</th><th>الوجهة</th><th>السائق</th><th>الحالة</th><th>الوصول المتوقع</th><th>المسافة</th><th>التكلفة</th><th></th></tr></thead><tbody>${rows || '<tr><td class="empty-state" colspan="8">لا توجد توصيلات تطابق البحث.</td></tr>'}</tbody></table></div>
    ${compact ? '' : `<div class="table-footer"><span>عرض ${shown.length} من ${filtered.length} توصيلات في ${regionLabels[appState.region]}</span><span class="table-page-controls"><button disabled aria-label="السابق">‹</button><button aria-label="الصفحة ١">١</button><button aria-label="التالي">›</button></span></div>`}
  </article>`;
}

function mapSvg() {
  const markers = activeShipments().slice(0, 9).map((item) => `<g class="map-marker ${item.warning ? 'warning' : ''} ${item.status === 'delivered' ? 'done' : ''}" transform="translate(${item.x} ${item.y})" data-action="details" data-id="${item.id}" tabindex="0" role="button" aria-label="فتح تفاصيل ${item.id}"><circle class="marker-shadow" cx="1" cy="3" r="12"/><circle class="marker-body" r="10"/><circle class="marker-inner" r="3.4"/><circle r="15" fill="transparent"/></g>`).join('');
  const city = appState.region === 'jeddah' ? 'جدة' : appState.region === 'dammam' ? 'الدمام' : 'الرياض';
  return `<svg class="map-svg" viewBox="0 0 800 310" preserveAspectRatio="xMidYMid slice" role="img" aria-label="خريطة توصيل تجريبية تفاعلية في ${city}">
    <g class="map-scale" style="transform:scale(${appState.mapZoom})">
      <path class="map-water" d="M-15 278 C108 244 129 183 236 198s104 62 193 32 149-95 225-87 112 24 183-14" />
      <path class="map-park" d="M52 31 171 18l19 48-71 40-78-21Z"/><path class="map-park" d="m603 20 130 18-11 57-92 8-42-36Z"/><path class="map-park" d="m356 218 78-13 26 57-74 27-39-31Z"/><path class="map-park" d="m14 188 66-21 39 45-18 41-81-7Z"/><path class="map-park" d="m537 233 103-35 46 44-28 44-124-3Z"/>
      <path class="map-block" d="m210 29 43 4-8 34-43-3Z"/><path class="map-block" d="m267 39 51 4-8 36-51-4Z"/><path class="map-block" d="m336 43 41 3-7 33-43-2Z"/><path class="map-block" d="m433 36 49 5-4 34-48-4Z"/><path class="map-block" d="m501 50 43 4-7 40-42-3Z"/><path class="map-block" d="m115 122 55 3-8 37-51-4Z"/><path class="map-block" d="m199 116 46 3-7 40-45-3Z"/><path class="map-block" d="m276 121 53 4-6 39-50-3Z"/><path class="map-block" d="m389 123 48 5-6 43-49-5Z"/><path class="map-block" d="m490 116 48 4-6 39-47-4Z"/><path class="map-block" d="m574 112 54 5-6 40-52-3Z"/><path class="map-block" d="m151 207 48 3-7 39-50-3Z"/><path class="map-block" d="m243 216 48 4-6 34-47-4Z"/><path class="map-block" d="m463 180 52 3-9 41-49-4Z"/><path class="map-block" d="m674 163 57 7-6 44-55-7Z"/>
      <path class="map-road-edge" d="M-20 100 C144 119 235 85 339 96s186 46 311 17 119-36 178-16"/><path class="map-road" d="M-20 100 C144 119 235 85 339 96s186 46 311 17 119-36 178-16"/>
      <path class="map-road-edge" d="M90-30 C93 51 135 93 134 153s-22 100-10 195"/><path class="map-road" d="M90-30 C93 51 135 93 134 153s-22 100-10 195"/>
      <path class="map-road-edge" d="M330-20 C306 55 324 110 355 155s56 81 34 170"/><path class="map-road" d="M330-20 C306 55 324 110 355 155s56 81 34 170"/>
      <path class="map-road-edge" d="M572-14 C552 67 595 113 589 167s-17 82 15 157"/><path class="map-road" d="M572-14 C552 67 595 113 589 167s-17 82 15 157"/>
      <path class="map-road-small" d="M-5 169 201 190l192-18 193 11 217-22M-5 253l159-31 176 20 196-47 189 27M198-4l-10 102 27 105-3 113M452-2l-13 76 17 111-17 125M720-8l-27 93 13 106-22 114M3 48l128 18 163-16 161 27 195-25 152 25M21 293l75-79 37-74 103-90M272 306l74-85 88-53 113-78 87-59M513 302l-10-100 28-91-9-98"/>
      <path class="map-route" d="M142 249 C166 227 177 203 201 190 S257 176 276 151 S314 126 338 97 S414 105 452 109 S501 125 544 112 S596 100 632 98"/>
      <path class="map-route route-two" d="M184 226 C204 208 233 212 253 193 S297 165 321 156 360 156 386 172 S436 196 472 190 520 172 557 178"/>
      <path class="map-route route-three" d="M552 53 C565 77 569 99 589 118 S622 146 640 166 671 186 704 205"/>
      <text x="75" y="151" class="map-label">حي الملقا</text><text x="254" y="79" class="map-label">حي النخيل</text><text x="463" y="236" class="map-label">حي الملز</text><text x="651" y="70" class="map-label">حي الياسمين</text><text x="142" y="283" class="map-label">مركز التجميع</text>
      ${markers}
    </g>
  </svg>`;
}

function mapPanel({ tracking = false } = {}) {
  return `<article class="panel ${tracking ? 'tracking-map' : ''}">
    <div class="panel-header"><div class="panel-title-wrap"><div><h2>${tracking ? 'مركز التتبع' : 'خريطة المسارات النشطة'}</h2><p class="panel-subtitle">${activeShipments().filter((item) => item.status === 'active').length} سائقين على الطريق الآن · ${regionLabels[appState.region]}</p></div></div><div class="panel-actions"><span class="live-pill"><i class="live-dot"></i> مباشر</span><button class="icon-button" data-action="map-layers" aria-label="طبقات الخريطة">☷</button></div></div>
    <div class="map-frame"><div class="map-caption"><span class="pin-dot"></span>${regionLabels[appState.region]} · نطاق التوصيل</div>${mapSvg()}<div class="map-legend"><span class="legend-item"><i class="legend-line"></i> المسار الحالي</span><span class="legend-item"><i class="legend-line optimized"></i> المسار المحسّن</span><span class="legend-item"><i class="legend-pin"></i> سائق / طلب</span></div><div class="map-controls"><button data-action="zoom-in" aria-label="تكبير الخريطة">+</button><button data-action="zoom-out" aria-label="تصغير الخريطة">−</button></div></div>
  </article>`;
}

function optimizerCard() {
  const optimized = appState.optimized;
  return `<article class="panel optimizer-card ${optimized ? 'is-optimized' : ''}">
    <div class="panel-header"><div class="panel-title-wrap"><span class="metric-icon lime">${icon('spark', 15)}</span><div><h2>ملخص تحسين المسارات</h2><p class="panel-subtitle">تحليل ذكي لرحلات اليوم</p></div></div><span class="optimized-label">✓ جاهز</span><button class="icon-button" data-page="optimizer" aria-label="عرض محسّن المسارات">↗</button></div>
    <div class="optimizer-score"><div class="score-ring"><strong>${optimized ? '92' : '79'}<small style="font-size:7px">/100</small></strong></div><div class="score-copy"><b>${optimized ? 'خطة اليوم محسّنة' : 'فرصة تحسين واضحة'}</b><span>${optimized ? 'تمت مراجعة ١٢ مسارًا' : 'يمكن تحسين ١٢ مسارًا نشطًا'}</span></div></div>
    <div class="optimize-comparison"><div class="comparison-head"><strong>قبل وبعد التحسين</strong><span>متوسط المسار</span></div>
      <div class="comparison-row"><span>المسافة</span><div class="comparison-track"><div class="comparison-fill" style="width:100%"></div></div><span class="comparison-value">${optimized ? '14.2' : '18.6'} كم</span></div>
      <div class="comparison-row"><span>وقت الوصول</span><div class="comparison-track"><div class="comparison-fill after" style="width:${optimized ? '70%' : '88%'}"></div></div><span class="comparison-value">${optimized ? '28' : '36'} د</span></div>
      <div class="optimizer-savings"><div class="saving-chip"><small>توفير التكلفة</small><b>${optimized ? '18.6' : '0'}<span>%</span></b></div><div class="saving-chip"><small>خفض CO₂</small><b>${optimized ? '1.24' : '0'}<span> طن</span></b></div><div class="saving-chip"><small>وقت مستعاد</small><b>${optimized ? '2.4' : '0'}<span> س</span></b></div></div>
    </div>
    <div class="optimizer-recommendation"><span class="recommendation-icon">✳</span><span>${optimized ? 'الخطة الجديدة تجمع ٣ محطات قريبة وتتفادى الازدحام عند طريق الملك فهد.' : 'تجميع محطات العليا والملز يوفر ١٨ دقيقة لكل رحلة، خصوصًا قبل ذروة الظهيرة.'}</span></div>
    <div class="optimizer-bottom"><button class="button button-secondary button-small optimizer-run" data-action="optimize">${optimized ? '✓ تم تطبيق السيناريو' : 'تشغيل التحسين'} <span>←</span></button><button class="button button-quiet" data-page="optimizer">التفاصيل</button></div>
  </article>`;
}

function overviewView() {
  const count = Math.round(scale(324 + appState.livePulse));
  const saved = formatCurrency(scale(2840 + appState.livePulse * 12) * (appState.optimized ? 1.12 : 1));
  const co2 = (scale(1.24 + appState.livePulse * .004) * (appState.optimized ? 1.1 : 1)).toFixed(2);
  const cards = [
    { label: 'التوصيلات اليوم', value: count.toLocaleString('en-US'), suffix: 'طلب', change: '+8.2%', note: 'مقارنة بالفترة السابقة', iconName: 'box', trend: 'deliveries' },
    { label: 'وفورات الشحن', value: saved, suffix: '', change: '+14.6%', note: `خلال ${periodLabels[appState.period]}`, iconName: 'wallet', tone: 'lime', trend: 'savings' },
    { label: 'انبعاثات مخفّضة', value: co2, suffix: 'طن', change: '+12.4%', note: 'مقابل المسارات التقليدية', iconName: 'leaf', tone: 'blue', trend: 'carbon' },
    { label: 'كفاءة المسار', value: appState.optimized ? '92' : '87', suffix: '%', change: '+5.3%', note: 'معدل الالتزام بالخطة', iconName: 'route', tone: 'orange', trend: 'routes' }
  ].map(metricCard).join('');
  return `<div class="overview-view"><section class="metric-grid" aria-label="مؤشرات الأداء الرئيسية">${cards}</section><section class="two-column">${mapPanel()}${optimizerCard()}</section>${chartPanel()}${tableMarkup({ compact: true })}</div>`;
}

function trackingView() {
  return `<div class="view-stack"><div class="section-note"><span class="live-dot"></span><span><strong>${activeShipments().filter((item) => item.status === 'active').length} توصيلات تتحرك الآن</strong> — مواقع ومحطات تجريبية تتحدّث تلقائيًا خلال المعاينة.</span></div><div class="tracking-layout">${mapPanel({ tracking: true })}<div class="panel"><div class="panel-header"><div class="panel-title-wrap"><div><h2>السائقون الآن</h2><p class="panel-subtitle">حسب التقدم في الرحلة</p></div></div><span class="live-pill"><i class="live-dot"></i> ${activeShipments().filter((item) => item.status === 'active').length} نشط</span></div><div class="scenario-list">${activeShipments().filter((item) => item.status !== 'delivered').slice(0, 5).map((item) => `<button class="scenario-row" data-action="details" data-id="${item.id}" style="text-align:right"><span class="driver-avatar">${item.initials}</span><span class="scenario-copy"><b>${item.driver}</b><small>${item.destination} · ${item.eta}</small><span class="priority-track" style="display:block;margin-top:7px"><i class="priority-fill" style="display:block;width:${item.progress}%"></i></span></span><span class="scenario-result">${item.progress}%</span></button>`).join('')}</div></div></div>${tableMarkup()}</div>`;
}

function analyticsView() {
  const cost = formatCurrency(scale(2840 + appState.livePulse * 12));
  const emissions = (scale(1.24 + appState.livePulse * .004)).toFixed(2);
  const cards = `<section class="analytics-kpis"><article class="analytics-kpi"><small>وفورات الشحن</small><strong>${cost}</strong><span>↗ 14.6% عن الفترة السابقة</span></article><article class="analytics-kpi"><small>انبعاثات جرى تجنّبها</small><strong>${emissions} t</strong><span>↗ 12.4% تحسّن مستمر</span></article><article class="analytics-kpi"><small>متوسط خفض المسافة</small><strong>18.6%</strong><span>↗ 4.2 نقطة خلال هذا ${appState.period === 'week' ? 'الأسبوع' : appState.period === 'month' ? 'الشهر' : 'الربع'}</span></article></section>`;
  return `<div class="view-stack">${cards}<section class="charts-grid"><article class="panel chart-panel analytics-chart-large"><div class="panel-header"><div class="panel-title-wrap"><div><h2>اتجاه تكلفة الشحن</h2><p class="panel-subtitle">تكلفة المسار المحسّن مقابل المسار السابق — ${periodLabels[appState.period]}</p></div></div><span class="co2-comparison">−18.6%</span></div>${svgChart()}<div class="chart-total"><b>${cost}</b><span>وفورات تراكمية مقدّرة</span></div></article><article class="panel chart-panel analytics-chart-large"><div class="panel-header"><div class="panel-title-wrap"><div><h2>بصمتك الكربونية</h2><p class="panel-subtitle">اتجاه خفض الانبعاثات — ${regionLabels[appState.region]}</p></div></div><span class="chart-dot lime"></span></div><div class="co2-summary"><div class="co2-main"><b>${emissions}</b><span>طن CO₂ مخفّض</span></div><span class="metric-trend">↗ 12.4%</span></div>${co2Chart('co2-large')}<div class="co2-axis"><span>بداية الفترة</span><span>منتصف الفترة</span><span>الآن</span></div></article></section><article class="panel"><div class="panel-header"><div class="panel-title-wrap"><div><h2>مقارنة الفترات</h2><p class="panel-subtitle">مقاييس الاستدامة حسب النطاق الزمني المحدد</p></div></div></div><div class="month-comparison"><div class="month-chip"><small>قبل التحسين</small><b>2.18 طن</b></div><div class="month-chip"><small>بعد التحسين</small><b>${emissions} طن</b></div><div class="month-chip"><small>الفرق المتجنّب</small><b>−18.6%</b></div></div></article></div>`;
}

function optimizerView() {
  const scenarios = [
    ['تجميع محطات وسط المدينة', 'تجميع ٤ طلبات في رحلة واحدة · الرياض', '−18%'],
    ['تفادي ساعة الذروة', 'إعادة توزيع وقت الانطلاق · جدة', '−12%'],
    ['مركبات أقل انبعاثًا', 'إسناد توصيلات قصيرة لمركبة كهربائية', '−23%']
  ];
  return `<div class="view-stack"><section class="optimizer-hero"><div class="optimizer-hero-content"><span class="optimizer-eyebrow"><span>✳</span> ECO INTELLIGENCE · ${appState.optimized ? 'خطة جاهزة للتطبيق' : 'نموذج توضيحي'}</span><h2>${appState.optimized ? 'خطة اليوم جاهزة. كفاءة أعلى بأثر أقل.' : 'خلّي الخوارزمية تجد الطريق الأفضل.'}</h2><p>نوازن بين المسافة، وقت الوصول، وتكلفة كل رحلة لنقترح خطة عملية تساعد فريقك على توصيل أكثر مع استهلاك أقل.</p><button class="button" data-action="optimize">${appState.optimized ? '✓ إعادة تشغيل المحاكاة' : 'تشغيل تحسين المسارات'} <span>←</span></button></div><div class="optimizer-hero-stats"><div class="hero-stat"><small>مسافة أقل</small><b>${appState.optimized ? '18.6' : '—'}%</b></div><div class="hero-stat"><small>توفير متوقع</small><b>${appState.optimized ? '$2,840' : '—'}</b></div><div class="hero-stat"><small>وقت مستعاد</small><b>${appState.optimized ? '2.4' : '—'} ساعة</b></div><div class="hero-stat"><small>CO₂ مخفّض</small><b>${appState.optimized ? '1.24' : '—'} طن</b></div></div></section><section class="optimizer-detail-grid"><article class="panel"><div class="panel-header"><div class="panel-title-wrap"><div><h2>سيناريوهات مقترحة</h2><p class="panel-subtitle">نماذج تشغيلية توضيحية من بيانات اليوم</p></div></div><span class="nav-new">٣ اقتراحات</span></div><div class="scenario-list">${scenarios.map(([title, desc, result], index) => `<div class="scenario-row"><span class="scenario-number">0${index + 1}</span><span class="scenario-copy"><b>${title}</b><small>${desc}</small></span><span class="scenario-result">${result}</span></div>`).join('')}</div></article><article class="panel"><div class="panel-header"><div class="panel-title-wrap"><div><h2>أولويات التحسين</h2><p class="panel-subtitle">وزن كل عامل في الخطة الحالية</p></div></div></div><div class="priority-list"><div class="priority-row"><span>زمن الوصول</span><div class="priority-track"><div class="priority-fill" style="width:82%"></div></div><b>٣٥٪</b></div><div class="priority-row"><span>تكلفة الرحلة</span><div class="priority-track"><div class="priority-fill" style="width:68%"></div></div><b>٣٠٪</b></div><div class="priority-row"><span>الأثر البيئي</span><div class="priority-track"><div class="priority-fill" style="width:59%"></div></div><b>٢٥٪</b></div><div class="priority-row"><span>توزيع السائقين</span><div class="priority-track"><div class="priority-fill" style="width:29%"></div></div><b>١٠٪</b></div></div></article></section>${mapPanel()}</div>`;
}

function fuelView() {
  const fields = [
    ['dailyKm', 'المسافة اليومية لكل مركبة', 'كم/يوم', 0, 1500, 1],
    ['vehicleCount', 'عدد المركبات في الأسطول', 'مركبة', 1, 5000, 1],
    ['daysPerMonth', 'أيام التشغيل شهريًا', 'يوم', 1, 31, 1],
    ['dieselLitersPer100', 'استهلاك مركبة الديزل', 'لتر/100 كم', 0, 100, 0.1],
    ['evKwhPer100', 'استهلاك المركبة الكهربائية', 'ك.و.س/100 كم', 0, 200, 0.1],
    ['dieselSarPerLitre', 'سعر الديزل', 'ريال/لتر', 0, 20, 0.01],
    ['electricitySarPerKwh', 'تعرفة الكهرباء للشحن', 'ريال/ك.و.س', 0, 10, 0.01]
  ].map(([key, label, unit, min, max, step]) => `<label class="fuel-field" for="fuel-${key}"><span class="fuel-label">${label}</span><span class="fuel-input-wrap"><input id="fuel-${key}" data-fuel-field="${key}" type="number" min="${min}" max="${max}" step="${step}" value="${appState.fuel[key]}" inputmode="decimal"><small>${unit}</small></span></label>`).join('');

  return `<div class="view-stack fuel-view">
    <div class="section-note"><span class="live-dot"></span><span>محاكاة محلية قابلة للتعديل — أدخلي استهلاك مركباتك وتعرفة الطاقة الفعلية للحصول على مقارنة أقرب لأسطولك.</span></div>
    <section class="fuel-layout">
      <article class="panel fuel-input-panel"><div class="panel-header"><div class="panel-title-wrap"><span class="metric-icon lime">◉</span><div><h2>افتراضات الرحلة والأسطول</h2><p class="panel-subtitle">تتحدث المقارنة مباشرة عند تعديل أي قيمة</p></div></div></div><div class="fuel-input-grid">${fields}</div><div class="fuel-source-note">سعر الديزل الافتراضي 1.79 ريال/لتر وفق سعر أرامكو المنشور لسبتمبر 2026. تعرفة الكهرباء 0.18 ريال/ك.و.س افتراضية للتجربة فقط؛ استبدليها بتعرفة الشحن الفعلية.</div></article>
      <article class="panel fuel-results-panel"><div class="panel-header"><div class="panel-title-wrap"><span class="metric-icon blue">↔</span><div><h2>مقارنة التكلفة الشهرية</h2><p class="panel-subtitle">أسطول من <span id="fuel-fleet-count">${appState.fuel.vehicleCount}</span> مركبات · <span id="fuel-days-count">${appState.fuel.daysPerMonth}</span> يوم تشغيل</p></div></div><span class="live-pill"><i class="live-dot"></i> محاكاة</span></div>
        <div class="fuel-result-grid"><section class="fuel-result-card diesel-result"><span class="fuel-type"><span class="fuel-type-dot"></span> ديزل</span><small>التكلفة اليومية / مركبة</small><strong id="fuel-diesel-day">—</strong><small>التكلفة الشهرية للأسطول</small><b id="fuel-diesel-month">—</b></section><section class="fuel-result-card electric-result"><span class="fuel-type"><span class="fuel-type-dot"></span> كهربائي</span><small>التكلفة اليومية / مركبة</small><strong id="fuel-electric-day">—</strong><small>التكلفة الشهرية للأسطول</small><b id="fuel-electric-month">—</b></section></div>
        <div class="fuel-savings-card"><div><small id="fuel-saving-caption">الوفر التقديري مع التحول للكهرباء</small><strong id="fuel-saving">—</strong></div><span class="fuel-savings-rate" id="fuel-saving-rate">—</span></div>
        <div class="fuel-bars" aria-label="مقارنة التكلفة الشهرية"><div class="fuel-bar-row"><span>ديزل</span><div class="fuel-bar-track"><i id="fuel-diesel-bar" class="fuel-bar diesel-bar"></i></div></div><div class="fuel-bar-row"><span>كهربائي</span><div class="fuel-bar-track"><i id="fuel-electric-bar" class="fuel-bar electric-bar"></i></div></div></div>
        <p class="fuel-result-footnote">الحساب: المسافة × الاستهلاك لكل 100 كم × سعر الطاقة × أيام التشغيل × عدد المركبات. لا يشمل الصيانة أو الشراء أو رسوم الشحن.</p>
      </article>
    </section>
  </div>`;
}

function updateFuelResults() {
  const values = appState.fuel;
  const dieselDaily = values.dailyKm * values.dieselLitersPer100 / 100 * values.dieselSarPerLitre;
  const electricDaily = values.dailyKm * values.evKwhPer100 / 100 * values.electricitySarPerKwh;
  const dieselMonthly = dieselDaily * values.daysPerMonth * values.vehicleCount;
  const electricMonthly = electricDaily * values.daysPerMonth * values.vehicleCount;
  const saving = dieselMonthly - electricMonthly;
  const savingRate = dieselMonthly ? saving / dieselMonthly * 100 : 0;
  const money = (amount) => `ر.س ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const setText = (id, value) => { const element = document.getElementById(id); if (element) element.textContent = value; };
  setText('fuel-diesel-day', money(dieselDaily));
  setText('fuel-electric-day', money(electricDaily));
  setText('fuel-diesel-month', money(dieselMonthly));
  setText('fuel-electric-month', money(electricMonthly));
  setText('fuel-fleet-count', values.vehicleCount.toLocaleString('en-US'));
  setText('fuel-days-count', values.daysPerMonth.toLocaleString('en-US'));
  setText('fuel-saving', money(Math.abs(saving)));
  setText('fuel-saving-caption', saving >= 0 ? 'الوفر التقديري مع التحول للكهرباء' : 'زيادة التكلفة التقديرية للكهرباء');
  setText('fuel-saving-rate', `${Math.abs(savingRate).toFixed(1)}% ${saving >= 0 ? 'وفر' : 'زيادة'}`);
  const maximum = Math.max(dieselMonthly, electricMonthly, 1);
  const dieselBar = document.getElementById('fuel-diesel-bar');
  const electricBar = document.getElementById('fuel-electric-bar');
  if (dieselBar) dieselBar.style.width = `${dieselMonthly / maximum * 100}%`;
  if (electricBar) electricBar.style.width = `${electricMonthly / maximum * 100}%`;
}

function renderView() {
  const root = document.getElementById('view-root');
  const templates = { overview: overviewView, tracking: trackingView, analytics: analyticsView, optimizer: optimizerView, fuel: fuelView };
  root.innerHTML = (templates[appState.page] || overviewView)();
  document.querySelector('.heading-controls').hidden = appState.page === 'fuel';
  if (appState.page === 'fuel') updateFuelResults();
  document.querySelectorAll('.nav-item[data-page]').forEach((button) => button.classList.toggle('is-active', button.dataset.page === appState.page));
  document.getElementById('breadcrumb-title').textContent = pageCopy[appState.page][0];
  document.getElementById('page-title').textContent = pageCopy[appState.page][1];
  document.getElementById('page-description').textContent = pageCopy[appState.page][2];
  document.getElementById('nav-count').textContent = activeShipments().length;
  document.getElementById('period-select').value = appState.period;
  document.getElementById('region-select').value = appState.region;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function openDetails(id) {
  const item = shipments.find((shipment) => shipment.id === id);
  if (!item) return;
  appState.selectedShipment = id;
  const steps = item.stops.map((stop, index) => `<div class="timeline-item"><i class="timeline-bullet ${index <= (item.status === 'delivered' ? 2 : 1) ? 'done' : ''}"></i><span class="timeline-copy"><b>${escapeHtml(stop)}</b><small>${index === 0 ? 'انطلاق · ١١:١٠ ص' : index === 1 ? 'محطة مرور · تم تحديثها الآن' : `${item.status === 'delivered' ? 'تم التسليم' : 'الوصول المتوقع'} · ${escapeHtml(item.eta)}`}</small></span></div>`).join('');
  document.getElementById('overlay-root').innerHTML = `<div class="overlay-backdrop" data-action="close-overlay"><aside class="detail-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title"><div class="drawer-heading"><div><small>تفاصيل التوصيل</small><h2 id="drawer-title">${escapeHtml(item.id)}</h2></div><button class="drawer-close" data-action="close-overlay" aria-label="إغلاق">×</button></div><div class="drawer-destination"><small>الوجهة</small><b>${escapeHtml(item.destination)} · ${escapeHtml(item.district)}</b><small>${escapeHtml(item.address)}</small></div><div class="driver-cell" style="margin-bottom:15px"><span class="driver-avatar">${escapeHtml(item.initials)}</span><b style="font-size:9px">${escapeHtml(item.driver)}</b><span class="status-badge ${statusClass[item.status]}" style="margin-right:auto">${statusLabels[item.status]}</span></div><div class="drawer-metrics"><div class="drawer-metric"><small>المسافة</small><b>${item.distance} كم</b></div><div class="drawer-metric"><small>المدة المتوقعة</small><b>${item.duration} د</b></div><div class="drawer-metric"><small>تكلفة الشحن</small><b>$${item.cost}</b></div><div class="drawer-metric"><small>انبعاثات CO₂</small><b>${item.co2} كجم</b></div><div class="drawer-metric"><small>وفرنا على المسار</small><b>$${item.savings}</b></div><div class="drawer-metric"><small>التقدم</small><b>${item.progress}%</b></div></div><div class="timeline"><h3>محطات الرحلة</h3>${steps}</div><div class="section-note" style="margin-top:12px"><span class="live-dot"></span><span>آخر تحديث تجريبي: الآن · المسار محاكى</span></div></aside></div>`;
}

function closeOverlay() {
  document.getElementById('overlay-root').innerHTML = '';
  appState.selectedShipment = null;
}

function toast(message, iconText = '✓') {
  const root = document.getElementById('toast-root');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="toast-icon">${iconText}</span><span>${message}</span>`;
  root.append(el);
  window.setTimeout(() => { el.classList.add('toast-exit'); window.setTimeout(() => el.remove(), 220); }, 3300);
}

function runOptimizer() {
  appState.optimized = true;
  appState.scenario = 1;
  renderView();
  toast('اكتمل تحسين ١٢ مسارًا — وفورات محاكاة ١٨٫٦٪', '✳');
}

function addShipmentModal() {
  const drivers = [...new Set(shipments.map((item) => item.driver))];
  document.getElementById('overlay-root').innerHTML = `<div class="overlay-backdrop" data-action="close-overlay"><form id="new-shipment-form" class="modal-card" role="dialog" aria-modal="true" aria-labelledby="new-shipment-title"><div class="modal-head"><div><h2 id="new-shipment-title">إضافة توصيل تجريبي</h2><p>أضيفي شحنة إلى بيانات النموذج الأولي المحلية.</p></div><button type="button" class="drawer-close" data-action="close-overlay" aria-label="إغلاق">×</button></div><div class="form-field"><label for="new-order">رقم الطلب</label><input id="new-order" name="order" placeholder="ER-8050" required pattern="[A-Za-z0-9-]+" /></div><div class="form-field"><label for="new-destination">الحي / الوجهة</label><input id="new-destination" name="destination" placeholder="حي الياسمين" required /></div><div class="form-field"><label for="new-region">المنطقة</label><select id="new-region" name="region"><option value="الرياض">الرياض</option><option value="جدة">جدة</option><option value="الدمام">الدمام</option></select></div><div class="form-field"><label for="new-driver">السائق</label><select id="new-driver" name="driver">${drivers.map((driver) => `<option value="${driver}">${driver}</option>`).join('')}</select></div><div class="modal-footer"><button class="button button-primary" type="submit">إضافة إلى المحاكاة ←</button><button class="button button-secondary" type="button" data-action="close-overlay">إلغاء</button></div></form></div>`;
  document.getElementById('new-order').focus();
}

function exportCsv() {
  const data = activeShipments().map((item) => [item.id, item.destination, item.district, item.driver, statusLabels[item.status], item.distance, item.cost, item.co2]);
  const csv = [['رقم الطلب', 'الوجهة', 'المنطقة', 'السائق', 'الحالة', 'المسافة كم', 'التكلفة USD', 'CO2 kg'], ...data].map((row) => row.map((field) => `"${String(field).replaceAll('"', '""')}"`).join(',')).join('\n');
  const url = URL.createObjectURL(new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'ecoroute-deliveries.csv';
  link.click();
  URL.revokeObjectURL(url);
  toast('تم تجهيز ملف التوصيلات للتنزيل.');
}

function handleAction(target) {
  const actionElement = target.closest('[data-action], [data-page]');
  if (!actionElement) return;
  if (actionElement.dataset.page) {
    appState.page = actionElement.dataset.page;
    renderView();
    return;
  }
  const action = actionElement.dataset.action;
  if (action === 'details') { openDetails(actionElement.dataset.id); return; }
  if (action === 'optimize') { runOptimizer(); return; }
  if (action === 'close-overlay') { if (target === actionElement) closeOverlay(); else if (actionElement.classList.contains('drawer-close')) closeOverlay(); return; }
  if (action === 'export') { exportCsv(); return; }
  if (action === 'zoom-in' || action === 'zoom-out') {
    appState.mapZoom = Math.max(.88, Math.min(1.2, appState.mapZoom + (action === 'zoom-in' ? .06 : -.06)));
    document.querySelectorAll('.map-scale').forEach((element) => { element.style.transform = `scale(${appState.mapZoom})`; });
    return;
  }
  if (action === 'notifications') { toast('كل شيء يسير على الخطة — لا توجد تنبيهات عاجلة.', '♧'); return; }
  if (action === 'map-layers') { toast('طبقات المسارات والسائقين مفعّلة في هذه المحاكاة.', '⌖'); return; }
  if (action === 'help') { toast('للمساعدة: اختاري توصيلًا لعرض محطاته أو شغّلي محاكاة التحسين.', '?'); return; }
  if (action === 'settings' || action === 'profile') { toast('إعدادات مساحة العمل غير مفعّلة في النموذج الأولي.', '⚙'); return; }
}

document.addEventListener('click', (event) => handleAction(event.target));
document.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('tr[data-action="details"], .map-marker[data-action="details"]')) {
    event.preventDefault(); openDetails(event.target.dataset.id);
  }
  if (event.key === 'Escape') closeOverlay();
});

document.addEventListener('change', (event) => {
  const { id, value } = event.target;
  if (id === 'region-select') { appState.region = value; appState.currentPage = 1; renderView(); }
  if (id === 'period-select') { appState.period = value; renderView(); }
  if (id === 'status-filter') { appState.status = value; renderView(); }
  if (id === 'driver-filter') { appState.driver = value; renderView(); }
});

document.addEventListener('input', (event) => {
  const fuelField = event.target.dataset.fuelField;
  if (fuelField) {
    const bounds = { dailyKm: 1500, vehicleCount: 5000, daysPerMonth: 31, dieselLitersPer100: 100, evKwhPer100: 200, dieselSarPerLitre: 20, electricitySarPerKwh: 10 };
    const minimum = fuelField === 'vehicleCount' || fuelField === 'daysPerMonth' ? 1 : 0;
    appState.fuel[fuelField] = Math.min(bounds[fuelField], Math.max(minimum, Number(event.target.value) || 0));
    updateFuelResults();
    return;
  }
  if (event.target.id === 'shipment-search') {
    const selection = event.target.selectionStart;
    appState.search = event.target.value;
    const root = document.getElementById('view-root');
    const scrollTop = window.scrollY;
    renderView();
    const input = document.getElementById('shipment-search');
    if (input) { input.focus(); input.setSelectionRange(selection, selection); }
    window.scrollTo({ top: scrollTop, behavior: 'instant' });
  }
});

document.addEventListener('submit', (event) => {
  if (event.target.id !== 'new-shipment-form') return;
  event.preventDefault();
  const form = new FormData(event.target);
  const order = String(form.get('order')).trim().toUpperCase();
  if (shipments.some((item) => item.id === order)) { toast('رقم الطلب موجود بالفعل في بيانات المحاكاة.', '!'); return; }
  const destination = String(form.get('destination')).trim();
  const driver = String(form.get('driver'));
  const region = String(form.get('region'));
  shipments.unshift({ id: order, destination, district: region, address: `${destination}، ${region}`, driver, initials: driver.split(' ').slice(0, 2).map((word) => word[0]).join(''), status: 'active', eta: '٢:١٠ م', progress: 8, distance: 12.1, duration: 30, cost: 17.9, co2: 1.02, savings: 3.5, x: 623, y: 185, stops: ['مركز التوصيل', 'محطة الفرز', `${destination} — ${region}`], warning: false });
  closeOverlay();
  appState.page = 'tracking';
  appState.region = 'all';
  appState.status = 'all';
  appState.driver = 'all';
  appState.search = '';
  renderView();
  toast(`أُضيف التوصيل ${order} إلى المحاكاة.`);
});

document.addEventListener('click', (event) => {
  if (event.target.closest('[data-action="new-shipment"]')) addShipmentModal();
});

function updateClock() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('ar-SA', { hour: 'numeric', minute: '2-digit' });
  document.getElementById('last-updated').textContent = `آخر تحديث ${formatter.format(now)}`;
}

renderView();
updateClock();
window.setInterval(() => {
  appState.livePulse = (appState.livePulse + 1) % 4;
  const moving = shipments.filter((item) => item.status === 'active');
  if (moving.length) {
    const item = moving[appState.livePulse % moving.length];
    item.progress = Math.min(96, item.progress + 1);
  }
  updateClock();
  if (!document.getElementById('overlay-root').childElementCount && !document.activeElement?.matches('input, select')) renderView();
}, 15000);
window.setInterval(() => {
  const dot = document.querySelector('.topbar .live-dot');
  if (!dot) return;
  dot.style.opacity = dot.style.opacity === '0.45' ? '1' : '0.45';
}, 900);
